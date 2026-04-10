"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeIndexRef = useRef(-1);
  const heroOpacityRef = useRef(1);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number>(0);
  const currentTimeRef = useRef(0);
  const targetTimeRef = useRef(0);
  const interpolatingRef = useRef(false);

  // Detect mobile once on mount (client-side only)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth interpolation loop for desktop scroll-driven video
  const interpolate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) {
      interpolatingRef.current = false;
      return;
    }

    const diff = targetTimeRef.current - currentTimeRef.current;

    if (Math.abs(diff) < 0.015) {
      currentTimeRef.current = targetTimeRef.current;
      video.currentTime = currentTimeRef.current;
      interpolatingRef.current = false;
      return;
    }

    currentTimeRef.current += diff * 0.15;
    video.currentTime = currentTimeRef.current;

    requestAnimationFrame(interpolate);
  }, []);

  const onScroll = useCallback(() => {
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const section = sectionRef.current;
      const video = videoRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScroll = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

      // Hero fade
      const heroFadeEnd = window.innerHeight * 0.6;
      const newHeroOpacity = scrolled <= 0 ? 1 : Math.max(0, 1 - scrolled / heroFadeEnd);
      if (Math.abs(heroOpacityRef.current - newHeroOpacity) > 0.01) {
        heroOpacityRef.current = newHeroOpacity;
        setHeroOpacity(newHeroOpacity);
      }

      // Desktop only: scroll-driven video seeking
      if (video && video.duration && window.innerWidth >= 768) {
        targetTimeRef.current = progress * video.duration;
        if (!interpolatingRef.current) {
          interpolatingRef.current = true;
          requestAnimationFrame(interpolate);
        }
      }

      // Copy index
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
        activeIndexRef.current = newIdx;
        setActiveIndex(newIdx);
      }
    });
  }, [interpolate]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const onLoaded = () => {
        currentTimeRef.current = 0;
        targetTimeRef.current = 0;
      };
      video.addEventListener("loadedmetadata", onLoaded);
      return () => video.removeEventListener("loadedmetadata", onLoaded);
    }
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onScroll]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `calc(100vh + ${SCROLL_PAGES * 100}vh)` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* ── VIDEO ── */}
        {/* Desktop: scroll-driven, no autoplay */}
        {!isMobile && (
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Vizus Header 480p.mp4" type="video/mp4" />
          </video>
        )}

        {/* Mobile: autoplay loop — scroll-driven seeking doesn't work
            on iOS Safari / mobile Chrome, so we just let it play.
            Cropped window centered vertically with art-directed focus. */}
        {isMobile && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[55vh] overflow-hidden rounded-3xl mx-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover object-[center_48%]"
              {...{ "webkit-playsinline": "true" } as React.HTMLAttributes<HTMLVideoElement>}
            >
              <source src="/Vizus Header 480p.mp4" type="video/mp4" />
            </video>

            {/* Vignette — heavier top fade to blend seamlessly */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to bottom, #0B0F1A 0%, rgba(11,15,26,0.6) 10%, transparent 22%, transparent 75%, rgba(11,15,26,0.6) 88%, #0B0F1A 100%),
                  linear-gradient(to right, #0B0F1A 0%, transparent 6%, transparent 94%, #0B0F1A 100%)
                `,
              }}
            />
          </div>
        )}

        {/* ── GRADIENT MASKS (desktop only — mobile has its own above) ── */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: `radial-gradient(ellipse 75% 65% at center, transparent 15%, rgba(11,15,26,0.35) 45%, rgba(11,15,26,0.8) 65%, #0B0F1A 88%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none hidden md:block" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none hidden md:block" />
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent pointer-events-none hidden md:block" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent pointer-events-none hidden md:block" />

        {/* ── HERO COPY ── */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center will-change-[opacity]"
          style={{
            opacity: heroOpacity,
            pointerEvents: heroOpacity < 0.1 ? "none" : "auto",
          }}
        >
          <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center pt-0 md:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-xs text-muted mb-6 md:mb-8"
            >
              <Image src="/vizus-icon.png" alt="" width={16} height={16} />
              AI Systems Company
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-6xl lg:text-[4.25rem] font-semibold tracking-tighter leading-[1.05] mb-5 md:mb-6"
            >
              We Build AI Systems That Give Your Business a{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Performance Advantage
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-lg text-muted leading-relaxed max-w-[600px] mx-auto mb-8 md:mb-10"
            >
              Vizus designs and deploys custom AI infrastructure, intelligent
              systems, and scalable platforms for companies that want to move
              faster and increase revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            >
              <a
                href="#contact"
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
        </div>

        {/* ── SCROLL COPY CARDS ── */}
        <div className="absolute inset-0 z-10 flex items-end md:items-center justify-center pointer-events-none px-4 md:px-6 pb-[12vh] md:pb-0">
          {SCROLL_COPY.map((item, i) => (
            <div
              key={i}
              className="absolute flex items-center justify-center will-change-transform"
              style={{
                opacity: activeIndex === i ? 1 : 0,
                transform: `translateY(${activeIndex === i ? 0 : 24}px) scale(${activeIndex === i ? 1 : 0.97})`,
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
