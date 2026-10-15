/**
 * Structural donor: 21st.dev "Project Card" (#5964) by @ravikatiyar162.
 * Skeleton kept (image / body / CTA, hover-lift). Palette, type, shadow, badges,
 * border and the landing butterfly are ours per DESIGN.md.
 *
 * The card body links to the project's own page; the small link at the bottom
 * opens the live site in a new tab. Two destinations, two anchors, so a screen
 * reader hears both and a keyboard reaches both.
 */
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const ACCENT: Record<string, { tint: string; deep: string }> = {
  petal:    { tint: "var(--petal)",    deep: "var(--petal-deep)" },
  leaf:     { tint: "var(--leaf)",     deep: "var(--leaf-deep)" },
  sky:      { tint: "var(--sky)",      deep: "var(--sky-deep)" },
  apricot:  { tint: "var(--apricot)",  deep: "var(--apricot-deep)" },
  wisteria: { tint: "var(--wisteria)", deep: "var(--wisteria-deep)" },
};

export interface ProjectCardProps {
  slug: string;
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  display: string;
  tags: readonly string[];
  accent?: keyof typeof ACCENT;
  preview?: boolean;
  priority?: boolean;
  /** True for the single LCP image only. */
  lcp?: boolean;
  className?: string;
}

export function LandingButterfly({ tint, alt }: { tint: string; alt: string }) {
  return (
    <span aria-hidden="true" className="yh-lander yh-front absolute -top-3 right-5 z-20">
      <svg width="40" height="34" viewBox="0 0 100 86" fill="none">
        <g className="yh-wing" style={{ ["--wing-origin" as string]: "50% 62%" }}>
          <path d="M49 54C41 24 30 8 18 6 6 4 1 15 4 28c3 13 16 26 45 30z" fill={tint} />
          <path d="M51 54c8-30 19-46 31-48 12-2 17 9 14 22-3 13-16 26-45 30z" fill={tint} />
          <path d="M49 56C43 74 34 84 24 83 14 82 11 73 15 65c4-8 15-12 34-9z" fill={alt} />
          <path d="M51 56c6 18 15 28 25 27 10-1 13-10 9-18-4-8-15-12-34-9z" fill={alt} />
        </g>
        <ellipse cx="50" cy="55" rx="3.2" ry="21" fill="var(--bark)" />
        <circle cx="50" cy="33" r="4" fill="var(--bark)" />
        <path d="M48 30C44 22 40 19 35 18M52 30c4-8 8-11 13-12" stroke="var(--bark)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function ProjectCard({
  slug, imgSrc, title, description, link, display, tags,
  accent = "petal", preview, priority, lcp, className,
}: ProjectCardProps) {
  const a = ACCENT[accent] ?? ACCENT.petal;
  const alt = accent === "petal" ? "var(--wisteria)" : "var(--petal)";

  return (
    <article
      className={cn(
        "group yh-tilt yh-sheen relative flex flex-col rounded-[20px] bg-white",
        "hover:[box-shadow:var(--shadow-warm-lg)] focus-within:-translate-y-1.5",
        className
      )}
      data-tilt="5"
      style={{ border: `1.5px solid color-mix(in srgb, ${a.tint} 55%, transparent)`, boxShadow: "var(--shadow-warm)" }}
    >
      <LandingButterfly tint={a.tint} alt={alt} />

      <div className="relative aspect-video overflow-hidden rounded-t-[18px] bg-[var(--paper-2)]">
        <Image
          src={imgSrc}
          alt={`Screenshot of the ${title} website home page`}
          width={1200}
          height={675}
          priority={priority}
          // Next 16 sets `loading="eager"` for priority images but does not add
          // fetchPriority, which left lcp-discovery scoring 0. Hint only the one
          // image that actually is the LCP element.
          fetchPriority={lcp ? "high" : undefined}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover object-top"
        />
        {preview && (
          <span
            className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide"
            style={{ background: "var(--paper)", color: a.deep, border: `1.5px solid ${a.tint}` }}
          >
            Preview
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-2.5 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{ background: `color-mix(in srgb, ${a.tint} 34%, var(--paper))`, color: a.deep }}
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-[21px] leading-tight">
          <Link href={`/work/${slug}`} className="-my-[9px] inline-block py-[9px] after:absolute after:inset-0 after:rounded-[20px] after:content-['']">
            {title}
          </Link>
        </h3>
        <p className="mt-2 max-w-[46ch] flex-1 text-[15px] leading-relaxed text-[var(--ink-soft)]">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-3 inline-flex min-h-[44px] items-center gap-1.5 self-start py-2 text-sm font-semibold underline-offset-4 hover:underline"
          style={{ color: a.deep }}
        >
          <span className="sr-only">{`Open the live ${title} site at ${display} in a new tab`}</span>
          <span aria-hidden="true">{display}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-[180ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
