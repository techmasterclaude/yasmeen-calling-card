import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { designs } from "@/data/designs";
import { abs } from "@/lib/seo";

/**
 * Deliberately minimal.
 *
 * `lastModified` is omitted rather than filled with the build timestamp. Every
 * entry previously carried an identical millisecond-precision time that
 * re-stamped on every deploy whether or not the page changed — a uniform
 * lastmod across a whole domain is a signal Google discounts, and it would have
 * been a claim the site cannot substantiate. There is no real per-page modified
 * date on record, so the honest move is to say nothing. Add it back only when
 * something actually tracks per-route content changes.
 *
 * `changeFrequency` and `priority` are omitted because Google ignores both
 * (and Bing ignores priority). They were false precision for zero benefit.
 *
 * The root URL is emitted WITHOUT a trailing slash so it is byte-identical to
 * the homepage's own canonical tag; they disagreed before.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: abs("/").replace(/\/$/, "") },
    { url: abs("/work") },
    { url: abs("/design") },
    { url: abs("/results") },
    { url: abs("/about") },
    { url: abs("/contact") },
    ...projects.map((p) => ({ url: abs(`/work/${p.slug}`) })),
    ...designs.map((d) => ({ url: abs(`/design/${d.slug}`) })),
  ];
}
