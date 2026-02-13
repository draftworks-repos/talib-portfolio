import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Zap } from "lucide-react";
import "./ReviewCarousel.css";

const reviews = [
  {
    id: 1,
    name: "Sonam Singh",
    role: "Director, Delfyle Solutions Pvt. Ltd.",
    image: "images/1.png",
    rating: 5,
    review:
      "Working with Talib in WebMaak Team has been an absolute delight! From concept to execution, their team handled our website design with remarkable creativity, precision, and professionalism. They understood exactly what we envisioned for Delfyle, a clean, impactful, and user-friendly website that truly represents who we are as a brand. The entire process was smooth, transparent, and efficient, with the WebMaak team ensuring every detail aligned perfectly with our expectations. What impressed me most was their proactive approach, timely delivery, and commitment to quality. They didn’t just design a website; they built a digital identity that reflects Delfyle’s vision and values. A huge thank you to the entire WebMaak team for your dedication and brilliant execution, you’ve made our online presence stronger and more inspiring than ever!",
  },
  {
    id: 2,
    name: "Arun",
    role: "Designleeway",
    image: "images/2.png",
    rating: 5,
    review:
      "Working with Talib in WebMaak Team was an excellent experience. The communication throughout our fintech website development in Webflow was smooth and efficient. Their quick response to feedback and commitment to maintaining design integrity truly stood out. The team’s product animation skills and turnaround time were impressive. I’d love to collaborate with them on many more projects in the future.",
  },
  {
    id: 3,
    name: "Hamna Kouser",
    role: "",
    image: "images/4.png",
    rating: 5,
    review:
      "The e-card which Talib & Aman provided to me was amazingly great work..Great work guyz and the best part was wedding website which was absolutely cherry on the cake.. Commendable work..keep up the Good work.",
  },
  {
    id: 4,
    name: "Kalika Nigam",
    role: "Founder, Chamki",
    image: "images/5.jpeg",
    rating: 4,
    review:
      "Working withs Talib in WebMaak Team was an absolute pleasure! They built a stunning website for my brand and truly brought my vision to life. The team was incredibly dedicated, prompt with every update, and went above and beyond to make sure everything was perfect. Highly recommend them to anyone looking for a reliable and creative web development team!",
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
          className="nav-btn nav-left top-nav"
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
          className="nav-btn nav-right top-nav"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>

        <div className="pagination">
          <button
            onClick={prevCard}
            className="nav-btn nav-left bottom-nav"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
          <button
            onClick={nextCard}
            className="nav-btn nav-right bottom-nav"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
