import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectsSection } from "@/components/sections/projects-section";

export const metadata: Metadata = {
  title: "Work - Lesiba Lucky Manala",
  description: "Selected embedded systems, IoT, automation, and software projects by Lesiba Lucky Manala.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ProjectsSection />
      </main>
      <SiteFooter />
    </>
  );
}
