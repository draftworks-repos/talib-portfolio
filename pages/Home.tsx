import { Hero } from "../components/Hero";
import { BackgroundEffects } from "../components/BackgroundEffects";
import { ServicesBento } from "../components/ServicesBento";
import { ExtendedCapabilities } from "../components/ExtendedCapabilities";
import { OverviewSection } from "../components/OverviewSection";
import { ClientsMarquee } from "../components/ClientsMarquee";
import { AboutSection } from "../components/AboutSection";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";
import ComingSoon from "../components/ComingSoon";
import PageTransition from "../components/PageTransition";
import ReviewCarousel from "../components/ReviewCarousel";
import StepComponentTwo from "../components/StepCompoenntTwo";

export default function Home() {
  return (
    <PageTransition>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          backgroundColor: "#0b0d13",
          color: "white",
        }}
      >
        <ComingSoon />

        <main>
          <section id="home" style={{ position: "relative" }}>
            <BackgroundEffects />
            <Hero />
          </section>

          <section id="services">
            <ServicesBento />
          </section>

          <section id="process">
            <StepComponentTwo />
          </section>

          <ClientsMarquee direction="left" />

          <ReviewCarousel />

          <section id="extended-capabilities">
            <ExtendedCapabilities />
          </section>

          <OverviewSection />

          <AboutSection />

          <CallToAction />
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
