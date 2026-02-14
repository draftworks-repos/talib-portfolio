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

// Double the list to ensure seamless transition in the marquee
const MARQUEE_ITEMS = [...TOOLS, ...TOOLS];

interface TechStackProps {
  isHero?: boolean;
}

export const TechStack: React.FC<TechStackProps> = React.memo(({ isHero }) => {
  return (
    <div className="tech-stack">
      <h3 className="tech-stack-title">
        Revolutionizing Client Solutions with the Best Tools
      </h3>

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {MARQUEE_ITEMS.map((tool, index) => (
            <div key={`${tool.name}-${index}`} className="tech-item">
              <img
                src={tool.icon}
                alt={tool.name}
                className="tech-icon"
                loading={isHero ? "eager" : "lazy"}
                // @ts-ignore - fetchpriority is a newer attribute
                fetchpriority={isHero ? "high" : "auto"}
                decoding="async"
                width={36}
                height={36}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

TechStack.displayName = "TechStack";
