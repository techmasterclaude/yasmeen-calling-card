// Copy source: COPY.md. Facts source: CONTEXT.md.
// Do not add a claim here that is not in one of those two files.

/**
 * Single switch controlling whether this site may be indexed.
 *
 * Held FALSE deliberately. Two reasons, both in CONTEXT.md:
 *   1. The contact address is still a placeholder.
 *   2. The page links to two client redesigns the clients have not launched,
 *      which are themselves noindex. Letting search engines find them here
 *      would undo that.
 * Flip to true only once both are resolved.
 */
export const INDEXABLE = false;

export const site = {
  name: "Yasmeen Hasan",
  role: "Web design and development",
  title: "Yasmeen Hasan · Website design and development for small businesses",
  description:
    "I design and build fast, good looking websites for small businesses. Ten live sites you can open and judge for yourself, no case study required.",
  tagline: "Websites for people who built something worth showing",

  hero: {
    eyebrow: "Website design and development",
    heading: "Yasmeen Hasan",
    // Broadened 2026-09-08 from "restaurants, markets and small food businesses"
    // to any small business. This describes what she OFFERS. It is not a claim
    // about what she has already built, which the work section states plainly.
    sub: "I design and build websites for small businesses. Shops, studios, trades, clinics, kitchens. Every site below is live, so you can judge the work instead of reading about it.",
    primary: { label: "See the work", href: "#work" },
    secondary: { label: "Get in touch", href: "#contact" },
  },

  work: {
    heading: "Ten sites you can open",
    intro:
      "Eight are launched and public. Two are redesigns the client has not shipped yet, labelled as previews. Most of this work has been food: restaurants, butchers, grocery markets, plus one marketing agency.",
  },

  services: {
    heading: "What I build",
    intro: "Whatever the business, the job is usually one of these four.",
    items: [
      {
        title: "A first real website",
        body: "For a business running on a social page, a listing or nothing at all. Pages that say what you sell, where you are and how to buy.",
      },
      {
        title: "A rebuild of something dated",
        body: "Same business, current site. Faster, readable on a phone, and structured so search engines can tell what the page is about.",
      },
      {
        title: "Ordering and booking that works",
        body: "Menus, order-ahead, appointment links and checkout handoffs, wired to whatever system you already pay for.",
      },
      {
        title: "Search and speed repair",
        body: "Titles, structured data, image weight and Core Web Vitals on a site that already exists but is not being found.",
      },
      {
        title: "Logos, identity and printed pieces",
        body: "A mark that holds at sign size and at favicon size, the lockups around it, and the cards and packaging it has to sit on. Drawn as vector, supplied print ready.",
      },
    ],
  },

  process: {
    heading: "How I work",
    items: [
      {
        title: "I start with what the place actually sells",
        body: "Menus, hours, address and how to order come first. Decoration comes after the useful part works.",
      },
      {
        title: "I build it to load on a phone in a parking lot",
        body: "Static pages, compressed images, no heavy frameworks bolted on for decoration.",
      },
      {
        title: "I hand over something you can run",
        body: "Plain structure, clear file names and a written explanation of how to change your own hours.",
      },
    ],
  },

  workCta: {
    heading: "Want one of these for your business?",
    body: "Tell me what you sell and what you want visitors to do. I will tell you what I would build.",
    button: "Get in touch",
  },

  contact: {
    heading: "Let's build yours",
    body: "Tell me what you sell, where you are and what you want people to do when they land. I will tell you what I would build and what it takes.",
    button: "Email me",
    email: "yas.logo3@gmail.com",
  },

  nav: [
    { label: "Work", href: "/work" },
    { label: "Design", href: "/design" },
    { label: "Results", href: "/results" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  workPage: {
    title: "Work",
    description:
      "Ten small business websites: restaurants, halal butchers, grocery markets, an ordering app and a marketing agency. Eight are launched, two are labelled previews. Open any of them.",
    heading: "All ten sites",
    intro:
      "Eight of these are launched and public; two are marked as previews the client has not shipped. Filter by type, or open any card to see the real thing.",
    // The offer covers trades, clinics and studios, but no project in that shape
    // exists yet. Rather than leave a visitor to notice the gap alone, name it
    // and say what transfers. Claiming the experience would be a lie; leaving it
    // unsaid just moves the doubt somewhere I cannot answer it.
    transfer:
      "No trade or clinic in the list yet. The work moves across anyway: a menu becomes a service list, order-ahead becomes appointment booking, and loading fast on a phone outside the shop does not change by industry.",
    filters: ["All", "Restaurant", "Grocery", "Cafe", "Ordering", "Agency", "Preview"],
  },

  resultsPage: {
    title: "Results",
    description:
      "Measured search and speed results for real client sites: Search Console figures compared against the previous quarter, and Lighthouse scores you can re-run yourself.",
    heading: "The numbers, and where they came from",
    // The rest of the site refuses to print numbers because nothing backed them.
    // This page prints numbers precisely because something does, and it says
    // what, when and with which tool for every one of them. See src/data/evidence.ts.
    intro:
      "Anyone can say they know how to do this. These are measurements, taken on a stated date with a named tool, against sites you can open. Where a number is bad, it is here too.",
    caseHeading: "Three clients, in detail",
    speedHeading: "Speed and SEO, every live site",
    honestlyLabel: "Honestly",
    beforeLabel: "Before",
    afterLabel: "After",
    verifyLabel: "Re-run this audit",
    sourceLabel: "Source",
  },

  designPage: {
    title: "Design",
    description:
      "Logos, identity systems and printed pieces drawn for small food businesses: a stamp mark for an Azerbaijani kitchen, production artwork for a pizzeria, shawarma identity routes and a QR table card.",
    heading: "Logos, identity and print",
    // A website can be checked by opening it. Design work cannot, so this page
    // has to be explicit about which pieces a client actually adopted. See the
    // status field on every project in src/data/designs.ts.
    intro:
      "Marks, lockups and printed pieces. Unlike the websites, you cannot click these to check them, so each one says plainly whether the business is using it or whether it stayed a concept.",
    statusLabel: { "In use": "In use", Concept: "Concept" },
    back: "All design work",
    piecesHeading: "The pieces",
    noteHeading: "Where it stands",
  },

  projectPage: {
    live: "Open the live site",
    back: "All work",
    prev: "Previous",
    next: "Next",
    what: "What it is",
    status: { live: "Live", preview: "Preview, not yet launched by the client" },
  },

  aboutPage: {
    title: "About",
    description:
      "How I work, what I build, and why every claim on this site is a link to a live page rather than a number.",
    heading: "About",
    // Every line here is either the process copy already approved in COPY.md or a
    // statement about THIS portfolio. There is no biography because no
    // biographical facts are on record. See CONTEXT.md.
    lead: "I design and build websites for small businesses of any kind. This page is how I work, in three sentences, and what you are looking at when you open one of my sites.",
    honesty: {
      heading: "What is and is not on this site",
      body: "Every site in my work section is live and public, so you can judge it yourself. I have not put numbers, reviews or client quotes here, because I would rather you open the sites than take my word for anything.",
    },
    garden: {
      heading: "Why a garden",
      body: "Most small businesses are somebody's actual life, not a product line. A page for them should feel warm and alive rather than like a dashboard. Every leaf and butterfly here was drawn for this site, and every one of them is out of the way of anything you might want to click.",
    },
  },

  contactPage: {
    title: "Contact",
    description:
      "Tell me what you sell, where you are and what you want visitors to do. I will tell you what I would build and what it takes.",
    heading: "Get in touch",
    lead: "Tell me what you sell, where you are and what you want people to do when they land. I will tell you what I would build and what it takes.",
    form: {
      name: "Your name",
      business: "Your business",
      message: "What you need",
      placeholder: "Menu, hours, ordering, a fresh look, or a site that does not exist yet.",
      submit: "Open in my email app",
      note: "This opens a pre-filled email in your own mail app. Nothing is sent from this page.",
    },
  },

  footer: {
    note: "Built with Next.js. Illustrations drawn for this page.",
    columns: {
      explore: "Explore",
      elsewhere: "Elsewhere",
    },
  },
} as const;
