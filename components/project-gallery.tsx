"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  slug: string;
  name: string;
  images: string[];
  fit?: "cover" | "contain";
  /** Milliseconds between automatic slide changes. */
  interval?: number;
  showArrows?: boolean;
  sizes?: string;
  className?: string;
}

function checkImage(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

export function ProjectGallery({
  slug,
  name,
  images,
  fit = "cover",
  interval = 3800,
  showArrows = false,
  sizes = "(min-width: 1024px) 560px, 100vw",
  className,
}: ProjectGalleryProps) {
  const [available, setAvailable] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Only show images that exist in /public/projects/<slug>/.
  useEffect(() => {
    let cancelled = false;
    const sources = images.map((file) => `/projects/${slug}/${file}`);
    Promise.all(sources.map(checkImage)).then((results) => {
      if (cancelled) return;
      setAvailable(sources.filter((_, i) => results[i]));
      setChecked(true);
    });
    return () => {
      cancelled = true;
    };
  }, [slug, images]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const count = available.length;

  useEffect(() => {
    if (count < 2 || paused || reduceMotion) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearInterval(id);
  }, [count, paused, reduceMotion, interval]);

  const go = (next: number) => setIndex(((next % count) + count) % count);
  const current = count > 0 ? available[index % count] : null;

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-surface-raised",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label={`${name} screenshots`}
    >
      {current ? (
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={current}
              alt={`${name} screenshot ${(index % count) + 1} of ${count}`}
              fill
              sizes={sizes}
              className={fit === "contain" ? "object-contain" : "object-cover object-top"}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-grid-soft text-subtle">
          <ImageIcon className="h-8 w-8" aria-hidden />
          {checked && <span className="text-sm">Screenshots coming soon</span>}
        </div>
      )}

      {count > 1 && showArrows && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border-strong bg-background/70 p-2 text-foreground backdrop-blur transition-colors hover:border-emerald/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border-strong bg-background/70 p-2 text-foreground backdrop-blur transition-colors hover:border-emerald/50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {count > 1 && (
        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full bg-background/60 px-2 py-1.5 backdrop-blur">
          {available.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === index % count}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index % count ? "w-5 bg-emerald" : "w-1.5 bg-muted/60 hover:bg-muted"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
