"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/AnimatedSection";

export default function LaunchCTA() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-gradient-to-t from-primary/[0.06] to-transparent blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeIn className="max-w-[680px] mx-auto text-center">
          <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
            Launch Day
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-6">
            Ready to Launch?
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10 max-w-[520px] mx-auto">
            Pick a package, share your brief, and have your landing page or
            video campaign live within days — not weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <motion.a
              href="#offers"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light opacity-0 group-hover:opacity-80 blur-2xl transition-opacity duration-500" />
              <span className="absolute inset-[1px] bg-gradient-to-r from-primary to-secondary-light rounded-[11px]" />
              <span className="relative z-10">Start My Project</span>
            </motion.a>
            <a
              href="https://calendly.com/moisesjdelcastillo/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-white/10 text-muted hover:text-white hover:border-white/20 transition-all duration-300"
            >
              Book a 15-min Call
            </a>
          </div>

          <p className="text-xs text-muted/50 mt-6">
            24–72 hour delivery · Full ownership · No contracts
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
