import { DestinationData } from "./types";

export const kedarnath: DestinationData = {
  slug: "kedarnath",
  name: "Kedarnath",
  tagline: "Trek to the Jyotirlinga at 3,583m",
  region: "Uttarakhand",
  state: "Uttarakhand",
  type: "pilgrimage",
  altitude: 3583,
  temp: 4,
  weather: "⛅",
  season: "April – November",
  duration: "4–6 days",
  budget: { min: 5000, max: 35000 },
  heroGradient: "linear-gradient(150deg, #2d1b60, #5a3d7a 60%, #8a6a4a)",

  // Quick stats shown at top of guide
  quickStats: [
    { label: "Altitude", value: "3,583m", icon: "🏔️" },
    { label: "Trek distance", value: "16 km one way", icon: "🥾" },
    { label: "Season", value: "Apr – Nov", icon: "🗓️" },
    { label: "Duration", value: "4–6 days", icon: "⏱️" },
    { label: "Budget", value: "₹5K – ₹35K", icon: "💰" },
    { label: "Difficulty", value: "Moderate", icon: "📊" },
  ],

  // Introduction — this is the main guide content
  intro: `Kedarnath is one of the twelve Jyotirlingas and the highest among the Char Dham temples, sitting at 3,583 metres in the Garhwal Himalayas. The temple, believed to be over 1,000 years old and attributed to Adi Shankaracharya, survived the devastating 2013 floods while everything around it was destroyed — a fact that draws millions of pilgrims every season.

Getting here requires a 16 km trek from Gaurikund (or a helicopter ride), which means this isn't a casual temple visit. You need to be physically prepared, properly packed, and informed about weather, route conditions, and registration requirements. This guide covers everything from Dehradun — written by someone who lives 3 hours from the trailhead.`,

  // Guide sections — each becomes a collapsible section on the page
  sections: [
    {
      id: "how-to-reach",
      title: "How to reach Kedarnath",
      icon: "🚗",
      content: `**From Delhi (460 km, 12–14 hours by road):**
Reach Haridwar by train or bus, then drive to Sonprayag via Rishikesh → Devprayag → Srinagar → Rudraprayag → Guptkashi. From Sonprayag, shared jeeps run to Gaurikund (5 km). The trek starts at Gaurikund.

**From Dehradun (250 km, 8–10 hours):**
Drive via Rishikesh → Devprayag → Rudraprayag → Guptkashi → Sonprayag. Same route as Delhi but shorter.

**From Rishikesh (228 km, 8–9 hours):**
This is the most common starting point. Regular buses run from Rishikesh ISBT to Guptkashi and Sonprayag.

**Key stops along the route:**
Rishikesh → Devprayag (70 km, 2h) → Srinagar (35 km, 1h) → Rudraprayag (34 km, 1h) → Guptkashi (50 km, 2h) → Sonprayag (30 km, 1h) → Gaurikund (5 km, shared jeep)

**Important:** Private vehicles are NOT allowed beyond Sonprayag. You must take a shared jeep to Gaurikund (₹30–50 per person).`,
    },
    {
      id: "trek",
      title: "The trek: Gaurikund to Kedarnath",
      icon: "🥾",
      content: `**Total distance:** 16 km one way
**Altitude gain:** 1,550m (Gaurikund at 2,039m → Kedarnath at 3,583m)
**Time:** 6–8 hours up, 4–5 hours down
**Difficulty:** Moderate — steep in sections, mostly paved path

**Km-by-km breakdown:**

**Gaurikund to Jungle Chatti (4 km):** Steep initial climb through forest. This is the hardest section for most people. Paved path but relentless uphill. Take it slow.

**Jungle Chatti to Bheembali (3 km):** Slightly easier gradient. Tea shops and rest stops. The path is well-maintained with railings in steep sections.

**Bheembali to Linchauli (3 km):** The gradient eases here. You start getting mountain views. Good rest point at Linchauli — food and chai available.

**Linchauli to Base Camp (3 km):** Relatively flat stretch. The helicopter landing area is visible. You can see the valley opening up.

**Base Camp to Kedarnath Temple (3 km):** Final push. The temple becomes visible in the last kilometre. Emotionally the easiest section because you can see your destination.

**Pony and palki options:**
Pony: ₹2,000–3,500 one way (negotiable, fixed rates at counter)
Palki (palanquin): ₹6,000–12,000 one way (carried by 4 people)
Helicopter: ₹5,500–7,000 one way (multiple operators, book via IRCTC)`,
    },
    {
      id: "registration",
      title: "Registration & e-pass",
      icon: "📋",
      content: `**Mandatory registration** is required for all Char Dham yatris since 2023.

**Online registration:**
Visit registrationandtouristcare.uk.gov.in and register with:
- Aadhaar number
- Mobile number
- Travel dates
- Medical fitness self-declaration

You'll receive a QR-coded e-pass. Print it or keep it on your phone.

**Counter registration:**
Available at Haridwar, Rishikesh, Sonprayag, and other points. But online is faster and avoids queues.

**RFID wristband:**
Issued at Sonprayag. Mandatory. Tracks pilgrim count on the route for safety.

**Medical certificate:**
Not officially mandatory for Kedarnath (unlike Amarnath), but recommended if you have heart conditions, asthma, or BP issues. A basic fitness certificate from any doctor is sufficient.

**Important:** Registration is free. Don't pay anyone for "priority registration" — it's a scam.`,
    },
    {
      id: "best-time",
      title: "Best time to visit",
      icon: "🗓️",
      content: `**Season:** Temple opens in late April/early May (exact date announced by temple committee) and closes in November (around Bhai Dooj).

**May – June:** Best weather. Clear skies, moderate cold (2–15°C). Peak crowd season — expect long queues. Book helicopter early.

**July – August:** Monsoon. Heavy rain, landslide risk on the road. Trek is slippery. NOT recommended unless you're experienced.

**September – October:** Post-monsoon. Excellent weather, fewer crowds than May–June. Clear Himalayan views. Our top recommendation.

**November:** Temple closing season. Very cold (-5 to 5°C). Last few days are less crowded but weather is unpredictable.

**Avoid:** July–August (monsoon) and weekends in May–June (extreme crowding).`,
    },
    {
      id: "budget",
      title: "Budget breakdown",
      icon: "💰",
      content: `**Budget trip (₹5,000–8,000 per person):**
- Transport: ₹1,500–2,500 (bus from Rishikesh + shared jeep)
- Stay: ₹500–1,000/night (dharamshala / GMVN guesthouse at Guptkashi + tent at Kedarnath)
- Food: ₹300–500/day
- Trek: Walk (free)
- Misc: ₹500

**Mid-range trip (₹12,000–20,000):**
- Transport: ₹3,000–5,000 (shared taxi or own car to Sonprayag)
- Stay: ₹1,500–3,000/night (hotel at Guptkashi + guesthouse at Kedarnath)
- Food: ₹500–800/day
- Pony one way: ₹2,500–3,500
- Misc: ₹1,000

**Comfort trip (₹25,000–35,000):**
- Transport: ₹5,000–8,000 (private car or Innova)
- Stay: ₹3,000–5,000/night (good hotel at Guptkashi/Sonprayag)
- Helicopter both ways: ₹11,000–14,000
- Food: ₹800–1,200/day
- Misc: ₹2,000`,
    },
    {
      id: "accommodation",
      title: "Where to stay",
      icon: "🏨",
      content: `**At Guptkashi (most common base):**
Largest selection of hotels. 40 km before Sonprayag. Stay here the night before your trek.
- Budget: GMVN Guesthouse (₹800–1,200), dharamshalas (₹300–500)
- Mid-range: Hotel Kedar, Hotel Mandakini (₹1,500–3,000)
- Comfort: Kedar Camp & Resort, Hotel Kedarnath Inn (₹3,000–5,000)

**At Sonprayag:**
Closer to trailhead but fewer options and noisier (jeep stand).
- GMVN Sonprayag (₹600–1,000)
- Private lodges (₹800–2,000)

**At Kedarnath (near temple):**
Limited, basic, and cold. Book in advance during peak season.
- GMVN Tourist Rest House (₹1,000–2,000)
- Tents near helipad (₹500–1,500)
- Dharamshalas (₹200–500, basic dormitory)
- Private rooms near temple (₹1,500–3,000, limited availability)

**Pro tip:** Stay at Guptkashi, start the trek by 5–6 AM, reach by afternoon. Return next day. Don't plan to stay at Kedarnath unless you specifically want the overnight experience.`,
    },
    {
      id: "safety",
      title: "Safety tips",
      icon: "⚠️",
      content: `**Altitude sickness:**
Kedarnath is at 3,583m. Symptoms include headache, nausea, dizziness. Acclimatize at Guptkashi (1,319m) for a night. Carry Diamox (consult doctor before taking). Descend immediately if symptoms worsen.

**Weather:**
Temperature drops sharply after sunset (0–5°C even in May). Carry warm layers even if it's hot during the day. Rain can start suddenly — carry a poncho.

**Trek safety:**
Wear proper trekking shoes (not sandals or sports shoes). Carry a walking stick. Start early (5–6 AM) to avoid afternoon crowds and rain. Keep your registration e-pass accessible.

**Medical:**
Nearest hospital is at Guptkashi (40 km from Sonprayag). Basic medical aid available at Jungle Chatti and Base Camp on the trek route. Carry personal medicines for 3–4 days.

**Communication:**
BSNL works intermittently on the trek. Jio/Airtel work at Guptkashi and Sonprayag only. Essentially no signal on the trek above Jungle Chatti. Inform family before starting.

**Food and water:**
Plenty of dhabas on the trek route. Food is basic but safe (maggi, rice, dal, chai). Carry a water bottle — refill points are available but not filtered.`,
    },
  ],

  // Weather points along the route
  weatherPoints: [
    { location: "Rishikesh", altitude: 372, temp: 30, weather: "☀️" },
    { location: "Rudraprayag", altitude: 610, temp: 26, weather: "⛅" },
    { location: "Guptkashi", altitude: 1319, temp: 20, weather: "⛅" },
    { location: "Sonprayag", altitude: 1829, temp: 15, weather: "⛅" },
    { location: "Gaurikund", altitude: 2039, temp: 12, weather: "🌤️" },
    { location: "Kedarnath", altitude: 3583, temp: 4, weather: "⛅" },
  ],

  // Road status for this destination
  routes: [
    { from: "Rishikesh", to: "Rudraprayag", status: "open", note: "NH-7, good condition" },
    { from: "Rudraprayag", to: "Guptkashi", status: "open", note: "Narrow mountain road" },
    { from: "Guptkashi", to: "Sonprayag", status: "open", note: "Clear" },
    { from: "Gaurikund", to: "Kedarnath", status: "open", note: "Trek route, well-maintained" },
  ],

  // Packing checklist with affiliate links
  checklist: [
    { category: "Clothing", items: [
      { name: "Thermal innerwear ×2", essential: true, affiliateLink: "https://www.amazon.in/s?k=Thermal+innerwear&tag=travelboa-21", affiliateStore: "Amazon", price: "₹799" },
      { name: "Fleece jacket", essential: true, affiliateLink: "https://www.amazon.in/s?k=Fleece+jacket&tag=travelboa-21", affiliateStore: "Amazon", price: "₹1,499" },
      { name: "Windproof outer jacket", essential: true, affiliateLink: "https://www.decathlon.in/search?Ntt=Windproof+outer+jacket", affiliateStore: "Decathlon", price: "₹2,999" },
      { name: "Trek pants ×2", essential: true },
      { name: "Warm socks ×3", essential: true, affiliateLink: "https://www.amazon.in/s?k=Warm+socks&tag=travelboa-21", affiliateStore: "Amazon", price: "₹399" },
      { name: "Beanie / wool cap", essential: true },
      { name: "Gloves", essential: false, affiliateLink: "https://www.amazon.in/s?k=Gloves&tag=travelboa-21", affiliateStore: "Amazon", price: "₹299" },
      { name: "Rain poncho", essential: true, affiliateLink: "https://www.amazon.in/s?k=Rain+poncho&tag=travelboa-21", affiliateStore: "Amazon", price: "₹249" },
      { name: "Sunglasses UV400", essential: true },
    ]},
    { category: "Gear", items: [
      { name: "Trekking shoes (broken in)", essential: true, affiliateLink: "https://www.decathlon.in/search?Ntt=Trekking+shoes+(broken+in)", affiliateStore: "Decathlon", price: "₹3,999" },
      { name: "Day backpack 25–35L", essential: true, affiliateLink: "https://www.amazon.in/s?k=Day+backpack+25-35L&tag=travelboa-21", affiliateStore: "Amazon", price: "₹1,299" },
      { name: "Rain cover for backpack", essential: true },
      { name: "Walking stick / trekking pole", essential: false, affiliateLink: "https://www.decathlon.in/search?Ntt=Walking+stick+++trekking+pole", affiliateStore: "Decathlon", price: "₹999" },
      { name: "Headlamp / torch", essential: true, affiliateLink: "https://www.amazon.in/s?k=Headlamp+++torch&tag=travelboa-21", affiliateStore: "Amazon", price: "₹499" },
      { name: "Power bank 20,000 mAh", essential: true, affiliateLink: "https://www.amazon.in/s?k=Power+bank+20,000+mAh&tag=travelboa-21", affiliateStore: "Amazon", price: "₹1,499" },
      { name: "Water bottle 1L", essential: true },
    ]},
    { category: "Health", items: [
      { name: "Diamox (altitude sickness)", essential: true },
      { name: "Personal medicines (3–4 days)", essential: true },
      { name: "ORS packets ×5", essential: true },
      { name: "Sunscreen SPF 50+", essential: true, affiliateLink: "https://www.amazon.in/s?k=Sunscreen+SPF+50+&tag=travelboa-21", affiliateStore: "Amazon", price: "₹399" },
      { name: "Lip balm with SPF", essential: false },
      { name: "Basic first aid kit", essential: true },
      { name: "Pain relief spray", essential: false },
    ]},
    { category: "Documents", items: [
      { name: "Aadhaar card (original + copy)", essential: true },
      { name: "Char Dham e-pass (printed)", essential: true },
      { name: "Cash ₹5,000–10,000", essential: true },
      { name: "Emergency contact list", essential: true },
      { name: "Medical insurance copy", essential: false },
    ]},
  ],

  // FAQ for JSON-LD schema
  faq: [
    { q: "How long is the Kedarnath trek?", a: "The Kedarnath trek is 16 km one way from Gaurikund to the temple. Most people take 6-8 hours going up and 4-5 hours coming down. The total altitude gain is 1,550 metres, from 2,039m at Gaurikund to 3,583m at the temple." },
    { q: "Is Kedarnath trek difficult?", a: "The trek is moderate difficulty. The path is paved and well-maintained. The steepest section is the first 4 km from Gaurikund to Jungle Chatti. Altitude is the real challenge, not the terrain. If you can walk 10 km on flat ground without stopping, you can do this trek with proper breaks." },
    { q: "How much does the Kedarnath trek cost?", a: "A budget trip costs ₹5,000-8,000 (walking both ways, dharamshala stays, dhaba food). Mid-range is ₹10,000-20,000 (pony one way, guesthouse). Comfort is ₹20,000-35,000 (helicopter one way, hotel in Guptkashi). This excludes transport to Gaurikund." },
    { q: "Can elderly people visit Kedarnath?", a: "Yes. Pony (₹2,500-3,500), palki/palanquin (₹6,000-12,000), and helicopter (₹5,500-7,000) options are available. Many elderly pilgrims visit every year." },
    { q: "Is helicopter to Kedarnath safe?", a: "Helicopter services are operated by licensed companies (Pawan Hans, etc.) and have a strong safety record. Flights cancel in bad weather. Book via IRCTC HeliYatra." },
    { q: "What is the best month to visit Kedarnath?", a: "September-October for best weather and fewer crowds. May-June for reliable weather but heavy crowds. Avoid July-August (monsoon). The temple opens around late April and closes after Diwali in November." },
    { q: "Is there mobile network at Kedarnath?", a: "BSNL works intermittently at Kedarnath. Jio/Airtel work at Guptkashi and Sonprayag but not on the trek route. Essentially no reliable signal above Jungle Chatti." },
    { q: "How much cash should I carry for Kedarnath?", a: "₹5,000-10,000 per person. There is no ATM at Kedarnath or on the trek. UPI works at some shops in Guptkashi but not reliably on the trek. Last reliable ATM is at Guptkashi." },
    { q: "What is the distance from Dehradun to Kedarnath?", a: "Dehradun to Gaurikund (the trek starting point) is about 250 km by road, taking 8-10 hours via Rishikesh, Devprayag, Rudraprayag, and Guptkashi. From Gaurikund, the 16 km trek begins." },
  ],

  // Emergency contacts specific to this destination
  emergency: [
    { name: "SDRF Uttarakhand", number: "1070" },
    { name: "Rudraprayag Police", number: "01364-233512" },
    { name: "Guptkashi PHC", number: "01364-262240" },
    { name: "Kedarnath Temple Committee", number: "0135-2559898" },
    { name: "Disaster Helpline", number: "112" },
  ],

  // Sub-pages available for this destination
  subPages: [
    { slug: "trek", title: "Trek guide: Gaurikund to Kedarnath", description: "Km-by-km breakdown of the 16 km trek" },
    { slug: "registration", title: "Registration & e-pass", description: "Step-by-step Char Dham registration guide" },
    { slug: "packing", title: "Packing checklist", description: "What to pack with gear buy links" },
    { slug: "helicopter", title: "Helicopter booking", description: "Operators, pricing, and IRCTC process" },
    { slug: "accommodation", title: "Where to stay", description: "Guptkashi, Sonprayag & Kedarnath options" },
    { slug: "budget", title: "Budget breakdown", description: "Budget, mid-range & comfort cost comparison" },
    { slug: "weather", title: "Weather & best time", description: "Month-by-month weather and crowd levels" },
    { slug: "faq", title: "FAQ", description: "Common questions answered" },
  ],

  // SEO
  metaTitle: "Kedarnath Trek 2026: Route, Packing List, Budget & Road Status | TravelBoa",
  metaDescription: "Complete Kedarnath trek guide from Dehradun. 16 km Gaurikund route, packing checklist, helicopter vs trek, budget ₹5K-35K, opening dates, and daily road status updates.",
};
