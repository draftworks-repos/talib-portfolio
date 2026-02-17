import "./AccessRestricted.css";
import "./variables.css";

export default function AccessRestricted() {
  return (
    <div className="overlay">
      <div className="card">
        {/* LEFT SIDE (Content) */}
        <div className="card-content">
          <span className="badge">ACCESS RESTRICTED</span>

          <h1 className="title">
            DEV TOOLS <em>detected</em>
          </h1>

          <p className="text">
            Curious about how this was built?
            <br />
            Let’s connect and chat about it.
          </p>

          <div className="links">
            <a href="/privacy" aria-label="privacy">
              Privacy
            </a>
            <a href="/terms" aria-label="terms">
              Terms
            </a>
            <a href="/contact" aria-label="contact">
              Contact
            </a>
          </div>

          <div className="footer">Talib Ali © 2026 all rights reserved.</div>
        </div>

        {/* RIGHT SIDE (Actions) */}
        <div className="card-actions">
          <a href="/" className="primary-btn" aria-label="return home">
            Return Home
          </a>

          <a
            href="/contact"
            className="secondary-btn"
            aria-label="get in touch"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
