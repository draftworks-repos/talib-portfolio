import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import "./Navbar.css";

const SECTION_IDS = [
  "projects",
  "services",
  "reviews",
  "media-services",
  "about",
];

export const Navbar: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  /* ------------------------------
     Global Hash-Scroll Handler
  ------------------------------ */
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");

      // Delay slightly to ensure content is rendered (important for lazy components)
      const timeoutId = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname, location.hash]);

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
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      navigate(`/#${id}`, { replace: true });
    }
    setActive(id);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="glass-nav">
        {/* Logo */}
        <div className="nav-logo" onClick={() => navigate("/")}>
          <img src="icons/logo.png" alt="Logo" className="nav-logo-img" />{" "}
          <span>Talib Ali</span>
        </div>

        {/* Menu Items */}
        <div className="nav-links">
          <button
            className={`nav-link ${active === "projects" ? "active" : ""}`}
            onClick={() => handleSectionClick("projects")}
          >
            My Works
          </button>

          <button
            className={`nav-link ${active === "services" ? "active" : ""}`}
            onClick={() => handleSectionClick("services")}
          >
            Core Expertise
          </button>

          <button
            className={`nav-link ${active === "reviews" ? "active" : ""}`}
            onClick={() => handleSectionClick("reviews")}
          >
            Reviews
          </button>

          <button
            className={`nav-link ${active === "media-services" ? "active" : ""}`}
            onClick={() => handleSectionClick("media-services")}
          >
            Media Services
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
            href="https://api.whatsapp.com/send?phone=918759475316&text=Hey%20Talib%2C%20I%20want%20start%20my%20project"
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

          <MobileNav />
        </div>
      </nav>
    </div>
  );
};
