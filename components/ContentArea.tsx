"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import TalibScheduler from "./TalibScheduler";
import "./ContentArea.css";

interface ContentAreaProps {
  activeTab: string;
  onNavigate: (id: string) => void;
}

export const ContentArea: React.FC<ContentAreaProps> = ({
  activeTab,
  onNavigate,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayContent, setDisplayContent] = useState(activeTab);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>("auto");

  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setHeight(entry.target.scrollHeight);
        }
      });
      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayContent(activeTab);
      setIsTransitioning(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div
      className="content-area-root"
      style={{ height: typeof height === "number" ? `${height}px` : height }}
    >
      <div ref={contentRef} className="content-area-inner">
        {/* Header Section */}
        {/* Main Content Area */}
        <div
          className={`content-body ${isTransitioning ? "content-body-transition" : ""}`}
        >
          <div className="calendly-wrapper">
            <div className="calendly-card">
              <TalibScheduler />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
