import type { Metadata } from "next";
import { site } from "@/data/site";
import { Nav, Footer } from "@/components/sections/Nav";
import { GardenScene } from "@/components/garden/GardenScene";
import { WorkGrid } from "@/components/work/WorkGrid";
import { WorkCta } from "@/components/work/WorkCta";
import { CursorButterfly } from "@/components/garden/CursorButterfly";
import { Interactions } from "@/components/motion/Interactions";
import { pageMeta, workListJsonLd, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: site.workPage.title,
  description: site.workPage.description,
  path: "/work",
  ogTitle: site.workPage.heading,
});

export default function WorkPage() {
  return (
    <div id="top">
      <Nav />
      <JsonLd data={workListJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }])} />
      <main id="main">
        <GardenScene compact accent="var(--leaf)">
          <div className="text-center">
            <h1 className="text-[clamp(2.4rem,7vw,3.6rem)] leading-tight">{site.workPage.heading}</h1>
            <p className="mx-auto mt-4 max-w-[52ch] text-[17px] leading-relaxed text-[var(--ink-soft)]">{site.workPage.intro}</p>
            <p className="mx-auto mt-3 max-w-[52ch] text-[15px] leading-relaxed text-[var(--ink-soft)]">{site.workPage.transfer}</p>
          </div>
        </GardenScene>
        <section className="px-5 py-16 sm:py-20">
          <WorkGrid />
          <WorkCta />
        </section>
      </main>
      <Footer />
      <CursorButterfly />
      <Interactions />
    </div>
  );
}
