import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { Bough } from "@/components/garden/Bough";
import { Blossom } from "@/components/garden/Flora";

/**
 * The work index had no call to action at all: a visitor convinced by the grid
 * had to backtrack through the header nav to convert. This closes that loop
 * without interrupting the grid above it.
 */
export function WorkCta() {
  return (
    <section className="relative isolate mx-auto mt-16 max-w-3xl overflow-hidden px-5">
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Bough className="-left-20 top-2 hidden opacity-55 lg:block" width={220} leafCount={6} />
        <Blossom className="right-[6%] bottom-[10%] hidden opacity-65 xl:block" size={38} petal="var(--apricot)" />
      </div>
      <div
        className="relative z-10 rounded-[20px] bg-white px-6 py-10 text-center sm:px-10"
        style={{
          border: "1.5px solid color-mix(in srgb, var(--wisteria) 45%, transparent)",
          boxShadow: "var(--shadow-warm)",
        }}
      >
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] leading-tight">{site.workCta.heading}</h2>
        <p className="mx-auto mt-3 max-w-[44ch] text-[16px] leading-relaxed text-[var(--ink-soft)]">
          {site.workCta.body}
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full px-7 text-[15px] font-semibold text-white transition-transform duration-[180ms] ease-[var(--ease-sig)] hover:-translate-y-0.5"
          style={{ background: "var(--wisteria-deep)", boxShadow: "var(--shadow-warm)" }}
        >
          {site.workCta.button} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
