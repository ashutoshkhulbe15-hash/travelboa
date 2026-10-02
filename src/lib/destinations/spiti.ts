import { DestinationData } from "./types";

export const spiti: DestinationData = {
  slug: "spiti",
  name: "Spiti Valley",
  tagline: "A route-first plan for Himachal's high cold desert",
  region: "Trans-Himalaya",
  state: "Himachal Pradesh",
  type: "adventure",
  altitude: 3650,
  temp: 8,
  weather: "☀️",
  season: "Route dependent",
  duration: "8–12 days",
  budget: { min: 18000, max: 60000 },
  heroGradient: "linear-gradient(145deg, #7a4f2c, #b58252 48%, #455a64)",
  heroImage: "/spiti.jpg",

  quickStats: [
    { label: "Kaza altitude", value: "about 3,650m", icon: "🏔️" },
    { label: "Minimum useful trip", value: "8 days", icon: "🗓️" },
    { label: "Indian visitor permit", value: "Not for Spiti entry", icon: "📋" },
    { label: "Foreign visitor ILP", value: "Kinnaur protected belt", icon: "🪪" },
    { label: "Main service base", value: "Kaza", icon: "📍" },
    { label: "Emergency", value: "112", icon: "☎️" },
  ],

  intro: `Spiti rewards travellers who plan for geography rather than highlights. Kaza sits at roughly 3,650 metres, villages and monasteries are spread across a high cold desert, and the two main approaches behave differently. The Shimla–Kinnaur side gains height more gradually and stays connected for a broader part of the year. The Manali side crosses a much rougher high route that depends on seasonal opening around Kunzum Pass. A sensible itinerary begins by choosing the approach, not by collecting hotel photographs.

Himachal Tourism states that Indian citizens do not need a permit simply to enter Spiti. Foreign visitors using the Shimla–Kinnaur approach do need an Inner Line Permit for the protected border belt. A Rohtang vehicle permit, when applicable, is a separate traffic document and not a Spiti entry permit. Those distinctions replace the vague “everyone needs an ILP” advice that circulates online.

Mountain roads, fuel stock and mobile coverage are never guaranteed across the valley. Build the trip around conservative altitude pacing, spare time and backup options, then confirm prices and service availability for your actual dates.`,

  comparison: {
    title: "Choose the approach that fits your body and calendar",
    caption: "This is a planning comparison, not a live road-status report. Verify both corridors before departure.",
    columns: ["Shimla–Kinnaur approach", "Manali–Kunzum approach", "Full circuit"],
    rows: [
      { label: "Best for", values: ["First visits and gradual ascent", "Short summer access after confirmed opening", "Travellers with 9–12 days and buffer"] },
      { label: "Altitude pattern", values: ["More gradual over several nights", "Rapid gain from Manali toward Kaza", "Gradual entry, higher-pass exit is often kinder"] },
      { label: "Main uncertainty", values: ["Rockfall, works and Kinnaur traffic", "Kunzum, water crossings and seasonal road condition", "One closure can break the loop"] },
      { label: "Permit note", values: ["Foreign visitors need ILP in protected belt", "No general Spiti entry permit for Indians", "Check both nationality and vehicle rules"] },
    ],
  },

  sections: [
    {
      id: "route-choice",
      title: "Route choice is the most important booking decision",
      icon: "🛣️",
      content: `Spiti has two practical road approaches. From the south-east, the Shimla route follows the Sutlej and Kinnaur before reaching the Spiti side through the protected border belt. From the west, the Manali route uses the Lahaul side and the seasonal Kunzum corridor toward Losar and Kaza.

The **Shimla–Kinnaur approach** is longer but allows a staged ascent through places such as Sarahan or Rampur, Kalpa or Reckong Peo, and Nako or Tabo. That does not guarantee immunity from altitude illness, but it avoids jumping directly from Manali to a 3,650-metre sleeping altitude. It also provides more intermediate settlements and opportunities to pause.

The **Manali–Kunzum approach** is shorter on a map. HPTDC lists Manali to Kaza at about 183 km, while Himachal Tourism's general page contains inconsistent distance data. Distance alone is misleading: rough surface, streams, stops, congestion and the operating status of Kunzum determine the day. Use a capable vehicle and current local advice.

For a first full circuit, enter via Shimla and leave via Manali only after the Kunzum sector is officially and practically passable. This puts the gradual ascent first. Reverse circuits can work for acclimatised travellers, but “clockwise versus anti-clockwise” is not a badge of expertise; health and route status should decide.

Never make a non-refundable onward connection immediately after the Manali–Kaza sector. If Kunzum closes, the alternative is not a small diversion. It can require retreating and reworking the whole route.`,
    },
    {
      id: "itinerary",
      title: "A ten-day first itinerary with room to breathe",
      icon: "🧭",
      content: `A first trip should use stops to control fatigue and altitude, not merely to photograph more places.

**Day 1 — Shimla or nearby:** Arrive, organise the vehicle and confirm the current Kinnaur road situation.

**Day 2 — Sarahan or Rampur area:** Break the long approach. The purpose is sleep and road margin, not a rushed attraction list.

**Day 3 — Kalpa or Reckong Peo:** Stay below Spiti's highest sleeping elevations. Foreign travellers should complete the required permit process through an authorised issuing office and confirm the protected stretch listed on the document.

**Day 4 — Nako or Tabo:** Move into the high landscape conservatively. Tabo is officially listed about 48 km from Kaza and is a good cultural stop rather than a checkpoint to clear quickly.

**Days 5 and 6 — Kaza:** Use one light day for Kaza and nearby monastery visits. Add the higher village circuit only if everyone is well. A vehicle reaching a high village does not mean the body has acclimatised.

**Day 7 — Pin Valley or a second Kaza day:** Choose one. Pin Valley deserves time, and extra Kaza margin is valuable if someone needs rest.

**Day 8 — Losar or Chandratal-area decision:** Proceed only if Kunzum and the chosen access are confirmed. Chandratal is not an automatic inclusion; camping and vehicle controls can change.

**Day 9 — Manali via the current corridor:** Expect a full road day and start with daylight.

**Day 10 — buffer:** Keep this empty until the trip has unfolded. It protects flights, trains and work commitments from a closure or slow crossing.

In shoulder seasons, use an out-and-back Shimla route rather than forcing a circuit. A complete loop is not the measure of a successful visit.`,
    },
    {
      id: "permits",
      title: "Spiti permits: nationality, route and vehicle are separate questions",
      icon: "📋",
      content: `Himachal Tourism's official Spiti page is clear: **Indian citizens do not need a permit to enter Spiti Valley**. Carry government photo identification because hotels and checkpoints can still request it.

**Foreign visitors** entering through Shimla and Kinnaur need an Inner Line Permit for specified protected areas near the international border. Himachal Tourism lists issuing authorities at Reckong Peo, Kalpa, Kaza, Manali, Shimla and Himachal Bhawan in New Delhi. The exact group, document and validity requirements should be confirmed with the issuing office. Do not rely on a screenshot of somebody else's permit.

**Rohtang vehicle permissions** are a different system. The older official domain now directs users to **rohtangpermits.hp.gov.in**. Whether a permit applies depends on route, destination, vehicle and current traffic orders. Using the Atal Tunnel, visiting Rohtang for tourism and travelling beyond it are not interchangeable purposes. Read the current portal and district notice.

**Chandratal access** is another separate decision. Do not assume that paying a small environmental fee confers a right to camp beside the lake. District, forest and wildlife rules can control vehicles, camp locations and seasonal access. Use authorised accommodation and ask the operator which current permission covers the service.

This separation prevents a common error: a traveller obtains one document and assumes it covers the person, vehicle and every protected destination. Ask three questions—what does my nationality require, what does this vehicle route require, and what does the specific site require?`,
    },
    {
      id: "altitude",
      title: "Altitude planning begins before Kaza",
      icon: "🩺",
      content: `Kaza is high enough for altitude illness, and several popular excursions climb higher. The direct Manali approach increases sleeping altitude quickly. The Shimla route offers a more gradual pattern, but a rushed itinerary can still produce symptoms.

Common early symptoms can include headache, nausea, unusual fatigue, dizziness and poor sleep. Worsening breathlessness at rest, confusion or loss of coordination are emergency signs. Stop ascending, seek medical help and descend when professionals or the situation require it. Do not leave an unwell person alone.

Spend the first Kaza day gently. Hydrate normally, eat regular meals and avoid alcohol while assessing how everyone feels. A high-village loop is not an acclimatisation treatment; it raises the person even higher. If symptoms are worsening, cancel the excursion.

Himachal Tourism lists a Community Health Centre at Kaza, a Primary Health Centre at Tabo and a civil dispensary at Kibber, but high-level care is limited. Carry regular prescription medicine and a written medical summary. Travellers with relevant heart, lung or other conditions should seek clinician advice before committing to the route.

Acetazolamide is a prescription medicine, not a universal preventive or a standard packing essential. A qualified clinician who knows the traveller's health can discuss whether it is appropriate. No drug makes a fast itinerary automatically safe.`,
    },
    {
      id: "road-vehicle",
      title: "Build the road plan around uncertainty",
      icon: "🚙",
      content: `The official tourism page recommends sturdy vehicles for the approaches from Manali or Shimla. That is useful but incomplete: ground clearance, tyre condition, brakes, cooling system, driver judgement and recovery equipment all matter more than the vehicle's marketing category.

Before departure, inspect tyres including the spare, tools, jack, lights, fluids and brakes. Know the realistic range of the vehicle. If renting, confirm which roads are permitted, who pays for damage, what roadside support exists and whether the driver is experienced on the current corridor.

Drive in daylight. Rockfall zones, blind bends, narrow edges and stream crossings become harder to assess after dark. Let uphill traffic and larger vehicles pass where local convention and safety require. Do not stop in an active rockfall channel for a photograph.

On the Manali side, water flow can strengthen later in the day during warm periods. That does not create a universal “cross every stream before 10 am” rule, but it supports an early, conservative start. Ask drivers who crossed that day rather than treating last week's reel as a status update.

Motorcyclists should carry puncture capability, weather layers and a plan for fatigue. A passenger plus luggage changes handling on rough surfaces. Do not rent a heavy motorcycle for the first time in Manali and learn on the road to Kaza.

The route cards show the journey sequence, not live road status. District authorities and fresh local information should determine current movement.`,
    },
    {
      id: "fuel-cash-connectivity",
      title: "Fuel, cash and connectivity: use redundancy, not folklore",
      icon: "⛽",
      content: `Kaza is the main service centre, but remote-valley infrastructure should never be treated as guaranteed inventory. A pump can temporarily lack fuel, an ATM can be offline, a payment terminal can lose connectivity, and a network map can overstate coverage.

Fill at a reliable pump before entering a long low-service sector, top up again when a legitimate opportunity exists, and know the vehicle's range. Carry extra fuel only in an approved container, secured and ventilated correctly, and only when the route and operator permit it. Improvised plastic bottles are a fire and contamination hazard.

Carry a reasonable cash reserve based on confirmed accommodation, food, fuel and emergency needs. Do not publish a magic amount such as ₹15,000 for every traveller. A solo bus traveller and a group responsible for a private vehicle have different exposure. Split funds rather than keeping everything in one wallet.

Himachal Tourism says network connectivity is limited and identifies BSNL as the network that works best in Spiti. Treat even that as partial. Download maps, bookings, identification copies and important phone numbers before entering. Tell a trusted contact the route and the date on which you expect to reconnect.

Offline maps are useful for orientation, not authority to follow an unverified shortcut. Navigation apps may display seasonal tracks or roads inappropriate for the vehicle. When a local closure, barrier or driver contradicts the screen, follow the safe current instruction.`,
    },
    {
      id: "kaza-villages",
      title: "Use Kaza as a base without turning villages into props",
      icon: "🏘️",
      content: `Himachal Tourism lists Key Monastery about 12 km from Kaza, Langza about 16 km, Hikkim about 17 km, Komic about 18 km and Kibber about 18 km. These are reference distances, not a command to cover all five in one continuous photo circuit.

Choose one cluster and leave time to walk slowly, ask permission and sit with the landscape. High village roads add altitude; monitor symptoms and turn back if someone feels worse. Weather and road work can change the order.

Monasteries are functioning religious institutions. Dress modestly, speak quietly, follow photography rules and never photograph people at prayer without permission. A donation does not buy access to restricted rooms or ceremonies.

Villages are homes. Do not stand in fields, enter roofs or courtyards, fly a drone, or position residents in photographs without consent. Buy food or craft items without bargaining a small local business into an unsustainable price. Ask before photographing children.

Hikkim's post office and the “highest” labels attached to several villages are popular, but altitude superlatives change with definitions. The more durable story is how communities live with water scarcity, short growing seasons, winter isolation and Buddhist cultural continuity. Write and travel with that perspective rather than reducing each village to a signboard.`,
    },
    {
      id: "tabo-pin",
      title: "Give Tabo and Pin Valley their own time",
      icon: "🏛️",
      content: `Tabo Monastery was founded in 996 CE and remains one of Spiti's most important cultural sites. Himachal Tourism describes a complex of temples, chortens, monastic spaces and significant wall paintings. The fragile art and low-lit interiors demand restraint. Follow the monastery's current photography rules rather than attempting to capture everything.

Tabo also works as a useful staged stop on the gradual route. Do not arrive late, tour quickly and drive immediately to Kaza merely because the distance is about 48 km. Time here supports both cultural understanding and gentler pacing.

Pin Valley branches away from the main corridor and should not be squeezed between two long road sectors. The valley offers a different landscape and village rhythm, with limited services and wildlife-sensitive areas. Confirm the road and accommodation for the exact date. Pin Valley National Park rules may apply to activities beyond ordinary village travel.

Do not promote guaranteed snow-leopard sightings. Winter wildlife expeditions require specialised local guides, serious cold-weather preparation and ethical distance. The animal's habitat is not a staged attraction. Any operator promising certainty should be treated cautiously.

If the itinerary has only one spare day, choose Pin Valley or the high-village circuit—not both. Fewer stops with real attention create a better article, photograph set and journey than a list of place names completed through a windscreen.`,
    },
    {
      id: "chandratal",
      title: "Chandratal is an optional high-altitude add-on",
      icon: "🌌",
      content: `Chandratal sits around 4,300 metres and depends on seasonal road access. Himachal Tourism lists it roughly 98 km from Kaza, but time and feasibility matter more than the number. Kunzum, the approach track, camp operation and local environmental controls all need confirmation.

Do not schedule the lake immediately after a rapid arrival from Manali. Sleeping near 4,300 metres can be a substantial jump. Anyone already symptomatic should not ascend for a photograph. A lower night at Losar or a return to Kaza may be the safer decision depending on the route.

Use an authorised camp located where current rules permit. Ask about toilet systems, waste removal, heating expectations, bedding, emergency plan, meal inclusion and cancellation if the access road closes. “Luxury camp” is a marketing phrase, not evidence of warmth or medical support.

Stay on established paths, keep away from the water's edge where instructed, and carry every small item of waste out. Do not play amplified music or use vehicle headlights to stage night photographs. Drone use may be restricted and should never be assumed.

If access is uncertain, replace Chandratal with a second Kaza, Tabo or Pin Valley day. The trip remains complete. Forcing the lake into a closing weather window is itinerary vanity, not good planning.`,
    },
    {
      id: "season",
      title: "Season planning is really corridor planning",
      icon: "🌦️",
      content: `Himachal Tourism broadly identifies April to October as a useful travel period, but the two approaches do not open and close together. The Shimla–Kinnaur route often provides the earlier and later access pattern; the Manali–Kunzum sector is the seasonal constraint for a full circuit.

**April and May:** An out-and-back approach through Kinnaur may be possible, while Kunzum and Chandratal access may still be closed. Expect cold nights and do not advertise a circuit until current authorities confirm it.

**June to early July:** The high route may open after clearance, but the exact date is not annual clockwork. Early-season surface and stream conditions can remain rough.

**Monsoon period:** Spiti itself lies in a rain shadow, but the approach through Kinnaur and other lower sectors can face rain, landslides and rockfall. A dry photograph from Kaza says nothing about the highway used to reach it.

**September and early October:** Often attractive for clearer weather and thinner crowds, with colder evenings. Services begin winding down and fresh snow can affect high sections.

**Winter:** This is specialist travel, not the summer road trip with a heavier jacket. Access, water, heating, transport, medical response and accommodation all require local winter expertise.

Do not plan around a fixed annual opening date for the high road. Check the current district administration, police or transport source and confirm with operators who crossed recently.`,
    },
    {
      id: "stay-budget",
      title: "Stay and budget choices should protect flexibility",
      icon: "🏨",
      content: `Accommodation ranges from homestays and guesthouses to a limited number of hotels. HPTDC operates Hotel Spiti in Kaza seasonally, and PWD lists rest houses in locations including Kaza, Losar, Tabo and Sagnam. Government listing does not guarantee public availability; confirm eligibility and booking procedure.

In villages, ask whether the room has attached or shared facilities, how hot water is provided, what heating is available, whether dinner and breakfast are included, and how the property handles a road delay. A low nightly price can become expensive when food and transport are distant.

Create a current budget in categories: transport to the gateway, vehicle or bus through Spiti, accommodation, meals, permits applicable to nationality or vehicle, fuel, and a closure reserve. Get written inclusions for a private-vehicle package. Clarify driver accommodation, tolls, parking and Chandratal.

Do not freeze a motorcycle rate, room rate or taxi day rate into an evergreen guide. Season, vehicle type, fuel, road conditions and group size change the total. Compare final quotes for the same route and cancellation terms.

The budget band at the top is broad and excludes transport to Himachal. The best saving is often one fewer rushed detour, not a dangerously thin contingency. Keep money available for an extra night if a road closes.`,
    },
    {
      id: "packing-responsibility",
      title: "Pack light, prepare deeply and leave less behind",
      icon: "🎒",
      content: `Bring layers for strong sun, wind and cold nights: base layer, warm mid-layer, insulated or wind-resistant outer layer, hat, gloves and sun protection. Carry broken-in shoes, a refillable bottle, headlamp, personal medicine, basic first aid and protected copies of documents. Camping equipment belongs with the authorised operator unless you have verified a legal independent plan.

Power can be interrupted. A modest power bank and spare camera battery are more useful than several heavy gadgets. Download maps and documents. Keep enough food and water for a delayed road sector without turning the vehicle into a waste generator.

Spiti's arid landscape and water constraints make waste and consumption visible. Refill where safe, refuse unnecessary plastic, carry batteries out and use toilets responsibly. Ask before taking long hot showers in a water-stressed village.

Do not drive off-road to reach a photograph. Tyre tracks damage fragile soil and can remain for years. Use established parking, keep music private and avoid disturbing wildlife. Prayer flags, mani stones, fossils and monastery objects are not souvenirs.

The most useful preparation is a shared group plan: route, expected check-in time, emergency contact, symptoms that stop ascent, driver authority and the booking that may be sacrificed first. When everyone knows the priorities, a change feels like a decision rather than a crisis.`,
    },
  ],

  weatherPoints: [
    { location: "Shimla", altitude: 2205, temp: 17, weather: "🌤️" },
    { location: "Kalpa", altitude: 2960, temp: 13, weather: "⛅" },
    { location: "Tabo", altitude: 3280, temp: 11, weather: "☀️" },
    { location: "Kaza", altitude: 3650, temp: 8, weather: "☀️" },
    { location: "Losar", altitude: 4085, temp: 5, weather: "🌬️" },
    { location: "Chandratal", altitude: 4300, temp: 2, weather: "🌨️" },
  ],

  routes: [
    { from: "Shimla", to: "Reckong Peo", status: "partial", note: "Reference corridor; verify Kinnaur road advisories" },
    { from: "Reckong Peo", to: "Tabo", status: "partial", note: "Protected belt for foreign visitors; not a live status" },
    { from: "Tabo", to: "Kaza", status: "partial", note: "About 48 km by official tourism reference" },
    { from: "Kaza", to: "Losar / Kunzum", status: "partial", note: "Seasonal high route; confirm on the travel day" },
    { from: "Kunzum sector", to: "Manali", status: "partial", note: "Rough seasonal corridor; never assume it is open" },
  ],

  checklist: [
    { category: "Documents and route", items: [
      { name: "Government photo identification", essential: true },
      { name: "Foreign-visitor ILP if using the protected Kinnaur belt", essential: true },
      { name: "Applicable vehicle or Rohtang permission confirmed", essential: true },
      { name: "Offline booking details and emergency contacts", essential: true },
    ]},
    { category: "Clothing", items: [
      { name: "Warm base and mid layers", essential: true },
      { name: "Wind-resistant insulated outer layer", essential: true },
      { name: "Warm hat and gloves", essential: true },
      { name: "Broken-in footwear", essential: true },
      { name: "Sunglasses and high-protection sunscreen", essential: true },
    ]},
    { category: "Road resilience", items: [
      { name: "Vehicle inspection and functional spare tyre", essential: true },
      { name: "Approved puncture and recovery equipment", essential: true },
      { name: "Water and simple emergency food", essential: true },
      { name: "Headlamp and modest power bank", essential: true },
      { name: "Approved fuel container only if genuinely required", essential: false },
    ]},
    { category: "Health", items: [
      { name: "Usual prescription medicine plus delay buffer", essential: true },
      { name: "Clinician-approved personal altitude plan", essential: true },
      { name: "Written medical and allergy information", essential: true },
      { name: "Basic first-aid and blister supplies", essential: true },
    ]},
  ],

  faq: [
    { q: "Do Indian citizens need a permit to visit Spiti?", a: "No general entry permit is required for Indian citizens, according to Himachal Tourism. Carry government photo identification. Separate vehicle, Rohtang or site-specific rules may still apply." },
    { q: "Do foreign visitors need an Inner Line Permit?", a: "Foreign visitors using the Shimla–Kinnaur protected border belt need an Inner Line Permit. Confirm the current route, documents, group conditions and issuing office with Himachal Tourism or the relevant authority before travel." },
    { q: "Which Spiti route is better for a first trip?", a: "The Shimla–Kinnaur approach is usually the more conservative first entry because altitude rises over several nights. Use the Manali side only after the Kunzum corridor is confirmed and keep a buffer for disruption." },
    { q: "When does the Manali–Kaza road open?", a: "There is no reliable annual opening date. Snow clearance, weather, water crossings and repair work determine actual movement. Check district or police information and a trusted operator close to departure." },
    { q: "How many days does Spiti need?", a: "Eight days is a practical minimum for a first route with staged ascent; nine to twelve is better for a full circuit, Pin Valley or Chandratal plus a disruption buffer." },
    { q: "Can I rely on an ATM and mobile data in Kaza?", a: "Do not make either the only plan. Kaza is the service hub and Himachal Tourism identifies BSNL as the strongest network, but outages and limited coverage are possible. Carry a proportionate cash reserve and offline documents." },
    { q: "Should I take Diamox for Spiti?", a: "Acetazolamide is a prescription medicine, not a universal packing item. Ask a qualified clinician who knows your medical history. It does not replace gradual ascent or descent when symptoms worsen." },
    { q: "Is Chandratal always included in a Spiti trip?", a: "No. It is a high, seasonal add-on whose access, camps and local rules must be confirmed. Skipping it when the road or altitude plan is unsuitable is a sound decision." },
  ],

  emergency: [
    { name: "Integrated emergency", number: "112" },
    { name: "Kaza Police Station", number: "01906-222253" },
    { name: "Spiti tourism office / ADC", number: "01906-222202" },
    { name: "Pin Valley National Park", number: "01906-222263" },
  ],

  subPages: [
    { slug: "packing", title: "Spiti packing checklist", description: "Documents, layers and road-resilience essentials" },
  ],

  metaTitle: "Spiti Valley Guide: Routes, Permits & Altitude Planning",
  metaDescription: "Plan Spiti with a route comparison, clear permit rules, gradual altitude itinerary, road and fuel resilience, Chandratal decisions and official resources.",
};
