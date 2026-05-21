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
  heroImage?: { src: string; alt: string };
  buyingGuide: GearGuideSection[];
  products: GearProduct[];
  conclusion: string;
  sectionImages?: { afterIntro?: { src: string; alt: string; caption?: string }; afterBuyingGuide?: { src: string; alt: string; caption?: string }; afterProducts?: { src: string; alt: string; caption?: string } };
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

// ═══ TREKKING SHOES UNDER 5000 ═══
gearGuideContent["trekking-shoes-under-5000"] = {
  intro: "The section of the Kedarnath trail between Jungle Chatti and Bhimbali is paved with wet granite slabs during the monsoon. In July 2024, I watched a man in flat-soled sneakers go down hard on one of those slabs, catching himself on his palms, pack lurching sideways. He was fine. His dignity less so. I have had my own version of that moment - wearing a pair of Wildcraft shoes from two seasons ago, the outsole had gone smooth enough that I was skating, not trekking, on the descent from Tungnath down to Chopta. I finally figured out what I should have bought instead.\n\nCheap shoes are genuinely viable for Indian treks - but cheap and wrong are different things. The Rs 5,000 ceiling is real for a lot of people planning their first Char Dham trip or heading to Chopta for a weekend. What I have done here is narrow the field to six shoes I have worn or directly tested, all available in India, all under or right at Rs 5,000. Three come from the Decathlon on Rajpur Road in Dehradun - which is where I buy most of my trail gear - and the rest are on Amazon India.",
  heroImage: { src: "/gear-shoes-hero.jpg", alt: "Trekking boots resting on grass with mountain peak in background after a day on the trail" },
  sectionImages: {
    afterIntro: { src: "/gear-shoes-sole.jpg", alt: "Close-up of trekking shoe outsole showing deep lug pattern for grip on rocky mountain terrain", caption: "Lug depth and pattern matter more than brand name on Uttarakhand trails" },
    afterBuyingGuide: { src: "/gear-shoes-trail.jpg", alt: "Trekking shoes on wet mossy rock on a mountain trail showing real trail conditions", caption: "Wet rock and moss - where grip either works or you find out the hard way" },
    afterProducts: { src: "/gear-shoes-wet.jpg", alt: "Worn trekking shoes on wet rocky terrain during monsoon conditions", caption: "Monsoon conditions on Uttarakhand trails - waterproofing is not optional" },
  },
  buyingGuide: [
    {
      heading: "What to look for in this price range",
      paragraphs: [
        "At Rs 5,000 and below, you will not get Vibram outsoles or Gore-Tex membranes. What you can realistically get: a proprietary waterproof membrane that works for one to two seasons, a rubber compound outsole with decent lug depth (3-4 mm is workable), and a mid-cut that holds your ankle on uneven ground.",
        "The spec that matters most on Uttarakhand trails is lug depth and lug pattern. Granite slabs and packed dirt require different things. Loose scree on the approach to passes above 4,000m requires yet another thing, and honestly nothing in this budget range is reliable there - factor that into your planning.",
        "Weight is less important than people think when buying in this category. The differences between 600g and 850g per pair are real but secondary to fit, grip, and waterproofing that does not fail after one monsoon day."
      ],
    },
  ],
  products: [
    {
      name: "Quechua MH500 Mid",
      price: "Rs 3,999",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.2,
      pros: [
        "Waterproof membrane holds through a full monsoon season",
        "Mid-cut ankle support for uneven Uttarakhand trails",
        "Wide forefoot fits Indian feet well",
        "Available at Decathlon Rajpur Road, Dehradun - try before buying"
      ],
      cons: [
        "Outsole struggles on loose scree above base camp",
        "Not inspiring on wet polished stone - needs deliberate foot placement",
        "780g per pair is mid-range weight"
      ],
      verdict: "The shoe I would hand to someone walking into Decathlon with a Kedarnath trip booked two months out. Gets the balance right between grip, waterproofing, ankle support, and price. Tested on Kedarnath trail and Tungnath approach.",
      badge: "Best value",
    },
    {
      name: "Quechua NH500 Waterproof",
      price: "Rs 2,999",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 3.8,
      pros: [
        "Lightest waterproof shoe on this list at 580g",
        "Fast break-in: 1-2 days",
        "Good value waterproof membrane at this price",
        "Comfortable from day one for shorter routes"
      ],
      cons: [
        "Low-cut means no lateral ankle support",
        "Not suitable for packs over 8 kg",
        "Fatigue sets in on long days with uneven ground",
        "Not for multi-day or serious altitude treks"
      ],
      verdict: "Best for day hikes and pilgrimages on paved or semi-paved routes. Vaishno Devi, Deoria Tal, forest walks. Not for Kedarnath, Chopta-Tungnath, or anything multi-day with a heavy pack.",
      badge: "Day hike pick",
    },
    {
      name: "Wildcraft Trailblazer",
      price: "Rs 3,500-4,500",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.5,
      pros: [
        "Widely available - Amazon, Wildcraft stores",
        "Decent mid-cut ankle support",
        "Softer midsole cushioning than Quechua",
        "Indian brand with established track record"
      ],
      cons: [
        "Waterproofing degrades after season one",
        "Soft midsole creates instability on steep descents",
        "Needs tight lacing to compensate for foot shift",
        "Not a multi-season shoe for waterproofing"
      ],
      verdict: "Reasonable entry point for first-time trekkers on moderate trails. Good if Decathlon is not accessible in your city. Know that the waterproofing is a one-season feature.",
    },
    {
      name: "Campus Hurricane II",
      price: "Rs 2,000-2,500",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.0,
      pros: [
        "Cheapest option on this list by a wide margin",
        "Break-in is only 2 days",
        "Adequate for easy, well-maintained trails"
      ],
      cons: [
        "No waterproofing at all - mesh upper",
        "Only 2mm lug depth - inadequate on wet rock",
        "Reports of sole separation at the toe",
        "Narrow fit - size up if you have wider feet"
      ],
      verdict: "Honest budget shoe for Vaishno Devi, Triund, and easy trails only. Spending another Rs 1,500 on the NH500 is worth it for anything more serious.",
      badge: "Budget pick",
    },
    {
      name: "Forclaz Trek 100",
      price: "Rs 4,999",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.5,
      pros: [
        "Best grip on this list - 4mm lugs bite into wet granite",
        "Strongest ankle support of all mid-cuts tested",
        "Waterproofing held through full monsoon day with stream crossings",
        "Built for 12-15 kg pack loads on multi-day routes"
      ],
      cons: [
        "Longest break-in: 5-7 days of walks before serious use",
        "Heaviest at 850g per pair",
        "Upper is stiff out of the box"
      ],
      verdict: "The best shoe under Rs 5,000 for anyone doing Kedarnath, multi-day routes, or carrying a heavier pack. Break it in properly and it will not let you down. Tested on the Kedarnath valley route.",
      badge: "Best overall",
    },
    {
      name: "Adidas Terrex AX2R",
      price: "Rs 4,999-5,499",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.8,
      pros: [
        "AdiWear outsole - second best grip after Forclaz",
        "Fast break-in: 2-3 days",
        "Works for both trail and urban use",
        "More pliable upper than pure trekking shoes"
      ],
      cons: [
        "No waterproofing on base model - mesh upper",
        "Only dips under Rs 5,000 during sales",
        "Not a monsoon shoe - feet will be wet by mid-morning",
        "GTX version is well above budget"
      ],
      verdict: "For trekkers who also want a shoe that works for urban and travel use, and who trek outside monsoon season. At sale price only. For serious Uttarakhand use in any weather, the Forclaz Trek 100 is a better call.",
    },
  ],
  conclusion: "Budget pick under Rs 2,500: Campus Hurricane II for easy trails only. Best value Rs 3,000-4,000: Quechua MH500 Mid covers most Uttarakhand treks competently. Best overall under Rs 5,000: Forclaz Trek 100 for anyone doing Kedarnath, multi-day routes, or anything with a heavier pack. Best for day hikes and pilgrimages: Quechua NH500 Waterproof. If you are in Dehradun before a trek, use the Decathlon on Rajpur Road rather than ordering blind - sizing varies between models and the difference between a shoe that fits and one that causes blisters is almost always about the fit in-store.",
};
