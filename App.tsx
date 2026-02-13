// import React, { useEffect } from "react";
// import { Navbar } from "./components/Navbar";
// import { Hero } from "./components/Hero";
// import { BackgroundEffects } from "./components/BackgroundEffects";
// import { ServicesBento } from "./components/ServicesBento";
// import { OverviewSection } from "./components/OverviewSection";
// import { ClientsMarquee } from "./components/ClientsMarquee";
// import { AboutSection } from "./components/AboutSection";
// import { CallToAction } from "./components/CallToAction";
// import { Footer } from "./components/Footer";
// import ComingSoon from "./components/ComingSoon";

// const App: React.FC = () => {
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = e.clientX / window.innerWidth - 0.5;
//       const y = e.clientY / window.innerHeight - 0.5;
//       document.documentElement.style.setProperty("--mouse-x", x.toString());
//       document.documentElement.style.setProperty("--mouse-y", y.toString());
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         minHeight: "100vh",
//         backgroundColor: "#0b0d13",
//         color: "white",
//       }}
//     >
//       <Navbar />
//       <ComingSoon />

//       <main>
//         <section id="home" style={{ position: "relative" }}>
//           <BackgroundEffects />
//           <Hero />
//         </section>

//         <section id="services">
//           <ServicesBento />
//         </section>

//         <OverviewSection />

//         <ClientsMarquee direction="left" />
//         <ClientsMarquee direction="right" />

//         <AboutSection />

//         <CallToAction />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default App;

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import DevToolsGuard from "@/components/security/DevToolsGuard";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy"; // Added
import Terms from "./pages/Terms"; // Added

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      document.documentElement.style.setProperty("--mouse-x", x.toString());
      document.documentElement.style.setProperty("--mouse-y", y.toString());
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <BrowserRouter>
      <DevToolsGuard>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </DevToolsGuard>
    </BrowserRouter>
  );
}

export default App;
