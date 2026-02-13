import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./FrammerMarquee.css";

interface ClientsMarqueeProps {
  direction?: "left" | "right";
}

// Generate logos: /marquee-logo/1.png → /marquee-logo/39.png
const LOGOS = Array.from({ length: 39 }, (_, i) => ({
  id: i + 1,
  src: `/marquee-logo/${i + 1}.png`,
}));

export const FrammerMarquee: React.FC<ClientsMarqueeProps> = ({
  direction = "left",
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Triple the items so the marquee is always full
  const items = [...LOGOS, ...LOGOS, ...LOGOS];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`clients-section ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      {/* First Marquee - Main logos */}
      <div className="clients-container">
        <div className="marquee-track">
          <motion.div
            className="marquee-content-row"
            animate={{
              x: direction === "left" ? [0, "-33.33%"] : ["-33.33%", 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
            style={{
              display: "flex",
              willChange: "transform",
            }}
          >
            {items.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="client-logo-item">
                <img
                  src={logo.src}
                  alt={`Client logo ${logo.id}`}
                  className="client-logo-image"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Marquee - Text overlay */}
      <div className="clients-container two" style={{ opacity: 0.4 }}>
        <div className="marquee-track">
          <motion.div
            className="marquee-content-row"
            animate={{
              x: ["-33.33%", 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 150,
                ease: "linear",
              },
            }}
            style={{
              display: "flex",
              willChange: "transform",
            }}
          >
            {items.map((logo, index) => (
              <div
                key={`text-${logo.id}-${index}`}
                className="client-logo-item"
              >
                <span className="client-text-logo" style={{ margin: "0 4rem" }}>
                  Clients I've worked with
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
