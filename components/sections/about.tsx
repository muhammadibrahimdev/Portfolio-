"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/container";
import { education } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const facts = [
  { label: "Based in", value: "Karachi, Pakistan" },
  { label: "Studying", value: "BS Software Engineering, SMIU (2024 – 2028)" },
  { label: "Last role", value: "MERN Stack Developer, Technet Cloud (Nov 2025 – May 2026)" },
  { label: "Building now", value: "The AI Multilingual Messenger" },
  { label: "Looking for", value: "A junior full-stack or backend role, or an internship" },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <SectionHeading eyebrow="About" title="A full-stack developer who likes the backend" className="mb-0" />

            <div className="flex max-w-prose flex-col gap-5 text-lg leading-relaxed text-muted">
              <p className="text-foreground">
                I&apos;m a Software Engineering student at SMIU in Karachi. I spent six
                months at Technet Cloud working on a live online store: 20+ storefront
                themes for Sellkar.pk, mobile features in React Native, and a 25-page
                business website.
              </p>
              <p>
                The part I enjoy most is the backend: building APIs, login systems and user
                roles, and keeping each customer&apos;s data separate. That is the kind of work
                I want to keep building in real products and teams.
              </p>
              <p>
                I am also adding Generative AI on top of that base. My PDF question
                generator calls an LLM through FastAPI and LangChain, and I am building a
                Flutter chat app that translates between languages.
              </p>
              <p>
                I want to join a team where I can ship real features, get code review and
                keep learning.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-10">
            <dl className="flex flex-col rounded-2xl border border-border bg-surface px-6 shadow-panel">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 border-b border-border py-4 last:border-b-0 sm:flex-row sm:gap-6"
                >
                  <dt className="w-28 shrink-0 text-sm text-subtle">{fact.label}</dt>
                  <dd className="text-sm leading-relaxed text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-4">
              <h3 className="font-display text-base font-medium text-foreground">Education</h3>
              <ul className="flex flex-col gap-4 border-l border-border pl-5">
                {education.map((item) => (
                  <li key={item.title} className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-foreground">{item.title}</span>
                    <span className="text-sm text-muted">{item.place}</span>
                    <span className="text-xs text-subtle">{item.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
