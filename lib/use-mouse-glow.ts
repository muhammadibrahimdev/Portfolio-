"use client";

import { useRef, useEffect } from "react";

/**
 * Tracks pointer position within an element and writes it to CSS custom
 * properties (--mx, --my) directly on the node, so the glow can follow the
 * cursor without triggering React re-renders on every mousemove.
 */
export function useMouseGlow<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame: number;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.setProperty("--mx", `${x}px`);
        node.style.setProperty("--my", `${y}px`);
      });
    };

    node.addEventListener("pointermove", handlePointerMove);
    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
