import { profile } from "@/data/profile";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/#contact" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
] as const;

export const contact = {
  eyebrow: "Have a good one in mind?",
  title: "Let's make something useful.",
  description:
    "I'm open to Work Integrated Learning (WIL) / Internship opportunities, and I'm always happy to discuss potential collaborations or answer any questions you may have.",
} as const;
