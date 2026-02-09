"use client";

import React, { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

export const AnimatedBackground: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  // current animated values
  const current = useRef({ x: 0, y: 0 });
  // target values from mouse
  const target = useRef({ x: 0, y: 0 });

  // 🔥 TUNABLE CONTROLS
  const INTENSITY = 2; // movement range (2–4 is strong)
  const FOLLOW_SPEED = 0.18; // higher = more aggressive follow

  useEffect(() => {
    const animate = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;

      current.current.x += dx * FOLLOW_SPEED;
      current.current.y += dy * FOLLOW_SPEED;

      if (rootRef.current) {
        rootRef.current.style.setProperty("--mx", current.current.x.toFixed(2));
        rootRef.current.style.setProperty("--my", current.current.y.toFixed(2));
      }

      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;

      target.current.x = nx * 100 * INTENSITY;
      target.current.y = ny * 100 * INTENSITY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div ref={rootRef} className="bg-root">
      <div className="bg-orb bg-orb-primary" />
      <div className="bg-orb bg-orb-secondary" />
      <div className="bg-orb bg-orb-tertiary" />
      <div className="bg-floating-highlight" />
      <div className="bg-grain" />
      <div className="bg-vignette" />
    </div>
  );
};
