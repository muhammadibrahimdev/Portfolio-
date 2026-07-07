import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Container, SectionHeading } from "@/components/ui/container";
import { SystemPanel } from "@/components/system-panel";
import { StatusDot } from "@/components/ui/status-dot";

/**
 * TEMPORARY: design-system showcase.
 * This file will be replaced section-by-section (Hero, About, Experience,
 * Skills, Projects, Learning Roadmap, GitHub, Contact) in the next steps.
 * Keeping it here now lets you verify tokens, type, and primitives render
 * correctly before any real content is built on top of them.
 */
export default function StyleGuidePage() {
  return (
    <main className="bg-grid min-h-screen py-24">
      <Container className="flex flex-col gap-20">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald">
            Design system, Stage 1
          </span>
          <h1 className="mt-4 font-display text-display-xl font-medium text-gradient-emerald">
            Foundation preview
          </h1>
          <p className="mt-4 max-w-lg text-muted">
            Colors, type scale, and core primitives. Real sections replace this
            page next.
          </p>
        </div>

        {/* Color tokens */}
        <section>
          <SectionHeading eyebrow="Tokens" title="Color palette" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {[
              { name: "background", cls: "bg-background" },
              { name: "surface", cls: "bg-surface" },
              { name: "surface.raised", cls: "bg-surface-raised" },
              { name: "emerald", cls: "bg-emerald" },
              { name: "azure", cls: "bg-azure" },
              { name: "border.strong", cls: "bg-border-strong" },
            ].map((t) => (
              <div key={t.name} className="flex flex-col gap-2">
                <div className={`h-16 rounded-xl border border-border ${t.cls}`} />
                <span className="font-mono text-xs text-subtle">{t.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <SectionHeading eyebrow="Tokens" title="Typography" />
          <div className="flex flex-col gap-4">
            <p className="font-display text-display-2xl font-medium">Display 2XL</p>
            <p className="font-display text-display-xl font-medium">Display XL</p>
            <p className="font-display text-display-lg font-medium">Display Large</p>
            <p className="font-display text-display-md font-medium">Display Medium</p>
            <p className="max-w-lg text-foreground">
              Body text in Inter, used for paragraphs, descriptions, and
              anything meant to be read comfortably at length.
            </p>
            <p className="font-mono text-sm text-muted">
              IBM Plex Mono, used for tech badges, labels, and system-panel copy.
            </p>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <SectionHeading eyebrow="Primitives" title="Buttons" />
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Download Resume</Button>
            <Button variant="secondary">View Projects</Button>
            <Button variant="ghost">Ghost action</Button>
            <Button variant="link">Link style</Button>
          </div>
        </section>

        {/* Badges */}
        <section>
          <SectionHeading eyebrow="Primitives" title="Badges" />
          <div className="flex flex-wrap gap-3">
            <Badge>node.js</Badge>
            <Badge variant="emerald">
              <StatusDot color="emerald" /> available for work
            </Badge>
            <Badge variant="azure">rest api</Badge>
          </div>
        </section>

        {/* Card */}
        <section>
          <SectionHeading eyebrow="Primitives" title="Card" />
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>ClassPilot</CardTitle>
              <CardDescription>
                Multi-tenant school management SaaS with role-based auth and
                Stripe billing.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>mongodb</Badge>
              <Badge>socket.io</Badge>
              <Badge>jwt</Badge>
            </CardContent>
          </Card>
        </section>

        {/* Signature element */}
        <section>
          <SectionHeading
            eyebrow="Signature"
            title="System panel"
            description="The recurring motif tying the identity together, appears in the hero and echoes in later sections."
          />
          <SystemPanel />
        </section>
      </Container>
    </main>
  );
}
