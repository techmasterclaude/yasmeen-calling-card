/**
 * Uses Aceternity `BentoGrid` / `BentoGridItem` as the layout donor
 * (its dark-mode classes and @tabler icons stripped) plus Cult UI
 * `TextureCard` for the card surfaces and Aceternity `Spotlight`
 * re-coloured to a warm sunbeam.
 */
import { site } from "@/data/site";
import { RevealWords } from "@/components/motion/Reveal";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Spotlight } from "@/components/ui/spotlight";
import { Sprout, Gauge, KeyRound } from "lucide-react";
import {Tree, Blossom} from "@/components/garden/Flora";
import { Bough } from "@/components/garden/Bough";
import { Butterfly } from "@/components/garden/Butterfly";

const ICONS = [Sprout, Gauge, KeyRound];
const ACCENTS = [
  { tint: "var(--leaf)", deep: "var(--leaf-deep)" },
  { tint: "var(--sky)", deep: "var(--sky-deep)" },
  { tint: "var(--apricot)", deep: "var(--apricot-deep)" },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative isolate scroll-mt-20 overflow-hidden px-5 py-20 sm:py-24"
      style={{ background: "var(--paper-2)" }}
    >
      {/* Aceternity Spotlight, re-coloured from its shipped dark-mode blue. */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="var(--apricot)" />

      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Tree className="-left-24 bottom-0 hidden h-[280px] w-[210px] opacity-45 lg:block" />
        <Bough className="-right-14 top-[12%] hidden opacity-65 lg:block" width={250} flip />
        <Blossom className="left-[46%] top-[4%] hidden opacity-60 xl:block" size={40} petal="var(--wisteria)" heart="var(--paper)" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="yh-rise relative mx-auto mb-12 max-w-2xl text-center">
          <span aria-hidden="true" className="yh-rule mx-auto mb-5" />
          <RevealWords as="h2" text={site.process.heading} className="text-[clamp(2rem,5.5vw,2.85rem)] leading-tight" />
          <Butterfly
            className="-left-4 -top-4 hidden md:block"
            wing="var(--sky)" wingAlt="var(--leaf)" size={26} flapDelay=".45s" opacity={0.88}
          />
        </header>

        <BentoGrid className="max-w-5xl md:auto-rows-[15rem] md:grid-cols-3">
          {site.process.items.map((item, i) => {
            const Icon = ICONS[i];
            const a = ACCENTS[i];
            return (
              <BentoGridItem
                key={item.title}
                className="yh-rise !rounded-[20px] !bg-white !p-6 !shadow-none transition-transform duration-[180ms] ease-[var(--ease-sig)] hover:-translate-y-1"
                title={<span className="yh-display text-[19px] leading-snug text-[var(--ink)]">{item.title}</span>}
                description={<span className="block max-w-[38ch] text-[15px] leading-relaxed text-[var(--ink-soft)]">{item.body}</span>}
                icon={
                  <span
                    className="mb-1 inline-flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ background: `color-mix(in srgb, ${a.tint} 40%, var(--paper))`, color: a.deep }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                }
                header={
                  <div
                    className="h-1.5 w-14 rounded-full"
                    style={{ background: a.tint }}
                    aria-hidden="true"
                  />
                }
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
