"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Card, Tag } from "@/components/sub/card";
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  PROJECTS_PER_PAGE,
  type ProjectCategory,
} from "@/constants";

export const ProjectsBrowser = () => {
  const [category, setCategory] = useState<ProjectCategory>(PROJECT_CATEGORIES[0]);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => PROJECTS.filter((p) => p.category === category), [category]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PROJECTS_PER_PAGE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * PROJECTS_PER_PAGE, current * PROJECTS_PER_PAGE);

  const countFor = (c: ProjectCategory) => PROJECTS.filter((p) => p.category === c).length;

  return (
    <section className="max-w-[1200px] mx-auto px-6 pb-10">
      {/* Category tabs */}
      <div role="tablist" className="flex flex-wrap justify-center gap-3 mb-10">
        {PROJECT_CATEGORIES.map((c) => {
          const active = c === category;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={active}
              onClick={() => {
                setCategory(c);
                setPage(1);
              }}
              className={`px-6 py-2 rounded-full border transition text-sm ${
                active
                  ? "button-primary border-[#7042f8] text-white"
                  : "border-[#2A0E61] text-gray-400 hover:text-white hover:border-[#7042f88b]"
              }`}
            >
              {c} <span className="opacity-60">({countFor(c)})</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {visible.length === 0 ? (
        <p className="text-center text-gray-400 py-16">No {category} projects yet — more coming soon.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <Card key={p.title} className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                {p.link && (
                  <Link
                    href={p.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Open ${p.title}`}
                    className="text-[#b49bff] hover:text-white transition mt-1"
                  >
                    <FaExternalLinkAlt />
                  </Link>
                )}
              </div>
              <p className="text-xs text-[#b49bff]">{p.year}</p>
              <p className="text-gray-300 text-sm">{p.description}</p>
              <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination (9 per page) */}
      <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-12 text-sm">
        <button
          onClick={() => setPage(current - 1)}
          disabled={current === 1}
          className="px-4 py-2 rounded-lg border border-[#2A0E61] text-gray-300 disabled:opacity-30 enabled:hover:border-[#7042f88b]"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            aria-current={n === current ? "page" : undefined}
            className={`h-9 w-9 rounded-lg border ${
              n === current
                ? "button-primary border-[#7042f8] text-white"
                : "border-[#2A0E61] text-gray-400 hover:border-[#7042f88b]"
            }`}
          >
            {n}
          </button>
        ))}
        <button
          onClick={() => setPage(current + 1)}
          disabled={current === totalPages}
          className="px-4 py-2 rounded-lg border border-[#2A0E61] text-gray-300 disabled:opacity-30 enabled:hover:border-[#7042f88b]"
        >
          Next
        </button>
      </nav>
      <p className="text-center text-xs text-gray-500 mt-3">
        Page {current} of {totalPages} · {PROJECTS_PER_PAGE} projects per page
      </p>
    </section>
  );
};
