import React from "react";
import "./Loader.css";

interface LoaderProps {
  progress: number;
}

export const Loader: React.FC<LoaderProps> = ({ progress }) => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <div className="loader-logo">
          <span className="logo-spark"></span>
          <h2 className="loading-text">LOADING EXPERIENCE</h2>
        </div>

        <div className="progress-container">
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-stats">
            <span className="progress-number">{progress}%</span>
            <span className="progress-status">
              {progress < 30 && "Initializing..."}
              {progress >= 30 && progress < 70 && "Fetching Assets..."}
              {progress >= 70 && progress < 100 && "Polishing UI..."}
              {progress === 100 && "Ready!"}
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic background elements for premium feel */}
      <div className="loader-bg-glow"></div>
      <div className="loader-grid"></div>
    </div>
  );
};

export default Loader;
