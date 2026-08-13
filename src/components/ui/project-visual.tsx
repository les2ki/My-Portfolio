import Image from "next/image";

import type { Project } from "@/types/portfolio";

type ProjectVisualProps = {
  project: Project;
  variant?: number;
  priority?: boolean;
};

export function ProjectVisual({ project, priority = false }: ProjectVisualProps) {
  if (project.image) {
    return (
      <a
        className={`project-visual${project.slug === "my-latest-project" ? " project-visual--latest" : ""}`}
        href={project.image.src}
        target="_blank"
        rel="noreferrer"
        aria-label={`View full-size image for ${project.title}`}
      >
        <Image
          className="project-visual__image"
          src={project.image.src}
          alt={project.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 800px) 100vw, 75vw"
        />
      </a>
    );
  }

  return <div className="project-visual__fallback" role="img" aria-label={`${project.title} visual placeholder`}>{project.title}</div>;
}
