import React from "react";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  MapPin,
} from "lucide-react";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-gradient-bg"></div>

      <div className="site-footer-container">
        <div className="footer-main-grid">
          {/* Brand & Contact Column */}
          <div className="footer-brand-col">
            <h3 className="footer-logo-brand">
              <img src="icons/logo.png" alt="logo" className="footer-logo" />
              Talib Ali
            </h3>
            <p className="footer-brand-desc">
              Founder of WebMaak - Technology & Media Studio
            </p>
            <span className="status">
              <span className="bullet" />
              Available for work
            </span>
            <div className="footer-subscribe-box">
              <a
                href="https://webmaak.com/"
                className="footer-demo-btn"
                style={{ textDecoration: "none" }}
              >
                <span>Explore WebMaak</span>
                <div className="demo-btn-arrow">
                  <ArrowRight size={14} />
                </div>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-group">
            <div className="footer-links-col">
              <h4 className="footer-links-title"> Navigation</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Featured Projects</a>
                </li>
                <li>
                  <a href="#">Core Expertise</a>
                </li>
                <li>
                  <a href="#">How I Work</a>
                </li>
                <li>
                  <a href="#"> Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-links-col">
              <h4 className="footer-links-title">Services</h4>
              <ul>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=918759475316&text=I%20need%20UI%2FUX%20design%20services%20for%20my%20project.%20Can%20we%20discuss%20the%20details%3F">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=918759475316&text=I%20am%20looking%20to%20build%20a%20custom%20web%20application.%20Can%20we%20discuss%20the%20requirements%3F">
                    WordPress Development
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=918759475316&text=I%20need%20a%20WordPress%20website%20designed%20and%20developed.%20Can%20we%20discuss%20my%20project%3F">
                    Web & Application Development
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=918759475316&text=I%20want%20to%20build%20an%20e-commerce%20store%20(Shopify%20or%20WooCommerce).%20Can%20we%20discuss%20the%20details%3F">
                    E-commerce Solutions
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=918759475316&text=I%20am%20planning%20to%20develop%20a%20mobile%20application.%20Can%20we%20discuss%20the%20project%20requirements%3F">
                    Mobile Application
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links-col">
              <h4 className="footer-links-title">Contact</h4>
              <ul>
                <li>
                  <a href="mailto:hello@talibali.in">
                    {" "}
                    <Mail size={16} style={{ marginRight: "5px" }} />{" "}
                    hello@talibali.in
                  </a>
                </li>
                <li>
                  <a href="tel:+918759475316">
                    <Phone size={16} style={{ marginRight: "5px" }} /> +91
                    8759475316
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.5354063,88.2647794,26587m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.5743545!4d88.3628734!16zL20vMGN2dzk!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D">
                    <MapPin size={16} style={{ marginRight: "5px" }} /> Kolkata,
                    India
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-divider"></div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright-text">
            Talib Ali © 2026 all rights reserved.
          </p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/talib.ali.15"
              className="social-icon-circle"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/talib_imran/"
              className="social-icon-circle"
            >
              <Instagram size={16} />
            </a>
            <a href="#" className="social-icon-circle" data-coming-soon="true">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mdtalib15/"
              className="social-icon-circle"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
