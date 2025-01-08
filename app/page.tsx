"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FeaturesData from "@/components/data/featuresData";
import PricingData from "@/components/data/pricingData";
import mockTestimonialsData from "@/components/data/testimonialData";
import { useUser } from "@/store/userContext";
import { TypewriterEffectDemo } from "@/components/Hero";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import MovingCardsData from "@/components/data/movingCardsData";
import CoursesContainer from "@/components/coursesContainer";

export default function Home() {
  const { isLoggedIn } = useUser();
  return (
    <div>
      <Navbar />
      <main>
        {!isLoggedIn ? <TypewriterEffectDemo /> : <CoursesContainer/>}
        <HeroParallaxDemo />
        <Features data ={FeaturesData} />
        <Pricing data={PricingData} />
        <Testimonials data={mockTestimonialsData} />
        <InfiniteMovingCards items={MovingCardsData}/>
      </main>
      <footer className="position-fixed bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  );
}
