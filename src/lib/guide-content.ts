// Guide content registry

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  tip?: string;
  warning?: string;
  items?: string[];
  table?: { headers: string[]; rows: string[][] };
  svg?: string;
  image?: { src: string; alt: string; caption?: string };
}

export interface GuideContent {
  publishDate: string;
  lastUpdated: string;
  author: string;
  disclosure?: string;
  heroImage?: { src: string; alt: string };
  sections: GuideSection[];
  faq: { question: string; answer: string }[];
  schemaJson: object[];
  outboundLinks: { label: string; url: string }[];
}

export const guideContent: Record<string, GuideContent> = {

"acclimatize-above-3000m": {
  publishDate: "2026-05-22",
  lastUpdated: "2026-05-22",
  author: "Ash",
  disclosure: "This article mentions specific products (pulse oximeters) with affiliate links. Purchases through these links support TravelBoa at no extra cost to you.",
  heroImage: { src: "/guide-acclimatize-hero.jpg", alt: "Trekkers walking towards Kedarnath with snow-covered Himalayan peaks in the background at 3,583m altitude" },
  sections: [
    {
      heading: "",
      paragraphs: [
        "The first time I drove from Dehradun to Kedarnath without a proper acclimatization stop, I paid for it with two days of headaches and a tent I barely left. I pulled into Guptkashi around 10 PM, skipped the planned overnight, pushed to Gaurikund the next morning, and started the 16 km trek on four hours of sleep and overconfidence. By the 8 km mark, around 2,800m on the trail, my head was pounding in a way that water was not fixing. By the time I reached the temple at 3,583m, the afternoon was mostly spent horizontal.",
        "Nothing dangerous happened. But it was genuinely miserable and completely avoidable. I had broken the most basic rules of altitude gain and my body charged me for it.",
        "That trip and several since - to Kedarnath at 3,583m, Chopta at 3,680m, and the Spiti Valley at 3,650m - are what this is actually based on. Not a textbook. Not a list of disclaimers. What follows is practical: what altitude does to you, how to stay ahead of it, and how to recognize when it is time to go down."
      ],
    },
    {
      heading: "What actually happens to your body above 3,000m",
      paragraphs: [
        "At sea level, atmospheric pressure pushes a full column of air into your lungs with each breath. At 3,000m, pressure drops to about 70% of sea level. At Kedarnath's altitude of 3,583m, you are getting roughly 65% of the oxygen you would get in Dehradun. The air is still 21% oxygen - that never changes - but each breath delivers significantly less of it to your blood.",
        "Your body has responses available: it breathes faster, increases heart rate, and over days begins producing more red blood cells. These are healthy adaptations, but they take time. The problem is that most people on a one-week trip from Delhi or Mumbai do not give their bodies that time.",
        "When you ascend faster than your system can compensate, the oxygen deficit causes blood vessels in the brain to dilate (which creates the characteristic headache) and fluid to shift out of your capillaries into surrounding tissue. When that fluid accumulates in the brain, it is cerebral edema. When it accumulates in the lungs, it is pulmonary edema. Both are serious.",
        "Here is what matters for planning: individual sensitivity to altitude varies significantly and cannot be reliably predicted by fitness, age, or previous altitude experience. I have been symptom-free on one Kedarnath trip and symptomatic on another at similar fitness levels. The variables are complex. The only reliable protection is controlling your ascent rate. Fitness is not a substitute for that."
      ],
    },
    {
      heading: "Recognizing AMS before it gets serious",
      paragraphs: [
        "Acute Mountain Sickness (AMS) is what most people mean when they say \"altitude sickness.\" It is the common, manageable version. Catch it early and it resolves in 24 to 48 hours with rest. Ignore it and it progresses.",
        "Headache is the cardinal symptom. Not a vague heaviness - a real headache, usually throbbing, that worsens with exertion or bending over. If you develop a headache within 6 to 12 hours of arriving at a new altitude, that is AMS until proven otherwise.",
        "Mild AMS: Headache plus one other symptom. The right response is to stop ascending, rest at your current altitude, take ibuprofen 400mg for the headache, and drink water. Most mild AMS resolves within 24 hours if you do not push higher. Do not take paracetamol and push on. Rest means rest.",
        "Moderate AMS: Headache that is not responding to ibuprofen, pronounced nausea, difficulty with basic tasks. Rest at current altitude. If you are not significantly better after 24 hours, descend 300 to 500m and rest there. Diamox 250mg twice daily can assist.",
        "Severe AMS: Any symptom that is getting worse despite rest, or severe headache plus vomiting plus extreme fatigue. Descend immediately.",
        "The pattern I see repeatedly on the Kedarnath trail is pilgrims who are clearly symptomatic continuing to climb because they have flown in from Bangalore and this is their only week off. That logic is understandable and the wrong call. AMS that is pushed through does not stay AMS."
      ],
      items: [
        "Nausea, sometimes vomiting",
        "Fatigue that is disproportionate to your effort level",
        "Dizziness when you stand up quickly",
        "Poor sleep: waking frequently, shallow breathing, feeling completely unrefreshed in the morning",
        "Loss of appetite (common at altitude, and worth flagging because you still need to eat)"
      ],
      svg: `<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;background:#fafaf8;font-family:Outfit,sans-serif">
        <text x="360" y="32" text-anchor="middle" font-size="15" font-weight="800" fill="#111">AMS Severity - Know When to Act</text>
        <!-- Mild -->
        <rect x="20" y="55" width="220" height="245" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
        <circle cx="130" cy="95" r="24" fill="#22c55e" opacity="0.15"/><text x="130" y="101" text-anchor="middle" font-size="24">😐</text>
        <text x="130" y="132" text-anchor="middle" font-size="14" font-weight="800" fill="#15803d">MILD AMS</text>
        <text x="130" y="154" text-anchor="middle" font-size="11" fill="#555">Headache + 1 other symptom</text>
        <line x1="50" y1="168" x2="210" y2="168" stroke="#bbf7d0" stroke-width="1"/>
        <text x="40" y="190" font-size="11" fill="#555">• Stop ascending</text>
        <text x="40" y="210" font-size="11" fill="#555">• Rest at current altitude</text>
        <text x="40" y="230" font-size="11" fill="#555">• Ibuprofen 400mg</text>
        <text x="40" y="250" font-size="11" fill="#555">• Drink water</text>
        <text x="40" y="276" font-size="10" font-weight="600" fill="#15803d">Resolves in 24hrs with rest</text>
        <!-- Moderate -->
        <rect x="250" y="55" width="220" height="245" rx="14" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
        <circle cx="360" cy="95" r="24" fill="#f59e0b" opacity="0.15"/><text x="360" y="101" text-anchor="middle" font-size="24">😣</text>
        <text x="360" y="132" text-anchor="middle" font-size="14" font-weight="800" fill="#b45309">MODERATE AMS</text>
        <text x="360" y="154" text-anchor="middle" font-size="11" fill="#555">Persistent headache + nausea</text>
        <line x1="280" y1="168" x2="440" y2="168" stroke="#fde68a" stroke-width="1"/>
        <text x="270" y="190" font-size="11" fill="#555">• Rest at current altitude</text>
        <text x="270" y="210" font-size="11" fill="#555">• Diamox 250mg x2 daily</text>
        <text x="270" y="230" font-size="11" fill="#555">• If no better in 24hrs:</text>
        <text x="270" y="250" font-size="11" font-weight="600" fill="#b45309">  Descend 300-500m</text>
        <text x="270" y="276" font-size="10" font-weight="600" fill="#b45309">Do not push higher</text>
        <!-- Severe -->
        <rect x="480" y="55" width="220" height="245" rx="14" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/>
        <circle cx="590" cy="95" r="24" fill="#ef4444" opacity="0.15"/><text x="590" y="101" text-anchor="middle" font-size="24">🚨</text>
        <text x="590" y="132" text-anchor="middle" font-size="14" font-weight="800" fill="#dc2626">SEVERE AMS / HACE / HAPE</text>
        <text x="590" y="154" text-anchor="middle" font-size="11" fill="#555">Confusion, ataxia, breathless</text>
        <line x1="510" y1="168" x2="670" y2="168" stroke="#fecaca" stroke-width="1"/>
        <text x="500" y="190" font-size="11" fill="#555">• DESCEND IMMEDIATELY</text>
        <text x="500" y="210" font-size="11" fill="#555">• As far as possible</text>
        <text x="500" y="230" font-size="11" fill="#555">• Call SDRF: 1070</text>
        <text x="500" y="250" font-size="11" fill="#555">• Disaster helpline: 112</text>
        <text x="500" y="276" font-size="10" font-weight="600" fill="#dc2626">Life-threatening - do not delay</text>
      </svg>`,
    },
    {
      heading: "HACE and HAPE: the two that require immediate action",
      paragraphs: [
        "HACE (High Altitude Cerebral Edema) and HAPE (High Altitude Pulmonary Edema) are uncommon at Kedarnath and Chopta altitudes but they do happen. Knowing the signs is non-negotiable if you are going above 3,000m with any group.",
        "HACE is severe AMS that has progressed to the point where the brain is swelling. The defining symptom is ataxia - loss of coordination. Test it this way: walk heel-to-toe in a straight line for 10 steps on flat ground. If the person cannot do it, or if they are confused, disoriented, have slurred speech, or are unusually drowsy, that is HACE.",
        "HACE at altitude is an emergency. Descend immediately and as far as safely possible - ideally 1,000m or more. If you have a portable altitude chamber (Gamow Bag), use it while descent is being organized. SDRF Uttarakhand runs rescue operations on the Kedarnath route; their number is 1070. The general disaster helpline is 112.",
        "HAPE is fluid accumulating in the lungs and it is more common than HACE, and kills more people. The early signs are subtle: unusual breathlessness with mild exertion, a dry persistent cough, a feeling that you cannot get a full breath even when sitting still. As it develops: a wet cough (sometimes with pink or frothy mucus), visible labored breathing, and in advanced cases you can hear crackling sounds in the chest.",
        "HAPE often develops during the second night at a new altitude - people wake up struggling to breathe. If that happens, get the person sitting upright and begin descent immediately. Do not wait for morning.",
        "For reference: Diamox is for AMS. HACE is treated with dexamethasone (4mg every 6 hours). HAPE is treated with nifedipine (30mg extended release). If you are planning extended treks above 4,000m, these medications are worth carrying after a conversation with a wilderness medicine doctor. For Kedarnath-level trips, the priority is recognizing the condition and descending fast."
      ],
      warning: "HACE and HAPE are life-threatening. If someone cannot walk heel-to-toe, is confused, or is breathless at rest, descend immediately. Do not wait for morning. Call SDRF at 1070.",
    },
    {
      heading: "Ascent rate rules that actually work",
      paragraphs: [
        "Above 3,000m, the rule that works is this: do not increase your sleeping altitude by more than 300 to 500m per day.",
        "That is sleeping altitude, not your maximum altitude of the day. You can hike higher during the day as long as you return to sleep lower. This is the \"climb high, sleep low\" principle and it works because acclimatization happens most effectively during sleep, when your body consolidates the physiological changes.",
        "On the Kedarnath route from Dehradun, a sensible schedule looks like this:",
        "The majority of trekkers reach Kedarnath in 2 days from Rishikesh, which puts them at 3,583m on day 2. For fit, experienced trekkers with no AMS history, this often works. For everyone else, sleeping a night at Guptkashi before the trek start is a meaningful risk reduction.",
        "The second rule: take one rest day for every 1,000m gained above 3,000m. For a short Kedarnath trip this is not very applicable. It matters significantly for treks heading to 5,000m or above.",
        "The third rule, and the hardest to follow: do not ascend with AMS symptoms. If you wake up at Gaurikund with a headache, do not start the trek. Spend the day at 2,039m, drink water, rest, and reassess the next morning. Ascending while symptomatic is the mechanism by which AMS becomes HACE. Read the full Kedarnath planning guide for day-by-day logistics including the Gaurikund overnight option."
      ],
      items: [
        "Day 1: Drive from Dehradun (682m) to Guptkashi (1,319m). Sleep at Guptkashi. This is 637m gain and well within limits.",
        "Day 2: Drive to Gaurikund (2,039m), begin the trek. Sleep at Jungle Chatti (2,600m) or push to Bheembali (2,900m) if you feel strong.",
        "Day 3: Complete the trek to Kedarnath (3,583m). From Bheembali you are gaining 683m of sleeping altitude. Aggressive for some people, manageable for most."
      ],
      tip: "Sleeping a night at Guptkashi before the trek is the single most effective thing most trekkers can do to reduce AMS risk on the Kedarnath route. It costs one extra night of accommodation and could save your entire trip.",
      svg: `<svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;background:#fafaf8;font-family:Outfit,sans-serif">
        <text x="360" y="28" text-anchor="middle" font-size="15" font-weight="800" fill="#111">Dehradun to Kedarnath - Altitude Gain by Day</text>
        <text x="360" y="46" text-anchor="middle" font-size="11" fill="#999">Recommended 3-day schedule with acclimatization stop</text>
        <!-- Y axis -->
        <line x1="90" y1="70" x2="90" y2="290" stroke="#e0e0e0" stroke-width="1"/>
        <text x="80" y="290" text-anchor="end" font-size="10" fill="#999">0m</text>
        <line x1="85" y1="246" x2="680" y2="246" stroke="#f0f0f0" stroke-width="0.5" stroke-dasharray="4 4"/>
        <text x="80" y="250" text-anchor="end" font-size="10" fill="#999">1,000m</text>
        <line x1="85" y1="202" x2="680" y2="202" stroke="#f0f0f0" stroke-width="0.5" stroke-dasharray="4 4"/>
        <text x="80" y="206" text-anchor="end" font-size="10" fill="#999">2,000m</text>
        <line x1="85" y1="158" x2="680" y2="158" stroke="#f0f0f0" stroke-width="0.5" stroke-dasharray="4 4"/>
        <text x="80" y="162" text-anchor="end" font-size="10" fill="#999">3,000m</text>
        <line x1="85" y1="114" x2="680" y2="114" stroke="#f0f0f0" stroke-width="0.5" stroke-dasharray="4 4"/>
        <text x="80" y="118" text-anchor="end" font-size="10" fill="#999">4,000m</text>
        <!-- Danger zone -->
        <rect x="90" y="70" width="590" height="88" fill="#ef4444" opacity="0.04"/>
        <text x="96" y="84" font-size="9" fill="#ef4444" opacity="0.6">AMS risk zone (above 3,000m)</text>
        <!-- Path -->
        <polyline points="140,260 300,232 460,178 620,132" fill="none" stroke="#c2662d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Dots -->
        <circle cx="140" cy="260" r="8" fill="#c2662d"/><text x="140" y="264" text-anchor="middle" font-size="8" fill="white" font-weight="700">1</text>
        <circle cx="300" cy="232" r="8" fill="#c2662d"/><text x="300" y="236" text-anchor="middle" font-size="8" fill="white" font-weight="700">2</text>
        <circle cx="460" cy="178" r="8" fill="#c2662d"/><text x="460" y="182" text-anchor="middle" font-size="8" fill="white" font-weight="700">3</text>
        <circle cx="620" cy="132" r="8" fill="#c2662d"/><text x="620" y="136" text-anchor="middle" font-size="8" fill="white" font-weight="700">4</text>
        <!-- Labels -->
        <text x="140" y="300" text-anchor="middle" font-size="11" font-weight="700" fill="#111">Dehradun</text>
        <text x="140" y="314" text-anchor="middle" font-size="10" fill="#999">682m</text>
        <text x="300" y="300" text-anchor="middle" font-size="11" font-weight="700" fill="#111">Guptkashi</text>
        <text x="300" y="314" text-anchor="middle" font-size="10" fill="#999">1,319m (sleep)</text>
        <text x="460" y="300" text-anchor="middle" font-size="11" font-weight="700" fill="#111">Bheembali</text>
        <text x="460" y="314" text-anchor="middle" font-size="10" fill="#999">2,900m (sleep)</text>
        <text x="620" y="300" text-anchor="middle" font-size="11" font-weight="700" fill="#111">Kedarnath</text>
        <text x="620" y="314" text-anchor="middle" font-size="10" fill="#999">3,583m</text>
        <!-- Gain labels -->
        <text x="220" y="240" text-anchor="middle" font-size="9" fill="#c2662d" font-weight="600">+637m</text>
        <text x="380" y="200" text-anchor="middle" font-size="9" fill="#c2662d" font-weight="600">+1,581m</text>
        <text x="540" y="150" text-anchor="middle" font-size="9" fill="#c2662d" font-weight="600">+683m</text>
      </svg>`,
    },
    {
      heading: "Diamox: dosage, timing, and what to expect",
      image: { src: "/guide-acclimatize-diamox.jpg", alt: "Diamox acetazolamide 250mg tablet strip in a trekking backpack pocket", caption: "Diamox 250mg - available at most Rishikesh and Haridwar chemists" },
      paragraphs: [
        "Diamox (acetazolamide) speeds up acclimatization by stimulating faster breathing, which increases blood oxygen levels. It works. It is not a substitute for proper ascent rates, and it does not prevent HACE or HAPE directly, but for people concerned about sensitivity or working with a compressed schedule, it is genuinely useful.",
        "Dosage for prevention: 125mg twice daily (morning and evening). Some protocols use 250mg twice daily. I use 125mg twice daily on Kedarnath-level trips. The side effects are more manageable at the lower dose and effectiveness is comparable for altitudes up to 4,000m. For treks above 4,500m, the 250mg dose is more commonly recommended.",
        "When to start: Begin 1 to 2 days before ascending above 3,000m. If you are staying in Guptkashi the night before the Kedarnath trek, start Diamox that morning. Continue until you have been at your target altitude for 2 full days or until you begin descending.",
        "Where to get it: Available at most chemists in Rishikesh and Haridwar - ask for \"Acetazolamide 250mg\" if the brand name is not stocked. Technically prescription-only in India but practically available over the counter at hill-town pharmacies. I pick it up in Rishikesh on the way through rather than trying to source it in Dehradun.",
        "What Diamox does not do: It does not let you skip acclimatization stops. People on Diamox still develop AMS if they go up too fast. Think of it as a margin-extender, not a workaround."
      ],
      items: [
        "Tingling in the fingers, toes, and lips (paresthesia). Affects the majority of users. Harmless and usually mild.",
        "Frequent urination, especially in the first 24 hours. Budget extra time on the trail.",
        "Carbonated drinks taste metallic or flat. Beer becomes unpleasant. This is actually useful if you were considering drinking at altitude (do not)."
      ],
      warning: "Diamox is a sulfa drug. If you have a sulfa allergy (to antibiotics like Bactrim/Septran, or to certain diuretics), do not take Diamox. Sulfa reactions can be severe. Stop immediately if you develop a skin rash, vision changes, or severe nausea.",
    },
    {
      heading: "Hydration at altitude",
      image: { src: "/guide-acclimatize-dhaba.jpg", alt: "Dhaba at Jungle Chatti on the Kedarnath trek route serving tea and meals to trekkers", caption: "Dhaba at Jungle Chatti - tea, Maggi, and water refills on the Kedarnath trail" },
      paragraphs: [
        "You lose more water at altitude than at sea level: faster breathing means more moisture leaving your lungs with every exhale, and lower humidity accelerates it further. The general guide is 3 to 4 liters of water per day while trekking above 3,000m.",
        "The practical difficulty is that both thirst and appetite decrease at altitude. You genuinely do not feel like eating or drinking at the exact time when eating and drinking matter most. If you are on the Kedarnath trail and you realize you have not drunk anything in 2 hours, that is already too long.",
        "What to drink: Water and oral rehydration salts (ORS). Electrolyte tablets dissolved in water work equally well. A useful pattern on heavy trek days: drink one ORS packet per liter, every 2 to 3 hours. The dhabas at Jungle Chatti, Bheembali, and Linchauli all serve hot tea and can refill bottles - you do not need to carry more than 1.5 liters at a time on the Kedarnath route.",
        "Caffeine is a common question. The evidence on caffeine at altitude is genuinely mixed. I drink tea on every mountain trip without obvious problems. What you should not do is use caffeine to push through fatigue that is actually an AMS symptom.",
        "Check the packing list for 4,000m treks for the specific ORS brand I carry and electrolyte options that work."
      ],
      items: [
        "Alcohol. It suppresses the increased breathing rate your body uses to compensate for lower oxygen and disrupts the sleep during which acclimatization actually happens.",
        "Sleeping pills and sedatives. Same problem - they depress the breathing drive that you need.",
        "Heavy exertion in your first hours at a new elevation. Walk slowly. Rest when you need to. The temple will still be there in the afternoon."
      ],
    },
    {
      heading: "AMS vs HACE vs HAPE: symptoms and response at a glance",
      paragraphs: [
        "The key point from this table: Diamox is only relevant to AMS. By the time you are in HACE or HAPE territory, the answer is descent and emergency medication - not more Diamox. If you are leading a group above 4,000m, talking to a doctor about carrying dexamethasone and nifedipine is worth the conversation."
      ],
      table: {
        headers: ["", "AMS", "HACE", "HAPE"],
        rows: [
          ["What it is", "Common altitude sickness", "Brain swelling", "Fluid in the lungs"],
          ["Primary symptom", "Headache", "Ataxia, confusion", "Breathlessness at rest"],
          ["Other signs", "Nausea, fatigue, poor sleep", "Severe headache, drowsiness, slurred speech", "Wet cough, crackling chest, blue lips"],
          ["Typical onset", "6 to 12 hours after arriving", "AMS that progresses", "Second night at new altitude"],
          ["Risk level", "Low to moderate", "Life-threatening", "Life-threatening"],
          ["First action", "Stop ascending, rest, ibuprofen", "Descend immediately", "Descend immediately"],
          ["Emergency drug", "Diamox assists", "Dexamethasone 4mg", "Nifedipine 30mg"],
          ["Common at 3,500m?", "Yes, frequently", "Rare but occurs", "Rare but occurs"],
        ],
      },
    },
    {
      heading: "When to descend: the lines you do not negotiate",
      paragraphs: [
        "This is the part that matters most, and the part that is hardest in practice because altitude impairs judgment, and social pressure from the group or from sunk costs is real.",
        "How far to descend: 300 to 500m resolves most AMS. For HACE or HAPE, descend as far and as fast as you can move safely - these conditions do not plateau, they progress. At Kedarnath specifically, SDRF Uttarakhand (1070) and the general disaster helpline (112) cover rescue operations. A basic medical post exists at the base camp area near the temple. Do not treat it as a reason to delay descent in serious cases - it handles minor issues, not HACE or HAPE.",
        "For route logistics before your trip, read the Kedarnath safety and emergency guide and save the trip dashboard with emergency contacts for offline access."
      ],
      items: [
        "Descend immediately, no discussion: Failed ataxia test (cannot walk heel-to-toe), confusion or slurred speech, breathlessness at rest, severe headache not responding to 400mg ibuprofen within 2 hours, someone else telling you that you look or sound wrong",
        "Descend within 24 hours: Moderate AMS not improving after a full day of rest, unable to sleep for 2 consecutive nights, not keeping food or water down for 24 hours, resting SpO2 below 75% with any symptoms",
        "Do not ascend at all today: You have a headache this morning, you had fewer than 4 hours of sleep, you vomited in the last 12 hours, you are still symptomatic from yesterday"
      ],
    },
    {
      heading: "Pulse oximeter: the one piece of gear worth carrying",
      image: { src: "/guide-acclimatize-oximeter.jpg", alt: "Finger pulse oximeter showing SpO2 reading of 99 percent used for monitoring blood oxygen at altitude", caption: "A basic pulse oximeter - Rs. 800 to Rs. 1,500, weighs 35 grams" },
      paragraphs: [
        "A pulse oximeter clips to your fingertip and reads blood oxygen saturation (SpO2). At sea level, 95 to 100% is normal. At 3,500m, most properly acclimatized people stabilize at 85 to 92%. A reading below 80% with symptoms is a concrete signal to stop ascending.",
        "The oximeter does not diagnose altitude sickness - symptoms do that. But it gives you data points that are useful, especially at night when you might feel fine but are desaturating. It is also reassuring when readings are normal and you are second-guessing whether a mild headache is AMS or just dehydration.",
        "Take readings at the same time each day for comparison: morning readings right after waking are typically the lowest and most informative. If morning SpO2 drops more than 5 points below the previous day's reading, pay attention.",
        "A reliable finger pulse oximeter costs Rs. 800 to Rs. 1,500. The Dr. Trust 202 and Contec CMS50D both read accurately at altitude (some cheaper models do not). I have carried one for 3 years and it is 35 grams and the size of a matchbox. See the gear recommendations for a specific buy link.",
        "Before your trip, go through the Char Dham e-pass and registration process and check road conditions on the Rishikesh to Kedarnath route if you are traveling in July or August."
      ],
      tip: "Take readings at the same time each day. Morning readings right after waking are the most informative. If your SpO2 drops more than 5 points below the previous day, that is a signal to stop ascending.",
    },
  ],
  faq: [
    { question: "Does being fit mean I will not get altitude sickness?", answer: "No. Cardiovascular fitness has almost no correlation with altitude sensitivity. Fit people develop AMS just as frequently as unfit people - the mechanisms are physiological, not fitness-dependent. Do not use a strong fitness base to justify compressing your acclimatization schedule." },
    { question: "Can I take Diamox if I am pregnant?", answer: "No. Acetazolamide is contraindicated during pregnancy. If you are pregnant and considering a trek above 3,000m, that is a conversation for your OB, not something a pill resolves." },
    { question: "What is the minimum practical acclimatization for Kedarnath?", answer: "For most people, one night at Guptkashi (1,319m) before the trek day gives a meaningful baseline. If you have any history of AMS or are coming from sea level with no altitude in the previous month, add a night at Gaurikund (2,039m) before you start the 16 km to the temple." },
    { question: "Does alcohol really affect acclimatization that much?", answer: "Yes. Alcohol suppresses the increased breathing rate your body uses to compensate for lower oxygen, disrupts sleep architecture (which is when acclimatization consolidates), and masks early AMS symptoms. Drinking at altitude consistently will slow your adaptation and worsen any symptoms you already have." },
    { question: "Is Diamox the same as a sleeping pill?", answer: "No, it is the opposite. Diamox stimulates breathing and prevents the drop in blood oxygen that naturally occurs during sleep at altitude. Sleeping pills suppress breathing and make nocturnal desaturation worse. Do not take sleeping pills at altitude." },
    { question: "I felt completely fine last time I went to Kedarnath. Does that mean I am safe this time?", answer: "Not necessarily. Altitude sensitivity varies between trips for the same person. Factors like overall health, recent illness, sleep debt, and how quickly you ascended all play a role. Previous successful acclimatization is a good data point but not a guarantee. Follow the same ascent rules regardless." },
    { question: "What should I eat when I have AMS symptoms?", answer: "High-carbohydrate foods are easier to metabolize at altitude than fats or proteins. Eat even if you do not want to - loss of appetite is a symptom, not a reason to skip meals. Maggi, rice, roti, dal: the standard dhaba fare on the Kedarnath trail is actually appropriate nutrition at altitude. If you cannot keep anything solid down, ORS in water and clear broth until you feel better." },
    { question: "When should I see a doctor before going to altitude?", answer: "If you have a heart condition, high blood pressure, asthma, kidney disease, or a history of severe AMS, talk to a doctor before the trip. Also before taking Diamox if you have never taken it, to rule out sulfa allergy." },
  ],
  schemaJson: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Acclimatize Above 3,000m: AMS, Diamox and Ascent Rules",
      "description": "Practical acclimatization guide for treks above 3,000m in India. Altitude sickness symptoms, Diamox dosage and timing, safe ascent rates, hydration, and when to descend.",
      "author": { "@type": "Person", "name": "Ash", "url": "https://www.travelboa.com/about" },
      "publisher": { "@type": "Organization", "name": "TravelBoa", "url": "https://www.travelboa.com" },
      "datePublished": "2026-05-22",
      "dateModified": "2026-05-22",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.travelboa.com/guides/acclimatize-above-3000m" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Does being fit mean I will not get altitude sickness?", "acceptedAnswer": { "@type": "Answer", "text": "No. Cardiovascular fitness has almost no correlation with altitude sensitivity. Fit people develop AMS just as frequently as unfit people - the mechanisms are physiological, not fitness-dependent." } },
        { "@type": "Question", "name": "What is the minimum practical acclimatization for Kedarnath?", "acceptedAnswer": { "@type": "Answer", "text": "For most people, one night at Guptkashi (1,319m) before the trek day gives a meaningful baseline. If you have any history of AMS, add a night at Gaurikund (2,039m) before starting the 16 km to the temple." } },
        { "@type": "Question", "name": "Does alcohol really affect acclimatization that much?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Alcohol suppresses the increased breathing rate your body uses to compensate for lower oxygen and disrupts sleep architecture, which is when acclimatization consolidates." } },
        { "@type": "Question", "name": "Can I take Diamox if I am pregnant?", "acceptedAnswer": { "@type": "Answer", "text": "No. Acetazolamide is contraindicated during pregnancy. Consult your OB before the trip." } },
        { "@type": "Question", "name": "Is Diamox the same as a sleeping pill?", "acceptedAnswer": { "@type": "Answer", "text": "No, it is the opposite. Diamox stimulates breathing. Sleeping pills suppress breathing and make nocturnal desaturation worse." } },
        { "@type": "Question", "name": "What should I eat when I have AMS symptoms?", "acceptedAnswer": { "@type": "Answer", "text": "High-carbohydrate foods are easier to metabolize at altitude. Maggi, rice, roti, and dal are appropriate. If you cannot keep solids down, ORS in water until you feel better." } },
        { "@type": "Question", "name": "When should I see a doctor before going to altitude?", "acceptedAnswer": { "@type": "Answer", "text": "If you have a heart condition, high blood pressure, asthma, kidney disease, or a history of severe AMS. Also consult before taking Diamox for the first time to rule out sulfa allergy." } },
      ]
    }
  ],
  outboundLinks: [
    { label: "Wilderness Medical Society altitude guidelines", url: "https://wms.org" },
    { label: "Char Dham official registration", url: "https://registrationandtouristcare.uk.gov.in" },
  ],
},

};

// ═══ PACKING 4000M ═══
guideContent["packing-4000m"] = {
  publishDate: "2026-05-22",
  lastUpdated: "2026-05-22",
  author: "Ash",
  heroImage: { src: "/guide-packing-hero.jpg", alt: "Trekker with loaded backpack walking on a high altitude Himalayan trail at 4,000m with snow-capped peaks" },
  sections: [
    {
      heading: "",
      paragraphs: [
        "The heaviest bag I ever watched someone haul to Kedarnath belonged to a man from Hyderabad who had packed for every possible disaster. A full blanket, four changes of jeans, two umbrellas, a portable speaker, a pillow, and enough dry food to survive a week if the dhabas vanished. His bag was around 22 kg and he had never trekked before. I passed him near the 5 km mark, just past Jungle Chatti, where he had stopped to reorganize at the side of the trail. He looked at my 7.5 kg daypack with an expression somewhere between disbelief and fury.",
        "He made it to the temple eventually, but I watched him suffer the entire way up. Not from altitude, not from the cold - from dead weight on his back. He paid for every gram of that blanket and every pair of those jeans with his knees.",
        "That image has become my working definition of a packing mistake: not forgetting something critical, but bringing too much of the wrong things. At 4,000m, every kilogram costs more than it does at sea level. Your cardiovascular system is already running at reduced capacity. Your breathing is labored. The last thing your body needs is an extra 5 kg of stuff it will never use.",
        "This guide covers what actually works above 4,000m - treks like Kedarnath, Chopta, the Spiti Valley, and Ladakh - based on what I have carried and tested across multiple seasons. The goal is a moving pack weight under 8 kg for a 3-day trek. That number is achievable without spending a fortune, and it transforms the experience."
      ],
    },
    {
      heading: "Why cotton kills and synthetic saves: the 3-layer system",
      paragraphs: [
        "Before the gear list, the concept. Most packing failures at altitude trace back to not understanding the layering system - or understanding it in theory but ignoring it in practice.",
        "Your body regulates temperature by managing heat gain and heat loss. On a trek, you generate significant body heat during exertion, then lose it rapidly the moment you stop. At altitude, this swing is more extreme because temperatures drop faster and the wind cuts harder.",
        "Base layer: moisture management. The layer touching your skin has one job - move sweat away from your body before it cools and chills you. Cotton cannot do this. Cotton absorbs moisture, holds it against your skin, and turns into a cold wet compress the moment you stop moving. Above 3,500m, especially in October, this is genuinely dangerous.",
        "What works: merino wool or synthetic polyester. Merino wool is the premium option - it manages moisture, resists odor, and stays warm even when slightly damp. Decent merino base layers start around Rs 2,000-3,500 at Decathlon on Rajpur Road in Dehradun. Synthetic polyester is the budget-friendly alternative. The Quechua synthetic base layers at Decathlon are Rs 499-799 and I have used them on multiple treks without complaint.",
        "Mid layer: insulation. The middle layer traps warm air close to your body. A 200-weight fleece is the sweet spot for most high-altitude trekking. The Quechua MH100 fleece at Decathlon is Rs 1,499 and has been in my pack for three seasons. Down jackets are excellent for camp but too warm and too slow-drying for active hiking.",
        "Outer layer: weather protection. The shell jacket should be waterproof and windproof. Minimum 10,000mm hydrostatic head for Himalayan conditions. The Forclaz MT500 jacket at Decathlon is Rs 4,999 and meets this threshold.",
        "This three-layer system weighs less than one pair of jeans and handles temperatures from 20C on the trail to -5C at camp."
      ],
      warning: "Cotton against the skin in cold wet conditions above 3,500m is one of the faster routes to hypothermia. Always use synthetic or merino base layers.",
      svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;background:#fafaf8;font-family:Outfit,sans-serif">
        <text x="360" y="30" text-anchor="middle" font-size="15" font-weight="800" fill="#111">The 3-Layer System for High Altitude</text>
        <text x="360" y="50" text-anchor="middle" font-size="11" fill="#999">Each layer has one job. Together they handle 20C to -5C.</text>

        <!-- Base Layer -->
        <rect x="30" y="75" width="200" height="265" rx="16" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
        <rect x="55" y="95" width="150" height="6" rx="3" fill="#3b82f6" opacity="0.3"/>
        <rect x="55" y="107" width="150" height="6" rx="3" fill="#3b82f6" opacity="0.2"/>
        <rect x="55" y="119" width="150" height="6" rx="3" fill="#3b82f6" opacity="0.1"/>
        <text x="130" y="155" text-anchor="middle" font-size="28">💧</text>
        <text x="130" y="185" text-anchor="middle" font-size="15" font-weight="800" fill="#1d4ed8">BASE LAYER</text>
        <text x="130" y="205" text-anchor="middle" font-size="11" font-weight="600" fill="#3b82f6">Moisture management</text>
        <line x1="60" y1="218" x2="200" y2="218" stroke="#bfdbfe" stroke-width="1"/>
        <text x="55" y="238" font-size="10" fill="#555">Merino wool: Rs 2,000-3,500</text>
        <text x="55" y="255" font-size="10" fill="#555">Synthetic: Rs 499-799</text>
        <text x="55" y="278" font-size="10" font-weight="600" fill="#dc2626">No cotton. Ever.</text>
        <text x="55" y="298" font-size="9" fill="#999">Moves sweat away from skin</text>
        <text x="55" y="315" font-size="9" fill="#999">Weight: 150-200g per top</text>

        <!-- Mid Layer -->
        <rect x="260" y="75" width="200" height="265" rx="16" fill="#fef3c7" stroke="#fde68a" stroke-width="1.5"/>
        <rect x="285" y="95" width="150" height="6" rx="3" fill="#f59e0b" opacity="0.3"/>
        <rect x="285" y="107" width="150" height="6" rx="3" fill="#f59e0b" opacity="0.2"/>
        <rect x="285" y="119" width="150" height="6" rx="3" fill="#f59e0b" opacity="0.1"/>
        <text x="360" y="155" text-anchor="middle" font-size="28">🔥</text>
        <text x="360" y="185" text-anchor="middle" font-size="15" font-weight="800" fill="#b45309">MID LAYER</text>
        <text x="360" y="205" text-anchor="middle" font-size="11" font-weight="600" fill="#d97706">Insulation</text>
        <line x1="290" y1="218" x2="430" y2="218" stroke="#fde68a" stroke-width="1"/>
        <text x="285" y="238" font-size="10" fill="#555">200-weight fleece: Rs 1,499</text>
        <text x="285" y="255" font-size="10" fill="#555">Down jacket (camp): Rs 3,999</text>
        <text x="285" y="278" font-size="10" font-weight="600" fill="#b45309">Fleece for trail, down for camp</text>
        <text x="285" y="298" font-size="9" fill="#999">Traps warm air close to body</text>
        <text x="285" y="315" font-size="9" fill="#999">Weight: 450-500g fleece</text>

        <!-- Outer Layer -->
        <rect x="490" y="75" width="200" height="265" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
        <rect x="515" y="95" width="150" height="6" rx="3" fill="#22c55e" opacity="0.3"/>
        <rect x="515" y="107" width="150" height="6" rx="3" fill="#22c55e" opacity="0.2"/>
        <rect x="515" y="119" width="150" height="6" rx="3" fill="#22c55e" opacity="0.1"/>
        <text x="590" y="155" text-anchor="middle" font-size="28">🛡️</text>
        <text x="590" y="185" text-anchor="middle" font-size="15" font-weight="800" fill="#15803d">OUTER LAYER</text>
        <text x="590" y="205" text-anchor="middle" font-size="11" font-weight="600" fill="#16a34a">Weather protection</text>
        <line x1="520" y1="218" x2="660" y2="218" stroke="#bbf7d0" stroke-width="1"/>
        <text x="515" y="238" font-size="10" fill="#555">Shell jacket: Rs 4,999</text>
        <text x="515" y="255" font-size="10" fill="#555">Min 10,000mm waterproofing</text>
        <text x="515" y="278" font-size="10" font-weight="600" fill="#15803d">Windproof + waterproof</text>
        <text x="515" y="298" font-size="9" fill="#999">Blocks wind, rain, snow</text>
        <text x="515" y="315" font-size="9" fill="#999">Weight: 400-600g</text>
      </svg>`,
    },
    {
      heading: "Summer trek packing: May to June",
      paragraphs: [
        "May and June are the primary trekking months in Uttarakhand. Daytime temperatures on the trail are around 12-18C at 3,500m. Mornings and evenings drop to 2-5C. Rain arrives in spurts rather than monsoon sheets."
      ],
      items: [
        "2 synthetic or merino base layer tops (one to wear, one to dry) - 400g combined",
        "1 x 200-weight fleece mid layer - 450-500g",
        "1 waterproof shell jacket - 400-600g",
        "2 pairs quick-dry trekking trousers (no jeans - a single pair weighs 700-900g and takes forever to dry) - 400-560g",
        "1 pair thermal leggings for camp - 150g",
        "3 pairs moisture-wicking socks + 1 pair liner socks for blister prevention",
        "Lightweight sun hat and buff or neck gaiter",
        "Lightweight liner gloves",
        "UV400 sunglasses (snow blindness is a risk even in summer)",
        "Total clothing weight target: 1.5-1.8 kg"
      ],
    },
    {
      heading: "Summer gear essentials",
      paragraphs: [
        "Mid-cut trekking shoes, broken in for at least 5-7 days before the trek. Camp sandals - 200g, significant comfort.",
        "Daypack 25-35L with rain cover and hip belt. Trekking poles - optional but recommended for knee issues or significant descent.",
        "Headlamp 200+ lumens. Pulse oximeter Rs 800-1,500 - non-negotiable above 3,500m. See the acclimatization guide for how to interpret readings.",
        "Power bank 20,000 mAh - phones at altitude drain faster searching for signal. Mi 20000 mAh is Rs 1,499, weighs 440g.",
        "Water bottles or hydration bladder: minimum 2L capacity. Water purification: iodine tablets or Sawyer Squeeze filter."
      ],
      tip: "The Kedarnath route has dhabas the entire way to the temple. You do not need to carry 2 days of food. Carry 1-2 snack bars per day, buy meals at dhabas. This saves 500-700g of food weight that most people carry unnecessarily.",
    },
    {
      heading: "Late season trek packing: October to November",
      paragraphs: [
        "October and November are my favorite months to trek in Uttarakhand. The crowds thin dramatically, the air is clear after the monsoon, and you get views that June rarely delivers. But the temperature window closes fast. By late October, nights at 3,500m are regularly -5C to -8C. Snow is possible at 4,000m+. Wind speeds increase.",
        "Everything in the summer list remains. The late-season additions:"
      ],
      items: [
        "Down jacket for camp and mornings - 300-500 fill power, 250-400g. Do not compromise on this.",
        "Heavier mid layer - 300-weight fleece or synthetic insulated mid layer (Quechua Trek 900, Rs 3,999)",
        "Thermal leggings - mandatory for October onwards",
        "Balaclava or warm beanie - wind chill at 4,000m+ in October is significant",
        "Heavier insulated gloves with waterproof shell",
        "Low gaiters for potential snow - 200g, prevents miserable wet feet",
        "Sleeping bag rated to -5C comfort minimum, ideally -10C for Spiti or Chandrashila",
        "Sleeping bag liner for extra 5C warmth - Rs 500-800",
        "Sleeping pad R-value 2+ if camping",
        "Total added late-season weight: approximately 1-1.5 kg over summer baseline"
      ],
      warning: "Late season on the Kedarnath and Badrinath circuits means most dhabas and tea stalls are closed. Assume no food available above 2,500m and carry accordingly. Budget 400-500g of food per day per person.",
    },
    {
      heading: "Summer vs late season comparison",
      paragraphs: [],
      table: {
        headers: ["Item", "Summer (May-Jun)", "Late Season (Oct-Nov)", "Notes"],
        rows: [
          ["Base layer tops", "2 x synthetic/merino", "2 x merino (thicker)", "Merino preferred in cold"],
          ["Mid layer", "200-weight fleece", "300-weight fleece or insulated", "Add or upgrade"],
          ["Down jacket", "Optional (camp use)", "Mandatory", "Minimum 500g fill"],
          ["Shell jacket", "Waterproof, 10,000mm", "Waterproof + wind-resistant", "Same shell works"],
          ["Trekking trousers", "2 x lightweight", "2 x mid-weight or 1 + thermal", "Layering adds flexibility"],
          ["Thermal leggings", "Optional", "Mandatory", "-5C nights"],
          ["Head cover", "Lightweight sun hat", "Full beanie + balaclava", "Wind chill factor"],
          ["Gloves", "Liner gloves", "Insulated + shell gloves", "Frostbite risk in Nov"],
          ["Sleeping bag", "-5C comfort", "-10C comfort minimum", "Spiti: -15C recommended"],
          ["Food to carry", "Snacks only (dhabas open)", "Full day rations (dhabas closed)", "Route-dependent"],
          ["Total clothing weight", "1.5-1.8 kg", "2-2.5 kg", "Down jacket adds most"],
        ],
      },
    },
    {
      heading: "Weight targets: the 8 kg pack",
      paragraphs: [
        "The 8 kg total for a 3-day moving pack is achievable if you are deliberate about each category."
      ],
      table: {
        headers: ["Category", "Target Weight", "Notes"],
        rows: [
          ["Clothing (full system)", "1.5-2.0 kg", "Summer; add 500g for late season"],
          ["Footwear (worn, not packed)", "0.5-0.8 kg", "Mid-cut trekking shoe"],
          ["Shelter / sleeping", "1.0-1.5 kg", "Sleeping bag + liner. Tent adds 1-1.5 kg"],
          ["Electronics", "0.4-0.6 kg", "Phone, power bank, headlamp, pulse ox"],
          ["Water", "0.5-1.0 kg", "2L capacity; varies with route"],
          ["Food", "0.5-1.5 kg", "Snacks for Kedarnath; full rations for Spiti"],
          ["First aid / personal care", "0.3-0.5 kg", "First aid kit, sunscreen, toiletries"],
          ["Pack itself", "1.0-1.5 kg", "30L quality pack with hip belt"],
          ["Total moving weight", "5.8-9.4 kg", "Target under 8 kg for 3-day trek"],
        ],
      },
      tip: "The difference between a 6 kg and an 11 kg pack on the Kedarnath trail is approximately 2,000m of additional cumulative effort over the 16 km round trip. That difference shows up as extra hours, more breaks, and either a knee problem or extreme fatigue by the end of the descent.",
    },
    {
      heading: "Non-negotiables above 4,000m",
      paragraphs: [
        "Some items appear optional until they are not."
      ],
      items: [
        "First aid kit: Diamox 250mg, ORS sachets x5 minimum, ibuprofen, blister plasters x8-10, elastic bandage, anti-diarrheal tablets, antiseptic wipes, personal medications",
        "Navigation: Phone with offline maps (OsmAnd or Maps.me) downloaded before departure. Phone signal drops out frequently above 3,500m",
        "Pack liner bag or dry bags for electronics, sleeping bag, and clothing. Rain gets inside packs even with a rain cover",
        "Sun protection: Sunscreen SPF 50+ and lip balm with SPF. UV increases roughly 4% per 300m of elevation gain"
      ],
    },
    {
      heading: "Things to leave home",
      paragraphs: [
        "The anti-list is as important as the list."
      ],
      items: [
        "Jeans or cotton trousers - heavy, slow to dry, no insulation when wet",
        "Cotton t-shirts as base layers - save them for Haridwar",
        "Full-sized towel - a microfiber travel towel weighs 60-80g vs 400-600g for cotton",
        "More than 2 pairs of trekking trousers - you will wear the same two in rotation",
        "Heavy mountaineering boots unless you specifically need them (1.2-1.8 kg vs 600-800g for trekking shoes)",
        "Laptop - leave it in Dehradun",
        "More than one book - one per trip, donated at the last guesthouse if finished",
        "Drone without permits - banned near temples like Kedarnath, fine risk outweighs the shots"
      ],
    },
    {
      heading: "Where to buy gear in India",
      image: { src: "/guide-packing-decathlon.jpg", alt: "Decathlon Dehradun store on Rajpur Road - the best place to buy trekking gear before a Himalayan trek", caption: "Decathlon Dehradun, Rajpur Road - my first stop before any major trek" },
      paragraphs: [
        "You do not need to order from international gear sites or pay import prices.",
        "Decathlon Dehradun, Rajpur Road: My first stop before any major trek. Large store, usually well-stocked, covers the full Quechua and Forclaz range. Staff are often trekkers themselves. Open 10 AM to 9 PM.",
        "Decathlon Rishikesh: Smaller store, useful if driving through on the way to the char dham circuit.",
        "Local hiking shops, Rishikesh Laxman Jhula area: A stretch of outdoor gear shops sells everything from trekking poles to sleeping bags. Quality is variable - inspect items carefully before buying.",
        "A note on buying decisions: buy new for sleeping bags (compression degrades with washing), trekking shoes (unknown wear patterns), and shell jackets (waterproofing degrades). Trekking poles, headlamps, and most clothing are fine used."
      ],
    },
  ],
  faq: [
    { question: "Do I need a sleeping bag if I am staying in guesthouses on the Kedarnath route?", answer: "Guesthouses on the Kedarnath trail provide blankets. Carrying a lightweight sleeping bag liner (silk or fleece, around 150g) adds meaningful warmth. For October onwards, a full sleeping bag rated to -5C is strongly recommended even in guesthouses because heating is limited." },
    { question: "Can I rent gear in Rishikesh instead of buying?", answer: "Sleeping bags, trekking poles, and gaiters can be rented from shops in Rishikesh. Quality is unpredictable and rental sleeping bags often have comfort ratings that do not match reality after heavy use. For trekkers who go twice a year or more, buying pays for itself quickly." },
    { question: "Is a down jacket a good mid layer for high-altitude trekking?", answer: "Down is excellent at camp but insulates poorly when wet and traps too much heat during active hiking. Fleece or synthetic insulated mid layers are better for the trail. Carry both if camping: fleece for hiking, down for mornings and evenings." },
    { question: "How do I manage the weight of carrying 3-4L of water per day?", answer: "For routes with reliable streams, carry a Sawyer Squeeze filter (85g) and top up from water sources. On the Kedarnath route, chai stalls at regular intervals mean you rarely need more than 2L at a time." },
    { question: "Should I bring a tent or plan on guesthouses?", answer: "For the char dham circuit, guesthouses are available at all overnight points and a tent adds 1-1.5 kg for no benefit. For Hampta Pass, Chandrashila summit nights, or Spiti camping, a tent is required. Ultralight one-person tents weigh 1.2-1.4 kg." },
    { question: "What is the weight target for a 3-day high altitude trek pack?", answer: "Under 8 kg moving weight. This breaks down as roughly 1.5-2 kg clothing, 1-1.5 kg sleeping system, 0.4-0.6 kg electronics, 0.5-1.5 kg food, 0.3-0.5 kg first aid, and 1-1.5 kg for the pack itself." },
    { question: "Where can I buy trekking gear in Dehradun?", answer: "Decathlon on Rajpur Road is the most comprehensive option, carrying the full Quechua and Forclaz range. Open 10 AM to 9 PM. The Rishikesh Decathlon is smaller but useful if passing through. Local shops near Laxman Jhula cover last-minute items." },
  ],
  schemaJson: [
    { "@context": "https://schema.org", "@type": "Article", "headline": "What to Pack for 4,000m+ Altitude Treks in India", "description": "Practical packing guide for high-altitude treks above 4,000m in India. Layering system, summer vs late-season gear, weight targets, and where to buy in Dehradun.", "author": { "@type": "Person", "name": "Ash", "url": "https://www.travelboa.com/about" }, "publisher": { "@type": "Organization", "name": "TravelBoa", "url": "https://www.travelboa.com" }, "datePublished": "2026-05-22", "dateModified": "2026-05-22", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.travelboa.com/guides/packing-4000m" } },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Do I need a sleeping bag for Kedarnath guesthouses?", "acceptedAnswer": { "@type": "Answer", "text": "Guesthouses provide blankets. A lightweight sleeping bag liner adds warmth. For October onwards, a full sleeping bag rated to -5C is recommended." } },
      { "@type": "Question", "name": "Can I rent trekking gear in Rishikesh?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but quality is unpredictable. Rental sleeping bags often underperform. For regular trekkers, buying pays for itself." } },
      { "@type": "Question", "name": "What is the weight target for a 3-day trek pack?", "acceptedAnswer": { "@type": "Answer", "text": "Under 8 kg moving weight, broken down across clothing, sleeping, electronics, food, first aid, and the pack itself." } },
      { "@type": "Question", "name": "Where to buy trekking gear in Dehradun?", "acceptedAnswer": { "@type": "Answer", "text": "Decathlon on Rajpur Road carries the full Quechua and Forclaz range. Local shops near Laxman Jhula in Rishikesh cover last-minute items." } },
    ] },
  ],
  outboundLinks: [
    { label: "Decathlon India", url: "https://www.decathlon.in" },
    { label: "Leave No Trace India", url: "https://lntindia.org" },
  ],
};
