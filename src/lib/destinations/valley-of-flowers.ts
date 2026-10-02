import type { DestinationData } from "./types";

export const valleyOfFlowers: DestinationData = {
  slug: "valley-of-flowers",
  name: "Valley of Flowers",
  tagline: "A monsoon trek planned around Ghangaria, weather and protected-park rules",
  region: "Garhwal",
  state: "Uttarakhand",
  type: "adventure",
  altitude: 3500,
  temp: 9,
  weather: "Typical cool, wet trekking conditions",
  season: "Jun-Sep",
  duration: "5-7 days",
  budget: { min: 12000, max: 35000 },
  heroGradient: "linear-gradient(150deg,#315b3c,#6f8f4f 55%,#b3779a)",
  heroImage: "/valley-of-flowers.jpg",
  metaTitle: "Valley of Flowers Trek: Route, Ghangaria & Season Guide",
  metaDescription: "Plan the Valley of Flowers trek through Govindghat and Ghangaria, with season trade-offs, Hemkund Sahib decisions, altitude guidance and official resources.",
  quickStats: [
    { label: "Protected status", value: "National park", icon: "🌿" },
    { label: "World Heritage", value: "UNESCO site", icon: "🌏" },
    { label: "Base village", value: "Ghangaria", icon: "🏘️" },
    { label: "Ghangaria altitude", value: "about 3,050m", icon: "🏔️" },
    { label: "Main season", value: "June-September", icon: "🗓️" },
    { label: "Emergency", value: "112 / 1070", icon: "☎️" },
  ],
  intro: `Valley of Flowers is a protected Himalayan landscape, not a roadside viewpoint or a single field that looks identical throughout summer. The trip unfolds in stages: reach the Govindghat side of Chamoli district, walk to Ghangaria, sleep at roughly 3,050 metres, and enter the national park on a separate day. Weather, trail condition and park instructions decide how far you can comfortably explore.

UNESCO recognises Valley of Flowers together with Nanda Devi National Park for outstanding natural beauty and high-altitude biodiversity. The protected property includes alpine meadows, sub-alpine forest and habitat for rare plants and animals. That status changes how the visit should feel. You are entering a monitored ecosystem with limited access, not a flower garden designed around photographs.

The Uttarakhand Tourism route starts from the Govindghat corridor and uses Ghangaria as the base for both Valley of Flowers and Hemkund Sahib. Official tourism pages differ slightly on the approach distance—one describes roughly 13 km and another 15 km—which is a useful warning against building the day around a single exact number. Trail diversions, the vehicle drop point and the chosen endpoint all affect the distance recorded on a watch.

Allow at least five days from a nearby Uttarakhand gateway and more if travelling from Delhi. The valley day should have its own weather margin. Hemkund Sahib is a separate, steeper high-altitude outing and should never be treated as a small extension after the park walk.`,
  comparison: {
    title: "Choose the trip that fits your time and altitude readiness",
    caption: "Every option uses Ghangaria as the practical base. Current park access and trail conditions still need confirmation.",
    columns: ["Valley only", "Valley plus Hemkund", "Second valley day"],
    rows: [
      { label: "Useful length", values: ["5 days from Dehradun/Rishikesh", "6-7 days", "6 days with weather margin"] },
      { label: "Main demand", values: ["Two approach-trek days plus park day", "An additional steep high-altitude day", "More walking but less pressure on one forecast"] },
      { label: "Best for", values: ["First visit focused on the national park", "Pilgrims or strong walkers who want both routes", "Plant, landscape and photography interest"] },
      { label: "Main risk", values: ["Monsoon disruption and fatigue", "Altitude and cumulative leg strain", "Extra stay cost without guaranteed clear weather"] },
      { label: "Do not assume", values: ["Continuous sunshine or peak bloom", "Hemkund is an easy add-on", "Two days will produce identical flowers"] },
    ],
  },
  sections: [
    {
      id: "choose-plan",
      title: "Begin with a five-day structure, then add margin",
      icon: "🧭",
      content: `A rushed Valley of Flowers plan usually fails before the park gate. The long mountain-road approach, the climb to Ghangaria and the park walk are three different travel days. Combining them creates fatigue and removes the flexibility that monsoon terrain requires.

**A practical five-day outline:**
- Day 1: travel from Dehradun or Rishikesh toward Joshimath, Pipalkoti or Govindghat, depending on daylight and the confirmed road plan
- Day 2: reach the authorised trail start and walk to Ghangaria
- Day 3: visit Valley of Flowers and return to Ghangaria
- Day 4: descend to the roadhead and stay in the Joshimath side of the valley
- Day 5: return toward Rishikesh or Dehradun with a full road-day buffer

This is the minimum sensible shape, not a promise that every connection will work. A sixth day can absorb a road delay, a tired approach trek or poor weather. If Hemkund Sahib matters, give it its own day from Ghangaria and keep the descent for the following morning.

Do not attach a same-evening flight or important train to the mountain-road return. The Alaknanda corridor can be slowed by rain, traffic control, road work or a local incident. The cost of one buffer night is often smaller than replacing a missed long-distance journey.

The trip is moderate only when divided properly. Someone who is comfortable walking on a dry city path may still find repeated uphill kilometres, wet stone, mule traffic and a loaded daypack demanding. Train for time on feet and stair climbing, not just a short flat walk.`,
    },
    {
      id: "reach-govindghat",
      title: "Reach Govindghat without turning the road day into a race",
      icon: "🚌",
      content: `The standard road approaches follow the Alaknanda valley through the Rishikesh–Devprayag–Srinagar–Rudraprayag–Karnaprayag–Joshimath side. Uttarakhand Tourism describes the Dehradun-to-Govindghat journey as roughly 310 km and a full mountain-road day. Treat that as orientation rather than a guaranteed duration.

Public buses, shared vehicles and private taxis may all be available on parts of the corridor, but departure points and through-services change. Confirm the current service with the state transport operator, bus station or a reputable local operator. A timetable copied from an old article is not enough for a connection that depends on daylight.

Govindghat is the traditional route reference, but the actual walking start may involve a local vehicle transfer toward Pulna or another currently authorised drop point. Ask the accommodation or local counter where vehicles stop during your dates. This is one reason distance figures vary between official and commercial itineraries.

If travelling in a private vehicle, confirm overnight parking and the transfer plan before arrival. Do not assume that a hotel saying “Govindghat” is beside the exact place from which you will begin walking. Save the property pin offline and ask whether the final approach remains motorable in current conditions.

Leave enough daylight to deal with registration, parking, food and repacking. The approach trek is easier with one organised day bag and a separately managed overnight load. Opening a large suitcase in rain at the roadhead is avoidable chaos.`,
    },
    {
      id: "ghangaria-trek",
      title: "The climb to Ghangaria is a real trekking day",
      icon: "🥾",
      content: `Ghangaria is the last settlement used as the base for Valley of Flowers. Uttarakhand Tourism places it at about 3,050 metres and describes the approach from Govindghat as approximately 13 km on one page and 15 km in a longer itinerary. Plan for a long uphill day rather than one exact number.

The trail follows a busy pilgrimage and trekking corridor. Expect walkers, porters and animals, particularly when the Hemkund Sahib season is active. Keep to the safe side at narrow points, give animals space, and follow the instructions of handlers instead of squeezing against the edge for a faster overtake.

Rain changes the effort. Wet paving, mud, flowing water and humid lower sections can make the same gradient feel harder. Start early enough to avoid finishing in darkness, but do not begin an unfamiliar route before local movement is considered safe. Carry a headlamp even when the plan is to arrive by afternoon.

Use short, regular pauses rather than one long stop that allows the body to cool. Eat simple food, drink normally and keep rain protection accessible. A poncho buried below the entire bag is not useful when a shower arrives in seconds.

Pony, porter or helicopter arrangements—when authorised and operating—must be checked locally for availability, passenger rules, weather limits and current official rates. They are transport choices, not proof that the altitude or park day will be easy. Even visitors who do not walk the approach still sleep high at Ghangaria and need to watch how they feel.`,
    },
    {
      id: "valley-day",
      title: "Plan the national-park day around time, weather and the return walk",
      icon: "🌸",
      content: `The Valley of Flowers trail leaves Ghangaria and enters protected terrain managed by the forest authorities. Confirm the current counter location, identification requirement, entry window, fee and return deadline after arriving in Ghangaria. These operational details can change and should come from the park counter, not a screenshot from another season.

Uttarakhand Tourism describes the valley as roughly 4 km from Ghangaria, but that does not mean the entire outing is an 8 km stroll. Walking within the valley, pauses, photography and the return to the village add distance. Decide on a turnaround time before becoming absorbed in the landscape.

Begin with a comfortable pace. The forested approach can be damp and enclosed before the terrain opens into broader alpine views. Bridges, rock, mud and water crossings may feel very different after overnight rain. Follow the maintained route and any temporary diversion established by staff.

Cloud is part of the experience. A low ceiling can hide the surrounding peaks while intensifying the colours at ground level. Waiting safely can be worthwhile, but waiting past the park's return instruction is not. Mountain weather does not owe a clear panorama to a ticket holder.

There is no accommodation inside the park for ordinary visitors. Carry what you need for the day and return to Ghangaria. Pack a simple lunch only if current rules permit it, bring every wrapper back, and do not leave food scraps because they are biodegradable. Protected wildlife habitat is not a picnic ground.`,
    },
    {
      id: "flowers-season",
      title: "There is no single guaranteed peak-bloom week",
      icon: "🌺",
      content: `The visitor season overlaps the summer monsoon because rain and snowmelt drive the alpine growing cycle. Uttarakhand Tourism highlights July, August and September for the wider flowering period, while its Ghangaria page specifically describes thousands of flowers during August and September. These are broad seasonal signals, not a reservation for a particular species.

Early in the season, lingering snow, fresh growth and a smaller selection of blooms may define the landscape. As summer advances, different plants emerge at different elevations and moisture levels. Later visits can bring changing colour, seed heads and clearer intervals, but fewer examples of some earlier species.

Do not organise the entire trip around a viral photograph labelled only with a month. Images may be edited, taken in a different year, or made in a small patch that does not represent the whole valley. Ask recent visitors and registered local operators what is flowering now, then accept that nature can change during the days required to reach Ghangaria.

UNESCO describes the park as internationally important for diverse alpine flora, including threatened medicinal plants. The value is ecological diversity, not a checklist of celebrity flowers. Brahmakamal is strongly associated with Uttarakhand, but a visitor should not expect every named plant to appear beside the main path or at the same time.

Never pick a flower, collect seed, uproot a plant or step off route for a close photograph. A small act repeated by thousands of visitors becomes damage. Use a longer focal length or crop the image later.`,
    },
    {
      id: "rain-safety",
      title: "Monsoon is both the attraction and the main constraint",
      icon: "🌧️",
      content: `Rain makes the valley green and supports the flowering season, but it also affects the road, approach trail and park path. A forecast icon for Joshimath cannot describe every slope between the roadhead and the valley. Check the state or district weather warning, local road information and the observation from Ghangaria before setting out.

Use a waterproof outer layer with ventilation and protect dry clothing inside the bag with a liner or sealed sacks. A backpack rain cover helps but does not make every seam waterproof. Keep the phone, identification and essential medicine in their own protected pouch.

Footwear should already fit and have useful grip. Waterproof shoes can still become wet from the top or from repeated immersion; carry spare socks and give feet time to dry. Trekking poles can help with balance for some walkers, but they do not replace careful foot placement.

Leeches may occur in wet lower sections. They are unpleasant rather than a reason to panic. Wear close-fitting socks and trousers, check footwear during breaks, remove a leech gently, clean the area and avoid applying harsh substances to the skin. Seek medical help for unusual bleeding, allergic symptoms or infection concerns.

Turn around when staff direct, a crossing becomes unsafe, thunder is close, visibility collapses or somebody in the group is deteriorating. Reaching a meadow is not worth converting a manageable delay into a rescue.`,
    },
    {
      id: "hemkund",
      title: "Add Hemkund Sahib only as a separate high-altitude day",
      icon: "🙏",
      content: `Hemkund Sahib and Valley of Flowers share Ghangaria as a base, which makes them easy to combine on a map. Physically, they are different outings. The Hemkund trail climbs steeply to a sacred lake and gurdwara above 4,000 metres. It should receive its own day and an honest assessment of weather, health and cumulative leg fatigue.

The route is a pilgrimage path. Dress and behave respectfully, cover the head where requested, remove shoes in the appropriate area and follow gurdwara instructions. Langar is offered as community service; receive it respectfully, avoid waste and consider contributing according to your means without treating a donation as a charge.

Do not plan the Hemkund day immediately after a late, exhausting arrival at Ghangaria merely because a package says it is possible. Sleep, assess for headache, nausea, dizziness, unusual fatigue or poor coordination, and be willing to rest. Assisted transport does not remove cold or altitude exposure.

The lake is sacred and extremely cold. Follow local directions about access and bathing; cold-water immersion can create serious risk. Keep the visit within the operating window and descend with enough daylight.

If the national park is the priority, a second valley day can be a better use of the itinerary than forcing Hemkund. If the pilgrimage is the priority, reverse that emphasis. A combined trip succeeds when neither day is treated as an afterthought.`,
    },
    {
      id: "altitude-health",
      title: "Take the sleeping altitude seriously",
      icon: "🩺",
      content: `Ghangaria's approximate 3,050-metre elevation is high enough for altitude symptoms, particularly after a rapid road journey from the plains followed by a long climb. The park trail goes higher, and Hemkund Sahib is higher again. Fitness does not provide immunity.

Common early symptoms can include headache, nausea, dizziness, unusual fatigue and disturbed sleep. Stop ascending when symptoms appear and tell a companion. Worsening breathlessness at rest, confusion, loss of coordination or marked weakness require urgent medical attention and descent when advised. Do not leave an unwell person alone.

Hydrate normally, eat regular meals and avoid alcohol while assessing the first night. Do not force excessive water. Pace the approach so that conversation remains possible and avoid racing to prove fitness.

Carry regular prescription medicine plus a delay buffer. Travellers with heart, lung or other relevant medical conditions, pregnancy, prior serious altitude illness or uncertainty about fitness should seek individual clinical advice before the trip.

Acetazolamide is a prescription medicine and not a universal checklist item. Discuss it with a qualified clinician who knows the traveller's health. It does not make a rushed ascent safe and should never be used to hide worsening symptoms while continuing upward.`,
    },
    {
      id: "ghangaria-stay",
      title: "Treat Ghangaria as a functional trekking base",
      icon: "🏘️",
      content: `Ghangaria exists to support the seasonal movement toward Valley of Flowers and Hemkund Sahib. Expect practical guesthouses, lodges, food stalls and religious accommodation rather than resort-town consistency. Power, hot water, connectivity and card payment may be limited or interrupted.

Choose a room for dryness, bedding, ventilation and a manageable walk from the trail rather than for a wide online amenity list. Ask whether electricity and hot water operate at fixed times, whether wet gear can be kept outside the sleeping area, and what happens to the booking if access closes.

Carry enough cash for accommodation, food, park fees and an unplanned extra night, divided between adults. Do not rely on a single ATM or payment app. Confirm current prices directly and obtain a receipt where appropriate.

Food is simple because supplies travel up the same corridor. Eat freshly cooked meals, keep hands clean and carry a personal bottle. Ask whether drinking water has been treated rather than assuming every tap is safe.

Mobile signal should be treated as intermittent. Download maps, tickets, identification copies, accommodation details and emergency contacts before the approach. Tell a trusted person the expected return date and update them when connectivity allows.`,
    },
    {
      id: "fees-rules",
      title: "Confirm park fees and rules at the official counter",
      icon: "🎫",
      content: `Entry fees, camera rules, accepted payment methods, opening hours and last-entry times can change. Confirm them with the forest or park counter in Ghangaria and carry accepted identification. Do not build a budget from an undated fee table reproduced across travel blogs.

Ordinary tourist camping and overnight stays inside Valley of Flowers National Park are not part of the standard visitor arrangement. Plan to return to Ghangaria. Follow current staff instructions if weather, trail damage or conservation work reduces the accessible area.

Stay on the authorised trail. Do not pick flowers, collect plants, feed wildlife, play amplified music or fly a drone without explicit legal permission. Drone restrictions in protected areas can involve wildlife, forest, aviation and security rules; possession of a consumer drone is not permission to use it.

Carry back all plastic, tissues and food packaging. If toilets are unavailable on a section, follow low-impact guidance from park staff or an experienced local guide rather than improvising beside water.

UNESCO notes that the state forest department monitors limited access routes and that low human pressure is important to the integrity of the property. Visitor behaviour is therefore part of conservation, not an optional courtesy.`,
    },
    {
      id: "budget",
      title: "Build a budget that can survive one disrupted day",
      icon: "💰",
      content: `The broad budget band depends on origin, group size, vehicle choice, porter or animal support, room type and whether Hemkund is included. Prices rise when demand is concentrated and when supplies are difficult to move. Use current quotes rather than a permanent per-person promise.

Create separate lines for transport to the roadhead, parking or local transfer, approach support, accommodation before and after Ghangaria, Ghangaria nights, meals, park charges and contingency. Ask operators whether taxes, porter load limits, permit or entry fees and cancellation costs are included.

Keep a meaningful contingency for an extra night and changed transport. A plan that uses every rupee before entering a monsoon mountain corridor is not a budget plan; it is a bet on perfect conditions.

The cheapest safe choice is often a simpler itinerary rather than lower-quality rain protection or an impossible same-day connection. Walking independently can reduce cost for prepared trekkers, while a registered local guide or support service can add value for families, first-time hikers and visitors with limited route confidence.

Do not pay a large deposit to an unverified messaging account. Use a traceable method, retain the written itinerary and make sure the cancellation terms address road or park closure.`,
    },
    {
      id: "packing",
      title: "Pack for wet walking, cold evenings and limited services",
      icon: "🎒",
      content: `Use a layered system: moisture-managing base layer, warm mid-layer and waterproof outer shell. Add a warm hat, light gloves and dry sleep clothing sealed inside the pack. Cotton that stays wet is uncomfortable in a cold evening.

Wear broken-in walking shoes with grip and carry at least one spare pair of socks. Add a headlamp, refillable bottle, compact food, sun protection, small first-aid kit and any regular medicine. A trekking pole is optional and should be practised with before the trip.

Protect documents and electronics. Carry a charged power bank, but do not assume it can replace disciplined battery use. Download offline maps and keep the phone in airplane mode when signal hunting drains it.

Keep the day bag light enough to carry for hours. Camera equipment, multiple lenses and heavy tripods compete with rain layers, food and water. Take only what can be protected and carried without changing safe balance.

Leave space for rubbish. A small sealable bag makes it easy to carry wet wrappers and tissues back to the village. The best packing list is not the longest one; it is the list that keeps essentials dry without turning every uphill step into a burden.`,
    },
  ],
  weatherPoints: [
    { location: "Govindghat area", altitude: 1800, temp: 18, weather: "Typical wet-season range" },
    { location: "Ghangaria", altitude: 3050, temp: 11, weather: "Cool and changeable" },
    { location: "Valley trail", altitude: 3500, temp: 8, weather: "Cool, rain possible" },
    { location: "Hemkund route", altitude: 4300, temp: 4, weather: "Cold and exposed" },
  ],
  routes: [
    { from: "Rishikesh", to: "Joshimath side", status: "partial", note: "Full mountain-road day; check current advisories" },
    { from: "Joshimath side", to: "Govindghat", status: "partial", note: "Road movement depends on current controls" },
    { from: "Govindghat / Pulna", to: "Ghangaria", status: "partial", note: "About 13-15 km depending on current start" },
    { from: "Ghangaria", to: "Valley of Flowers", status: "partial", note: "Day walk inside protected area" },
    { from: "Ghangaria", to: "Hemkund Sahib", status: "partial", note: "Separate steep high-altitude day" },
  ],
  checklist: [
    { category: "Wet-weather layers", items: [
      { name: "Waterproof outer shell or poncho", essential: true },
      { name: "Warm mid-layer", essential: true },
      { name: "Dry sleep clothing in sealed bag", essential: true },
      { name: "Warm hat and light gloves", essential: true },
      { name: "Spare walking socks", essential: true },
    ] },
    { category: "Trail essentials", items: [
      { name: "Broken-in walking shoes with grip", essential: true },
      { name: "Backpack liner or dry bags", essential: true },
      { name: "Headlamp with spare power", essential: true },
      { name: "Refillable water bottle", essential: true },
      { name: "Sun protection", essential: true },
      { name: "Trekking pole if personally useful", essential: false },
    ] },
    { category: "Health and documents", items: [
      { name: "Government photo identification", essential: true },
      { name: "Regular medicine plus delay buffer", essential: true },
      { name: "Basic first-aid and blister supplies", essential: true },
      { name: "Cash divided between adults", essential: true },
      { name: "Offline bookings and emergency contacts", essential: true },
    ] },
  ],
  faq: [
    { q: "When is the best time for Valley of Flowers?", a: "The usual visitor season is June to September, with the wider flowering period associated with the monsoon months. No exact week guarantees a particular bloom. Confirm current park access, recent weather and flowering reports before travelling." },
    { q: "How long is the trek to Ghangaria?", a: "Official Uttarakhand Tourism pages describe roughly 13 km on one page and 15 km in a longer itinerary. The active vehicle drop point and route can affect the total. Plan for a long uphill trekking day rather than one exact number." },
    { q: "Can visitors stay overnight inside Valley of Flowers?", a: "The standard visit is a day walk from Ghangaria. Ordinary visitor accommodation and camping are not available inside the national park; follow the current forest-counter entry and return instructions." },
    { q: "Can Valley of Flowers and Hemkund Sahib be combined?", a: "Yes. Both use Ghangaria as a base, but Hemkund is a separate, steep high-altitude day. Allow one full day for each and do not force Hemkund when someone is unwell or the route is unsuitable." },
    { q: "Do I need to book park entry online?", a: "Processes can change. Confirm the current entry counter, fee, accepted identification, payment method and operating window with the forest or park authority after reaching Ghangaria." },
    { q: "Is the trek suitable during monsoon?", a: "The flowering season overlaps the monsoon, so rain is part of the trip. Wet trail, road disruption, cloud and landslide warnings require flexibility. Follow district, forest and local safety instructions." },
    { q: "Should I carry altitude medicine?", a: "Do not treat prescription medicine as a universal packing item. Discuss your altitude plan with a qualified clinician who knows your health, especially if you have relevant conditions or previous serious altitude illness." },
    { q: "Are flowers guaranteed in August?", a: "August is widely associated with abundant flowering, but timing varies by species, elevation, snowmelt and the year's weather. Visit for the protected landscape as a whole rather than one guaranteed photograph." },
  ],
  emergency: [
    { name: "Integrated emergency", number: "112" },
    { name: "Uttarakhand disaster control", number: "1070" },
    { name: "Chamoli district control room", number: "1077" },
  ],
  subPages: [
    { slug: "packing", title: "Valley of Flowers packing checklist", description: "Wet-weather layers, trail essentials and documents for the Ghangaria trek" },
  ],
};
