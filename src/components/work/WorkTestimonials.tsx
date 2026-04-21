"use client";

import { Quotes, User } from "@phosphor-icons/react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

// PLACEHOLDER — Replace quote, clientName, businessName, and photo per testimonial
const testimonials = [
  {
    quote:
      "Placeholder testimonial quote — this is a short positive statement about what Vizus built and the outcome it produced for the client.",
    clientName: "Client Name",
    businessName: "Business Name",
    photo: "",
  },
  {
    quote:
      "Placeholder testimonial quote — this is a short positive statement about what Vizus built and the outcome it produced for the client.",
    clientName: "Client Name",
    businessName: "Business Name",
    photo: "",
  },
  {
    quote:
      "Placeholder testimonial quote — this is a short positive statement about what Vizus built and the outcome it produced for the client.",
    clientName: "Client Name",
    businessName: "Business Name",
    photo: "",
  },
];

export default function WorkTestimonials() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(106, 0, 255, 0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn className="text-center mb-16 max-w-[600px] mx-auto">
          <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">
            What Clients Say
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="relative rounded-2xl border border-white/[0.06] bg-surface/40 p-7 md:p-8 h-full flex flex-col">
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-8 right-8 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(106, 0, 255, 0.2), rgba(111, 211, 255, 0.15), transparent)",
                  }}
                />

                <Quotes
                  size={28}
                  weight="duotone"
                  className="text-primary/40 mb-5"
                />

                <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  {/* PLACEHOLDER — Circular avatar */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/15 to-secondary-light/10 border border-white/[0.08] flex items-center justify-center shrink-0 overflow-hidden">
                    {testimonial.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={testimonial.photo}
                        alt={testimonial.clientName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User
                        size={20}
                        weight="duotone"
                        className="text-accent/70"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {testimonial.clientName}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonial.businessName}
                    </p>
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
