"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { StatusDot } from "@/components/ui/status-dot";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useMouseGlow } from "@/lib/use-mouse-glow";

export function Hero() {
  const glowRef = useMouseGlow<HTMLDivElement>();

  return (
    <section
      ref={glowRef}
      id="home"
      className="relative flex flex-col justify-center overflow-hidden py-14 md:py-20"
      style={{ "--mx": "50%", "--my": "40%" } as React.CSSProperties}
    >
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx) var(--my), #34D39914, transparent 70%)",
        }}
      />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 rounded-full border border-border-strong bg-surface-raised px-3 py-1.5">
              <StatusDot color="emerald" />
              <span className="text-xs text-muted">
                Open to junior full-stack and backend roles
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-display-xl font-medium leading-[1.1] text-foreground"
          >
            Muhammad Ibrahim
          
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-lg text-lg leading-relaxed text-muted">
            I am a Software engineer. I build web and mobile apps with
            React, Node.js and Python, and add LLM features where they help the product.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <Button variant="primary" size="lg" asChild>
              <a href="/resume.pdf" download="Muhammad_Ibrahim_CV.pdf">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#projects">
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.09, 0.3)}
          className="relative flex justify-center lg:justify-end"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(55% 55% at 50% 40%, #34D3992e, transparent 72%)",
            }}
          />

          <div aria-hidden className="pointer-events-none absolute -inset-3 z-20">
            <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-emerald/60" />
            <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-emerald/60" />
            <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-emerald/20" />
            <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-emerald/20" />
          </div>

          <div className="relative z-10 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border-strong">
            <Image
              src="/ibrahim.jpg"
              alt="Portrait of Muhammad Ibrahim"
              width={772}
              height={641}
              priority
              sizes="(min-width: 1024px) 384px, 100vw"
              className="h-full w-full select-none object-cover object-[50%_20%]"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
