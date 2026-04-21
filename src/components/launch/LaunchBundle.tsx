"use client";

import { motion } from "framer-motion";
import { Package, Check } from "@phosphor-icons/react";
import { FadeIn } from "@/components/AnimatedSection";

const bundleIncludes = [
  "Everything in Landing Page Launch",
  "Everything in Video Campaign",
  "Coordinated brand direction across both",
  "Priority production slot",
];

export default function LaunchBundle() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(106, 0, 255, 0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn>
          <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-surface/60 via-surface/40 to-surface-light/30 p-8 md:p-14 overflow-hidden">
            {/* Top accent line */}
            <div
              className="absolute top-0 left-10 right-10 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(106, 0, 255, 0.35), rgba(111, 211, 255, 0.25), transparent)",
              }}
            />

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
              {/* Left column */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center">
                    <Package size={24} weight="duotone" className="text-accent" />
                  </div>
                  <span className="text-[11px] font-mono text-accent tracking-[0.2em] uppercase">
                    Bundle · Save $49
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-5 max-w-[560px]">
                  Launch Package —{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Website + Video
                  </span>
                </h2>

                <p className="text-muted text-base md:text-lg leading-relaxed max-w-[520px] mb-8">
                  Get both offers together. A complete launch stack — your
                  landing page and a scroll-stopping video campaign — produced
                  with one coordinated brief.
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {bundleIncludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Check size={11} weight="bold" className="text-accent" />
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column — price + CTA */}
              <div className="w-full lg:w-[340px] shrink-0 rounded-2xl border border-white/[0.08] bg-background/40 backdrop-blur-sm p-7 md:p-8">
                <p className="text-xs font-mono text-muted/60 tracking-wider uppercase mb-4">
                  All-in Price
                </p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl md:text-6xl font-semibold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    $399
                  </span>
                  <span className="text-lg text-muted/50 line-through">
                    $448
                  </span>
                </div>
                <p className="text-xs text-accent/80 mb-8">
                  Save $49 when bundled
                </p>

                <motion.a
                  href="https://calendly.com/moisesjdelcastillo/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="relative inline-flex w-full items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light" />
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  <span className="relative z-10">Get the Bundle</span>
                </motion.a>

                <p className="text-[11px] text-muted/50 mt-4 text-center">
                  Fixed scope · No surprise fees
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
