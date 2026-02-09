import React, { useEffect, useRef, useState } from 'react';
import { Star, Calendar, Briefcase, Layout, Smartphone } from 'lucide-react';
import './OverviewSection.css';

export const OverviewSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItems, setActiveItems] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);

  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      date: "January 2023 - Present",
      company: "HOSTINGER",
      color: "#8b5cf6",
      icon: <Layout size={18} />,
      testimonial: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability."
      ]
    },
    {
      id: 2,
      role: "Full Stack Developer",
      date: "June 2020 - December 2022",
      company: "appwrite",
      color: "#ec4899",
      icon: <Briefcase size={18} />,
      testimonial: "Adrian's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      responsibilities: [
        "Led the development of Docker's web applications, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used with Docker ecosystem."
      ]
    },
    {
      id: 3,
      role: "React Native Developer",
      date: "March 2019 - May 2020",
      company: "docker.",
      color: "#3b82f6",
      icon: <Smartphone size={18} />,
      testimonial: "Adrian's work on Appwrite's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience.",
      responsibilities: [
        "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
        "Improved app performance and user experience through code optimization and testing.",
        "Coordinated with product team to implement features based on feedback."
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // We want a "trigger point" (e.g., 60% down the screen)
      // The line starts growing when the top of the timeline area reaches this point
      // The line finishes growing when the bottom of the timeline area reaches this point
      
      const headerHeight = 200; // Approximate height of header + margins
      const footerPadding = 100; // Bottom padding of section
      
      const timelineTop = rect.top + headerHeight;
      const timelineBottom = rect.bottom - footerPadding;
      const timelineHeight = timelineBottom - timelineTop;
      
      const triggerPoint = viewportHeight * 0.6; // The line in the viewport where growth happens
      
      // Calculate how far the trigger point has traveled through the timeline height
      let progress = (triggerPoint - timelineTop) / timelineHeight;
      
      // Clamp between 0 and 1
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      
      setScrollProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    // Header observer for entrance animation
    const headerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeaderVisible(true);
        headerObserver.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    
    if (headerRef.current) headerObserver.observe(headerRef.current);
    observers.push(headerObserver);

    // Timeline items observer - items reveal when they are near the trigger point
    const itemRefs = document.querySelectorAll('.timeline-item');
    itemRefs.forEach((ref, index) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveItems(prev => [...new Set([...prev, index])]);
          observer.unobserve(entry.target);
        }
      }, { 
        threshold: 0.2, 
        rootMargin: '-20% 0px -40% 0px' // Reveals as it approaches the center of the screen
      });
      
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section className="overview-section" id="reviews">
      <div className="overview-container" ref={containerRef}>
        {/* Header with Entrance Animation */}
        <div 
          className={`overview-header ${headerVisible ? 'header-active' : ''}`} 
          ref={headerRef}
        >
          <div className="overview-badge anim-pop">
            <Briefcase size={12} style={{ marginRight: '6px' }} />
            <span>My Career Overview</span>
          </div>
          <h2 className="overview-title anim-slide-up">Professional Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {/* Main Track Container restricted to first and last marker centers */}
          <div className="timeline-track-container">
            <div className="timeline-main-line-bg"></div>
            <div 
              className="timeline-main-line-progress" 
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>

          {experiences.map((exp, index) => {
            const isActive = activeItems.includes(index);
            
            return (
              <div key={exp.id} className={`timeline-item ${isActive ? 'item-active' : ''}`}>
                <div className="timeline-left">
                  <div className="experience-glass-card">
                    <div className="stars-row">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="white" stroke="white" />
                      ))}
                    </div>
                    <p className="experience-testimonial">"{exp.testimonial}"</p>
                    <div className="company-branding">
                      {index === 0 && <span className="hostinger-logo">HOSTINGER</span>}
                      {index === 1 && <span className="appwrite-logo">appwrite</span>}
                      {index === 2 && <span className="docker-logo">docker.</span>}
                    </div>
                  </div>
                </div>

                <div className="timeline-center">
                  <div 
                    className={`timeline-marker ${isActive ? 'marker-active' : ''}`} 
                    style={{ 
                      backgroundColor: exp.color,
                      boxShadow: isActive ? `0 0 20px ${exp.color}aa` : 'none'
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
    </section>
  );
};
