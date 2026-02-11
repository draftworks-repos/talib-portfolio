// import React from "react";
// import { ArrowUpRight, Phone } from "lucide-react";
// import "./Navbar.css";

// export const Navbar: React.FC = () => {
//   const navItems = ["Services", "About", "Reviews", "Contact"];

//   return (
//     <div className="navbar-wrapper">
//       <nav className="glass-nav">
//         {/* Logo */}
//         <div className="nav-logo">
//           <span>Talib Ali</span>
//         </div>

//         {/* Menu Items */}
//         <div className="nav-links">
//           {navItems.map((item, idx) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase().replace(" ", "-")}`}
//               className={`nav-link ${idx === 0 ? "active" : ""}`}
//             >
//               {item}
//             </a>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="nav-actions">
//           <button className="whatsapp-btn">
//             <img
//               src="/images/whatsapp.svg"
//               alt="WhatsApp"
//               width={20}
//               height={20}
//             />
//           </button>
//           <button className="btn-pill">
//             <span>Schedule a Call</span>
//             {/* <span className="pill-small-text">+ its free</span> */}
//             <ArrowUpRight size={16} />
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const SECTION_IDS = ["services", "about", "reviews"];

export const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  /* ------------------------------
     Scroll-based active tracking
  ------------------------------ */
  useEffect(() => {
    // Only track sections on home page
    if (location.pathname !== "/") {
      setActive(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  /* ------------------------------
     Handle nav clicks
  ------------------------------ */
  const handleSectionClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    setActive(id);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="glass-nav">
        {/* Logo */}
        <div className="nav-logo" onClick={() => navigate("/")}>
          <span>Talib Ali</span>
        </div>

        {/* Menu Items */}
        <div className="nav-links">
          <button
            className={`nav-link ${active === "services" ? "active" : ""}`}
            onClick={() => handleSectionClick("services")}
          >
            Services
          </button>

          <button
            className={`nav-link ${active === "reviews" ? "active" : ""}`}
            onClick={() => handleSectionClick("reviews")}
          >
            Reviews
          </button>

          <button
            className={`nav-link ${active === "about" ? "active" : ""}`}
            onClick={() => handleSectionClick("about")}
          >
            About
          </button>

          {/* Contact is a PAGE */}
          <button
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </div>

        {/* CTA Section */}
        <div className="nav-actions">
          <a
            href="https://wa.me/+918759475316"
            target="_blank"
            className="whatsapp-btn"
            style={{ textDecoration: "none" }}
          >
            <img
              src="/images/whatsapp.svg"
              alt="WhatsApp"
              width={20}
              height={20}
              className="whatsapp-icon"
            />
          </a>

          <a
            href="/contact"
            className="btn-pill"
            style={{ textDecoration: "none" }}
          >
            <span>Schedule a Call</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </div>
  );
};
