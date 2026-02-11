// import React, { useEffect, useRef, useState } from 'react';
// import './ClientsMarquee.css';

// interface ClientsMarqueeProps {
//   direction?: 'left' | 'right';
// }

// const CLIENTS = [
//   { name: 'Namobrahma Studios', logo: 'NAMOBRAHMA STUDIOS' },
//   { name: 'Neowiz', logo: 'NEOWIZ' },
//   { name: 'MICL', logo: 'MICL' },
//   { name: 'Make-A-Wish', logo: 'Make-A-Wish' },
//   { name: 'Yardley', logo: 'YARDLEY LONDON' },
//   { name: 'Lodha', logo: 'LODHA' },
//   { name: 'Hyou', logo: 'HYOU' },
// ];

// export const ClientsMarquee: React.FC<ClientsMarqueeProps> = ({ direction = 'left' }) => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   // Triple the items to ensure the marquee is always full regardless of screen width
//   const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       className={`clients-section ${isVisible ? 'is-visible' : ''}`}
//       ref={sectionRef}
//     >
//       <div className="clients-container">
//         <div className={`marquee-track ${direction}`}>
//           <div className="marquee-content-row">
//             {items.map((client, index) => (
//               <div key={`${client.name}-${index}`} className="client-logo-item">
//                 <span className="client-text-logo">{client.logo}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useEffect, useRef, useState } from "react";
import "./ClientsMarquee.css";

interface ClientsMarqueeProps {
  direction?: "left" | "right";
}

// Generate logos: /marquee-logo/1.png → /marquee-logo/39.png
const LOGOS = Array.from({ length: 39 }, (_, i) => ({
  id: i + 1,
  src: `/marquee-logo/${i + 1}.png`,
}));

export const ClientsMarquee: React.FC<ClientsMarqueeProps> = ({
  direction = "left",
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Triple the items so the marquee is always full
  const items = [...LOGOS, ...LOGOS, ...LOGOS];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`clients-section ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="clients-container">
        <div className={`marquee-track ${direction}`}>
          <div className="marquee-content-row">
            {items.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="client-logo-item">
                <img
                  src={logo.src}
                  alt={`Client logo ${logo.id}`}
                  className="client-logo-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="clients-container two" style={{ opacity: 0.4 }}>
        <div className={`marquee-track ${"right"}`}>
          <div className="marquee-content-row">
            {items.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="client-logo-item">
                <span className="client-text-logo" style={{ margin: "0 4rem" }}>
                  Clients I've worked with
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
