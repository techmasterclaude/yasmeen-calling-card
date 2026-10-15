// Identity and print work, kept separate from `projects` because none of it is
// a website and none of it has a URL to open.
//
// EVERY MARK BELOW COMES FROM THAT CLIENT'S BRAND STYLE GUIDE, NOT FROM THE
// ASSET FOLDER. The folders hold every exploration ever drawn, and picking from
// them the first time produced a set that named the wrong file as the die and
// showed a client's own pre-existing logo as our production artwork. The guides
// name which mark is approved, which are alternates, and which decisions the
// client has not made yet, so the guides are the authority here.
//
// The websites can be checked by clicking them, which is the whole argument of
// this portfolio. Design work cannot, so the honesty burden moves onto the
// status line: every project says whether it is in use or still a concept, and
// src/__tests__/designs.test.ts asserts that it says so.

export type DesignPiece = {
  /** File under /public/design. */
  src: string;
  alt: string;
  caption: string;
};

export type DesignProject = {
  slug: string;
  name: string;
  /** The business the work was drawn for. */
  client: string;
  kind: "Identity" | "Print";
  /** What the piece is, in one sentence. */
  line: string;
  /**
   * Whether the client is actually using it. "In use" requires evidence that
   * can be checked on this machine; everything else is "Concept".
   */
  status: "In use" | "Concept";
  /** Why the status reads the way it does. Shown on the project page. */
  statusNote: string;
  tags: readonly string[];
  cover: string;
  pieces: readonly DesignPiece[];
  accent: "petal" | "leaf" | "sky" | "apricot" | "wisteria";
};

export const designs: readonly DesignProject[] = [
  {
    slug: "land-of-fire-identity",
    name: "Land of Fire, three logo styles",
    client: "Land of Fire",
    kind: "Identity",
    line: "Three ways to carry the name of an Azerbaijani kitchen, built from the same three materials: the flame, the carpet border, and one ink.",
    status: "In use",
    statusNote:
      "The stamp beside the name is the header lockup on the live site, so this identity is running. The guide presents all three styles because the choice of which one goes over the door is the client's, and it sits alongside a choice of ground.",
    tags: ["Logo", "Identity", "Wordmark"],
    cover: "/design/lof-damga.webp",
    accent: "apricot",
    pieces: [
      {
        src: "/design/lof-panel.webp",
        alt: "The words Land of Fire in Roman capitals between two bands of diamonds",
        caption:
          "Style one, the inscription panel. Marcellus capitals, the letterform of an inscription cut in stone, held inside the gyul band that borders every Azerbaijani carpet.",
      },
      {
        src: "/design/lof-panel-stamp.webp",
        alt: "The inscription panel with a small square flame stamp set inside the border",
        caption: "The panel with the stamp set into it. The full formal lockup, for a menu cover or a sign over a door.",
      },
      {
        src: "/design/lof-wordmark.webp",
        alt: "Land of Fire set in wide spaced Roman capitals with no border",
        caption: "The type released from its bands, for spaces too small or too plain to carry the panel.",
      },
      {
        src: "/design/lof-flame-band.webp",
        alt: "A symmetric votive flame standing on a strip of woven carpet border",
        caption:
          "Style two, the flame on the band. Read bottom to top the mark says the name itself: land, then fire. The flame is the one that burns at the Ateshgah.",
      },
      {
        src: "/design/lof-flame.webp",
        alt: "The votive flame drawn alone with a tall centre tongue and two pairs of shoulders",
        caption: "The flame alone, for the smallest spaces, where even the band would clutter.",
      },
      {
        src: "/design/lof-damga.webp",
        alt: "A solid orange block with a flame shape cut out of it, edges slightly hand irregular",
        caption:
          "Style three, the damga stamp. A damga is the carved woodblock that prints a kelaghayi silk scarf. The flame is never printed: it is the ground showing through, so whatever the mark sits on becomes the fire.",
      },
      {
        src: "/design/lof-lockup.webp",
        alt: "The flame stamp set to the left of the words Land of Fire",
        caption: "The stamp beside the name. This is the working header lockup, and it is what the live site runs.",
      },
      {
        src: "/design/lof-stacked.webp",
        alt: "The flame stamp above the words Land of Fire",
        caption: "Stacked, for square spaces: packaging faces, a tote, a social avatar.",
      },
    ],
  },
  {
    slug: "crispy-dough-pizzeria",
    name: "Crispy Dough, the disc and its alternates",
    client: "Crispy Dough Pizzeria",
    kind: "Identity",
    line: "The pizzeria already had a logo and asked that the brand match it, so the book redraws what the shop owns as real artwork and names every piece around it.",
    status: "In use",
    statusNote:
      "The disc is the approved mark, and it is the client's own logo redrawn as vector rather than a new mark. The cutter, the peel and the die were drawn as alternates and set aside when the client kept the disc. They are shown as what they are: finished, available, and not the logo.",
    tags: ["Logo", "Print", "Packaging"],
    cover: "/design/cd-disc.webp",
    accent: "wisteria",
    pieces: [
      {
        src: "/design/cd-disc.webp",
        alt: "A gold C and D on a maroon disc with a slice escaping the rim and the word pizzeria below",
        caption:
          "The disc, the approved mark. A maroon disc set on a gold one so a rim of crust shows past it. The escaping slice is what stops it reading as a certification seal, which matters because a real halal roundel already sits on the shop door.",
      },
      {
        src: "/design/cd-box-cut.webp",
        alt: "The same disc mark with the word pizzeria removed",
        caption:
          "The box cut, descriptor removed. Pizzeria is the thinnest ink in the mark, so dropping it buys a size step and a half.",
      },
      {
        src: "/design/cd-die.webp",
        alt: "A hand drawn circular die with Crispy Dough Pizzeria inside it and a wedge set outside the rim",
        caption:
          "The die, an alternate. A mark pressed into dough rather than printed on top of it. The rim breathes on two sine terms that never line up, so no two arcs repeat, and the file regenerates identically every time.",
      },
      {
        src: "/design/cd-cutter.webp",
        alt: "A faceted pizza wheel above the words Crispy Dough Pizzeria",
        caption:
          "The cutter, an alternate. The wheel is faceted by the same chord rule that builds the word, so the mark and the type come from one construction rather than two.",
      },
      {
        src: "/design/cd-peel.webp",
        alt: "A baker's peel carrying a pizza above the words Crispy Dough Pizzeria",
        caption:
          "The peel, an alternate. Its six pepperoni are held 72 degrees apart by a step in the build rather than by hand, because that alignment was lost once already.",
      },
    ],
  },
  {
    slug: "crispy-dough-shawarma-logos",
    name: "Crispy Dough Shawarma, two logos",
    client: "Crispy Dough Shawarma",
    kind: "Identity",
    line: "Two marks for a shawarma shop, drawn on the sister pizzeria's colours so the shops read as family, with the choice between them left to the owner.",
    status: "Concept",
    statusNote:
      "The book ends by asking which of the two goes on the sign. That decision is still open, and the shop's site currently runs the pizzeria's mark, so neither is over the door yet.",
    tags: ["Logo", "Identity", "Halal"],
    cover: "/design/cds-wrap.webp",
    accent: "petal",
    pieces: [
      {
        src: "/design/cds-wrap.webp",
        alt: "Two standing shawarma wraps cut open with sesame showing, above the shop name",
        caption:
          "Option one, the wrap. Two wraps standing, cut open, sesame showing in the bread. It says what the shop sells before anyone reads a word, and it is the one that carries halal in its own bar.",
      },
      {
        src: "/design/cds-spit.webp",
        alt: "A shawarma spit with a knife beside it mid slice and two shavings coming off",
        caption:
          "Option two, the spit. The edge of the meat is uneven on purpose, which is what makes it read as meat rather than as a shape. The knife stays white in every cut, because it is the one piece that sits over two colours at once.",
      },
    ],
  },
  {
    slug: "fries-b4-guys-bench-card",
    name: "Fries B4 Guys table card",
    client: "Fries B4 Guys",
    kind: "Print",
    line: "A table card that puts the menu on the diner's own phone, with a second code for leaving a review, laid out three ways for print.",
    status: "Concept",
    statusNote:
      "Three layouts were prepared print ready at 4x6 and 6x4. Whether the shop has run them is not something this page can confirm, so it is not claimed.",
    tags: ["Print", "Layout", "QR"],
    cover: "/design/fbg-postcard.webp",
    accent: "leaf",
    pieces: [
      {
        src: "/design/fbg-bench-card.webp",
        alt: "Portrait table card with the Fries B4 Guys logo, food photos and two QR codes",
        caption: "Portrait 4x6. Menu code up top where a seated diner looks first, review code underneath.",
      },
      {
        src: "/design/fbg-picturebox.webp",
        alt: "Landscape card with a photograph filling the left half and two QR codes on the right",
        caption: "Landscape with the food carrying the left half, so the card works face up on a table.",
      },
      {
        src: "/design/fbg-postcard.webp",
        alt: "Landscape postcard layout with the logo, food diamonds and two QR codes",
        caption: "Postcard cut. The same two codes, spaced so a thumb cannot cover both at once.",
      },
    ],
  },
];
