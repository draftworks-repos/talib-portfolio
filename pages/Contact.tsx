"use client";

import { Helmet } from "react-helmet";
import React from "react";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { ContentArea } from "../components/ContentArea";
import { Branding } from "../components/Branding";
import { PageFooter } from "../components/ContactFooter";
import "../components/Contact.css";
// Parent component

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Talib Ali | Hire Full Stack Developer in Kolkata</title>

        <meta
          name="description"
          content="Get in touch with Talib Ali, full stack developer in Kolkata, India. Available for custom web development, scalable applications, and performance-driven digital solutions."
        />

        <meta
          name="keywords"
          content="Hire Full Stack Developer Kolkata, Contact Web Developer India, React Developer Contact, WordPress Developer Kolkata"
        />

        <meta
          property="og:title"
          content="Contact Talib Ali | Full Stack Developer"
        />

        <meta
          property="og:description"
          content="Contact Talib Ali for custom web applications, WordPress solutions, and scalable digital platforms."
        />

        <meta property="og:url" content="https://talibali.in/contact" />

        <link
          rel="canonical"
          aria-label="canonical"
          href="https://talibali.in/contact"
        />
      </Helmet>
      <div className="about-root selection-accent">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <AnimatedBackground />

          <div className="about-container">
            <Branding />

            <div className="about-content-card">
              <ContentArea />
            </div>

            <PageFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
