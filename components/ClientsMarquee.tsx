import React, { useEffect, useRef, useState } from 'react';
import './ClientsMarquee.css';

interface ClientsMarqueeProps {
  direction?: 'left' | 'right';
}

const CLIENTS = [
  { name: 'Namobrahma Studios', logo: 'NAMOBRAHMA STUDIOS' },
  { name: 'Neowiz', logo: 'NEOWIZ' },
  { name: 'MICL', logo: 'MICL' },
  { name: 'Make-A-Wish', logo: 'Make-A-Wish' },
  { name: 'Yardley', logo: 'YARDLEY LONDON' },
  { name: 'Lodha', logo: 'LODHA' },
  { name: 'Hyou', logo: 'HYOU' },
];

export const ClientsMarquee: React.FC<ClientsMarqueeProps> = ({ direction = 'left' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Triple the items to ensure the marquee is always full regardless of screen width
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`clients-section ${isVisible ? 'is-visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="clients-container">
        <div className={`marquee-track ${direction}`}>
          <div className="marquee-content-row">
            {items.map((client, index) => (
              <div key={`${client.name}-${index}`} className="client-logo-item">
                <span className="client-text-logo">{client.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
