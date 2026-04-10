"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We audit your operations, identify bottlenecks, and map where AI systems deliver the highest ROI.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We architect a custom system blueprint — infrastructure, data flows, and integration points.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We engineer and deploy your AI system with production-grade code, testing, and security.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We optimize performance, expand capabilities, and ensure the system grows with your business.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 border-t border-white/5">
      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn className="mb-16">
          <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter max-w-[500px]">
            From diagnosis to deployment.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+24px)] right-0 h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}

              <div className="md:px-6">
                {/* Number badge */}
                <div className="w-14 h-14 rounded-2xl bg-surface border border-white/[0.08] flex items-center justify-center mb-5">
                  <span className="text-sm font-mono text-primary font-medium">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
