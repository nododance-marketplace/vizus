"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import VideoPanel from "./VideoPanel";

const SCROLL_COPY = [
  {
    title: "Intelligent Infrastructure",
    description:
      "We architect AI systems that integrate seamlessly into your existing stack — not bolt-on tools, but core infrastructure that scales with your business.",
  },
  {
    title: "Custom-Built for You",
    description:
      "Every system we deploy is engineered around your data, your workflows, and your competitive landscape. No templates. No generic solutions.",
  },
  {
    title: "Measurable Impact",
    description:
      "Our systems are designed to move the metrics that matter — revenue, efficiency, speed-to-market. We build for outcomes, not demos.",
  },
];

const SCROLL_PAGES = SCROLL_COPY.length + 1;

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(-1);
  const animFrameRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const tick = useCallback(() => {
    animFrameRef.current = requestAnimationFrame(tick);

    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const totalScroll = section.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

    const heroFadeEnd = window.innerHeight * 0.6;
    const heroOpacity =
      scrolled <= 0 ? 1 : Math.max(0, 1 - scrolled / heroFadeEnd);
    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.style.opacity = String(heroOpacity);
      heroEl.style.pointerEvents = heroOpacity < 0.1 ? "none" : "auto";
    }

    const copyStart = 0.2;
    const copyEnd = 0.92;
    let newIdx = -1;
    if (progress >= copyStart && progress <= copyEnd) {
      const copyProgress = (progress - copyStart) / (copyEnd - copyStart);
      newIdx = Math.min(
        SCROLL_COPY.length - 1,
        Math.floor(copyProgress * SCROLL_COPY.length)
      );
    }
    if (activeIndexRef.current !== newIdx) {
      const prev = activeIndexRef.current;
      if (prev >= 0 && cardRefs.current[prev]) {
        cardRefs.current[prev]!.style.opacity = "0";
        cardRefs.current[prev]!.style.transform =
          "translateY(24px) scale(0.97)";
      }
      if (newIdx >= 0 && cardRefs.current[newIdx]) {
        cardRefs.current[newIdx]!.style.opacity = "1";
        cardRefs.current[newIdx]!.style.transform = "translateY(0) scale(1)";
      }
      activeIndexRef.current = newIdx;
    }
  }, []);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [tick]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `calc(100vh + ${SCROLL_PAGES * 100}vh)` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[20%] right-[15%] w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(106, 0, 255, 0.12) 0%, rgba(59, 0, 185, 0.06) 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(58, 102, 255, 0.1) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Top/bottom edge gradients */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-[5]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-[5]" />

        {/* ── HERO CONTENT — split layout ── */}
        <div
          ref={heroRef}
          className="absolute inset-0 z-10 flex items-center will-change-[opacity]"
          style={{ opacity: 1 }}
        >
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20">
              {/* Left — text */}
              <div className="flex-1 text-center md:text-left pt-16 md:pt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-xs text-muted mb-6 md:mb-8"
                >
                  <Image src="/vizus-icon.png" alt="" width={16} height={16} />
                  AI Systems Company
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-3xl md:text-5xl lg:text-[4.25rem] font-semibold tracking-tighter leading-[1.05] mb-5 md:mb-6"
                >
                  We Build AI Systems That Give Your Business a{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Performance Advantage
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-sm md:text-lg text-muted leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-8 md:mb-10"
                >
                  Vizus designs and deploys custom AI infrastructure, intelligent
                  systems, and scalable platforms for companies that want to move
                  faster and increase revenue.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start"
                >
                  <a
                    href="https://calendly.com/moisesjdelcastillo/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium rounded-lg overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light" />
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-light opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    <span className="relative z-10">Book a Strategy Call</span>
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium rounded-lg border border-white/10 text-muted hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    View Services
                  </a>
                </motion.div>
              </div>

              {/* Right — Vizus Bot video panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full md:w-[48%] lg:w-[45%] shrink-0"
              >
                <VideoPanel
                  src="/Vizus Bot.mp4"
                  className={
                    isMobile
                      ? "w-full aspect-[16/10]"
                      : "w-full aspect-[4/3]"
                  }
                  objectFit="contain"
                  overlayOpacity={0.08}
                  glowColor="rgba(106, 0, 255, 0.12)"
                  glowIntensity="medium"
                  borderRadius="1.5rem"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── SCROLL COPY CARDS ── */}
        <div className="absolute inset-0 z-10 flex items-end md:items-center justify-center pointer-events-none px-4 md:px-6 pb-[18vh] md:pb-0">
          {SCROLL_COPY.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute flex items-center justify-center will-change-transform"
              style={{
                opacity: 0,
                transform: "translateY(24px) scale(0.97)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              }}
            >
              <div className="max-w-[640px] w-[calc(100vw-2rem)] md:w-auto rounded-2xl border border-white/[0.08] bg-background/85 md:bg-background/70 backdrop-blur-2xl px-6 py-7 md:px-14 md:py-12 text-center shadow-2xl shadow-black/50">
                <h2 className="text-xl md:text-5xl font-semibold tracking-tighter leading-[1.1] mb-2 md:mb-4 text-white">
                  {item.title}
                </h2>
                <p className="text-xs md:text-lg text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
