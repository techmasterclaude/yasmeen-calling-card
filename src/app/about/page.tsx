import type { Metadata } from "next";
import Link from "next/link";
import { Sprout, Gauge, KeyRound } from "lucide-react";
import { site } from "@/data/site";
import { Nav, Footer } from "@/components/sections/Nav";
import { GardenScene } from "@/components/garden/GardenScene";
import { TextureCardStyled, TextureCardContent } from "@/components/ui/texture-card";
import {Blossom, Leaf, Tree} from "@/components/garden/Flora";
import { Bough } from "@/components/garden/Bough";
import { LandingButterfly } from "@/components/ui/project-card";
import { Meadow } from "@/components/garden/Meadow";
import { CursorButterfly } from "@/components/garden/CursorButterfly";
import { Interactions } from "@/components/motion/Interactions";
import { pageMeta, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: site.aboutPage.title,
  description: site.aboutPage.description,
  path: "/about",
  ogTitle: "How I work",
});

const ICONS = [Sprout, Gauge, KeyRound];
const ACCENTS = [
  { tint: "var(--leaf)", deep: "var(--leaf-deep)" },
  { tint: "var(--sky)", deep: "var(--sky-deep)" },
  { tint: "var(--apricot)", deep: "var(--apricot-deep)" },
];

export default function AboutPage() {
  const a = site.aboutPage;
  return (
    <div id="top">
      <Nav />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <main id="main">
        <GardenScene accent="var(--wisteria)">
          <div className="text-center">
            <h1 className="text-[clamp(2.4rem,7vw,3.8rem)] leading-tight">{a.heading}</h1>
            <p className="mx-auto mt-5 max-w-[46ch] text-[clamp(1rem,2.4vw,1.15rem)] leading-relaxed text-[var(--ink-soft)]">{a.lead}</p>
          </div>
        </GardenScene>

        {/* How I work: the three approved statements, each on a texture card */}
        <section className="relative isolate overflow-hidden px-5 py-16 sm:py-24">
          <div aria-hidden="true" className="absolute inset-0 z-0">
            <Bough className="-left-16 top-10 hidden opacity-70 lg:block" width={280} draw delay={0.3} blossom="var(--leaf)" />
            <Bough className="-right-16 bottom-16 hidden opacity-65 lg:block" width={260} flip draw delay={0.7} />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl">
            <h2 className="yh-rise text-center text-[clamp(1.9rem,5vw,2.6rem)]">{site.process.heading}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {site.process.items.map((item, i) => {
                const Icon = ICONS[i];
                const c = ACCENTS[i];
                return (
                  <TextureCardStyled key={item.title} className="yh-rise group relative !rounded-[20px] !bg-white transition-transform duration-[180ms] ease-[var(--ease-sig)] hover:-translate-y-1">
                    <LandingButterfly tint={c.tint} alt="var(--petal)" />
                    <TextureCardContent className="p-6">
                      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full" style={{ background: `color-mix(in srgb, ${c.tint} 40%, var(--paper))`, color: c.deep }}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-[19px] leading-snug">{item.title}</h3>
                      <p className="mt-2 max-w-[38ch] text-[15px] leading-relaxed text-[var(--ink-soft)]">{item.body}</p>
                    </TextureCardContent>
                  </TextureCardStyled>
                );
              })}
            </div>
          </div>
        </section>

        {/* Two statements about the site itself */}
        <section className="relative isolate overflow-hidden px-5 pb-40 pt-16 sm:pb-48 sm:pt-20" style={{ background: "var(--paper-2)" }}>
          <div aria-hidden="true" className="absolute inset-0 z-0">
            <Tree className="yh-parallax-slow -left-20 bottom-4 hidden h-[300px] w-[230px] opacity-55 lg:block" />
            <Tree className="yh-parallax-slow -right-24 bottom-4 hidden h-[260px] w-[200px] opacity-50 lg:block" style={{ transform: "scaleX(-1)" }} />
            <Blossom className="left-[12%] top-[14%] hidden opacity-75 xl:block" size={46} bloom delay={0.5} />
            <Leaf className="right-[10%] top-[18%] hidden opacity-70 xl:block" size={40} rotate={40} fill="var(--sky)" unfurl delay={0.8} />
            <Meadow height={110} blades={56} />
          </div>
          <div className="relative z-10 mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
            <div className="yh-rise">
              <h2 className="text-[24px] leading-snug">{a.honesty.heading}</h2>
              <p className="mt-3 max-w-[44ch] text-[16px] leading-relaxed text-[var(--ink-soft)]">{a.honesty.body}</p>
              <Link href="/work" className="mt-4 inline-flex min-h-[44px] items-center text-[15px] font-semibold underline-offset-4 hover:underline" style={{ color: "var(--wisteria-deep)" }}>
                {site.workPage.heading}
              </Link>
            </div>
            <div className="yh-rise">
              <h2 className="text-[24px] leading-snug">{a.garden.heading}</h2>
              <p className="mt-3 max-w-[44ch] text-[16px] leading-relaxed text-[var(--ink-soft)]">{a.garden.body}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CursorButterfly />
      <Interactions />
    </div>
  );
}
