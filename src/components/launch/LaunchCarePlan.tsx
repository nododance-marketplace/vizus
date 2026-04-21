"use client";

import { ShieldCheck, Check } from "@phosphor-icons/react";
import { FadeIn, FadeInLeft } from "@/components/AnimatedSection";

const carePlanItems = [
  "Hosting + SSL certificate + daily backups",
  "Up to 30 minutes of edits per month",
  "Uptime monitoring",
  "Monthly visitor report",
  "Priority 24-hour support",
];

export default function LaunchCarePlan() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-[10%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(111, 211, 255, 0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <FadeInLeft>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-white/[0.08] flex items-center justify-center mb-6">
              <ShieldCheck size={24} weight="duotone" className="text-accent" />
            </div>

            <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
              Optional Care Plan
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">
              Keep Your Site Running —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                $19/month
              </span>
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-[480px] mb-6">
              Optional monthly plan to keep your website maintained, backed up,
              and updated.
            </p>
            <p className="text-xs text-muted/60 font-mono tracking-wider">
              Cancel anytime. No contracts.
            </p>
          </FadeInLeft>

          {/* Right */}
          <div className="space-y-3">
            {carePlanItems.map((item, i) => (
              <FadeIn key={item} delay={i * 0.08}>
                <div className="group flex items-start gap-5 p-5 rounded-xl border border-white/[0.04] hover:border-white/[0.08] bg-surface/30 hover:bg-surface/50 transition-all duration-400">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Check size={14} weight="bold" className="text-accent" />
                  </div>
                  <p className="text-sm md:text-base text-white/95 leading-relaxed pt-1.5">
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
