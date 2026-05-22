export const DESTINATIONS = [
  { name: "Kedarnath", slug: "kedarnath", info: "3,583m · Uttarakhand", note: "16 km trek to the Jyotirlinga", temp: "4°⛅", image: "/kedarnath.jpg", grad: "linear-gradient(150deg,#2d1b60,#5a3d7a 60%,#8a6a4a)", rot: -2, color: "#7c3aed", type: "pilgrimage" as const, activities: ["trekking", "pilgrimage"] as string[],
    wx: { icon: "⛅", temp: 4, feels: 1, hum: 55, wind: 22, aqi: 32, aqiLabel: "Good", aqiColor: "#22c55e", cond: "Partly cloudy", alt: "3,583m", sunrise: "5:42 AM", sunset: "6:58 PM",
      forecast: [{ day: "Tomorrow", icon: "☀️", hi: 8, lo: 0 },{ day: "Thursday", icon: "⛅", hi: 6, lo: -2 },{ day: "Friday", icon: "🌧️", hi: 4, lo: -3 }] },
    routes: [
      { route: "Rishikesh → Rudraprayag", status: "open" as const, note: "NH-7, clear" },
      { route: "Rudraprayag → Guptkashi", status: "open" as const, note: "Narrow road" },
      { route: "Guptkashi → Sonprayag", status: "open" as const, note: "Clear" },
      { route: "Gaurikund → Kedarnath", status: "open" as const, note: "Trek, maintained" },
    ],
    packItems: ["Thermals ×2", "Trekking shoes", "Rain poncho", "Fleece jacket", "Power bank", "First aid kit", "Cash ₹10K+", "Char Dham e-pass"],
    emergency: [{ name: "SDRF Uttarakhand", number: "1070" }, { name: "Rudraprayag Police", number: "01364-233512" }, { name: "Disaster Helpline", number: "112" }],
    quickFacts: [{ icon: "🥾", label: "Trek distance", value: "16 km" }, { icon: "⏱️", label: "Duration", value: "4–6 days" }, { icon: "💰", label: "Budget", value: "₹5K–35K" }, { icon: "📋", label: "Registration", value: "Mandatory" }],
  },
  { name: "Spiti Valley", slug: "spiti", info: "3,650m · Himachal", note: "cold desert, ancient monasteries", temp: "10°☀️", image: "/spiti.jpg", grad: "linear-gradient(150deg,#3a3020,#5a5030 60%,#3a5040)", rot: 1.5, color: "#b45309", type: "adventure" as const, activities: ["road-trip", "biking", "camping"] as string[],
    wx: { icon: "☀️", temp: 10, feels: 7, hum: 25, wind: 8, aqi: 28, aqiLabel: "Good", aqiColor: "#22c55e", cond: "Clear sky", alt: "3,650m", sunrise: "5:38 AM", sunset: "7:12 PM",
      forecast: [{ day: "Tomorrow", icon: "☀️", hi: 18, lo: 2 },{ day: "Thursday", icon: "☀️", hi: 17, lo: 1 },{ day: "Friday", icon: "⛅", hi: 14, lo: 0 }] },
    routes: [
      { route: "Manali → Rohtang", status: "open" as const, note: "Clear" },
      { route: "Rohtang → Batal", status: "partial" as const, note: "BRO repair" },
      { route: "Batal → Kunzum → Kaza", status: "open" as const, note: "Gravel descent" },
      { route: "Sumdo → Reckong Peo", status: "partial" as const, note: "Rockfall zone" },
    ],
    packItems: ["Down jacket", "Thermals ×2", "Jerry can (fuel)", "Cash ₹15K+", "Power bank ×2", "Sleeping bag", "Sunglasses UV400", "ILP + Rohtang permit"],
    emergency: [{ name: "Kaza PHC", number: "01906-222340" }, { name: "BRO Helpline", number: "1800-180-6763" }, { name: "Disaster Helpline", number: "112" }],
    quickFacts: [{ icon: "🛣️", label: "Circuit", value: "~630 km" }, { icon: "⏱️", label: "Duration", value: "8–12 days" }, { icon: "⛽", label: "Fuel warning", value: "No pump Batal–Kaza" }, { icon: "🏧", label: "ATM warning", value: "Unreliable in Kaza" }],
  },
  { name: "Vaishno Devi", slug: "vaishno-devi", info: "1,584m · J&K", note: "India's most visited shrine", temp: "18°🌤️", image: "/vaishno-devi.jpg", grad: "linear-gradient(150deg,#5a1a1a,#7a3030 60%,#5a2020)", rot: -1, color: "#be123c", type: "pilgrimage" as const, activities: ["trekking", "pilgrimage"] as string[],
    wx: { icon: "🌤️", temp: 18, feels: 17, hum: 65, wind: 8, aqi: 45, aqiLabel: "Good", aqiColor: "#22c55e", cond: "Pleasant", alt: "1,584m", sunrise: "5:35 AM", sunset: "7:20 PM",
      forecast: [{ day: "Tomorrow", icon: "🌤️", hi: 24, lo: 14 },{ day: "Thursday", icon: "☀️", hi: 26, lo: 15 },{ day: "Friday", icon: "⛅", hi: 22, lo: 13 }] },
    routes: [
      { route: "Jammu → Katra", status: "open" as const, note: "NH-44, good" },
      { route: "Katra → Bhawan", status: "open" as const, note: "Trek, normal crowd" },
    ],
    packItems: ["Comfortable shoes", "Light jacket", "Rain poncho", "Water bottle", "Power bank", "Cash ₹3K+", "Aadhaar original", "Yatra slip printed"],
    emergency: [{ name: "Shrine Board", number: "1800-180-1988" }, { name: "Katra Police", number: "01991-232500" }, { name: "Disaster Helpline", number: "112" }],
    quickFacts: [{ icon: "🥾", label: "Trek distance", value: "13 km" }, { icon: "⏱️", label: "Duration", value: "2–3 days" }, { icon: "💰", label: "Budget", value: "₹3K–15K" }, { icon: "📋", label: "Registration", value: "Mandatory" }],
  },
  { name: "Ladakh", slug: "ladakh", info: "3,524m · Ladakh", note: "Khardung La, Pangong, the ride", temp: "12°☀️", image: "/ladakh.jpg", grad: "linear-gradient(150deg,#1a2a4a,#2a5a7a 60%,#3a3a2a)", rot: 2, color: "#0369a1", type: "adventure" as const, activities: ["road-trip", "biking", "camping"] as string[],
    wx: { icon: "☀️", temp: 12, feels: 9, hum: 20, wind: 10, aqi: 22, aqiLabel: "Good", aqiColor: "#22c55e", cond: "Clear sky", alt: "3,524m", sunrise: "5:25 AM", sunset: "7:35 PM",
      forecast: [{ day: "Tomorrow", icon: "☀️", hi: 20, lo: 3 },{ day: "Thursday", icon: "☀️", hi: 19, lo: 2 },{ day: "Friday", icon: "⛅", hi: 16, lo: 1 }] },
    routes: [
      { route: "Manali → Rohtang", status: "open" as const, note: "Clear" },
      { route: "Rohtang → Baralacha", status: "partial" as const, note: "Patches near Darcha" },
      { route: "Baralacha → Pang", status: "open" as const, note: "Clear" },
      { route: "Pang → Leh", status: "open" as const, note: "Via Tanglang La" },
    ],
    packItems: ["Down jacket", "Thermals ×3", "Riding gloves", "Cash ₹20K+", "Power bank ×2", "Sunscreen SPF50", "Diamox", "Vehicle docs + permit"],
    emergency: [{ name: "Leh Hospital", number: "01982-252014" }, { name: "BRO Helpline", number: "1800-180-6763" }, { name: "Disaster Helpline", number: "112" }],
    quickFacts: [{ icon: "🛣️", label: "Manali–Leh", value: "479 km" }, { icon: "⏱️", label: "Duration", value: "10–15 days" }, { icon: "🏔️", label: "Highest pass", value: "Khardung La 5,359m" }, { icon: "⛽", label: "Last fuel", value: "Tandi / Upshi" }],
  },
  { name: "Chopta", slug: "chopta", info: "3,680m · Uttarakhand", note: "gentle trek to highest Shiva temple", temp: "6°⛅", image: "/chopta.jpg", grad: "linear-gradient(150deg,#1a3a2a,#3a6a4a 60%,#2a5a1a)", rot: -0.5, color: "#15803d", type: "adventure" as const, activities: ["trekking", "nature", "camping"] as string[],
    wx: { icon: "⛅", temp: 6, feels: 3, hum: 50, wind: 15, aqi: 35, aqiLabel: "Good", aqiColor: "#22c55e", cond: "Misty", alt: "3,680m", sunrise: "5:40 AM", sunset: "7:00 PM",
      forecast: [{ day: "Tomorrow", icon: "⛅", hi: 12, lo: 1 },{ day: "Thursday", icon: "🌧️", hi: 8, lo: -1 },{ day: "Friday", icon: "⛅", hi: 10, lo: 0 }] },
    routes: [
      { route: "Rishikesh → Ukhimath", status: "open" as const, note: "Via Rudraprayag" },
      { route: "Ukhimath → Chopta", status: "open" as const, note: "Scenic road" },
      { route: "Chopta → Tungnath", status: "open" as const, note: "3.5 km trek" },
    ],
    packItems: ["Fleece jacket", "Trekking shoes", "Rain poncho", "Water bottle", "Power bank", "Cash ₹5K+", "Sunscreen", "First aid kit"],
    emergency: [{ name: "SDRF Uttarakhand", number: "1070" }, { name: "Ukhimath PHC", number: "01364-240235" }, { name: "Disaster Helpline", number: "112" }],
    quickFacts: [{ icon: "🥾", label: "Trek distance", value: "3.5 km" }, { icon: "⏱️", label: "Duration", value: "3–4 days" }, { icon: "💰", label: "Budget", value: "₹4K–12K" }, { icon: "🏔️", label: "Tungnath alt.", value: "3,680m" }],
  },
];

export const SEARCH_DESTINATIONS = [
  ...DESTINATIONS.map(d => ({ name: d.name, slug: d.slug, info: d.info, color: d.color, type: d.type, activities: d.activities })),
  { name: "Valley of Flowers", slug: "valley-of-flowers", info: "3,658m · Uttarakhand", color: "#86198f", type: "adventure" as const, activities: ["trekking", "nature"] },
  { name: "Badrinath", slug: "badrinath", info: "3,133m · Uttarakhand", color: "#6d28d9", type: "pilgrimage" as const, activities: ["pilgrimage", "road-trip"] },
  { name: "Rishikesh", slug: "rishikesh", info: "372m · Uttarakhand", color: "#059669", type: "adventure" as const, activities: ["rafting", "camping", "yoga"] },
];

export const ACTIVITIES = [
  { key: "trekking", label: "Trekking", icon: "🥾" },
  { key: "pilgrimage", label: "Pilgrimage", icon: "🙏" },
  { key: "road-trip", label: "Road trip", icon: "🛣️" },
  { key: "camping", label: "Camping", icon: "⛺" },
  { key: "nature", label: "Nature & wildlife", icon: "🌿" },
  { key: "rafting", label: "Rafting", icon: "🚣" },
  { key: "biking", label: "Biking", icon: "🏍️" },
  { key: "yoga", label: "Yoga & wellness", icon: "🧘" },
] as const;

export const GUIDES = [
  { slug: "acclimatize-above-3000m", title: "How to acclimatize above 3,000m - AMS, Diamox and ascent rules", tag: "Health", min: 14, rot: -1.5, href: "/guides/acclimatize-above-3000m", desc: "Practical acclimatization guide for treks above 3,000m in India. Altitude sickness symptoms, Diamox dosage and timing, safe ascent rates, hydration, and when to descend. Written from Dehradun." },
  { slug: "best-time-char-dham", title: "Best time to visit Char Dham - Kedarnath, Badrinath, Gangotri, Yamunotri", tag: "Planning", min: 16, rot: 1, href: "/guides/best-time-char-dham", desc: "Temple opening dates, month-by-month conditions, crowd windows, helicopter availability, and the honest case for September-October over May. Written from Dehradun." },
  { slug: "packing-4000m", title: "What to pack for 4,000m+ altitude treks in India", tag: "Packing", min: 18, rot: -0.5, href: "/guides/packing-4000m", desc: "The 3-layer clothing system, summer vs late-season gear lists, weight targets under 8 kg, and where to buy everything in Dehradun. Written from experience." },
  { slug: "monsoon-routes", title: "Monsoon travel: which mountain routes to avoid", tag: "Safety", min: 4, rot: -1, href: "/guides/monsoon-routes", desc: "Landslide-prone zones, BRO repair schedules, and safe alternatives during July–September." },
  { slug: "atm-cash-guide", title: "ATM and cash guide for remote Himalayan towns", tag: "Money", min: 20, rot: 0.8, href: "/guides/atm-cash-guide", desc: "Town-by-town ATM reliability, UPI dead zones, network coverage, and cash carry recommendations for Char Dham, Spiti, Ladakh and Vaishno Devi routes. Written from Dehradun." },
  { slug: "char-dham-epass", title: "Char Dham e-pass and permits - how to register online (2026)", tag: "Documents", min: 22, rot: -0.8, href: "/guides/char-dham-epass", desc: "Step-by-step Char Dham registration, daily pilgrim caps, Spiti ILP, Rohtang permit, and Ladakh PAP. Common rejection reasons and what to do. Written from Dehradun." },
  { slug: "kedarnath-budget", title: "Kedarnath trip under Rs 8,000 - a day-by-day budget breakdown", tag: "Budget", min: 18, rot: 1.2, href: "/guides/kedarnath-budget", desc: "Complete day-by-day cost split from Rishikesh to Kedarnath and back. Transport, food, accommodation, and helicopter comparison. 2026 season prices." },
] as const;

export const GEAR = [
  { ic: "🥾", type: "Trekking shoes", name: "Quechua MH500", price: "₹3,999", link: "Amazon", rot: -0.8 },
  { ic: "🧥", type: "Windproof jacket", name: "Forclaz MT500", price: "₹4,999", link: "Decathlon", rot: 1.2 },
  { ic: "🛏️", type: "Sleeping bag -5°C", name: "Naturehike UL", price: "₹3,499", link: "Amazon", rot: -0.5 },
  { ic: "🔋", type: "Power bank 20K", name: "Mi 20000mAh", price: "₹1,499", link: "Amazon", rot: 0.9 },
] as const;

export const FOOTER_LINKS = {
  pilgrimages: [
    { label: "Kedarnath", href: "/kedarnath" },
    { label: "Vaishno Devi", href: "/vaishno-devi" },
    { label: "Badrinath", href: "#" },
    { label: "Gangotri", href: "#" },
    { label: "Yamunotri", href: "#" },
    { label: "Tirupati", href: "#" },
    { label: "Kashi Vishwanath", href: "#" },
  ],
  adventures: [
    { label: "Spiti Valley", href: "/spiti" },
    { label: "Leh–Ladakh", href: "#" },
    { label: "Chopta–Tungnath", href: "#" },
    { label: "Valley of Flowers", href: "#" },
    { label: "Hampta Pass", href: "#" },
    { label: "Rishikesh", href: "#" },
  ],
  tools: [
    { label: "Live road status", href: "/road-status" },
    { label: "Packing checklist", href: "/kedarnath/packing" },
    { label: "Preparedness score", href: "#" },
    { label: "Budget calculator", href: "#" },
    { label: "Gear recommendations", href: "#" },
    { label: "Emergency contacts", href: "#" },
  ],
} as const;
