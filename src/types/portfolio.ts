export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = NavigationItem;

export type IconName =
  | "arrow-up-right"
  | "mail"
  | "phone"
  | "map-pin"
  | "download"
  | "briefcase"
  | "automation"
  | "embedded"
  | "code"
  | "software"
  | "networking"
  | "target"
  | "list"
  | "check-circle"
  | "layers"
  | "tag";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectGalleryItem = ProjectImage & {
  label: string;
};

export type Project = {
  title: string;
  slug: string;
  link?: string;
  kicker: string;
  year?: string;
  what: string;
  how: string[];
  result: string;
  tags: string[];
  image?: ProjectImage | null;
  gallery?: ProjectGalleryItem[];
};

export type PortfolioProfile = {
  initials: string;
  name: string;
  role: string;
  availability: string;
  hero: {
    lead: string;
    emphasis: string;
    trail: string;
  };
  intro: string;
  about: string;
  skills: string[];
  techStack: string[];
  skillGroups: Array<{
    title: string;
    icon: IconName;
    items: string[];
  }>;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  resumeUrl: string;
};
