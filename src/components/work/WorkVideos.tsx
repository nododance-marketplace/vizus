"use client";

import { FilmStrip } from "@phosphor-icons/react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

// PLACEHOLDER — Replace videoSrc (MP4 URL), client name, description, and platforms per project
const videos = [
  {
    videoSrc: "",
    clientName: "Client Name",
    description: "Short description of the campaign goal and what it achieved.",
    platforms: ["Instagram", "TikTok"],
  },
  {
    videoSrc: "",
    clientName: "Client Name",
    description: "Short description of the campaign goal and what it achieved.",
    platforms: ["YouTube", "Instagram"],
  },
  {
    videoSrc: "",
    clientName: "Client Name",
    description: "Short description of the campaign goal and what it achieved.",
    platforms: ["TikTok", "Reels"],
  },
  {
    videoSrc: "",
    clientName: "Client Name",
    description: "Short description of the campaign goal and what it achieved.",
    platforms: ["Instagram", "YouTube", "TikTok"],
  },
];

export default function WorkVideos() {
  return (
    <section className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn className="mb-14 max-w-[640px]">
          <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
            Video Campaigns
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">
            Recent Video Campaigns
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {videos.map((video, i) => (
            <StaggerItem key={i}>
              <div className="group relative rounded-2xl border border-white/[0.06] hover:border-primary/20 bg-surface/40 overflow-hidden h-full transition-colors duration-500">
                {/* PLACEHOLDER — Vertical video format (9:16) */}
                <div
                  className="relative aspect-[9/16] overflow-hidden"
                  style={{
                    borderRadius: "1rem 1rem 0 0",
                    boxShadow:
                      "0 0 40px 2px rgba(106, 0, 255, 0.08), 0 0 80px 16px rgba(106, 0, 255, 0.08)",
                  }}
                >
                  {/* Dark fallback */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #0B0F1A 0%, #111827 40%, #0B0F1A 100%)",
                    }}
                  />

                  {video.videoSrc ? (
                    <video
                      src={video.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="relative w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-3 text-muted/40">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <FilmStrip
                            size={24}
                            weight="duotone"
                            className="text-primary/60"
                          />
                        </div>
                        <span className="text-[11px] font-mono tracking-wider uppercase">
                          Video placeholder
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Edge fade — matches VideoPanel treatment */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `
                        linear-gradient(to top, rgba(11, 15, 26, 0.5) 0%, transparent 20%),
                        linear-gradient(to bottom, rgba(11, 15, 26, 0.3) 0%, transparent 15%)
                      `,
                    }}
                  />
                  {/* Inner border */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      borderRadius: "1rem 1rem 0 0",
                    }}
                  />
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-base font-semibold tracking-tight mb-2">
                    {video.clientName}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mb-4 min-h-[2.5rem]">
                    {video.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {video.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-2 py-0.5 rounded-full text-[10px] font-mono text-accent/80 border border-accent/15 bg-accent/5 uppercase tracking-wider"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
