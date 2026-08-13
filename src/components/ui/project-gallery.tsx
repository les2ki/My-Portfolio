import Image from "next/image";

import type { ProjectGalleryItem } from "@/types/portfolio";

type ProjectGalleryProps = {
  title: string;
  images: ProjectGalleryItem[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  return (
    <div className="project-gallery" aria-label={`${title} project gallery`}>
      {images.map((image) => (
        <figure className="project-gallery__item" key={image.src}>
          <a
            className="project-gallery__image"
            href={image.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`View full-size ${image.label} image for ${title}`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 33vw, 18vw" />
          </a>
          <figcaption className="eyebrow">{image.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
