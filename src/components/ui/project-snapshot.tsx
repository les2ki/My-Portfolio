import Image from "next/image";

import { cn } from "@/lib/cn";
import {
  type ProjectSnapshotApiResponse,
  type ProjectSnapshotPayload,
} from "@/types/project-snapshot";

import { SnapshotFrame } from "@/components/ui/snapshot-frame";

const SNAPSHOT_REVALIDATE_SECONDS = 60 * 60; // 1 hour
const MICROLINK_ENDPOINT = "https://api.microlink.io/";

type ProjectSnapshotProps = {
  url: string;
  alt: string;
  href?: string;
  className?: string;
};

/**
 * Server Component: fetches a website screenshot via Microlink's API and
 * streams it through Next.js `<Image />`. Cached for an hour and tagged so
 * on-demand revalidation can target it later if needed.
 *
 * The remote image is loaded by the client `SnapshotFrame` wrapper so
 * framer-motion hover state stays out of the server boundary.
 */
export async function ProjectSnapshot({
  url,
  alt,
  href,
  className,
}: ProjectSnapshotProps) {
  const payload = await fetchSnapshot(url);

  if (!payload) {
    return null;
  }

  return (
    <SnapshotFrame
      href={href ?? payload.url}
      className={cn("project-snapshot", className)}
    >
      <Image
        src={payload.screenshot}
        alt={alt}
        fill
        sizes="(max-width: 800px) 100vw, 50vw"
        className="project-snapshot__image"
        unoptimized
      />
    </SnapshotFrame>
  );
}

type ProjectSnapshotSkeletonProps = {
  className?: string;
};

export function ProjectSnapshotSkeleton({ className }: ProjectSnapshotSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading project preview"
      className={cn(
        "project-snapshot project-snapshot--skeleton",
        "animate-pulse",
        className,
      )}
    >
      <span className="project-snapshot__skeleton-line" />
      <span className="project-snapshot__skeleton-line" />
      <span className="project-snapshot__skeleton-line" />
    </div>
  );
}

async function fetchSnapshot(targetUrl: string): Promise<ProjectSnapshotPayload | null> {
  const endpoint = new URL(MICROLINK_ENDPOINT);
  endpoint.searchParams.set("url", targetUrl);
  endpoint.searchParams.set("screenshot", "true");
  endpoint.searchParams.set("meta", "false");
  endpoint.searchParams.set("embed", "screenshot.url");

  try {
    const response = await fetch(endpoint.toString(), {
      next: {
        revalidate: SNAPSHOT_REVALIDATE_SECONDS,
        tags: ["project-snapshot", `project-snapshot:${targetUrl}`],
      },
    });

    if (!response.ok) {
      return null;
    }

    const body = (await response.json()) as ProjectSnapshotApiResponse;
    if (body.status !== "success" || !body.data?.screenshot?.url) {
      return null;
    }

    return {
      url: body.data.url ?? targetUrl,
      screenshot: body.data.screenshot.url,
      width: body.data.screenshot.width ?? 1280,
      height: body.data.screenshot.height ?? 800,
      title: body.data.title ?? targetUrl,
    };
  } catch {
    return null;
  }
}
