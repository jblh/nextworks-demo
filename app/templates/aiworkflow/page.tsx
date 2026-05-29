import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBadges } from "./components/TrustBadges";
import { Features } from "./components/Features";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { PresetThemeVars } from "./PresetThemeVars";

export default function AIWorkflowTemplatePage() {
  return (
    <div className="dark" id="home">
      <PresetThemeVars>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <div className="pointer-events-none fixed right-3 bottom-3 z-40 rounded-full border border-white/8 bg-black/30 px-3 py-1.5 text-[11px] text-white/45 backdrop-blur-md sm:right-4 sm:bottom-4 sm:text-xs">
            Demo shown in dark mode · template supports light/dark
          </div>
          <section id="home">
            <Hero />
          </section>
          <TrustBadges />
          <section id="features">
            <Features />
            <ProcessTimeline />
          </section>
          <Testimonials />
          <section id="pricing">
            <Pricing />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <CTA />
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      </PresetThemeVars>
    </div>
  );
}
