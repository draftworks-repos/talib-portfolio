import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-X2YD0EHSTS", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;
