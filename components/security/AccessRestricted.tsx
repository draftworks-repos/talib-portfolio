import "./AccessRestricted.css";
import "./variables.css";

export default function AccessRestricted() {
  return (
    <div className="overlay">
      <div className="card">
        <span className="badge">ACCESS RESTRICTED</span>

        <h1 className="title">
          DEV TOOLS <em>detected</em>
        </h1>

        <p className="text">
          Curious about how this was built?
          <br />
          Let’s connect and chat about it.
        </p>

        <a href="/" className="primary-btn">
          Return Home
        </a>

        <a href="/contact" className="secondary-btn">
          Get in Touch
        </a>

        <div className="links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="/about">About</a>
        </div>

        <div className="footer">© 2026 WebMaak</div>
      </div>
    </div>
  );
}
