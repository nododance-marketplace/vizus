import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkHero from "@/components/work/WorkHero";
import WorkWebsites from "@/components/work/WorkWebsites";
import WorkVideos from "@/components/work/WorkVideos";
import WorkTestimonials from "@/components/work/WorkTestimonials";
import WorkCTA from "@/components/work/WorkCTA";

export const metadata: Metadata = {
  title: "Our Work — Vizus",
  description:
    "Real projects, real results. A selection of landing pages and video campaigns built for clients across industries.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkHero />
        <WorkWebsites />
        <WorkVideos />
        <WorkTestimonials />
        <WorkCTA />
      </main>
      <Footer />
    </>
  );
}
