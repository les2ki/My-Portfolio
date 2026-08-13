import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Compose Tailwind class strings while resolving conflicts.
 * Mirrors the convention used by shadcn/ui utilities.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
