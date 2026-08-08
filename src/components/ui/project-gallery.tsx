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
          <div className="project-gallery__image">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 33vw, 18vw" />
          </div>
          <figcaption className="eyebrow">{image.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
