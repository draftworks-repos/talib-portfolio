"use client";

import { useEffect, useRef, useState } from "react";
import VideoShowcase from "./VideoShowcase";
import { Zap, ArrowUpRight } from "lucide-react";
import "./root.css";
import "./Showreel.css";

export default function RootDevelopmentPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showVideoShowcase, setVideoShowcase] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("item-visible");
          // Optional: stop observing once it's visible
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements that should animate on scroll
    const animatedElements =
      sectionRef.current?.querySelectorAll(".anim-on-scroll");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        data-theme="light"
        id="projects"
        ref={sectionRef}
        className="showreel-wrapper"
      >
        {/* Top Header */}
        <div className="section-header">
          <div
            className="services-badge anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0s" }}
          >
            <Zap size={10} style={{ fill: "white" }} />
            {/* <Star size={10} style={{ fill: "white" }} /> */}
            <span>Services</span>
          </div>
          <h2
            className="section-title-main anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.1s" }}
          >
            Featured Projects
          </h2>
          <p
            className="section-title-sub anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.2s" }}
          >
            Digital solutions designed and developed to deliver performance,
            scalability, and measurable growth.
          </p>
        </div>
        <div className=" anim-on-scroll anim-bento-entrance">
          <VideoShowcase />
        </div>
        <div className="services-cta" style={{ marginTop: "4rem" }}>
          <div
            data-coming-soon="true"
            className="anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.1s" }}
          >
            <button className="cta-main-button">
              <span className="cta-button-label">View My Work</span>
              <div className="cta-button-icon-wrapper">
                <ArrowUpRight size={18} />
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
