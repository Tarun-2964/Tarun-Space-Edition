"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { NAV_LINKS, PROFILE, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `cursor-pointer transition hover:text-[rgb(112,66,248)] ${
      pathname === href ? "text-[rgb(112,66,248)] font-medium" : ""
    }`;

  return (
    <header className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="h-10 w-10 rounded-full border border-[#7042f88b] bg-[rgba(113,47,255,0.12)] flex items-center justify-center text-xs font-bold text-white">
            {PROFILE.initials}
          </span>
          <span className="hidden md:block font-bold text-gray-300">{PROFILE.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-6 py-2 rounded-full text-gray-200">
          {NAV_LINKS.map((l) => (
            <Link key={l.title} href={l.link} className={linkClass(l.link)}>
              {l.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link key={name} href={link} target="_blank" rel="noreferrer noopener" aria-label={name}>
              <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition" />
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center gap-4 text-gray-300 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link key={l.title} href={l.link} className={linkClass(l.link)} onClick={() => setOpen(false)}>
              {l.title}
            </Link>
          ))}
          <div className="flex gap-6 mt-2">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link key={name} href={link} target="_blank" rel="noreferrer noopener" aria-label={name}>
                <Icon className="h-7 w-7 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
