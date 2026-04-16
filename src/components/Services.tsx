"use client";

import {
  HardDrives,
  GearSix,
  Browsers,
} from "@phosphor-icons/react";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { FadeIn } from "./AnimatedSection";
import VideoPanel from "./VideoPanel";

const services = [
  {
    icon: HardDrives,
    title: "AI Infrastructure",
    description:
      "Private AI environments, GPU-backed systems, secure deployments, and scalable compute — purpose-built for your operations.",
    items: [
      "Private AI environments",
      "GPU-backed systems",
      "Secure deployments",
      "Scalable compute",
    ],
  },
  {
    icon: GearSix,
    title: "Intelligent Systems",
    description:
      "Workflow automation, internal AI tools, decision-support systems, and data pipelines that transform how your team operates.",
    items: [
      "Workflow automation",
      "Internal AI tools",
      "Decision-support systems",
      "Data pipelines",
    ],
  },
  {
    icon: Browsers,
    title: "AI Platforms",
    description:
      "Marketplaces, SaaS tools, client-facing applications, and custom systems designed for scale and revenue generation.",
    items: [
      "Marketplaces",
      "SaaS tools",
      "Client-facing apps",
      "Custom systems",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header row — text left, video right */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 mb-16">
          <div className="flex-1">
            <FadeIn>
              <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
                What We Build
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4 max-w-[600px]">
                We turn businesses into AI-powered systems.
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-[520px]">
                Three pillars of infrastructure designed to increase your
                output, reduce manual work, and drive measurable revenue.
              </p>
            </FadeIn>
          </div>

          {/* AI Architecture video */}
          <FadeIn delay={0.15} className="w-full lg:w-[44%] shrink-0">
            <VideoPanel
              src="/AI Architecture.mp4"
              className="w-full aspect-[16/10]"
              objectFit="contain"
              overlayOpacity={0.1}
              glowColor="rgba(58, 102, 255, 0.1)"
              glowIntensity="subtle"
              borderRadius="1.25rem"
            />
          </FadeIn>
        </div>

        {/* Service cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group relative rounded-2xl border border-white/[0.06] bg-surface/50 p-8 md:p-10 h-full hover:border-primary/20 transition-colors duration-500">
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <service.icon
                      size={24}
                      weight="duotone"
                      className="text-primary"
                    />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-muted/80"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
