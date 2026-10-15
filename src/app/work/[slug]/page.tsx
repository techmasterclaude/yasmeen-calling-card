import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Nav, Footer } from "@/components/sections/Nav";
import { GardenScene } from "@/components/garden/GardenScene";
import { ACCENT } from "@/components/ui/project-card";
import {Blossom, Leaf} from "@/components/garden/Flora";
import { Bough } from "@/components/garden/Bough";
import { Butterfly } from "@/components/garden/Butterfly";
import { CursorButterfly } from "@/components/garden/CursorButterfly";
import { Interactions } from "@/components/motion/Interactions";
import { pageMeta, projectJsonLd, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.name}`,
    description: p.line,
    path: `/work/${p.slug}`,
    ogTitle: p.name,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const a = ACCENT[p.accent];
  const t = site.projectPage;

  return (
    <div id="top">
      <Nav />
      <JsonLd data={projectJsonLd(p.slug)!} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }, { name: p.name, path: `/work/${p.slug}` }])} />
      <main id="main">
        <GardenScene compact accent={a.tint}>
          <div className="text-center">
            <Link href="/work" className="inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold" style={{ color: a.deep }}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {t.back}
            </Link>
            <div className="mt-2 flex flex-wrap justify-center gap-1.5">
              {p.tags.map((tag) => (
                <span key={tag} className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold" style={{ background: `color-mix(in srgb, ${a.tint} 34%, var(--paper))`, color: a.deep }}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-3 text-[clamp(2.4rem,7vw,3.8rem)] leading-tight">{p.name}</h1>
            <p className="mt-2 text-[14px] font-semibold" style={{ color: a.deep }}>
              {p.preview ? t.status.preview : t.status.live}
            </p>
          </div>
        </GardenScene>

        {/* The screenshot overlaps the bottom of the garden header, so the site
            looks like it is sitting in the meadow. */}
        <section className="relative z-10 -mt-20 px-5 sm:-mt-24">
          <div className="relative mx-auto max-w-5xl">
            <Leaf className="-left-6 -top-6 z-20 hidden xl:block" size={56} rotate={-30} style={{ opacity: 0.9 }} unfurl delay={1.2} />
            <Blossom className="-right-5 -top-8 z-20 hidden xl:block" size={58} petal={a.tint} bloom delay={1.5} style={{ opacity: 0.92 }} />
            <Butterfly className="-right-3 top-1/2 hidden lg:block" wing={a.tint} wingAlt="var(--sky)" size={44} flapDelay=".2s" />
            <div
              className="overflow-hidden rounded-[22px] bg-white"
              style={{ border: `1.5px solid color-mix(in srgb, ${a.tint} 60%, transparent)`, boxShadow: "var(--shadow-warm-lg)" }}
            >
              <Image
                src={p.image}
                alt={`Screenshot of the ${p.name} website home page`}
                width={1200}
                height={675}
                priority
                sizes="(max-width: 1100px) 100vw, 1024px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="relative px-5 py-16 sm:py-20">
          <Bough className="-left-16 top-8 hidden opacity-65 lg:block" width={260} draw delay={0.4} leafCount={7} />
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-[22px]">{t.what}</h2>
              <p className="mt-3 max-w-[58ch] text-[17px] leading-relaxed text-[var(--ink-soft)]">{p.line}</p>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full px-7 text-[15px] font-semibold text-white transition-transform duration-[180ms] ease-[var(--ease-sig)] hover:-translate-y-0.5"
                style={{ background: a.deep, boxShadow: "var(--shadow-warm)" }}
              >
                {t.live} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <span className="text-[14px] text-[var(--ink-soft)]">{p.display}</span>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center text-[15px] font-semibold underline-offset-4 hover:underline"
                style={{ color: "var(--wisteria-deep)" }}
              >
                {site.workCta.heading}
              </Link>
            </div>
          </div>

          <nav aria-label="Other work" className="mx-auto mt-16 flex max-w-5xl items-center justify-between gap-4 border-t pt-8" style={{ borderColor: "color-mix(in srgb, var(--bark) 18%, transparent)" }}>
            <Link href={`/work/${prev.slug}`} className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)]">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span><span className="sr-only">{t.prev}: </span>{prev.name}</span>
            </Link>
            <Link href={`/work/${next.slug}`} className="inline-flex min-h-[44px] items-center gap-2 text-right text-[15px] font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)]">
              <span><span className="sr-only">{t.next}: </span>{next.name}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        </section>
      </main>
      <Footer />
      <CursorButterfly />
      <Interactions />
    </div>
  );
}
