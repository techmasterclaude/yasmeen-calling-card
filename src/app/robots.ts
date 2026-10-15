import type { MetadataRoute } from "next";
import { INDEXABLE } from "@/data/site";
import { abs } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return INDEXABLE
    ? { rules: [{ userAgent: "*", allow: "/" }], sitemap: abs("/sitemap.xml"), host: abs("/") }
    : { rules: [{ userAgent: "*", disallow: "/" }] };
}
