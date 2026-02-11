import React, { useEffect, useRef } from "react";
import { Zap, Star, Trophy, Clock, Users, Sparkles } from "lucide-react";
import "./AboutSection.css";

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Observer options: trigger when 15% is visible,
    // and wait until it's 100px from the bottom edge
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("item-visible");
          // Once seen, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Specifically target all elements meant for scroll-reveal
    const animatedElements =
      sectionRef.current?.querySelectorAll(".anim-on-scroll");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* Background elements to match the Hero section */}
      <div className="about-bg-glow glow-1"></div>
      <div className="about-bg-glow glow-2"></div>

      <div className="about-page-container">
        {/* Left Side: Enhanced Visual Collage */}
        <div className="about-visuals">
          <div className="collage-grid">
            {/* The main person image with a glass-like border/mask */}
            <div className="person-frame-wrapper anim-on-scroll reveal-scale">
              <div className="person-image-container">
                <img
                  src="images/talib.jpg"
                  alt="Talib Ali"
                  className="person-img"
                />
                <div className="image-overlay-gradient"></div>
              </div>
            </div>

            {/* Reimagined Glass Statistics Cards */}
            <div
              className="glass-stat-card stat-top-left floating-1 anim-on-scroll reveal-left"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="stat-icon-bg blue-glow">
                <Trophy size={18} />
              </div>
              <div className="stat-info">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
            </div>

            <div
              className="glass-stat-card stat-bottom-left floating-2 anim-on-scroll reveal-left"
              style={{ transitionDelay: "0.6s" }}
            >
              <div className="stat-icon-bg yellow-glow">
                <Clock size={18} />
              </div>
              <div className="stat-info">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years in The Digital Journey</span>
              </div>
              <div className="mini-sparkline">
                <svg viewBox="0 30 100 55" preserveAspectRatio="none">
                  {/* Area */}
                  <path
                    d="
                    M 0 78
                    C 12.5 66, 25 42, 37.5 52
                    S 62.5 72, 75 48
                    S 87.5 34, 100 40
                    L 100 100
                    L 0 100
                    Z
                  "
                    fill="rgba(255,190,77,0.15)"
                  />

                  {/* Line */}
                  <path
                    d="
                        M 0 78
                        C 12.5 66, 25 42, 37.5 52
                        S 62.5 72, 75 48
                        S 87.5 34, 100 40
                      "
                    fill="none"
                    stroke="#ffbe4d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div
              className="glass-stat-card stat-bottom-right floating-3 anim-on-scroll reveal-right"
              style={{ transitionDelay: "0.8s" }}
            >
              <div className="mini-stat-content">
                <div className="mini-stat-header">
                  <span className="mini-stat-num">95%</span>
                  <Zap size={14} className="zap-icon" fill="currentColor" />
                </div>
                <span className="mini-stat-label">Client Retention</span>
              </div>
            </div>

            <div
              className="decorative-element element-1 anim-on-scroll reveal-fade"
              style={{ transitionDelay: "1s" }}
            ></div>
            <div
              className="decorative-element element-2 "
              style={{ transitionDelay: "1.2s" }}
            ></div>
          </div>
        </div>

        {/* Right Side: Realigned Content */}
        <div className="about-content">
          <div className="about-badge-wrapper anim-on-scroll reveal-up">
            <div className="about-badge">
              <Sparkles size={12} fill="currentColor" />
              <span>The Talib Ali Story</span>
            </div>
          </div>

          <h2
            className="about-title-styled anim-on-scroll reveal-up"
            style={{ transitionDelay: "0.2s" }}
          >
            The <span className="highlight-text">Mindset</span>
          </h2>

          <div className="about-description-styled">
            <p
              className="anim-on-scroll reveal-up"
              style={{ transitionDelay: "0.3s" }}
            >
              Digital products should be{" "}
              <span className="name-highlight">
                structured, scalable, and built with long-term clarity
              </span>
              . I approach every project with a balance of{" "}
              <span className="skill-tag">
                business thinking and technical execution
              </span>
              , ensuring each solution is designed to{" "}
              <span className="name-highlight">
                perform, scale, and support measurable growth
              </span>
              .
            </p>

            <p
              className="anim-on-scroll reveal-up"
              style={{ transitionDelay: "0.4s" }}
            >
              As the <span className="name-highlight">founder of WebMaak,</span>{" "}
              <span className="skill-tag">
                I lead web and product development
              </span>{" "}
              projects while overseeing creative production through the studio.
              In 2022,{" "}
              <span className="skill-tag">Aman Ali joined WebMaak </span> and
              started the media department, expanding our capabilities into
              video production, motion graphics, and advanced visual services.
              <span className="name-highlight">
                {" "}
                Together, we combine technology and creative{" "}
              </span>
              execution to deliver complete digital solutions.
            </p>
          </div>

          <div
            className="about-actions anim-on-scroll reveal-up"
            style={{ transitionDelay: "0.6s" }}
          >
            <button className="about-primary-btn">
              <span>Read more</span>
              <Users size={18} />
            </button>
            <div className="trusted-by-mini">
              <div className="mini-avatars">
                <img src="images/1.png" alt="c1" />
                <img src="images/2.png" alt="c2" />
                <img src="images/3.png" alt="c3" />
                <div className="avatar-plus">+50</div>
              </div>
              <span>Trusted by Industry Leaders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
