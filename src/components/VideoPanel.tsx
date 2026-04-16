"use client";

import { useRef, useEffect } from "react";

interface VideoPanelProps {
  src: string;
  className?: string;
  objectFit?: "cover" | "contain";
  overlayOpacity?: number;
  glowColor?: string;
  glowIntensity?: "subtle" | "medium" | "strong";
  borderRadius?: string;
}

export default function VideoPanel({
  src,
  className = "",
  objectFit = "cover",
  overlayOpacity = 0.15,
  glowColor = "rgba(106, 0, 255, 0.15)",
  glowIntensity = "subtle",
  borderRadius = "1.25rem",
}: VideoPanelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  const glowShadow =
    glowIntensity === "strong"
      ? `0 0 80px 8px ${glowColor}, 0 0 160px 40px ${glowColor}`
      : glowIntensity === "medium"
        ? `0 0 60px 4px ${glowColor}, 0 0 120px 24px ${glowColor}`
        : `0 0 40px 2px ${glowColor}, 0 0 80px 16px ${glowColor}`;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius,
        boxShadow: glowShadow,
      }}
    >
      {/* Border frame */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          borderRadius,
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      />

      {/* Dark gradient fallback while loading */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius,
          background:
            "linear-gradient(135deg, #0B0F1A 0%, #111827 40%, #0B0F1A 100%)",
        }}
      />

      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`relative w-full h-full ${
          objectFit === "cover" ? "object-cover" : "object-contain"
        }`}
        {...({ "webkit-playsinline": "true" } as React.HTMLAttributes<HTMLVideoElement>)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          borderRadius,
          background: `rgba(11, 15, 26, ${overlayOpacity})`,
        }}
      />

      {/* Edge fade — soft vignette to blend into page */}
      <div
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          borderRadius,
          background: `
            linear-gradient(to top, rgba(11, 15, 26, 0.6) 0%, transparent 18%),
            linear-gradient(to bottom, rgba(11, 15, 26, 0.35) 0%, transparent 12%),
            linear-gradient(to left, rgba(11, 15, 26, 0.25) 0%, transparent 10%),
            linear-gradient(to right, rgba(11, 15, 26, 0.25) 0%, transparent 10%)
          `,
        }}
      />
    </div>
  );
}
