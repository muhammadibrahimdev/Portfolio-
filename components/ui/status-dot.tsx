import { cn } from "@/lib/utils";

interface StatusDotProps {
  color?: "emerald" | "azure";
  className?: string;
}

export function StatusDot({ color = "emerald", className }: StatusDotProps) {
  const dot = color === "emerald" ? "bg-emerald" : "bg-azure";
  return (
    <span className={cn("relative flex h-2 w-2", className)}>
      <span
        className={cn("absolute inline-flex h-full w-full animate-ping-slow rounded-full", dot)}
      />
      <span className={cn("relative inline-flex h-2 w-2 rounded-full", dot)} />
    </span>
  );
}
