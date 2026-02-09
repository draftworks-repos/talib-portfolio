"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import "./schedulers.css";
import { useEffect } from "react";
export default function TalibScheduler() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "lets-talk-about-your-project",
      });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#73b7ff" },
          dark: { "cal-brand": "#73b7ff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div className="cursor-cal-wrapper">
      <Cal
        namespace="lets-talk-about-your-project"
        calLink="talib-ali/lets-talk-about-your-project"
        style={{ width: "100%", height: "100%" }}
        config={{ layout: "month_view", theme: "dark" }}
      />
    </div>
  );
}
