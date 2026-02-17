// import { Helmet } from "react-helmet";
// import React, { lazy, Suspense } from "react";
// import { Hero } from "../components/Hero";
// import { BackgroundEffects } from "../components/BackgroundEffects";
// import ComingSoon from "../components/ComingSoon";
// import PageTransition from "../components/PageTransition";

// // Lazy load components below the fold
// const Showreel = lazy(() => import("../components/Section2_Showreel/Showreel"));
// const ServicesBento = lazy(() =>
//   import("../components/ServicesBento").then((m) => ({
//     default: m.ServicesBento,
//   })),
// );
// const StepComponentTwo = lazy(() => import("../components/StepCompoenntTwo"));
// const FrammerMarquee = lazy(() =>
//   import("../components/FrammerMarquee").then((m) => ({
//     default: m.FrammerMarquee,
//   })),
// );
// const ReviewCarousel = lazy(() => import("../components/ReviewCarousel"));
// const ExtendedCapabilities = lazy(() =>
//   import("../components/ExtendedCapabilities").then((m) => ({
//     default: m.ExtendedCapabilities,
//   })),
// );
// const AboutSection = lazy(() =>
//   import("../components/AboutSection").then((m) => ({
//     default: m.AboutSection,
//   })),
// );
// const OverviewSection = lazy(() =>
//   import("../components/OverviewSection").then((m) => ({
//     default: m.OverviewSection,
//   })),
// );
// const CallToAction = lazy(() =>
//   import("../components/CallToAction").then((m) => ({
//     default: m.CallToAction,
//   })),
// );
// const Footer = lazy(() =>
//   import("../components/Footer").then((m) => ({ default: m.Footer })),
// );

// const Home: React.FC = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Talib Ali | Full Stack Developer in Kolkata, India</title>

//         <meta
//           name="description"
//           content="Talib Ali is a full stack developer in Kolkata, India, building scalable web applications, custom-coded websites, and high-performance digital solutions across modern platforms."
//         />

//         <meta
//           name="keywords"
//           content="Full Stack Developer Kolkata, React Developer, Next.js Developer, WordPress Developer, Custom Web Applications"
//         />

//         <meta
//           property="og:title"
//           content="Talib Ali | Full Stack Developer in Kolkata"
//         />

//         <meta
//           property="og:description"
//           content="Building scalable web applications, high-performance websites, and modern digital platforms."
//         />

//         <meta property="og:url" content="https://talibali.in/" />

//         <link rel="canonical" href="https://talibali.in/" />
//       </Helmet>
//       <PageTransition>
//         <div
//           style={{
//             position: "relative",
//             minHeight: "100vh",
//             backgroundColor: "#0b0d13",
//             color: "white",
//           }}
//         >
//           <ComingSoon />

//           <main>
//             <section id="home" style={{ position: "relative" }}>
//               <BackgroundEffects />
//               <Hero />
//             </section>

//             <Suspense fallback={null}>
//               <section id="showreel">
//                 <Showreel />
//               </section>

//               <section id="services">
//                 <ServicesBento />
//               </section>

//               <section id="process">
//                 <StepComponentTwo />
//               </section>

//               <FrammerMarquee direction="left" />

//               <ReviewCarousel />

//               <section id="extended-capabilities" style={{ marginBottom: "0" }}>
//                 <ExtendedCapabilities />
//               </section>

//               <AboutSection />

//               <OverviewSection />

//               <CallToAction />

//               <Footer />
//             </Suspense>
//           </main>
//         </div>
//       </PageTransition>
//     </>
//   );
// };

// export default Home;

import { Helmet } from "react-helmet";
import React, { lazy, Suspense, useEffect } from "react";
import { Hero } from "../components/Hero";
import { BackgroundEffects } from "../components/BackgroundEffects";
import ComingSoon from "../components/ComingSoon";
import "./home.css"; // move inline styles here

// Lazy-loaded sections (below the fold)
const Showreel = lazy(() => import("../components/Section2_Showreel/Showreel"));
const ServicesBento = lazy(() =>
  import("../components/ServicesBento").then((m) => ({
    default: m.ServicesBento,
  })),
);
const StepComponentTwo = lazy(() => import("../components/StepCompoenntTwo"));
const FrammerMarquee = lazy(() =>
  import("../components/FrammerMarquee").then((m) => ({
    default: m.FrammerMarquee,
  })),
);
const ReviewCarousel = lazy(() => import("../components/ReviewCarousel"));
const ExtendedCapabilities = lazy(() =>
  import("../components/ExtendedCapabilities").then((m) => ({
    default: m.ExtendedCapabilities,
  })),
);
const AboutSection = lazy(() =>
  import("../components/AboutSection").then((m) => ({
    default: m.AboutSection,
  })),
);
const OverviewSection = lazy(() =>
  import("../components/OverviewSection").then((m) => ({
    default: m.OverviewSection,
  })),
);
const CallToAction = lazy(() =>
  import("../components/CallToAction").then((m) => ({
    default: m.CallToAction,
  })),
);
const Footer = lazy(() =>
  import("../components/Footer").then((m) => ({
    default: m.Footer,
  })),
);

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Talib Ali | Full Stack Developer in Kolkata, India</title>

        <meta
          name="description"
          content="Talib Ali is a full stack developer in Kolkata, India, building scalable web applications, custom-coded websites, and high-performance digital solutions across modern platforms."
        />

        <meta
          name="keywords"
          content="Full Stack Developer Kolkata, React Developer, Next.js Developer, WordPress Developer, Custom Web Applications"
        />

        <meta
          property="og:title"
          content="Talib Ali | Full Stack Developer in Kolkata"
        />

        <meta
          property="og:description"
          content="Building scalable web applications, high-performance websites, and modern digital platforms."
        />

        <meta property="og:url" content="https://talibali.in/" />
        <link
          rel="canonical"
          aria-label="canonical"
          href="https://talibali.in/"
        />
      </Helmet>

      <div className="home-wrapper">
        <ComingSoon />

        <main>
          {/* HERO (above the fold - no lazy) */}
          <section id="home" className="home-hero-section">
            <BackgroundEffects />
            <Hero />
          </section>

          {/* BELOW THE FOLD — isolated Suspense boundaries */}

          <section id="showreel">
            <Suspense fallback={null}>
              <Showreel />
            </Suspense>
          </section>

          <section id="services">
            <Suspense fallback={null}>
              <ServicesBento />
            </Suspense>
          </section>

          <section id="process">
            <Suspense fallback={null}>
              <StepComponentTwo />
            </Suspense>
          </section>

          <Suspense fallback={null}>
            <FrammerMarquee direction="left" />
          </Suspense>

          <Suspense fallback={null}>
            <ReviewCarousel />
          </Suspense>

          <section id="extended-capabilities" className="no-margin-bottom">
            <Suspense fallback={null}>
              <ExtendedCapabilities />
            </Suspense>
          </section>

          <Suspense fallback={null}>
            <AboutSection />
          </Suspense>

          <Suspense fallback={null}>
            <OverviewSection />
          </Suspense>

          <Suspense fallback={null}>
            <CallToAction />
          </Suspense>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Home;
