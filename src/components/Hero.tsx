"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import VideoPanel from "./VideoPanel";

const SYSTEM_CARDS = [
  {
    label: "01",
    title: "AI Infrastructure",
    description:
      "Private compute, GPU-backed systems, and secure deployments purpose-built for your operations.",
  },
  {
    label: "02",
    title: "Intelligent Systems",
    description:
      "Workflow automation, decision-support, and data pipelines that transform how your team operates.",
  },
  {
    label: "03",
    title: "AI Platforms",
    description:
      "Scalable client-facing applications and custom platforms designed for growth and revenue.",
  },
];

const SCROLL_PAGES = 5;

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const systemZoneRef = useRef<HTMLDivElement>(null);
  const systemVideoRef = useRef<HTMLDivElement>(null);
  const systemCardRefs = useRef<(HTMLDivElement | null)[]>([]);
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

    // ── Phase 1: Hero fade-out (progress 0 → 0.18) ──
    const heroFadeEnd = 0.18;
    const heroOpacity = progress <= 0 ? 1 : Math.max(0, 1 - progress / heroFadeEnd);
    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.style.opacity = String(heroOpacity);
      heroEl.style.pointerEvents = heroOpacity < 0.1 ? "none" : "auto";
    }

    // ── Phase 2: System zone fade-in (progress 0.12 → 0.28) ──
    const zoneEl = systemZoneRef.current;
    if (zoneEl) {
      const zoneFadeStart = 0.12;
      const zoneFadeEnd = 0.28;
      const zoneFadeOutStart = 0.88;
      let zoneOpacity = 0;
      if (progress >= zoneFadeStart && progress <= zoneFadeEnd) {
        zoneOpacity = (progress - zoneFadeStart) / (zoneFadeEnd - zoneFadeStart);
      } else if (progress > zoneFadeEnd && progress < zoneFadeOutStart) {
        zoneOpacity = 1;
      } else if (progress >= zoneFadeOutStart) {
        zoneOpacity = Math.max(0, 1 - (progress - zoneFadeOutStart) / (1 - zoneFadeOutStart));
      }
      zoneEl.style.opacity = String(zoneOpacity);
      zoneEl.style.pointerEvents = zoneOpacity < 0.1 ? "none" : "auto";
    }

    // ── Phase 2b: Video panel scale-in (progress 0.14 → 0.30) ──
    const videoEl = systemVideoRef.current;
    if (videoEl) {
      const vidStart = 0.14;
      const vidEnd = 0.30;
      const vidProgress = Math.max(0, Math.min(1, (progress - vidStart) / (vidEnd - vidStart)));
      const scale = 0.92 + vidProgress * 0.08;
      const translateY = (1 - vidProgress) * 30;
      videoEl.style.transform = `translateY(${translateY}px) scale(${scale})`;
      videoEl.style.opacity = String(vidProgress);
    }

    // ── Phase 3: Cards emerge progressively (progress 0.32 → 0.72) ──
    const cardStart = 0.32;
    const cardSpacing = 0.13;
    for (let i = 0; i < SYSTEM_CARDS.length; i++) {
      const card = systemCardRefs.current[i];
      if (!card) continue;
      const thisStart = cardStart + i * cardSpacing;
      const thisEnd = thisStart + 0.12;
      const cardProgress = Math.max(0, Math.min(1, (progress - thisStart) / (thisEnd - thisStart)));
      const translateY = (1 - cardProgress) * 28;
      const scale = 0.95 + cardProgress * 0.05;
      card.style.opacity = String(cardProgress);
      card.style.transform = `translateY(${translateY}px) scale(${scale})`;
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

        {/* ── SYSTEM TRANSITION ZONE ── */}
        <div
          ref={systemZoneRef}
          className="absolute inset-0 z-10 flex items-center justify-center will-change-[opacity]"
          style={{ opacity: 0, pointerEvents: "none" }}
        >
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10">
            {/* Section label */}
            <p className="text-[11px] md:text-xs text-accent/70 font-mono tracking-[0.2em] uppercase text-center mb-6 md:mb-8">
              Systems Architecture
            </p>

            {/* Vizus Header video — cinematic panel */}
            <div
              ref={systemVideoRef}
              className="will-change-transform mx-auto"
              style={{
                opacity: 0,
                transform: "translateY(30px) scale(0.92)",
              }}
            >
              <VideoPanel
                src="/Vizus Header 480p.mp4"
                className={
                  isMobile
                    ? "w-full aspect-[16/9]"
                    : "w-[85%] mx-auto aspect-[2.2/1]"
                }
                objectFit="cover"
                overlayOpacity={0.12}
                glowColor="rgba(106, 0, 255, 0.08)"
                glowIntensity="subtle"
                borderRadius={isMobile ? "1rem" : "1.25rem"}
              />
            </div>

            {/* Capability cards — emerge below the video */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
              {SYSTEM_CARDS.map((card, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    systemCardRefs.current[i] = el;
                  }}
                  className="will-change-transform"
                  style={{
                    opacity: 0,
                    transform: "translateY(28px) scale(0.95)",
                  }}
                >
                  <div className="relative rounded-xl border border-white/[0.06] bg-surface/40 backdrop-blur-sm p-5 md:p-6 h-full">
                    {/* Subtle top accent line */}
                    <div
                      className="absolute top-0 left-6 right-6 h-px"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, rgba(106, 0, 255, 0.2), rgba(111, 211, 255, 0.15), transparent)",
                      }}
                    />
                    <div className="flex items-baseline gap-3 mb-2.5">
                      <span className="text-[10px] font-mono text-primary/50 tracking-wider">
                        {card.label}
                      </span>
                      <h3 className="text-sm md:text-base font-semibold tracking-tight text-white">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted/70 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
