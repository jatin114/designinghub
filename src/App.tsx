import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import WhyDesigningHub from "./components/WhyDesigningHub";
import Portfolio from "./components/Portfolio";
import PricingBanner from "./components/PricingBanner";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

import { ThemeProvider } from "@/components/theme-provider";

import SEO from "./components/SEO";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update document direction and lang attribute based on current language
    const dir = i18n.dir();
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="designing-hub-theme">
      <div className="min-h-screen">
        <SEO />
        <Navbar />
        <Hero />
        <Services />
        <HowItWorks />
        <WhyDesigningHub />
        <PricingBanner />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
        <FloatingActions />
      </div>
    </ThemeProvider>
  );
}

export default App;
