import React from "react";
import { motion } from "framer-motion";
import { ProjectVideo } from "./types";
import "./LogoBar.css";

interface LogoBarProps {
  projects: ProjectVideo[];
  activeProjectId: string;
  onProjectSelect: (project: ProjectVideo) => void;
}

const LogoBar: React.FC<LogoBarProps> = ({
  projects,
  activeProjectId,
  onProjectSelect,
}) => {
  return (
    <div className="logo-bar-container">
      <div className="logo-bar-card">
        <div className="logo-bar-flex">
          {projects.map((project) => {
            const isActive = activeProjectId === project.id;

            return (
              <motion.button
                key={project.id}
                onClick={() => onProjectSelect(project)}
                whileTap={{ scale: 0.96 }}
                className={`logo-btn ${isActive ? "active" : ""}`}
              >
                <div
                  className={`logo-text-wrapper ${isActive ? "active" : ""}`}
                >
                  <img
                    className="image"
                    src={project.logo}
                    alt={project.name}
                  />
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="selection-dot"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
