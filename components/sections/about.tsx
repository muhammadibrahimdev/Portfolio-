"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const focusAreas = [
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Redis",
  "System Design",
  "Multi-tenant Auth",
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
          className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16"
        >
          {/* Left column — whoami card */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <SectionHeading eyebrow="About" title="Why backend" className="mb-0" />

            <div className="overflow-hidden rounded-xl border border-border bg-background/60">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                <span className="ml-2 font-mono text-xs text-subtle">
                  whoami
                </span>
              </div>

              <div className="flex flex-col gap-4 px-5 py-6 font-mono text-xs leading-relaxed">
                <div className="flex items-center gap-2 text-muted">
                  <span className="text-emerald">➜</span>
                  <span>whoami --verbose</span>
                </div>

                <div className="flex flex-col gap-2.5 border-l border-border pl-4">
                  <div className="flex justify-between gap-4">
                    <span className="text-subtle">name</span>
                    <span className="text-foreground">Muhammad Ibrahim</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-subtle">role</span>
                    <span className="text-foreground">Backend Engineer</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-subtle">stack</span>
                    <span className="text-foreground">
                      Node · Postgres · Redis
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-subtle">status</span>
                    <span className="flex items-center gap-1.5 text-emerald">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald" />
                      available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column — copy + focus chips */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <p className="text-lg leading-relaxed text-foreground">
                I like the part of the stack most people don&apos;t see. Two
                internships, a MERN and React Native role at Sellkar and a
                backend role at Saylani, pulled me from{" "}
                <span className="text-foreground">&quot;can build a UI&quot;</span>{" "}
                to{" "}
                <span className="font-medium text-emerald">
                  &quot;can design the system underneath it,&quot;
                </span>{" "}
                and that&apos;s where I&apos;ve stayed since.
              </p>
              <p className="leading-relaxed text-muted">
                Right now that means going deeper on Node.js, PostgreSQL,
                Docker, and Redis, and thinking in terms of system design
                instead of single endpoints: multi-tenant architecture, auth
                that scales, and APIs built to be maintained, not just
                shipped.
              </p>
            </div>

            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <span className="font-mono text-xs uppercase tracking-wide text-subtle">
                Currently focused on
              </span>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border bg-background/60 px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-emerald/40 hover:text-emerald"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}