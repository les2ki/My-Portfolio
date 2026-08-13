"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SnapshotFrameProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

/**
 * Client-only wrapper that adds a framer-motion scale micro-interaction and
 * a Lucide overlay on hover. Kept separate from the server component so
 * interactive state never crosses the RSC boundary.
 */
export function SnapshotFrame({ href, className, children }: SnapshotFrameProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "project-snapshot__frame group block overflow-hidden rounded-[var(--radius-card)]",
        className,
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "project-snapshot__overlay",
          "pointer-events-none absolute inset-0 flex items-center justify-center",
          "bg-[color:var(--color-ink)]/0 text-[color:var(--color-paper)] opacity-0",
          "transition-all duration-300 ease-out",
          "group-hover:bg-[color:var(--color-ink)]/55 group-hover:opacity-100",
        )}
      >
        <ExternalLink
          className="h-6 w-6 translate-y-1 transition-transform duration-300 ease-out group-hover:translate-y-0"
          strokeWidth={1.5}
        />
      </span>
    </motion.a>
  );
}
