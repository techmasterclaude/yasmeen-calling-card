import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { designs } from "@/data/designs";
import { site } from "@/data/site";
import { Nav, Footer } from "@/components/sections/Nav";
import { GardenScene } from "@/components/garden/GardenScene";
import { ACCENT } from "@/components/ui/project-card";
import { CursorButterfly } from "@/components/garden/CursorButterfly";
import { Interactions } from "@/components/motion/Interactions";
import { pageMeta, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return designs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = designs.find((x) => x.slug === slug);
  if (!d) return {};
  return pageMeta({
    title: d.name,
    description: d.line,
    path: `/design/${d.slug}`,
    ogTitle: d.name,
  });
}

export default async function DesignProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = designs.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const d = designs[i];
  const next = designs[(i + 1) % designs.length];
  const a = ACCENT[d.accent];
  const t = site.designPage;

  return (
    <div id="top">
      <Nav />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Design", path: "/design" },
          { name: d.name, path: `/design/${d.slug}` },
        ])}
      />
      <main id="main">
        <GardenScene compact accent={a.tint}>
          <div className="text-center">
            <Link href="/design" className="inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold" style={{ color: a.deep }}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {t.back}
            </Link>
            <div className="mt-2 flex flex-wrap justify-center gap-1.5">
              {d.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                  style={{ background: `color-mix(in srgb, ${a.tint} 34%, var(--paper))`, color: a.deep }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-3 text-[clamp(2.1rem,6vw,3.2rem)] leading-tight">{d.name}</h1>
            <p className="mx-auto mt-4 max-w-[54ch] text-[17px] leading-relaxed text-[var(--ink-soft)]">{d.line}</p>
          </div>
        </GardenScene>

        <section className="px-5 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl">
            {/* The status note is the honesty mechanism for this whole section:
                a visitor cannot click a logo to check it, so the page has to
                say outright whether the business adopted it. */}
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{ background: "var(--paper-2)", border: `1.5px solid color-mix(in srgb, ${a.tint} 45%, transparent)` }}
            >
              <h2 className="yh-display text-[19px]">{t.noteHeading}</h2>
              <p className="mt-2 flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-semibold"
                  style={
                    d.status === "In use"
                      ? { background: "color-mix(in srgb, var(--leaf) 30%, var(--paper))", color: "var(--ink)" }
                      : { background: "#fff", color: "var(--ink-soft)" }
                  }
                >
                  {d.status}
                </span>
                <span className="text-[13px] font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
                  {d.client}
                </span>
              </p>
              <p className="mt-3 text-[16px] leading-relaxed text-[var(--ink-soft)]">{d.statusNote}</p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <h2 className="yh-display text-center text-[22px]">{t.piecesHeading}</h2>
            <div className="mt-8 flex flex-col gap-10">
              {d.pieces.map((piece, n) => (
                <figure key={piece.src} className={n > 0 ? "yh-rise" : undefined}>
                  <div className="overflow-hidden rounded-2xl" style={{ border: "1.5px solid color-mix(in srgb, var(--bark) 14%, transparent)" }}>
                    <Image
                      src={piece.src}
                      alt={piece.alt}
                      width={1600}
                      height={1200}
                      sizes="(max-width: 900px) 100vw, 900px"
                      priority={n === 0}
                      fetchPriority={n === 0 ? "high" : undefined}
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">{piece.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 flex max-w-4xl justify-end">
            <Link
              href={`/design/${next.slug}`}
              className="inline-flex min-h-[44px] items-center gap-1.5 text-[14px] font-semibold"
              style={{ color: a.deep }}
            >
              {next.name} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CursorButterfly />
      <Interactions />
    </div>
  );
}
