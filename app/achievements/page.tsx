import type { Metadata } from "next";
import Link from "next/link";
import { FaAward, FaCertificate } from "react-icons/fa";

import { Card } from "@/components/sub/card";
import { PageHeading } from "@/components/sub/page-heading";
import { AWARDS, CERTIFICATIONS } from "@/constants";

export const metadata: Metadata = { title: "Achievements | C Tarun Varma" };

export default function AchievementsPage() {
  return (
    <main className="w-full">
      <PageHeading badge="Recognition" title="Achievements" />

      <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-16">
        <section aria-labelledby="certs">
          <h2 id="certs" className="text-2xl font-semibold text-white mb-6">My Certifications</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {CERTIFICATIONS.map((c) => (
              <Card key={c.title} className="flex flex-col gap-3">
                <FaCertificate className="h-8 w-8 text-[#b49bff]" />
                <h3 className="text-lg font-medium text-white">{c.title}</h3>
                {(c.issuer || c.year) && (
                  <p className="text-sm text-gray-400">{[c.issuer, c.year].filter(Boolean).join(" · ")}</p>
                )}
                {c.link && (
                  <Link href={c.link} target="_blank" rel="noreferrer noopener" className="text-sm text-[#b49bff] hover:text-white">
                    View certificate →
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section aria-labelledby="awards">
          <h2 id="awards" className="text-2xl font-semibold text-white mb-6">My Awards</h2>
          {AWARDS.length === 0 ? (
            <Card className="text-center text-gray-400">
              <FaAward className="h-8 w-8 text-[#b49bff] mx-auto mb-3" />
              Awards will be added here soon.
            </Card>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {AWARDS.map((a) => (
                <Card key={a.title} className="flex gap-4">
                  <FaAward className="h-8 w-8 text-[#b49bff] shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-white">{a.title}</h3>
                    {(a.issuer || a.year) && (
                      <p className="text-sm text-gray-400">{[a.issuer, a.year].filter(Boolean).join(" · ")}</p>
                    )}
                    {a.description && <p className="text-sm text-gray-300 mt-2">{a.description}</p>}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
