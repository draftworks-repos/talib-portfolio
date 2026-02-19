import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Analytics from "./Analytics";
import NotFound from "./components/security/NotFound";

// declare global {
//   interface Window {
//     gtag: (...args: any[]) => void;
//   }
// }

// function RouteTracker() {
//   const location = useLocation();

//   useEffect(() => {
//     if (window.gtag) {
//       window.gtag("config", "G-X2YD0EHSTS", {
//         page_path: location.pathname,
//       });
//     }
//   }, [location]);

//   return null;
// }

function AppContent() {
  const location = useLocation();
  const is404 = !["/", "/contact", "/privacy", "/terms"].includes(
    location.pathname,
  );

  return (
    <>
      {/* <RouteTracker /> */}
      <Analytics />
      {!is404 && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     const x = e.clientX / window.innerWidth - 0.5;
  //     const y = e.clientY / window.innerHeight - 0.5;
  //     document.documentElement.style.setProperty("--mouse-x", x.toString());
  //     document.documentElement.style.setProperty("--mouse-y", y.toString());
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
