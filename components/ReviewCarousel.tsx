import React, { useState } from "react";
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
    <div className="carousel-section">
      <div className="section-title">
        <h2>Client Reviews</h2>
        <p>What our clients say about working with us</p>
      </div>

      <div className="carousel-container">
        <button
          onClick={prevCard}
          className="nav-btn nav-left"
          aria-label="Previous"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="carousel-track">
          {reviews.map((review, i) => (
            <div key={review.id} className={`review-card ${getCardClass(i)}`}>
              <div className="card-inner">
                <p className="review-text">"{review.review}"</p>

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
                      <svg
                        key={idx}
                        className={idx < review.rating ? "filled" : "empty"}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
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
