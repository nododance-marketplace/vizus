"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import LazyVideo from "@/components/LazyVideo";

const websites = [
  {
    videoSrc: "/work/websites/3dmates.mp4",
    clientName: "3DMates",
    industry: "Manufacturing",
    description:
      "A distributed manufacturing marketplace that connects people who need 3D prints, scans, or designs with local printer owners in the Charlotte area.",
    liveUrl: "https://www.3dmates.tech/",
  },
  {
    videoSrc: "/work/websites/nodo-dance.mp4",
    clientName: "Nodo Dance",
    industry: "Marketplace",
    description:
      "A centralized discovery and booking marketplace for partner dance — connecting dancers, instructors, and events in one place. Eventbrite + Meetup for the dance world.",
    liveUrl: "https://nododance.com/",
  },
  {
    videoSrc: "/work/websites/jovee.mp4",
    clientName: "Jovée Link",
    industry: "Beauty",
    description:
      "An app that connects nail clients with local nail artists — find, compare, and book the perfect artist near you in seconds. No DMs, no walk-ins, no guessing.",
    liveUrl: "https://testjovee.vercel.app/",
  },
  {
    videoSrc: "/work/websites/maloo.mp4",
    clientName: "Maloo",
    industry: "AI Voice",
    description:
      "An AI voice agent that answers calls, takes reservations, and handles orders for restaurants — 24/7.",
    liveUrl: "https://maloo-six.vercel.app/",
  },
];

export default function WorkWebsites() {
  return (
    <section className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn className="mb-14 max-w-[640px]">
          <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
            Websites
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">
            Recent Websites
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {websites.map((site, i) => (
            <StaggerItem key={i}>
              <a
                href={site.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl border border-white/[0.06] hover:border-primary/20 bg-surface/40 overflow-hidden transition-all duration-500 h-full"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Website preview — looping screen recording */}
                <div
                  className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06]"
                  style={{
                    background:
                      "linear-gradient(135deg, #0B0F1A 0%, #111827 40%, #1a2332 100%)",
                  }}
                >
                  <LazyVideo
                    src={site.videoSrc}
                    poster={site.videoSrc.replace(/\.mp4$/, ".jpg")}
                    objectFit="cover"
                    className="absolute inset-0 transition-transform duration-[800ms] group-hover:scale-[1.03]"
                  />
                  {/* Edge vignette — matches VideoPanel treatment */}
                  <div
                    className="absolute inset-0 pointer-events-none z-[2]"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(11, 15, 26, 0.35) 0%, transparent 25%)",
                    }}
                  />
                </div>

                {/* Card body */}
                <div className="relative p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {site.clientName}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-accent border border-accent/20 bg-accent/5 uppercase tracking-wider">
                      {site.industry}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {site.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:text-white transition-colors duration-300">
                    View Live Site
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
