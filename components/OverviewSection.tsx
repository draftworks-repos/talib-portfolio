import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Calendar,
  Briefcase,
  Layout,
  ArrowUpRight,
  Smartphone,
} from "lucide-react";
import "./OverviewSection.css";

const EXPERIENCES = [
  {
    id: 1,
    role: "Diploma in Management",
    date: "Apr 2014 – Mar 2015",
    company: "Indian Institute of Planning and Management (IIPM)",
    color: "#8b5cf6",
    icon: <Layout size={18} />,
    testimonial:
      "Won First Runner-Up in a marketing event by building a business model and presenting profit growth in percentage terms.",
    responsibilitie: "Indian Institute of Planning and Management",
    responsibilities: [
      " Learned foundational principles of marketing and business management",
      "Built early understanding of business operations",
    ],
  },
  {
    id: 2,
    role: "Bachelor of Business Administration (B.B.A)",
    date: "May 2015 – Jan 2021",
    company: "NSHM College of Management and Technology",
    color: "#ec4899",
    icon: <Briefcase size={18} />,
    testimonial: "Completed graduation.",
    responsibilitie: "NSHM College of Management and Technology",
    responsibilities: [
      " Studied core concepts of business administration",
      "Focused on finance in the final year",
      "Gained practical exposure through academic projects",
    ],
  },
  {
    id: 3,
    role: "Freelancing Beginnings",
    date: "Nov 2017 – Present",
    company: "talibali.in · Self-employed",
    color: "#3b82f6",
    icon: <Smartphone size={18} />,
    testimonial:
      "Worked with my first client and delivered a complete website solution.",
    responsibilitie: "Suring Freelancing",
    responsibilities: [
      "Began my professional journey with WordPress development",
      "Built and launched my first website, talibali.in",
    ],
  },
  {
    id: 4,
    role: "Registered Proprietorship – Maak Outsourcing",
    date: "2018",
    company: "Maak Outsourcing",
    color: "#22c55e",
    icon: <Briefcase size={18} />,
    testimonial:
      "Transitioned from individual freelancing to operating as a registered business.",
    responsibilitie: "Maak Outsourcing",
    responsibilities: [
      "Registered Maak Outsourcing as a proprietorship business",
      "Continued WordPress website development projects",
    ],
  },
  {
    id: 5,
    role: "Formation of WebMaak",
    date: "May 2022 – Present",
    company: "WebMaak Creative LLP",
    color: "#f97316",
    icon: <Layout size={18} />,
    testimonial:
      "Started developing custom solutions using Java, Node.js, and React.js, strengthening advanced web and application capabilities.",
    responsibilitie: "WebMaak",
    responsibilities: [
      "Rebranded Maak Outsourcing as WebMaak",
      "Expanded into custom-coded web solutions",
      "Expanded into custom-coded web solutions",
    ],
  },
  {
    id: 6,
    role: "Webmaak Creative LLP – Official Registration",
    date: "2023 – Present",
    company: "WebMaak",
    color: "#06b6d4",
    icon: <Smartphone size={18} />,
    testimonial:
      "Registered under the Ministry of Corporate Affairs (MCA), India, with over 300+ projects successfully delivered.",
    responsibilitie: "Official Registration",
    responsibilities: [
      "Officially registered Webmaak Creative LLP as a Limited Liability Partnership",
      "WebMaak established as the official brand identity",
    ],
  },
  {
    id: 7,
    role: "Ongoing Growth & Expansion",
    date: "Present",
    company: "WebMaak",
    color: "#64748b",
    icon: <Layout size={18} />,
    testimonial:
      "Focused on custom-coded websites, web applications, and visualization content including motion graphics and 3D production.",
    responsibilitie: "Expansion",
    responsibilities: [
      "Continuously building high-performing web and application solutions",
      "Expanding structured digital development capabilities",
    ],
  },
];

interface TimelineItemProps {
  exp: (typeof EXPERIENCES)[0];
  index: number;
  isActive: boolean;
  markerRef: (el: HTMLDivElement | null) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = React.memo(
  ({ exp, isActive, markerRef }) => {
    return (
      <div className={`timeline-item ${isActive ? "item-active" : ""}`}>
        <div className="timeline-left">
          <div className="experience-glass-card">
            <p className="experience-testimonial">"{exp.testimonial}"</p>
          </div>
        </div>

        <div className="timeline-center">
          <div
            ref={markerRef}
            className={`timeline-marker ${isActive ? "marker-active" : ""}`}
            style={{
              backgroundColor: exp.color,
              boxShadow: isActive ? `0 0 20px ${exp.color}aa` : "none",
            }}
          >
            {exp.icon}
          </div>
        </div>

        <div className="timeline-right">
          <h3 className="role-title">{exp.role}</h3>

          <div className="date-badge">
            <Calendar size={14} />
            <span>{exp.date}</span>
          </div>

          <div className="responsibilities">
            <span className="resp-label">{exp.responsibilitie}</span>
            <ul className="resp-list">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  },
);

TimelineItem.displayName = "TimelineItem";

export const OverviewSection: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [lineHeightPx, setLineHeightPx] = useState(0);

  /* ===== Scroll → Progress (ends exactly at last marker) ===== */
  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!containerRef.current) return;

      // Filter out null refs to avoid errors
      const markers = markerRefs.current.filter(Boolean);
      if (markers.length < 2) return;

      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.6;

      const firstMarker = markers[0]!.getBoundingClientRect();
      const lastMarker = markers[markers.length - 1]!.getBoundingClientRect();

      const start = firstMarker.top + firstMarker.height / 2;
      const end = lastMarker.top + lastMarker.height / 2;

      const totalDistance = end - start;
      const progress = (triggerPoint - start) / totalDistance;
      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      setScrollProgress(clampedProgress);
      setLineHeightPx(totalDistance * clampedProgress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== Header observer only ===== */
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("item-visible");
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    const animatedElements =
      sectionRef.current?.querySelectorAll(".anim-on-scroll");

    animatedElements?.forEach((el) => scrollObserver.observe(el));

    return () => {
      headerObserver.disconnect();
      scrollObserver.disconnect();
    };
  }, []);

  const setMarkerRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      markerRefs.current[index] = el;
    },
    [],
  );

  return (
    <section className="overview-section" ref={sectionRef}>
      <div className="overview-container" ref={containerRef}>
        {/* Header */}
        <div
          ref={headerRef}
          className={`overview-header ${headerVisible ? "header-active" : ""}`}
        >
          <div className="overview-badge anim-pop">
            <Briefcase size={12} style={{ marginRight: "6px" }} />
            <span>My Career Overview</span>
          </div>
          <h2 className="overview-title anim-slide-up">
            From Learning to Leading
          </h2>
          <p
            className="section-title-sub anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.2s" }}
          >
            The milestones that shaped my journey from learning the craft to
            leading a digital studio.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-track-container">
            <div className="timeline-main-line-bg" />
            <div
              className="timeline-main-line-progress"
              style={{ height: `${lineHeightPx}px` }}
            />
          </div>

          {EXPERIENCES.map((exp, index) => {
            const itemProgress =
              EXPERIENCES.length > 1 ? index / (EXPERIENCES.length - 1) : 0;

            const isActive = scrollProgress >= itemProgress;

            return (
              <TimelineItem
                key={exp.id}
                exp={exp}
                index={index}
                isActive={isActive}
                markerRef={setMarkerRef(index)}
              />
            );
          })}
        </div>
      </div>
      <div className="overview-cta">
        <div
          className="anim-on-scroll anim-bento-entrance"
          style={{ animationDelay: "0.1s" }}
        >
          <a
            href="/contact"
            className="cta-main-button"
            style={{ textDecoration: "none" }}
          >
            <span className="cta-button-label">Schedule a Call</span>
            <div className="cta-button-icon-wrapper">
              <ArrowUpRight size={18} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
});

OverviewSection.displayName = "OverviewSection";
