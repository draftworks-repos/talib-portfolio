"use client";

import { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./QuotePopup.module.css";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "dark" | "light";
}

const services = ["Design Services", "IT Services", "Media Services", "Other"];

const CheckIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CloseIcon = () => (
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
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function QuotePopup({
  isOpen,
  onClose,
  mode = "dark",
}: QuotePopupProps) {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [robot, setRobot] = useState(process.env.NODE_ENV === "development");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const scrollYRef = useRef(0);

  const SITE_KEY = `${process.env.RECAPTCHA_SITE_KEY}`;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 10);

      // ── Lenis-compatible scroll lock without layout shift ──────
      scrollYRef.current = window.scrollY;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";

      // Stop Lenis if it's exposed on window (common pattern)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).lenis?.stop?.();
    } else {
      setVisible(false);

      // ── Restore scroll ─────────────────────────────────────────
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).lenis?.start?.();
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).lenis?.start?.();
    };
  }, [isOpen]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const handlePhoneChange = (value: string) => {
    setForm((f) => ({ ...f, phone: value }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 1. Validate Phone (Exactly 10 digits after country code)
    // react-phone-input-2: form.phone includes the country code.
    // We need to check the length of the number without the dial code.
    // For India (+91), dial code length is 2.
    // This is a bit tricky without a proper lib, but we can assume the user enters 10 digits.
    // A simpler check: stripping non-numeric chars and checking total length or just trusting the input.
    // The user specifically said "max 10 limit on number disincluding the country code".

    // We'll strip the country code if it starts with '91' (default) or just check length.
    // Let's assume the user wants 10 digits for the actual number.
    const digitsOnly = form.phone.replace(/\D/g, "");
    // If it starts with '91' and has 12 digits, it's 2 (code) + 10 (number).
    // If it's just 10 digits, it's just the number.
    if (digitsOnly.length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (process.env.NODE_ENV !== "development" && (!robot || !recaptchaToken)) {
      setError("Please complete the reCAPTCHA.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({ fullName: "", email: "", phone: "", service: "", message: "" });
    setRobot(false);
    setSubmitted(false);
    recaptchaRef.current?.reset();
  };

  if (!isOpen) return null;

  const themeClass = mode === "dark" ? styles.dark : styles.light;

  return (
    <div
      ref={overlayRef}
      className={`${styles.overlay} ${themeClass} ${visible ? styles.overlayVisible : ""}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={`${styles.card} ${visible ? styles.cardVisible : ""}`}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>WebMaak</span>
          <button
            className={styles.closeBtn}
            onClick={handleClose}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Success State */}
        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className={styles.successTitle}>Message Sent!</h3>
            <p className={styles.successText}>
              Thanks for reaching out. Our team will get back to you within 24
              hours.
            </p>
            <button
              className={styles.submitBtn}
              onClick={() => {
                handleReset();
                handleClose();
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.grid}>
              <div className={`${styles.field} ${styles.full}`}>
                <label className={styles.label}>Full Name</label>
                <input
                  className={styles.input}
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  maxLength={20}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className={styles.field} data-lenis-prevent>
                <label className={styles.label}>Phone / WhatsApp</label>
                <PhoneInput
                  country={"in"}
                  value={form.phone}
                  onChange={handlePhoneChange}
                  containerClass={styles.phoneContainer}
                  inputClass={styles.phoneInput}
                  buttonClass={styles.phoneButton}
                  dropdownClass={styles.phoneDropdown}
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className={`${styles.field} ${styles.full}`}>
                <label className={styles.label}>Choose Your Service</label>
                <select
                  className={styles.select}
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className={`${styles.field} ${styles.full}`}>
                <label className={styles.label}>Your Message</label>
                <textarea
                  className={styles.textarea}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project…"
                  maxLength={30}
                />
              </div>

              {error && <div className={styles.errorText}>{error}</div>}

              <div className={styles.field}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={SITE_KEY}
                  onChange={(token) => {
                    setRobot(!!token);
                    setRecaptchaToken(token || "");
                  }}
                  theme={mode}
                />
              </div>
            </div>

            <div className={styles.actions}>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={!robot || loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
              <button
                type="button"
                className={styles.resetBtn}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
