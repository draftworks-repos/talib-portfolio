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

      <a href="mailto:hello@webmaak.com" className="footer-contact">
        <span className="footer-contact-label">Connect with us</span>
        <span className="footer-contact-email">hello@webmaak.com</span>
      </a>
    </div>
  );
};
