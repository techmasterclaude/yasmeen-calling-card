/**
 * PORT of 21st.dev "Floating Food Hero" (#8435) by @ravikatiyar162: a centred
 * text block with decorative elements floated around it in bands behind and in
 * front, with staggered delays. Its swirls and food photos became our sky, trees,
 * vines, meadow, butterflies and bee; its palette became the DESIGN.md tokens.
 */
import { site } from "@/data/site";
import { RevealWords } from "@/components/motion/Reveal";
import {Tree, Blossom, Leaf, PetalFall} from "@/components/garden/Flora";
import { Bough } from "@/components/garden/Bough";
import { Butterfly } from "@/components/garden/Butterfly";
import { Meadow } from "@/components/garden/Meadow";
import { Sun, Clouds } from "@/components/garden/Sky";
import { Bee } from "@/components/garden/Bee";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden px-5 pb-36 pt-16 sm:pb-44 sm:pt-28"
      style={{ background: "radial-gradient(120% 80% at 50% 0%, var(--paper-2) 0%, var(--paper) 62%)" }}
    >
      {/* ---------- BEHIND band (z-0) ---------- */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Clouds />
        <Sun className="yh-parallax-slow -top-20 right-[6%] hidden opacity-85 md:block" size={300} />
        <Tree className="yh-parallax-fast -left-28 bottom-6 h-[220px] w-[190px] opacity-55 sm:-left-16 sm:h-[420px] sm:w-[320px] sm:opacity-80" />
        <Tree className="yh-parallax-fast -right-20 bottom-6 hidden h-[380px] w-[290px] opacity-70 md:block" style={{ transform: "scaleX(-1)" }} />
        <Tree className="yh-parallax-slow left-[18%] bottom-6 hidden h-[240px] w-[180px] opacity-45 xl:block" />
        <Bough className="-left-16 top-[26%] hidden opacity-80 md:block" width={330} draw delay={0.1} blossom="var(--petal)" />
        <Bough className="-right-20 top-[20%] hidden opacity-75 md:block" width={360} flip draw delay={0.4} blossom="var(--wisteria)" />
        <Blossom className="left-[9%] top-[56%] hidden opacity-85 md:block" size={62} bloom delay={1.0} />
        <Blossom className="right-[11%] top-[64%] hidden opacity-80 md:block" size={50} petal="var(--wisteria)" heart="var(--petal)" bloom delay={1.3} />
        <Blossom className="left-[27%] top-[13%] hidden opacity-70 lg:block" size={38} petal="var(--apricot)" heart="var(--petal)" bloom delay={1.6} />
        <Leaf className="left-[33%] top-[9%] hidden opacity-75 lg:block" size={44} rotate={-24} unfurl delay={0.8} />
        <Leaf className="right-[30%] bottom-[22%] hidden opacity-75 lg:block" size={48} rotate={140} fill="var(--sky)" unfurl delay={1.2} />
        <Leaf className="right-[36%] top-[11%] hidden opacity-65 xl:block" size={36} rotate={52} fill="var(--wisteria)" unfurl delay={1.4} />
        <Meadow height={120} blades={64} />
      </div>

      {/* ---------- CONTENT band (z-10) ---------- */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <RevealWords
          as="h1"
          text={site.hero.heading}
          stagger={110}
          className="text-[clamp(2.75rem,9vw,4.75rem)] leading-[1.02]"
        />
        <p className="mt-3 text-[15px] font-semibold text-[var(--petal-deep)]">{site.hero.eyebrow}</p>
        <p className="mx-auto mt-5 max-w-[34ch] text-[clamp(1rem,2.4vw,1.175rem)] leading-relaxed text-[var(--ink-soft)]">
          {site.hero.sub}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={site.hero.primary.href}
            data-magnet="0.3"
            className="yh-magnet inline-flex min-h-[48px] items-center rounded-full px-7 text-[15px] font-semibold text-white"
            style={{ background: "var(--wisteria-deep)", boxShadow: "var(--shadow-warm)" }}
          >
            {site.hero.primary.label}
          </a>
          <a
            href={site.hero.secondary.href}
            data-magnet="0.22"
            className="yh-magnet inline-flex min-h-[48px] items-center rounded-full bg-white px-7 text-[15px] font-semibold"
            style={{ color: "var(--petal-deep)", border: "1.5px solid color-mix(in srgb, var(--petal) 70%, transparent)", boxShadow: "var(--shadow-warm)" }}
          >
            {site.hero.secondary.label}
          </a>
        </div>
      </div>

      {/* ---------- FRONT band (z-20) ---------- */}
      <div aria-hidden="true" className="yh-front absolute inset-0 z-20">
        {/* Grazes the outer edges of the type block; the name is two words so
            nothing in this band may cross it. The button band (x 480-960,
            y 440-520 at 1440 wide) is kept clear by every path below. */}
        <Leaf className="left-[calc(50%+17rem)] top-[20%] hidden md:block" size={58} rotate={-38} style={{ opacity: 0.9 }} unfurl delay={1.5} />
        <Blossom className="left-[calc(50%+19.5rem)] top-[31%] hidden lg:block" size={50} style={{ opacity: 0.92 }} bloom delay={1.8} />
        <Leaf className="right-[calc(50%+17.5rem)] top-[48%] hidden lg:block" size={44} rotate={128} fill="var(--apricot)" style={{ opacity: 0.88 }} unfurl delay={1.7} />
        <Bough className="-left-10 top-[62%] hidden opacity-70 xl:block" width={230} draw delay={0.8} leafCount={7} />

        <Butterfly className="left-0 top-0 hidden sm:block" path='path("M 110 150 C 400 110, 690 250, 900 355 S 1210 300, 1390 190")' duration="23s" size={58} />
        <Butterfly className="left-0 top-0 hidden md:block" path='path("M 1340 640 C 1080 720, 840 610, 620 700 S 250 660, 40 740")' wing="var(--sky)" wingAlt="var(--wisteria)" duration="27s" delay="-6s" flapDelay=".25s" size={46} opacity={0.88} />
        <Butterfly className="left-0 top-0 hidden lg:block" path='path("M 1400 80 C 1200 40, 1000 120, 820 60 S 500 100, 300 40")' wing="var(--apricot)" wingAlt="var(--sky)" duration="31s" delay="-14s" flapDelay=".6s" size={40} opacity={0.85} />
        <Butterfly className="left-0 top-0 hidden xl:block" path='path("M 60 620 C 200 560, 320 660, 460 600")' wing="var(--wisteria)" wingAlt="var(--petal)" duration="17s" delay="-3s" flapDelay=".9s" size={36} opacity={0.9} />
        <Butterfly className="left-0 top-0 sm:hidden" path='path("M 26 374 C 118 352, 216 390, 322 362")' wing="var(--apricot)" wingAlt="var(--petal)" duration="17s" flapDelay=".5s" size={30} opacity={0.9} />
        <Butterfly className="left-0 top-0 hidden sm:block" path='path("M 30 380 C 130 300, 225 430, 320 345")' wing="var(--apricot)" wingAlt="var(--petal)" duration="19s" delay="-11s" flapDelay=".5s" size={40} opacity={0.9} />
        <Butterfly className="right-[7%] top-[20%] hidden lg:block" wing="var(--wisteria)" wingAlt="var(--sky)" flapDelay=".7s" size={38} opacity={0.85} />
        <Bee className="left-0 top-0 hidden md:block" path='path("M 1000 560 C 1080 500, 1180 620, 1260 560 S 1400 500, 1480 560 S 1340 620, 1260 560 S 1080 620, 1000 560")' duration="20s" size={30} />
        <PetalFall count={5} />
      </div>
    </section>
  );
}
