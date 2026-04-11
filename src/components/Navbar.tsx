"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/vizus-icon.png"
            alt="Vizus"
            width={32}
            height={32}
          />
          <span className="text-lg font-semibold tracking-tight">Vizus</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#services" className="hover:text-white transition-colors duration-300">
            Services
          </a>
          <a href="#process" className="hover:text-white transition-colors duration-300">
            Process
          </a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">
            Contact
          </a>
        </div>
        <a
          href="https://calendly.com/moisesjdelcastillo/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-5 py-2.5 text-sm font-medium rounded-lg overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light rounded-lg" />
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
          <span className="relative z-10">Book a Call</span>
        </a>
      </div>
    </motion.nav>
  );
}
