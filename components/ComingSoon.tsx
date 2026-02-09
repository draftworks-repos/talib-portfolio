import { useEffect, useState } from "react";
import "./ComingSoon.css";

const ComingSoon = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target?.closest('[data-coming-soon="true"]')) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  if (!open) return null;

  return (
    <div className="cs-overlay" onClick={() => setOpen(false)}>
      <div className="cs-modal" onClick={(e) => e.stopPropagation()}>
        <span className="cs-badge">🚧</span>

        <h2 className="cs-title">We’re cooking</h2>

        <p className="cs-desc">
          This feature isn’t live yet. We are cooking something solid. Stay
          tuned.
        </p>

        <button className="cs-btn" onClick={() => setOpen(false)}>
          Got it
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
