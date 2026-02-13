"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Category, ProjectVideo } from "./types";
import { PROJECT_DATA } from "./constants";
import VideoPlayer from "./VideoPlayer";
import LogoBar from "./LogoBar";
import LogoBarMobile from "./LogoBarMobile";
import "./VideoShowcase.css";

const VideoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>("IT Projects");
  const [activeProject, setActiveProject] = useState<ProjectVideo>(
    PROJECT_DATA["IT Projects"][0],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Detect when section is in viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }, // 30% of section must be visible
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Set initial loading to false after mount (fixes stuck loading on first video)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectChange = useCallback((project: ProjectVideo) => {
    setIsLoading(true);
    setActiveProject(project);

    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  const handleTabChange = (tab: Category) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    const firstProject = PROJECT_DATA[tab][0];
    handleProjectChange(firstProject);
  };

  const handleVideoComplete = useCallback(() => {
    const currentProjects = PROJECT_DATA[activeTab];
    const currentIndex = currentProjects.findIndex(
      (p) => p.id === activeProject.id,
    );

    if (currentIndex < currentProjects.length - 1) {
      handleProjectChange(currentProjects[currentIndex + 1]);
    } else {
      const nextTab: Category =
        activeTab === "IT Projects" ? "Media Projects" : "IT Projects";
      setActiveTab(nextTab);
      handleProjectChange(PROJECT_DATA[nextTab][0]);
    }
  }, [activeTab, activeProject, handleProjectChange]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="showcase-wrapper"
    >
      <div className="video-section">
        <div className="video-card">
          <div className="video-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="video-player-container"
              >
                <VideoPlayer
                  project={activeProject}
                  isLoading={isLoading}
                  onComplete={handleVideoComplete}
                  activeTab={activeTab}
                  activeProjectId={activeProject.id}
                  isInView={isInView}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="desktop-only-logos">
        <LogoBar
          projects={PROJECT_DATA[activeTab]}
          activeProjectId={activeProject.id}
          onProjectSelect={handleProjectChange}
        />
      </div>

      <div className="mobile-only-logos">
        <LogoBarMobile
          projects={PROJECT_DATA[activeTab]}
          activeProjectId={activeProject.id}
          onProjectSelect={handleProjectChange}
        />
      </div>
    </motion.div>
  );
};

export default VideoShowcase;
