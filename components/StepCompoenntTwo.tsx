import React, { useEffect, useRef, useState } from "react";
import "./StepComponentTwo.css";

interface Step {
  id: number;
  title: string;
  description: string;
  list: string[];
  image: string;
}

const StepComponent: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: "Discovery & Strategy",
      description:
        "Every project begins with understanding your business, goals, audience, and technical requirements. I define the right digital approach before a single design decision is made.",
      list: [
        "Business & audience analysis",
        "Project scope definition",
        "Technology selection",
        "Clear roadmap creation",
      ],
      image:
        "https://res.cloudinary.com/dl6fs4vte/video/upload/f_auto,q_auto,w_256,ar_16:9,c_fill,vc_auto,ac_none/v1770889311/1cleanedresized_pbhz56.mp4",
    },
    {
      id: 2,
      title: "UX Planning & Architecture",
      description:
        "Before visual design, I structure user journeys and content flow to ensure usability and conversion from the foundation.",
      list: [
        "User flow mapping",
        "Wireframing",
        "Content structure planning",
        "Conversion strategy alignment",
      ],
      image:
        "https://res.cloudinary.com/dl6fs4vte/video/upload/f_auto,q_auto,w_256,ar_16:9,c_fill,vc_auto,ac_none/v1770889310/2cleaned_xxw5vp.mp4",
    },
    {
      id: 3,
      title: "Design & Development",
      description:
        "Clean interface design combined with scalable, performance-focused development built to function flawlessly across devices.",
      list: [
        "UI design systems",
        "Responsive development",
        "Web & mobile implementation",
        "Performance optimization",
      ],
      image:
        "https://res.cloudinary.com/dl6fs4vte/video/upload/f_auto,q_auto,w_256,ar_16:9,c_fill,vc_auto,ac_none/v1770889310/3cleaned_lb22cx.mp4",
    },
    {
      id: 4,
      title: "Testing & Refinement",
      description:
        "Every project is tested thoroughly to ensure usability, speed, stability, and responsiveness before launch.",
      list: [
        "Cross-device testing",
        "Performance checks",
        "Usability validation",
        "Final refinements",
      ],
      image:
        "https://res.cloudinary.com/dl6fs4vte/video/upload/f_auto,q_auto,w_256,ar_16:9,c_fill,vc_auto,ac_none/v1770889310/4cleaned_rl8pv8.mp4",
    },
    {
      id: 5,
      title: "Launch & Ongoing Support",
      description:
        "Smooth deployment with post-launch monitoring and support to ensure your platform continues to perform and scale.",
      list: [
        "Deployment & configuration",
        "Technical guidance",
        "Maintenance support",
        "Performance monitoring",
      ],
      image:
        "https://res.cloudinary.com/dl6fs4vte/video/upload/f_auto,q_auto,w_256,ar_16:9,c_fill,vc_auto,ac_none/v1770889311/5cleaned_hjxnol.mp4",
    },
  ];
  useEffect(() => {
    steps.forEach((step) => {
      const video = document.createElement("video");
      video.src = step.image;
      video.preload = "auto";
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(
              entry.target.getAttribute("data-step-id") || "0",
            );
            setTimeout(() => {
              setVisibleSteps((prev) => {
                if (!prev.includes(stepId)) {
                  return [...prev, stepId];
                }
                return prev;
              });
            }, stepId * 150); // Stagger the animations
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      },
    );

    const stepElements = containerRef.current?.querySelectorAll(".step-item");
    stepElements?.forEach((element) => observer.observe(element));

    return () => {
      stepElements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    stepId: number,
  ) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
    setHoveredStep(stepId);
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  return (
    <div className="step-component-wrapper">
      <div className="step-component-container" ref={containerRef}>
        <div className="steps-header">
          <h1 className="steps-title">How I Work</h1>
          <p className="steps-subtitle">
            A structured, transparent approach designed to deliver clarity,
            performance, and long-term scalability.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step-item ${visibleSteps.includes(step.id) ? "visible" : ""}`}
              data-step-id={step.id}
              onMouseMove={(e) => handleMouseMove(e, step.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="step-number">
                <span>{String(step.id).padStart(2, "0")}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-list">
                  <ul>
                    {step.list.map((item, index) => (
                      <li key={index} className="list-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="step-list desktop">
                <ul>
                  {step.list.map((item, index) => (
                    <li key={index} className="list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {hoveredStep !== null && (
          <div
            className="step-image"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          >
            <video
              src={steps.find((s) => s.id === hoveredStep)?.image}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StepComponent;
