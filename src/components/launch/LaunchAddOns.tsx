"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const addOns = [
  { label: "Extra landing page section", price: "+$75" },
  { label: "AI chatbot integration", price: "+$299" },
  { label: "Stripe payment integration", price: "+$199" },
  { label: "Calendly/booking integration", price: "+$49" },
  { label: "Copywriting (I write your content)", price: "+$99" },
  { label: "Logo creation", price: "+$99" },
  { label: "Rush delivery (12-hour turnaround)", price: "+$99" },
  { label: "Extra revision round", price: "+$49" },
];

export default function LaunchAddOns() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn className="mb-16 max-w-[640px]">
          <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
            Add-Ons
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">
            Need More? Add-Ons Available.
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Layer on exactly what your launch needs — nothing you don&apos;t.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {addOns.map((addOn, i) => (
            <StaggerItem key={addOn.label}>
              <div className="group relative rounded-xl border border-white/[0.04] hover:border-white/[0.1] bg-surface/30 hover:bg-surface/50 p-5 md:p-6 h-full transition-all duration-400">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[10px] font-mono text-primary/50 tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-mono text-accent font-medium">
                    {addOn.price}
                  </span>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  {addOn.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
