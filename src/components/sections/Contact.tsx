/**
 * Cult UI `TextureCardStyled` + `TextureButton` (both MIT, vendored from GitHub;
 * licence at vendor-licenses/cult-ui-LICENSE.md), wrapped in Magic UI `ShineBorder`.
 * Both Cult components are pure CSS — neither pulls Motion.
 */
import { site } from "@/data/site";
import { RevealWords } from "@/components/motion/Reveal";
import {
  TextureCardStyled,
  TextureCardContent,
} from "@/components/ui/texture-card";
import { TextureButton } from "@/components/ui/texture-button";
import { ShineBorder } from "@/components/ui/shine-border";
import {Blossom, Leaf, PetalFall} from "@/components/garden/Flora";
import { Bough } from "@/components/garden/Bough";
import { Butterfly } from "@/components/garden/Butterfly";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Meadow } from "@/components/garden/Meadow";

export function Contact() {
  return (
    <section id="contact" className="relative isolate scroll-mt-20 overflow-hidden px-5 pb-36 pt-20 sm:pb-44 sm:pt-28">
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Bough className="-left-14 bottom-[16%] hidden opacity-70 lg:block" width={260} blossom="var(--petal)" />
        <Bough className="-right-14 top-[12%] hidden opacity-65 lg:block" width={240} flip />
        <Blossom className="left-[16%] top-[18%] hidden opacity-70 md:block" size={46} />
        <Blossom className="right-[15%] bottom-[16%] hidden opacity-65 md:block" size={38} petal="var(--apricot)" heart="var(--petal)" />
        <Leaf className="right-[26%] top-[12%] hidden opacity-60 xl:block" size={40} rotate={-40} fill="var(--sky)" />
        <Meadow height={120} blades={60} />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* One card, not two. Cult's TextureCardStyled IS the surface; ShineBorder
            draws its animated edge from inside it. An extra rounded wrapper around
            both was a card inside a card. */}
        <TextureCardStyled className="relative overflow-hidden !rounded-[22px] !border-none !bg-white">
          <ShineBorder
            borderWidth={2}
            duration={16}
            shineColor={["var(--petal)", "var(--apricot)", "var(--petal)"]}
          />
          <TextureCardContent className="px-6 py-12 text-center sm:px-10">
              <RevealWords as="h2" text={site.contact.heading} className="text-[clamp(1.9rem,5vw,2.6rem)] leading-tight" />
              <p className="mx-auto mt-4 max-w-[42ch] text-[16px] leading-relaxed text-[var(--ink-soft)]">
                {site.contact.body}
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-block rounded-[14px] focus-visible:outline-3"
                >
                  <TextureButton variant="garden" size="lg" className="min-h-[48px] px-2">
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      {site.contact.button}
                    </span>
                  </TextureButton>
                </a>
              </div>

              <p className="mt-5 text-[14px] text-[var(--ink-soft)]">
                <Link href="/contact" className="mr-3 font-semibold underline underline-offset-4" style={{ color: "var(--wisteria-deep)" }}>
                  {site.contactPage.heading}
                </Link>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="underline underline-offset-4 hover:text-[var(--wisteria-deep)]"
                >
                  {site.contact.email}
                </a>
              </p>
          </TextureCardContent>
        </TextureCardStyled>
      </div>

      {/* FRONT band — butterflies converging on the card, clear of the button. */}
      <div aria-hidden="true" className="yh-front absolute inset-0 z-20">
        <Butterfly
          className="left-0 top-0 hidden md:block"
          path='path("M 60 340 C 240 200, 420 380, 620 240")'
          wing="var(--petal)" wingAlt="var(--wisteria)"
          duration="21s" flapDelay=".1s" size={32}
        />
        <Butterfly
          className="left-0 top-0 hidden lg:block"
          path='path("M 1280 120 C 1080 260, 940 120, 780 260")'
          wing="var(--sky)" wingAlt="var(--leaf)"
          duration="25s" delay="-8s" flapDelay=".55s" size={26} opacity={0.85}
        />
        <PetalFall count={3} />
      </div>
    </section>
  );
}
