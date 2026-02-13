import React from "react";
import "./TechStack.css";

const TOOLS = [
  {
    name: "WordPress",
    icon: "icons/wp.png",
  },
  {
    name: "CSS3",
    icon: "icons/css.png",
  },
  {
    name: "HTML5",
    icon: "icons/html.png",
  },
  {
    name: "JavaScript",
    icon: "icons/javascript.png",
  },
  {
    name: "Node.js",
    icon: "icons/nodejs.png",
  },
  {
    name: "Next Js",
    icon: "icons/next-js.png",
  },
  {
    name: "React",
    icon: "icons/react.png",
  },
  {
    name: "Shopify",
    icon: "icons/shopify-hero.png",
  },
  {
    name: "Webflow",
    icon: "icons/webflow.svg",
  },
  {
    name: "Wix",
    icon: "icons/wix.png",
  },
  {
    name: "Drammer",
    icon: "icons/frammer.png",
  },
  {
    name: "Mongo DB",
    icon: "icons/mongodb.png",
  },
];

interface TechStackProps {
  isHero?: boolean;
}

export const TechStack: React.FC<TechStackProps> = () => {
  // Double the list to ensure seamless transition in the marquee
  const marqueeItems = [...TOOLS, ...TOOLS];

  return (
    <div className="tech-stack">
      <h3 className="tech-stack-title">
        Revolutionizing Client Solutions with the Best Tools
      </h3>

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {marqueeItems.map((tool, index) => (
            <div key={`${tool.name}-${index}`} className="tech-item">
              <img src={tool.icon} alt={tool.name} className="tech-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
