"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  /** Poster image shown before the video loads — prevents the "blank panel" flash. */
  poster?: string;
  className?: string;
  objectFit?: "cover" | "contain";
  /** Start loading when the video is within this many pixels of the viewport. */
  rootMargin?: string;
}

/**
 * Video element that only loads and plays when it enters the viewport.
 * Pauses when scrolled off-screen so 8+ videos don't all decode at once.
 */
export default function LazyVideo({
  src,
  poster,
  className = "",
  objectFit = "cover",
  rootMargin = "200px",
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin, threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      loop
      muted
      playsInline
      preload="none"
      className={`w-full h-full ${
        objectFit === "cover" ? "object-cover" : "object-contain"
      } ${className}`}
      {...({ "webkit-playsinline": "true" } as React.HTMLAttributes<HTMLVideoElement>)}
    />
  );
}
