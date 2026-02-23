import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./ReviewCarousel.css";

const reviews = [
  {
    id: 1,
    name: "Sonam Singh",
    role: "Director, Delfyle Solutions Pvt. Ltd.",
    image: "images/1.webp",
    rating: 5,
    review:
      "Working with Talib and WebMaak Team has been an absolute delight! From concept to execution, their team handled our website design with remarkable creativity, precision, and professionalism. They understood exactly what we envisioned for Delfyle, a clean, impactful, and user-friendly website that truly represents who we are as a brand. The entire process was smooth, transparent, and efficient, with the WebMaak team ensuring every detail aligned perfectly with our expectations. What impressed me most was their proactive approach, timely delivery, and commitment to quality. They didn’t just design a website; they built a digital identity that reflects Delfyle’s vision and values. A huge thank you to the entire WebMaak team for your dedication and brilliant execution, you’ve made our online presence stronger and more inspiring than ever!",
  },
  {
    id: 2,
    name: "Arun",
    role: "Designleeway",
    image: "images/2.webp",
    rating: 5,
    review:
      "Working with Talib and WebMaak Team was an excellent experience. The communication throughout our fintech website development in Webflow was smooth and efficient. Their quick response to feedback and commitment to maintaining design integrity truly stood out. The team’s product animation skills and turnaround time were impressive. I’d love to collaborate with them on many more projects in the future.",
  },
  {
    id: 3,
    name: "Hamna Kouser",
    role: "",
    image: "images/3.webp",
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
      "Working with Talib and WebMaak Team was an absolute pleasure! They built a stunning website for my brand and truly brought my vision to life. The team was incredibly dedicated, prompt with every update, and went above and beyond to make sure everything was perfect. Highly recommend them to anyone looking for a reliable and creative web development team!",
  },
];

// Memoized Star Rating for better performance
const StarRating = React.memo(({ rating }: { rating: number }) => (
  <div className="rating">
    {[1, 2, 3, 4, 5].map((idx) => (
      <Star
        key={idx}
        className={idx <= rating ? "filled" : "empty"}
        size={16}
        fill={idx <= rating ? "#e3d7ffff" : "transparent"}
      />
    ))}
  </div>
));

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
  }),
};

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 140);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

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

  const prevCard = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  const nextCard = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const activeReview = reviews[index]!;

  return (
    <div
      className={`carousel-section ${isScrolling ? "is-scrolling" : ""}`}
      id="reviews"
      ref={sectionRef}
    >
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

      <motion.div
        className="carousel-container anim-on-scroll anim-bento-entrance"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <button
          onClick={prevCard}
          className="nav-btn nav-left top-nav"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="carousel-track-wrapper">
          <motion.div
            className="carousel-track"
            drag={isScrolling ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={isScrolling ? 0 : 0.2}
            onDragEnd={(_, info) => {
              const threshold = 50;
              if (info.offset.x < -threshold) nextCard();
              else if (info.offset.x > threshold) prevCard();
            }}
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={activeReview.id}
                className="review-card active"
                custom={direction}
                variants={slideVariants}
                initial={isScrolling ? "center" : "enter"}
                animate="center"
                exit={isScrolling ? undefined : "exit"}
                transition={
                  isScrolling
                    ? { duration: 0 }
                    : { duration: 0.26, ease: "easeOut" }
                }
              >
                <div className="card-inner">
                  <Quote className="quote-icon" size={40} />
                  <p className="review-text">{activeReview.review}</p>

                  <div className="review-footer">
                    <div className="reviewer">
                      <img
                        src={activeReview.image}
                        alt={activeReview.name}
                        loading="lazy"
                        width={48}
                        height={48}
                      />
                      <div className="reviewer-details">
                        <h4>{activeReview.name}</h4>
                        <span>{activeReview.role}</span>
                      </div>
                    </div>

                    <StarRating rating={activeReview.rating} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <button
          onClick={nextCard}
          className="nav-btn nav-right top-nav"
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
      </motion.div>
    </div>
  );
}
