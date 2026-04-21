"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LaunchHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow — matches Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(106, 0, 255, 0.12) 0%, rgba(59, 0, 185, 0.06) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[0%] left-[5%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(58, 102, 255, 0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-xs text-muted mb-6 md:mb-8"
          >
            <Image src="/vizus-icon.png" alt="" width={16} height={16} />
            24-Hour Launch Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-[4.25rem] font-semibold tracking-tighter leading-[1.05] mb-5 md:mb-6"
          >
            Your Landing Page or Video Campaign.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Live in 24 Hours.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-lg text-muted leading-relaxed max-w-[620px] mx-auto mb-8 md:mb-10"
          >
            Professional landing pages from $249. AI-powered video campaigns
            from $199. No agencies. No 6-week timelines. No surprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          >
            <a
              href="#offers"
              className="relative inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium rounded-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <span className="relative z-10">Start My Project</span>
            </a>
            <a
              href="https://calendly.com/moisesjdelcastillo/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium rounded-lg border border-white/10 text-muted hover:text-white hover:border-white/20 transition-all duration-300"
            >
              Book a 15-min Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
