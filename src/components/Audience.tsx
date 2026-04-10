"use client";

import { FadeIn, FadeInLeft } from "./AnimatedSection";

const clients = [
  { label: "Financial Firms", detail: "Trading systems, risk models, compliance automation" },
  { label: "Engineering Companies", detail: "CAD pipelines, simulation tools, design optimization" },
  { label: "Manufacturing / 3D", detail: "Process automation, quality control, digital twins" },
  { label: "High-End Services", detail: "Client platforms, workflow systems, operational intelligence" },
];

export default function Audience() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <FadeInLeft>
            <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
              Who This Is For
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">
              High-performance businesses where efficiency and scale matter.
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-[480px]">
              We work with companies that have high-value operations,
              repetitive workflows, and the willingness to invest in systems
              that compound over time.
            </p>
          </FadeInLeft>

          {/* Right */}
          <div className="space-y-4">
            {clients.map((client, i) => (
              <FadeIn key={client.label} delay={i * 0.1}>
                <div className="group flex items-start gap-5 p-5 rounded-xl border border-white/[0.04] hover:border-white/[0.08] bg-surface/30 hover:bg-surface/50 transition-all duration-400">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-secondary-light/10 border border-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-mono text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium mb-1">{client.label}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {client.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
