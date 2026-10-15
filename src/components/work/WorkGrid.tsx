"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { ProjectCard } from "@/components/ui/project-card";

/** The full grid with a tag filter. Filtering is client-side over the 10 static entries. */
export function WorkGrid() {
  const [filter, setFilter] = useState<string>("All");
  const shown = projects.filter((p) =>
    filter === "All" ? true : filter === "Preview" ? p.preview : p.tags.some((t) => t.includes(filter))
  );

  return (
    <div className="mx-auto max-w-6xl">
      <div role="group" aria-label="Filter work by type" className="mb-10 flex flex-wrap justify-center gap-2">
        {site.workPage.filters.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className="inline-flex min-h-[44px] items-center rounded-full px-4 text-[14px] font-semibold transition-[background-color,color,transform] duration-[180ms] ease-[var(--ease-sig)] hover:-translate-y-0.5"
              style={
                active
                  ? { background: "var(--wisteria-deep)", color: "#fff" }
                  : { background: "#fff", color: "var(--ink-soft)", border: "1.5px solid color-mix(in srgb, var(--wisteria) 55%, transparent)" }
              }
            >
              {f}
            </button>
          );
        })}
      </div>

      <h2 className="sr-only">Sites</h2>
      <p className="sr-only" aria-live="polite">{`${shown.length} of ${projects.length} sites shown`}</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <ProjectCard
            key={p.slug}
            slug={p.slug}
            imgSrc={p.image}
            title={p.name}
            description={p.line}
            link={p.href}
            display={p.display}
            tags={p.tags}
            accent={p.accent}
            preview={p.preview}
            priority={i < 3}
            lcp={i === 0}
            // The first row holds the page's LCP image; an entry animation on it
            // delays the largest paint by exactly the animation's length.
            className={i < 3 ? undefined : "yh-rise"}
          />
        ))}
      </div>
    </div>
  );
}
