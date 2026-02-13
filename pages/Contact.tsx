// import PageTransition from "../components/PageTransition";
// import Scheduler from "../components/TalibScheduler";
// import "./Contact.css";

// export default function Contact() {
//   return (
//     <PageTransition>
//       <main className="contact-page">
//         {/* Header */}
//         <section className="contact-hero">
//           <div className="contact-hero-inner">
//             <h1 className="contact-title">Let’s talk about your project</h1>

//             <p className="contact-desc">
//               Book a call to discuss scope, timelines, or collaboration. Prefer
//               async? Reach out directly below.
//             </p>
//           </div>
//         </section>

//         {/* Scheduler */}
//         <section className="contact-scheduler">
//           <Scheduler />
//         </section>

//         {/* Direct actions */}
//         <section className="contact-actions">
//           <a
//             href="https://wa.me/XXXXXXXXXX"
//             target="_blank"
//             rel="noreferrer"
//             className="contact-action-btn"
//           >
//             WhatsApp
//           </a>

//           <a href="mailto:hello@yourdomain.com" className="contact-action-btn">
//             Email
//           </a>

//           <a
//             href="https://twitter.com/yourhandle"
//             target="_blank"
//             rel="noreferrer"
//             className="contact-action-btn muted"
//           >
//             Twitter / X
//           </a>
//         </section>
//       </main>
//     </PageTransition>
//   );
// }

"use client";

import React, { useState } from "react";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { ContentArea } from "../components/ContentArea";
import { Branding } from "../components/Branding";
import { PageFooter } from "../components/ContactFooter";
import { LayoutGrid, Code, Image } from "lucide-react";
import PageTransition from "../components/PageTransition";
import "../components/Contact.css";
// Parent component

const Contact: React.FC = () => {
  return (
    <PageTransition>
      <div className="about-root selection-accent">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
    </PageTransition>
  );
};

export default Contact;
