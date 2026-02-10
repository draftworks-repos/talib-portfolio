import React from "react";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-gradient-bg"></div>

      <div className="site-footer-container">
        {/* Large Header */}
        <div className="footer-top-header">
          <h2 className="footer-cta-text">Let's Work Together</h2>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-main-grid">
          {/* Brand & Contact Column */}
          <div className="footer-brand-col">
            <h3 className="footer-logo-brand">Talib Ali</h3>
            <p className="footer-brand-desc">
              We create fast, scalable, and well-structured web applications
              built around your business needs.
            </p>

            <div className="footer-contact-info">
              <h4 className="contact-label">Contact:</h4>
              <a href="mailto:talibali@gmail.com" className="contact-item">
                <Mail size={16} />
                <span>talibali@gmail.com</span>
              </a>
              <a href="tel:+919732751699" className="contact-item">
                <Phone size={16} />
                <span>+919732751699</span>
              </a>
            </div>

            <div className="footer-subscribe-box">
              <a
                href="/contact"
                className="footer-demo-btn"
                style={{ textDecoration: "none" }}
              >
                <span>Book a Demo</span>
                <div className="demo-btn-arrow">
                  <ArrowRight size={14} />
                </div>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-group">
            <div className="footer-links-col">
              <h4 className="footer-links-title">Features</h4>
              <ul>
                <li>
                  <a href="#">24/7 Support</a>
                </li>
                <li>
                  <a href="#">Recurring billing</a>
                </li>
                <li>
                  <a href="#">Invoice management</a>
                </li>
                <li>
                  <a href="#">Checkout</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-links-title">Solutions</h4>
              <ul>
                <li>
                  <a href="#">E-commerce</a>
                </li>
                <li>
                  <a href="#">WordPress Development</a>
                </li>
                <li>
                  <a href="#">Woo-commerce</a>
                </li>
                <li>
                  <a href="#">Global Business</a>
                </li>
                <li>
                  <a href="#">Marketplaces</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-links-title">Company</h4>
              <ul>
                <li>
                  <a href="#">People platform</a>
                </li>
                <li>
                  <a href="#">Full-service payroll</a>
                </li>
                <li>
                  <a href="#">Employee Benefits</a>
                </li>
                <li>
                  <a href="#">Hiring and onboarding</a>
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
