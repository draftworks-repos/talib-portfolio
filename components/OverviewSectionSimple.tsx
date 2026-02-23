import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Calendar,
  Briefcase,
  Layout,
  ArrowUpRight,
  Smartphone,
} from "lucide-react";
import "./OverviewSectionSimple.css";

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
      "Learned foundational principles of marketing and business management",
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
      "Studied core concepts of business administration",
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

const TOTAL = EXPERIENCES.length;

export const OverviewSectionSimple: React.FC = React.memo(() => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (headerRef.current) headerObserver.observe(headerRef.current);

    const itemObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = parseInt(
            entry.target.getAttribute("data-index") ?? "-1",
            10,
          );
          if (idx >= 0) {
            setVisibleCount((prev) => Math.max(prev, idx + 1));
            itemObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" },
    );

    const setupItems = () => {
      const items = timelineRef.current?.querySelectorAll("[data-index]");
      items?.forEach((el) => itemObserver.observe(el as Element));
    };

    setupItems();
    const t = setTimeout(setupItems, 100);

    return () => {
      headerObserver.disconnect();
      itemObserver.disconnect();
      clearTimeout(t);
    };
  }, []);

  const progress = TOTAL > 0 ? (visibleCount / TOTAL) * 100 : 0;

  return (
    <section className="overview-simple">
      <div className="overview-simple-container">
        <div
          ref={headerRef}
          className={`overview-simple-header ${headerVisible ? "visible" : ""}`}
        >
          <div className="overview-simple-badge">
            <Briefcase size={12} style={{ marginRight: "6px" }} />
            <span>My Career Overview</span>
          </div>
          <h2 className="overview-simple-title">From Learning to Leading</h2>
          <p className="overview-simple-subtitle">
            The milestones that shaped my journey from learning the craft to
            leading a digital studio.
          </p>
        </div>

        <div className="overview-simple-timeline" ref={timelineRef}>
          <div className="overview-simple-track">
            <div className="overview-simple-track-bg" />
            <div
              className="overview-simple-track-fill"
              style={{ height: `${Math.max(progress - 6, 0)}%` }}
            />
          </div>

          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              data-index={index}
              className={`overview-simple-item ${index < visibleCount ? "revealed" : ""}`}
            >
              <div className="overview-simple-left">
                <div className="overview-simple-card">
                  <p className="overview-simple-testimonial">
                    "{exp.testimonial}"
                  </p>
                </div>
              </div>

              <div className="overview-simple-center">
                <div
                  className={`overview-simple-marker ${index < visibleCount ? "revealed" : ""}`}
                  style={{ backgroundColor: exp.color }}
                >
                  {exp.icon}
                </div>
              </div>

              <div className="overview-simple-right">
                <h3 className="overview-simple-role">{exp.role}</h3>
                <div className="overview-simple-date">
                  <Calendar size={14} />
                  <span>{exp.date}</span>
                </div>
                <div className="overview-simple-responsibilities">
                  <span className="overview-simple-resp-label">
                    {exp.responsibilitie}
                  </span>
                  <ul>
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="overview-simple-cta">
          <a
            href="/contact"
            aria-label="Schedule a call"
            className="overview-simple-btn"
          >
            <span>Schedule a Call</span>
            <div className="overview-simple-btn-icon">
              <ArrowUpRight size={18} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
});

OverviewSectionSimple.displayName = "OverviewSectionSimple";
