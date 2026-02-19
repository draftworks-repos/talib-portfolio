import { useEffect, useRef } from "react";
import TubesCursor from "threejs-components/build/cursors/tubes1.min.js";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import "./NotFound.css";

const TubesCursorHero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    appRef.current = TubesCursor(canvasRef.current, {
      pixelRatio: 1, // Optimize for high-end PCs and smooth tracking
      tubes: {
        colors: ["#f967fb", "#53bc28", "#6958d5"],
        lights: {
          intensity: 200,
          colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
        },
      },
    });

    return () => {
      if (appRef.current?.destroy) {
        appRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "80px", margin: 0, lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: "60px", margin: 0, marginBottom: "2rem" }}>
          Not Found
        </h2>
        <Link to="/" className="home-btn">
          <Home size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default TubesCursorHero;
