import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Analytics from "./Analytics";

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
      {/* <RouteTracker /> */}
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
