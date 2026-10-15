import Image from "next/image";
import Link from "next/link";
import { designs } from "@/data/designs";

/**
 * The design index grid.
 *
 * Deliberately not filterable like WorkGrid: there are four projects, so a
 * filter row would be more chrome than content. The status pill is the one
 * piece of furniture that earns its place, because it is the only way a
 * visitor can tell adopted work from a concept.
 */
export function DesignGrid() {
  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="sr-only">Design projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {designs.map((d, i) => (
          <Link
            key={d.slug}
            href={`/design/${d.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-[transform,box-shadow] duration-[220ms] ease-[var(--ease-sig)] hover:-translate-y-1"
            style={{
              border: `1.5px solid color-mix(in srgb, var(--${d.accent}) 55%, transparent)`,
              boxShadow: "0 1px 2px rgba(43,32,26,.05), 0 8px 24px -12px rgba(43,32,26,.18)",
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={d.cover}
                alt={`${d.name}, cover`}
                width={1600}
                height={1200}
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={i < 2}
                fetchPriority={i === 0 ? "high" : undefined}
                className="h-full w-full object-cover transition-transform duration-[420ms] ease-[var(--ease-sig)] group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-semibold"
                  style={
                    d.status === "In use"
                      ? { background: "color-mix(in srgb, var(--leaf) 30%, var(--paper))", color: "var(--ink)" }
                      : { background: "var(--paper-2)", color: "var(--ink-soft)" }
                  }
                >
                  {d.status}
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-wide text-[var(--ink-soft)]">{d.kind}</span>
              </div>
              <h3 className="yh-display text-[20px] leading-snug">{d.name}</h3>
              <p className="text-[15px] leading-relaxed text-[var(--ink-soft)]">{d.line}</p>
              <p className="mt-auto pt-1 text-[13px] font-semibold text-[var(--ink-soft)]">
                {d.pieces.length} pieces
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
