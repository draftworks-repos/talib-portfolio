import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GA_ID = "G-X2YD0EHSTS";

const Analytics = () => {
  const location = useLocation();

  // Load GA once (after first interaction)
  useEffect(() => {
    const loadAnalytics = () => {
      if (window.gtag) return;

      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.body.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }

      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", GA_ID);
    };

    window.addEventListener("scroll", loadAnalytics, { once: true });
    window.addEventListener("click", loadAnalytics, { once: true });

    return () => {
      window.removeEventListener("scroll", loadAnalytics);
      window.removeEventListener("click", loadAnalytics);
    };
  }, []);

  // Track route changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", GA_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;
