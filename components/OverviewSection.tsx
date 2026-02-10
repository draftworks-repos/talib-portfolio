// import React, { useEffect, useRef, useState } from "react";
// import { Star, Calendar, Briefcase, Layout, Smartphone } from "lucide-react";
// import "./OverviewSection.css";

// export const OverviewSection: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const headerRef = useRef<HTMLDivElement>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [activeItems, setActiveItems] = useState<number[]>([]);
//   const [headerVisible, setHeaderVisible] = useState(false);

//   const experiences = [
//     {
//       id: 1,
//       role: "Diploma in Management",
//       date: "Apr 2014 – Mar 2015",
//       company: "Indian Institute of Planning and Management (IIPM)",
//       color: "#8b5cf6",
//       icon: <Layout size={18} />,
//       testimonial:
//         "Built a foundational understanding of management, entrepreneurship, and business operations that later supported freelance and startup ventures.",
//       responsibilities: [
//         "Studied core principles of management and entrepreneurship.",
//         "Gained early exposure to business strategy and organizational planning.",
//         "Developed interest in digital business and technology-driven solutions.",
//       ],
//     },
//     {
//       id: 2,
//       role: "Bachelor of Business Administration (B.B.A)",
//       date: "May 2015 – Jan 2021",
//       company: "NSHM College of Management and Technology",
//       color: "#ec4899",
//       icon: <Briefcase size={18} />,
//       testimonial:
//         "Formal business education helped bridge the gap between technical execution and business thinking.",
//       responsibilities: [
//         "Specialized in Business Administration and Management.",
//         "Learned finance, marketing, operations, and organizational behavior.",
//         "Applied academic knowledge to real-world freelance and startup work.",
//       ],
//     },
//     {
//       id: 3,
//       role: "Web Designer / Developer (Freelancer)",
//       date: "Nov 2017 – Present",
//       company: "talibali.in · Self-employed",
//       color: "#3b82f6",
//       icon: <Smartphone size={18} />,
//       testimonial:
//         "Started as an independent freelancer, delivering modern, conversion-focused websites for clients across industries.",
//       responsibilities: [
//         "Started freelancing in 2017, building websites for clients globally.",
//         "Designed and developed WordPress websites using Elementor with modern UI/UX.",
//         "Specialized in WooCommerce setup, plugin customization, and theme development.",
//         "Provided SEO optimization and digital marketing support to enhance online presence.",
//       ],
//     },
//     {
//       id: 4,
//       role: "Founder",
//       date: "2018",
//       company: "Maak Outsourcing",
//       color: "#22c55e",
//       icon: <Briefcase size={18} />,
//       testimonial:
//         "The first step toward building a scalable digital services brand.",
//       responsibilities: [
//         "Founded Maak Outsourcing to provide website design and marketing services.",
//         "Worked directly with clients on design, development, and digital strategy.",
//         "Laid the groundwork for what later evolved into WebMaak.",
//       ],
//     },
//     {
//       id: 5,
//       role: "Founder & CEO",
//       date: "May 2022 – Present",
//       company: "WebMaak Creative LLP",
//       color: "#f97316",
//       icon: <Layout size={18} />,
//       testimonial:
//         "Leading WebMaak with a focus on quality, scalability, and long-term client partnerships.",
//       responsibilities: [
//         "Founded WebMaak and transitioned from solo work to a team-based company.",
//         "Lead branding, sales initiatives, and client relationship management.",
//         "Oversee IT project management and team coordination for smooth execution.",
//         "Actively involved in website development and delivery of high-quality digital solutions.",
//       ],
//     },
//     {
//       id: 6,
//       role: "Team Expansion & Media Services",
//       date: "2023 – Present",
//       company: "WebMaak",
//       color: "#06b6d4",
//       icon: <Smartphone size={18} />,
//       testimonial:
//         "Expanded services and team capabilities to handle complex, large-scale projects.",
//       responsibilities: [
//         "Aman joined WebMaak, leading media-focused services.",
//         "Introduced motion graphics, 3D modeling, animation, and video editing services.",
//         "Successfully delivered 200+ projects with the growing WebMaak team.",
//       ],
//     },
//     {
//       id: 7,
//       role: "Company Registration & Global Scale",
//       date: "26 May 2025",
//       company: "WebMaak (India)",
//       color: "#a855f7",
//       icon: <Briefcase size={18} />,
//       testimonial:
//         "A major milestone marking WebMaak’s official presence and global reach.",
//       responsibilities: [
//         "WebMaak officially registered as a company in India.",
//         "Expanded global client base across multiple countries.",
//         "Successfully delivered 500+ projects worldwide.",
//       ],
//     },
//     {
//       id: 8,
//       role: "Ongoing Growth",
//       date: "Present",
//       company: "WebMaak",
//       color: "#64748b",
//       icon: <Layout size={18} />,
//       testimonial:
//         "Focused on continuous improvement, innovation, and long-term growth.",
//       responsibilities: [
//         "Continue working on diverse projects across web, design, and media.",
//         "Scale team, processes, and service offerings.",
//         "Build WebMaak as a globally trusted digital solutions brand.",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;

//       // We want a "trigger point" (e.g., 60% down the screen)
//       // The line starts growing when the top of the timeline area reaches this point
//       // The line finishes growing when the bottom of the timeline area reaches this point

//       const headerHeight = 200; // Approximate height of header + margins
//       const footerPadding = 100; // Bottom padding of section

//       const timelineTop = rect.top + headerHeight;
//       const timelineBottom = rect.bottom - footerPadding;
//       const timelineHeight = timelineBottom - timelineTop;

//       const triggerPoint = viewportHeight * 0.6; // The line in the viewport where growth happens

//       // Calculate how far the trigger point has traveled through the timeline height
//       let progress = (triggerPoint - timelineTop) / timelineHeight;

//       // Clamp between 0 and 1
//       const clampedProgress = Math.min(Math.max(progress, 0), 1);

//       setScrollProgress(clampedProgress);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const observers: IntersectionObserver[] = [];

//     // Header observer for entrance animation
//     const headerObserver = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setHeaderVisible(true);
//           headerObserver.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 },
//     );

//     if (headerRef.current) headerObserver.observe(headerRef.current);
//     observers.push(headerObserver);

//     // Timeline items observer - items reveal when they are near the trigger point
//     const itemRefs = document.querySelectorAll(".timeline-item");
//     itemRefs.forEach((ref, index) => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setActiveItems((prev) => [...new Set([...prev, index])]);
//             observer.unobserve(entry.target);
//           }
//         },
//         {
//           threshold: 0.2,
//           rootMargin: "-20% 0px -40% 0px", // Reveals as it approaches the center of the screen
//         },
//       );

//       observer.observe(ref);
//       observers.push(observer);
//     });

//     return () => observers.forEach((o) => o.disconnect());
//   }, []);

//   return (
//     <section className="overview-section" id="reviews">
//       <div className="overview-container" ref={containerRef}>
//         {/* Header with Entrance Animation */}
//         <div
//           className={`overview-header ${headerVisible ? "header-active" : ""}`}
//           ref={headerRef}
//         >
//           <div className="overview-badge anim-pop">
//             <Briefcase size={12} style={{ marginRight: "6px" }} />
//             <span>My Career Overview</span>
//           </div>
//           <h2 className="overview-title anim-slide-up">
//             Professional Work Experience
//           </h2>
//         </div>

//         {/* Timeline */}
//         <div className="timeline">
//           {/* Main Track Container restricted to first and last marker centers */}
//           <div className="timeline-track-container">
//             <div className="timeline-main-line-bg"></div>
//             <div
//               className="timeline-main-line-progress"
//               style={{ height: `${scrollProgress * 100}%` }}
//             ></div>
//           </div>

//           {experiences.map((exp, index) => {
//             const isActive = activeItems.includes(index);

//             return (
//               <div
//                 key={exp.id}
//                 className={`timeline-item ${isActive ? "item-active" : ""}`}
//               >
//                 <div className="timeline-left">
//                   <div className="experience-glass-card">
//                     <div className="stars-row">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} size={14} fill="white" stroke="white" />
//                       ))}
//                     </div>
//                     <p className="experience-testimonial">
//                       "{exp.testimonial}"
//                     </p>
//                     <div className="company-branding">
//                       {index === 0 && (
//                         <span className="hostinger-logo">HOSTINGER</span>
//                       )}
//                       {index === 1 && (
//                         <span className="appwrite-logo">appwrite</span>
//                       )}
//                       {index === 2 && (
//                         <span className="docker-logo">docker.</span>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="timeline-center">
//                   <div
//                     className={`timeline-marker ${isActive ? "marker-active" : ""}`}
//                     style={{
//                       backgroundColor: exp.color,
//                       boxShadow: isActive ? `0 0 20px ${exp.color}aa` : "none",
//                     }}
//                   >
//                     {exp.icon}
//                   </div>
//                 </div>

//                 <div className="timeline-right">
//                   <h3 className="role-title">{exp.role}</h3>
//                   <div className="date-badge">
//                     <Calendar size={14} />
//                     <span>{exp.date}</span>
//                   </div>
//                   <div className="responsibilities">
//                     <span className="resp-label">Responsibilities</span>
//                     <ul className="resp-list">
//                       {exp.responsibilities.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useEffect, useRef, useState } from "react";
import {
  Star,
  Calendar,
  Briefcase,
  Layout,
  ArrowUpRight,
  Smartphone,
} from "lucide-react";
import "./OverviewSection.css";

export const OverviewSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItems, setActiveItems] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const markerRefs = useRef<HTMLDivElement[]>([]);
  const [lineHeightPx, setLineHeightPx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: 1,
      role: "Diploma in Management",
      date: "Apr 2014 – Mar 2015",
      company: "Indian Institute of Planning and Management (IIPM)",
      color: "#8b5cf6",
      icon: <Layout size={18} />,
      testimonial:
        "Built a foundational understanding of management, entrepreneurship, and business operations that later supported freelance and startup ventures.",
      responsibilities: [
        "Studied core principles of management and entrepreneurship.",
        "Gained early exposure to business strategy and organizational planning.",
        "Developed interest in digital business and technology-driven solutions.",
      ],
    },
    {
      id: 2,
      role: "Bachelor of Business Administration (B.B.A)",
      date: "May 2015 – Jan 2021",
      company: "NSHM College of Management and Technology",
      color: "#ec4899",
      icon: <Briefcase size={18} />,
      testimonial:
        "Formal business education helped bridge the gap between technical execution and business thinking.",
      responsibilities: [
        "Specialized in Business Administration and Management.",
        "Learned finance, marketing, operations, and organizational behavior.",
        "Applied academic knowledge to real-world freelance and startup work.",
      ],
    },
    {
      id: 3,
      role: "Web Designer / Developer (Freelancer)",
      date: "Nov 2017 – Present",
      company: "talibali.in · Self-employed",
      color: "#3b82f6",
      icon: <Smartphone size={18} />,
      testimonial:
        "Started as an independent freelancer, delivering modern, conversion-focused websites for clients across industries.",
      responsibilities: [
        "Started freelancing in 2017, building websites for clients globally.",
        "Designed and developed WordPress websites using Elementor with modern UI/UX.",
        "Specialized in WooCommerce setup, plugin customization, and theme development.",
        "Provided SEO optimization and digital marketing support to enhance online presence.",
      ],
    },
    {
      id: 4,
      role: "Founder",
      date: "2018",
      company: "Maak Outsourcing",
      color: "#22c55e",
      icon: <Briefcase size={18} />,
      testimonial:
        "The first step toward building a scalable digital services brand.",
      responsibilities: [
        "Founded Maak Outsourcing to provide website design and marketing services.",
        "Worked directly with clients on design, development, and digital strategy.",
        "Laid the groundwork for what later evolved into WebMaak.",
      ],
    },
    {
      id: 5,
      role: "Founder & CEO",
      date: "May 2022 – Present",
      company: "WebMaak Creative LLP",
      color: "#f97316",
      icon: <Layout size={18} />,
      testimonial:
        "Leading WebMaak with a focus on quality, scalability, and long-term client partnerships.",
      responsibilities: [
        "Founded WebMaak and transitioned from solo work to a team-based company.",
        "Lead branding, sales initiatives, and client relationship management.",
        "Oversee IT project management and team coordination for smooth execution.",
        "Actively involved in website development and delivery of high-quality digital solutions.",
      ],
    },
    {
      id: 6,
      role: "Team Expansion & Media Services",
      date: "2023 – Present",
      company: "WebMaak",
      color: "#06b6d4",
      icon: <Smartphone size={18} />,
      testimonial:
        "Expanded services and team capabilities to handle complex, large-scale projects.",
      responsibilities: [
        "Aman joined WebMaak, leading media-focused services.",
        "Introduced motion graphics, 3D modeling, animation, and video editing services.",
        "Successfully delivered 200+ projects with the growing WebMaak team.",
      ],
    },
    {
      id: 7,
      role: "Company Registration & Global Scale",
      date: "26 May 2025",
      company: "WebMaak (India)",
      color: "#a855f7",
      icon: <Briefcase size={18} />,
      testimonial:
        "A major milestone marking WebMaak’s official presence and global reach.",
      responsibilities: [
        "WebMaak officially registered as a company in India.",
        "Expanded global client base across multiple countries.",
        "Successfully delivered 500+ projects worldwide.",
      ],
    },
    {
      id: 8,
      role: "Ongoing Growth",
      date: "Present",
      company: "WebMaak",
      color: "#64748b",
      icon: <Layout size={18} />,
      testimonial:
        "Focused on continuous improvement, innovation, and long-term growth.",
      responsibilities: [
        "Continue working on diverse projects across web, design, and media.",
        "Scale team, processes, and service offerings.",
        "Build WebMaak as a globally trusted digital solutions brand.",
      ],
    },
  ];

  /* ===== Scroll → Progress (ends exactly at last marker) ===== */
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || markerRefs.current.length < 2) return;

      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.6;

      const firstMarker = markerRefs.current[0].getBoundingClientRect();
      const lastMarker =
        markerRefs.current[
          markerRefs.current.length - 1
        ].getBoundingClientRect();

      const start = firstMarker.top + firstMarker.height / 2;
      const end = lastMarker.top + lastMarker.height / 2;

      const totalDistance = end - start;

      const progress = (triggerPoint - start) / totalDistance;
      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      setScrollProgress(clampedProgress);
      setLineHeightPx(totalDistance * clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

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

  return (
    <section className="overview-section" id="reviews" ref={sectionRef}>
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
            Professional Work Experience
          </h2>
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

          {experiences.map((exp, index) => {
            const itemProgress =
              experiences.length > 1 ? index / (experiences.length - 1) : 0;

            const isActive = scrollProgress >= itemProgress;

            return (
              <div
                key={exp.id}
                className={`timeline-item ${isActive ? "item-active" : ""}`}
              >
                <div className="timeline-left">
                  <div className="experience-glass-card">
                    <p className="experience-testimonial">
                      "{exp.testimonial}"
                    </p>
                  </div>
                </div>

                <div className="timeline-center">
                  <div
                    ref={(el) => {
                      if (el) markerRefs.current[index] = el;
                    }}
                    className={`timeline-marker ${
                      isActive ? "marker-active" : ""
                    }`}
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
                    <span className="resp-label">Responsibilities</span>
                    <ul className="resp-list">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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
            <span className="cta-button-label">Get Started- It's Free</span>
            <div className="cta-button-icon-wrapper">
              <ArrowUpRight size={18} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
