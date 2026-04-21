"use client";

import { ArrowUpRight, Browsers } from "@phosphor-icons/react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

// PLACEHOLDER — Replace image, client name, industry, description, and liveUrl per project
const websites = [
  {
    image: "",
    clientName: "Client Name",
    industry: "Industry",
    description: "One-line description of what this landing page accomplished.",
    liveUrl: "https://example.com",
  },
  {
    image: "",
    clientName: "Client Name",
    industry: "Industry",
    description: "One-line description of what this landing page accomplished.",
    liveUrl: "https://example.com",
  },
  {
    image: "",
    clientName: "Client Name",
    industry: "Industry",
    description: "One-line description of what this landing page accomplished.",
    liveUrl: "https://example.com",
  },
  {
    image: "",
    clientName: "Client Name",
    industry: "Industry",
    description: "One-line description of what this landing page accomplished.",
    liveUrl: "https://example.com",
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

                {/* PLACEHOLDER — Screenshot preview */}
                <div
                  className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06]"
                  style={{
                    background:
                      "linear-gradient(135deg, #0B0F1A 0%, #111827 40%, #1a2332 100%)",
                  }}
                >
                  {site.image ? (
                    // Real screenshots swapped in here — replace placeholder block with <img>
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={site.image}
                      alt={site.clientName}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-3 text-muted/40">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <Browsers
                            size={24}
                            weight="duotone"
                            className="text-primary/60"
                          />
                        </div>
                        <span className="text-[11px] font-mono tracking-wider uppercase">
                          Screenshot placeholder
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Edge vignette — matches VideoPanel treatment */}
                  <div
                    className="absolute inset-0 pointer-events-none"
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
