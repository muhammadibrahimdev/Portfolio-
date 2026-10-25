"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ProjectGallery } from "@/components/project-gallery";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-panel transition-colors duration-300 hover:border-emerald-dim/60"
    >
      <div className="p-3 pb-0">
        <ProjectGallery
          slug={project.slug}
          name={project.name}
          images={project.images}
          fit={project.imageFit}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-medium text-foreground">
              <Link
                href={`/projects/${project.slug}`}
                className="after:absolute after:inset-0 after:content-['']"
              >
                {project.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
          </div>
          <Badge variant={project.statusTone} className="shrink-0">
            {project.status}
          </Badge>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <span className="flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-emerald">
          View project
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Web, AI and mobile projects. Each one has its own page with the details, the stack and what is still in progress."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
