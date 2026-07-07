// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Download, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Container } from "@/components/ui/container";
// import { StatusDot } from "@/components/ui/status-dot";
// import { SystemPanel } from "@/components/system-panel";
// import { fadeUp, staggerContainer } from "@/lib/animations";
// import { useMouseGlow } from "@/lib/use-mouse-glow";

// export function Hero() {
//   const glowRef = useMouseGlow<HTMLDivElement>();

//   return (
//     <section
//       ref={glowRef}
//       id="home"
//       className="relative flex flex-col justify-center overflow-hidden py-14 md:py-16"
//       style={
//         {
//           "--mx": "50%",
//           "--my": "40%",
//         } as React.CSSProperties
//       }
//     >
//       {/* Decorative background layer ONLY — the mask-image on .bg-grid fades
//           this pattern out, but since it's a separate absolutely-positioned
//           div (not the content container), it can never fade your text or
//           the SystemPanel along with it. */}
//       <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />

//       {/* Ambient cursor glow, same idea, its own layer */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500"
//         style={{
//           background:
//             "radial-gradient(500px circle at var(--mx) var(--my), #34D39914, transparent 70%)",
//         }}
//       />

//       <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
//         <motion.div
//           variants={staggerContainer(0.09)}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-col items-start gap-6"
//         >
//           <motion.div variants={fadeUp} className="flex items-center gap-3">
//             {/* <Image
//               src="/avatar.png"
//               alt="Muhammad Ibrahim"
//               width={56}
//               height={56}
//               priority
//               className="h-14 w-14 rounded-full ring-2 ring-border-strong"
//             /> */}
//             <div className="flex items-center gap-2 rounded-full border border-border-strong bg-surface-raised px-3 py-1.5">
//               <StatusDot color="emerald" />
//               <span className="font-mono text-xs text-muted">
//                 available for backend &amp; full-stack roles
//               </span>
//             </div>
//           </motion.div>

//           <motion.h1
//             variants={fadeUp}
//             className="font-display text-display-xl font-medium leading-[1.1] text-foreground"
//           >
//             Hi, I&apos;m{" "}
//             <span className="text-gradient-emerald">Muhammad Ibrahim.</span>
//             <br />
//             <span className="text-muted">Backend Developer.</span>
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             className="max-w-lg text-lg leading-relaxed text-muted"
//           >
//             Software engineering student building scalable APIs and
//             production systems with Node.js, Express, and PostgreSQL,
//             currently deep in system design, Docker, and CI/CD.
//           </motion.p>

//           <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
//             <Button variant="primary" size="lg" asChild>
//               <a href="/resume.pdf" download>
//                 <Download className="h-4 w-4" />
//                 Download Resume
//               </a>
//             </Button>
//             <Button variant="secondary" size="lg" asChild>
//               <a href="#projects">
//                 View Projects
//                 <ArrowRight className="h-4 w-4" />
//               </a>
//             </Button>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer(0.09, 0.3)}
//           className="flex justify-center lg:justify-end"
//         >
//           {/* <SystemPanel /> */}
          
//         </motion.div>
//       </Container>
//     </section>
//   );
// }











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
      className="relative flex flex-col justify-center overflow-hidden py-14 md:py-16"
      style={
        {
          "--mx": "50%",
          "--my": "40%",
        } as React.CSSProperties
      }
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

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-border-strong bg-surface-raised px-3 py-1.5">
              <StatusDot color="emerald" />
              <span className="font-mono text-xs text-muted">
                available for backend &amp; full-stack roles
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-display-xl font-medium leading-[1.1] text-foreground"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient-emerald">Muhammad Ibrahim.</span>
            <br />
            <span className="text-muted">Backend Developer.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-lg leading-relaxed text-muted"
          >
            Software engineering student building scalable APIs and
            production systems with Node.js, Express, and PostgreSQL,
            currently deep in system design, Docker, and CI/CD.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <Button variant="primary" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.09, 0.3)}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/portrait-fade.png"
            alt="Muhammad Ibrahim"
            width={693}
            height={921}
            priority
            className="h-auto w-full max-w-sm select-none"
          />
        </motion.div>
      </Container>
    </section>
  );
}