"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Share2,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectVideo, Category } from "./types";
import "./VideoPlayer.css";

interface VideoPlayerProps {
  project: ProjectVideo;
  isLoading: boolean;
  onComplete: () => void;
  activeTab: Category;
  activeProjectId: string;
  isInView: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  project,
  isLoading,
  onComplete,
  activeTab,
  activeProjectId,
  isInView,
}) => {
  const [userPaused, setUserPaused] = useState(false); // Track if user manually paused
  const isPlaying = isInView && !userPaused; // Auto-play when in view, unless user paused
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  //   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(false);
  const [videoDuration, setVideoDuration] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const isActuallyLoading = isLoading || !iframeLoaded;

  // Shared animation transition for synchronization
  const overlayTransition: any = { duration: 0.4, ease: [0.23, 1, 0.32, 1] };

  useEffect(() => {
    // const handleResize = () => setIsMobile(window.innerWidth <= 768);
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth <= 1024);
    };

    checkTablet();
    window.addEventListener("resize", checkTablet);

    return () => window.removeEventListener("resize", checkTablet);
  }, []);

  // Listen for Vimeo player events
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only process messages from Vimeo
      if (!event.origin.includes("vimeo.com")) return;

      try {
        const data = JSON.parse(event.data);

        // Handle playProgress event (current time / duration)
        if (data.event === "playProgress" && data.data) {
          setCurrentTime(data.data.seconds);
          if (!videoDuration && data.data.duration) {
            setVideoDuration(data.data.duration);
          }
        }

        // Handle loaded/ready event for duration
        if (
          (data.event === "loaded" || data.event === "ready") &&
          data.data?.duration
        ) {
          setVideoDuration(data.data.duration);
        }
      } catch (e) {
        // Ignore non-JSON messages
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [videoDuration]);

  // Initialize Vimeo player and subscribe to events
  useEffect(() => {
    if (iframeRef.current?.contentWindow && iframeLoaded) {
      const win = iframeRef.current.contentWindow;
      const origin = new URL(project.videoUrl).origin;

      // Subscribe to playProgress events so we get current time updates
      win.postMessage(
        JSON.stringify({
          method: "addEventListener",
          value: "playProgress",
        }),
        origin,
      );
      // Get initial duration
      win.postMessage(JSON.stringify({ method: "getDuration" }), origin);
    }
  }, [iframeLoaded, project.videoUrl]);

  // Control video playback via postMessage
  useEffect(() => {
    if (iframeRef.current?.contentWindow && iframeLoaded && !isLoading) {
      const win = iframeRef.current.contentWindow;
      const origin = new URL(project.videoUrl).origin;

      win.postMessage(
        JSON.stringify({ method: "setMuted", value: isMuted }),
        origin,
      );
      win.postMessage(
        JSON.stringify({ method: "setVolume", value: isMuted ? 0 : 1 }),
        origin,
      );
      const command = isPlaying ? "play" : "pause";
      win.postMessage(JSON.stringify({ method: command }), origin);
    }
  }, [isPlaying, isMuted, isLoading, iframeLoaded, project.videoUrl, isInView]);

  // Update progress based on actual video time
  useEffect(() => {
    if (videoDuration && currentTime >= 0) {
      const newProgress = (currentTime / videoDuration) * 100;
      setProgress(newProgress);

      // Check if video completed
      if (newProgress >= 99.5) {
        onComplete();
      }
    }
  }, [currentTime, videoDuration, onComplete]);

  useEffect(() => {
    setIframeLoaded(false);
    setProgress(0);
    setUserPaused(false); // Reset pause state when project changes
    setVideoDuration(null);
    setCurrentTime(0);
  }, [project.id]);

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable full-screen mode: ${err.message}`,
          );
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const handleShare = () => {
    const tabParam = activeTab === "IT Projects" ? "it" : "media";

    const projectParam = activeProjectId;

    const shareUrl = `https://webmaak.com/#showreel?tab=${tabParam}&project=${projectParam}`;

    if (navigator.share) {
      navigator.share({
        title: project.name,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`player-wrapper ${isTablet ? "mobile-mode" : ""}`}
        onMouseEnter={() => !isTablet && setIsHovered(true)}
        onMouseLeave={() => !isTablet && setIsHovered(false)}
      >
        <div className="video-viewport">
          <iframe
            ref={iframeRef}
            src={project.videoUrl}
            onLoad={() => setIframeLoaded(true)}
            className="video-iframe"
            style={{ opacity: iframeLoaded ? 1 : 0 }}
            allow="autoplay; fullscreen"
            title={project.name}
          />

          <AnimatePresence mode="wait">
            {isActuallyLoading && (
              <motion.div
                key="loader"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="loader-overlay"
              >
                <Loader2 className="loader-icon" />
                <span className="loader-text">Loading Showcase...</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Overlay - Hidden on Mobile */}
          {!isTablet && (
            <AnimatePresence>
              {isHovered && !isActuallyLoading && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={overlayTransition}
                    className="hud-overlay"
                  >
                    <div className="top-right-actions">
                      <button
                        className="icon-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare();
                        }}
                      >
                        <Share2 size={18} className="control-icon" />
                      </button>
                    </div>

                    <div className="content-group">
                      <div className="video-info">
                        <h3 className="video-title">{project.name}</h3>
                        <div className="tags-row">
                          {project.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="tag-badge">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bottom-actions">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsMuted(!isMuted);
                          }}
                          className="icon-btn"
                        >
                          {isMuted ? (
                            <VolumeX size={18} className="control-icon" />
                          ) : (
                            <Volume2 size={18} className="control-icon" />
                          )}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFullscreen();
                          }}
                          className="icon-btn"
                        >
                          <Maximize size={18} className="control-icon" />
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="play-btn-center"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={overlayTransition}
                  >
                    <motion.button
                      // whileHover={{ scale: 1.1 }}
                      // whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setUserPaused(!userPaused);
                      }}
                      className="play-btn"
                    >
                      {isPlaying ? (
                        <Pause size={32} className="play-btn-icon" />
                      ) : (
                        <Play
                          size={32}
                          className="play-btn-icon"
                          style={{ marginLeft: "4px" }}
                        />
                      )}
                    </motion.button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          )}

          {/* Progress Bar always at bottom of viewport */}
          <div className="progress-bar-bg">
            {!isActuallyLoading && (
              <motion.div
                className="progress-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "linear" }}
              />
            )}
          </div>
        </div>

        {/* Slim Mobile Controls Bar */}
        {isTablet && !isActuallyLoading && (
          <div className="mobile-slim-controls">
            <div className="slim-left">
              <button
                onClick={() => setUserPaused(!userPaused)}
                className="slim-icon-btn"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <div className="slim-info">
                <span className="slim-title">{project.name}</span>
              </div>
            </div>
            <div className="slim-right">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="slim-icon-btn"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <button onClick={toggleFullscreen} className="slim-icon-btn">
                <Maximize size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoPlayer;
