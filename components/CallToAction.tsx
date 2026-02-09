import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Globe } from "./Globe";
import "./CallToAction.css";

export const CallToAction: React.FC = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-gradient-bg"></div>

      <div className="cta-container">
        <h2 className="cta-title">Get started with Niche Geeky today</h2>
        <p className="cta-subtitle">
          Join 13k+ teams who have streamlined the way they manage
          <br className="desktop-br" />
          projects and collaborate remotely.
        </p>

        <button className="cta-main-button">
          <span className="cta-button-label">Get Started- It's Free</span>
          <div className="cta-button-icon-wrapper">
            <ArrowUpRight size={18} />
          </div>
        </button>

        {/* 3D Globe Visual Integration */}
        <div className="cta-visual-decoration">
          <Globe />
          <div className="sphere-glow"></div>
          <div className="subtle-grid"></div>
        </div>
      </div>
    </section>
  );
};
