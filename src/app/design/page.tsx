import type { Metadata } from "next";
import { site } from "@/data/site";
import { Nav, Footer } from "@/components/sections/Nav";
import { GardenScene } from "@/components/garden/GardenScene";
import { DesignGrid } from "@/components/design/DesignGrid";
import { WorkCta } from "@/components/work/WorkCta";
import { CursorButterfly } from "@/components/garden/CursorButterfly";
import { Interactions } from "@/components/motion/Interactions";
import { breadcrumbJsonLd, pageMeta, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: site.designPage.title,
  description: site.designPage.description,
  path: "/design",
  ogTitle: site.designPage.heading,
});

export default function DesignPage() {
  return (
    <div id="top">
      <Nav />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Design", path: "/design" }])} />
      <main id="main">
        <GardenScene compact accent="var(--apricot)">
          <div className="text-center">
            <h1 className="text-[clamp(2.4rem,7vw,3.6rem)] leading-tight">{site.designPage.heading}</h1>
            <p className="mx-auto mt-4 max-w-[52ch] text-[17px] leading-relaxed text-[var(--ink-soft)]">
              {site.designPage.intro}
            </p>
          </div>
        </GardenScene>
        <section className="px-5 py-16 sm:py-20">
          <DesignGrid />
          <WorkCta />
        </section>
      </main>
      <Footer />
      <CursorButterfly />
      <Interactions />
    </div>
  );
}
