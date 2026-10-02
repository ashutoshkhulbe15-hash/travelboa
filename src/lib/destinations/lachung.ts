import { DestinationData } from "./types";

export const lachung: DestinationData = {
  slug: "lachung",
  name: "Lachung & Yumthang",
  tagline: "A permit-first, weather-aware North Sikkim plan",
  region: "North Sikkim",
  state: "Sikkim",
  type: "adventure",
  altitude: 2700,
  temp: 7,
  weather: "🌤️",
  season: "Access dependent",
  duration: "3 days / 2 nights minimum",
  budget: { min: 12000, max: 45000 },
  heroGradient: "linear-gradient(150deg, #24483d, #50755f 50%, #b98b62)",
  heroImage: "/lachung.jpg",

  quickStats: [
    { label: "Lachung altitude", value: "about 2,700m", icon: "🏔️" },
    { label: "Yumthang altitude", value: "about 3,500m", icon: "🌸" },
    { label: "Permit", value: "PAP required", icon: "📋" },
    { label: "Current minimum plan", value: "3 days / 2 nights", icon: "🗓️" },
    { label: "Same-day permits", value: "Not issued", icon: "⏳" },
    { label: "Emergency", value: "112", icon: "☎️" },
  ],

  intro: `Lachung is not a flexible self-drive detour from Gangtok. It lies on a protected North Sikkim route where the visitor permit, authorised vehicle, driver and itinerary are part of the same journey. The Government of Sikkim's September 2025 notification requires permits to be issued at least one day in advance and says tourists visiting Lachung must follow a three-day, two-night itinerary. Those rules matter more than a cheap package advertisement.

The road also deserves humility. Official Sikkim updates in 2026 document landslides, restoration work and complex evacuations elsewhere in North Sikkim. Conditions on the Lachung axis can change after heavy rain or infrastructure damage. No evergreen travel page can truthfully display “open” beside every segment.

Plan the trip around the details that matter most: permit eligibility, exact documents, route access, Zero Point inclusion, vehicle charges, snow and flower timing. Confirm each of these with the registered operator for your travel dates.`,

  comparison: {
    title: "Choose the North Sikkim experience you are actually booking",
    caption: "Every option remains subject to the destinations named on the permit and the current road and weather decision.",
    columns: ["Lachung stay", "Yumthang visit", "Yumesamdong / Zero Point"],
    rows: [
      { label: "Role in trip", values: ["Overnight base and village", "Main valley excursion", "Higher optional extension"] },
      { label: "Main constraint", values: ["Permit itinerary and long road transfer", "Weather, checkpoint and road condition", "Altitude, snow, access and separate inclusion"] },
      { label: "Confirm in writing", values: ["Two nights, room, meals and heating", "Permit coverage and departure plan", "Eligibility, vehicle charge and operating status"] },
      { label: "Do not expect", values: ["Urban hotel consistency", "A guaranteed bloom or clear view", "Guaranteed snow or safe access"] },
    ],
  },

  sections: [
    {
      id: "permit-first",
      title: "Arrange the Protected Area Permit before the road trip",
      icon: "📋",
      content: `Sikkim Tourism classifies Lachung, Yumthang and the relevant North Sikkim destinations as protected-area travel. The document is a **Protected Area Permit (PAP)**. Calling every Sikkim travel document an ILP creates confusion, especially because rules differ by visitor nationality and destination.

Government notification No. 101 DOT & CAV, dated 13 September 2025, sets the current operating framework for the resumed Lachung axis:
- permits must be issued at least one day in advance
- same-day permits are not issued
- Lachung visitors must follow a three-day, two-night itinerary
- visitors must remain within the places listed on the permit
- travel agencies are responsible for their drivers and guides and are advised to use local drivers familiar with the terrain

Arrange the permit through a Sikkim Tourism-registered travel agency or another channel currently authorised by the department. Ask for the agency's registration details, the exact permitted destinations and the issue timeline before paying. Sending documents to a random messaging number is not a permit process.

The visitor permit and vehicle authorisation are related but distinct. The operator should explain which vehicle and driver will be used and how the checkpoint verification works. Keep original identification and the permit copy accessible.

Rules for foreign visitors are different. Sikkim Tourism states that foreign tourists may visit the Lachen–Lachung–Yumthang–Thangu Valley through the protected-area system, but route and destination eligibility are not identical to domestic packages. Confirm Yumesamdong eligibility rather than assuming that “North Sikkim included” covers it.`,
    },
    {
      id: "arrival-plan",
      title: "Build a full Gangtok day before the permit departure",
      icon: "🧭",
      content: `The practical gateways are Bagdogra Airport and New Jalpaiguri railway station, followed by a substantial road transfer to Gangtok. Flight, train and Teesta-corridor conditions change, so do not freeze one duration into an evergreen article.

Avoid landing and joining a North Sikkim departure on the same clock. A delayed arrival can miss the operator's document check or the permit-issue window. Spend at least one full night in Gangtok before the scheduled departure; more margin may be wise when travelling in unstable weather.

Before leaving Gangtok, verify:
- every traveller appears correctly on the permit
- the permit names the intended destinations
- the operator has the required vehicle paperwork
- the package reflects the mandatory three-day, two-night structure
- both nights, meals and room allocation are confirmed
- Zero Point is included or excluded explicitly
- cancellation and road-closure terms are written

Download the permit, hotel address and operator contacts. Carry a paper copy. Tell a trusted contact the planned return date. North Sikkim travel should not depend on finding a mobile signal at the next stop.

If the permit is not ready, do not let an operator persuade the group to depart and “sort it at the checkpoint.” The current notification rules out same-day issuance. Losing a day in Gangtok is frustrating; travelling without the required authority is worse.`,
    },
    {
      id: "three-day-plan",
      title: "A practical three-day, two-night Lachung structure",
      icon: "🗓️",
      content: `The government-mandated minimum creates space for a less punishing route than the older two-day package model.

**Day 1 — Gangtok to Lachung:** Leave with the authorised group and vehicle. The route normally passes through the Mangan and Chungthang side, subject to the current traffic arrangement. Expect checkpoints, meal or permit stops and possible construction delay. Treat the road as the day's main activity. Check in, eat, stay warm and rest.

**Day 2 — Yumthang and optional permitted extension:** Depart according to the driver and current access window. Visit Yumthang without assuming flower, snow or mountain visibility. Continue toward Yumesamdong only if it appears on the permit, the operator has confirmed it, authorities allow it and the group is well. Return to Lachung for the second night.

**Day 3 — Lachung to Gangtok:** Use daylight and accept that the return can take longer than expected. Do not attach a tight Bagdogra flight or NJP train to the same afternoon. A fourth night in Gangtok provides a safer connection plan.

The second night is not wasted time. It reduces the incentive to drive both directions and complete the high excursion within one exhausting cycle. It also gives some room for traffic management and weather decisions. It does not guarantee that a closed road will reopen.

Do not let an advertisement quietly redefine “three days” as a late first-night arrival plus a pre-dawn excursion and early return. Ask for departure windows, expected driving load and actual time in Lachung.`,
    },
    {
      id: "road-reality",
      title: "Road status can change faster than an article",
      icon: "🛣️",
      content: `North Sikkim is a high-relief, high-rainfall environment with landslide, bridge and river risks. The state government's own 2026 notices show how seriously connectivity can change: the Chungthang–Lachen axis was disrupted for months, and the administration also inspected a landslide site at Teeling in Lachung during July. A green “open” badge seen days earlier is not enough for a travel decision.

Check the Government of Sikkim or district update, then confirm with the registered operator close to departure. Operators should use official directions, not pressure from a prepaid group. Police, BRO, district administration, army and local bodies may regulate movement during a disruption.

Carry water, simple food, essential medicine and a warm layer in the vehicle. Keep enough flexibility for an extra Gangtok or Lachung night. A landslide delay is not the moment to discover that every prescription tablet is in checked luggage scheduled for a flight.

Do not leave the authorised route, cross a barrier or walk into a damaged section because another vehicle appears to have passed. An evacuation corridor is not general tourist access. Follow checkpoint and driver instructions.

The route panel shows the journey sequence, not live road conditions. Current instructions from authorities and checkpoints take priority over any booking itinerary.`,
    },
    {
      id: "yumthang",
      title: "Yumthang is a mountain valley, not a guaranteed flower show",
      icon: "🌸",
      content: `Yumthang lies north of Lachung at a much higher elevation, commonly described around 3,500 metres. The route and checkpoint operate within the protected-area system. Keep the permit and identification accessible and remain within the authorised area.

Spring is associated with rhododendrons, but bloom timing changes with elevation, winter snow, temperature and the year's weather. Avoid planning a non-refundable trip around a social-media post dated only “April.” Ask the operator what has actually begun flowering that week and accept that nature may be early or late.

Likewise, a clear mountain view cannot be promised. Morning often offers a better planning window, but cloud can exist at any time. The driver and current traffic instructions should determine departure—not a claim that every visitor must arrive by a magic hour.

Move slowly when leaving the vehicle. The body has travelled from Gangtok to Lachung and higher in a short period. A headache, nausea, marked dizziness or unusual breathlessness should be reported immediately. Worsening symptoms are not the price of getting the photograph.

Use paths and stopping areas indicated by authorities. Do not pick flowers, leave plastic, walk into protected vegetation or crowd wildlife. Hot-spring access and facilities can change; treat it as optional and follow local hygiene and safety instructions rather than publishing a permanent water temperature.`,
    },
    {
      id: "zero-point",
      title: "Yumesamdong or Zero Point is optional, higher and less forgiving",
      icon: "❄️",
      content: `Yumesamdong, widely marketed as Zero Point, is the higher road extension beyond Yumthang. It is often described around 4,400 metres. The public-access endpoint, checkpoint decision and road condition can change; visitors must not continue toward restricted military areas.

Confirm four things in writing before departure: that your nationality is eligible for the specific destination, that it is printed or valid on the permit, that the vehicle charge is included, and that the road is currently operating. A generic “North Sikkim package” is not enough.

Snow is not guaranteed. It varies by month, weather and recent clearance. Vendors may operate seasonally, but there is limited shelter and no reason to expect a full visitor centre. Carry warm and wind-resistant layers even if Gangtok is mild.

The rapid rise makes altitude the main concern. A night in Lachung is helpful but does not make everyone acclimatised to 4,400 metres. Do not continue with worsening symptoms. Follow the driver, checkpoint and medical advice, and descend when instructed. Prescription medicine should be discussed with a clinician before the trip, not purchased from a packing list.

Skipping the extension does not make the permit or itinerary poor value. Yumthang and Lachung are the core journey. If the road, weather, permit or group health is wrong, turn back without bargaining with the checkpoint.`,
    },
    {
      id: "health-comfort",
      title: "Cold, altitude and long vehicle days require a group plan",
      icon: "🩺",
      content: `The journey combines long sitting, rough road, large elevation change and cold. Travellers prone to motion sickness should discuss suitable medication with a clinician and sit where the vehicle movement is manageable. Keep water and a simple snack accessible.

Anyone with relevant heart, lung, blood-pressure or other health conditions should seek medical advice before booking. Carry regular medication, a delay buffer and a written summary of important conditions and allergies. Do not rely on a guesthouse for anything beyond basic assistance.

Agree in advance what happens if one person becomes unwell: who stays with them, which booking can be abandoned, how the operator contacts medical help, and when the entire group turns back. The September 2025 notification specifies a clearance process involving an army or government doctor for an emergency return, reinforcing that operators must coordinate with authorities.

Dress in layers: a base layer, warm mid-layer and wind-resistant outer layer, with hat, gloves and dry socks. Wear shoes with grip; rented snow boots, if available, should be checked for fit and sole condition rather than assumed safe.

At high stops, move slowly and keep the visit short if cold or symptomatic. Alcohol is a poor response to cold and altitude. A hot drink and warm vehicle do not rule out illness.`,
    },
    {
      id: "stay-food",
      title: "Judge accommodation by warmth and logistics",
      icon: "🏨",
      content: `Lachung accommodation is part of a regulated route package more often than a standalone city booking. Room photographs alone do not answer the important questions.

Ask whether the room is in the main building, how many stairs are involved, how hot water is supplied, what heating is available and whether heating costs extra. Confirm dinner and breakfast times around the excursion. Power interruptions can occur, so ask about backup for lighting rather than expecting continuous charging or electric heating.

Food is usually simple and scheduled for groups. Tell the operator about dietary restrictions before departure. Carry a small amount of appropriate backup food if a delayed arrival would create a problem, but do not arrive with a large disposable snack haul.

The current three-day, two-night requirement means both nights must be in the quoted package. Confirm whether the same property is used, whether room sharing changes, and what happens if the group is held on the road. Read refund terms for a government closure.

Do not use the cheapest quote until its inclusions match another quote. A vehicle, permit processing, driver costs, two nights, meals and the intended permitted excursions must all be compared on the same basis.`,
    },
    {
      id: "money-connectivity",
      title: "Plan payment and communication without absolute claims",
      icon: "📶",
      content: `Connectivity in North Sikkim is variable. Do not state that one network always works in Lachung or that another always fails at a precise kilometre. Terrain, infrastructure, weather and maintenance affect service.

Download the permit, hotel details, maps and operator contacts in Gangtok. Keep paper copies. Establish a check-in plan with family that allows for a full day without contact, so a normal outage does not trigger unnecessary alarm. In a genuine emergency, use the driver and official response chain rather than waiting for personal data service.

Carry a cash reserve based on the written package and likely extras, but there is no universal ₹8,000 or ₹10,000 requirement. Confirm what can be paid digitally, which charges are already settled and whether an optional extension is cash-only. Split funds between responsible adults.

Avoid large cash prepayments to an unverified agent. Use traceable payment to a registered operator and retain the quote, receipt and cancellation terms. A permit fee, package price and optional vehicle extension should be itemised rather than blended into a mysterious “government charge.”

A modest power bank is useful. Keep the phone warm enough to preserve battery and do not run it flat filming from the vehicle. The most important information should remain available without power.`,
    },
    {
      id: "season-choice",
      title: "Choose timing for the experience, then verify access",
      icon: "🌦️",
      content: `Season descriptions are broad tendencies, not access guarantees.

**Spring:** Travellers often hope for rhododendron bloom and remaining snow. Exact timing varies. Roads can still be recovering from winter, and high access depends on clearance.

**Early summer:** Longer days can help road travel, while rain and slope instability may increase as the season changes. School-holiday demand can affect package availability.

**Monsoon:** Landslides, drainage problems and road closures become a central risk. The July 2026 government inspection at Teeling, Lachung is a concrete reminder that restoration work can affect the axis. Travel only under current official and operator guidance.

**Autumn:** Clearer spells are possible and temperatures fall. Confirm whether all desired excursions and accommodations still operate.

**Winter:** Snow, cold and restricted access make this a specialised trip. Do not book a generic spring package after seeing a snow photograph. Heating, vehicle, road permission and emergency response all need explicit confirmation.

Check forecast and road information close to travel, then reconfirm before leaving Gangtok and before the high excursion. Authorities may shorten or suspend movement even when the sky looks clear at the hotel.`,
    },
    {
      id: "respect",
      title: "Travel respectfully through Dzumsa communities and protected land",
      icon: "🙏",
      content: `Lachung is governed through the traditional Dzumsa system as well as state administration. Visitors are entering a community, not an empty scenic corridor. Follow local rules, hotel guidance and checkpoint directions without treating them as obstacles to a purchased package.

At Lachung Monastery and other religious spaces, dress modestly, speak quietly and ask before photographing people or interiors. Do not fly a drone without explicit legal and local permission. Border sensitivity makes casual assumptions especially inappropriate.

Carry waste back to the accommodation or authorised collection. Do not leave plastic in snow, flower meadows or roadside stops. Avoid amplified music, picking plants and walking beyond marked areas. Buy from local vendors without turning every purchase into an aggressive negotiation.

The vehicle is part of the environmental burden. Do not demand unnecessary idling for warmth or repeated stops in unsafe places. Respect the driver's judgement when a shoulder, slope or checkpoint is unsuitable.

Water, food, road space and waste handling are community resources. Use them with the same care you would expect from visitors in your own hometown. If a closure limits supplies, residents and emergency services take priority over a tourist's preferred menu or schedule. Patience is part of responsible travel here.

The best North Sikkim plan is not the one that reaches the farthest signboard. It is the one that follows the permit, protects the group and leaves the route easier for the community to host again.`,
    },
  ],

  weatherPoints: [
    { location: "Gangtok", altitude: 1650, temp: 16, weather: "🌤️" },
    { location: "Mangan", altitude: 1200, temp: 18, weather: "🌦️" },
    { location: "Chungthang", altitude: 1790, temp: 13, weather: "🌦️" },
    { location: "Lachung", altitude: 2700, temp: 7, weather: "⛅" },
    { location: "Yumthang", altitude: 3500, temp: 3, weather: "🌨️" },
    { location: "Yumesamdong", altitude: 4400, temp: -2, weather: "❄️" },
  ],

  routes: [
    { from: "Bagdogra / NJP", to: "Gangtok", status: "partial", note: "Gateway transfer; confirm Teesta-corridor condition" },
    { from: "Gangtok", to: "Mangan", status: "partial", note: "Protected-route journey begins under authorised itinerary" },
    { from: "Mangan", to: "Lachung", status: "partial", note: "Via Chungthang; verify current district and operator advice" },
    { from: "Lachung", to: "Yumthang", status: "partial", note: "Permit and checkpoint dependent; not live status" },
    { from: "Yumthang", to: "Yumesamdong", status: "partial", note: "Optional higher extension; eligibility and access vary" },
  ],

  checklist: [
    { category: "Permit and booking", items: [
      { name: "Original accepted photo identification", essential: true },
      { name: "PAP showing the correct travellers and destinations", essential: true },
      { name: "Registered operator and authorised vehicle details", essential: true },
      { name: "Written three-day, two-night inclusions", essential: true },
    ]},
    { category: "Cold and weather", items: [
      { name: "Warm base and mid layers", essential: true },
      { name: "Wind-resistant insulated outer layer", essential: true },
      { name: "Warm hat, gloves and dry socks", essential: true },
      { name: "Shoes with reliable grip", essential: true },
      { name: "Rain protection", essential: true },
    ]},
    { category: "Road day", items: [
      { name: "Refillable water bottle and simple food", essential: true },
      { name: "Offline maps, permit and contacts", essential: true },
      { name: "Modest power bank", essential: true },
      { name: "Proportionate cash reserve", essential: true },
    ]},
    { category: "Health", items: [
      { name: "Usual prescription medicine plus delay buffer", essential: true },
      { name: "Written conditions, allergies and emergency contacts", essential: true },
      { name: "Clinician-approved motion or altitude plan", essential: false },
      { name: "Basic first-aid supplies", essential: true },
    ]},
  ],

  faq: [
    { q: "Do I need a permit for Lachung and Yumthang?", a: "Yes. They are protected-area destinations requiring a PAP arranged through authorised channels, normally a registered travel agency. The vehicle paperwork is also part of the controlled journey." },
    { q: "Can I get a same-day permit in Gangtok?", a: "No under the September 2025 Government of Sikkim notification. Permits must be issued at least one day in advance. Build document and timing margin before the planned departure." },
    { q: "Is a two-day, one-night Lachung package valid?", a: "The current notification requires Lachung tourists to follow a three-day, two-night itinerary. Ask an operator selling anything shorter to show the current authority before payment." },
    { q: "Can foreign tourists visit Lachung and Yumthang?", a: "Sikkim Tourism permits foreign tourists for specified North Sikkim valleys through the PAP system, with different documentation and supervision. Confirm the exact destinations—especially Yumesamdong—for your nationality." },
    { q: "Is Zero Point included in every package?", a: "No. Confirm permit eligibility, destination coverage, current access and vehicle charge in writing. It is a higher optional extension, not an automatic part of the Lachung stay." },
    { q: "When will flowers bloom in Yumthang?", a: "There is no guaranteed date. Spring is associated with rhododendron bloom, but elevation, snow and annual weather change the timing. Ask for a current local report close to travel." },
    { q: "Will there be snow at Zero Point?", a: "Snow cannot be guaranteed for a booking. Recent weather and clearance determine what remains. Pack for cold and assess the trip on access and altitude safety, not a promised snow photograph." },
    { q: "Can I drive my own car to Lachung?", a: "Do not assume so. Protected routes use authorised vehicle and permit arrangements. Confirm the current rule through Sikkim Tourism and the registered operator rather than arriving in a private vehicle." },
  ],

  emergency: [
    { name: "Integrated emergency", number: "112" },
    { name: "Sikkim tourist nodal helpline", number: "7001911393" },
    { name: "Mangan emergency operating centre", number: "03592-234538" },
    { name: "Sikkim SDRF", number: "03592-220545" },
  ],

  subPages: [
    { slug: "packing", title: "Lachung packing checklist", description: "Permit, cold-weather and road-delay essentials" },
  ],

  metaTitle: "Lachung & Yumthang Guide: PAP, 3-Day Plan & Safety",
  metaDescription: "Plan Lachung and Yumthang with current PAP rules, mandatory 3-day/2-night itinerary, Zero Point decisions, road-risk guidance and official Sikkim sources.",
};
