"use client";

import { Browsers, FilmStrip, Check } from "@phosphor-icons/react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const offers = [
  {
    icon: Browsers,
    eyebrow: "Offer 01",
    title: "Landing Page Launch",
    price: "$249",
    priceNote: "+ $19/mo Care Plan (optional)",
    bullets: [
      "One high-converting landing page",
      "Custom design matched to your brand",
      "Mobile responsive",
      "Contact form that emails you leads",
      "Hosting & domain setup included",
      "Live in 24 hours",
    ],
    cta: "Start My Landing Page",
    href: "https://calendly.com/moisesjdelcastillo/15min",
  },
  {
    icon: FilmStrip,
    eyebrow: "Offer 02",
    title: "Video Campaign",
    price: "$199",
    priceNote: "Delivered in 3–5 days",
    bullets: [
      "One 45–75 second video",
      "Custom script for your business",
      "AI-generated visuals + professional editing",
      "Formatted for Instagram, TikTok, YouTube",
      "Music + captions included",
      "Delivered in 3–5 days",
    ],
    cta: "Start My Video",
    href: "https://calendly.com/moisesjdelcastillo/15min",
  },
];

export default function LaunchOffers() {
  return (
    <section id="offers" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn className="text-center mb-16 max-w-[640px] mx-auto">
          <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
            Two Productized Offers
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">
            Pick your launch.
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Fixed-scope, fixed-price packages engineered to ship fast without
            cutting corners.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <StaggerItem key={offer.title}>
              <div className="group relative rounded-2xl border border-white/[0.06] bg-surface/50 p-8 md:p-10 h-full hover:border-primary/20 transition-colors duration-500 flex flex-col">
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <offer.icon
                        size={24}
                        weight="duotone"
                        className="text-primary"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-primary/50 tracking-wider uppercase">
                      {offer.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight mb-4">
                    {offer.title}
                  </h3>

                  <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-white/[0.06]">
                    <span className="text-4xl md:text-5xl font-semibold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {offer.price}
                    </span>
                    <span className="text-xs text-muted/70">
                      {offer.priceNote}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {offer.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <Check size={11} weight="bold" className="text-accent" />
                        </span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={offer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg overflow-hidden group/btn"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light" />
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-500" />
                    <span className="relative z-10">{offer.cta}</span>
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
