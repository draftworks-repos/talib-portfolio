import React, { useEffect, useRef } from "react";
import "./BackgroundEffects.css";

export const BackgroundEffects: React.FC = React.memo(() => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0 },
    );

    if (rootRef.current) {
      observer.observe(rootRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-effects" ref={rootRef}>
      {/* Glow Blobs */}
      <div className="hero-glow-blob glow-magenta"></div>
      <div className="hero-glow-blob glow-purple"></div>
      <div className="hero-glow-blob glow-blue"></div>

      {/* Perspective Grid Floor */}
      <div className="grid-plane"></div>

      {/* Decorative 3D Shapes */}
      <div className="floating-shape shape-code-brackets">
        <span className="bracket-right"></span>
        <span className="slash"></span>
        <span className="bracket-left"></span>
      </div>

      <div className="floating-shape shape-video-timeline">
        <div className="playhead"></div>
      </div>

      <div className="noise-overlay"></div>
    </div>
  );
});

BackgroundEffects.displayName = "BackgroundEffects";
