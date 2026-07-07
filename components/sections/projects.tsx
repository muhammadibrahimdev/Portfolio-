"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  onOpen,
}: {
  project: (typeof projects)[number];
  onOpen: () => void;
}) {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--sx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--sy", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={fadeUp}
      onMouseMove={handleMove}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-panel transition-colors duration-300 hover:border-emerald-dim/60"
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--sx) var(--sy), #34D3990f, transparent 70%)",
        }}
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-medium text-foreground">
              {project.name}
            </h3>
            <p className="text-sm text-muted">{project.tagline}</p>
          </div>
          {project.featured && <Badge variant="emerald">featured</Badge>}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
          <button
            onClick={onOpen}
            className="text-sm font-medium text-emerald transition-colors hover:text-emerald/80"
          >
            View details
          </button>
          <a
            href={project.tags.github}
            className="ml-auto flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            aria-label={`${project.name} GitHub repository`}
          >
            <Github className="h-4 w-4" /> Code
          </a>
          <a
            href={project.tags.demo}
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            aria-label={`${project.name} live demo`}
          >
            <ExternalLink className="h-4 w-4" /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = projects.find((p) => p.slug === activeSlug) ?? null;

  return (
    <section id="projects" className="border-t border-border py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A mix of production internship work and independent backend projects."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={() => setActiveSlug(project.slug)}
            />
          ))}
        </motion.div>
      </Container>

      <Modal
        open={!!active}
        onClose={() => setActiveSlug(null)}
        title={active?.name ?? ""}
      >
        {active && (
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-muted">{active.details}</p>
            <div className="flex flex-wrap gap-2">
              {active.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
            <div className="flex gap-3 border-t border-border pt-4">
              <a
                href={active.tags.github}
                className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-emerald"
              >
                <Github className="h-4 w-4" /> Source
              </a>
              <a
                href={active.tags.demo}
                className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-emerald"
              >
                <ExternalLink className="h-4 w-4" /> Live demo
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
