/**
 * Central internal-linking map.
 *
 * Only DESTINATION_LINKS is hand-maintained. The gear -> destinations and
 * guide -> destinations maps are derived from it, so every link is guaranteed
 * to be bidirectional and can never drift out of sync.
 *
 * Add a destination here and it automatically gains inbound links from every
 * gear and guide article it references.
 */

import { DESTINATIONS, GUIDES } from "@/lib/data";
import { GEAR_GUIDE_META, type GearSlug } from "@/lib/gear-content";

export interface RelatedLink {
  href: string;
  title: string;
  blurb: string;
  kind: "destination" | "gear" | "guide";
}

interface DestLinks {
  /** Geographically or thematically adjacent destinations. */
  destinations: string[];
  /** Gear articles genuinely relevant to this trip. */
  gear: GearSlug[];
  /** Topic guides genuinely relevant to this trip. */
  guides: string[];
}

// Gear that applies to essentially any Himalayan trip.
const UNIVERSAL_GEAR: GearSlug[] = [
  "sunscreen-mountain",
  "first-aid-kits",
  "power-banks-treks",
];

// Guides that apply to any trip above ~3,000m.
const ALTITUDE_GUIDES = ["acclimatize-above-3000m", "packing-4000m"];
const CHAR_DHAM_GUIDES = [
  "best-time-char-dham",
  "char-dham-epass",
  "monsoon-routes",
];

export const DESTINATION_LINKS: Record<string, DestLinks> = {
  // ── Uttarakhand · Char Dham ──────────────────────────────────────────
  kedarnath: {
    destinations: ["badrinath", "gangotri", "yamunotri", "chopta"],
    gear: ["jackets-kedarnath", "trekking-shoes-under-5000", "rain-ponchos-char-dham", "daypack-pilgrimage", "thermals-altitude", ...UNIVERSAL_GEAR],
    guides: ["dehradun-to-kedarnath", "kedarnath-opening-date-2026", "kedarnath-budget", "atm-cash-guide", ...CHAR_DHAM_GUIDES, ...ALTITUDE_GUIDES],
  },
  badrinath: {
    destinations: ["kedarnath", "hemkund-sahib", "valley-of-flowers", "auli", "gangotri"],
    gear: ["jackets-kedarnath", "rain-ponchos-char-dham", "daypack-pilgrimage", "thermals-altitude", ...UNIVERSAL_GEAR],
    guides: ["atm-cash-guide", ...CHAR_DHAM_GUIDES, ...ALTITUDE_GUIDES],
  },
  gangotri: {
    destinations: ["yamunotri", "kedarnath", "badrinath", "har-ki-dun"],
    gear: ["jackets-kedarnath", "trekking-shoes-under-5000", "rain-ponchos-char-dham", "thermals-altitude", ...UNIVERSAL_GEAR],
    guides: [...CHAR_DHAM_GUIDES, ...ALTITUDE_GUIDES, "atm-cash-guide"],
  },
  yamunotri: {
    destinations: ["gangotri", "kedarnath", "badrinath", "har-ki-dun"],
    gear: ["trekking-shoes-under-5000", "rain-ponchos-char-dham", "daypack-pilgrimage", ...UNIVERSAL_GEAR],
    guides: [...CHAR_DHAM_GUIDES, ...ALTITUDE_GUIDES],
  },

  // ── Uttarakhand · treks & valleys ────────────────────────────────────
  chopta: {
    destinations: ["kedarnath", "badrinath", "roopkund", "auli"],
    gear: ["backpacks-chopta", "trekking-shoes-under-5000", "jackets-kedarnath", "headlamps-under-1000", ...UNIVERSAL_GEAR],
    guides: ["monsoon-routes", ...ALTITUDE_GUIDES],
  },
  "valley-of-flowers": {
    destinations: ["hemkund-sahib", "badrinath", "auli", "roopkund"],
    gear: ["rain-ponchos-char-dham", "trekking-shoes-under-5000", "backpacks-chopta", ...UNIVERSAL_GEAR],
    guides: ["monsoon-routes", "best-time-char-dham", ...ALTITUDE_GUIDES],
  },
  "hemkund-sahib": {
    destinations: ["valley-of-flowers", "badrinath", "auli"],
    gear: ["trekking-shoes-under-5000", "jackets-kedarnath", "rain-ponchos-char-dham", "thermals-altitude", "daypack-pilgrimage", ...UNIVERSAL_GEAR],
    guides: ["char-dham-epass", "monsoon-routes", ...ALTITUDE_GUIDES],
  },
  roopkund: {
    destinations: ["chopta", "auli", "har-ki-dun", "valley-of-flowers"],
    gear: ["sleeping-bags-spiti", "trekking-shoes-under-5000", "backpacks-chopta", "thermals-altitude", "headlamps-under-1000", ...UNIVERSAL_GEAR],
    guides: [...ALTITUDE_GUIDES, "monsoon-routes"],
  },
  "har-ki-dun": {
    destinations: ["yamunotri", "roopkund", "rishikesh", "gangotri"],
    gear: ["trekking-shoes-under-5000", "backpacks-chopta", "sleeping-bags-spiti", "headlamps-under-1000", ...UNIVERSAL_GEAR],
    guides: [...ALTITUDE_GUIDES, "monsoon-routes"],
  },
  auli: {
    destinations: ["badrinath", "valley-of-flowers", "chopta", "roopkund"],
    gear: ["jackets-kedarnath", "thermals-altitude", "trekking-shoes-under-5000", ...UNIVERSAL_GEAR],
    guides: [...ALTITUDE_GUIDES, "atm-cash-guide"],
  },
  rishikesh: {
    destinations: ["kedarnath", "badrinath", "har-ki-dun", "nainital"],
    gear: ["daypack-pilgrimage", "trekking-shoes-under-5000", ...UNIVERSAL_GEAR],
    guides: ["dehradun-to-kedarnath", "monsoon-routes", "best-time-char-dham"],
  },
  nainital: {
    destinations: ["rishikesh", "auli", "chopta"],
    gear: ["daypack-pilgrimage", "trekking-shoes-under-5000", ...UNIVERSAL_GEAR],
    guides: ["monsoon-routes", "atm-cash-guide"],
  },

  // ── J&K ──────────────────────────────────────────────────────────────
  "vaishno-devi": {
    destinations: ["amarnath", "dharamshala"],
    gear: ["shoes-vaishno-devi", "daypack-pilgrimage", "rain-ponchos-char-dham", ...UNIVERSAL_GEAR],
    guides: ["atm-cash-guide", "char-dham-epass"],
  },
  amarnath: {
    destinations: ["vaishno-devi", "ladakh"],
    gear: ["shoes-vaishno-devi", "daypack-pilgrimage", "thermals-altitude", "jackets-kedarnath", ...UNIVERSAL_GEAR],
    guides: [...ALTITUDE_GUIDES, "char-dham-epass"],
  },
  ladakh: {
    destinations: ["spiti", "manali", "amarnath"],
    gear: ["jackets-ladakh", "riding-gloves-ladakh", "sleeping-bags-spiti", "thermals-altitude", ...UNIVERSAL_GEAR],
    guides: ["atm-cash-guide", "char-dham-epass", ...ALTITUDE_GUIDES],
  },

  // ── Himachal ─────────────────────────────────────────────────────────
  spiti: {
    destinations: ["manali", "shimla", "kasol", "tirthan-valley", "ladakh"],
    gear: ["sleeping-bags-spiti", "riding-gloves-ladakh", "jackets-ladakh", "thermals-altitude", ...UNIVERSAL_GEAR],
    guides: ["manali-to-spiti-valley", "atm-cash-guide", "char-dham-epass", ...ALTITUDE_GUIDES],
  },
  manali: {
    destinations: ["spiti", "kasol", "tirthan-valley", "shimla", "ladakh"],
    gear: ["jackets-ladakh", "riding-gloves-ladakh", "trekking-shoes-under-5000", ...UNIVERSAL_GEAR],
    guides: ["manali-to-spiti-valley", "monsoon-routes", "atm-cash-guide"],
  },
  shimla: {
    destinations: ["manali", "spiti", "tirthan-valley", "kasol"],
    gear: ["trekking-shoes-under-5000", "daypack-pilgrimage", ...UNIVERSAL_GEAR],
    guides: ["manali-to-spiti-valley", "monsoon-routes"],
  },
  kasol: {
    destinations: ["manali", "tirthan-valley", "spiti", "dharamshala"],
    gear: ["trekking-shoes-under-5000", "backpacks-chopta", "sleeping-bags-spiti", "headlamps-under-1000", ...UNIVERSAL_GEAR],
    guides: ["monsoon-routes", "atm-cash-guide", "acclimatize-above-3000m"],
  },
  "tirthan-valley": {
    destinations: ["kasol", "manali", "shimla", "dharamshala"],
    gear: ["trekking-shoes-under-5000", "backpacks-chopta", ...UNIVERSAL_GEAR],
    guides: ["monsoon-routes", "atm-cash-guide"],
  },
  dharamshala: {
    destinations: ["kasol", "manali", "tirthan-valley", "vaishno-devi"],
    gear: ["trekking-shoes-under-5000", "backpacks-chopta", "headlamps-under-1000", ...UNIVERSAL_GEAR],
    guides: ["monsoon-routes", "atm-cash-guide"],
  },

  // ── North-East ───────────────────────────────────────────────────────
  lachung: {
    destinations: ["sandakphu"],
    gear: ["jackets-kedarnath", "thermals-altitude", ...UNIVERSAL_GEAR],
    guides: ["char-dham-epass", ...ALTITUDE_GUIDES],
  },
  sandakphu: {
    destinations: ["lachung"],
    gear: ["trekking-shoes-under-5000", "sleeping-bags-spiti", "thermals-altitude", "headlamps-under-1000", ...UNIVERSAL_GEAR],
    guides: [...ALTITUDE_GUIDES, "monsoon-routes"],
  },
};

/* ─── derived reverse maps ─────────────────────────────────────────── */

function buildReverse(key: "gear" | "guides"): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const [destSlug, links] of Object.entries(DESTINATION_LINKS)) {
    for (const target of links[key]) {
      (out[target] ||= []).push(destSlug);
    }
  }
  return out;
}

const GEAR_TO_DESTINATIONS = buildReverse("gear");
const GUIDE_TO_DESTINATIONS = buildReverse("guides");

/* ─── lookup helpers ──────────────────────────────────────────────── */

const destMeta = (slug: string) => DESTINATIONS.find((d) => d.slug === slug);
const guideMeta = (slug: string) => GUIDES.find((g) => g.slug === slug);

function destLink(slug: string): RelatedLink | null {
  const d = destMeta(slug);
  if (!d) return null;
  return { href: `/${slug}`, title: d.name, blurb: d.info, kind: "destination" };
}

function gearLink(slug: string): RelatedLink | null {
  const g = GEAR_GUIDE_META[slug as GearSlug];
  if (!g) return null;
  return { href: `/gear/${slug}`, title: g.title, blurb: g.desc, kind: "gear" };
}

function guideLink(slug: string): RelatedLink | null {
  const g = guideMeta(slug);
  if (!g) return null;
  return { href: `/guides/${slug}`, title: g.title, blurb: g.desc, kind: "guide" };
}

const clean = (arr: (RelatedLink | null)[]) =>
  arr.filter((x): x is RelatedLink => Boolean(x));

/** Links to show on a destination page. */
export function relatedForDestination(slug: string) {
  const l = DESTINATION_LINKS[slug];
  if (!l) return { destinations: [], gear: [], guides: [] };
  return {
    destinations: clean(l.destinations.map(destLink)).slice(0, 5),
    gear: clean([...new Set(l.gear)].map(gearLink)).slice(0, 6),
    guides: clean([...new Set(l.guides)].map(guideLink)).slice(0, 6),
  };
}

/** Destinations a gear article should link back to. */
export function destinationsForGear(slug: string): RelatedLink[] {
  return clean((GEAR_TO_DESTINATIONS[slug] || []).map(destLink)).slice(0, 6);
}

/** Destinations a topic guide should link back to. */
export function destinationsForGuide(slug: string): RelatedLink[] {
  return clean((GUIDE_TO_DESTINATIONS[slug] || []).map(destLink)).slice(0, 6);
}

/** Packing checklists for the destinations a gear article serves. */
export function packingListsForGear(slug: string): RelatedLink[] {
  return clean(
    (GEAR_TO_DESTINATIONS[slug] || []).map((s) => {
      const d = destMeta(s);
      return d
        ? { href: `/${s}/packing`, title: `${d.name} packing checklist`, blurb: d.info, kind: "destination" as const }
        : null;
    })
  ).slice(0, 5);
}

/** Sibling gear articles, for cross-linking within /gear. */
export function siblingGear(slug: string): RelatedLink[] {
  const mine = new Set(GEAR_TO_DESTINATIONS[slug] || []);
  const scored = Object.keys(GEAR_GUIDE_META)
    .filter((s) => s !== slug)
    .map((s) => ({
      slug: s,
      overlap: (GEAR_TO_DESTINATIONS[s] || []).filter((d) => mine.has(d)).length,
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 4);
  return clean(scored.map((x) => gearLink(x.slug)));
}

/** Sibling topic guides, for cross-linking within /guides. */
export function siblingGuides(slug: string): RelatedLink[] {
  const mine = new Set(GUIDE_TO_DESTINATIONS[slug] || []);
  const scored = GUIDES.filter((g) => g.slug !== slug)
    .map((g) => ({
      slug: g.slug,
      overlap: (GUIDE_TO_DESTINATIONS[g.slug] || []).filter((d) => mine.has(d)).length,
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 4);
  return clean(scored.map((x) => guideLink(x.slug)));
}
