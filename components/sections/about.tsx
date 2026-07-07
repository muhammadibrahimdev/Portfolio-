"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const stats = [
  { label: "internships", value: "2" },
  { label: "themes shipped", value: "20+" },
  { label: "focus", value: "backend" },
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
          className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <SectionHeading eyebrow="About" title="Why backend" className="mb-0" />
            <Image
              src="/avatar.png"
              alt="Muhammad Ibrahim"
              width={220}
              height={220}
              className="h-44 w-44 rounded-full ring-2 ring-border-strong"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-foreground">
              I like the part of the stack most people don&apos;t see. Two
              internships, a MERN and React Native role at Sellkar and a
              backend role at Saylani, pulled me from &quot;can build a
              UI&quot; to &quot;can design the system underneath it,&quot; and
              that&apos;s where I&apos;ve stayed since.
            </p>
            <p className="leading-relaxed text-muted">
              Right now that means going deeper on Node.js, PostgreSQL,
              Docker, and Redis, and thinking in terms of system design
              instead of single endpoints: multi-tenant architecture, auth
              that scales, and APIs built to be maintained, not just shipped.
            </p>

            <div className="mt-4 flex gap-8 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-display text-2xl font-medium text-emerald">
                    {s.value}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wide text-subtle">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
