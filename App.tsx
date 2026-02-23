import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Analytics from "./Analytics";
import Preloader from "./components/loader/PreLoader";

// Lazy-loaded pages
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./components/security/NotFound"));

function AppContent() {
  const location = useLocation();
  const is404 = !["/", "/contact", "/privacy", "/terms"].includes(
    location.pathname,
  );

  return (
    <>
      <Analytics />
      {!is404 && <Navbar />}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Preloader>
        <AppContent />
      </Preloader>
    </BrowserRouter>
  );
}

export default App;
