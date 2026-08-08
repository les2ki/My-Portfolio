import Link from "next/link";
import Image from "next/image";

import { profile } from "@/data/profile";
import { navigation } from "@/data/site-config";

export function SiteHeader() {
  return (
    <header className="site-nav">
      <nav className="site-nav__inner page-shell" aria-label="Primary navigation">
        <div className="site-nav__brand">
          <a
            className="site-nav__avatar-link"
            href="/images/profile/lesiba-lucky-manala.jpeg"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Lesiba Lucky Manala profile photo"
          >
            <span className="site-nav__avatar">
              <Image
                src="/images/profile/lesiba-lucky-manala.jpeg"
                alt="Portrait of Lesiba Lucky Manala"
                fill
                sizes="40px"
              />
            </span>
          </a>
          <Link className="site-nav__name" href="/">{profile.name}</Link>
        </div>
        <ul className="site-nav__links">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Link className="site-nav__cta" href="/#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
