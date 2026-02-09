import React from "react";
import { ArrowUpRight, Layers } from "lucide-react";
import { TechStack } from "./TechStack";
import "./Hero.css";

export const Hero: React.FC = () => {
  const titleText1 = "Creative Solutions";
  const titleText2 = "That Drive Growth";
  const subtext =
    "We build secure, SEO-friendly, and high-performing WordPress websites tailored to your goals.";
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-main">
          {/* Top Badge */}
          <div className="hero-badge-container anim-pop-in">
            {/* <div className="badge-line"></div> */}
            <div className="hero-badge">
              <Layers size={12} style={{ fill: "white" }} />
              <span>Apps that scales</span>
            </div>
            <div className="badge-line reversed"></div>
          </div>

          {/* Headline - Character based animation */}
          <h1 className="hero-title">
            <span className="title-inner">
              {titleText1.split("").map((char, i) => (
                <span
                  key={`t1-${i}`}
                  className="char"
                  style={{
                    animationDelay: `${i * 0.02 + 0.3}s`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}

              <br />

              {titleText2.split("").map((char, i) => (
                <span
                  key={`t2-${i}`}
                  className="char"
                  style={{
                    animationDelay: `${(i + titleText1.length) * 0.02 + 0.3}s`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </h1>

          {/* Subtext - Word based animation for better readability */}
          <div className="hero-subtext">
            <p>
              {subtext.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="word"
                  style={
                    {
                      animationDelay: `${i * 0.05 + 0.8}s`,
                    } as React.CSSProperties
                  }
                >
                  {word}&nbsp;
                </span>
              ))}
              <br />
            </p>
          </div>

          {/* Buttons - Staggered spring reveal */}
          <div className="hero-btns">
            <div
              className="anim-spring-in"
              style={{ animationDelay: "1.2s" } as React.CSSProperties}
            >
              <button className="btn-chat" data-coming-soon="true">
                <img
                  src="/icons/code.png"
                  alt="WhatsApp"
                  width={18}
                  height={18}
                />
                <span>View Portfolio</span>
              </button>
            </div>

            <div
              className="anim-spring-in"
              style={{ animationDelay: "1.35s" } as React.CSSProperties}
            >
              <button
                className="btn-quote"
                onClick={() => window.open("#contact")}
              >
                <span>Book a Call</span>
                <div className="hero-btn-icon-wrapper">
                  <ArrowUpRight size={15} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-assets"></div>
      </div>

      <div
        className="tech-stack-container anim-reveal-wide"
        style={{ animationDelay: "1.6s" } as React.CSSProperties}
      >
        <TechStack isHero />
      </div>
    </section>
  );
};
