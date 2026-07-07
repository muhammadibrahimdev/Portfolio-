"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-28">
      <Container>
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={fadeUp}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-panel transition-all duration-300 ease-signature hover:-translate-y-1 hover:border-emerald-dim/60"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-emerald">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
