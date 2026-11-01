import type { Metadata } from "next";
import { FaGraduationCap } from "react-icons/fa";

import { Card, Tag } from "@/components/sub/card";
import { PageHeading } from "@/components/sub/page-heading";
import { EDUCATION, SKILL_GROUPS } from "@/constants";

export const metadata: Metadata = { title: "Education | C Tarun Varma" };

export default function EducationPage() {
  return (
    <main className="w-full">
      <PageHeading badge="Background" title="Education & Skills" />

      <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-16">
        <section aria-labelledby="edu">
          <h2 id="edu" className="text-2xl font-semibold text-white mb-6">My Education</h2>
          {EDUCATION.map((e) => (
            <Card key={e.institution} className="flex flex-col md:flex-row gap-5">
              <FaGraduationCap className="h-10 w-10 text-[#b49bff] shrink-0" />
              <div className="flex-1">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">{e.institution}</h3>
                  <span className="text-sm text-[#b49bff]">{e.period}</span>
                </div>
                <p className="text-gray-300 mt-1">{e.degree}</p>
                <p className="text-gray-500 text-sm">{e.location}</p>
                <p className="text-xs uppercase tracking-wider text-[#b49bff] mt-5 mb-2">Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {e.coursework.map((c) => (
                    <Tag key={c}>{c}</Tag>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </section>

        <section aria-labelledby="skills">
          <h2 id="skills" className="text-2xl font-semibold text-white mb-6">My Skills</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {SKILL_GROUPS.map((g) => (
              <Card key={g.title}>
                <h3 className="text-lg font-medium text-white mb-4">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
