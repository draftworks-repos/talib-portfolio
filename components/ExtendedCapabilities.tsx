import React, { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Zap,
  Play,
  Video,
  Scissors,
  Sparkles,
  Palette,
  Box,
  Clapperboard,
  Orbit,
  DraftingCompass,
} from "lucide-react";
import "./ServicesBento.css";

export const ExtendedCapabilities: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("item-visible");
          // Optional: stop observing once it's visible
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements that should animate on scroll
    const animatedElements =
      sectionRef.current?.querySelectorAll(".anim-on-scroll");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="media-services" className="services-section" ref={sectionRef}>
      {/* Decorative Background Elements */}
      <div className="services-bg-decor">
        <div className="abstract-light light-left-1"></div>
        <div className="abstract-light light-right-1"></div>
        <div className="abstract-light light-left-2"></div>
        <div className="abstract-light light-right-2"></div>
        <div className="abstract-light curved-ray-1"></div>
        <div className="abstract-element abstract-ring-1"></div>
        <div className="abstract-element abstract-shape-1"></div>
        <div className="abstract-element abstract-dots-1"></div>
      </div>

      <div className="section-container">
        {/* Top Header */}
        <div className="section-header">
          <div
            className="services-badge anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0s" }}
          >
            <Zap size={10} style={{ fill: "white" }} />
            {/* <Star size={10} style={{ fill: "white" }} /> */}
            <span>Services</span>
          </div>
          <h2
            className="section-title-main anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.1s" }}
          >
            Extended Capabilities
          </h2>
          <p
            className="section-title-sub anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.2s" }}
          >
            Through{" "}
            <a
              href="https://webmaak.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
              className="skill-tag"
            >
              WebMaak
            </a>{" "}
            – Technology & Media Studio, I also lead creative production and
            advanced visual solutions for brands that require complete digital
            execution.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="services-bento-grid">
          {/* Bottom Row: Two Side-by-Side Large Cards */}
          <div
            className="bento-card bento-large anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0s" }}
          >
            <div className="card-content">
              <h3 className="card-heading">Video Editing & Motion Graphics</h3>
              <p className="service-card-desc">
                High-quality video production designed to enhance brand
                communication, product presentation, and digital campaigns.
              </p>
              <div
                className="service-card-desc"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  marginTop: "15px",
                  marginLeft: "10px",
                }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Video size={14} style={{ color: "#e3d7ffff" }} />
                  Promotional & launch videos
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Scissors size={14} style={{ color: "#e3d7ffff" }} />
                  Social media & YouTube editing
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Sparkles size={14} style={{ color: "#e3d7ffff" }} />
                  Motion graphics & animated explainers
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Palette size={14} style={{ color: "#e3d7ffff" }} />
                  Branded visual storytelling
                </span>
              </div>
            </div>
            <div className="card-illustration video-preview">
              <div className="video-timeline-mockup glass">
                <div className="timeline-top">
                  <div className="play-button-ring anim-pulse-ring">
                    <Play size={24} fill="white" className="play-icon-offset" />
                  </div>
                </div>
                <div className="timeline-tracks">
                  <div className="track-row">
                    <div className="clip-block p1"></div>
                    <div className="clip-block p2"></div>
                    <div className="clip-block p2"></div>
                  </div>
                  <div className="track-row">
                    <div className="clip-block p3"></div>
                    <div className="clip-block p3"></div>
                  </div>
                  <div className="track-row">
                    <div className="clip-block p2"></div>
                    <div className="clip-block p1"></div>
                    <div className="clip-block p2"></div>
                  </div>
                  <div className="track-row">
                    <div className="clip-block p3 wave"></div>
                  </div>
                </div>
                <div className="playhead anim-timeline-scan"></div>
              </div>
            </div>
          </div>

          <div
            className="bento-card bento-large anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="card-content">
              <h3 className="card-heading"> 3D Modelling & Animation</h3>
              <p className="service-card-desc">
                Advanced 3D visuals and animations to create immersive product
                showcases and high-impact digital experiences.
              </p>
              <div
                className="service-card-desc"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  marginTop: "15px",
                  marginLeft: "10px",
                }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Box size={14} style={{ color: "#e3d7ffff" }} />
                  3D product visualization
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Clapperboard size={14} style={{ color: "#e3d7ffff" }} />
                  Animated promotional visuals
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Orbit size={14} style={{ color: "#e3d7ffff" }} />
                  Interactive 3D elements
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <DraftingCompass size={14} style={{ color: "#e3d7ffff" }} />
                  Concept modeling & rendering
                </span>
              </div>
            </div>
            <div className="card-illustration three-preview">
              <div className="three-object-mockup anim-sphere-float">
                <img src="model/model.png" alt="model" className="model" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="services-cta">
          <div
            className="anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.1s" }}
          >
            <a
              href="/contact"
              className="cta-main-button"
              style={{ textDecoration: "none" }}
            >
              <span className="cta-button-label">Schedule a Call</span>
              <div className="cta-button-icon-wrapper">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShoppingBagIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
