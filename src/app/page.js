import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />

        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
