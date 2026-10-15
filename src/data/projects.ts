// Every project below was verified live (HTTP 200) on 2026-09-08.
// Card sentences derive from each site's own meta description — see CONTEXT.md.
// To drop a project from the page, delete its object. Nothing else needs to change.

export type Project = {
  slug: string;
  name: string;
  line: string;
  tags: readonly string[];
  href: string;
  display: string;
  image: string;
  preview?: boolean;
  /** Card accent, drawn from the DESIGN.md palette. */
  accent: "petal" | "leaf" | "sky" | "apricot" | "wisteria";
};

export const projects: readonly Project[] = [
  {
    slug: "fries-b4-guys",
    name: "Fries B4 Guys",
    line: "Halal burgers, hand cut fries, Turkish kumpir and Belgian waffles in Allston. Open daily until 2 AM.",
    tags: ["Restaurant", "Menu"],
    href: "https://friesb4guys.boston",
    display: "friesb4guys.boston",
    image: "/work/fries-b4-guys.webp",
    accent: "apricot",
  },
  {
    slug: "hebron-market",
    name: "Hebron Market",
    line: "Halal butcher and Middle Eastern grocery on Tremont Street in Mission Hill.",
    tags: ["Grocery", "Butcher"],
    href: "https://hebron-market.com",
    display: "hebron-market.com",
    image: "/work/hebron-market.webp",
    accent: "leaf",
  },
  {
    slug: "hebron-order",
    name: "Hebron Market Ordering",
    line: "Order ahead for pickup, with meat cut fresh to order off the counter.",
    tags: ["Ordering", "Checkout"],
    href: "https://order.hebron-market.com",
    display: "order.hebron-market.com",
    image: "/work/hebron-order.webp",
    accent: "sky",
  },
  {
    slug: "nubian-markets",
    name: "Nubian Markets",
    line: "Halal butcher, African grocery and cafe in Roxbury's Nubian Square, celebrating African diaspora food.",
    tags: ["Grocery", "Cafe"],
    href: "https://nubianmarkets.com",
    display: "nubianmarkets.com",
    image: "/work/nubian-markets.webp",
    accent: "petal",
  },
  {
    slug: "crispy-dough-pizza",
    name: "Crispy Dough Pizzeria",
    line: "Halal pizzeria in Mission Hill. Fresh dough pizza, calzones, subs and pasta, open until 3 AM on weekends.",
    tags: ["Restaurant", "Late night"],
    href: "https://crispydoughpizza.com",
    display: "crispydoughpizza.com",
    image: "/work/crispy-dough-pizza.webp",
    accent: "wisteria",
  },
  {
    slug: "crispy-dough-shawarma",
    name: "Crispy Dough Shawarma",
    line: "Chicken shawarma cut off the spit and wrapped to order. Opening soon on Tremont Street.",
    tags: ["Restaurant", "Pre opening"],
    href: "https://crispydoughshawarma.com",
    display: "crispydoughshawarma.com",
    image: "/work/crispy-dough-shawarma.webp",
    accent: "apricot",
  },
  {
    slug: "land-of-fire",
    name: "Land of Fire",
    line: "Azerbaijani kitchen opening on Broadway in Somerville. Mangal kebabs, homemade bread, kufta soup and baklava.",
    tags: ["Restaurant", "Pre opening"],
    href: "https://landoffire-somerville.vercel.app",
    display: "landoffire-somerville.vercel.app",
    image: "/work/land-of-fire.webp",
    accent: "petal",
  },
  {
    slug: "honey-bridge",
    name: "Honey Bridge",
    line: "Restaurant marketing and consulting, with halal restaurants as the specialty.",
    tags: ["Agency", "Services"],
    href: "https://gohoneybridge.com",
    display: "gohoneybridge.com",
    image: "/work/honey-bridge.webp",
    accent: "apricot",
  },
  {
    slug: "nubian-preview",
    name: "Nubian Markets Redesign",
    line: "A redesign of the Nubian Square market, butchery and cafe site. Preview build, not yet launched by the client.",
    tags: ["Redesign", "Preview"],
    href: "https://nubian-markets-preview.vercel.app",
    display: "nubian-markets-preview.vercel.app",
    image: "/work/nubian-preview.webp",
    preview: true,
    accent: "leaf",
  },
  {
    slug: "nuba-cafe",
    name: "Nuba Cafe",
    line: "Halal bowls, salads, mezze and a coffee bar on Columbus Avenue. Preview build, not yet launched by the client.",
    tags: ["Cafe", "Preview"],
    href: "https://nuba-cafe-preview.vercel.app",
    display: "nuba-cafe-preview.vercel.app",
    image: "/work/nuba-cafe.webp",
    preview: true,
    accent: "sky",
  },
];
