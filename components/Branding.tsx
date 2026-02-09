import React from "react";
import "./Branding.css";

export const Branding: React.FC = () => {
  return (
    <div className="branding-container">
      <h1 className="branding-title">
        Schedule a <span className="branding-italic">call</span>
      </h1>
      <p className="branding-description">
        At WebMaak, we make your vision a reality. Creative Media, Apps, and
        Digital Marketing.
      </p>
    </div>
  );
};
