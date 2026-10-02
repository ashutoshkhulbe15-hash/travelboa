import { DestinationData } from "./types";

export const kedarnath: DestinationData = {
  slug: "kedarnath",
  name: "Kedarnath",
  tagline: "A safety-first plan for the high-altitude pilgrimage",
  region: "Garhwal Himalaya",
  state: "Uttarakhand",
  type: "pilgrimage",
  altitude: 3580,
  temp: 4,
  weather: "⛅",
  season: "Temple season only",
  duration: "4–6 days",
  budget: { min: 8000, max: 40000 },
  heroGradient: "linear-gradient(150deg, #2d1b60, #5a3d7a 60%, #8a6a4a)",
  heroImage: "/kedarnath.jpg",

  quickStats: [
    { label: "Temple altitude", value: "about 3,580m", icon: "🏔️" },
    { label: "Official 2026 opening", value: "22 April", icon: "🗓️" },
    { label: "Trek planning distance", value: "about 17 km", icon: "🥾" },
    { label: "Road end", value: "Gaurikund", icon: "📍" },
    { label: "Registration", value: "Mandatory", icon: "📋" },
    { label: "Official heli booking", value: "IRCTC only", icon: "🚁" },
  ],

  intro: `Kedarnath is not a conventional sightseeing trip with a temple added at the end. The shrine stands at roughly 3,580 metres in Rudraprayag district, and reaching it normally means a long road journey followed by a sustained uphill walk from Gaurikund. Cold, rain, low oxygen, crowd control and transport bottlenecks can all shape the day. Faith may be the reason for going; careful preparation is what makes the journey more manageable.

For 2026, Uttarakhand Tourism's official Char Dham portal lists 22 April as the opening date. Registration is mandatory and free. The closing date, temple hours and ritual timings were still awaiting announcement when this page was updated, so check the state portal and temple committee before booking around them.

The plan below explains how Sonprayag and Gaurikund function, why official sources disagree slightly on the trek distance, how to choose between walking and assisted transport, and what the state health department asks pilgrims to do. Treat it as trip planning, not personal medical clearance.`,

  comparison: {
    title: "Choose the access method before you book the rest of the trip",
    caption: "Availability, eligibility, operating conditions and official rates must be confirmed for your date.",
    columns: ["Walk", "Pony / dandi-kandi", "Helicopter shuttle"],
    rows: [
      { label: "Best suited to", values: ["Prepared walkers with time", "People who cannot reasonably walk the full route", "Eligible passengers with a confirmed ticket and weather margin"] },
      { label: "Main constraint", values: ["Altitude, endurance and descent load", "Operator allocation, route comfort and animal welfare", "Weather, weight rules, reporting time and cancellations"] },
      { label: "Planning assumption", values: ["Overnight at Kedarnath is often more realistic", "Confirm current counter process and rate", "Book only through IRCTC HeliYatra"] },
      { label: "Do not assume", values: ["A paved route is an easy route", "Immediate availability on arrival", "A ticket guarantees flight or instant darshan"] },
    ],
  },

  sections: [
    {
      id: "2026-facts",
      title: "The 2026 facts to verify before paying",
      icon: "✅",
      content: `The official Tourist Care Uttarakhand portal lists Kedarnath Dham's 2026 opening date as **22 April 2026**. It currently says temple opening and closing hours and aarti or bhog timings will be announced. The Badrinath–Kedarnath Temple Committee is the temple authority, while the state portal manages pilgrimage registration. Check both near departure because a date, daily operating arrangement and a weather restriction are different things.

**Use this order:**
- Confirm that the shrine is open for the intended date on the official state or temple-committee site.
- Complete the free, mandatory Char Dham registration for every traveller.
- Check current district advisories, weather and road conditions.
- Reserve accommodation and transport with cancellation terms you understand.
- If using a helicopter shuttle, follow the official registration-to-IRCTC path and ignore agents promising special inventory.

The District Rudraprayag 2026 page publishes two yatra control-room numbers: **01364-297878** and **01364-297879**. It also lists a Kedarnath helicopter helpline, **+91 98709 63731**. Save the district page itself as well as the numbers, because directory information can change.

Do not build a trip around a date repeated by an undated blog, a social post or a booking seller. Opening of the shrine does not mean every road, trail service, bed or flight will operate exactly as expected. Local authorities may pause movement during heavy rain, snowfall, congestion or an incident. A credible plan leaves room for that authority to act.`,
    },
    {
      id: "route-logic",
      title: "Understand Sonprayag, Gaurikund and the route before arrival",
      icon: "🗺️",
      content: `The road approach runs through Rishikesh, Devprayag, Srinagar, Rudraprayag and the Guptkashi side before reaching the Sonprayag–Gaurikund sector. Exact travel time varies sharply with road works, pilgrimage traffic, weather and the place where you start. Treat a map estimate as a lower-bound planning tool, not a promised arrival.

**Sonprayag is the transport-control point.** Private-vehicle parking and onward local arrangements are managed in this area during the yatra. Do not assume you can drive your own car to the start of the walking route. Ask the accommodation provider about its access, parking and the current transfer system before arrival.

**Gaurikund is the road end and normal trek start.** District Rudraprayag's current Kedarnath page describes a 17 km trek from Gaurikund. Uttarakhand Tourism pages variously describe 16 km, 17 km and, on one circuit page, roughly 19 km. Those discrepancies can reflect page age, endpoints and route measurement. For honest planning, think **about 17 km one way**, then follow current signs and district instructions rather than arguing over a kilometre.

Rishikesh is the most useful broad gateway for many visitors, but “Rishikesh to Kedarnath” often hides two separate journeys: a long mountain-road day to the yatra base and the uphill pilgrimage route on another day. Trying to compress both into a single uninterrupted push increases fatigue and makes delays harder to absorb.

If travelling by bus or shared vehicle, confirm the actual departure point and end point with the operator. If driving, confirm where the vehicle will remain and how everyone will reach the onward queue. If a member of the group has limited mobility, solve that transfer before booking a distant hotel described only as being “near Sonprayag.”`,
    },
    {
      id: "four-day-plan",
      title: "A realistic four-to-six-day structure",
      icon: "🧭",
      content: `A safe itinerary begins with margin. The schedule below is a framework, not a guarantee that conditions will permit movement.

**Day 1 — reach the lower Garhwal base:** Travel from Delhi, Dehradun, Haridwar or another origin to Rishikesh or a suitable intermediate point. Do not treat an overnight road journey followed by a full mountain ascent as efficient acclimatisation.

**Day 2 — travel to Guptkashi, Phata or the booked base:** Use daylight where possible. Complete any verification step that the current registration system requires, reconfirm parking or transfer instructions, and sleep before the main effort. A base farther from Sonprayag may offer more accommodation choice; a closer base can shorten the morning transfer. The correct choice depends on the exact property and transport plan.

**Day 3 — Gaurikund to Kedarnath:** Start within the movement window communicated by authorities. Walk at a conversational pace and take regular short breaks. An overnight near Kedarnath is often more realistic than assuming every traveller can climb, complete darshan and descend about the same distance before dark.

**Day 4 — darshan if needed, then descend:** Begin with enough daylight and energy for a long descent. Descending is faster for many people but hard on knees and feet. Return to the road base and rest rather than immediately starting a long onward drive.

**Day 5 — weather or recovery buffer:** Use this as a genuine buffer, not as a hidden sightseeing day. It protects onward rail or flight plans from a delayed trek, stopped shuttle or road hold. If unused, it can become a quiet recovery day around Ukhimath or the lower route.

**Day 6 — onward journey:** Leave a generous road margin. Mountain traffic after a major pilgrimage sector cannot be scheduled like an urban airport transfer.

People using helicopter shuttles need margin too. Weather can delay or cancel flying, and re-accommodation rules depend on the official terms. A short flying time does not turn Kedarnath into a risk-free day trip.`,
    },
    {
      id: "trek-reality",
      title: "What the uphill and downhill days actually demand",
      icon: "🥾",
      content: `The route is established and heavily used, but that should not be confused with easy. You gain roughly 1,500 metres between Gaurikund and Kedarnath while moving into thinner air. Surface, gradient, crowds, rain and cold can make the same route feel different from one week to the next.

Do not publish or rely on a permanent kilometre-by-kilometre list of shops and medical posts. Temporary facilities and route arrangements change. Use the current district signage. Carry enough water and simple food to remain comfortable between reliable stops, but avoid an unnecessarily heavy pack.

**Before the trip:** Build up to regular walks over several weeks. Include stairs or slopes if appropriate for your health. Break in footwear. Test the packed day bag. A single ten-kilometre flat walk does not prove readiness for a cold high-altitude climb.

**On the ascent:** Keep the pace steady enough to speak in sentences. Rushing early can leave little reserve for the upper route. Take short, regular breaks without becoming cold. Protect rain layers where they are immediately reachable. Follow any cutoff or movement instruction on the route.

**At Kedarnath:** Put on a warm layer before you feel chilled, confirm the lodging rather than assuming a bed will appear, and keep identification and registration accessible. The town can be wet, cold and crowded even when the lower valley felt warm.

**On the descent:** Tighten laces, protect toes, shorten the stride and allow time. Fatigue-related slips are possible on the way down. Anyone who has developed concerning symptoms should not treat descent as a race; seek the nearest health team and follow professional instructions.

If weather, health or an official closure makes the target unsafe, turning around is not a failed pilgrimage plan. It is the correct use of judgement in a high mountain environment.`,
    },
    {
      id: "health",
      title: "Follow Uttarakhand's health advisory, not medicine lists from blogs",
      icon: "🩺",
      content: `All Char Dham sites are above 2,700 metres, and the Uttarakhand health department warns about cold, low humidity, ultraviolet exposure, low air pressure and reduced oxygen. Its 2026 advisory and handbook should be read before travel. This page summarises planning principles; it is not medical advice or a fitness certificate.

The state advises medical and trek preparation, regular walking before travel, frequent breaks, sufficient warm and rain clothing, and carrying prescribed medicine for existing conditions. People over 55 or those with a history of heart disease, asthma, hypertension or diabetes are specifically advised to obtain a health check. If your clinician advises against the journey, do not go.

Seek the nearest health service urgently for symptoms highlighted by the state, including chest pain, shortness of breath that makes talking difficult, persistent cough, dizziness or disorientation, difficulty walking, vomiting, icy or cold skin, or one-sided weakness or numbness. Do not hide symptoms to preserve a booking.

Acetazolamide—commonly sold as Diamox—is a prescription medicine with contraindications and side effects, not a universal packing essential. Whether it is appropriate belongs in a conversation with a qualified clinician who knows the traveller's history. A pill is not a substitute for pacing, observation, professional assessment or descent when advised.

Carry regular medicine in the original packaging, plus a buffer for delay. Keep a written list of conditions, medicines, allergies and emergency contacts. If travelling with someone vulnerable, decide in advance who will accompany them down or to a health post if the group must split. The strongest safety plan is one the group has discussed before anyone becomes unwell.`,
    },
    {
      id: "registration",
      title: "Registration is mandatory, free and individual",
      icon: "📋",
      content: `The Uttarakhand Tourism FAQ says Char Dham registration has been compulsory since 2014 and produces a QR code for each pilgrim. The official portal currently offers web and app registration, with assistance at listed centres along the route. Registration itself has no fee.

The official FAQ lists accepted identity documents such as Aadhaar, voter ID, driving licence and passport. It also asks for a mobile number and emergency contact; vehicle details are required when travelling by personal or public vehicle. Requirements can be revised, so read the current form rather than copying a document checklist from an older article.

**Practical sequence:**
1. Use registrationandtouristcare.uk.gov.in, reached directly rather than through an advertisement.
2. Create the account and add every pilgrim with accurate details.
3. Select the actual destination and travel date available in the system.
4. Upload the identity material requested by the current form.
5. Save the QR-coded registration on the phone and carry a paper backup.
6. After any permitted change, download a fresh copy.

The FAQ lists assistance or registration centres including Haridwar, Rishikesh, Rudraprayag, Phata, Guptkashi, Sonprayag, Gaurikund and Kedarnath. That does not make walk-in registration the best default during a crowded period. Complete it online when possible and use an assistance centre when genuinely needed.

Do not pay a stranger for “priority registration.” Do not share identity documents over an unverified messaging account. Registration is not a darshan queue upgrade, hotel reservation, helicopter ticket or medical clearance. Those are separate arrangements.`,
    },
    {
      id: "helicopter",
      title: "Helicopter booking: one official route, several failure points",
      icon: "🚁",
      content: `The temple committee and Tourist Care Uttarakhand both direct Kedarnath shuttle bookings to **IRCTC HeliYatra** at **heliyatra.irctc.co.in**. Treat any other site claiming to sell official shuttle inventory with caution. Lookalike domains, search advertisements and agents using urgent language are not proof of authority.

Read the current IRCTC terms before payment. Registration linkage, permitted passenger details, identification, reporting time, baggage and weight rules, cancellation treatment and refund timing can change by season. The name on the ticket must match the required identification. Do not publish a fare range as if it applies to every sector and date; use the amount shown in the official booking flow.

Shuttles normally operate from designated helipads in the Guptkashi–Phata–Sirsi corridor, but the ticket controls the actual reporting location. These are not interchangeable names. Book accommodation and road transport only after you know the helipad and reporting requirement.

Flying is weather-dependent. Fog, wind, rain, visibility and operational decisions can delay or cancel a rotation. Keep food, essential medicine, warm clothing and onward travel margin even for a planned same-day return. Never pressure staff to operate, and never buy a replacement seat from someone approaching passengers after a disruption.

A helicopter reduces walking; it does not remove high-altitude exposure. The body still arrives quickly near 3,580 metres. Anyone with relevant health concerns should obtain medical advice before travel and report symptoms rather than assuming a short visit cannot cause trouble.`,
    },
    {
      id: "assisted-travel",
      title: "Pony, dandi and kandi decisions need dignity and verification",
      icon: "♿",
      content: `Pony and human-carried services are part of the pilgrimage transport system, but availability, official rates, registration points, passenger limits and operating rules should be confirmed at the authorised counter. Avoid negotiating with an unverified intermediary away from the designated process.

Choose the service for the traveller's actual mobility and medical situation, not merely to save time. Mounting, sitting for a long uneven ascent and managing cold can still be physically demanding. A palanquin or basket-style service may have different suitability and constraints. Ask how the person boards, where breaks occur, what is included and what happens if weather stops movement.

Animal welfare matters. Use registered services, respect weight and route rules, and do not demand unsafe speed or movement after an official stop. If an animal appears injured or is being mistreated, raise the issue with the route authority rather than rewarding the operator.

Families should not split without a communication plan. If one person walks and another uses assisted transport, agree on a meeting point, lodging name and fallback contact. Mobile connectivity should never be the only way the group expects to reunite. Carry the same booking details and emergency numbers on paper.`,
    },
    {
      id: "season-weather",
      title: "Choose a season by risk and crowd tolerance",
      icon: "🌦️",
      content: `The shrine operates within a limited annual season, but an open temple does not make every week equivalent.

**Opening period and May:** Snow can remain around the upper valley, nights are cold and early-season demand can be intense. Go for the religious importance of the opening period only if the group accepts queues, cold and operational uncertainty. Do not promise a specific crowd number without a current official release.

**Late May and June:** These are popular pilgrimage months and can bring heavy road, accommodation and trail demand. Warm conditions in the plains do not predict warmth at Kedarnath. Carry the same serious rain and cold protection.

**Monsoon:** Heavy rain increases the possibility of landslides, falling debris, slippery walking surfaces and movement restrictions on the long approach. Follow weather warnings and district orders. A cheap room is not a reason to travel against advice.

**Post-monsoon:** September and early autumn can offer clearer spells, but cold strengthens and fresh weather systems remain possible. “Best month” is not a safety guarantee. Confirm the shrine calendar, route status and forecast for the exact dates.

**Closing period:** Religious significance, cold and the possibility of snow all increase. Do not plan around an estimated closing day. Use the date formally published by the temple committee or state portal and leave margin before it.

Check the official forecast close to departure, then check again before the road and trek days. Pack for the upper destination rather than the temperature shown for Rishikesh or Guptkashi. Authorities can stop movement even when your own app looks reassuring.`,
    },
    {
      id: "stay-budget",
      title: "Accommodation and budget without made-up certainty",
      icon: "🏨",
      content: `Guptkashi and the wider lower route generally provide more lodging choice. Sonprayag can reduce part of the morning road transfer but is busy and transport-focused. Gaurikund is the trek start, while Kedarnath accommodation is limited, basic and exposed to high-altitude conditions. These labels are not enough: confirm the exact map pin, vehicle access, stairs, hot water, heating, meal availability, cancellation rules and check-in process.

Do not arrive at Kedarnath assuming a cheap dorm bed will always be available. Do not book a lower-valley hotel whose name includes “Kedarnath” without checking how far it actually is from Sonprayag. Do not assume the driver can take the vehicle to the property's door.

Build a live budget from six verified lines:
- transport to the Garhwal gateway and back
- road transport to the chosen base
- local transfer and any authorised walking assistance
- accommodation before, during and after the trek
- food, rain protection and contingency supplies
- a disruption reserve for an extra night or changed return

Add the current official helicopter amount only if a real ticket is part of the plan. Compare the final price including taxes and service terms. Keep enough accessible funds for a delay, but avoid carrying an unnecessarily large cash amount. Payment connectivity can vary, so use a mix of methods and settle major bookings through traceable channels.

The broad budget band at the top of this page is only a planning signal. Group size, origin, dates, walking choice, hotel standard and disruption can move the total substantially. Current official counters and booking pages—not a static travel article—must supply the final price.`,
    },
    {
      id: "packing",
      title: "Pack for cold rain and a long day—not for a product list",
      icon: "🎒",
      content: `A compact layering system is more useful than a suitcase of affiliate products. Carry a moisture-managing base layer, warm mid-layer, weather-resistant outer layer, warm hat, gloves and spare dry socks. Keep rain protection at the top of the bag. Wear broken-in footwear with grip; new shoes are a preventable source of blisters.

Carry identification, registration QR code, lodging details, emergency contacts and essential health information in both digital and protected paper form. Add a refillable water bottle, simple trail food, sunscreen, sunglasses, headlamp and a modest power bank. Pack personal prescription medicine with delay margin.

The state health advisory suggests adequate warm clothing, rain gear and basic monitoring equipment; travellers with existing conditions should carry their usual medication and test devices. Ask the treating clinician what is appropriate for the individual. Prescription drugs are not general trekking essentials.

Keep the day bag light enough to carry when tired. A large power bank, several litres of water, duplicate clothes and “just in case” gadgets can collectively become a burden. Protect electronics from rain but never let photography delay the group near a movement cutoff or in worsening weather.

Avoid single-use waste where practical. Refill responsibly, retain wrappers and use designated disposal. Kedarnath's remoteness makes every discarded bottle or packet harder to manage.`,
    },
    {
      id: "badrinath-onward",
      title: "Combining Kedarnath with Badrinath without an endurance contest",
      icon: "🛣️",
      content: `Kedarnath and Badrinath are commonly combined, but the map hides the physical load. A traveller first has to descend from Kedarnath, return through the local transport system and recover before a substantial mountain-road journey toward Badrinath.

Do not promise one permanent distance or driving time. Route choice, road control, construction, weather and the overnight base all affect the figure. The scenic Ukhimath–Chopta–Gopeshwar direction may not always be the operationally sensible route; a longer-looking alternative can be preferred under current conditions. Ask the district or transport operator close to travel.

A sensible sequence puts a recovery night between the trek and the long onward drive. If the group is sore, unwell or delayed, use the buffer rather than forcing the next booking. Register Badrinath separately as required by the official system and verify its own shrine date and road arrangements.

The pilgrimage is not improved by proving how many sectors can be completed without sleep. Build the circuit around the least mobile or medically vulnerable member, not the fastest walker.`,
    },
    {
      id: "respect",
      title: "Pilgrimage etiquette and low-impact choices",
      icon: "🙏",
      content: `Kedarnath is a living place of worship operating under extreme logistical pressure. Dress and behave with respect, follow photography restrictions, keep queues orderly and do not use a paid helper to bypass instructions. Temple access, ritual bookings and donations should go through the committee's published channels.

Keep noise low near worship and sleeping areas. Carry waste down to an authorised collection point. Do not leave clothing, plastic or food beside the trail as an offering. Use toilets where provided and protect watercourses.

Support registered local services and ask for the official rate or receipt where the system provides one. Respect porters, drivers, sanitation workers, police, medical teams and animal handlers; the journey depends on their labour. A delay caused by safety control is not poor customer service.

The responsible version of this pilgrimage is slower, better informed and willing to stop. It treats a permit, ticket or hotel confirmation as permission to participate in the system—not permission to override weather, health or public-safety decisions.`,
    },
  ],

  weatherPoints: [
    { location: "Rishikesh", altitude: 372, temp: 29, weather: "☀️" },
    { location: "Rudraprayag", altitude: 895, temp: 24, weather: "🌤️" },
    { location: "Guptkashi", altitude: 1319, temp: 19, weather: "⛅" },
    { location: "Sonprayag", altitude: 1829, temp: 14, weather: "🌦️" },
    { location: "Gaurikund", altitude: 1982, temp: 12, weather: "🌦️" },
    { location: "Kedarnath", altitude: 3580, temp: 4, weather: "🌨️" },
  ],

  routes: [
    { from: "Rishikesh", to: "Rudraprayag", status: "partial", note: "Reference corridor; check same-day traffic and advisories" },
    { from: "Rudraprayag", to: "Guptkashi", status: "partial", note: "Mountain-road reference, not a live status" },
    { from: "Guptkashi", to: "Sonprayag", status: "partial", note: "Confirm yatra traffic and parking controls" },
    { from: "Sonprayag", to: "Gaurikund", status: "partial", note: "Local transport control applies during the yatra" },
    { from: "Gaurikund", to: "Kedarnath", status: "partial", note: "About 17 km; movement is weather and authority dependent" },
  ],

  checklist: [
    { category: "Documents", items: [
      { name: "Accepted original photo identification", essential: true },
      { name: "Individual Char Dham registration and QR code", essential: true },
      { name: "Accommodation and transport details", essential: true },
      { name: "Emergency contact and medical information on paper", essential: true },
    ]},
    { category: "Weather protection", items: [
      { name: "Warm base and mid layers", essential: true },
      { name: "Weather-resistant outer layer", essential: true },
      { name: "Rain cover or dry bags", essential: true },
      { name: "Warm hat, gloves and spare dry socks", essential: true },
      { name: "Sunglasses and sunscreen", essential: true },
    ]},
    { category: "Walking day", items: [
      { name: "Broken-in footwear with grip", essential: true },
      { name: "Light day bag", essential: true },
      { name: "Refillable water bottle", essential: true },
      { name: "Simple trail food", essential: true },
      { name: "Headlamp", essential: true },
      { name: "Trekking pole if personally useful", essential: false },
    ]},
    { category: "Health", items: [
      { name: "Usual prescription medicine plus delay buffer", essential: true },
      { name: "Clinician-approved personal medical supplies", essential: true },
      { name: "Basic blister and first-aid supplies", essential: true },
      { name: "Any monitoring device advised for your condition", essential: false },
    ]},
  ],

  faq: [
    { q: "What is the confirmed Kedarnath opening date in 2026?", a: "Uttarakhand Tourism's official Char Dham portal lists 22 April 2026. Temple hours and closing information were still awaiting announcement when this page was updated, so verify those details on the state portal and Badrinath–Kedarnath Temple Committee website." },
    { q: "How long is the Kedarnath trek?", a: "Plan for about 17 km one way from Gaurikund. Current official pages variously state 16, 17 or roughly 19 km, likely because of different endpoints or page histories. Follow current district signs and allow for a long uphill day rather than planning around one exact number." },
    { q: "Is Char Dham registration mandatory and paid?", a: "Registration is mandatory and the official Uttarakhand Tourism FAQ says it is free. Register every traveller through registrationandtouristcare.uk.gov.in and carry the resulting QR code with accepted identification." },
    { q: "Where is the official Kedarnath helicopter booking site?", a: "The official route is IRCTC HeliYatra at heliyatra.irctc.co.in. The temple committee and Tourist Care Uttarakhand both direct pilgrims there. Read the current terms for registration linkage, identification, baggage, reporting and cancellation." },
    { q: "Can I visit Kedarnath and return on the same day?", a: "Some fit walkers and some confirmed helicopter passengers do, but it is a poor universal assumption. Walking involves a long ascent and descent at altitude, while flights are weather-dependent. An overnight and a buffer day create a more resilient plan." },
    { q: "Is the trek suitable for an older traveller?", a: "Age alone cannot answer this. Health history, fitness, clinician advice, altitude response and current route conditions matter. The state specifically advises a health check for people over 55 and for those with certain chronic conditions. Assisted options still involve cold, altitude and physical stress." },
    { q: "Should I carry Diamox for Kedarnath?", a: "Do not treat acetazolamide as a universal packing item. It is a prescription medicine and may be unsuitable for some people. Discuss altitude plans and medication with a qualified clinician who knows your medical history." },
    { q: "Which month is best for Kedarnath?", a: "There is no risk-free month. Opening weeks and May can be cold and crowded, June is popular, monsoon raises road and landslide risk, and post-monsoon periods can be clearer but colder. Choose within the confirmed temple season and check the exact forecast, district notices and health readiness." },
    { q: "Can Kedarnath and Badrinath be combined?", a: "Yes, but put recovery time between the Kedarnath descent and the long onward road journey. Verify the current route rather than relying on a permanent distance or drive time, and complete the required registration for both destinations." },
  ],

  emergency: [
    { name: "Integrated emergency", number: "112" },
    { name: "Tourist Care Uttarakhand", number: "1364" },
    { name: "Rudraprayag yatra control room", number: "01364-297878" },
    { name: "Rudraprayag yatra control room 2", number: "01364-297879" },
    { name: "Kedarnath heli helpline", number: "+91 98709 63731" },
  ],

  subPages: [
    { slug: "packing", title: "Kedarnath packing checklist", description: "A weather-first list to customise after a health and forecast check" },
  ],

  metaTitle: "Kedarnath Yatra 2026: Registration, Trek & Safety Guide",
  metaDescription: "Plan Kedarnath Yatra 2026 with the confirmed 22 April opening, mandatory registration, about-17 km trek, IRCTC helicopter booking and official health guidance.",
};
