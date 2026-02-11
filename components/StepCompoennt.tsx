// import React, { useEffect, useRef, useState } from "react";
// import "./StepComponent.css";

// interface Step {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// const StepComponent: React.FC = () => {
//   const [hoveredStep, setHoveredStep] = useState<number | null>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const steps: Step[] = [
//     {
//       id: 1,
//       title: "Discovery",
//       description: "Explore and understand your unique needs and vision",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop&q=80",
//     },
//     {
//       id: 2,
//       title: "Strategy",
//       description: "Craft a comprehensive plan tailored to your goals",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&q=80",
//     },
//     {
//       id: 3,
//       title: "Design",
//       description: "Create stunning visuals that captivate and inspire",
//       image:
//         "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=800&fit=crop&q=80",
//     },
//     {
//       id: 4,
//       title: "Development",
//       description: "Build powerful solutions with cutting-edge technology",
//       image:
//         "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=800&fit=crop&q=80",
//     },
//     {
//       id: 5,
//       title: "Launch",
//       description: "Deploy and scale your success to new heights",
//       image:
//         "https://images.unsplash.com/photo-1640622300473-977435c38c04?w=800&h=800&fit=crop&q=80",
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const stepId = parseInt(
//               entry.target.getAttribute("data-step-id") || "0",
//             );
//             setTimeout(() => {
//               setVisibleSteps((prev) => {
//                 if (!prev.includes(stepId)) {
//                   return [...prev, stepId];
//                 }
//                 return prev;
//               });
//             }, stepId * 150); // Stagger the animations
//           }
//         });
//       },
//       {
//         threshold: 0.2,
//         rootMargin: "0px",
//       },
//     );

//     const stepElements = containerRef.current?.querySelectorAll(".step-item");
//     stepElements?.forEach((element) => observer.observe(element));

//     return () => {
//       stepElements?.forEach((element) => observer.unobserve(element));
//     };
//   }, []);

//   const handleMouseMove = (
//     e: React.MouseEvent<HTMLDivElement>,
//     stepId: number,
//   ) => {
//     setMousePosition({
//       x: e.clientX,
//       y: e.clientY,
//     });
//     setHoveredStep(stepId);
//   };

//   const handleMouseLeave = () => {
//     setHoveredStep(null);
//   };

//   return (
//     <div className="step-component-wrapper">
//       <div className="step-component-container" ref={containerRef}>
//         <div className="steps-header">
//           <h1 className="steps-title">Our Process</h1>
//           <p className="steps-subtitle">
//             Five steps to transform your vision into reality
//           </p>
//         </div>

//         <div className="steps-grid">
//           {steps.map((step, index) => (
//             <div
//               key={step.id}
//               className={`step-item ${visibleSteps.includes(step.id) ? "visible" : ""}`}
//               data-step-id={step.id}
//               onMouseMove={(e) => handleMouseMove(e, step.id)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div className="step-number">
//                 <span>{String(step.id).padStart(2, "0")}</span>
//               </div>
//               <div className="step-content">
//                 <h3 className="step-title">{step.title}</h3>
//                 <p className="step-description">{step.description}</p>
//               </div>
//               <div className="step-arrow">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M5 12H19M19 12L12 5M19 12L12 19"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>

//               {hoveredStep === step.id && (
//                 <div
//                   className="step-image"
//                   style={{
//                     left: `${mousePosition.x}px`,
//                     top: `${mousePosition.y}px`,
//                     position: "fixed",
//                     transform: "translate(-50%, -50%)",
//                     zIndex: 9999,
//                   }}
//                 >
//                   <img src={step.image} alt={step.title} />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepComponent;
import React, { useEffect, useRef, useState } from "react";
import "./StepComponent.css";

interface Step {
  id: number;
  title: string;
  description: string;
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
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop&q=80",
    },
    {
      id: 2,
      title: "UX Planning & Architecture",
      description:
        "Before visual design, I structure user journeys and content flow to ensure usability and conversion from the foundation.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Design & Development",
      description:
        "Clean interface design combined with scalable, performance-focused development built to function flawlessly across devices.",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=800&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Testing & Refinement",
      description:
        "Every project is tested thoroughly to ensure usability, speed, stability, and responsiveness before launch.",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=800&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Launch & Ongoing Support",
      description:
        "Smooth deployment with post-launch monitoring and support to ensure your platf",
      image:
        "https://images.unsplash.com/photo-1640622300473-977435c38c04?w=800&h=800&fit=crop&q=80",
    },
  ];

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
              </div>
              <div className="step-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
            <img
              src={steps.find((s) => s.id === hoveredStep)?.image}
              alt={steps.find((s) => s.id === hoveredStep)?.title}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StepComponent;
