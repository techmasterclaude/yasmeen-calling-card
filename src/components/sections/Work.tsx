import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { RevealWords } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { Marquee } from "@/components/ui/marquee";
import {Blossom, Leaf} from "@/components/garden/Flora";
import { Bough } from "@/components/garden/Bough";
import { Butterfly } from "@/components/garden/Butterfly";

export function Work() {
  return (
    <section id="work" className="relative isolate scroll-mt-20 px-5 py-20 sm:py-24">
      {/* BEHIND band */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <Bough className="-left-16 top-24 hidden opacity-65 lg:block" width={260} leafCount={7} />
        <Blossom className="right-[3%] top-[8%] hidden opacity-70 xl:block" size={48} petal="var(--sky)" heart="var(--apricot)" />
        <Leaf className="left-[4%] bottom-[12%] hidden opacity-60 xl:block" size={46} rotate={30} fill="var(--wisteria)" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="yh-rise relative mx-auto max-w-2xl text-center">
          <span aria-hidden="true" className="yh-rule mx-auto mb-5" />
          <RevealWords as="h2" text={site.work.heading} className="text-[clamp(2rem,5.5vw,2.85rem)] leading-tight" />
          <p className="mx-auto mt-4 max-w-[52ch] text-[17px] leading-relaxed text-[var(--ink-soft)]">
            {site.work.intro}
          </p>
          {/* FRONT band: a butterfly parked over the heading's right shoulder,
              deliberately clear of the first two words. */}
          <Butterfly
            className="-right-2 -top-6 hidden sm:block"
            wing="var(--petal)" wingAlt="var(--apricot)" size={30} flapDelay=".3s"
          />
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
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
              // 10 cards in a 3-up grid leaves an orphan in the last row.
              // Cards 1 and 6 span two columns, making 12 cells: four clean
              // rows of three, and a bit of hierarchy for free.
              className={
                i === 0 || i === 5
                  ? "yh-rise sm:col-span-2 lg:col-span-2"
                  : "yh-rise"
              }
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/work" className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold transition-transform duration-[180ms] ease-[var(--ease-sig)] hover:-translate-y-0.5" style={{ color: "var(--wisteria-deep)", border: "1.5px solid color-mix(in srgb, var(--wisteria) 60%, transparent)", boxShadow: "var(--shadow-warm)" }}>
            {site.workPage.heading} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Magic UI marquee, re-skinned. aria-hidden: the same names are in the grid above. */
export function NameMarquee() {
  const names = projects.map((p) => p.name);
  return (
    <div
      aria-hidden="true"
      className="relative border-y py-4"
      style={{
        borderColor: "color-mix(in srgb, var(--bark) 20%, transparent)",
        background: "var(--paper-2)",
      }}
    >
      <Marquee pauseOnHover className="[--duration:44s] [--gap:2.25rem]">
        {names.map((n) => (
          <span key={n} className="flex items-center gap-9 text-[15px] font-semibold text-[var(--ink-soft)]">
            {n}
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 1c5 4 7 9 5 13s-8 5-11 1S5 4 10 1z" fill="var(--petal)" />
            </svg>
          </span>
        ))}
      </Marquee>
      {/* soft edge fades so names do not appear to be cut off */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--paper-2)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--paper-2)] to-transparent" />
    </div>
  );
}
