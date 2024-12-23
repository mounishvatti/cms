"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FeaturesData from "@/components/data/featuresData";
import PricingData from "@/components/data/pricingData";
import mockTestimonialsData from "@/components/data/testimonialData";
import { TypewriterEffectDemo } from "@/components/Hero";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <TypewriterEffectDemo />
        <HeroParallaxDemo />
        <Features data ={FeaturesData} />
        <Pricing data={PricingData} />
        <Testimonials data={mockTestimonialsData} />
      </main>
      <footer className="position-fixed bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  );
}
