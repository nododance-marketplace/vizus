"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import LazyVideo from "@/components/LazyVideo";

const videos = [
  {
    videoSrc: "/work/videos/3dmates-commercial.mp4",
    clientName: "3DMates",
    description:
      "Explainer video demonstrating the utility of the 3DMates marketplace.",
    platforms: ["Instagram", "TikTok", "YouTube"],
  },
  {
    videoSrc: "/work/videos/lasting-impressions.mp4",
    clientName: "Lasting Impressions",
    description:
      "A Charlotte-based luxury detailing company wanted a unique video of a Porsche driving through the city to their auto shop.",
    platforms: ["Instagram", "TikTok"],
  },
  {
    videoSrc: "/work/videos/gridwell.mp4",
    clientName: "Gridwell",
    description:
      "A startup that finds the best deal for power generators near you. Campaign video introducing the product.",
    platforms: ["Instagram", "TikTok", "YouTube"],
  },
  {
    videoSrc: "/work/videos/chyra.mp4",
    clientName: "Chyra",
    description:
      "A Raleigh-based audio engineering company wanted a video to show customers what they do.",
    platforms: ["Instagram", "YouTube"],
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
                {/* Vertical video (9:16) */}
                <div
                  className="relative aspect-[9/16] overflow-hidden"
                  style={{
                    borderRadius: "1rem 1rem 0 0",
                    boxShadow:
                      "0 0 40px 2px rgba(106, 0, 255, 0.08), 0 0 80px 16px rgba(106, 0, 255, 0.08)",
                  }}
                >
                  {/* Dark fallback while loading */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #0B0F1A 0%, #111827 40%, #0B0F1A 100%)",
                    }}
                  />

                  <LazyVideo
                    src={video.videoSrc}
                    poster={video.videoSrc.replace(/\.mp4$/, ".jpg")}
                    objectFit="cover"
                    className="absolute inset-0"
                  />

                  {/* Edge fade — matches VideoPanel treatment */}
                  <div
                    className="absolute inset-0 pointer-events-none z-[2]"
                    style={{
                      background: `
                        linear-gradient(to top, rgba(11, 15, 26, 0.5) 0%, transparent 20%),
                        linear-gradient(to bottom, rgba(11, 15, 26, 0.3) 0%, transparent 15%)
                      `,
                    }}
                  />
                  {/* Inner border */}
                  <div
                    className="absolute inset-0 pointer-events-none z-[3]"
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
