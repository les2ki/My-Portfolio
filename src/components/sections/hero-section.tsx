import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

import { ProjectVisual } from "@/components/ui/project-visual";
import Link from "next/link";

import { Icon } from "@/components/ui/icon";

export function HeroSection() {
  return (
    <section className="home-hero page-shell" id="home" aria-labelledby="hero-title">
      <div className="home-hero__topline">
        <span className="eyebrow"><span className="status-dot" aria-hidden="true" /> Computer Systems Engineering</span>
        <span className="home-hero__status"><span className="status-dot" aria-hidden="true" /> Open To An Innovative Work Environment </span>
      </div>
      <div className="home-hero__content">
        <p className="home-hero__kicker">Hardware, software, and the space where they have to agree.</p>
        <h1 id="hero-title" className="home-hero__title">
          {profile.hero.lead} <span>{profile.hero.emphasis}</span><br /> {profile.hero.trail}
        </h1>
        <div className="home-hero__bottom">
          <p className="home-hero__intro">{profile.intro}</p>
          <div className="home-hero__actions">
            <Link className="button" href="/work">See my work <Icon name="arrow-up-right" /></Link>
            <a className="text-link" href={profile.resumeUrl} download>Resume <Icon name="download" /></a>
          </div>
        </div>
      </div>
      <div className="home-hero__footer">
        <span><Icon name="map-pin" /> {profile.location}</span>
        <span>Built around real systems <span aria-hidden="true">/</span> 2026</span>
      </div>
    </section>
  );
}

export function LegacyHeroSection() {
  const featuredProject = projects[0];

  return (
    <section className="hero page-shell" id="home" aria-labelledby="hero-title">
      <div className="hero__topline">
        <span className="eyebrow">Portfolio / 2026</span>
        <span className="hero__status">
          <span className="status-dot" aria-hidden="true" />
          {profile.availability}
        </span>
      </div>

      <div className="hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">Hardware, software, and the space where they have to agree.</p>
          <h1 id="hero-title" className="hero__title">
            {profile.hero.lead} <span>{profile.hero.emphasis}</span><br /> {profile.hero.trail}
          </h1>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="button" href="#projects">See the build log</a>
            <a className="text-link" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero__proof">
          <div className="featured-project__meta">
            <span>Selected build</span>
            <span>Evidence / 01</span>
          </div>
          <div className="featured-project">
            <div className="featured-project__media">
              <ProjectVisual project={featuredProject} variant={0} priority />
              <span className="media-label eyebrow">
                <span className="status-dot" aria-hidden="true" />
                {featuredProject.kicker}
              </span>
            </div>
            <div className="featured-project__caption">
              <div>
                <span className="eyebrow">Featured case study</span>
                <h2>{featuredProject.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__footerline">
        <span>{profile.location}</span>
        <a href="#about">More about the practice ↓</a>
      </div>
    </section>
  );
}
