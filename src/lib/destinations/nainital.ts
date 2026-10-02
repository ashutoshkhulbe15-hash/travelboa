import type { DestinationData } from "./types";

export const nainital: DestinationData = {
  slug: "nainital",
  name: "Nainital & Mukteshwar",
  tagline: "A locally grounded Kumaon plan: lake town first, quieter ridge country second",
  region: "Kumaon",
  state: "Uttarakhand",
  type: "adventure",
  altitude: 2084,
  temp: 16,
  weather: "Typical mild hill weather",
  season: "Mar-Jun, Sep-Nov",
  duration: "2-4 nights",
  budget: { min: 6000, max: 18000 },
  heroGradient: "linear-gradient(150deg,#1a3a5a,#3a5a7a 60%,#5a7a9a)",
  heroImage: "/nainital-lake-day-original.png",
  photoGallery: [
    {
      src: "/nainital-lake-evening-original.png",
      alt: "Naini Lake after sunset with town lights reflected across the water and low cloud over the wooded hillside",
      caption: "Naini Lake settling into evening, with the town lights reflected on the water. Photo by Ash.",
    },
    {
      src: "/nainital-lake-day-original.png",
      alt: "Wide daytime view across Naini Lake toward the forested slopes and buildings of Nainital",
      caption: "A clear daytime view across Naini Lake and the surrounding slopes. Photo by Ash.",
    },
    {
      src: "/nainital-lake-mist-original.png",
      alt: "Mist descending over the forested Nainital hillside above Naini Lake while boats cross the water",
      caption: "Mist moving down the hillside above Naini Lake—a familiar Kumaon change in mood. Photo by Ash.",
    },
  ],
  comparison: {
    title: "Which Kumaon stay fits your trip?",
    caption: "A decision aid, not a ranking. Corbett access and bookings must be checked on its official portal.",
    columns: ["Nainital", "Mukteshwar", "Corbett / Ramnagar"],
    rows: [
      { label: "Best for", values: ["First visit, lake and walkable centre", "Quiet ridge stay and slower days", "Forest experience and authorised safari"] },
      { label: "Suggested time", values: ["2 nights", "1-2 nights", "1-2 nights"] },
      { label: "Transport reality", values: ["Central area works without a car", "Vehicle planning is more important", "Plan around the confirmed entry gate"] },
      { label: "Main uncertainty", values: ["Traffic, parking and visibility", "Cloud and property location", "Zone access and wildlife movement"] },
      { label: "Do not expect", values: ["Silence on peak weekends", "A dense list of town activities", "A guaranteed tiger sighting"] },
    ],
  },
  metaTitle: "Nainital Travel Guide: Local Planning, Parking & Mukteshwar",
  metaDescription: "Plan Nainital with a locally grounded guide: official parking rules, lake and walking itinerary, arrival options, seasons, Mukteshwar comparison and Corbett booking warnings.",
  quickStats: [
    { label: "Nainital altitude", value: "about 2,000m", icon: "🏞️" },
    { label: "Mukteshwar altitude", value: "2,286m", icon: "⛰️" },
    { label: "Kathgodam railhead", value: "about 35 km", icon: "🚆" },
    { label: "Mukteshwar distance", value: "51 km", icon: "🚙" },
    { label: "Ideal first stay", value: "2 nights", icon: "🛏️" },
    { label: "Official emergency", value: "112 / 1077", icon: "☎️" },
  ],
  intro: `Ash, the founder of TravelBoa, was born in Nainital. The lake, steep neighbourhoods, sudden mist and weekend traffic are all part of the town he knows—not background details added to a generic hill-station itinerary. Nainital changes noticeably with the season and day of the week, so a good plan needs breathing room.

Nainital is organised around one simple geographic fact: the town wraps around Naini Lake. Mallital is at the northern end, Tallital at the southern end, Mall Road follows one side, and vehicle-free Thandi Road follows the other. That compact shape makes the centre walkable, but it also concentrates visitors, taxis and parking demand into a small bowl. The lake is not merely an attraction added to the town; it is the town's visual centre and the easiest way to understand how the main areas connect.

The best first trip is rarely a race through a checklist. Two nights give you one unhurried lake evening, one clear-weather morning for a viewpoint or forest walk, and enough margin for traffic. Add Mukteshwar only if you have a third or fourth night and genuinely want a quieter ridge-and-orchard setting. Add Corbett only as a separate stay around Ramnagar, not as a rushed afternoon excursion.

The plan below explains where to stay, how to arrive without creating a parking problem for yourself, which sights naturally fit together, and what changes in monsoon and winter. Check current fares, opening hours and transport arrangements directly before payment or departure.`,
  sections: [
    {
      id: "choose-your-trip",
      title: "Choose the right version of Nainital before booking",
      icon: "🧭",
      content: `Nainital works best when you decide what kind of trip you want before choosing a hotel. A lake-centred family weekend, a walking weekend and a Nainital–Mukteshwar circuit use the same destination name but need different locations, transport and pacing.

**Choose central Nainital if:**
- this is your first Kumaon trip and you want the lake, Mall Road and Naina Devi Temple within walking distance
- you are travelling with children or older relatives who benefit from short transfers
- you are arriving by bus, shared taxi or train and do not want to depend on a private car
- you value evening atmosphere, restaurants and convenience more than silence

**Choose a quieter edge of town if:**
- you want forest walks and views but can accept an uphill return or short taxi ride
- you have already seen the lakefront and want distance from the busiest evening areas
- your hotel has confirmed its own parking in writing

**Add Mukteshwar if:**
- you have at least one additional night rather than a few spare hours
- orchards, conifer forest, a slower schedule and long Himalayan views matter more than shopping or lake activities
- you are comfortable verifying your onward transport because the experience is more spread out

**Keep Corbett separate if:**
- a safari is a real priority; stay around Ramnagar and book only through the official Corbett Tiger Reserve website
- you understand that wildlife sightings are never guaranteed and the forest experience is the purpose of the visit

The common mistake is booking a remote property because its photographs look peaceful, then discovering that every meal and lake visit requires a taxi. The reverse mistake is booking directly on the busiest stretch of town while expecting a silent retreat. Read the map, ask the hotel for its exact pin and walking gradient, and decide which compromise you prefer.`,
    },
    {
      id: "arriving",
      title: "How to reach Nainital by rail, road or air",
      icon: "🚆",
      content: `Kathgodam is the practical railhead for Nainital. The District Nainital website places it about 35 km away and identifies Haldwani and Lalkuan as other rail terminals. Train numbers and timings can change, so use the railway's official enquiry or booking system for the travel date rather than copying a schedule from a travel article. From Kathgodam and Haldwani, buses and shared or private taxis continue uphill.

The district administration describes Nainital as connected by regular road services from cities including Delhi, Dehradun and Haridwar. That is useful for route planning, not proof of a particular departure. Confirm the current service with the relevant state transport operator or bus station before building a same-day connection.

For a Delhi road journey, Uttarakhand Tourism describes the route as roughly 300 km and approximately seven hours by bus under normal assumptions. Real driving time is sensitive to Delhi–NCR traffic, stops, congestion around Haldwani and the final climb. Treat any single duration as a planning estimate, not an arrival promise.

Pantnagar is the nearest airport commonly used for Nainital. Official tourism material places the onward road journey at roughly 70 km. Flight schedules can be limited and seasonal, so compare the complete door-to-door journey with rail before assuming flying will save time.

**Rail arrival:** Kathgodam is the most useful endpoint; confirm the train and onward vehicle separately.
**Bus arrival:** verify the current departure, boarding point and final stop with the operator.
**Private car:** choose accommodation only after confirming parking and approach-road access.
**Flight arrival:** check the actual flight schedule and transfer availability for the same date.

If you arrive after dark, avoid improvising an unfamiliar shortcut shown by a navigation app. Mountain approach roads vary in width and lighting. Ask the hotel which approach it recommends and whether the driver can reach the entrance. A place that is “five minutes from Mall Road” may be five steep minutes on foot rather than five level minutes with luggage.`,
    },
    {
      id: "traffic-parking",
      title: "Traffic, Mall Road and parking: what the official rules actually say",
      icon: "🅿️",
      content: `Mall Road restrictions vary by vehicle type, time and season. District guidance lists heavier restrictions during May, June and October, evening restrictions for light vehicles, and separate cycle-rickshaw timings. Enforcement arrangements may also be updated for crowd control, so check the latest district or police notice close to travel.

The district identifies parking at the Flats in Mallital, the taxi-stand area in Tallital and KMVN parking at Sukhatal, while noting that some hotels provide their own parking. This is the right starting point—not a guarantee that a space will be available when you arrive.

**Before paying for a hotel, ask four questions:**
- Does the property have parking on its own premises or merely “parking nearby”?
- Can your vehicle reach the entrance, or is the final approach pedestrian-only or very steep?
- Is parking included, chargeable or first-come-first-served?
- What should you do if town entry or the preferred lot is restricted when you arrive?

Nainital also charges a municipal lake-bridge tax on vehicles entering town. The district guidance describes collection at Tallital for traffic arriving from the Haldwani or Bhowali direction and at Sukhatal for traffic arriving from the Kaladhungi side. Confirm the current amount locally; it should not be frozen into an evergreen guide.

Once checked in, central Nainital rewards walking. Mall Road links Mallital and Tallital along one side of the lake. Thandi Road runs along the other side and does not allow vehicles, according to the district tourism page. Together they provide a simple mental map: active commercial edge on one side, quieter walking edge on the other.

**Important:** Never plan a tight onward train or flight connection using a best-case descent time. Crowd-control measures, weather, road works and weekend traffic can all change the final 35–40 km. Build a buffer and check conditions on the departure day.`,
    },
    {
      id: "two-day-plan",
      title: "A realistic two-day Nainital itinerary",
      icon: "🏞️",
      content: `A useful itinerary groups places by geography and energy rather than treating the town as a checklist.

**Arrival afternoon: understand the lake:** Check in, leave the vehicle parked if possible, and walk the lakefront. Naini Lake has boating and paddling facilities at both ends, according to the district page. Use the displayed prepaid-booth rate rather than a price quoted in an undated article. Ask about the route, duration, passenger limit and life jackets before paying.

Continue toward the Flats and Mallital. The Flats is a public gathering space beside the northern end of the lake, with religious sites, markets and recreational activity around it. Naina Devi Temple is beside the lake and can be combined naturally with this walk. Keep the evening unstructured: the changing light, boats and reflections are a better introduction than rushing to another viewpoint.

**Day two morning: choose one elevated experience:** Do not attempt every viewpoint. If you want a proper walk, choose Tiffin Top or Naina Peak according to fitness and current trail advice. The district describes Tiffin Top at 2,292 m and about 4 km from town. It describes Naina Peak as the town's highest point at 2,611 m and about 6 km from town. Both depend on visibility, and distances quoted by different starting points may vary.

If walking is not suitable, choose an operating viewpoint attraction after checking its current hours, fare, queue and weather. A ropeway ticket is poor value when cloud has removed the view, and operations can be affected by weather or maintenance.

**Day two afternoon: stay local or make one lake-district detour:** Bhimtal is officially listed about 22 km from Nainital, while Sattal is around 23 km away. Either can work as a separate half-day loop if you have a vehicle and are not already tired. Do not combine Bhimtal, Sattal, Mukteshwar and central Nainital into the same day merely because they look close on a map; hill-road time and stopping time add up.

**Day two evening:** return to the lake rather than scheduling another transfer. This is where Nainital earns a second night: you experience the centre after day visitors begin leaving, without the pressure of immediately driving back to the plains.`,
    },
    {
      id: "walks-viewpoints",
      title: "Walks and viewpoints: pick by effort, not by popularity",
      icon: "🥾",
      content: `Nainital's slopes make distance deceptive. A short line on a map can involve a meaningful climb, uneven trail or slippery surface after rain. Footwear and weather matter more than the number of kilometres.

Tiffin Top, also called Dorothy's Seat, is listed by the district at 2,292 m in the Ayarpatta area and about 4 km from town. The attraction is the combination of a forested approach and views of the Himalaya and surrounding countryside. Current trail condition, access and animal services should be checked locally; do not assume every route described in an old blog remains appropriate.

Naina Peak is listed at 2,611 m, about 6 km from town, and is the highest peak immediately associated with Nainital. The district describes broad Himalayan and lake-town views. It is the stronger choice for travellers who want a longer outing rather than a quick photo stop. Start with enough daylight, carry water and turn back if weather closes in.

Thandi Road is the lowest-effort walking option. Vehicles are not allowed, and the route follows the opposite side of the lake from Mall Road. It is useful when higher trails are unsuitable, visibility is poor or members of the group want a gentler walk.

**Low effort:** lake circuit sections and Thandi Road.
**Moderate outing:** Tiffin Top, subject to the chosen start and trail condition.
**Longer outing:** Naina Peak, with an early start and weather check.
**Poor visibility:** stay low; a cloud-covered viewpoint is not improved by forcing the climb.

During monsoon, wet stone, mud and reduced visibility change the risk. In winter, cold surfaces and occasional snow or ice can do the same. Ask locally about the trail that morning. A hometown connection is not a substitute for a current trail report.`,
    },
    {
      id: "mukteshwar",
      title: "When Mukteshwar improves the trip—and when it does not",
      icon: "🌲",
      content: `Mukteshwar is not a quieter neighbourhood of Nainital; it is a separate destination. The district places it 51 km from Nainital, 40 km from Bhowali and 74 km from Kathgodam railway station. At 2,286 m, it sits among fruit orchards and conifer forest and has long Himalayan views, an old Shiva temple and the historic research presence now associated with the Indian Veterinary Research Institute.

That difference should shape the itinerary. Nainital concentrates lakefront activity, shops and restaurants. Mukteshwar spreads the experience across ridge roads, viewpoints, forest and properties that may be far apart. It suits travellers who want a quieter night and are comfortable doing less.

**A sensible three-night structure:**
- Nights 1 and 2 in Nainital for the lakefront, one viewpoint or walk, and an unhurried evening
- Night 3 in Mukteshwar for a slower arrival, temple and ridge area, followed by a weather-dependent morning view
- Departure toward Kathgodam or Haldwani with sufficient road buffer

Chauli Ki Jali is commonly paired with Mukteshwar Temple, but cliff edges and informal scrambling deserve caution. Do not repeat a photograph you see online without assessing the surface, barriers, wind and your own footwear. Adventure activities should be booked only with an operator whose safety equipment and supervision you have assessed.

Avoid presenting the IVRI campus or research orchards as an open tourist attraction. Uttarakhand's tourism master-plan material notes that the institution itself is off limits to visitors. Enjoy the orchard landscape and public roads without assuming research facilities are open for casual entry.

Mukteshwar is a poor add-on if you have only a few afternoon hours, need frequent restaurant choices, or expect guaranteed snow-peak visibility. It is a good add-on when an extra night, quiet surroundings and the possibility—not promise—of a clear Himalayan morning are the point.`,
    },
    {
      id: "seasons",
      title: "Season planning: choose the trade-off you can live with",
      icon: "🌦️",
      content: `Uttarakhand Tourism describes Nainital as an all-year destination and highlights March to June for favourable weather. The district guidance also describes late June to September as the main rainy period and December–January as the coldest part of winter, with the possibility of snow. Those broad patterns are useful; they do not predict the conditions on your dates.

**March to April:** generally comfortable for walking, with spring colour in the wider hills. Nights can still feel cold to visitors arriving from the plains. Holiday weekends can be busy even outside the summer peak.

**May to June:** popular because the plains are hot and school holidays increase demand. Expect pressure on rooms, road access and parking. The district publishes seasonal Mall Road restrictions for these months. Book a hotel for location and parking clarity, not merely a discounted rate.

**Late June to September:** rain deepens the green landscape and brings mist like the photograph on this page, but it also means wet paths, poorer visibility and the possibility of road disruption. Check the weather forecast, district notices and road conditions immediately before departure. Keep time flexibility rather than planning a non-refundable chain of transfers.

**October to November:** often attractive for clearer post-monsoon views and comfortable daytime walking, though October is also specifically included in the district's seasonal traffic restrictions. Clear mountain views remain weather-dependent.

**December to February:** cold-weather travel can be beautiful and quieter outside holiday dates. Snowfall should never be promised for a booking. Heating, hot water, road access and cancellation terms matter more than a hotel's generic “winter view” description.

The right month depends on the desired experience. Choose spring for walking, early summer for family-holiday convenience despite crowds, monsoon for atmosphere with flexibility, autumn for a better chance of long views, and winter only with realistic cold-weather expectations.`,
    },
    {
      id: "lake-boating",
      title: "Naini Lake boating: fares, safety and timing",
      icon: "🚣",
      content: `The district describes Naini Lake as the centre of the town and confirms boating, yachting and paddle-boat activity. It also states that rowing and paddle boats are available at both ends and that rates are displayed at prepaid booths. Use the displayed booth rate on the day.

Before boarding, confirm the displayed fare, duration, permitted passenger count, route and life-jacket arrangement. Follow the operator's weather instructions. Wind, rain, visibility or an official direction can change operations, and no travel page can make a lake activity available on demand.

The best reason to boat is perspective. From the water, the steep settlement pattern and wooded slopes become easier to read than they are from a busy road. Evening reflections can be striking, as Ash's photograph shows, but low light is not a reason to pressure an operator to extend beyond permitted hours.

Swimming should not be inferred from the presence of boats. Use the lake only through authorised activities and respect local restrictions. Avoid feeding wildlife, dropping offerings or packaging into the water, and treating the shore as a disposable picnic area.`,
    },
    {
      id: "corbett",
      title: "Adding Corbett: use the real booking portal and a separate stay",
      icon: "🐘",
      content: `Corbett Tiger Reserve can complement Nainital, but it should be planned as a different experience around Ramnagar. Wildlife sightings are unpredictable, and no responsible operator can guarantee a tiger encounter.

The reserve tells visitors to use corbettgov.org as its official website and warns about lookalike booking sites. It also publishes dated notices because booking windows and portal arrangements can change. The official site currently lists Jhirna, Dhela and Garjia as year-round zones; Bijrani generally from 15 October to 30 June; and Dhikala, Durgadevi, Sonanadi and Pakhro generally from 15 November to 15 June. Weather, management decisions and current notices still control actual access.

**Safe booking sequence:**
- start at corbettgov.org and read the newest notice before choosing a zone
- check the booking window, visitor ID requirements and entry gate for that specific zone
- make the visitor details match the identification that will be carried
- book accommodation near the relevant gate rather than assuming all gates are interchangeable
- treat wildlife sightings as chance, never as a product guarantee

Do not construct a tight Nainital morning followed by a same-day safari unless the confirmed entry time, gate and road plan genuinely allow it. A separate Ramnagar-area night reduces the temptation to rush and makes an early forest entry more realistic.

Corbett is worthwhile for forest, birds, river landscapes and the complete ecosystem. A tiger may or may not appear. Any seller who markets a guaranteed sighting is selling certainty that a wild reserve cannot provide.`,
    },
    {
      id: "stay-budget",
      title: "Where to stay and how to build an honest budget",
      icon: "🏨",
      content: `Accommodation prices in Nainital fluctuate too sharply for one evergreen table to stay reliable. Season, weekend demand, parking, lake proximity, view, stairs, heating and cancellation terms all affect the rate. A useful budget starts with current quotes for the actual dates, not a number copied from last season.

**Mallital:** convenient for the northern end of the lake, the Flats, temple area and access to several attractions. Check walking gradient and vehicle approach.
**Tallital:** useful for the bus-station side and southern end of the lake. Confirm whether the room faces a busy approach road.
**Ayarpatta and upper slopes:** potentially quieter and better for walks, but a short map distance can involve a steep climb.
**Sukhatal side:** can be practical for certain approaches and parking, depending on the property.
**Mukteshwar:** choose by exact location, food availability, heating and transport rather than the broad destination name.

Build the budget in six lines: transport to the railhead or town, onward taxi or bus, accommodation, meals, authorised activities, and a contingency reserve. Keep Corbett separate because permits, vehicle allocation, guide arrangements and the correct entry gate create a different cost structure.

When comparing rooms, check the final price after taxes and the cancellation deadline. Ask whether hot water is timed, whether heating costs extra in winter, whether the driver has accommodation if relevant, and whether “lake view” means a direct view or a distant glimpse from a shared terrace.

The planning band shown at the top of this page is broad and is not a quote. A traveller using public transport and a simple room may spend far less than a family using a private vehicle, peak-weekend hotel and several paid activities. Current booking screens and official counters should supply the final numbers.`,
    },
    {
      id: "accessibility-safety",
      title: "Families, limited mobility and basic safety planning",
      icon: "♿",
      content: `Central Nainital can work well for a mixed-age group because several experiences sit close to the lake, but the town is not uniformly level. Hotel stairs, steep access lanes and uphill viewpoints can matter more than the attraction list.

If someone has limited mobility, ask the hotel for step-free details, lift availability, drop-off access and the slope between the entrance and room. “Near Mall Road” does not establish accessibility. Keep the plan centred on the lakefront and use verified transport rather than adding a viewpoint because it appears on every itinerary.

For children, the lake and open public spaces can be engaging without over-scheduling. Adults still need to supervise near water, roads and cliff viewpoints. Confirm age, height or safety restrictions directly with an attraction operator.

For medical needs, B. D. Pandey Hospital is listed by the district in Mallital. Larger hospitals are listed in Haldwani. Carry regular prescription medicine; do not assume a specific brand will be available in town. For emergencies use India's integrated emergency number 112. The district publishes 1077 for disaster control and 05942-235459 for the Nainital tehsil control room; verify directory changes before saving a number for a future trip.

**Warning:** In heavy rain, snowfall, a landslide advisory or crowd-control operation, follow district and police directions even when they disrupt a prepaid itinerary. A booking is not evidence that the road or attraction is safe.`,
    },
    {
      id: "responsible-visit",
      title: "A better way to visit a small lake town",
      icon: "🌿",
      content: `Nainital's appeal and its pressure come from the same compact geography. Large visitor numbers collect around one lake, a limited road network and steep slopes. A responsible trip is therefore practical, not performative.

Walk once you are checked in. Carry a refillable bottle and a small rubbish pouch. Use authorised parking instead of blocking a narrow approach. Avoid unnecessary horn use. Do not leave food or packaging at viewpoints. Keep music private on forest walks. Respect temple and residential spaces as places used by residents, not sets built for visitors.

Spread the itinerary rather than driving between every named attraction. One lake walk and one ridge walk usually produce a better day than five vehicle stops. If central Nainital is under obvious pressure, consider a quieter second night elsewhere in the lake district—but do not simply transfer congestion to a village without respecting its road and waste limits.

Ash was born in Nainital, and the lake photographs on this page are from his collection. Visit with the same care you would want people to show your own hometown: make room for residents, respect the lake and forest, and leave narrow roads and viewpoints cleaner than you found them.`,
    },
  ],
  weatherPoints: [
    { location: "Haldwani", altitude: 423, temp: 28, weather: "☀️" },
    { location: "Bhimtal", altitude: 1370, temp: 20, weather: "🌤️" },
    { location: "Nainital", altitude: 2084, temp: 16, weather: "⛅" },
    { location: "Mukteshwar", altitude: 2286, temp: 14, weather: "🌥️" },
  ],
  routes: [
    { from: "Kathgodam", to: "Nainital", status: "partial", note: "About 35 km; verify traffic and same-day road conditions" },
    { from: "Haldwani", to: "Nainital", status: "partial", note: "About 40 km; timing varies with town-entry traffic" },
    { from: "Nainital", to: "Bhimtal", status: "partial", note: "About 22 km; reference distance, not a live status" },
    { from: "Nainital", to: "Sattal", status: "partial", note: "About 23 km; reference distance, not a live status" },
    { from: "Nainital", to: "Mukteshwar", status: "partial", note: "51 km; confirm preferred route with the property" },
  ],
  checklist: [
    {
      category: "All-season essentials",
      items: [
        { name: "Government photo identification", essential: true },
        { name: "Walking shoes with grip", essential: true },
        { name: "Light warm layer", essential: true },
        { name: "Refillable water bottle", essential: true },
        { name: "Regular prescription medicine", essential: true },
      ],
    },
    {
      category: "Monsoon adjustments",
      items: [
        { name: "Rain jacket or poncho", essential: true },
        { name: "Water protection for phone and documents", essential: true },
        { name: "Flexible travel buffer", essential: true },
      ],
    },
    {
      category: "Winter adjustments",
      items: [
        { name: "Warm mid-layer and insulated outer layer", essential: true },
        { name: "Warm hat and gloves", essential: true },
        { name: "Confirmed heating and hot-water arrangement", essential: true },
      ],
    },
    {
      category: "Corbett add-on",
      items: [
        { name: "Official booking from corbettgov.org", essential: true },
        { name: "Matching original identification", essential: true },
        { name: "Confirmed zone, gate and reporting time", essential: true },
        { name: "Binoculars", essential: false },
      ],
    },
  ],
  faq: [
    {
      q: "How many nights are enough for Nainital?",
      a: "Two nights suit a first visit: an arrival evening around the lake and one full day for a walk or viewpoint. Add a third or fourth night only if you are including Mukteshwar, another lake-district base or a separate Corbett stay.",
    },
    {
      q: "Is Mall Road permanently closed to private vehicles?",
      a: "No. The district publishes restrictions that vary by vehicle, season and time. May, June and October have specific restrictions, with additional evening controls. Check the latest district or police notice before driving into town.",
    },
    {
      q: "Where should I park in Nainital?",
      a: "The district lists parking at the Flats in Mallital, the taxi-stand area in Tallital and KMVN parking at Sukhatal, while some hotels provide parking. Availability is not guaranteed, so confirm the hotel's arrangement and a backup before arrival.",
    },
    {
      q: "What does boating on Naini Lake cost?",
      a: "Use the current rate displayed at the authorised prepaid booths. The official district page confirms rowing and paddle boats at both ends of the lake but does not support freezing an old price into an evergreen guide.",
    },
    {
      q: "Is Mukteshwar a day trip from Nainital?",
      a: "It can be visited in a long day, but the district places it 51 km away on mountain roads. One overnight is better if quiet surroundings and a weather-dependent morning view are the reason for going.",
    },
    {
      q: "Can Nainital and Corbett be combined?",
      a: "Yes, but use separate stays. Plan Corbett around the confirmed zone, entry gate and reporting time, and book only through corbettgov.org. Do not treat a safari as a quick detour or expect a guaranteed tiger sighting.",
    },
    {
      q: "When is the best time to visit Nainital?",
      a: "March to June is the broad fair-weather period highlighted by Uttarakhand Tourism, but May and June can be crowded. Autumn can offer clearer views. Monsoon brings rain and possible road disruption; winter requires cold-weather planning. Check the forecast and district notices for the actual dates.",
    },
    {
      q: "Is the page based only on Ash being born in Nainital?",
      a: "No. Birthplace and original photographs establish the author's connection, while changeable travel facts are checked separately against district administration, Uttarakhand Tourism and relevant official operators. The page states where current confirmation is still required.",
    },
  ],
  emergency: [
    { name: "Integrated emergency", number: "112" },
    { name: "District disaster control", number: "1077" },
    { name: "Nainital tehsil control room", number: "05942-235459" },
    { name: "B. D. Pandey Hospital, Mallital", number: "05942-235012" },
  ],
  subPages: [],
};
