import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface GlassButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

export function GlassButton({ href, children, variant = "primary", className }: GlassButtonProps) {
  return (
    <span className={cn("glass-wrap", variant === "ghost" && "ghost", className)}>
      <Link href={href} className="glass-btn">
        <span className="glass-ring-shine" />
        {children}
      </Link>
      <span className="glass-shadow" />
    </span>
  );
}
