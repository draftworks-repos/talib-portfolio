import React from "react";
import "./Branding.css";

export const Branding: React.FC = () => {
  return (
    <div className="branding-container">
      <h1 className="branding-title">
        Schedule a <span className="branding-italic">call</span>
      </h1>
      <p className="branding-description">
        Whether you're launching or improving a platform, this discussion brings
        clarity before execution
      </p>
    </div>
  );
};
