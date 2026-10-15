import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { caseStudies, lighthouse, pageSpeedLink } from "@/data/evidence";
import { projects } from "@/data/projects";
import { Nav, Footer } from "@/components/sections/Nav";
import { GardenScene } from "@/components/garden/GardenScene";
import { ACCENT } from "@/components/ui/project-card";
import { WorkCta } from "@/components/work/WorkCta";
import { CursorButterfly } from "@/components/garden/CursorButterfly";
import { Interactions } from "@/components/motion/Interactions";
import { breadcrumbJsonLd, pageMeta, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: site.resultsPage.title,
  description: site.resultsPage.description,
  path: "/results",
  ogTitle: site.resultsPage.heading,
});

/** A score out of 100. Below 90 is drawn as plainly as above it, on purpose. */
function Score({ value }: { value: number }) {
  const good = value >= 90;
  return (
    <span
      className="inline-flex min-w-[2.75rem] justify-center rounded-md px-2 py-1 text-[14px] font-semibold tabular-nums"
      style={
        good
          ? { background: "color-mix(in srgb, var(--leaf) 28%, var(--paper))", color: "var(--ink)" }
          : { background: "var(--paper-2)", color: "var(--ink-soft)", border: "1.5px solid color-mix(in srgb, var(--bark) 20%, transparent)" }
      }
    >
      {value}
    </span>
  );
}

export default function ResultsPage() {
  const t = site.resultsPage;

  return (
    <div id="top">
      <Nav />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Results", path: "/results" }])} />
      <main id="main">
        <GardenScene compact accent="var(--sky)">
          <div className="text-center">
            <h1 className="text-[clamp(2.2rem,6.5vw,3.4rem)] leading-tight">{t.heading}</h1>
            <p className="mx-auto mt-4 max-w-[54ch] text-[17px] leading-relaxed text-[var(--ink-soft)]">{t.intro}</p>
          </div>
        </GardenScene>

        {/* Case studies */}
        <section className="px-5 py-16 sm:py-20">
          <h2 className="yh-display text-center text-[clamp(1.5rem,4vw,2rem)]">{t.caseHeading}</h2>

          {/* The three cards stack: each one sticks below the header and the next
              scrolls up over it, so a client folds onto the one before rather
              than the reader passing a wall of prose.

              This is position: sticky and nothing else. No scroll listener, no
              library, no JS at all, which also means it cannot jank and cannot
              break with JS off. Each card is offset a few pixels further down
              than the last so the stack's edges stay visible underneath.

              It degrades by itself: a card taller than the space below the
              header never engages sticky, so on a small screen this is simply
              a normal column. */}
          <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-8">
            {caseStudies.map((c, i) => {
              const a = ACCENT[c.accent];
              const project = projects.find((p) => p.slug === c.project);
              return (
                <article
                  key={c.slug}
                  className={`sticky overflow-hidden rounded-3xl bg-white ${i > 0 ? "yh-rise" : ""}`}
                  style={{
                    // 4.5rem clears the sticky nav; each card sits 0.75rem lower
                    // than the one before it so the stack reads as a stack.
                    top: `calc(4.5rem + ${i * 0.75}rem)`,
                    border: `1.5px solid color-mix(in srgb, ${a.tint} 60%, transparent)`,
                    boxShadow: "0 1px 2px rgba(43,32,26,.05), 0 18px 40px -28px rgba(43,32,26,.35)",
                  }}
                >
                  {/* A tinted band per card, so the three read as three things
                      rather than one long column of prose. */}
                  <div
                    className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 sm:px-8"
                    style={{ background: `color-mix(in srgb, ${a.tint} 26%, var(--paper))` }}
                  >
                    <p className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: a.deep }}>
                      {c.client}
                    </p>
                    <p
                      className="rounded-full bg-white/80 px-3 py-1 text-[12px] font-semibold"
                      style={{ color: a.deep }}
                    >
                      {c.kind}
                    </p>
                  </div>

                  <div className="px-6 py-7 sm:px-8 sm:py-8">
                  <h3 className="yh-display text-[clamp(1.35rem,3.4vw,1.75rem)] leading-snug">{c.title}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-[var(--ink-soft)]">{c.line}</p>

                  <dl
                    className="mt-6 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-3"
                    style={{ background: "color-mix(in srgb, var(--bark) 14%, transparent)" }}
                  >
                    {c.metrics.map((m) => (
                      <div key={m.label} className="bg-white p-4">
                        <dt className="text-[13px] leading-snug text-[var(--ink-soft)]">{m.label}</dt>
                        <dd className="mt-2 flex flex-wrap items-baseline gap-2">
                          {m.before ? (
                            <>
                              <span className="text-[15px] tabular-nums text-[var(--ink-soft)] line-through decoration-1">
                                {m.before}
                              </span>
                              <span aria-hidden="true" className="text-[13px] text-[var(--ink-soft)]">to</span>
                            </>
                          ) : null}
                          <span className="yh-display text-[26px] tabular-nums" style={{ color: a.deep }}>
                            {m.after}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 flex flex-col gap-4">
                    {c.body.map((p) => (
                      <p key={p.slice(0, 40)} className="text-[16px] leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Every case study carries the part that is not flattering. */}
                  <div
                    className="mt-6 rounded-2xl p-5"
                    style={{ background: "var(--paper-2)", borderLeft: `4px solid ${a.tint}` }}
                  >
                    <h4 className="yh-display text-[16px]">{t.honestlyLabel}</h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-soft)]">{c.honestly}</p>
                  </div>

                  <p className="mt-4 text-[13px] leading-relaxed text-[var(--ink-soft)]">
                    <span className="font-semibold">{t.sourceLabel}: </span>
                    {c.source}
                  </p>

                  {project ? (
                    <p className="mt-3">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold"
                        style={{ color: a.deep }}
                      >
                        {project.name}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </p>
                  ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Lighthouse table */}
        <section className="px-5 pb-16 sm:pb-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="yh-display text-center text-[clamp(1.5rem,4vw,2rem)]">{t.speedHeading}</h2>
            <p className="mx-auto mt-4 max-w-[58ch] text-center text-[16px] leading-relaxed text-[var(--ink-soft)]">
              {lighthouse.intro}
            </p>
            <p className="mt-3 text-center text-[13px] text-[var(--ink-soft)]">
              {lighthouse.tool} · {lighthouse.device} · {lighthouse.measuredOn}
            </p>

            {/* Wide table scrolls inside its own box rather than the page. */}
            <div className="mt-8 overflow-x-auto rounded-2xl" style={{ border: "1.5px solid color-mix(in srgb, var(--bark) 16%, transparent)" }}>
              <table className="w-full min-w-[640px] border-collapse bg-white text-left">
                <caption className="sr-only">
                  Lighthouse scores and Core Web Vitals for every live site, measured {lighthouse.measuredOn}
                </caption>
                <thead>
                  <tr className="text-[12px] uppercase tracking-wide text-[var(--ink-soft)]" style={{ background: "var(--paper-2)" }}>
                    <th scope="col" className="p-3 font-semibold">Site</th>
                    <th scope="col" className="p-3 font-semibold">Speed</th>
                    <th scope="col" className="p-3 font-semibold">Access</th>
                    <th scope="col" className="p-3 font-semibold">Practices</th>
                    <th scope="col" className="p-3 font-semibold">SEO</th>
                    <th scope="col" className="p-3 font-semibold">Paint</th>
                    <th scope="col" className="p-3 font-semibold">Shift</th>
                  </tr>
                </thead>
                <tbody>
                  {lighthouse.sites.map((s) => (
                    <tr key={s.slug} style={{ borderTop: "1px solid color-mix(in srgb, var(--bark) 12%, transparent)" }}>
                      <th scope="row" className="p-3 align-top text-[14px] font-semibold">
                        {s.name}
                        <a
                          href={pageSpeedLink(s.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 flex min-h-[32px] items-center gap-1 text-[12px] font-medium text-[var(--ink-soft)] underline underline-offset-2"
                        >
                          {site.resultsPage.verifyLabel}
                          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        </a>
                      </th>
                      <td className="p-3 align-top"><Score value={s.performance} /></td>
                      <td className="p-3 align-top"><Score value={s.accessibility} /></td>
                      <td className="p-3 align-top"><Score value={s.bestPractices} /></td>
                      <td className="p-3 align-top"><Score value={s.seo} /></td>
                      <td className="p-3 align-top text-[14px] tabular-nums">{s.lcp}</td>
                      <td className="p-3 align-top text-[14px] tabular-nums">{s.cls}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {lighthouse.sites.filter((s) => s.note).map((s) => (
                <li key={s.slug} className="text-[15px] leading-relaxed text-[var(--ink-soft)]">
                  <span className="font-semibold text-[var(--ink)]">{s.name}. </span>
                  {s.note}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[13px] leading-relaxed text-[var(--ink-soft)]">{lighthouse.caveat}</p>
          </div>
          <WorkCta />
        </section>
      </main>
      <Footer />
      <CursorButterfly />
      <Interactions />
    </div>
  );
}
