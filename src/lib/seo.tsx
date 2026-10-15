import { site, INDEXABLE } from "@/data/site";
import { projects } from "@/data/projects";

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL at build time once a domain exists.
 *
 * This is the ONLY NEXT_PUBLIC_* variable in the project, and it is on the CI
 * allowlist for that reason: it is a public URL by definition and carries no
 * secret. See .github/workflows/ci.yml.
 */
const strip = (u: string) => u.replace(/\/$/, "");

/**
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL   an explicit custom domain, once one exists
 *   2. VERCEL_PROJECT_PRODUCTION_URL  Vercel injects this at build time and it
 *      is the STABLE production alias, not the per-deployment URL. Using it
 *      means canonicals are correct on Vercel with nothing configured by hand.
 *   3. a placeholder, so local builds and CI still resolve.
 *
 * All three are read at BUILD time, because NEXT_PUBLIC_* is inlined into the
 * bundle. Changing the variable alone does nothing: Vercel deduplicates a
 * deployment whose source is byte-identical, so the old value stays baked in.
 * A rebuild has to be forced, or the source has to change.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? strip(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${strip(process.env.VERCEL_PROJECT_PRODUCTION_URL)}`
    : "https://yasmeenhasan.example";

/**
 * `new URL("/", origin)` normalizes to a trailing slash, but Next's metadata
 * resolver strips it from the root canonical and og:url. That left the homepage
 * canonical and the JSON-LD Person/WebSite url fields as byte-different strings
 * for the same entity. Normalizing here keeps every consumer identical.
 */
export const abs = (path = "/") => {
  const u = new URL(path, SITE_URL).toString();
  return u.endsWith("/") && u !== `${SITE_URL}/` ? u.replace(/\/$/, "") : u.replace(/\/$/, "");
};

/** Person + the site itself. Emitted once, in the root layout. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": abs("/#person"),
        name: site.name,
        jobTitle: "Web designer and developer",
        description: site.description,
        url: abs("/"),
        knowsAbout: [
          "Web design",
          "Web development",
          "Small business websites",
          "Search engine optimisation",
          "Core Web Vitals",
          "Accessibility",
        ],
      },
      {
        "@type": "WebSite",
        "@id": abs("/#website"),
        url: abs("/"),
        name: site.title,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": abs("/#person") },
      },
      {
        // Deliberately `Service`, not `ProfessionalService`. The latter inherits
        // from LocalBusiness, where `address` is the load-bearing property that
        // makes the type eligible for local treatment at all. This is a remote
        // practice with no address, no geo and no opening hours, so the
        // LocalBusiness family would be the wrong semantic claim for zero
        // rich-result upside. Revisit only if a real base address exists.
        "@type": "Service",
        "@id": abs("/#service"),
        name: `${site.name} — website design and development`,
        description: site.description,
        url: abs("/"),
        provider: { "@id": abs("/#person") },
        areaServed: "Worldwide",
        // Service types only. These describe what is OFFERED; they are not a
        // claim that a client of that kind exists. See CONTEXT.md.
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: site.services.heading,
          itemListElement: site.services.items.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: { "@type": "Service", name: s.title, description: s.body },
          })),
        },
      },
    ],
  };
}

/** The work index as an ItemList, so the ten pages are discoverable together. */
export function workListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": abs("/work#page"),
    url: abs("/work"),
    name: site.workPage.heading,
    description: site.workPage.description,
    isPartOf: { "@id": abs("/#website") },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: abs(`/work/${p.slug}`),
        name: p.name,
      })),
    },
  };
}

/** One project. `sameAs` points at the live site, which is the actual evidence. */
export function projectJsonLd(slug: string) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;
  // The inner WebSite describes the CLIENT's live site. Without a wrapper, this
  // portfolio page had no entity representing itself, unlike /work which
  // self-describes via CollectionPage. The WebPage supplies that symmetry.
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": abs(`/work/${p.slug}#webpage`),
    url: abs(`/work/${p.slug}`),
    name: `${p.name} — ${site.name}`,
    isPartOf: { "@id": abs("/#website") },
    mainEntity: {
      "@type": "WebSite",
      "@id": abs(`/work/${p.slug}#project`),
      name: p.name,
      description: p.line,
      url: p.href,
      image: abs(p.image),
      creator: { "@id": abs("/#person") },
      // No dateCreated, no client Organization, no metrics, no testimonial:
      // projects.ts holds none of that, and inventing it is the one thing
      // this codebase will not do.
    },
  };
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

/** Metadata defaults every page merges into. */
export function pageMeta({
  title, description, path, ogTitle,
}: { title: string; description: string; path: string; ogTitle?: string }) {
  return {
    title,
    description,
    alternates: { canonical: abs(path) },
    robots: INDEXABLE
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
    openGraph: {
      type: "website" as const,
      url: abs(path),
      siteName: site.name,
      title: ogTitle ?? title,
      description,
      images: [{ url: abs(`/og?t=${encodeURIComponent(ogTitle ?? title)}`), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: ogTitle ?? title,
      description,
      images: [abs(`/og?t=${encodeURIComponent(ogTitle ?? title)}`)],
    },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Content is built from our own static data files, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
