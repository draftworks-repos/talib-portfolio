import React, { useEffect, useState, useRef } from "react";
import Loader from "./Loader";
import { preloadImages, preloadFonts, warmVideos } from "./usePreloadAssets";

interface PreloaderProps {
  children: React.ReactNode;
}

export const Preloader: React.FC<PreloaderProps> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const loadingStartTime = useRef(Date.now());
  const MIN_LOADING_TIME = 1500; // 1.5 seconds

  useEffect(() => {
    const loadAssets = async () => {
      // 1. Define critical assets (MUST block)
      const criticalHeroAssets = ["/hero/download.webp", "/icons/code.png"];

      // 2. Define non-critical assets (Background preload)
      const logos = Array.from(
        { length: 39 },
        (_, i) => `/marquee-logo/${i + 1}.webp`,
      );
      const techIcons = [
        "/icons/wp.png",
        "/icons/css.png",
        "/icons/html.png",
        "/icons/javascript.png",
        "/icons/nodejs.png",
        "/icons/next-js.png",
        "/icons/react.png",
        "/icons/shopify-hero.png",
        "/icons/webflow.svg",
        "/icons/wix.png",
        "/icons/frammer.png",
        "/icons/mongodb.png",
      ];
      const backgroundAssets = [...logos, ...techIcons];

      const vimeoUrls = [
        "https://player.vimeo.com/video/1164707490",
        "https://player.vimeo.com/video/1164707224",
        "https://player.vimeo.com/video/1164707752",
      ];

      try {
        // 3. Block ONLY on critical assets
        await Promise.all([
          preloadFonts(["Inter"]),
          preloadImages(criticalHeroAssets, (p) => {
            // Hero progress
            setProgress(p * 0.8); // First 80% is Hero
          }),
        ]);

        // 4. Ensure minimum loading time and show progress
        const elapsedTime = Date.now() - loadingStartTime.current;
        const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);

        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsReady(true);
            // 5. Start background preloading AFTER Hero is shown
            requestIdleCallback(() => {
              preloadImages(backgroundAssets, () => {});
              warmVideos(vimeoUrls);
            });
          }, 200);
        }, remainingTime);
      } catch (err) {
        console.error("Asset preload failed:", err);
        setIsReady(true);
      }
    };

    loadAssets();
  }, []);

  if (!isReady) return <Loader progress={progress} />;

  return <div className="app-content-fade-in">{children}</div>;
};

export default Preloader;
