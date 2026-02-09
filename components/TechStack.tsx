import React from "react";
import "./TechStack.css";

const TOOLS = [
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
  },
  {
    name: "Trello",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
