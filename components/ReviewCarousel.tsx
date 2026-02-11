import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Zap } from "lucide-react";
import "./ReviewCarousel.css";

const reviews = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Focused on continuous improvement, innovation, and long-term growth.",
  },
  {
    id: 2,
    name: "Sophia Lee",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Their development process is structured, efficient, and future-ready.",
  },
  {
    id: 3,
    name: "Daniel Smith",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    review: "Strong technical expertise with a focus on scalable architecture.",
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review: "Excellent collaboration and communication throughout the project.",
  },
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("item-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements =
      sectionRef.current?.querySelectorAll(".anim-on-scroll");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const getCardClass = (i: number) => {
    const diff = (i - index + reviews.length) % reviews.length;

    if (diff === 0) return "active";
    if (diff === 1) return "next";
    if (diff === 2) return "next-2";
    return "hidden";
  };

  return (
    <div className="carousel-section" ref={sectionRef}>
      <div className="section-header">
        <div
          className="services-badge anim-on-scroll anim-bento-entrance"
          style={{ animationDelay: "0s" }}
        >
          <Zap size={10} style={{ fill: "white" }} />
          <span>Testimonials</span>
        </div>
        <h2
          className="section-title-main anim-on-scroll anim-bento-entrance"
          style={{ animationDelay: "0.1s" }}
        >
          What Clients Say
        </h2>
        <p
          className="section-title-sub anim-on-scroll anim-bento-entrance"
          style={{ animationDelay: "0.2s" }}
        >
          I've had the pleasure of working with amazing people around the globe.
          Here's what they think about our collaboration.
        </p>
      </div>

      <div
        className="carousel-container anim-on-scroll anim-bento-entrance"
        style={{ animationDelay: "0.3s" }}
      >
        <button
          onClick={prevCard}
          className="nav-btn nav-left"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="carousel-track">
          {reviews.map((review, i) => (
            <div key={review.id} className={`review-card ${getCardClass(i)}`}>
              <div className="card-inner">
                <Quote className="quote-icon" size={40} />
                <p className="review-text">{review.review}</p>

                <div className="review-footer">
                  <div className="reviewer">
                    <img src={review.image} alt={review.name} />
                    <div className="reviewer-details">
                      <h4>{review.name}</h4>
                      <span>{review.role}</span>
                    </div>
                  </div>

                  <div className="rating">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={idx < review.rating ? "filled" : "empty"}
                        size={16}
                        fill={idx < review.rating ? "#e3d7ffff" : "transparent"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextCard}
          className="nav-btn nav-right"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>

        <div className="pagination">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
