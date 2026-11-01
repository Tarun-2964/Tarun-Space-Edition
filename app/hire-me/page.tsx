import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/main/contact-form";
import { Card } from "@/components/sub/card";
import { PageHeading } from "@/components/sub/page-heading";
import { PROFILE, SOCIALS } from "@/constants";

export const metadata: Metadata = { title: "Hire Me | C Tarun Varma" };

export default function HireMePage() {
  return (
    <main className="w-full">
      <PageHeading
        badge="Let's work together"
        title="Hire Me"
        subtitle="Have a project, internship or opportunity in mind? Send a message or reach out on any of the links below."
      />

      <div className="max-w-[1100px] mx-auto px-6 grid gap-8 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <h2 className="text-2xl font-semibold text-white mb-6">Send a message</h2>
          <ContactForm />
        </Card>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-white">Find me online</h2>
          {SOCIALS.map(({ name, icon: Icon, link, handle }) => (
            <Link key={name} href={link} target="_blank" rel="noreferrer noopener">
              <Card className="flex items-center gap-4 hover:border-[#7042f88b] transition">
                <Icon className="h-8 w-8 text-[#b49bff]" />
                <div className="min-w-0">
                  <p className="text-white font-medium">{name}</p>
                  <p className="text-sm text-gray-400 truncate">{handle}</p>
                </div>
              </Card>
            </Link>
          ))}
          <p className="text-sm text-gray-500">Based in {PROFILE.location}.</p>
        </div>
      </div>
    </main>
  );
}
