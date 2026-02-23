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
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [enablePreview, setEnablePreview] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

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
    const mq = window.matchMedia?.("(hover: hover) and (pointer: fine)");
    if (!mq) {
      setEnablePreview(false);
      return;
    }

    const update = () => setEnablePreview(mq.matches);
    update();

    // Safari fallback
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyMq = mq as any;
    if (typeof mq.addEventListener === "function") mq.addEventListener("change", update);
    else if (typeof anyMq.addListener === "function") anyMq.addListener(update);

    return () => {
      if (typeof mq.removeEventListener === "function")
        mq.removeEventListener("change", update);
      else if (typeof anyMq.removeListener === "function") anyMq.removeListener(update);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(
              entry.target.getAttribute("data-step-id") || "0",
            );

            if (stepId > 0) {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  if (!prev.includes(stepId)) {
                    return [...prev, stepId];
                  }
                  return prev;
                });
              }, stepId * 100); // Reduced delay for better feel
              observer.unobserve(entry.target); // Run only once
            } else if (entry.target === headerRef.current) {
              setHeaderVisible(true);
              observer.unobserve(entry.target); // Run only once
            }
          }
        });
      },
      {
        threshold: 0.1, // Sooner trigger
        rootMargin: "0px",
      },
    );

    if (headerRef.current) observer.observe(headerRef.current);
    const stepElements = containerRef.current?.querySelectorAll(".step-item");
    stepElements?.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const handleScroll = () => {
      // Always hide the floating preview during scroll to avoid jank/GPU spikes.
      if (hoverRef.current !== null) setHoveredStep(null);

      // On smaller screens, also debounce to avoid rapid state churn if touch triggers hover.
      if (window.innerWidth <= 1024) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => setHoveredStep(null), 50);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    hoverRef.current = hoveredStep;
  }, [hoveredStep]);

  const applyPreviewTransform = () => {
    rafRef.current = null;
    const el = previewRef.current;
    if (!el) return;
    const { x, y } = mouseRef.current;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    // Ensure the preview only becomes visible *after* it has been positioned,
    // so it never flashes in the top corner on first mount.
    if (el.style.opacity !== "1") {
      el.style.opacity = "1";
    }
  };

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enablePreview) return;
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;

    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(applyPreviewTransform);
    }
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
  };

  const handleStepMouseLeave = (e: React.MouseEvent) => {
    const next = e.relatedTarget as HTMLElement | null;
    if (next?.closest?.(".step-item")) return;
    setHoveredStep(null);
  };

  return (
    <div className="step-component-wrapper" onMouseLeave={handleMouseLeave}>
      <div className="step-component-container" ref={containerRef}>
        <div
          className={`steps-header ${headerVisible ? "visible" : ""}`}
          ref={headerRef}
        >
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
              onMouseEnter={enablePreview ? () => setHoveredStep(step.id) : undefined}
              onMouseMove={enablePreview ? handleMouseMove : undefined}
              onMouseLeave={enablePreview ? handleStepMouseLeave : undefined}
            >
              <div className="step-number">
                <span>{String(step.id).padStart(2, "0")}</span>
              </div>
              <div className="step-content">
                <h2 className="step-title">{step.title}</h2>
                <p className="step-description">{step.description}</p>
                <div className="step-list mobile">
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

        {enablePreview && hoveredStep !== null && (
          <div className="step-image" ref={previewRef}>
            <div className="step-image-inner">
              <video
                src={steps.find((s) => s.id === hoveredStep)?.image}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepComponent;
