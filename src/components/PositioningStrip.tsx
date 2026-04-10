"use client";

import { FadeIn } from "./AnimatedSection";

export default function PositioningStrip() {
  return (
    <section className="relative border-y border-white/5 bg-surface/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-center">
            {["Not an AI agency.", "Not automation hacks.", "We build real systems."].map(
              (text, i) => (
                <div key={i} className="flex items-center gap-6 md:gap-16">
                  {i > 0 && (
                    <div className="hidden md:block w-px h-5 bg-white/10" />
                  )}
                  <p
                    className={`text-sm md:text-base tracking-wide ${
                      i === 2
                        ? "text-white font-medium"
                        : "text-muted"
                    }`}
                  >
                    {text}
                  </p>
                </div>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
