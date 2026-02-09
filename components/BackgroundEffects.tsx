import React from 'react';
import './BackgroundEffects.css';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="bg-effects">
      {/* Glow Blobs */}
      <div className="hero-glow-blob glow-magenta"></div>
      <div className="hero-glow-blob glow-purple"></div>
      <div className="hero-glow-blob glow-blue"></div>

      {/* Perspective Grid Floor */}
      <div className="grid-plane"></div>

      {/* Decorative 3D Shapes */}
      <div className="floating-shape shape-capsule"></div>
      <div className="floating-shape shape-spiral"></div>

      <div className="noise-overlay"></div>
    </div>
  );
};