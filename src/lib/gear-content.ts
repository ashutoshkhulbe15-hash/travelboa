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

// ═══ JACKETS KEDARNATH ═══
gearGuideContent["jackets-kedarnath"] = {
  heroImage: { src: "/gear-jackets-kedarnath-hero.jpg", alt: "Trekker in layered jacket with backpack facing snow-covered Himalayan peaks" },
  intro: "The Kedarnath trail in June does not give you a single weather problem. It gives you three. By 7 am at Gaurikund, you are walking in 12C with a light wind and thinking the fleece you packed is too warm. By 11 am at Jungle Chatti you are in cloud, the temperature has dropped four degrees in twenty minutes, and the trail surface has gone from dust to wet mud. By 2 pm - if you push past Bheembali - you might be walking into sleet at 3,200m with the wind coming directly off the glacier.\n\nI have done this route twice and got the layering wrong the first time in a way that still annoys me. That first trip I had a good fleece, decent thermals, and a cheap waterproof I bought off a roadside stall in Rishikesh. The \"waterproof\" failed around Rambara. By the time I reached the Bheembali dhaba at roughly 3,200m, I was soaked through to my base layer. It was not dangerous that day, but it made me understand exactly what a proper shell layer is for.\n\nThis article covers the specific jacket problem on the Kedarnath route: what the weather actually looks like at 3,583m in June, and which jackets at Indian price points actually solve it. I have tested or used four of the five jackets reviewed here on Uttarakhand routes. All prices are current at the Decathlon on Rajpur Road in Dehradun or Amazon India.",
  buyingGuide: [
    {
      heading: "What June at 3,583m actually means for jackets",
      paragraphs: [
        "Temperature range: Days run 8-15C at the temple. Nights at camp drop to 0-5C, sometimes lower if clouds clear and radiation cooling kicks in. Wind chill on exposed sections above 3,000m can push the felt temperature below zero even at midday.",
        "Precipitation: June sits before peak monsoon but weather systems move fast through the valley. Afternoon thunderstorms are common, and rain can start in twenty minutes from a clear sky. At altitude, rain can turn to sleet.",
        "Wind: The trail crosses several exposed ridgelines, particularly above Jungle Chatti. Wind speeds are unpredictable and can make a 10C temperature feel like 2-3C through windchill. A non-windproof fleece on an exposed section loses its thermal value quickly."
      ],
    },
    {
      heading: "The three-layer system applied to Kedarnath",
      paragraphs: [
        "Layer 1 - Base layer: Manages sweat moisture. A base layer in merino wool or synthetic wicking fabric keeps moisture off your skin.",
        "Layer 2 - Mid-layer: Traps warm air close to your body. A fleece or down jacket fills this role. The key requirement is that this layer must not absorb water.",
        "Layer 3 - Outer shell: Blocks wind and water. This layer does not need to be warm on its own. Its job is to keep your mid-layer dry and functional. A hardshell does this best. A cheap waterproof does not reliably do it at all.",
        "The system works because the layers work together. A good fleece with a failing outer shell is worse than no fleece at all once it gets wet."
      ],
    },
  ],
  products: [
    {
      name: "Forclaz MT500 Hardshell",
      price: "Rs 4,999",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.7,
      pros: [
        "20,000mm hydrostatic head - genuine waterproofing, not marketing waterproofing",
        "Fully taped seams - water cannot find its way through",
        "Pit zips for ventilation on sustained uphills",
        "Pockets accessible when wearing a hipbelt"
      ],
      cons: [
        "No insulation - shell only, cold worn alone in 5C",
        "Not ultralight packable - does not compress to fist-size",
        "650g is mid-range weight, not featherweight"
      ],
      verdict: "The most important purchase on this list. If I had to take one jacket from this review on the Kedarnath trek, it is this one. Not because it is the warmest but because it is the piece that determines whether your other layers keep working.",
      badge: "Best overall",
    },
    {
      name: "Quechua MH500 Softshell",
      price: "Rs 3,499",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.0,
      pros: [
        "Stretchy and comfortable for sustained movement",
        "Good wind resistance on exposed ridgelines",
        "DWR coating handles light drizzle well",
        "Layers cleanly under a hardshell if conditions escalate"
      ],
      cons: [
        "DWR wets out under 30-40 minutes of sustained rain",
        "Not sufficient as the only jacket for Kedarnath",
        "550g adds weight if you are already carrying a hardshell"
      ],
      verdict: "Useful for clear cold days and light drizzle. Not sufficient as the only outer layer for the Kedarnath trek where afternoon rain is frequent. Best as part of a two-jacket system with the MT500.",
    },
    {
      name: "Quechua MH100 Fleece",
      price: "Rs 1,499",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.5,
      pros: [
        "Genuinely non-negotiable mid-layer at Rs 1,499",
        "Retains warmth even when partially damp (unlike down or cotton)",
        "Lightest jacket at 400g, compresses small",
        "Dries fast on the trail"
      ],
      cons: [
        "Wind penetrates the open weave on exposed sections",
        "Wet fleece is less warm than dry fleece",
        "Must be paired with a shell for full protection"
      ],
      verdict: "The cheapest piece on this list and also the one I would call genuinely non-negotiable. At Rs 1,499, having a Kedarnath-specific mid-layer that stays in your mountain kit makes sense.",
      badge: "Best value",
    },
    {
      name: "Trek 100 Down Jacket",
      price: "Rs 3,999",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.2,
      pros: [
        "Excellent warmth for camp evenings and rest stops",
        "650-fill duck down - adequate for 0-5C when layered",
        "Packs into its own pocket, size of a 1-litre Nalgene",
        "Good value vs branded alternatives at Rs 8,000-15,000"
      ],
      cons: [
        "Not a hiking jacket - you will overheat within 20 minutes of uphill",
        "Down collapses when wet, losing insulating value",
        "Delicate outer fabric not designed for rain or abrasion"
      ],
      verdict: "The specialist piece. Excellent for camp evenings and stationary cold. Do not wear it while hiking or in rain. Carry it in your pack and deploy at rest stops and camp.",
    },
    {
      name: "Wildcraft Kaza Softshell",
      price: "Rs 3,500",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.5,
      pros: [
        "Indian brand widely available on Amazon",
        "Comparable wind resistance to Quechua MH500",
        "DWR coating handles light rain adequately",
        "Viable option where Decathlon is not accessible"
      ],
      cons: [
        "Zipper durability issues reported consistently in reviews",
        "50g heavier than MH500 at 600g",
        "Slimmer fit may require sizing up for layering"
      ],
      verdict: "Budget alternative to the MH500 with comparable weather performance and a known weak point in zipper durability. Worth the price if you buy from a seller with a return policy.",
      badge: "Budget pick",
    },
  ],
  conclusion: "Minimum setup: MH100 fleece (Rs 1,499) + MT500 hardshell (Rs 4,999) = Rs 6,498, weight 1,050g. This handles rain, wind, and cold through the full day on the Kedarnath trek. Add the Trek 100 down jacket (Rs 3,999) for camp evening comfort. Total three-piece system: Rs 10,497, weight 1,500g. That covers the full temperature range from 18C afternoon sunshine to 0C night at camp, with reliable waterproofing for sustained mountain rain.",
};

// ═══ JACKETS LADAKH ═══
gearGuideContent["jackets-ladakh"] = {
  heroImage: { src: "/gear-jackets-ladakh-hero.jpg", alt: "Trekker in red jacket standing on mountain summit overlooking vast valley" },
  intro: "Here is the problem with packing for a Ladakh bike trip: at 7:30 in the morning on top of Khardung La at 5,359m, the ambient temperature is around -5C. At 80 kmph - which is a moderate speed on the descent - wind chill brings the felt temperature to somewhere between -15C and -18C. That is a different kind of cold from what you feel standing on a viewpoint.\n\nBy 2:00 in the afternoon the same day, after dropping into the Nubra Valley via Khardungla Road, you are at around 3,100m altitude and 35C. The sun is direct. The landscape is open. You are looking for a shady spot to take your jacket off.\n\nThis is the actual dual-problem of a Ladakh bike trip: the same ride demands serious cold protection in the morning and serious ventilation by afternoon. No single jacket solves it perfectly. I ride out of Dehradun, and most of my Ladakh trips start with two or three days on the Dehradun-Chandigarh-Manali corridor before hitting the Rohtang La entry.",
  buyingGuide: [
    {
      heading: "Why a riding jacket is not a trekking jacket",
      paragraphs: [
        "A trekking jacket is designed for foot travel. It has no CE-rated impact armor and no abrasion-resistant fabric. In a low-side fall at even 40 kmph, a trekking jacket tears and the armor intended to protect your elbows and shoulders is simply not there.",
        "A riding jacket does three things a trekking jacket cannot: CE-rated impact armor at shoulders, elbows, and ideally chest and back. Abrasion-resistant outer fabric (Cordura or equivalent) that survives a slide across asphalt or gravel. And a fit designed for the riding position rather than the hiking position.",
      ],
    },
    {
      heading: "The Ladakh temperature problem",
      paragraphs: [
        "The Manali-Leh highway crosses five passes above 4,500m. At those altitudes, morning temperatures sit between -5C and 5C. At riding speed, wind chill drops the felt temperature by 10-15C below ambient. By afternoon at lower altitudes (Nubra at 3,100m, Pangong approaches), temperatures can hit 35C.",
        "No single jacket is optimized for both ends of this range. The solution is a jacket with good ventilation that you layer under with thermals and a fleece for the passes, then strip down to the mesh at lower altitudes.",
      ],
    },
  ],
  products: [
    {
      name: "Rynox Air GT v2",
      price: "Rs 8,999",
      store: "Rynox",
      storeUrl: "https://www.rynox.in",
      rating: 4.5,
      pros: [
        "CE Level 1 armor at shoulders and elbows from factory",
        "Mesh construction manages 35C Nubra Valley heat effectively",
        "Back protector slot for separate CE insert",
        "Fit designed for Indian body proportions"
      ],
      cons: [
        "No wind protection from mesh alone - needs thermal layers at passes",
        "No waterproofing - needs separate rain cover for Rohtang and Baralacha La",
        "Back protector not included - add Rs 1,500-2,000"
      ],
      verdict: "The jacket I would tell most people doing a summer Leh-Ladakh trip to buy if they do not already own a riding jacket and their budget is below Rs 12,000. Hits the right balance for this route with proper layering discipline.",
      badge: "Best for summer Leh riding",
    },
    {
      name: "Rynox Stealth v3",
      price: "Rs 14,999",
      store: "Rynox",
      storeUrl: "https://www.rynox.in",
      rating: 4.8,
      pros: [
        "CE Level 2 armor at all four points - shoulders, elbows, chest, back",
        "Waterproof membrane built into the jacket - no external rain cover needed",
        "Handles the full Manali-Leh range without jacket changes",
        "Substantial outer fabric for serious protection"
      ],
      cons: [
        "Noticeably warmer than Air GT v2 in Nubra Valley heat",
        "Rs 14,999 is the highest price on this list",
        "Heavier and bulkier than mesh alternatives"
      ],
      verdict: "The serious equipment on this list. For the full Manali-Leh highway including all high passes in variable weather, the Stealth v3 earns its price. CE Level 2 at all armor points and integrated waterproofing remove variables.",
      badge: "Best overall",
    },
    {
      name: "Royal Enfield Streetwind",
      price: "Rs 12,000-15,000",
      store: "RE Showroom",
      storeUrl: "https://store.royalenfield.com",
      rating: 3.5,
      pros: [
        "Looks like a regular jacket - works on and off the bike",
        "CE Level 1 armor at shoulders and elbows",
        "Relaxed fit comfortable for long days in the saddle",
        "Natural choice for RE Himalayan riders"
      ],
      cons: [
        "No waterproofing at this price point",
        "No back protector included",
        "Protection value per rupee is lower than Rynox options",
        "CE Level 1 only vs Stealth v3 Level 2 at similar price"
      ],
      verdict: "For RE Himalayan riders who want protection without the full motorcycle-gear aesthetic. Equivalent protection spec to the Air GT v2 at a higher price, but works as a jacket on and off the bike.",
    },
    {
      name: "Biking Brotherhood Torque",
      price: "Rs 5,999-7,999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.8,
      pros: [
        "Budget-friendly entry point with real CE Level 1 armor",
        "Mesh panels handle summer Ladakh ventilation",
        "Legitimate Indian brand with after-sales network",
        "Saves Rs 2,000-3,000 vs Air GT v2"
      ],
      cons: [
        "Lighter outer fabric with lower abrasion resistance",
        "No waterproofing",
        "Build quality step down from Rynox",
        "Not recommended for full Manali-Leh highway at loaded speeds"
      ],
      verdict: "Honest budget pick for summer Leh-based riding on well-maintained roads. If doing the full Manali-Leh highway, spend the extra Rs 2,000-3,000 on the Air GT v2 for the build quality step up.",
      badge: "Budget pick",
    },
  ],
  conclusion: "Summer Leh riding with layering: Rynox Air GT v2 at Rs 8,999 - pair with thermals and fleece for passes, strip to mesh for valleys. Full Manali-Leh highway both ways: Rynox Stealth v3 at Rs 14,999 - waterproof membrane and CE Level 2 earn their cost on Rohtang and Baralacha La. Budget first trip: Biking Brotherhood Torque at Rs 5,999-7,999 with a strong layering system and separate back protector insert. Always add a back protector insert regardless of which jacket you buy - Rs 1,500-2,000 for the single highest-consequence protection upgrade.",
};

// ═══ SLEEPING BAGS SPITI ═══
gearGuideContent["sleeping-bags-spiti"] = {
  heroImage: { src: "/gear-sleeping-bags-hero.jpg", alt: "Colorful camping tents at high altitude with snow-capped Himalayan peaks and clouds" },
  intro: "It was 3 AM at Chandratal Lake, 4,250m, early September. I was inside a sleeping bag that had a prominent \"-10C\" label sewn onto the zipper pull. I was also shivering badly enough that I had to sit up, pull on my fleece jacket and rain shell, and spend twenty minutes doing isometric exercises inside my tent to stop my legs from cramping. The air temperature outside was approximately -9C. My bag should have been fine.\n\nIt was not fine. The \"-10C\" rating was the extreme rating - the EN 13537 survival threshold, the number at which a standard woman would not die of hypothermia. Not the comfort rating. The comfort rating on that bag was +3C. I had been scammed by a number on a label.\n\nIf you are shopping for a sleeping bag for Spiti Valley, for Chandratal, for any camp above 4,000m - this article is the one I wish I had read before that September night.",
  buyingGuide: [
    {
      heading: "The one thing you must understand before buying",
      paragraphs: [
        "Every sleeping bag has two temperature ratings: the comfort rating and the extreme rating. The comfort rating is the temperature at which an average person sleeps comfortably through the night. The extreme rating is the temperature at which you would survive for six hours without dying of hypothermia. Survival is not a camping standard.",
        "Marketers know \"-10C\" looks more impressive than \"+3C,\" so the extreme rating gets printed large on labels while the comfort rating is buried in specs. The standard governing these ratings is EN 13537.",
        "Rule for Spiti and Chandratal: buy to the comfort rating, add a 5C buffer for altitude effects, and carry a liner bag. At 4,250m your body works harder to maintain core temperature. The same -5C air at Chandratal feels colder than -5C in a valley.",
      ],
    },
    {
      heading: "Down vs synthetic for Spiti",
      paragraphs: [
        "Down bags compress smaller, weigh less per warmth unit, and last longer if maintained. Synthetic bags are cheaper, retain warmth when damp, dry faster, and require less care. For Spiti specifically: if you are bike-packing with limited pannier space, down wins on compression. If you are car-camping or expect rain and condensation inside the tent, synthetic is more forgiving.",
      ],
    },
  ],
  products: [
    {
      name: "Naturehike CW400",
      price: "Rs 3,499",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.5,
      pros: [
        "Best warmth-to-weight ratio on this list at 880g",
        "Comfort rating 0C, extreme -10C - honest numbers",
        "Compresses to roughly 2L - fits in a pannier",
        "400g duck down fill at 550+ fill power"
      ],
      cons: [
        "Comfort rating 0C means you need a liner for -8C Chandratal nights",
        "Down loses insulation when wet - keep it dry",
        "Narrow mummy cut may not suit larger frames"
      ],
      verdict: "The best budget down bag for Spiti. With a fleece liner adding 5-8C, this handles Chandratal September nights. Without the liner, it is a three-season bag comfortable to about 0C.",
      badge: "Best overall",
    },
    {
      name: "Decathlon Trek 0C Synthetic",
      price: "Rs 2,499",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.0,
      pros: [
        "Synthetic fill retains warmth when damp",
        "EN 13537 rated: comfort 0C, limit -5C",
        "Available at Decathlon Rajpur Road, Dehradun",
        "Good value for the rated warmth"
      ],
      cons: [
        "1,350g is heavier than the Naturehike at equivalent warmth",
        "Larger packed volume - not ideal for bike panniers",
        "0C comfort is not enough for late-season Chandratal without a liner"
      ],
      verdict: "Solid synthetic choice for Spiti camping May through early September. For late September onwards, pair with a liner or step up to the -5C version.",
    },
    {
      name: "Decathlon Trek -5C Synthetic",
      price: "Rs 3,499",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.3,
      pros: [
        "Comfort rating -5C handles most Spiti nights without a liner",
        "Synthetic fill - no moisture concerns",
        "EN 13537 rated with honest comfort and extreme numbers",
        "Draft tube along the zipper reduces cold spots"
      ],
      cons: [
        "1,650g is the heaviest bag on this list",
        "Large packed volume",
        "Overkill for May-June when nights are milder"
      ],
      verdict: "The safe choice for anyone worried about cold at Chandratal in September-October. Heavier and bulkier, but the -5C comfort rating means you sleep rather than shiver.",
      badge: "Best for cold sleepers",
    },
    {
      name: "Coleman Brazos 0C",
      price: "Rs 1,799",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.0,
      pros: [
        "Cheapest bag on this list by a wide margin",
        "Works for summer Spiti camping (June-July)",
        "Rectangular cut is roomy"
      ],
      cons: [
        "No EN 13537 certification - temperature claims unverified",
        "Real comfort rating likely 5-8C warmer than claimed",
        "Heavy for the warmth provided at 1,800g",
        "Not viable for Chandratal or September camping"
      ],
      verdict: "Budget pick for summer-only camping at lower Spiti altitudes (Kaza at 3,650m in June). Not for Chandratal, not for late season. If your budget ceiling is Rs 2,000, this plus a fleece liner is functional for warm-season camping.",
      badge: "Budget pick",
    },
    {
      name: "Marmot Trestles 15",
      price: "Rs 7,999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.6,
      pros: [
        "Comfort rating -9C - genuine cold-weather bag",
        "SpiraFil synthetic fill retains warmth when damp",
        "Draft collar and zipper draft tube eliminate cold spots",
        "Proven across global alpine conditions"
      ],
      cons: [
        "Rs 7,999 is double the Decathlon -5C option",
        "1,500g is not ultralight",
        "Overkill for Spiti May-August"
      ],
      verdict: "The premium choice for anyone planning regular camping above 4,000m including late-season Chandratal, Pangong shores, and other genuinely cold locations. The -9C comfort rating means no liner needed in most Spiti conditions.",
    },
  ],
  conclusion: "Summer Spiti (June-July): Naturehike CW400 at Rs 3,499 or Decathlon Trek 0C at Rs 2,499 - both handle warm-season nights. September-October Chandratal: Decathlon Trek -5C at Rs 3,499 for budget safety, or Naturehike CW400 plus a fleece liner for lighter weight. Regular alpine camping: Marmot Trestles 15 at Rs 7,999 if your budget allows. Always buy to the comfort rating, never the extreme. Add a liner. Sleep with the bag inside your tent, not outside.",
};

// ═══ POWER BANKS TREKS ═══
gearGuideContent["power-banks-treks"] = {
  heroImage: { src: "/gear-power-banks-hero.jpg", alt: "Power bank charging smartphone on a rock at sunset during a mountain trek" },
  intro: "Here is the exact situation you are about to be in: day four of a multi-day trek, no charging points since the guesthouse three nights ago, cold enough at night that your sleeping bag is the warmest thing in camp, and your phone is at 8%. You have GPS tracks you have not downloaded offline. You have photos you have not backed up. You have a headlamp that stopped responding to the power button this morning.\n\nThe problem has three layers. First: no charging infrastructure. From Spiti Valley village guesthouses to the high camps on the Kedarnath approach, you can go four to five days without a working socket. Second: cold temperatures reduce lithium battery capacity significantly. Third: altitude means continuous GPS use.\n\nI have been figuring this out across several trips from Dehradun. This article covers six power banks reviewed against the specific demands of multi-day Himalayan trekking, with real calculations for how long each will actually last.",
  buyingGuide: [
    {
      heading: "The number that actually matters: Wh, not mAh",
      paragraphs: [
        "mAh measures charge at a specific voltage - power banks store energy at 3.7V internally, while USB output is 5V. A 20000 mAh bank stores approximately 74Wh. At 85% transfer efficiency, you get about 63Wh usable. A typical smartphone has a 10-15Wh battery - so a 74Wh bank gives you four full charges reliably.",
        "Five-day consumption estimate: Phone two charges per day at 12Wh = 24Wh/day. Headlamp recharge every 3 days at 4Wh. Camera battery every 2 days at 8Wh. Total for 5 days: roughly 140-160Wh. That is two 20000 mAh banks or one 30000 mAh bank plus a small backup.",
      ],
    },
    {
      heading: "Cold temperature: the number nobody puts on the box",
      paragraphs: [
        "Lithium-ion batteries lose capacity in cold. At 0C, expect 15-20% capacity loss. At -10C, expect 30-40% loss. A 20000 mAh bank that gives four phone charges at 20C may only give two and a half at -5C.",
        "The practical fix: sleep with the power bank inside your sleeping bag. Body heat keeps it at 25-30C overnight. In the morning, move it to an inner jacket pocket, not an outer pack pocket. This alone recovers most of the cold-weather capacity loss.",
      ],
      tip: "Sleep with your power bank inside your sleeping bag and keep it in an inner jacket pocket during the day. This single habit recovers most cold-weather capacity loss.",
    },
  ],
  products: [
    {
      name: "Mi 20000 mAh Pro (Xiaomi)",
      price: "Rs 1,499",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.5,
      pros: [
        "Best value on this list at Rs 1,499 for 74Wh",
        "18W fast charge output and input",
        "440g is mid-range weight for 20K capacity",
        "USB-C and USB-A outputs - charges two devices simultaneously"
      ],
      cons: [
        "No pass-through charging",
        "Takes 6-7 hours to fully recharge",
        "440g adds up if carrying two"
      ],
      verdict: "The default recommendation. For a single Kedarnath trek or a 3-4 day trip, one Mi 20K is sufficient. For a 5+ day Spiti or Ladakh trip, carry two. At Rs 1,499 each, two cost less than most single premium alternatives.",
      badge: "Best value",
    },
    {
      name: "Ambrane 20000 mAh",
      price: "Rs 1,299",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.5,
      pros: [
        "Cheapest 20K option at Rs 1,299",
        "Lightweight at 380g",
        "Available widely in India"
      ],
      cons: [
        "Transfer efficiency around 78-80% vs 85% for Mi",
        "No fast charging - 10W output only",
        "Build quality step down from Xiaomi"
      ],
      verdict: "Budget alternative if Rs 200 matters. The lower efficiency means you get roughly 3.5 charges instead of 4 from a comparable mAh rating. For a weekend trek, it works. For multi-day, the Mi is worth the extra Rs 200.",
      badge: "Budget pick",
    },
    {
      name: "Anker PowerCore 20100",
      price: "Rs 2,799",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.3,
      pros: [
        "Anker build quality is genuinely best-in-class",
        "PowerIQ fast charging across both ports",
        "Excellent cold-weather capacity retention",
        "356g is lighter than the Mi for near-identical capacity"
      ],
      cons: [
        "Rs 2,799 is nearly double the Mi price",
        "No USB-C port on this model",
        "Availability can be inconsistent on Amazon India"
      ],
      verdict: "The premium 20K option. Better build, lighter weight, better cold-weather performance. Worth it if you trek frequently. For a one-time trip, the Mi at half the price does the same job.",
    },
    {
      name: "Romoss Sense 8+ (30000 mAh)",
      price: "Rs 2,499",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.8,
      pros: [
        "111Wh capacity - enough for a 5-day trek solo",
        "18W fast charge",
        "Three output ports for charging multiple devices",
        "Eliminates the need to carry two 20K banks"
      ],
      cons: [
        "580g is heavy",
        "Takes 10+ hours to fully recharge",
        "Bulkier than two separate 20K banks",
        "Not airline-friendly above 100Wh on some carriers"
      ],
      verdict: "The one-bank solution for 5+ day treks. Saves the hassle of managing two banks. The weight and airline concerns are the tradeoffs. For Spiti or Ladakh circuits of 7+ days, this plus a small 10K backup covers the full trip.",
    },
    {
      name: "BigBlue 28W Solar Panel + Power Bank Combo",
      price: "Rs 3,999-5,999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.0,
      pros: [
        "Genuinely generates power on the trail",
        "28W output in direct sun - charges a 20K bank in about 5-6 hours",
        "No weight limit on trip duration - infinite energy in theory"
      ],
      cons: [
        "Direct sun only - clouds, shade, and trail orientation reduce output to near-zero",
        "Panel weighs 600-700g on top of the bank weight",
        "Rs 3,999-5,999 for inconsistent output",
        "Requires hanging on backpack while walking - awkward"
      ],
      verdict: "Solar works if you have reliable direct sun for 4-5 hours per day and you are on a 7+ day trek where carrying enough battery is impractical. For most Himalayan conditions where clouds are frequent, two Mi 20K banks at Rs 2,998 total are more reliable.",
    },
    {
      name: "Jackery Bolt 6000 mAh",
      price: "Rs 1,499",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.5,
      pros: [
        "Built-in Lightning and micro-USB cables - no separate cables to carry",
        "170g is the lightest option",
        "Pocket-sized for summit day or day hike use"
      ],
      cons: [
        "Only 22Wh - roughly 1.5 phone charges",
        "Not a primary bank for multi-day treks",
        "No USB-C cable built in"
      ],
      verdict: "Not a primary power bank. Useful as a small emergency backup or for summit day when you leave the main bank at camp. At 170g and pocket-sized, it earns a slot in a vest pocket for day hikes from a base camp.",
    },
  ],
  conclusion: "3-4 day trek (Kedarnath, Chopta): One Mi 20000 mAh Pro at Rs 1,499. 5-7 day trek (Spiti circuit, Hampta): Two Mi 20000 mAh banks at Rs 2,998 total, or one Romoss 30000 mAh at Rs 2,499. 7+ day remote trek: Romoss 30000 plus Jackery Bolt 6000 as backup, at Rs 3,998 total. Solar: only if you have 4-5 hours of direct sun daily, otherwise two conventional banks are more reliable. Always sleep with the power bank in your sleeping bag in cold weather.",
};

// ═══ BACKPACKS CHOPTA ═══
gearGuideContent["backpacks-chopta"] = {
  heroImage: { src: "/gear-backpacks-hero.jpg", alt: "Trekkers with loaded backpacks walking through alpine wildflower meadow with mountains" },
  intro: "The real packing question for a 3-4 day trip to Chopta is not which brand or which features - it is which size to use when, because the answer changes depending on what part of the trip you are doing. You need something large enough to carry a sleeping bag, thermals, and three days of supplies on the drive up and the walk to camp. You also need something small and controlled on the actual Tungnath approach, which is a steep 3.5 km climb to 3,680m with loose soil and stone steps where a flopping, half-empty pack becomes its own physical problem.\n\nI am based in Dehradun, which puts Chopta at roughly 218 km via Ukhimath - a drive of five to six hours. I have done the Chopta-Tungnath-Chandrashila route in three separate seasons and made at least one significant packing mistake on each.",
  buyingGuide: [
    {
      heading: "The two-pack situation at Chopta",
      paragraphs: [
        "Chopta works differently from a point-to-point trek. You drive in, set up camp or check into a tent stay, and then do Tungnath temple at 3,680m and Chandrashila peak at 4,130m as day hikes from base. The drive-in needs 45-55L for sleeping bag, mat, thermals, food. The Tungnath day hike needs 25-35L for jacket, water, snacks, headlamp.",
        "The question is: do you bring two bags (large for approach, small daypack inside for the hike), or one mid-size bag that does both? A single well-chosen 50L with good compression straps handles both. A dedicated daypack for the summit push is more comfortable but adds weight and cost.",
      ],
    },
  ],
  products: [
    {
      name: "Quechua NH500 30L",
      price: "Rs 1,999",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.3,
      pros: [
        "Best balance of size, weight, and features at this price",
        "Hip belt distributes load well for a day pack",
        "Rain cover included - rare at Rs 1,999",
        "Ventilated back panel reduces sweat on steep climbs"
      ],
      cons: [
        "30L is tight for multi-day with sleeping bag",
        "No separate sleeping bag compartment",
        "Hip belt padding is thin for loads above 8 kg"
      ],
      verdict: "The best single-pack option for Chopta if you are staying in tent accommodation (sleeping bag not needed) or if you pack very efficiently. For camping with your own sleeping bag, pair with the Arpenaz 30L as a summit daypack.",
      badge: "Best value",
    },
    {
      name: "Forclaz MT500 50L",
      price: "Rs 4,999",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.5,
      pros: [
        "50L handles full camping load including sleeping bag and mat",
        "Compression straps cinch down to 30L effective volume for summit day",
        "Padded hip belt transfers weight to hips properly",
        "Front access panel - no digging from the top"
      ],
      cons: [
        "Rs 4,999 is the second highest price on the list",
        "1,400g is heavier than most 30L options",
        "Overkill if staying in tent accommodation"
      ],
      verdict: "The one-bag solution for self-sufficient camping at Chopta. Carries the full load to base camp, compresses down for the Tungnath climb. The compression straps are what make this work as a dual-purpose bag.",
      badge: "Best overall",
    },
    {
      name: "Quechua Arpenaz 30L",
      price: "Rs 1,299",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 3.5,
      pros: [
        "Cheapest pack on the list at Rs 1,299",
        "Light at 450g",
        "Packs flat inside a larger bag for summit day use",
        "Simple and functional"
      ],
      cons: [
        "No hip belt - all weight on shoulders",
        "No rain cover included",
        "No ventilated back panel - sweaty on steep terrain",
        "Not a primary pack for multi-day"
      ],
      verdict: "Best as a summit daypack packed inside a larger bag. At Rs 1,299 and 450g, it earns its place as the dedicated Tungnath pack when your main gear stays at base camp.",
      badge: "Summit day pick",
    },
    {
      name: "Wildcraft Trailblazer 45L",
      price: "Rs 3,499",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.8,
      pros: [
        "Indian brand widely available on Amazon",
        "45L capacity handles camping load",
        "Decent hip belt for the price",
        "Multiple access points"
      ],
      cons: [
        "Compression straps less effective than MT500",
        "Heavier than the Forclaz at 1,550g",
        "Rain cover quality inconsistent across batches"
      ],
      verdict: "Reasonable option where Decathlon is not accessible. Does the job for Chopta camping without the compression effectiveness of the MT500.",
    },
    {
      name: "Decathlon MT100 Easyfit 20L",
      price: "Rs 999",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 3.5,
      pros: [
        "Lightest pack at 320g",
        "Rs 999 is pocket change",
        "Perfect for a no-frills summit push"
      ],
      cons: [
        "20L is too small for anything except a half-day hike",
        "No hip belt, minimal padding",
        "No rain cover"
      ],
      verdict: "Ultralight summit day option. Carries water, snacks, jacket, and camera for the Tungnath push. Not a primary pack.",
      badge: "Budget pick",
    },
    {
      name: "Osprey Stratos 34L",
      price: "Rs 9,999-11,999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.8,
      pros: [
        "Best ventilated back panel on this list",
        "AirSpeed suspension system genuinely reduces sweat",
        "Integrated rain cover",
        "Lifetime warranty from Osprey"
      ],
      cons: [
        "Rs 9,999-11,999 is 5x the NH500 price",
        "34L still tight for full camping load",
        "Overkill for occasional trekkers"
      ],
      verdict: "The premium pick for regular trekkers. The back ventilation and suspension system are genuinely superior. Worth it if you trek monthly. Difficult to justify for a single Chopta trip.",
    },
  ],
  conclusion: "Tent accommodation (no sleeping bag): Quechua NH500 30L at Rs 1,999 handles everything. Self-sufficient camping: Forclaz MT500 50L at Rs 4,999 as the single bag, or NH500 for base camp + Arpenaz 30L for summit at Rs 3,298 combined. Budget minimum: Arpenaz 30L at Rs 1,299 for tent-stay trips. Premium: Osprey Stratos 34L if you trek regularly and want the best carry comfort. Always carry a rain cover - Chopta weather changes in minutes.",
};

// ═══ THERMALS ALTITUDE ═══
gearGuideContent["thermals-altitude"] = {
  heroImage: { src: "/gear-thermals-hero.jpg", alt: "Trekking thermal base layers and gear laid out flat with backpack boots and down jacket" },
  intro: "Somewhere around 2,800m on the Kedarnath trail, about two hours out of Jungle Chatti, it started raining. Not a mountain drizzle - a full monsoon downpour. I was wearing a cotton T-shirt under a mid-weight fleece jacket, which felt like a reasonable layering system when I left Gaurikund that morning. Within 20 minutes, I understood exactly why experienced trekkers talk about cotton the way they do.\n\nThe cotton absorbed the moisture - from rain, from my own sweat - and sat against my skin like a cold compress. The fleece above it was useless. My core temperature dropped. My hands shook. I cut the day short and spent that evening reading fabric science in a dhaba in Sonprayag.\n\nThat afternoon is the reason I now own four different base layers and care more about what I wear against my skin than almost anything else in my gear setup.",
  buyingGuide: [
    {
      heading: "Why cotton is the real problem above 3,000m",
      paragraphs: [
        "Cotton absorbs up to seven times its own weight in water. Once wet, it stops insulating entirely - it wicks heat away from your skin through evaporative cooling. At 3,500m with a 15 km/h wind and 6C ambient, this is dangerous.",
        "Synthetic polyester and merino wool both solve this problem differently. Synthetic wicks moisture to the outer surface where it evaporates, keeping skin dry. Merino wool absorbs moisture into the fiber core while keeping the outer surface warm - it insulates even when damp.",
      ],
    },
    {
      heading: "Understanding GSM and what to buy for Indian conditions",
      paragraphs: [
        "GSM (grams per square meter) determines thickness and warmth. For Indian mountain conditions: 100-150 GSM for May-June trekking when days are warm but mornings are cold. 180-200 GSM for October-November when nights drop to -5C. Above 200 GSM only for static cold - sitting at camp, not hiking.",
        "The mistake most people make is buying thermals that are too heavy for active use. A 250 GSM fleece-lined thermal feels wonderful in a store but generates excessive sweat within 30 minutes of uphill hiking, which defeats the entire moisture management purpose.",
      ],
    },
  ],
  products: [
    {
      name: "Quechua Freshwarm Base Layer Set (Synthetic)",
      price: "Rs 699 each / Rs 1,399 set",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.5,
      pros: [
        "Best value base layer available in India at Rs 699 per piece",
        "100% recycled polyester with genuine moisture wicking",
        "150 GSM sweet spot for active trekking",
        "Available at Decathlon Rajpur Road, Dehradun - try for fit"
      ],
      cons: [
        "Develops odor by day 2-3 of continuous wear",
        "Synthetic feel may bother some wearers",
        "Not warm enough alone for -5C static conditions"
      ],
      verdict: "The default recommendation for anyone doing their first mountain trek. At Rs 699 per piece, buy two tops and rotate. The moisture management works, the fit is consistent, and the price means you can treat it as semi-disposable after two seasons.",
      badge: "Best value",
    },
    {
      name: "Quechua 500 Merino Wool Top",
      price: "Rs 1,499",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.7,
      pros: [
        "Genuine merino wool - natural odor resistance for 4-5 days",
        "Insulates even when damp - merino advantage over synthetic",
        "180 GSM handles October Kedarnath conditions",
        "Softer feel against skin than synthetic"
      ],
      cons: [
        "Rs 1,499 is double the synthetic option",
        "Requires careful washing - no machine hot cycle",
        "Slower to dry than synthetic after full saturation"
      ],
      verdict: "The upgrade pick for anyone doing multi-day treks or trekking in October-November. The odor resistance means you can wear it for 4-5 days without the smell becoming a social problem. Worth the premium over synthetic for extended trips.",
      badge: "Best overall",
    },
    {
      name: "Lux Cozi / Jockey Premium Thermal Set",
      price: "Rs 399-599",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 2.5,
      pros: [
        "Cheapest option available everywhere in India",
        "Works for static cold - sitting in a bus, sleeping",
        "Familiar brands with consistent sizing"
      ],
      cons: [
        "Cotton-polyester blend absorbs moisture like cotton",
        "Becomes a cold compress during active hiking",
        "Fleece lining generates excessive sweat on uphills",
        "Heavy for the warmth provided"
      ],
      verdict: "These are winter innerwear, not trekking base layers. The cotton-poly blend absorbs sweat and holds it against your skin. Adequate for sitting in a cold bus or sleeping. Not for active trekking above 3,000m.",
    },
    {
      name: "Zimba Merino Wool Base Layer Set",
      price: "Rs 799-999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.5,
      pros: [
        "Budget merino option at nearly half Decathlon price",
        "Genuine merino wool content",
        "Good odor resistance for the price"
      ],
      cons: [
        "Merino percentage varies by batch - not always 100%",
        "Sizing inconsistent across Amazon sellers",
        "Stitching quality lower than Decathlon",
        "Returns process for sizing issues is slow"
      ],
      verdict: "Budget merino gamble. When you get a good batch, the value is excellent. When the merino percentage is lower than advertised, you are wearing a synthetic with merino marketing. Buy from sellers with easy returns.",
    },
    {
      name: "Van Heusen Active Thermal Top",
      price: "Rs 999-1,299",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.3,
      pros: [
        "Better moisture management than Lux Cozi",
        "Polyester dominant blend with decent wicking",
        "Consistent sizing and availability"
      ],
      cons: [
        "Heavier GSM than needed for active trekking",
        "Not as effective as Decathlon synthetic for moisture",
        "Premium pricing for mid-range performance",
        "Odor buildup by day 2"
      ],
      verdict: "Serviceable if you already own it. Not worth buying specifically for trekking when the Quechua Freshwarm exists at Rs 699 with better moisture management.",
    },
    {
      name: "Columbia Midweight Stretch Base Layer",
      price: "Rs 1,299-1,499 (on sale)",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.2,
      pros: [
        "Omni-Heat reflective lining retains body heat effectively",
        "Four-way stretch for unrestricted movement",
        "Good moisture wicking in the polyester-elastane blend",
        "Proven across global alpine conditions"
      ],
      cons: [
        "Only worth buying at sale price - full price is Rs 2,500+",
        "Availability inconsistent on Amazon India",
        "Sizing runs slightly small for Indian body types"
      ],
      verdict: "Excellent base layer at sale price. The Omni-Heat technology adds genuine warmth for the weight. Watch for Amazon sale events and size up one from your regular size.",
    },
  ],
  conclusion: "First trek, budget setup: Two Quechua Freshwarm tops at Rs 1,398 total - rotate daily, wash and dry overnight. Multi-day or October trekking: Quechua 500 Merino at Rs 1,499 - the odor resistance and damp-warmth properties earn the premium. Never wear cotton against skin above 3,000m. If you own Lux Cozi thermals, use them for sleeping in cold guesthouses, not for hiking. Buy at Decathlon Rajpur Road in Dehradun if possible - the fit matters more than the brand.",
};

// ═══ RAIN PONCHOS CHAR DHAM ═══
gearGuideContent["rain-ponchos-char-dham"] = {
  heroImage: { src: "/gear-ponchos-hero.jpg", alt: "Pilgrims in rain ponchos queuing at Kedarnath temple during monsoon rain" },
  intro: "Here is the situation nobody warns you about before your first Char Dham yatra: you are standing in a temple queue at Badrinath or Gangotri, two hours in, the clouds have opened up, and you are watching the rain hit your backpack at a flat angle. Your rain jacket is doing its job - on you. Your bag, however, is soaked through. The extra fleece you packed for the cold temple interior is wet. Your documents pouch is wet. The person next to you with a poncho is fine. Their bag is covered. They look like a large shapeless mushroom, but they are dry.\n\nThat is the argument for a poncho on a pilgrimage. A poncho covers both you and whatever pack you are carrying. A rain jacket covers only you. For Badrinath, Gangotri, and Yamunotri - where the pilgrimage involves more queuing and short walks than sustained trekking - a poncho is the more practical piece of gear.",
  buyingGuide: [
    {
      heading: "Poncho vs rain jacket: when each wins",
      paragraphs: [
        "On the Kedarnath route, where you are trekking 16 km with elevation gain, a rain jacket genuinely outperforms a poncho for comfort and safety. But for Badrinath, Gangotri, and Yamunotri - where the pilgrimage involves more queuing and short walks - a poncho is more practical. Even for Kedarnath, a poncho is useful for the queue at the top and the sections between Gaurikund and Jungle Chatti where you are walking slowly with a crowd.",
        "The trade-off is real: ponchos are not breathable under sustained walking load, they catch wind badly, and they look awkward in tight crowds. For a 10-14 day Char Dham circuit with variable rain, a poncho that packs small and dries fast is the right tool.",
      ],
    },
  ],
  products: [
    {
      name: "Decathlon Quechua NH100 Poncho",
      price: "Rs 299",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.0,
      pros: ["Rs 299 is practically disposable pricing", "Covers pack up to 50L", "Packs to fist-size, weighs 200g", "Available at Decathlon Rajpur Road, Dehradun"],
      cons: ["Single-season durability - seams weaken after 10-15 heavy rain events", "No ventilation - sweaty under sustained walking", "Thin material snags on pack buckles"],
      verdict: "The default recommendation for a single Char Dham circuit. At Rs 299, if it lasts the 10-14 day yatra and then tears, you got your money's worth. Buy two if you are worried about durability.",
      badge: "Best value",
    },
    {
      name: "Quechua MH500 Hiking Poncho",
      price: "Rs 599",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.5,
      pros: ["Stronger material than NH100 - survives multiple seasons", "Integrated hood with drawcord adjustment", "Ventilation slits under the arms", "Covers pack up to 60L"],
      cons: ["Rs 599 is double the NH100 for incremental improvement", "Still catches wind on exposed sections", "Not breathable enough for sustained Kedarnath trekking"],
      verdict: "The upgrade if you plan to reuse the poncho across multiple trips or if your yatra extends to 2-3 weeks. The ventilation slits make a noticeable difference on the Yamunotri approach where the trail is steep.",
      badge: "Best overall",
    },
    {
      name: "PONDA Budget Poncho (Amazon Generic)",
      price: "Rs 199-299",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 2.5,
      pros: ["Cheapest option available", "Works for a single rain event", "Widely available on Amazon"],
      cons: ["Seams leak within the first heavy rain", "Thin PVC tears easily on pack straps", "Sizing inconsistent - often too small for pack coverage", "Chemical smell when new"],
      verdict: "Emergency rain cover only. If you forgot to buy a poncho and need one at the last minute, this survives one rain event. Do not plan your yatra around it.",
      badge: "Budget pick",
    },
    {
      name: "Marmot PreCip Poncho",
      price: "Rs 4,999-5,999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.3,
      pros: ["NanoPro waterproofing is genuinely breathable", "Ultralight at 280g for the quality level", "Packs smaller than most competitors", "Multi-season durability"],
      cons: ["Rs 4,999-5,999 is 8-10x the Decathlon options", "Overkill for temple queues and short walks", "Availability inconsistent on Amazon India", "Not worth the premium for a single yatra"],
      verdict: "Premium international option for regular trekkers and pilgrims who go every year. The breathability is noticeably better than Decathlon ponchos. Difficult to justify for a single Char Dham trip when the MH500 at Rs 599 does the job.",
    },
    {
      name: "Columbia Watertight Poncho",
      price: "Rs 2,499-3,499",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.8,
      pros: ["Omni-Tech waterproofing performs well", "Good pack coverage", "Durable construction for multi-season use", "Generous sizing for Indian body types"],
      cons: ["Rs 2,499-3,499 is steep for a poncho", "Heavier than Marmot at 350g", "Packs larger than Decathlon options", "Availability varies on Amazon India"],
      verdict: "Mid-range option between Decathlon budget and Marmot premium. If you find it on sale below Rs 2,500, it is good value. At full price, the MH500 at Rs 599 is a better per-trip investment.",
    },
  ],
  conclusion: "Single Char Dham yatra: Quechua NH100 at Rs 299 - buy two for peace of mind. Regular pilgrimages or multi-week yatra: Quechua MH500 at Rs 599 for the ventilation and durability. Regular trekker who also does pilgrimages: Marmot PreCip if you find it under Rs 5,000. Never rely on a generic Amazon poncho for a multi-day pilgrimage. The Rs 100 saved is not worth a wet sleeping bag at Badrinath.",
};

// ═══ RIDING GLOVES LADAKH ═══
gearGuideContent["riding-gloves-ladakh"] = {
  heroImage: { src: "/gear-gloves-hero.jpg", alt: "Rider putting on motorcycle gloves next to bike handlebars before a mountain ride" },
  intro: "There is a specific kind of misery that hits you on the descent from Baralacha La. The pass sits at 4,890m on the Manali-Leh highway, and if you cross it in the morning the temperature at the top is reliably between 2C and 6C. By afternoon in Nubra valley, you are looking at 28-32C.\n\nI learned this the hard way on my first Ladakh ride. I crossed Baralacha La in a pair of Rs 800 mesh gloves I had grabbed off Amazon. By the bottom of the descent, my fingers were numb enough that when I reached for my phone I fumbled it out of the holder entirely. Watched it bounce across the tarmac.\n\nThis guide is about solving that specific problem: hands that work at 5,000m passes and hands that do not overheat in valley heat. The short answer is that one glove cannot do both well, and the right approach is two gloves and a swap at the base of the climb.",
  buyingGuide: [
    {
      heading: "The two-glove system",
      paragraphs: [
        "No single glove handles -5C wind chill at Khardung La and 32C in Nubra Valley. The solution: a mesh summer glove for valley riding and a waterproof insulated glove for passes. Swap at the base of each climb. Carry the unused pair in a tank bag or handlebar pouch for quick access.",
        "The latex liner trick: for rain on passes, a thin latex or rubber glove worn under your riding glove adds waterproofing for Rs 299-499. This is what long-distance touring riders use globally. It works.",
      ],
    },
  ],
  products: [
    {
      name: "Rynox Air GT v2 Gloves",
      price: "Rs 1,799",
      store: "Rynox",
      storeUrl: "https://www.rynox.in",
      rating: 4.3,
      pros: ["Mesh construction moves air aggressively in valley heat", "CE Level 1 knuckle protector", "Touchscreen fingertips work for phone navigation", "Good grip on wet handlebars with silicone palm patches"],
      cons: ["Zero insulation - fingers numb within 3 minutes at Khardung La without layers", "No waterproofing", "Not a pass glove - valley and highway only"],
      verdict: "The summer valley glove in the two-glove system. Excellent below 3,500m and in afternoon heat. Pair with the Storm Evo for passes.",
      badge: "Best for valley riding",
    },
    {
      name: "Rynox Storm Evo Gloves",
      price: "Rs 2,799",
      store: "Rynox",
      storeUrl: "https://www.rynox.in",
      rating: 4.5,
      pros: ["Waterproof membrane keeps hands dry through Rohtang rain", "Insulated lining handles 0-5C pass temperatures", "CE certified knuckle armor", "Gauntlet cuff seals against wind entry at the wrist"],
      cons: ["Too warm for valley riding above 20C", "Touchscreen compatibility is poor with the insulated fingertips", "Rs 2,799 adds up with the Air GT v2 for the two-glove system"],
      verdict: "The pass glove in the two-glove system. Handles Baralacha La, Khardung La, and Rohtang in rain. Swap to the Air GT v2 once you drop below 3,500m.",
      badge: "Best overall",
    },
    {
      name: "Alpinestars SP-8 v3",
      price: "Rs 3,999-4,999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.0,
      pros: ["Premium build quality and leather palm", "Full gauntlet with wrist closure", "CE Level 1 across all impact zones", "Excellent road feel and feedback"],
      cons: ["Not waterproof - needs a liner for rain", "Not insulated - needs a liner for cold passes", "Rs 3,999-4,999 for a single-purpose summer glove", "Overkill for Ladakh speeds - designed for sport riding"],
      verdict: "Premium summer glove for riders who prioritize road feel and protection over weather versatility. At Ladakh speeds (60-80 kmph average), the Rynox Air GT v2 at Rs 1,799 provides adequate protection for less than half the price.",
    },
    {
      name: "Endura MT500 D3O Gloves",
      price: "Rs 3,500",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.8,
      pros: ["D3O impact protection - hardens on impact", "Good grip in wet conditions", "Mid-weight insulation works for moderate cold", "Versatile for cycling and motorcycling"],
      cons: ["Not motorcycle-specific CE certification", "D3O coverage limited to knuckles only", "Availability inconsistent in India", "Not warm enough for Khardung La without a liner"],
      verdict: "Interesting option for adventure cyclists doing Manali-Leh by bicycle. For motorcycle riders, the Rynox options are better value with motorcycle-specific certification.",
    },
    {
      name: "Budget Mesh Gloves (Amazon Generic)",
      price: "Rs 799-1,199",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 2.0,
      pros: ["Cheapest option available", "Basic knuckle padding", "Work for city riding in warm weather"],
      cons: ["No CE certification - protection claims unverifiable", "Stitching fails under sustained cold and wet use", "Palm grip deteriorates on wet handlebars", "Fingers numb within minutes at any pass above 4,000m"],
      verdict: "Not recommended for Ladakh. The difference between Rs 800 generic gloves and Rs 1,799 Rynox Air GT is genuine protection and durability. On a trip where your hands control a motorcycle at altitude, this is not the place to save Rs 1,000.",
      badge: "Not recommended",
    },
  ],
  conclusion: "The two-glove system for Ladakh: Rynox Air GT v2 (Rs 1,799) for valleys and highways below 3,500m + Rynox Storm Evo (Rs 2,799) for passes above 4,000m and rain. Total: Rs 4,598, weight under 400g for both pairs. Add latex liners (Rs 299-499) for unexpected rain with the Air GT. Never cross a pass above 4,500m in mesh gloves - numb fingers at 80 kmph on a mountain descent is a genuine safety risk, not a comfort preference.",
};

// ═══ SHOES VAISHNO DEVI ═══
gearGuideContent["shoes-vaishno-devi"] = {
  heroImage: { src: "/gear-shoes-vd-hero.jpg", alt: "Quechua trekking shoe on a rocky mountain ledge with snow-capped Himalayan peaks behind" },
  intro: "The Vaishno Devi yatra is not a wilderness trek. From Katra at 1,584m up to the Bhawan, the trail is paved - concrete paths, cut stone steps, and near the shrine itself, polished marble. You pass chai stalls, crowd control barriers, loudspeakers, and tens of thousands of other pilgrims. Thinking about this trip the same way you would think about a Kedarnath or Chopta trek leads to the wrong shoe choices.\n\nAnd yet, footwear still matters enormously on this trail. I was standing near the inner sanctum steps on a morning when the marble was wet from overnight cleaning, watching a man in rubber slippers attempt the steps. He went down on the third step. His knee hit the marble. A few meters away, a woman in low-cut trail runners moved through the same stretch without a second thought, her outsole gripping the slick surface.\n\nThat image - rubber slipper on wet marble versus trail runner on wet marble - is the entire footwear argument for Vaishno Devi condensed into about eight seconds.",
  buyingGuide: [
    {
      heading: "What the Vaishno Devi trail actually demands from a shoe",
      paragraphs: [
        "13 km each way. Total elevation gain roughly 1,200m. Surface is 85% paved (concrete, stone steps, marble) and 15% packed earth or rough stone on the newer sections. The key demand is grip on wet polished stone - not mud, not scree, not loose gravel. This is fundamentally different from what a Kedarnath shoe needs.",
        "Cushioning matters more here than on a mountain trek because the surface is hard and repetitive. 26 km of walking on concrete and stone with 2,400m of cumulative vertical stresses knees and ankles differently than soft trail. A shoe with good midsole cushioning reduces fatigue significantly.",
      ],
    },
  ],
  products: [
    {
      name: "Adidas Terrex AX2R (Low Cut)",
      price: "Rs 4,499-4,999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.3,
      pros: ["AdiWear outsole grips wet marble and polished stone well", "Continental rubber compound - the same used on car tires", "Good midsole cushioning for 26 km of paved walking", "Works as both trail and urban shoe after the yatra"],
      cons: ["No waterproofing on base model - mesh upper", "Rs 4,499-4,999 is the highest price for a pilgrimage shoe", "Only dips under Rs 5,000 during Amazon sales", "Low cut offers no ankle support"],
      verdict: "The best grip-on-wet-stone shoe on this list. The Continental rubber compound is genuinely superior on marble and polished surfaces. Worth the price if you plan to use it beyond the yatra.",
      badge: "Best grip",
    },
    {
      name: "Quechua NH500 Waterproof (Low Cut)",
      price: "Rs 2,999",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.5,
      pros: ["Waterproof membrane keeps feet dry in monsoon queues", "Good outsole grip on wet concrete and stone", "Comfortable from day one - minimal break-in", "Rs 2,999 is good value for waterproof + grip"],
      cons: ["Low cut - no ankle support on rough sections", "Slightly heavier than the Adidas at 620g", "Waterproofing means less breathability in summer heat"],
      verdict: "The best all-round choice for Vaishno Devi. Waterproofing handles the wet marble problem and monsoon queues. Grip is reliable on paved and stone surfaces. Comfortable for the full 26 km round trip.",
      badge: "Best overall",
    },
    {
      name: "Skechers GoWalk 5",
      price: "Rs 2,999-3,999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.8,
      pros: ["Best cushioning on this list - GOwalk insole is genuinely comfortable", "Ultra-lightweight at 450g per pair", "Slip-on convenience for temple protocols", "Works as a daily walking shoe"],
      cons: ["Outsole grip on wet marble is below average", "No waterproofing - mesh upper soaks through", "No ankle support", "Not designed for any terrain rougher than pavement"],
      verdict: "The comfort choice for pilgrims with knee or joint issues who need maximum cushioning. The grip trade-off on wet marble is real - walk deliberately on the wet temple steps. Best for dry-season yatras.",
    },
    {
      name: "Quechua Arpenaz 50 Hiking Shoe",
      price: "Rs 1,499",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 3.5,
      pros: ["Rs 1,499 is the best value on this list", "Decent outsole for paved and stone surfaces", "Available at Decathlon - try before buying", "Light at 550g"],
      cons: ["No waterproofing", "Cushioning is basic - fatigue sets in on the descent", "Outsole not as grippy as NH500 or Terrex on wet surfaces", "Build quality is one-two season"],
      verdict: "Budget pick that gets the job done for a single Vaishno Devi trip. If you plan to trek regularly, spend the extra Rs 1,500 on the NH500.",
      badge: "Budget pick",
    },
    {
      name: "Woodland GH Series (Mid-Cut)",
      price: "Rs 2,500-3,500",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.3,
      pros: ["Mid-cut provides ankle support on rough sections", "Leather upper is durable", "Woodland brand recognition in India", "Works for light trail and urban use"],
      cons: ["Heavy at 800-900g per pair", "Leather needs break-in period of 5-7 days", "Outsole grip on wet polished stone is mediocre", "Not designed for sustained walking - fatigue from weight"],
      verdict: "The shoe many Indian pilgrims default to because of brand familiarity. Functional but heavier and less grippy than purpose-built options. If you already own a pair, it works. Do not buy new for Vaishno Devi when the NH500 exists.",
    },
    {
      name: "Campus Hurricane II",
      price: "Rs 1,999-2,499",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 2.8,
      pros: ["Widely available and affordable", "Light at 500g", "Adequate for dry paved surfaces"],
      cons: ["Minimal outsole grip on wet stone", "No waterproofing - mesh upper", "Reports of sole separation on the descent", "Cushioning inadequate for 26 km"],
      verdict: "Works for the uphill in dry conditions. Risky on the descent when fatigue and wet surfaces combine. Spending Rs 500 more on the Arpenaz 50 or Rs 1,000 more on the NH500 is a better investment in your knees.",
    },
  ],
  conclusion: "Best overall for Vaishno Devi: Quechua NH500 Waterproof at Rs 2,999 - grip, waterproofing, and comfort for the full 26 km. Best grip on wet marble: Adidas Terrex AX2R at Rs 4,499-4,999 on sale. Best for joint issues: Skechers GoWalk 5 for cushioning, but watch the wet marble. Budget: Quechua Arpenaz 50 at Rs 1,499 for a single trip. Never wear rubber slippers, leather sandals, or flat-soled sneakers on this trail. The marble steps at the Bhawan are the test, and the wrong sole fails it painfully.",
};

// ═══ DAYPACK PILGRIMAGE ═══
gearGuideContent["daypack-pilgrimage"] = {
  heroImage: { src: "/gear-daypack-hero.jpg", alt: "Orange daypack with water bottle resting on rocks near a mountain stream" },
  intro: "A pilgrimage pack is not a trek pack. This distinction matters more than most gear articles acknowledge. When you are walking to Kedarnath or Vaishno Devi, you will spend time on trails - but you will also spend two to four hours standing in queues that barely move. You are shuffling forward in dense crowds, removing your shoes at the gate, managing offerings in one hand, holding prasad you do not want to crush, and often doing all of this in rain.\n\nOn my first Kedarnath trip, I made it to the temple complex with my full 45L pack on. For three hours in the crowd outside the sanctum, I was that person. The pack stuck out behind me, people kept walking into it, and every time someone bumped the bag I reflexively grabbed for the hip belt. It was a simple planning failure, and it made the best part of the trip more stressful than it needed to be.",
  buyingGuide: [
    {
      heading: "What a pilgrimage day bag carries",
      paragraphs: [
        "Water bottle (1L), rain poncho or light rain jacket, warm layer (fleece or down), phone and power bank, wallet and documents, small first aid kit, prasad/offerings, sunscreen, and snacks. Total weight: 3-5 kg. Total volume: 10-20L. The bag needs to be front-accessible, water-resistant, comfortable for 4-6 hours of wear including standing, and secure against pickpockets in dense temple crowds.",
      ],
    },
  ],
  products: [
    {
      name: "Decathlon NH100 10L",
      price: "Rs 799",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.0,
      pros: ["Lightest pack on this list at 220g", "10L is the right size for temple visits", "Simple front zip access", "Water-resistant fabric handles light rain"],
      cons: ["No anti-theft features", "No hip belt - all weight on shoulders", "Too small if carrying a full fleece and rain jacket", "No dedicated water bottle pocket"],
      verdict: "Best for short pilgrimages where you are carrying minimal gear. Vaishno Devi day trip from Katra, Badrinath temple visit from hotel. Not enough volume for Kedarnath where you need layers and food.",
      badge: "Budget pick",
    },
    {
      name: "Quechua NH500 20L",
      price: "Rs 1,299",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.5,
      pros: ["20L fits all pilgrimage essentials plus layers", "Rain cover included", "Anti-theft back panel zip", "Padded shoulder straps comfortable for 4-6 hours"],
      cons: ["Rs 1,299 is mid-range for a day bag", "20L can feel large in tight temple queues", "No hip belt"],
      verdict: "The default recommendation. 20L handles the full Kedarnath temple queue load: water, layers, food, documents, offerings. The included rain cover and anti-theft zip are genuine value-adds for pilgrimage use.",
      badge: "Best overall",
    },
    {
      name: "Skybags Bingo 19L",
      price: "Rs 899-1,199",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.5,
      pros: ["Familiar Indian brand with consistent sizing", "Multiple compartments for organization", "Laptop sleeve works for tablet/documents", "Looks like a regular backpack - not out of place in towns"],
      cons: ["Not water-resistant - needs a separate rain cover", "No chest or hip strap", "Padding minimal for 4+ hour wear", "Urban design not optimized for trail carry"],
      verdict: "Functional if you already own one. Not worth buying specifically for a pilgrimage when the NH500 exists at a similar price with rain cover and better trail features.",
    },
    {
      name: "Wildcraft Nitro 18L",
      price: "Rs 1,499-1,999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.8,
      pros: ["Water-resistant fabric", "Good build quality for the price", "Chest strap for stability", "Indian brand with wide availability"],
      cons: ["Rs 1,499-1,999 is premium for an 18L daypack", "No rain cover included", "Slightly overbuilt for a simple temple bag"],
      verdict: "Solid option if Decathlon is not accessible in your city. The water-resistant fabric is genuine. For Decathlon buyers, the NH500 at Rs 1,299 with rain cover is better value.",
    },
    {
      name: "American Tourister Zing 21L",
      price: "Rs 1,299-1,499",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.3,
      pros: ["Durable build - AT warranty", "Comfortable padding", "Multiple internal organizers", "Professional look for combined travel"],
      cons: ["Not water-resistant at all", "No trail features - urban backpack", "Heavy for the volume at 650g", "No chest strap or hip belt"],
      verdict: "A travel backpack, not a pilgrimage pack. Works if you are combining a temple visit with city travel and want one bag. For dedicated pilgrimage use, the NH500 is more practical.",
    },
    {
      name: "Safari 20L Laptop Backpack",
      price: "Rs 799-999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.0,
      pros: ["Cheapest 20L option", "Basic organization pockets", "Widely available"],
      cons: ["No water resistance", "Thin padding - uncomfortable after 2 hours", "Zippers are the first failure point", "Not designed for any outdoor use"],
      verdict: "Emergency option if you need a bag the day before departure. Do not plan your pilgrimage pack around it. The Decathlon NH100 at Rs 799 is purpose-built for outdoor use at the same price.",
    },
  ],
  conclusion: "Kedarnath temple queue + trail: Quechua NH500 20L at Rs 1,299 with rain cover. Quick temple visits (Badrinath, Gangotri from hotel): NH100 10L at Rs 799. Already own a Skybags or Wildcraft: use it, add a separate rain cover. Never take a 40L+ trekking pack into a temple queue - it makes you miserable and everyone behind you uncomfortable.",
};

// ═══ FIRST AID KITS ═══
gearGuideContent["first-aid-kits"] = {
  heroImage: { src: "/gear-firstaid-hero.jpg", alt: "Open first aid kit with bandages antiseptic and medical supplies for mountain travel" },
  intro: "Here is the honest situation in small-town Himalayan pharmacies: if you arrive in Kaza, Keylong, or Guptkashi with a half-empty kit and a problem, you will find cotton wool, regular bandages, paracetamol, Dettol, and ORS sachets. What you will not reliably find: Diamox, blister plasters, elastic crepe bandages, sterile non-stick gauze pads, or waterproof adhesive bandages.\n\nI learned this the hard way in Recong Peo. I wanted Diamox as a precaution. The first pharmacy looked at me blankly. The second said he did not stock it. The third was unsure about the dosage. Four shops, forty minutes, and a headache that was making me impatient. I had been planning to pick it up in Shimla but had skipped the pharmacy there. That was the mistake.\n\nThis guide covers what to pack in a first aid kit for mountain travel in India - pre-built kits vs DIY, altitude-specific additions, and the specific items that small-town pharmacies consistently lack.",
  buyingGuide: [
    {
      heading: "Pre-built kit vs DIY: the honest comparison",
      paragraphs: [
        "Pre-built kits save time but almost always lack altitude-specific items. No pre-built kit sold in India includes Diamox, altitude-specific ORS formulations, or blister plasters designed for trekking. They also tend to include items you will never use (latex tourniquets, safety pins, disposable gloves in bulk) while omitting things you definitely will (tape that sticks to sweaty skin, non-stick gauze for trail abrasions).",
        "The practical approach: buy a pre-built kit as a base, then add the altitude-specific items yourself. Total cost: Rs 800-1,500 for a kit that actually handles mountain situations.",
      ],
    },
  ],
  products: [
    {
      name: "Niscomed First Aid Kit (100 items)",
      price: "Rs 999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.8,
      pros: ["Most comprehensive pre-built kit at this price", "Hard case protects contents in a pack", "Includes scissors, tweezers, thermometer", "100 items covers most basic scenarios"],
      cons: ["No altitude-specific items - no Diamox, no blister plasters", "Includes bulk items you will not use (20+ small bandages)", "Heavy at 650g for the case alone", "Bandage quality is basic"],
      verdict: "Best pre-built base kit. Remove the items you will not need (excess small bandages, safety pins), add Diamox, blister plasters, and ORS. Total weight after customization: around 400g.",
      badge: "Best base kit",
    },
    {
      name: "Johnson & Johnson First Aid Kit",
      price: "Rs 649-799",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.5,
      pros: ["J&J brand quality on bandages and antiseptic", "Compact soft pouch - lighter than Niscomed", "Good antiseptic wipes included", "Familiar brand with reliable adhesives"],
      cons: ["Fewer items than Niscomed", "No scissors or tweezers", "Still no altitude-specific items", "Soft case offers less protection"],
      verdict: "Good if you want quality basics in a lighter package. Add your own scissors, Diamox, blister plasters, and ORS. The J&J adhesive bandages genuinely stick better than generic alternatives.",
    },
    {
      name: "Decathlon Basic First Aid Kit",
      price: "Rs 499",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.0,
      pros: ["Designed for outdoor use - items selected for trail scenarios", "Lightest kit at 280g", "Includes blister plasters - rare in pre-built Indian kits", "Compact roll-up pouch"],
      cons: ["Fewer total items than Niscomed", "No medications included", "Small size means less room for DIY additions", "Basic antiseptic only"],
      verdict: "The most trail-relevant pre-built kit. The included blister plasters alone make it worth choosing over the others for trekking. Add Diamox, ORS, ibuprofen, and your prescriptions.",
      badge: "Best for trekking",
    },
  ],
  conclusion: "Start with the Decathlon Basic Kit (Rs 499) or Niscomed (Rs 999) as a base. Then add: Diamox 250mg x10 tablets (Rs 50-80, buy in Rishikesh or Dehradun), ORS sachets x10 (Rs 100), ibuprofen 400mg x10 (Rs 30), blister plasters x10 if not included (Rs 200-300), elastic crepe bandage x2 (Rs 100), waterproof medical tape (Rs 80), anti-diarrheal tablets x6 (Rs 50), and any personal prescription medications. Total DIY addition cost: Rs 500-700. Total complete mountain first aid kit: Rs 1,000-1,700. Weight: 350-500g. This kit handles everything from blisters to mild AMS to trail falls. It does not handle HACE, HAPE, or fractures - those require descent and evacuation.",
};

// ═══ HEADLAMPS UNDER 1000 ═══
gearGuideContent["headlamps-under-1000"] = {
  heroImage: { src: "/gear-headlamps-hero.jpg", alt: "Trekker with headlamp illuminating a mountain trail at night with tent and Himalayan peaks" },
  intro: "At 3:45 AM in Gaurikund, the parking lot is full of headlamps. Porters, pilgrims, and trekkers assembling their packs in the dark before the 16 km climb to Kedarnath temple. I was there last September, and I was the one standing at the edge of the lot with my phone flashlight on, watching everyone else move efficiently up the trail while I tried to balance my pack straps and keep the phone pointed somewhere useful with a third hand I do not have.\n\nBy the time I reached Jungle Chatti - roughly 3 km in - my phone was at 25% charge, down from 60% at the start. The flashlight had run for less than two hours and it had taken a sixth of my battery. I borrowed a friend's Decathlon headlamp and my phone sat at 25% for the rest of the day.\n\nThat experience is why I wrote this article. The phone flashlight argument sounds reasonable until you are on a pre-dawn start with 11 km still to go, your hands full, and your navigation, camera, and emergency communication device slowly going dark.",
  buyingGuide: [
    {
      heading: "Four reasons a headlamp beats your phone",
      paragraphs: [
        "Hands-free operation: your hands carry trekking poles, adjust pack straps, hold railings on steep sections, and manage food and water. A phone flashlight requires one hand permanently committed. A headlamp points wherever your head points. Weight: 50-80g vs 200g for a phone. Battery: a headlamp runs 30-50 hours on low mode vs 2-3 hours of phone flashlight draining your only navigation and emergency device. Red mode: preserves night vision in shared tents without blinding your tent-mates.",
      ],
    },
  ],
  products: [
    {
      name: "Decathlon Forclaz HL100",
      price: "Rs 499",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.3,
      pros: ["Rs 499 is the best value headlamp in India", "50 lumens on high - adequate for trail navigation", "30+ hours on low mode with AAA batteries", "IPX4 water resistance - handles rain on the trail"],
      cons: ["50 lumens is not enough for scrambling or technical terrain", "AAA batteries need spares - not rechargeable", "No red mode", "Beam is flood only - no focused spot"],
      verdict: "The default recommendation for anyone who does not own a headlamp. At Rs 499, the cost of not buying one is higher than buying one. Adequate for pre-dawn Kedarnath starts, camp use, and emergency situations.",
      badge: "Best value",
    },
    {
      name: "Decathlon Trek 500",
      price: "Rs 799",
      store: "Decathlon",
      storeUrl: "https://www.decathlon.in",
      rating: 4.6,
      pros: ["200 lumens on high - serious trail visibility", "USB rechargeable - no spare batteries needed", "Red mode preserves night vision in shared tents", "IPX4 water resistance"],
      cons: ["Rs 799 is 60% more than the HL100", "Battery life: 4 hours on high, 20 hours on low", "USB-C cable not included - uses micro-USB", "Slightly heavier at 75g"],
      verdict: "The upgrade pick. 200 lumens lights up the trail properly for fast pre-dawn starts. Red mode is genuinely useful in shared tent or dharamshala situations. USB rechargeable means you charge from your power bank instead of carrying spare AAAs.",
      badge: "Best overall",
    },
    {
      name: "Nitecore NU25",
      price: "Rs 999",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.5,
      pros: ["360 lumens burst mode - brightest on this list", "USB-C rechargeable", "Red mode + high CRI mode for camp use", "Ultralight at 28g - lightest headlamp available"],
      cons: ["Rs 999 is at the top of the budget", "Burst mode drains battery in under 2 hours", "Amazon availability can be inconsistent", "Overkill for most pilgrimage routes"],
      verdict: "The premium pick for weight-conscious trekkers and regular night hikers. 28g is essentially weightless. The 360 lumen burst mode is more than most people need. Worth it if you trek frequently and value the USB-C and red mode.",
    },
    {
      name: "Foxelli MX500",
      price: "Rs 699-799",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.8,
      pros: ["Bright at 165 lumens", "Both spot and flood beam modes", "Red mode included", "Comfortable elastic headband"],
      cons: ["AAA batteries, not rechargeable", "Heavier at 90g with batteries", "Amazon-only brand - no local service", "IPX5 rating is good but unverified independently"],
      verdict: "Solid mid-range option from Amazon. The dual beam (spot + flood) is useful on varied terrain. The AAA battery requirement is a downside vs USB rechargeable options at similar prices.",
    },
    {
      name: "Generic Amazon Headlamps Under Rs 300",
      price: "Rs 150-299",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 2.0,
      pros: ["Extremely cheap", "Works for emergency one-time use", "Available next-day on Amazon"],
      cons: ["Lumen claims are consistently overstated by 3-5x", "Battery life is unpredictable", "Water resistance is often nonexistent despite claims", "Headband breaks under sustained use"],
      verdict: "Not recommended. A Rs 300 headlamp that dies on the Kedarnath trail at 3 AM is not worth the Rs 200 saved over the HL100. Buy the Decathlon option.",
      badge: "Not recommended",
    },
  ],
  conclusion: "First headlamp, budget minimum: Forclaz HL100 at Rs 499. It works. Best under Rs 1,000: Trek 500 at Rs 799 for USB recharging, 200 lumens, and red mode. Ultralight trekkers: Nitecore NU25 at Rs 999 for 28g weight and USB-C. Never rely on your phone flashlight for pre-dawn starts on mountain trails. The Rs 499 headlamp is cheaper than the power bank charge you will waste on a phone flashlight, and it frees both hands for the trail.",
};

// ═══ SUNSCREEN MOUNTAIN ═══
gearGuideContent["sunscreen-mountain"] = {
  heroImage: { src: "/gear-sunscreen-hero.jpg", alt: "Sunscreen bottle on a mountain rock with water glistening in the background" },
  intro: "UV radiation increases roughly 8-10% for every 1,000m of altitude gain. At 3,500m, you are receiving approximately 30-35% more UV than at sea level. Less atmosphere means less filtering. Snow and light-colored granite reflect UV back at you from below. A full overcast day above 3,000m can still burn you through cloud cover because UVA passes through clouds far more readily than UVB.\n\nSunburn on the Kedarnath trail is one of the most reliably underestimated hazards. I have seen people leave Gaurikund at 6 AM with sunscreen applied, trek six hours up and four hours back, and arrive at Sonprayag looking like they spent the afternoon on a beach in Goa - which, in UV terms, they effectively did.\n\nThis article covers sunscreen specifically for mountain UV in India: what SPF and PA ratings actually mean at altitude, which Indian brands hold up under sweat and altitude, and the reapplication schedule that most people skip.",
  buyingGuide: [
    {
      heading: "SPF and PA ratings at altitude: what the numbers mean",
      paragraphs: [
        "SPF measures UVB protection only. SPF 30 blocks 97% of UVB. SPF 50 blocks 98%. The difference between SPF 30 and SPF 50 is 1% - but at altitude where UV is 30-35% stronger, that 1% matters over a 10-hour trek day. Use SPF 50 minimum above 3,000m.",
        "PA rating measures UVA protection. PA+++ is good. PA++++ is better. UVA causes long-term skin damage and passes through clouds. At altitude, PA++++ is worth seeking out. Most Indian dermatologist brands now offer PA++++ formulations.",
      ],
    },
    {
      heading: "The reapplication problem",
      paragraphs: [
        "Sunscreen effectiveness degrades after 2 hours of application regardless of SPF. Sweat accelerates this. On a 10-hour trek day, you need to reapply 4-5 times. Most people apply once at the start and never again. That single application protects you for the first 2 hours of a 10-hour exposure.",
        "Practical fix: carry a small tube (50-100ml) in your chest pocket or hip belt pouch. Set a phone timer for every 2 hours. Reapply to face, ears, back of neck, and hands - the areas that burn fastest at altitude.",
      ],
    },
  ],
  products: [
    {
      name: "Minimalist SPF50 PA++++ Sunscreen",
      price: "Rs 399-449",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.5,
      pros: ["PA++++ highest UVA protection", "Non-greasy finish - does not feel heavy under sweat", "No white cast on Indian skin tones", "Indian brand with transparent ingredient list"],
      cons: ["50ml tube needs replacement on multi-day treks", "Slight sting if applied near eyes with sweat", "Can pill under heavy sweating if over-applied"],
      verdict: "The best mountain sunscreen available in India for the price. The PA++++ rating and non-greasy formula make it the right choice for sustained altitude exposure. Carry two 50ml tubes for a 5+ day trek.",
      badge: "Best overall",
    },
    {
      name: "Re'equil Ultra Matte SPF50 PA++++",
      price: "Rs 499-549",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.3,
      pros: ["Matte finish stays dry under sweat better than most", "PA++++ UVA protection", "Good for oily skin - controls shine at altitude", "No white cast"],
      cons: ["Rs 499-549 is slightly higher than Minimalist", "45ml tube is smaller", "Reapplication can feel chalky after 3rd application"],
      verdict: "Best for oily or combination skin types that struggle with greasy sunscreen feel during sweaty trekking. The matte finish is noticeably better than Minimalist for sweat-prone faces.",
    },
    {
      name: "Dermaco Sun Expert SPF50 PA+++",
      price: "Rs 449-499",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.8,
      pros: ["Good broad-spectrum coverage", "Lightweight gel texture", "Absorbs quickly", "60ml tube lasts longer per application"],
      cons: ["PA+++ not PA++++ - one tier lower UVA protection", "Gel formula washes off faster in heavy sweat", "Needs more frequent reapplication than cream formulas"],
      verdict: "Good budget option but the PA+++ rating means one tier lower UVA protection than the Minimalist or Re'equil. Adequate for day hikes. For multi-day altitude exposure, spend the extra Rs 50 on PA++++.",
    },
    {
      name: "Neutrogena Ultra Sheer SPF50+",
      price: "Rs 549-649",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.0,
      pros: ["International brand with proven UV filters", "SPF50+ exceeds the SPF50 minimum", "Dry-touch formula works well under sweat", "Widely available in pharmacies across India"],
      cons: ["Rs 549-649 is the highest price for a 50ml tube", "Can leave a slight white cast on darker skin", "Strong chemical sunscreen scent"],
      verdict: "The pharmacy fallback. If you forgot sunscreen and need to buy it in Rishikesh or Haridwar before the trek, Neutrogena is reliably stocked. Performance is solid. Price premium is for availability, not superiority.",
    },
    {
      name: "Lotus Herbals Safe Sun SPF50",
      price: "Rs 249-299",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 3.0,
      pros: ["Cheapest SPF50 option on this list", "Widely available everywhere in India", "Large 100g tube lasts multiple trips", "Familiar Indian brand"],
      cons: ["Heavy cream formula feels greasy at altitude", "White cast noticeable on medium-dark skin", "PA rating not clearly specified on packaging", "Reapplication creates buildup"],
      verdict: "Budget option that works if applied and reapplied properly. The greasy feel is the main complaint at altitude where sweat mixes with the heavy cream base. For Rs 150 more, the Minimalist is a significantly better experience.",
      badge: "Budget pick",
    },
    {
      name: "La Shield SPF50 Sunscreen (Glenmark)",
      price: "Rs 449-499",
      store: "Amazon",
      storeUrl: "https://www.amazon.in",
      rating: 4.2,
      pros: ["Dermatologist-recommended brand", "Good PA+++ protection", "Gel-cream hybrid texture balances absorption and coverage", "Available in pharmacies - good for last-minute purchase"],
      cons: ["PA+++ not PA++++", "50ml tube standard", "Slightly sticky feel in high humidity"],
      verdict: "Solid pharmacy option with good dermatologist credentials. The gel-cream texture is a good middle ground between the heavy Lotus cream and the light Minimalist formula.",
    },
  ],
  conclusion: "Best for mountain trekking: Minimalist SPF50 PA++++ at Rs 399-449. Best for oily skin: Re'equil Ultra Matte SPF50 PA++++ at Rs 499-549. Budget: Lotus Herbals at Rs 249-299 - works if you tolerate the heavy feel. Pharmacy fallback: Neutrogena Ultra Sheer or La Shield. Always SPF50 minimum above 3,000m. Always PA+++ or PA++++. Always reapply every 2 hours. Carry the tube in a chest pocket, not buried in your pack. Apply to ears and back of neck - the two spots everyone forgets.",
};
