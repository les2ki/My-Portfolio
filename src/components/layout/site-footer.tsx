import { profile } from "@/data/profile";
import { socialLinks } from "@/data/site-config";
import { getCurrentYear } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

export function SiteFooter() {
  return (
    <footer className="site-footer page-shell">
      <p><span className="site-footer__mark">{profile.initials}</span> &copy; {getCurrentYear()} {profile.name}</p>
      <ul className="site-footer__links" aria-label="Social links">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label} <Icon name="arrow-up-right" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
