"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-emerald focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <Image
              src="/avatar.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full ring-1 ring-border-strong"
            />
            <span className="font-display text-sm font-medium text-foreground">
              Muhammad Ibrahim
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <Button size="sm" className="hidden md:inline-flex" asChild>
            <a href="/resume.pdf" download>
              Resume
            </a>
          </Button>

          <button
            className="p-2 text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>

        <nav
          aria-label="Mobile"
          className={cn(
            "overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 ease-signature md:hidden",
            open ? "max-h-80" : "max-h-0 border-t-0"
          )}
        >
          <Container className="flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-muted transition-colors hover:bg-surface-raised hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </Container>
        </nav>
      </header>
    </>
  );
}
