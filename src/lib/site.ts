/**
 * Single place to fill in real business details.
 * Empty strings stay hidden in the UI — never invent phone, email, license, or reviews.
 */
export const site = {
  name: "Al's Painting",
  legalName: "Al Ruelas Painting",
  tagline: "Residential interior and exterior painting in Albany, Oregon.",
  shortLocation: "Albany, Oregon",
  description:
    "Al's Painting is a straightforward residential painting company for Albany homes — rooms, exteriors, trim, and the prep that makes the finish last.",

  /** tel: link. Leave blank until the real number is confirmed. */
  phone: "",
  /** Display form of the phone. */
  phoneLabel: "",
  email: "",
  addressLine: "",
  city: "Albany",
  region: "OR",
  postalCode: "",
  hours: "",
  licenseLabel: "",
  licenseNumber: "",

  serviceArea: {
    primary: ["Albany"],
    nearbyNote:
      "Homes in Albany first. Nearby Willamette Valley towns by request — add the list here when the service radius is confirmed.",
    nearby: [] as string[],
  },

  /**
   * Set to a Formspree / Getform / Netlify Forms endpoint to deliver estimate
   * requests. Until then, the form validates and stores a local confirmation only.
   */
  estimateEndpoint: "",
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export type ServiceSlug =
  | "interior-painting"
  | "exterior-painting"
  | "prep-and-repair"
  | "trim-and-color";

export type Service = {
  slug: ServiceSlug;
  title: string;
  short: string;
  summary: string;
  image: string;
  imageAlt: string;
  includes: string[];
  prep: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "interior-painting",
    title: "Interior painting",
    short: "Rooms you live in every day.",
    summary:
      "Walls, ceilings, trim, and doors — painted cleanly so you can stay in the house while the work happens.",
    image: "/images/interior-living.jpg",
    imageAlt: "Living room with a sage accent wall, white trim, and oak floors",
    includes: [
      "Walls, ceilings, doors, and trim",
      "Accent walls and color changes",
      "Floor, furniture, and fixture protection",
      "Caulk, fill, and prime as needed",
      "Final walkthrough and touch-ups",
    ],
    prep: "We'll tell you which rooms to clear. We cover floors, move what we can, and keep walkways open.",
    benefits: [
      "Sharp cut lines on trim and ceilings",
      "Low-odor products in lived-in rooms when possible",
      "A schedule you can plan around",
    ],
  },
  {
    slug: "exterior-painting",
    title: "Exterior painting",
    short: "Siding, trim, and front doors that hold up.",
    summary:
      "Oregon weather finds weak spots. We wash, scrape, sand, and prime so the topcoat has something to hold onto.",
    image: "/images/exterior-ranch.jpg",
    imageAlt: "Ranch house with freshly painted sage siding and white trim",
    includes: [
      "Siding, fascia, soffits, and trim",
      "Windows, doors, and garage doors as scoped",
      "Washing, scraping, sanding, and caulking",
      "Prime bare wood and repaired areas",
      "Color on body, trim, and the front door",
    ],
    prep: "Exterior work waits for a dry window. We don't trap moisture under new paint just to keep a calendar date.",
    benefits: [
      "Prep that matches the actual surface, not a photo guess",
      "Colors that fit Craftsman, ranch, and newer Albany builds",
      "A written scope before we start",
    ],
  },
  {
    slug: "prep-and-repair",
    title: "Prep & surface repair",
    short: "The work you don't see — until it's skipped.",
    summary:
      "Scraping, sanding, caulking, putty, and prime. We fix the little things that show through cheap paint jobs.",
    image: "/images/detail-trim.jpg",
    imageAlt: "Close-up of cream siding meeting sage window trim with a clean paint line",
    includes: [
      "Scraping failed coatings",
      "Sanding and feathering edges",
      "Caulk at trim and joints",
      "Fill nail holes and small defects",
      "Spot prime or full prime as needed",
    ],
    prep: "We'll flag larger carpentry or moisture issues instead of painting over them.",
    benefits: [
      "A finish that lasts through wet winters",
      "Honest talk if the surface isn't ready",
      "No rushing the unglamorous steps",
    ],
  },
  {
    slug: "trim-and-color",
    title: "Trim, doors & color",
    short: "The details people notice first.",
    summary:
      "Doors, casing, and a color plan for body, trim, and the front door — so the house looks settled, not trendy.",
    image: "/images/interior-kitchen.jpg",
    imageAlt: "Kitchen with white cabinets, wood counters, and a garden window",
    includes: [
      "Interior and exterior trim",
      "Doors and window casing",
      "Help choosing body, trim, and door colors",
      "Sample patches on the actual wall or siding",
    ],
    prep: "Bring photos, swatches, or a neighbor house you like. We'll talk through what will work on your light and siding.",
    benefits: [
      "Colors that fit the neighborhood",
      "Crisp lines on the pieces you touch every day",
      "Fewer second-guesses after the first coat",
    ],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Request an estimate",
    body: "Tell us the rooms or sides of the house, timing, and anything peeling or water-stained.",
  },
  {
    n: "02",
    title: "Walk the job",
    body: "We look at the surface in person so the number matches the prep, not a guess from a photo.",
  },
  {
    n: "03",
    title: "Prepare the space",
    body: "Protect floors and landscaping. Scrape, sand, caulk, and prime before any finish coat.",
  },
  {
    n: "04",
    title: "Paint",
    body: "Clean application, kept on the agreed schedule. You'll know which rooms or elevations are in play each day.",
  },
  {
    n: "05",
    title: "Walkthrough",
    body: "We review the finish together and handle touch-ups before we pack up.",
  },
] as const;

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: "Interior" | "Exterior" | "Detail";
  placeholder: boolean;
};

/** Sample photography until real job photos are added. Do not caption these as completed Al's jobs. */
export const gallery: GalleryItem[] = [
  {
    src: "/images/hero-craftsman.jpg",
    alt: "Craftsman bungalow with cream siding, sage trim, and a terracotta door",
    caption: "Sample — Craftsman exterior",
    category: "Exterior",
    placeholder: true,
  },
  {
    src: "/images/interior-living.jpg",
    alt: "Living room with fireplace, sage accent wall, and white millwork",
    caption: "Sample — Living room",
    category: "Interior",
    placeholder: true,
  },
  {
    src: "/images/interior-bedroom.jpg",
    alt: "Bedroom with a clay accent wall, linen bedding, and white trim",
    caption: "Sample — Bedroom",
    category: "Interior",
    placeholder: true,
  },
  {
    src: "/images/interior-kitchen.jpg",
    alt: "Bright kitchen with white cabinets and wood counters",
    caption: "Sample — Kitchen",
    category: "Interior",
    placeholder: true,
  },
  {
    src: "/images/exterior-ranch.jpg",
    alt: "Mid-century ranch with sage siding and white trim",
    caption: "Sample — Ranch exterior",
    category: "Exterior",
    placeholder: true,
  },
  {
    src: "/images/detail-trim.jpg",
    alt: "Painted clapboard meeting window trim",
    caption: "Sample — Trim detail",
    category: "Detail",
    placeholder: true,
  },
];

export function hasPhone() {
  return Boolean(site.phone);
}

export function hasEmail() {
  return Boolean(site.email);
}

export function telHref() {
  return site.phone ? `tel:${site.phone}` : undefined;
}

export function mailHref() {
  return site.email ? `mailto:${site.email}` : undefined;
}
