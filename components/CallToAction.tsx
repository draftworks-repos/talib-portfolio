import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Globe } from "./Globe";
import "./CallToAction.css";

export const CallToAction: React.FC = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-gradient-bg"></div>

      <div className="cta-container">
        <h2 className="cta-title">
          Crafting clean, scalable web applications.
        </h2>
        <p className="cta-subtitle">
          Join teams who build modern web products and fast-growing startups.
          <br className="desktop-br" />
          that grow without sacrificing code quality.
        </p>

        <a
          href="/contact"
          className="cta-main-button"
          style={{ textDecoration: "none" }}
        >
          <span className="cta-button-label">Get Started- It's Free</span>
          <div className="cta-button-icon-wrapper">
            <ArrowUpRight size={18} />
          </div>
        </a>

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
