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
  const [robot, setRobot] = useState(import.meta.env.DEV);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const scrollYRef = useRef(0);

  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

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

    const digitsOnly = form.phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    const isDev = import.meta.env.DEV;

    if (!isDev && (!robot || !recaptchaToken)) {
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

      const rawText = await res.clone().text();

      if (!res.ok) {
        alert(`ERROR ${res.status} ${res.statusText}:\n\n${rawText}`);
        setError(rawText || "Something went wrong. Please try again.");
        return;
      }

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      alert(`FETCH ERROR:\n\nName: ${err?.name}\nMessage: ${err?.message}\n\n${String(err)}`);
      setError(`Network error: ${err?.message || String(err)}`);
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
          <span className={styles.badge}>Talib Ali</span>
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
                {SITE_KEY ? (
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={SITE_KEY}
                    onChange={(token) => {
                      setRobot(!!token);
                      setRecaptchaToken(token || "");
                    }}
                    theme={mode}
                  />
                ) : (
                  <div className={styles.errorText}>
                    reCAPTCHA Configuration Missing (VITE_RECAPTCHA_SITE_KEY)
                  </div>
                )}
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
