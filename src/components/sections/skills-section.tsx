import { profile } from "@/data/profile";

import { Icon } from "@/components/ui/icon";

export function SkillsSection() {
  return (
    <section className="skills-section page-shell" id="skills" aria-labelledby="skills-title">
      <div className="section-intro">
        <span className="eyebrow"><Icon name="layers" /> 01 / Capability map</span>
        <h2 id="skills-title">The stack behind the systems.</h2>
        <p>Tools and practices from my Computer Systems Engineering work, across hardware, software, automation, and networks.</p>
      </div>

      <div className="skills-layout">
        <div className="skill-groups">
          {profile.skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-group__heading">
                <span className="icon-frame"><Icon name={group.icon} /></span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="tech-stack">
          <div className="tech-stack__heading">
            <span className="eyebrow"><Icon name="code" /> Working stack</span>
            <p>Languages, platforms, and tools I use to move from an idea to a working system.</p>
          </div>
          <ul className="tech-stack__list">
            {profile.techStack.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
