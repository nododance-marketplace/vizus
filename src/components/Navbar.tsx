"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/launch", label: "24hr Quick Launch" },
  { href: "/work", label: "Work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close when screen grows past mobile breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-white/5"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <Image
              src="/vizus-icon.png"
              alt="Vizus"
              width={32}
              height={32}
            />
            <span className="text-lg font-semibold tracking-tight">Vizus</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://calendly.com/moisesjdelcastillo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex relative px-5 py-2.5 text-sm font-medium rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light rounded-lg" />
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            <span className="relative z-10">Book a Call</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors duration-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X size={18} weight="bold" className="text-white" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <List size={18} weight="bold" className="text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
            />
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden fixed top-16 left-0 right-0 z-40 px-6 pt-6 pb-8 border-b border-white/5 bg-background/95 backdrop-blur-xl"
            >
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-4 text-lg font-medium text-white/90 hover:text-white rounded-lg hover:bg-white/[0.03] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.a
                href="https://calendly.com/moisesjdelcastillo/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 + NAV_LINKS.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-6 inline-flex w-full items-center justify-center px-6 py-4 text-base font-medium rounded-xl overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light" />
                <span className="relative z-10">Book a Call</span>
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
