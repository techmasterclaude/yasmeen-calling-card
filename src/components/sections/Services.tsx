import { site } from "@/data/site";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { Bough } from "@/components/garden/Bough";
import { Blossom, Leaf } from "@/components/garden/Flora";

/**
 * What the offer actually is, now that the positioning is any small business
 * rather than food only. These are SERVICE TYPES, not clients: nothing here
 * implies a business of that kind has been built for.
 */
export function Services() {
  return (
    <section id="services" className="relative isolate scroll-mt-20 overflow-hidden px-5 py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Bough className="-left-16 top-12 hidden opacity-60 lg:block" width={260} leafCount={7} />
        <Bough className="-right-16 bottom-16 hidden opacity-55 lg:block" width={240} flip />
        <Blossom className="right-[8%] top-[12%] hidden opacity-70 xl:block" size={40} petal="var(--wisteria)" />
        <Leaf className="left-[7%] bottom-[16%] hidden opacity-60 xl:block" size={38} rotate={-36} fill="var(--sky)" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <span aria-hidden="true" className="yh-rule mx-auto mb-5" />
          <RevealWords as="h2" text={site.services.heading} className="text-[clamp(2rem,5.5vw,2.85rem)] leading-tight" />
          <p className="mx-auto mt-4 max-w-[46ch] text-[17px] leading-relaxed text-[var(--ink-soft)]">
            {site.services.intro}
          </p>
        </header>

        <Reveal className="grid gap-5 sm:grid-cols-2" stagger={110} y={22}>
          {site.services.items.map((s, i) => (
            <article
              key={s.title}
              data-tilt="4"
              className="group yh-tilt yh-sheen relative overflow-hidden rounded-[20px] bg-white p-6 sm:p-8"
              style={{
                border: "1.5px solid color-mix(in srgb, var(--wisteria) 42%, transparent)",
                boxShadow: "var(--shadow-warm)",
              }}
            >
              <span
                aria-hidden="true"
                className="yh-display mb-3 block text-[13px] font-semibold tracking-[0.18em]"
                style={{ color: "var(--gilt)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[21px] leading-snug">{s.title}</h3>
              <p className="mt-2.5 max-w-[46ch] text-[15px] leading-relaxed text-[var(--ink-soft)]">{s.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
