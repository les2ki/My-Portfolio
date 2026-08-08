import { profile } from "@/data/profile";
import { contact } from "@/data/site-config";
import { Icon } from "@/components/ui/icon";

export function ContactSection() {
  return (
    <section className="home-contact page-shell" id="contact" aria-labelledby="contact-title">
      <div className="home-contact__topline">
        <span className="eyebrow"><Icon name="mail" /> 02 / Open channel</span>
        <span className="home-contact__note">Let&apos;s connect the next idea to a working system.</span>
      </div>
      <div className="home-contact__heading">
        <h2 id="contact-title">{contact.title}</h2>
        <p>{contact.description}</p>
      </div>
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${profile.email}`}>
          <span className="contact-card__icon"><Icon name="mail" /></span>
          <span><small>Email</small>{profile.email}</span>
          <Icon name="arrow-up-right" />
        </a>
        <a className="contact-card" href={`tel:${profile.phone.replaceAll(" ", "")}`}>
          <span className="contact-card__icon"><Icon name="phone" /></span>
          <span><small>Phone</small>{profile.phone}</span>
          <Icon name="arrow-up-right" />
        </a>
        <span className="contact-card contact-card--static">
          <span className="contact-card__icon"><Icon name="map-pin" /></span>
          <span><small>Based in</small>{profile.location}</span>
        </span>
        <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
          <span className="contact-card__icon"><Icon name="arrow-up-right" /></span>
          <span><small>LinkedIn</small>lesiba-manala</span>
          <Icon name="arrow-up-right" />
        </a>
        <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
          <span className="contact-card__icon"><Icon name="code" /></span>
          <span><small>GitHub</small>github.com/les2ki</span>
          <Icon name="arrow-up-right" />
        </a>
      </div>
    </section>
  );
}

export function LegacyContactSection() {
  return (
    <section className="contact-section page-shell" id="contact" aria-labelledby="contact-title">
      <div className="contact-section__inner">
        <div>
          <span className="eyebrow">03 / Open channel</span>
          <h2 id="contact-title">{contact.title}</h2>
        </div>
        <div className="contact-section__details">
          <p>{contact.description}</p>
          <div className="contact-section__links">
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email} <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-phone" href={`tel:${profile.phone.replaceAll(" ", "")}`}>
              {profile.phone}
            </a>
            <span className="contact-location">{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
