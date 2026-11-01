import Link from "next/link";

import { NAV_LINKS, PROFILE, SOCIALS } from "@/constants";

export const Footer = () => (
  <footer className="w-full text-gray-300 px-6 py-10 mt-20 border-t border-[#2A0E61]">
    <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-6">
      <nav className="flex flex-wrap justify-center gap-6 text-sm">
        {NAV_LINKS.map((l) => (
          <Link key={l.title} href={l.link} className="hover:text-[rgb(112,66,248)] transition">
            {l.title}
          </Link>
        ))}
      </nav>
      <div className="flex gap-6">
        {SOCIALS.map(({ link, name, icon: Icon }) => (
          <Link key={name} href={link} target="_blank" rel="noreferrer noopener" aria-label={name}>
            <Icon className="h-5 w-5 hover:text-[rgb(112,66,248)] transition" />
          </Link>
        ))}
      </div>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </p>
    </div>
  </footer>
);
