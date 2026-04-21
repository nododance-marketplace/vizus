import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaunchHero from "@/components/launch/LaunchHero";
import LaunchOffers from "@/components/launch/LaunchOffers";
import LaunchBundle from "@/components/launch/LaunchBundle";
import LaunchAddOns from "@/components/launch/LaunchAddOns";
import LaunchCarePlan from "@/components/launch/LaunchCarePlan";
import LaunchHowItWorks from "@/components/launch/LaunchHowItWorks";
import LaunchFAQ from "@/components/launch/LaunchFAQ";
import LaunchCTA from "@/components/launch/LaunchCTA";

export const metadata: Metadata = {
  title: "24-Hour Launch Services — Vizus",
  description:
    "Professional landing pages from $249. AI-powered video campaigns from $199. Live in 24 hours. No agencies. No 6-week timelines.",
};

export default function LaunchPage() {
  return (
    <>
      <Navbar />
      <main>
        <LaunchHero />
        <LaunchOffers />
        <LaunchBundle />
        <LaunchAddOns />
        <LaunchCarePlan />
        <LaunchHowItWorks />
        <LaunchFAQ />
        <LaunchCTA />
      </main>
      <Footer />
    </>
  );
}
