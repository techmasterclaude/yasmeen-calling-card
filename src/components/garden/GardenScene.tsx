import { cn } from "@/lib/utils";
import { Tree, Blossom, Leaf, PetalFall } from "./Flora";
import { Bough } from "./Bough";
import { Butterfly } from "./Butterfly";
import { Meadow } from "./Meadow";
import { Sun, Clouds } from "./Sky";
import { Bee } from "./Bee";

/**
 * A reusable page header that puts its children inside a garden: sky and sun
 * behind, meadow along the ground, vines that draw on when the page loads,
 * butterflies and a bee crossing in front. Every page after the home page
 * uses this so the site reads as one place, tinted per page by `accent`.
 */
export function GardenScene({
  children,
  className,
  accent = "var(--petal)",
  compact = false,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden px-5",
        compact ? "pb-28 pt-12 sm:pb-32 sm:pt-16" : "pb-32 pt-16 sm:pb-40 sm:pt-24",
        className
      )}
      style={{ background: "radial-gradient(120% 80% at 50% 0%, var(--paper-2) 0%, var(--paper) 62%)" }}
    >
      {/* BEHIND band */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Clouds />
        <Sun className="yh-parallax-slow -right-16 -top-24 hidden opacity-80 md:block" size={280} />
        <Tree className="yh-parallax-fast -left-24 bottom-0 h-[230px] w-[190px] opacity-60 sm:-left-8 sm:h-[300px] sm:w-[230px]" />
        <Tree className="yh-parallax-fast -right-24 bottom-0 hidden h-[280px] w-[210px] opacity-55 lg:block" style={{ transform: "scaleX(-1)" }} />
        <Bough className="-left-14 top-[20%] hidden opacity-80 md:block" width={300} draw delay={0.2} blossom={accent} />
        <Bough className="-right-16 top-[24%] hidden opacity-75 md:block" width={280} flip draw delay={0.6} />
        <Blossom className="left-[14%] top-[58%] hidden opacity-85 md:block" size={54} petal={accent} bloom delay={1.2} />
        <Blossom className="right-[13%] top-[52%] hidden opacity-80 lg:block" size={44} petal="var(--wisteria)" heart={accent} bloom delay={1.5} />
        <Leaf className="left-[30%] top-[10%] hidden opacity-75 lg:block" size={40} rotate={-24} unfurl delay={0.9} />
        <Leaf className="right-[28%] top-[14%] hidden opacity-70 lg:block" size={36} rotate={52} fill="var(--sky)" unfurl delay={1.1} />
        <Meadow height={compact ? 80 : 110} blades={compact ? 40 : 56} />
      </div>

      {/* CONTENT band */}
      <div className="relative z-10 mx-auto max-w-3xl">{children}</div>

      {/* FRONT band */}
      <div aria-hidden="true" className="yh-front absolute inset-0 z-20">
        <Butterfly
          className="left-0 top-0 hidden sm:block"
          path='path("M 60 120 C 320 60, 620 200, 900 110 S 1240 140, 1400 70")'
          wing={accent} wingAlt="var(--wisteria)" duration="24s" size={52}
        />
        <Butterfly
          className="left-0 top-0 hidden md:block"
          path='path("M 1380 300 C 1120 360, 900 260, 640 340 S 220 300, 20 360")'
          wing="var(--sky)" wingAlt={accent} duration="29s" delay="-9s" flapDelay=".3s" size={42} opacity={0.88}
        />
        <Butterfly
          className="left-0 top-0 sm:hidden"
          path='path("M 20 40 C 120 10, 240 70, 340 30")'
          wing={accent} wingAlt="var(--sky)" duration="18s" size={32}
        />
        <Bee
          className="left-0 top-0 hidden lg:block"
          path='path("M 200 220 C 300 140, 420 300, 520 220 S 740 140, 840 220 S 620 300, 520 220 S 300 300, 200 220")'
          duration="22s" size={28}
        />
        <PetalFall count={4} />
      </div>
    </section>
  );
}
