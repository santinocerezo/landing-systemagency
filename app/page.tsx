import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import AgentSpotlight from "@/components/AgentSpotlight";
import Automation from "@/components/Automation";
import HowItWorks from "@/components/HowItWorks";
import DemoShowcase from "@/components/DemoShowcase";
import Benefits from "@/components/Benefits";
import BookingSection from "@/components/BookingSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Features />
      <AgentSpotlight />
      <Automation />
      <HowItWorks />
      <DemoShowcase />
      <Benefits />
      <BookingSection />
      <CTASection />
    </>
  );
}
