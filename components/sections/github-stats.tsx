"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { socials, projects } from "@/lib/data";

const pinned = projects.slice(0, 3).map((p) => ({
  name: p.name,
  description: p.tagline,
  stars: 0,
  forks: 0,
}));

export function GithubStats() {
  return (
    <section id="github" className="border-t border-border py-28">
      <Container>
        <SectionHeading
          eyebrow="GitHub"
          title="Open-source & side work"
          description="Pinned repositories, replace stars and forks with live data via the GitHub API once public."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {pinned.map((repo) => (
            <motion.div
              key={repo.name}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-surface p-5 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:border-emerald-dim/60"
            >
              <div className="flex items-center gap-2 text-foreground">
                <Github className="h-4 w-4 text-muted" />
                <span className="font-mono text-sm font-medium">{repo.name}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{repo.description}</p>
              <div className="mt-4 flex gap-4 font-mono text-xs text-subtle">
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3.5 w-3.5" /> {repo.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button variant="secondary" asChild>
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              See full profile on GitHub
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
