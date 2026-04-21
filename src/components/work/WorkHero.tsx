"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WorkHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
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
            Our Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-[4.25rem] font-semibold tracking-tighter leading-[1.05] mb-5 md:mb-6"
          >
            Real Projects.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Real Results.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-lg text-muted leading-relaxed max-w-[560px] mx-auto"
          >
            A selection of landing pages and video campaigns built for clients
            across industries.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
