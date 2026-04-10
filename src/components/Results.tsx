"use client";

import {
  Lightning,
  ChartLineUp,
  UsersFour,
  Trophy,
} from "@phosphor-icons/react";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { FadeIn } from "./AnimatedSection";

const results = [
  {
    icon: Lightning,
    title: "Faster Operations",
    description: "Eliminate bottlenecks and reduce processing time across core workflows.",
  },
  {
    icon: ChartLineUp,
    title: "Increased Output",
    description: "Scale your team's capacity without scaling headcount.",
  },
  {
    icon: UsersFour,
    title: "Reduced Manual Work",
    description: "Automate repetitive tasks so your team focuses on high-value decisions.",
  },
  {
    icon: Trophy,
    title: "Competitive Advantage",
    description: "Operate with systems your competitors haven't built yet.",
  },
];

export default function Results() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn className="text-center mb-16">
          <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
            What You Get
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mx-auto max-w-[600px]">
            Measurable impact across your operations.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item) => (
            <StaggerItem key={item.title}>
              <div className="relative p-6 md:p-8 rounded-2xl border border-white/[0.04] bg-surface/30 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-white/[0.06] flex items-center justify-center mx-auto mb-5">
                  <item.icon size={22} weight="duotone" className="text-accent" />
                </div>
                <h3 className="text-base font-semibold tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
