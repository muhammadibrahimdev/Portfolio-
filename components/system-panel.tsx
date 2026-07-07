"use client";

import { motion } from "framer-motion";
import { StatusDot } from "@/components/ui/status-dot";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SystemPanelProps {
  className?: string;
}

const metrics = [
  { label: "api.status", value: "operational", tone: "emerald" as const },
  { label: "uptime.30d", value: "99.98%", tone: "emerald" as const },
  { label: "avg.latency", value: "84ms", tone: "azure" as const },
  { label: "region", value: "ap.south.1", tone: "azure" as const },
];

const stack = ["node", "express", "postgres", "mongo", "redis", "docker"];

/**
 * Signature element: a monospace "live system" readout.
 * Not a literal dashboard — a designed motif that stands in for
 * "this person builds and operates backend systems."
 */
export function SystemPanel({ className }: SystemPanelProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "w-full max-w-sm rounded-2xl border border-border bg-surface-raised/80 backdrop-blur-sm shadow-panel",
        className
      )}
    >
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        </div>
        <span className="font-mono text-[11px] text-subtle">status.sh</span>
      </div>

      <div className="flex flex-col gap-3 p-5 font-mono text-[13px]">
        <div className="flex items-center gap-2 text-muted">
          <span className="text-emerald">$</span>
          <span>
            whoami<span className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-[2px] bg-emerald animate-blink" />
          </span>
        </div>
        <p className="pl-4 text-foreground">muhammad.ibrahim, backend developer</p>

        <div className="mt-1 flex items-center gap-2 border-t border-border pt-3 text-muted">
          <span className="text-emerald">$</span>
          <span>check status</span>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 pl-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col">
              <dt className="text-[11px] text-subtle">{m.label}</dt>
              <dd
                className={cn(
                  "flex items-center gap-1.5 font-medium",
                  m.tone === "emerald" ? "text-emerald" : "text-azure"
                )}
              >
                {m.label === "api.status" && <StatusDot color="emerald" />}
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-1 flex flex-wrap gap-1.5 border-t border-border pt-3 pl-4">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded border border-border-strong bg-surface px-1.5 py-0.5 text-[11px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
