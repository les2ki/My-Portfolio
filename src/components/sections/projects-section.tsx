import { projects } from "@/data/projects";

import { ProjectCard } from "@/components/ui/project-card";
import { Icon } from "@/components/ui/icon";

export function ProjectsSection() {
  return (
    <section className="work-page page-shell" id="projects" aria-labelledby="projects-title">
      <div className="work-page__intro">
        <div>
          <span className="eyebrow"><Icon name="briefcase" /> Work / selected systems</span>
          <h1 id="projects-title">Projects with a point of view.</h1>
        </div>
        <p>Each case study is structured around the What, the How, and the Result - from embedded prototypes to practical automation and IoT systems.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </div>
    </section>
  );
}

export function LegacyProjectsSection() {
  return (
    <section className="section section--projects page-shell" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <span className="eyebrow">02 / Build log</span>
        <h2 id="projects-title">Projects with a point of view.</h2>
        <p className="section-heading__note">Each case study is structured around the what, the how, and the result.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
