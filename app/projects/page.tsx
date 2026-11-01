import type { Metadata } from "next";

import { ProjectsBrowser } from "@/components/main/projects-browser";
import { PageHeading } from "@/components/sub/page-heading";

export const metadata: Metadata = { title: "Projects | C Tarun Varma" };

export default function ProjectsPage() {
  return (
    <main className="w-full">
      <PageHeading
        badge="My Work"
        title="Projects"
        subtitle="Browse by Java, Python and Portfolios."
      />
      <ProjectsBrowser />
    </main>
  );
}
