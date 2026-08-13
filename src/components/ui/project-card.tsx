import type { Project } from "@/types/portfolio";

import { ProjectGallery } from "@/components/ui/project-gallery";
import { ProjectVisual } from "@/components/ui/project-visual";
import { Icon } from "@/components/ui/icon";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`case-study-card case-study-card--${index % 2 === 0 ? "forward" : "reverse"}`}>
      <div className="case-study-card__media">
        <ProjectVisual project={project} variant={index + 1} />
      </div>
      <div className="case-study-card__body">
        <div className="case-study-card__header">
          <div><span className="eyebrow">{project.kicker}</span><h3>{project.title}</h3></div>
          {project.year ? <span className="project-year">{project.year}</span> : null}
        </div>
        <dl className="case-study case-study--blue">
          <div><dt><Icon name="target" /> What</dt><dd>{project.what}</dd></div>
          <div><dt><Icon name="list" /> How</dt><dd><ol>{project.how.map((step) => <li key={step}>{step}</li>)}</ol></dd></div>
          <div><dt><Icon name="check-circle" /> Result</dt><dd>{project.result}</dd></div>
        </dl>
        <ul className="tag-list" aria-label={`${project.title} details`}>
          {project.tags.map((tag) => <li key={tag}><Icon name="tag" /> {tag}</li>)}
        </ul>
        {project.link ? (
          <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
            View live project <Icon name="arrow-up-right" />
          </a>
        ) : null}
        {project.gallery ? <ProjectGallery title={project.title} images={project.gallery} /> : null}
      </div>
    </article>
  );
}

export function LegacyProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${index % 2 === 0 ? "forward" : "reverse"}`}>
      <div className="project-card__media">
        <ProjectVisual project={project} variant={index + 1} />
      </div>
      <div className="project-card__body">
        <div className="project-card__header">
          <div>
            <span className="eyebrow">{project.kicker}</span>
            <h3>{project.title}</h3>
          </div>
          {project.year ? <span className="project-year">{project.year}</span> : null}
        </div>
        <dl className="case-study">
          <div>
            <dt>What</dt>
            <dd>{project.what}</dd>
          </div>
          <div>
            <dt>How</dt>
            <dd>
              <ol>
                {project.how.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </dd>
          </div>
          <div>
            <dt>Result</dt>
            <dd>{project.result}</dd>
          </div>
        </dl>
        <ul className="tag-list" aria-label={`${project.title} details`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.gallery ? <ProjectGallery title={project.title} images={project.gallery} /> : null}
      </div>
    </article>
  );
}
