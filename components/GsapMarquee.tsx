import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./GsapMarquee.css";

interface ClientsMarqueeProps {
  direction?: "left" | "right";
}

const LOGOS = Array.from({ length: 39 }, (_, i) => ({
  id: i + 1,
  src: `/marquee-logo/${i + 1}.png`,
}));

export const GsapMarquee: React.FC<ClientsMarqueeProps> = ({
  direction = "left",
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    if (!isVisible) return;

    // GSAP animation for first marquee
    if (marqueeRef.current) {
      const width = marqueeRef.current.offsetWidth;
      const duration = 50;

      gsap.set(marqueeRef.current, {
        x: direction === "left" ? 0 : -width / 3,
      });

      gsap.to(marqueeRef.current, {
        x: direction === "left" ? -width / 3 : 0,
        duration: duration,
        ease: "none",
        repeat: -1,
        force3D: true,
        rotation: 0.01, // Trick to force GPU acceleration
      });
    }

    // GSAP animation for second marquee
    if (marqueeRef2.current) {
      const width = marqueeRef2.current.offsetWidth;
      const duration = 150;

      gsap.set(marqueeRef2.current, { x: -width / 3 });

      gsap.to(marqueeRef2.current, {
        x: 0,
        duration: duration,
        ease: "none",
        repeat: -1,
        force3D: true,
        rotation: 0.01,
      });
    }
  }, [isVisible, direction]);

  return (
    <section
      className={`clients-section ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="clients-container">
        <div className="marquee-track">
          <div className="marquee-content-row" ref={marqueeRef}>
            {items.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="client-logo-item">
                <img
                  src={logo.src}
                  alt={`Client logo ${logo.id}`}
                  className="client-logo-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="clients-container two" style={{ opacity: 0.4 }}>
        <div className="marquee-track">
          <div className="marquee-content-row" ref={marqueeRef2}>
            {items.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="client-logo-item">
                <span className="client-text-logo" style={{ margin: "0 4rem" }}>
                  Clients I've worked with
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
