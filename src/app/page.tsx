import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PositioningStrip from "@/components/PositioningStrip";
import Services from "@/components/Services";
import WhyVizus from "@/components/WhyVizus";
import Audience from "@/components/Audience";
import Results from "@/components/Results";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PositioningStrip />
        <Services />
        <WhyVizus />
        <Audience />
        <Results />
        <Process />
        <CTA />
      </main>
      <Footer showLaunchLink />
    </>
  );
}
