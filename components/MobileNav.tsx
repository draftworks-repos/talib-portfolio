import React, { memo, useState, useCallback, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Menu,
  X,
  Briefcase,
  Layers,
  User,
  Star,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./MobileNav.css";

const MobileNav: React.FC = memo(() => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleRoute = useCallback(
    (path: string) => {
      close();
      navigate(path);
    },
    [navigate, close],
  );

  //   const handleScroll = useCallback(
  //     (id: string) => {
  //       close();
  //       const el = document.getElementById(id);
  //       if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  //     },
  //     [close],
  //   );

  const handleScroll = useCallback(
    (hash: string) => {
      close();

      if (window.location.pathname !== "/") {
        navigate(`/${hash}`);
      } else {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          navigate(`/${hash}`, { replace: true });
        }
      }
    },
    [navigate, close],
  );

  const menuItems = useMemo(
    () => [
      {
        label: "My Works",
        icon: Layers,
        action: () => handleScroll("#projects"),
      },
      {
        label: "Core Expertise",
        icon: Briefcase,
        action: () => handleScroll("#services"),
      },
      {
        label: "Reviews",
        icon: Star,
        action: () => handleScroll("#reviews"),
      },
      {
        label: "Media Services",
        icon: Layers, // Using Layers for consistency, or can use another icon if imported
        action: () => handleScroll("#media-services"),
      },
      {
        label: "About",
        icon: User,
        action: () => handleScroll("#about"),
      },
      {
        label: "Contact",
        icon: Mail,
        action: () => handleRoute("/contact"),
      },
    ],
    [handleScroll, handleRoute],
  );

  const socialLinks = useMemo(
    () => [
      { icon: Facebook, href: "https://www.facebook.com/talib.ali.15" },
      { icon: Instagram, href: "https://www.instagram.com/talib_imran/" },
      { icon: Linkedin, href: "https://www.linkedin.com/in/mdtalib15/" },
    ],
    [],
  );

  const drawer = (
    <>
      <div
        className={`mobile-overlay ${open ? "active" : ""}`}
        onClick={close}
      />

      <aside className={`mobile-drawer ${open ? "open" : ""}`}>
        <div className="drawer-header">
          <a
            href="/"
            className="drawer-logo"
            style={{ textDecoration: "none" }}
          >
            <img src="icons/logo.png" alt="Logo" className="drawer-logo-img" />{" "}
            <span>Talib Ali</span>
          </a>
          <button
            className="drawer-close"
            onClick={close}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="drawer-body">
          {menuItems.map(({ label, icon: Icon, action }) => (
            <button key={label} onClick={action} className="drawer-link">
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="drawer-footer">
          <div className="drawer-socials">
            {socialLinks.map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="drawer-cta">
            <button
              className="cta-main-button"
              onClick={() =>
                handleRoute(
                  "https://api.whatsapp.com/send?phone=918759475316&text=Hey%20Talib%2C%20I%20want%20start%20my%20project",
                )
              }
            >
              <span style={{ width: "100%" }}>
                <span className="cta-button-label">Chat now</span>
              </span>
              <div className="cta-button-icon-wrapper">
                <ArrowUpRight size={18} />
              </div>
            </button>
          </div>
        </div>
      </aside>
    </>
  );

  return (
    <>
      <button
        className="mobile-toggle"
        onClick={toggle}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {createPortal(drawer, document.body)}
    </>
  );
});

MobileNav.displayName = "MobileNav";
export default MobileNav;
