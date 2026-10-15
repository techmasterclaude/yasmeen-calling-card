// Measured evidence. Nothing in this file is an estimate or a recollection.
//
// The rest of this portfolio deliberately refuses to print numbers, because for
// most of its life there was nothing on record to back them. That ban still
// holds for adjectives and outcomes. What changed is that these particular
// numbers were actually measured, on a stated date, with a named tool, against
// URLs anyone can re-check:
//
//   * The speed and SEO scores come from Lighthouse 12.8.2 run locally against
//     the live sites on 2026-09-09, mobile form factor. Every row carries a
//     PageSpeed Insights link so a visitor can re-run it rather than trust it.
//   * The search numbers come from Google Search Console, comparing the last
//     three months against the previous three, read on 2026-09-09.
//
// Two rules this file exists to enforce, both asserted in the tests:
//   1. A weak number is shown, not hidden. If it were only ever the good rows,
//      the table would be marketing again.
//   2. A "before" must be a real before. Two client properties compare against
//      zero, not because traffic was zero but because the Search Console
//      property did not exist yet, and Search Console does not backfill. Those
//      cannot carry a growth claim and this file does not let them try.

export const MEASURED_ON = "2026-09-09";

export type SiteScore = {
  /** Matches a slug in projects.ts. */
  slug: string;
  name: string;
  url: string;
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  lcp: string;
  cls: string;
  /** Required whenever a score is below 90, so a weak number is explained rather than buried. */
  note?: string;
};

export const lighthouse = {
  tool: "Lighthouse 12.8.2",
  device: "Mobile, median of 3 runs",
  measuredOn: MEASURED_ON,
  intro:
    "Every site below was measured three times on the same day, on the same machine, on a simulated mobile connection, and the figure shown is the median of the three. The link on each row runs the same audit again on Google's servers, so none of this has to be taken on trust.",
  caveat:
    "Three runs rather than one because a single run is not trustworthy: measuring these sites once produced a 28 point swing on a site whose code had not changed. These are still lab numbers and they move with the network, which is why the re-run link is here and why your own result will not match this table exactly.",
  sites: [
    {
      slug: "crispy-dough-shawarma",
      name: "Crispy Dough Shawarma",
      url: "https://crispydoughshawarma.com",
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 66,
      lcp: "1.7 s",
      cls: "0",
      note: "The SEO score is 66 for one reason: the site is deliberately blocked from search until the shop opens. That is a switch, not a defect, and it flips on opening day.",
    },
    {
      slug: "land-of-fire",
      name: "Land of Fire",
      url: "https://landoffire-somerville.vercel.app",
      performance: 99,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      lcp: "2.2 s",
      cls: "0",
    },
    {
      slug: "hebron-order",
      name: "Hebron Market Ordering",
      url: "https://order.hebron-market.com",
      performance: 96,
      accessibility: 100,
      bestPractices: 100,
      seo: 66,
      lcp: "2.7 s",
      cls: "0",
      note: "Also blocked from indexing on purpose. This is the page an ad points at, so it should not compete in search with the main site.",
    },
    {
      slug: "honey-bridge",
      name: "Honey Bridge",
      url: "https://gohoneybridge.com",
      performance: 96,
      accessibility: 100,
      bestPractices: 96,
      seo: 100,
      lcp: "2.7 s",
      cls: "0",
    },
    {
      slug: "crispy-dough-pizza",
      name: "Crispy Dough Pizzeria",
      url: "https://crispydoughpizza.com",
      performance: 95,
      accessibility: 94,
      bestPractices: 100,
      seo: 100,
      lcp: "2.9 s",
      cls: "0.013",
    },
    {
      slug: "hebron-market",
      name: "Hebron Market",
      url: "https://hebron-market.com",
      performance: 88,
      accessibility: 96,
      bestPractices: 96,
      seo: 92,
      lcp: "3.2 s",
      cls: "0.085",
      note: "The slowest of the ones I maintain, and the missing SEO points are a robots.txt Cloudflare injects, carrying a Content-Signal line that tells AI crawlers not to train on the client's content. Lighthouse marks that line invalid because it does not know the standard yet. I would rather keep the protection than trade it for eight points. A rebuild of this site is built and waiting on the client.",
    },
    {
      slug: "fries-b4-guys",
      name: "Fries B4 Guys",
      url: "https://friesb4guys.boston",
      performance: 78,
      accessibility: 99,
      bestPractices: 100,
      seo: 100,
      lcp: "4.9 s",
      cls: "0",
      note: "The one I am least happy about. Cutting the font payload from 124 KB to 49 KB moved largest paint from 5.3 to 4.9 seconds, which is progress and not enough. The remaining weight is below-the-fold photography, and it is the next thing on this site.",
    },
  ] satisfies readonly SiteScore[],
} as const;

export type Metric = {
  label: string;
  before: string;
  after: string;
  /** True when a bigger number is the better outcome. Drives nothing visual except the arrow. */
  up: boolean;
};

export type CaseStudy = {
  slug: string;
  /**
   * What kind of case study this is. Two of these are growth stories and one is
   * explicitly not, so the difference is labelled rather than left for a reader
   * to infer from the prose.
   */
  kind: string;
  /** Matches a slug in projects.ts, so the case study can link to the site. */
  project: string;
  client: string;
  title: string;
  /** One sentence, what this case study is about. */
  line: string;
  /** Where the numbers came from and over what window. */
  source: string;
  metrics: readonly Metric[];
  body: readonly string[];
  /** The part that is not flattering. Required: every case study must carry one. */
  honestly: string;
  accent: "petal" | "leaf" | "sky" | "apricot" | "wisteria";
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "fries-b4-guys-blog",
    kind: "Blog and content",
    project: "fries-b4-guys",
    client: "Fries B4 Guys",
    title: "A blog that brings in people who have never heard of the place",
    line: "Search traffic roughly doubled and impressions quadrupled, and the growth came from people searching for food, not for the restaurant by name.",
    source:
      "Google Search Console, last 3 months against the previous 3 months, read on 2026-09-09.",
    metrics: [
      { label: "Clicks from Google", before: "1,050", after: "2,240", up: true },
      { label: "Times shown in results", before: "13,400", after: "54,500", up: true },
      { label: "Distinct searches it appears for", before: "", after: "1,596", up: true },
    ],
    body: [
      "A restaurant that only ranks for its own name is only reaching people who already know it exists. The whole point of writing anything is to turn up for the search someone makes before they have picked a place.",
      "That is what moved. Searches for food rather than for the brand grew across the board: food near me went from 13 clicks to 35, burgers near me from 6 to 19, burger near me from 3 to 16. Those are strangers.",
      "The blog posts are doing that work. Best halal burger in Boston went from nothing to 2,674 appearances in results, fully halal restaurant Boston from nothing to 1,977, and the kumpir explainer from 334 to 2,696. None of these existed as pages before.",
    ],
    honestly:
      "Two numbers went the wrong way. Click-through rate fell from 7.8 percent to 4.1 percent and average position slipped from 7.0 to 7.3. That is what normally happens when a site starts appearing for four times as many searches: it now shows up for plenty of things it ranks mid-page for, which drags both averages down while the actual number of visitors goes up. It is worth watching, not panicking about. There is also a real fault to fix, which is that each post is reachable at two different addresses, so the two copies compete with each other.",
    accent: "apricot",
  },
  {
    slug: "hebron-market-search",
    kind: "Local search",
    project: "hebron-market",
    client: "Hebron Market",
    title: "Twice the search traffic, from pages that were already there",
    line: "Clicks and impressions both roughly doubled, and click-through rate went up rather than down, which is the harder thing to do.",
    source:
      "Google Search Console, last 3 months against the previous 3 months, read on 2026-09-09.",
    metrics: [
      { label: "Clicks from Google", before: "187", after: "400", up: true },
      { label: "Times shown in results", before: "7,910", after: "15,000", up: true },
      { label: "Click-through rate", before: "2.4%", after: "2.7%", up: true },
    ],
    body: [
      "This is a butcher and grocery on Tremont Street, and almost everyone who finds it is nearby and looking for something specific. So the work was not writing more, it was making the pages that already existed answer the question properly: what this shop is, where it is, when it is open, and what it actually sells.",
      "The traffic more than doubled off the pages that were already published. The homepage went from 172 clicks to 365, and the about page, which is where the address and the hours live, went from 8 to 21.",
      "Click-through rate rising at the same time as impressions is the part worth pointing at. Being shown more often usually drags the rate down, because the extra appearances are for looser searches. Here more people saw it and a higher share of them clicked.",
    ],
    honestly:
      "The blog on this site has produced nothing: zero clicks in three months, against 96 appearances in search. Everything above came from the main pages, not from writing posts. Average position also slipped slightly, from 7.9 to 8.5. And the site itself is the slowest of the ones I maintain, which is why a rebuild is already built and sitting with the client.",
    accent: "leaf",
  },
  {
    slug: "nubian-markets-rebuild",
    kind: "The case for a rebuild",
    project: "nubian-preview",
    client: "Nubian Markets",
    title: "Plenty of demand, arriving at a thirteen second page",
    line: "The search interest is already there. What it lands on is a page that takes thirteen seconds to show its main content on a phone.",
    source:
      "Search Console figures cover 3 months to 2026-09-09. The speed figures are Lighthouse 12.8.2, mobile, run on 2026-09-09.",
    metrics: [
      { label: "Clicks from Google, 3 months", before: "", after: "3,095", up: true },
      { label: "Times shown in results", before: "", after: "71,800", up: true },
      { label: "Largest content paint, mobile", before: "12.9 s", after: "not yet live", up: false },
    ],
    body: [
      "This one is not a before and after, and it would be easy to dress it up as one. It is not, for a reason worth being straight about: the Search Console property was only created in June, and Search Console does not fill in history from before a property exists. Any comparison would be measuring my paperwork, not the shop's traffic.",
      "What the numbers do show is demand. In three months the site was clicked 3,095 times and appeared in results 71,800 times. People are looking for this place and finding it.",
      "The problem is what they land on. The current site scores 60 for performance on mobile and takes 12.9 seconds to paint its main content, which is long past the point where most people give up. A replacement is built, measured and ready. It has not launched, because that is the client's decision and not mine.",
    ],
    honestly:
      "There is no proof here that I improved anything for this client, because the evidence does not exist yet. The rebuild is finished and unlaunched, so the only honest claim is about the state of the current site and the readiness of the new one.",
    accent: "sky",
  },
];

/** Google's own re-run link for a URL. The point is that nobody has to trust the table. */
export const pageSpeedLink = (url: string) =>
  `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`;
