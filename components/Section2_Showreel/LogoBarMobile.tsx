import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectVideo } from "./types";
import "./LogoBarMobile.css";

interface LogoBarMobileProps {
  projects: ProjectVideo[];
  activeProjectId: string;
  onProjectSelect: (project: ProjectVideo) => void;
}

const LogoBarMobile: React.FC<LogoBarMobileProps> = ({
  projects,
  activeProjectId,
  onProjectSelect,
}) => {
  const currentIndex = projects.findIndex((p) => p.id === activeProjectId);
  const activeProject = projects[currentIndex];

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    onProjectSelect(projects[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    onProjectSelect(projects[nextIndex]);
  };

  return (
    <div className="logo-bar-mobile-root">
      <div className="logo-bar-mobile-card">
        <button
          onClick={handlePrev}
          className="nav-arrow-btn"
          aria-label="Previous Project"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="mobile-logo-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mobile-brand-name"
            >
              {activeProject.name}
            </motion.div>
          </AnimatePresence>
          <div className="mobile-pagination">
            {projects.map((p, idx) => (
              <div
                key={p.id}
                className={`pagination-dot ${p.id === activeProjectId ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="nav-arrow-btn"
          aria-label="Next Project"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default LogoBarMobile;
