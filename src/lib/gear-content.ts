// Gear guide content registry

export interface GearProduct {
  name: string;
  price: string;
  store: string;
  storeUrl: string;
  rating: number; // out of 5
  image?: string;
  pros: string[];
  cons: string[];
  verdict: string;
  badge?: string; // "Best overall", "Budget pick", etc.
}

export interface GearGuideSection {
  heading: string;
  paragraphs: string[];
  tip?: string;
  warning?: string;
}

export interface GearGuideContent {
  intro: string;
  buyingGuide: GearGuideSection[];
  products: GearProduct[];
  conclusion: string;
}

// Slug list for all gear guides (used by generateStaticParams)
export const GEAR_SLUGS = [
  "jackets-kedarnath",
  "trekking-shoes-under-5000",
  "jackets-ladakh",
  "sleeping-bags-spiti",
  "power-banks-treks",
  "backpacks-chopta",
  "thermals-altitude",
  "riding-gloves-ladakh",
  "shoes-vaishno-devi",
  "rain-ponchos-char-dham",
  "daypack-pilgrimage",
  "headlamps-under-1000",
  "sunscreen-mountain",
  "first-aid-kits",
] as const;

export type GearSlug = (typeof GEAR_SLUGS)[number];

// Metadata for each gear guide (title, desc, category, destination)
export const GEAR_GUIDE_META: Record<GearSlug, { title: string; desc: string; category: string; dest: string; products: number }> = {
  "jackets-kedarnath": { title: "Best jackets for Kedarnath trek", desc: "Windproof vs down vs rain shell — which layers you need for 3,500m+ altitude in June", category: "Jackets", dest: "Kedarnath", products: 8 },
  "trekking-shoes-under-5000": { title: "Best trekking shoes under ₹5,000", desc: "Quechua MH500 vs Wildcraft vs Woodland — real trail tests on Uttarakhand mud and snow", category: "Shoes", dest: "All treks", products: 6 },
  "jackets-ladakh": { title: "Best jackets for Ladakh bike trip", desc: "Riding jackets that handle Khardung La wind chill and Manali–Leh dust", category: "Jackets", dest: "Ladakh", products: 7 },
  "sleeping-bags-spiti": { title: "Best sleeping bags for Spiti camping", desc: "Budget options that survive -10°C nights in Chandratal and Kaza", category: "Sleep gear", dest: "Spiti", products: 5 },
  "power-banks-treks": { title: "Best power banks for multi-day treks", desc: "20K vs 30K mAh, solar options, what lasts 5 days without a charge point", category: "Electronics", dest: "All treks", products: 6 },
  "backpacks-chopta": { title: "Best backpacks for Chopta–Tungnath", desc: "30L vs 50L — day pack vs multi-day, rain covers, hip belt essentials", category: "Backpacks", dest: "Chopta", products: 5 },
  "thermals-altitude": { title: "Best thermals for high-altitude treks", desc: "Merino vs synthetic, layering for -5°C to 15°C range, budget picks", category: "Accessories", dest: "All treks", products: 7 },
  "riding-gloves-ladakh": { title: "Best riding gloves for Ladakh", desc: "Wind, cold, grip — from Rynox to budget options for Manali–Leh", category: "Accessories", dest: "Ladakh", products: 5 },
  "shoes-vaishno-devi": { title: "Best shoes for Vaishno Devi trek", desc: "13 km uphill on paved + rough path — comfort + grip without breaking the bank", category: "Shoes", dest: "Vaishno Devi", products: 6 },
  "rain-ponchos-char-dham": { title: "Best rain ponchos for Char Dham yatra", desc: "Monsoon-proof options that pack small and dry fast between temples", category: "Accessories", dest: "Char Dham", products: 5 },
  "daypack-pilgrimage": { title: "Best daypack for pilgrimage trips", desc: "Light, anti-theft, water-resistant — carry essentials in temple queues", category: "Backpacks", dest: "All pilgrimages", products: 5 },
  "headlamps-under-1000": { title: "Best headlamps under ₹1,000", desc: "Forclaz HL100 vs Nitecore — brightness, battery life, red mode for camping", category: "Electronics", dest: "All trips", products: 5 },
  "sunscreen-mountain": { title: "Best sunscreen for mountain UV", desc: "SPF50 PA+++ options that don't feel greasy at altitude — Indian brands included", category: "Accessories", dest: "All trips", products: 5 },
  "first-aid-kits": { title: "Best first aid kits for travel", desc: "Pre-built vs DIY, Diamox, ORS, altitude essentials — what pharmacies miss", category: "Accessories", dest: "All trips", products: 6 },
};

// Actual content — empty for now, fill as articles are written
export const gearGuideContent: Partial<Record<GearSlug, GearGuideContent>> = {
  // Content will be added here as gear guides are written.
};
