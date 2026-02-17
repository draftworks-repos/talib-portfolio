import React from "react";
import "./ContactFooter.css";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export const PageFooter: React.FC = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mdtalib15/",
      icon: <Linkedin className="footer-social-icon" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/talib_imran/",
      icon: <Instagram className="footer-social-icon" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/talib.ali.15",
      icon: <Facebook className="footer-social-icon" />,
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-socials">
        {socialLinks.map((social) => (
          <a key={social.name} href={social.url} className="footer-social-link">
            <span>{social.icon}</span>
            <span>{social.name}</span>
          </a>
        ))}
      </div>

      <div className="footer-contact-wrapper">
        <a href="tel:+918256012345" className="footer-contact">
          <span className="footer-contact-label">Connect on Phone</span>
          <span className="footer-contact-email">+91 8256012345</span>
        </a>
        <a href="mailto:hello@webmaak.com" className="footer-contact">
          <span className="footer-contact-label">Connect on Email</span>
          <span className="footer-contact-email">hello@talibali.in</span>
        </a>
      </div>
    </div>
  );
};
