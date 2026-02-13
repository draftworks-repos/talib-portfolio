"use client";

import { useEffect, useRef, useState } from "react";
import VideoShowcase from "./VideoShowcase";
import { Zap } from "lucide-react";
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
      <section data-theme="light" id="showreel" ref={sectionRef}>
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
            Core Expertise
          </h2>
          <p
            className="section-title-sub anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.2s" }}
          >
            I specialize in building scalable digital products and
            high-performing web solutions. Designed for clarity, speed, and
            measurable growth.
          </p>
        </div>
        <div className=" anim-on-scroll anim-bento-entrance">
          <VideoShowcase />
        </div>
      </section>
    </>
  );
}
