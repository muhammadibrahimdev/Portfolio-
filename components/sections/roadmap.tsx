"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { roadmap } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-border py-28">
      <Container className="max-w-2xl">
        <SectionHeading
          eyebrow="Currently learning"
          title="Learning roadmap"
          description="What I'm deliberately working through right now, in order."
        />

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="flex flex-col"
        >
          {roadmap.map((item, i) => (
            <motion.li key={item.label} variants={fadeUp} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs",
                    item.status === "in-progress"
                      ? "border-emerald bg-emerald-glow text-emerald"
                      : "border-border-strong text-subtle"
                  )}
                >
                  {i + 1}
                </span>
                {i < roadmap.length - 1 && (
                  <span className="my-1 w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-8">
                <p className="font-display text-base font-medium text-foreground">
                  {item.label}
                </p>
                <span
                  className={cn(
                    "font-mono text-xs",
                    item.status === "in-progress" ? "text-emerald" : "text-subtle"
                  )}
                >
                  {item.status === "in-progress" ? "in progress" : "up next"}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
