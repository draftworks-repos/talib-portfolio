import React, { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Star,
  Zap,
  MousePointer2,
  Plus,
  BarChart3,
  Play,
  Layers,
  Check,
  Code2,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  CreditCard,
  SearchCheck,
  MonitorSmartphone,
  Gauge,
  FolderTree,
} from "lucide-react";
import "./ServicesBento.css";

export const ServicesBento: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("item-visible");
          // Optional: stop observing once it's visible
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements that should animate on scroll
    const animatedElements =
      sectionRef.current?.querySelectorAll(".anim-on-scroll");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      {/* Decorative Background Elements */}
      <div className="services-bg-decor">
        <div className="abstract-light light-left-1"></div>
        <div className="abstract-light light-right-1"></div>
        <div className="abstract-light light-left-2"></div>
        <div className="abstract-light light-right-2"></div>
        <div className="abstract-light curved-ray-1"></div>
        <div className="abstract-element abstract-ring-1"></div>
        <div className="abstract-element abstract-shape-1"></div>
        <div className="abstract-element abstract-dots-1"></div>
      </div>

      <div className="section-container">
        {/* Top Header */}
        <div className="section-header">
          <div
            className="services-badge anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0s" }}
          >
            <Zap size={10} style={{ fill: "white" }} />
            {/* <Star size={10} style={{ fill: "white" }} /> */}
            <span>Services</span>
          </div>
          <h2
            className="section-title-main anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.1s" }}
          >
            Core Expertise
          </h2>
          <p
            className="section-title-sub anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.2s" }}
          >
            I specialize in building scalable digital products and
            high-performing web solutions. Designed for clarity, speed, and
            measurable growth.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="services-bento-grid">
          {/* Top Row: Two Large Cards */}
          <div
            className="bento-card bento-large anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0s" }}
          >
            <div className="card-content">
              <h3 className="card-heading">Wordpress Design</h3>
              <p className="service-card-desc">
                I build pixel-perfect WordPress websites. Choose from 100+
                templates or get a custom design tailored to your needs.
              </p>
            </div>
            <div className="card-illustration design-preview">
              <div className="ui-mockup-container">
                <div className="ui-mockup-left anim-float-ui">
                  <div className="mockup-header-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="mockup-widget glass">
                    <div className="mockup-icon-small">
                      <span>Hello</span>
                    </div>
                    <MousePointer2
                      size={14}
                      className="cursor-icon anim-move-cursor"
                    />
                  </div>
                </div>
                <div className="ui-mockup-right glass anim-float-ui-delayed">
                  <div className="mockup-bar"></div>
                  <div className="mockup-circle-plus-wrapper">
                    <div className="mockup-circle-plus-wp">
                      <img src="icons/wordpress.png" alt="Wordpress" />
                    </div>
                    <div className="mockup-circle-plus-wp">
                      <img src="icons/elementor.png" alt="Elementor" />
                    </div>
                    <div className="mockup-circle-plus">
                      <Plus size={20} />
                    </div>
                  </div>
                  <div className="mockup-blocks">
                    <div className=""></div>
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bento-card bento-large anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="card-content">
              <h3 className="card-heading">
                Scalable Web & Mobile Applications
              </h3>
              <p className="service-card-desc">
                Robust front-end and back-end builds for websites, PWAs, and
                custom web/mobile apps performance-focused, secure, and built
                for future growth.
              </p>
              <div
                className="service-card-desc"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  marginTop: "15px",
                  marginLeft: "10px",
                }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Code2 size={14} style={{ color: "#e3d7ffff" }} /> Custom web
                  apps & API integrations for scale
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Smartphone size={14} style={{ color: "#e3d7ffff" }} /> Mobile
                  apps & progressive web apps (PWA)
                </span>
              </div>
            </div>
            <div className="card-illustration code-preview">
              <div className="code-window glass">
                <div className="window-header">
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="filename">users-list.tsx</div>
                  <div className="header-actions">
                    <div className="avatar-stack">
                      <img src="https://i.pravatar.cc/100?img=1" alt="u1" />
                      <img src="https://i.pravatar.cc/100?img=2" alt="u2" />
                    </div>
                    <button className="publish-btn">Publish</button>
                  </div>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="c1">import</span> {`{ React }`}{" "}
                    <span className="c1">from</span>{" "}
                    <span className="c2">'react'</span>;
                  </div>
                  <div className="code-line">
                    <span className="c1">import</span> {`{ UserContext }`}{" "}
                    <span className="c1">from</span>{" "}
                    <span className="c2">'./context'</span>;
                  </div>
                  <div className="code-line"></div>
                  <div className="code-line">
                    <span className="c3">const</span>{" "}
                    <span className="c4">UserList</span> = () ={` > {`}
                  </div>
                  <div className="code-line indent">
                    <span className="highlight-line">return (</span>
                  </div>
                  <div className="code-line indent-2">
                    <span className="c3">public class</span> WriteToFile
                  </div>
                  <div className="code-line indent-3">{`{ public static void main (String[] args)`}</div>
                  <div className="code-line indent-4">
                    {`try {`}
                    <span className="typing-cursor">|</span>
                  </div>
                  <div className="cursor-label purple anim-float-label">
                    Mitul A.
                  </div>
                  <div className="cursor-label orange anim-float-label-delayed">
                    Join Now
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: Three Smaller Cards */}
          <div
            className="bento-card bento-small anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0s" }}
          >
            <div className="card-content">
              <h3 className="card-heading">
                Revenue-Driven E-commerce & Platforms
              </h3>
              <p className="service-card-desc">
                E-commerce and platform UX that reduces friction, improves
                discovery, and increases transactions — from product pages to
                checkout optimization.
              </p>
              <div
                className="service-card-desc"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  marginTop: "15px",
                  marginLeft: "10px",
                }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <ShoppingCart size={14} style={{ color: "#e3d7ffff" }} />{" "}
                  Shopify / WooCommerce implementation & customization
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <TrendingUp size={14} style={{ color: "#e3d7ffff" }} />{" "}
                  Product discovery & conversion optimization
                </span>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CreditCard size={14} style={{ color: "#e3d7ffff" }} />{" "}
                  Checkout UX & funnel integration
                </span>
              </div>
            </div>
            <div className="card-illustration ecommerce-preview">
              <div className="cart-window glass">
                <div className="cart-header">
                  <div className="mockup-circle-plus-shopify">
                    <img src="icons/shopify.png" alt="" />
                  </div>
                  <div className="cart-title">My Store</div>
                  <div className="cart-icon">
                    <ShoppingBagIcon />
                  </div>
                </div>
                <div className="cart-items">
                  <div className="cart-item anim-item-slide">
                    <div className="item-square"></div>
                    <div className="item-details">
                      <div className="item-bar"></div>
                      <div className="item-price">$85.00</div>
                    </div>
                  </div>
                  <div className="cart-item anim-item-slide-delayed">
                    <div className="item-square"></div>
                    <div className="item-details">
                      <div className="item-bar"></div>
                      <div className="item-price">$90.00</div>
                    </div>
                  </div>
                </div>
                <div className="cart-footer">
                  <div className="total-price">$175.00</div>
                  <button className="confirm-btn">
                    CONFIRM ORDER <MousePointer2 size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bento-card bento-small centered-content anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="card-content">
              <h3 className="card-heading">
                SEO-Optimized & Performance-Ready Websites
              </h3>
              <p className="service-card-desc">
                Websites built with clean structure, fast loading speed, and
                search engine best practices from the ground up.
              </p>
              <div
                className="service-card-desc"
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "15px",
                  marginLeft: "10px",
                }}
              >
                <div>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <SearchCheck size={14} style={{ color: "#e3d7ffff" }} />{" "}
                    Technical SEO foundation
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <MonitorSmartphone
                      size={14}
                      style={{ color: "#e3d7ffff" }}
                    />{" "}
                    Mobile responsiveness
                  </span>
                </div>

                <div>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Gauge size={14} style={{ color: "#e3d7ffff" }} /> Page
                    speed optimization
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <FolderTree size={14} style={{ color: "#e3d7ffff" }} />{" "}
                    Structured content hierarchy
                  </span>
                </div>
              </div>
            </div>
            <div className="card-illustration seo-preview">
              <div className="seo-nodes">
                <div className="node-center-wrapper">
                  <div className="node-center anim-pulse-glow">
                    <div className="mockup-circle-plus-seo">
                      <img src="icons/wordpress.png" alt="Wordpress" />
                    </div>
                  </div>
                  <div
                    className="node-center anim-pulse-glow"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="mockup-circle-plus-seo">
                      <img src="icons/nextjs.png" alt="Wordpress" />
                    </div>
                  </div>
                  <div
                    className="node-center anim-pulse-glow"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="mockup-circle-plus-seo">
                      <img src="icons/webflow.svg" alt="Wordpress" />
                    </div>
                  </div>
                </div>
                <div className="node-line l1"></div>
                <div className="node-line l2"></div>
                <div className="node-line l3"></div>
                <div className="node-line r1"></div>
                <div className="node-line r2"></div>
                <div className="node-line r3"></div>
                <div className="node-floating f1 anim-float-node">
                  <div className="mockup-circle-plus-seo">
                    <img src="icons/google-analytics.png" alt="Wordpress" />
                  </div>
                </div>
                <div className="node-floating f4 anim-float-node-delayed">
                  <div className="mockup-circle-plus-seo">
                    <img src="icons/google-console.jpg" alt="Wordpress" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className="bento-card bento-small anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="card-illustration solution-preview">
              <div className="marketing-ui-mockup glass">
                <div className="chart-bar-container">
                  <div className="chart-bar" style={{ height: "40%" }}></div>
                  <div className="chart-bar" style={{ height: "70%" }}></div>
                  <div className="chart-bar" style={{ height: "55%" }}></div>
                  <div className="chart-bar" style={{ height: "90%" }}></div>
                  <div className="chart-bar" style={{ height: "65%" }}></div>
                </div>
                <BarChart3 className="marketing-icon" size={24} />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-heading">Digital Marketing</h3>
              <p className="service-card-desc">
                Strategic campaigns designed to increase visibility and drive
                meaningful conversions.
              </p>
            </div>
          </div> */}
        </div>

        {/* Bottom Button */}
        <div className="services-cta">
          <div
            className="anim-on-scroll anim-bento-entrance"
            style={{ animationDelay: "0.1s" }}
          >
            <a
              href="/contact"
              className="cta-main-button"
              style={{ textDecoration: "none" }}
            >
              <span className="cta-button-label">Get Started- It's Free</span>
              <div className="cta-button-icon-wrapper">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShoppingBagIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
