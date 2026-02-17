import React, { useEffect, useRef, useState, Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import "./CallToAction.css";

// Lazy-load Globe (separate chunk)
const Globe = React.lazy(() =>
  import("./Globe").then((m) => ({ default: m.Globe })),
);

export const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowGlobe(true);
          observer.disconnect(); // load once only
        }
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" id="contact" ref={sectionRef}>
      <div className="cta-gradient-bg"></div>

      <div className="cta-container">
        <h2 className="cta-title">
          Ready to <span className="build">Build </span> Something That{" "}
          <span className="performs">Performs</span> and{" "}
          <span className="scales">Scales?</span>
        </h2>

        <p className="cta-subtitle">
          If you’re planning a new website or web application,
          <br className="desktop-br" />
          let’s turn your vision into a structured, high-performing solution.
        </p>

        <div className="cta-button-container">
          <a
            href="/contact"
            className="cta-main-button secondary"
            style={{ textDecoration: "none" }}
          >
            <span className="cta-button-label secondary">Schedule a Call</span>
            <div className="cta-button-icon-wrapper secondary">
              <ArrowUpRight size={18} />
            </div>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=918759475316&text=Hey%20Talib%2C%20I%20want%20start%20my%20project"
            className="cta-main-button"
            style={{ textDecoration: "none" }}
          >
            <span className="cta-button-label">Start Your Project</span>
            <div className="cta-button-icon-wrapper">
              <img src="images/whatsapp.svg" alt="" className="cta-whatsapp" />
            </div>
          </a>
        </div>

        {/* 3D Globe — loads only when visible */}
        <div className="cta-visual-decoration">
          {showGlobe && (
            <Suspense fallback={null}>
              <Globe />
            </Suspense>
          )}
          <div className="sphere-glow"></div>
          <div className="subtle-grid"></div>
        </div>
      </div>
    </section>
  );
};
