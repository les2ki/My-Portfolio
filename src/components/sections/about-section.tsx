import Image from "next/image";

import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section className="section page-shell" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <span className="eyebrow">01 / Working method</span>
        <h2 id="about-title">Clear thinking, carefully made.</h2>
      </div>
      <div className="about-split">
        <div className="about-split__visual">
          <div className="about-split__photo">
            <Image
              src="/images/profile/lesiba-lucky-manala.jpeg"
              alt="Portrait of Lesiba Lucky Manala"
              fill
              sizes="(max-width: 760px) 100vw, 34vw"
            />
          </div>
          <p className="photo-note">A practical systems builder based in Gauteng, South Africa.</p>
        </div>
        <div className="about-split__copy">
          <p className="about-split__lead">{profile.about}</p>
          <p className="about-split__details">{profile.intro}</p>
          <ul className="skill-list" aria-label="Areas of focus">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <a className="text-link" href={profile.resumeUrl}>
            Download resume <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
