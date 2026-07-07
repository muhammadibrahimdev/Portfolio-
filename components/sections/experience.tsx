"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/container";
import { slideInLeft, staggerContainer, viewportOnce } from "@/lib/animations";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Two internships that shaped how I think about building software."
        />

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="relative flex flex-col gap-10 border-l border-border pl-8"
        >
          {experience.map((job) => (
            <motion.li key={job.company} variants={slideInLeft} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-emerald bg-background" />
              <span className="font-mono text-xs uppercase tracking-wide text-emerald">
                {job.period}
              </span>
              <h3 className="mt-1 font-display text-xl font-medium text-foreground">
                {job.role}
              </h3>
              <p className="text-sm text-muted">{job.company}</p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
