"use client";

import { FadeIn, FadeInLeft } from "./AnimatedSection";
import VideoPanel from "./VideoPanel";

const transformations = [
  {
    before: "Disconnected tools and manual processes",
    after: "Unified AI infrastructure that runs autonomously",
  },
  {
    before: "Decisions based on lagging reports",
    after: "Real-time intelligence powering every workflow",
  },
  {
    before: "Scaling means scaling headcount",
    after: "Systems that multiply output without adding people",
  },
];

export default function WhyVizus() {
  return (
    <section className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(106, 0, 255, 0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left — copy */}
          <div className="flex-1 order-2 lg:order-1">
            <FadeInLeft>
              <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
                Why Vizus
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-5 max-w-[540px]">
                Replace legacy operations with intelligent systems.
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-[480px] mb-10">
                Most companies are held back by fragmented tools and manual
                workflows. Vizus replaces that complexity with AI systems
                engineered for performance.
              </p>
            </FadeInLeft>

            {/* Transformation points */}
            <div className="space-y-5">
              {transformations.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    {/* Arrow indicator */}
                    <div className="shrink-0 mt-1.5 flex flex-col items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-muted/30" />
                      <div className="w-px h-5 bg-gradient-to-b from-muted/20 to-accent/40" />
                      <div className="w-2 h-2 rounded-full bg-accent/70" />
                    </div>
                    <div>
                      <p className="text-sm text-muted/60 line-through decoration-muted/20 mb-1.5">
                        {item.before}
                      </p>
                      <p className="text-sm text-white/90 font-medium">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right — System Transformation video */}
          <FadeIn
            delay={0.15}
            className="w-full lg:w-[46%] shrink-0 order-1 lg:order-2"
          >
            <VideoPanel
              src="/System Transformation.mp4"
              className="w-full aspect-[16/10]"
              objectFit="contain"
              overlayOpacity={0.1}
              glowColor="rgba(111, 211, 255, 0.08)"
              glowIntensity="subtle"
              borderRadius="1.25rem"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
