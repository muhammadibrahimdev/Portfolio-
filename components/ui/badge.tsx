import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs tracking-tight transition-colors",
  {
    variants: {
      variant: {
        default: "border-border-strong bg-surface-raised text-muted",
        emerald: "border-emerald-dim/50 bg-emerald-glow text-emerald",
        azure: "border-azure-dim/50 bg-azure-glow text-azure",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
