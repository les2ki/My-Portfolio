import { ContactSection } from "@/components/sections/contact-section";
import { DocumentsSection } from "@/components/sections/documents-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <SkillsSection />
        <DocumentsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
