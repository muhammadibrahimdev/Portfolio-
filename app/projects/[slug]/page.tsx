import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Download, PlayCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ProjectGallery } from "@/components/project-gallery";
import { projects, type ProjectLink } from "@/lib/data";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

const linkIcons: Record<ProjectLink["kind"], typeof Github> = {
  code: Github,
  demo: ExternalLink,
  apk: Download,
  video: PlayCircle,
};

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Container className="py-12 md:py-16">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>

          <header className="mb-10 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant={project.statusTone}>{project.status}</Badge>
              <span className="text-sm text-subtle">{project.kind}</span>
            </div>
            <h1 className="font-display text-display-lg font-medium text-foreground">
              {project.name}
            </h1>
            <p className="max-w-2xl text-lg text-muted">{project.tagline}</p>
          </header>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="flex flex-col gap-12">
              <ProjectGallery
                slug={project.slug}
                name={project.name}
                images={project.images}
                fit={project.imageFit}
                showArrows
                sizes="(min-width: 1024px) 800px, 100vw"
              />

              <section className="flex flex-col gap-3">
                <h2 className="font-display text-xl font-medium text-foreground">Overview</h2>
                <p className="max-w-prose leading-relaxed text-muted">{project.overview}</p>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="font-display text-xl font-medium text-foreground">The problem</h2>
                <p className="max-w-prose leading-relaxed text-muted">{project.problem}</p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="font-display text-xl font-medium text-foreground">
                  What I built
                </h2>
                <ul className="flex max-w-prose flex-col gap-2.5">
                  {project.built.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {project.planned && (
                <section className="flex flex-col gap-4">
                  <h2 className="font-display text-xl font-medium text-foreground">
                    Planned, not built yet
                  </h2>
                  <ul className="flex max-w-prose flex-col gap-2.5">
                    {project.planned.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-muted">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full border border-subtle" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 shadow-panel">
                <h2 className="font-display text-base font-medium text-foreground">Tech stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-panel">
                <h2 className="font-display text-base font-medium text-foreground">Links</h2>
                {project.links.length > 0 ? (
                  <ul className="flex flex-col gap-3">
                    {project.links.map((link) => {
                      const Icon = linkIcons[link.kind];
                      return (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-emerald"
                          >
                            <Icon className="h-4 w-4" /> {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-sm text-muted">No public links yet.</p>
                )}
                {project.note && (
                  <p className="border-t border-border pt-4 text-sm leading-relaxed text-subtle">
                    {project.note}
                  </p>
                )}
              </div>
            </aside>
          </div>

          <nav
            aria-label="Next project"
            className="mt-20 border-t border-border pt-8"
          >
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-emerald-dim/60"
            >
              <span>
                <span className="block text-sm text-subtle">Next project</span>
                <span className="font-display text-lg font-medium text-foreground">
                  {next.name}
                </span>
              </span>
              <ArrowRight className="h-5 w-5 text-emerald transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </nav>
        </Container>
      </main>
      <Footer />
    </>
  );
}
