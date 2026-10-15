import type { Metadata } from "next";
import { site } from "@/data/site";
import { Nav, Footer } from "@/components/sections/Nav";
import { GardenScene } from "@/components/garden/GardenScene";
import { ContactForm } from "@/components/contact/ContactForm";
import { TextureCardStyled, TextureCardContent } from "@/components/ui/texture-card";
import { ShineBorder } from "@/components/ui/shine-border";
import {Blossom, Leaf} from "@/components/garden/Flora";
import { Bough } from "@/components/garden/Bough";
import { Butterfly } from "@/components/garden/Butterfly";
import { CursorButterfly } from "@/components/garden/CursorButterfly";
import { Interactions } from "@/components/motion/Interactions";
import { pageMeta, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: site.contactPage.title,
  description: site.contactPage.description,
  path: "/contact",
  ogTitle: site.contactPage.heading,
});

export default function ContactPage() {
  const c = site.contactPage;
  return (
    <div id="top">
      <Nav />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <main id="main">
        <GardenScene compact accent="var(--apricot)">
          <div className="text-center">
            <h1 className="text-[clamp(2.4rem,7vw,3.8rem)] leading-tight">{c.heading}</h1>
            <p className="mx-auto mt-5 max-w-[46ch] text-[clamp(1rem,2.4vw,1.15rem)] leading-relaxed text-[var(--ink-soft)]">{c.lead}</p>
          </div>
        </GardenScene>

        <section className="relative z-10 -mt-16 px-5 pb-20 sm:-mt-20 sm:pb-28">
          <div className="relative mx-auto max-w-2xl">
            <Leaf className="-left-8 -top-5 z-20 hidden xl:block" size={54} rotate={-30} style={{ opacity: 0.9 }} unfurl delay={1.1} />
            <Blossom className="-right-7 top-10 z-20 hidden xl:block" size={56} petal="var(--apricot)" heart="var(--petal)" bloom delay={1.4} style={{ opacity: 0.92 }} />
            <Butterfly className="-right-4 bottom-10 hidden lg:block" wing="var(--petal)" wingAlt="var(--wisteria)" size={44} flapDelay=".3s" />
            <Bough className="-left-40 bottom-4 hidden opacity-65 xl:block" width={240} draw delay={0.6} leafCount={7} />
            <TextureCardStyled className="relative overflow-hidden !rounded-[22px] !border-none !bg-white">
              <ShineBorder borderWidth={2} duration={16} shineColor={["var(--petal)", "var(--apricot)", "var(--petal)"]} />
              <TextureCardContent className="p-6 sm:p-10">
                <ContactForm />
                <p className="mt-6 text-[14px] text-[var(--ink-soft)]">
                  Or write directly:{" "}
                  <a href={`mailto:${site.contact.email}`} className="font-semibold underline underline-offset-4" style={{ color: "var(--wisteria-deep)" }}>
                    {site.contact.email}
                  </a>
                </p>
              </TextureCardContent>
            </TextureCardStyled>
          </div>
        </section>
      </main>
      <Footer />
      <CursorButterfly />
      <Interactions />
    </div>
  );
}
