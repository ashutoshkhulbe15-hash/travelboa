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

// ═══ BEST TIME CHAR DHAM ═══
guideContent["best-time-char-dham"] = {
  publishDate: "2026-05-22",
  lastUpdated: "2026-05-22",
  author: "Ash",
  heroImage: { src: "/guide-chardham-hero.jpg", alt: "Kedarnath temple with crowds of pilgrims and snow-covered Himalayan peaks in the background during peak season" },
  sections: [
    {
      heading: "",
      paragraphs: [
        "Here is the problem that nobody's travel article mentions until you have already lost money on it: the Char Dham temple opening dates are not announced until 4 to 8 weeks before they happen. They are decided by a committee of priests, astrologers, and state government officials, and that decision comes out in late March or early April for temples that open in late April or early May. If you booked flights to Dehradun in January for a \"first week of May\" Char Dham trip, you may have booked for a week when Kedarnath is still closed.",
        "I have spoken to at least a dozen pilgrims who have shown up at Gaurikund to start the trek, only to find that the official opening was pushed to a week later than they had read on some article that had the previous year's dates. That is a Rs 8,000 hotel booking down the drain in a village with nothing to do for a week.",
        "The dates are announced on the official Uttarakhand government portal at registrationandtouristcare.uk.gov.in, and that is the only source you should be checking. Not a blog post from 2024. Not a travel agency's Instagram.",
        "This guide explains the full season, month by month, for all four dhams. But the most important sentence in it is this one: wait for the official date announcement before booking non-refundable flights and accommodation."
      ],
      warning: "Temple opening dates vary each year. The 2025 Kedarnath opening was May 2nd. In 2024 it was May 10th. In 2023 it was April 25th. Check registrationandtouristcare.uk.gov.in for confirmed dates before booking.",
    },
    {
      heading: "How the temple calendar works",
      paragraphs: [
        "The Char Dham season runs from roughly late April or early May to Diwali or Bhai Dooj in October-November. Outside this window, all four temples are closed. The deities of Kedarnath, Badrinath, Gangotri, and Yamunotri are ceremonially transferred to winter residences in the lower valleys.",
        "The opening dates are tied to the Hindu calendar and determined by tithi (lunar day). Kedarnath, Gangotri, and Yamunotri traditionally open on Akshaya Tritiya, which falls in late April to mid-May depending on the year. Badrinath typically opens 2 to 4 weeks after Kedarnath.",
        "Closing dates follow a similar structure. Kedarnath closes on Bhai Dooj (the day after Diwali). Gangotri closes on Diwali. Yamunotri closes the morning of Diwali. Badrinath closes a few days after Kedarnath, usually within a week.",
        "The state government now requires Char Dham registration before you travel. Registration opens through the official portal a few weeks before the temples open. You cannot generate an e-pass before dates are announced. See the Char Dham e-pass guide for the step-by-step process."
      ],
    },
    {
      heading: "May: peak crowds, helicopter drought",
      paragraphs: [
        "May is when the season launches and the crowds arrive with it. Within the first two weeks of opening, Kedarnath is typically receiving 8,000 to 12,000 pilgrims per day. On weekends in the third and fourth weeks of May, that figure can reach 15,000 and queue times for the main temple darshan reach 3 to 5 hours.",
        "The weather in May is good. Temperatures at Kedarnath sit between 5C and 14C during the day, with clear mornings and possible afternoon cloud. At Badrinath (3,133m), daytime temperatures are 8C to 16C. Gangotri (3,048m) sits at 7C to 15C. Yamunotri (3,293m) is typically 5C to 12C.",
        "Helicopter to Kedarnath in May: nearly impossible to book within 2 to 3 weeks of your travel date. The IRCTC HeliYatra portal is the official booking system. One-way tickets run Rs 5,500 to Rs 7,000. In peak May, these sell out weeks in advance.",
        "May is not a bad month if you have planned 6 weeks in advance and you are comfortable with crowds. It is a bad month if you value solitude at the temple or flexibility."
      ],
    },
    {
      heading: "June: crowds thin slightly, monsoon approaches",
      paragraphs: [
        "The first two weeks of June look much like May. From mid-June onward, the pre-monsoon front begins to influence conditions. Cloud builds in the afternoons. Rain becomes more likely at Gangotri and Yamunotri before it reaches Kedarnath and Badrinath.",
        "Crowd levels in the third and fourth weeks of June are noticeably lower than May peak. Helicopter availability in June is better than May."
      ],
    },
    {
      heading: "July and August: the monsoon decision",
      image: { src: "/guide-chardham-landslide.jpg", alt: "Active landslide on a mountain road in Uttarakhand during monsoon season with rocks and dust falling", caption: "Landslides on Uttarakhand highways during monsoon - the primary risk in July-August" },
      paragraphs: [
        "July and August are monsoon months. The temples remain open. But the roads become significantly more dangerous. Landslides are the primary risk, not rain. The NH-7 corridor through Rudraprayag and Chamoli districts is one of the most landslide-prone road stretches in India during monsoon.",
        "If you are an experienced traveler comfortable with uncertainty, last-minute route changes, and the possibility of being stranded for 12 to 24 hours at a landslide clearance, monsoon Char Dham is feasible. The temples are nearly empty and the landscape is explosively green.",
        "If this is your first trip, or you are traveling with elderly family members or young children, avoid July and August entirely. The risk-reward does not work."
      ],
      warning: "The Kedarnath trail in monsoon can see rock and mudslides. In August 2023, sections of the trail near Rambara were damaged. SDRF rescues increase significantly in July-August. Not recommended for first-time visitors.",
    },
    {
      heading: "September-October: the window I actually recommend",
      image: { src: "/guide-chardham-october.jpg", alt: "Crystal clear view of snow-covered Himalayan peaks against deep blue sky in October after monsoon withdrawal", caption: "October skies after monsoon withdrawal - views that May rarely delivers" },
      paragraphs: [
        "This is the part of the article that matters most. If you have flexibility in your travel dates, September (second half) and October are the months I would choose every time.",
        "The monsoon withdraws from Uttarakhand between September 15 and September 25 most years. Within days of withdrawal, the air clears, the skies turn a deep blue, and the entire Himalayan range snaps into focus. Views from the Kedarnath temple that are obscured by cloud for 4 months suddenly appear as if someone cleaned a window.",
        "Crowd levels in late September are Low. In October they are Low to Medium. The trail is quiet. Darshan at Kedarnath takes 15 to 30 minutes, not 3 to 5 hours.",
        "The trade-off is temperature. October nights at Kedarnath drop to -2C to -5C. You need proper cold-weather gear. But the gear is a solvable problem. The empty trails, the clear views, and the available helicopter slots are not things money can buy in May.",
        "Helicopter bookings are available with 1 to 2 weeks notice in September-October, sometimes less."
      ],
      tip: "For the empty-temple October experience, aim for October 1st to 15th. The last 2-3 days before Kedarnath closes (around Bhai Dooj) see a small crowd for the closing ceremony.",
    },
    {
      heading: "Month-by-month comparison",
      paragraphs: [],
      table: {
        headers: ["Month", "Kedarnath", "Crowd", "Roads", "Helicopter", "Verdict"],
        rows: [
          ["Early May", "5-14C, clear", "Peak (15K/day)", "Good", "Books out weeks ahead", "Good weather, worst crowds"],
          ["Late May", "5-13C, clear", "Peak", "Good", "Nearly impossible", "Best weather, worst availability"],
          ["June", "5-12C, pre-monsoon", "High to Med-High", "Good", "Better availability", "Reasonable compromise"],
          ["July", "6-10C, full monsoon", "Low", "Landslide risk", "Often suspended", "Not for first-timers"],
          ["August", "5-10C, peak monsoon", "Very Low", "Highest risk", "Often suspended", "Avoid unless experienced"],
          ["September (late)", "4-11C, clearing", "Low", "Improving", "Available 1-2 wk notice", "Excellent post-monsoon"],
          ["October", "2-10C, clear", "Low-Med", "Good", "Available", "Best overall month"],
          ["November", "-5 to 2C, closing", "Very Low", "Deteriorating", "Limited", "Closing ceremonies only"],
        ],
      },
    },
    {
      heading: "Kedarnath: the one that sets the pace",
      paragraphs: [
        "Kedarnath (3,583m) is the highest of the four dhams and the one that governs the season calendar most visibly. Its opening on Akshaya Tritiya is the symbolic start of the yatra.",
        "The specific timing problem with Kedarnath is the helicopter. Total daily helicopter capacity is capped at around 1,000 to 1,200 passengers per day. Against peak-season demand of 15,000 daily pilgrims, slots are scarce.",
        "One more detail: Chopta (3,680m), about 35 km from Ukhimath, makes an excellent 2-night acclimatization base before the Kedarnath trek. Chopta in October is one of the best places in Uttarakhand to be."
      ],
    },
    {
      heading: "Badrinath: easier access, later opening",
      paragraphs: [
        "Badrinath (3,133m) is the most accessible of the four dhams. NH-7 runs directly to the town, the trek from road to temple is under 500m. It opens 2 to 4 weeks after Kedarnath.",
        "GMVN runs guesthouses at Badrinath that are clean, reasonably priced, and typically available at short notice in September-October. Book via gmvnl.in."
      ],
    },
    {
      heading: "Gangotri and Yamunotri",
      paragraphs: [
        "Gangotri (3,048m) is accessible by road directly to the temple. The Gaumukh glacier trek (18 km one way from Gangotri) is the major extension. Gangotri is also the least crowded of the four dhams throughout the season.",
        "Yamunotri (3,293m) requires a 6 km trek from Janki Chatti with 900m elevation gain. In October, the trail is dry and the hot springs at the temple complex are pleasant in cold air. Yamunotri closes earliest of the four dhams (on Diwali morning)."
      ],
    },
    {
      heading: "Planning the full circuit",
      paragraphs: [
        "The standard 10-12 day circuit from Rishikesh covers all four dhams. Most people start with Yamunotri (westernmost), then Gangotri, then Kedarnath, then Badrinath. This sequence follows the traditional pilgrimage order and the road geography.",
        "In October, plan backwards from Yamunotri's closing date (Diwali morning). Start the circuit 10 to 12 days before Diwali. This gives you the full circuit with buffer days for road delays."
      ],
      tip: "If doing the full circuit in October, plan Yamunotri first and Badrinath last. Yamunotri closes on Diwali morning (earliest), Badrinath closes last (3-5 days after Kedarnath). This gives you the maximum safety margin.",
    },
  ],
  faq: [
    { question: "When are the Char Dham temples confirmed to open in 2026?", answer: "The dates will be announced by the Uttarakhand government in late March or April 2026. Akshaya Tritiya in 2026 falls on April 29th, which is the likely opening date for Kedarnath, Gangotri, and Yamunotri. Track it at registrationandtouristcare.uk.gov.in. Do not book non-refundable travel before confirmation." },
    { question: "Is it safe to do Char Dham in September?", answer: "Yes. The second half of September, after the monsoon withdraws, is one of the safest windows. Roads have been cleared, temples are open, crowds are low, and weather is stable with clear mornings. Target the last 10 days of September." },
    { question: "Can I do all four Char Dhams in one trip?", answer: "The full circuit from Rishikesh takes 10 to 12 days at a reasonable pace. Rushing it into 7 days involves very long driving days and limited time at each temple. In October, plan backwards from Yamunotri's closing date on Diwali morning." },
    { question: "Does Char Dham registration apply to all four temples?", answer: "Yes. Registration at registrationandtouristcare.uk.gov.in is mandatory for all four dhams in one registration. The e-pass is required at checkpoints. Kedarnath has a daily pilgrim cap enforced through the system." },
    { question: "What is the minimum budget for the Char Dham yatra?", answer: "Shared-vehicle road trip from Rishikesh, GMVN guesthouses, trekking to Kedarnath, and dhaba meals runs approximately Rs 15,000 to Rs 20,000 per person for 10 days. Adding helicopter and private accommodation pushes toward Rs 30,000 to Rs 40,000." },
    { question: "How cold is Kedarnath in October?", answer: "Daytime 2C to 10C, nights -2C to -5C. You need a down jacket, thermal base layers, wool socks, waterproof shoes, gloves, and a hat. Carry your own sleeping bag if staying overnight." },
    { question: "Is the Char Dham yatra physically demanding?", answer: "It varies. Badrinath and Gangotri require minimal effort. Yamunotri is a 6 km trek with 900m gain. Kedarnath is the hardest: 16 km each way with 1,800m gain. Ponies and palanquins are available at Kedarnath and Yamunotri." },
    { question: "Do I need to book accommodation in advance?", answer: "In May-June: yes, book weeks in advance. In September-October: advisable for weekends but mid-week October slots are generally available within 3-5 days. GMVN properties at all four dhams take bookings via gmvnl.in." },
  ],
  schemaJson: [
    { "@context": "https://schema.org", "@type": "TravelGuide", "headline": "Best Time to Visit Char Dham: Kedarnath, Badrinath, Gangotri, Yamunotri", "description": "Month-by-month guide for Char Dham timing: temple opening dates, crowd levels, road conditions, helicopter availability.", "author": { "@type": "Person", "name": "Ash", "url": "https://www.travelboa.com/about" }, "publisher": { "@type": "Organization", "name": "TravelBoa", "url": "https://www.travelboa.com" }, "datePublished": "2026-05-22", "dateModified": "2026-05-22", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.travelboa.com/guides/best-time-char-dham" } },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "When are Char Dham temples confirmed to open in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Dates are announced in late March/April 2026. Akshaya Tritiya 2026 falls on April 29th. Check registrationandtouristcare.uk.gov.in." } },
      { "@type": "Question", "name": "Is it safe to do Char Dham in September?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the second half of September after monsoon withdrawal is one of the safest and best windows." } },
      { "@type": "Question", "name": "Can I do all four Char Dhams in one trip?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the full circuit takes 10-12 days from Rishikesh at a reasonable pace." } },
      { "@type": "Question", "name": "What is the minimum budget for Char Dham yatra?", "acceptedAnswer": { "@type": "Answer", "text": "Rs 15,000-20,000 per person for 10 days with shared transport and GMVN stays. Rs 30,000-40,000 with helicopter and private accommodation." } },
    ] },
  ],
  outboundLinks: [
    { label: "Char Dham official registration", url: "https://registrationandtouristcare.uk.gov.in" },
    { label: "GMVN guesthouse booking", url: "https://gmvnl.in" },
    { label: "Uttarakhand Tourism", url: "https://uttarakhandtourism.gov.in" },
  ],
};

// ═══ MONSOON ROUTES ═══
guideContent["monsoon-routes"] = {
  heroImage: { src: "/guide-monsoon-hero.jpg", alt: "Landslide debris and erosion on a mountain road during monsoon season with mist and rain" },
  publishDate: "2026-05-22",
  lastUpdated: "2026-05-22",
  author: "Ash",
  sections: [
    {
      heading: "",
      paragraphs: [
        "August 2023. I had left Dehradun at 5:30 AM heading for Guptkashi, which meant taking NH-7 through Rishikesh, Devprayag, Srinagar (Uttarakhand), and Rudraprayag before turning onto NH-107. The forecast said overcast with intermittent showers. I had made this drive a dozen times.",
        "Somewhere around Kund village, about 30 km past Rudraprayag on NH-107, the road stopped. Not in the slow, gradually-tapering way where you see brake lights and inch forward for twenty minutes. It stopped completely. A slab of hillside had come down across the road in the night, taking maybe 40 meters of tarmac with it.",
        "The BRO team was already there. They said six to eight hours, maybe more. There was one dhaba within walking distance, it ran out of chai and Maggi by noon, and my phone had one bar that disappeared entirely whenever more than two people tried to call. I turned around at 2 PM after waiting five hours.",
        "That is the actual risk of monsoon mountain travel. Not just rain. The risk is that you get locked between two points with no food, no network, no toilet, no clear timeline, and a car that is slowly getting lower on fuel. This guide is about which routes carry that risk, and what to do instead."
      ],
    },
    {
      heading: "How monsoon works differently in the Western Himalayas",
      paragraphs: [
        "The Indian monsoon comes from the Bay of Bengal and travels northwest. By the time it reaches Uttarakhand, it is still fully loaded - which is why Uttarakhand gets about 1,500 to 2,000mm of rain annually and July through early September is unambiguously dangerous on mountain roads. But by the time the monsoon gets further west into Himachal Pradesh and Jammu and Kashmir, it is significantly weaker. Shimla gets around 1,100mm annually. Leh gets about 100mm.",
        "Routes in Uttarakhand - Kedarnath, Badrinath, Gangotri, Yamunotri - sit in one of the most rainfall-intensive corridors in the country during July and August. Routes in Spiti Valley and Ladakh receive less rainfall, but face flash flooding in narrow gorges, snowfall on passes at 4,500m+, and roads not designed to handle significant water.",
        "The monsoon reaches Uttarakhand around June 15 and typically retreats by September 15. That is the core danger window.",
        "What both regions share is that the mountains are geologically young and unstable. A road that was perfectly stable in June can have a 50-meter gap in it by July 15."
      ],
    },
    {
      heading: "Rishikesh to Kedarnath (NH-7 and NH-107)",
      paragraphs: [
        "NH-7 from Rishikesh to Rudraprayag - roughly 140 km - is generally manageable in monsoon. The road runs along the Ganga and its tributaries, the gorge is wide enough that landslide debris rarely covers the full road.",
        "Everything changes at Rudraprayag when you turn onto NH-107 toward Guptkashi.",
        "The 50 km from Rudraprayag to Guptkashi is one of the most consistently blocked stretches in Uttarakhand during peak monsoon. Kund village, Phata, and several unnamed slip zones between them are active every single season. Debris volumes can be large - 500-tonne rock-and-earth falls that take BRO machines 24 to 72 hours to clear.",
        "My recommendation: if you are planning Kedarnath in July or August, budget at least one full extra day as buffer at Rudraprayag or Guptkashi. Do not plan travel from Dehradun to Kedarnath in a single day during this period."
      ],
      warning: "The Rudraprayag to Guptkashi stretch on NH-107 is one of the most landslide-prone road sections in India during monsoon. Budget a full buffer day.",
    },
    {
      heading: "Rishikesh to Badrinath (NH-7 toward Joshimath)",
      paragraphs: [
        "The Langsi stretch, roughly between km 180 and km 200 from Rishikesh, is a historically active landslide area. Birahi to Nandprayag is another high-frequency blockage zone.",
        "Vishnuprayag, about 12 km before Joshimath, saw significant road damage in 2021 and again in 2022. The Joshimath land subsidence that began in late 2022 has stabilized but the area remains under observation.",
        "The Badrinath route is generally considered slightly more maintainable than the Kedarnath route because the Alaknanda gorge is somewhat wider. But slightly more maintainable still means active closures during July and August."
      ],
    },
    {
      heading: "Rishikesh to Gangotri and Yamunotri",
      paragraphs: [
        "The 100 km from Uttarkashi to Gangotri is a consistent problem in July. The Bhatwari to Gangotri stretch - roughly 60 km - is narrow even by Himalayan standards, passes through dense forest on highly unstable terrain.",
        "For Yamunotri, the road through Barkot to Janki Chatti has its own problems, particularly around the river crossings below Hanuman Chatti.",
        "Practical advice: plan Gangotri and Yamunotri for either early June (before peak monsoon) or after September 15."
      ],
    },
    {
      heading: "Manali to Leh (NH-3/NH-21 via Rohtang)",
      paragraphs: [
        "The Atal Tunnel has eliminated the seasonal unpredictability of the old Rohtang surface road for the first section. But beyond the tunnel, the road descends into the Lahaul Valley toward Keylong, Jispa, and then climbs to Baralacha La at 4,890m.",
        "The Bhaga valley between Darcha and Patseo is the highest risk section. Flash floods from tributary streams can wash away road surface entirely. Baralacha La itself is snowed on regularly through July.",
        "Most travelers who do Manali-Leh in July do so successfully. But plan an extra buffer day at Keylong or Sarchu."
      ],
    },
    {
      heading: "Manali to Spiti via Kunzum La",
      paragraphs: [
        "This is the highest risk route on this list. Kunzum La at 4,551m is open from roughly June to October. The 65 km from Batal to Kaza is unpaved, passes through extremely remote terrain with no mobile signal, no habitation, and no fuel.",
        "The safer approach to Spiti in monsoon is from Shimla via Kinnaur (NH-5), but that route has its own hazards. There is no truly safe way into Spiti in July and August."
      ],
    },
    {
      heading: "Route risk comparison table (July-September)",
      paragraphs: [],
      table: {
        headers: ["Route", "Risk Level", "Most Dangerous Stretch", "Typical Blockage", "Safe Window"],
        rows: [
          ["Rishikesh to Kedarnath", "High", "Rudraprayag to Guptkashi (50 km)", "12-72 hours", "Oct-Nov, May-Jun"],
          ["Rishikesh to Badrinath", "Moderate-High", "Langsi, Birahi-Nandprayag", "6-48 hours", "Oct-Nov, May-Jun"],
          ["Rishikesh to Gangotri", "High", "Bhatwari to Gangotri (60 km)", "6-36 hours", "Oct-Nov, May-early Jun"],
          ["Rishikesh to Yamunotri", "Moderate-High", "Hanuman Chatti crossings", "4-24 hours", "Oct-Nov, May-Jun"],
          ["Manali to Leh", "Moderate", "Bhaga valley, Baralacha La", "12-36 hours", "Jun (early), Sep-Oct"],
          ["Manali to Spiti via Kunzum", "Very High", "Batal to Kaza (65 km)", "24-72+ hours", "Jun-early Jul, Sep-Oct"],
          ["Shimla to Spiti via Kinnaur", "High", "Wangtu to Pooh (Sutlej)", "24-48 hours", "Late Sep-Oct, May-Jun"],
          ["Srinagar to Leh via Zoji La", "Moderate", "Zoji La, Sonamarg valley", "12-48 hours", "Late Sep-Oct"],
        ],
      },
    },
    {
      heading: "How to check road status before you leave",
      image: { src: "/guide-monsoon-bro.jpg", alt: "BRO heavy machinery clearing landslide debris on a mountain road in the Himalayas", caption: "BRO machinery on a priority clearance - response times of 24 to 72 hours on main routes" },
      paragraphs: [
        "This is not optional. Check road status the evening before you leave and the morning of departure."
      ],
      items: [
        "Uttarakhand PWD road status: uttarakhand.gov.in - updated, though sometimes slowly",
        "PWD helpline: 1800-180-4145",
        "SDRF updates on their official Twitter/X handle - more current than the website during active events",
        "BRO official website: bro.gov.in posts cleared route confirmations",
        "Himachal Pradesh roads: himachal.nic.in - transport department portal",
        "HRTC bus status is a useful proxy: if HRTC buses are running the route, it is passable",
        "Local guesthouse owners post real-time conditions to WhatsApp groups - ask to be added"
      ],
    },
    {
      heading: "What to do when you get stuck",
      paragraphs: [
        "The psychological reality of a mountain road blockage is that the first hour feels manageable and hours three through seven feel significantly worse."
      ],
      items: [
        "Do not assume you can walk around it. Landslide debris covering a full road is not a small pile. Walking across active debris in rain is genuinely dangerous.",
        "Turn off your engine intermittently. Keep fuel above half a tank before leaving on any monsoon mountain route.",
        "Walk back along the queue and talk to truck drivers and local taxi drivers. They will have seen it before.",
        "Locate the nearest settlement. On every route described above, there is a village or dhaba within 1 to 3 km of the frequent blockage zones.",
        "Communicate your situation before you lose signal. Call your destination as soon as you stop.",
        "Carry at least 48 hours of any regular medication in your day bag, not in the boot."
      ],
      tip: "The most useful thing you can do before a monsoon mountain drive: fill the tank completely, download offline maps, carry food and water for 24 hours, and tell someone at your destination what time you left and which route you are taking.",
    },
    {
      heading: "Routes that remain passable in monsoon",
      image: { src: "/guide-monsoon-river.jpg", alt: "Prayer flag covered bridge over a fast-flowing Himalayan river with large boulders during monsoon", caption: "Mountain river crossings during monsoon - water levels can rise within hours" },
      paragraphs: [
        "No mountain route in India is categorically safe during peak monsoon. Some carry substantially lower risk."
      ],
      items: [
        "Dehradun to Mussoorie (NH-707A): 35 km, well-maintained, blockages cleared in under 6 hours",
        "Shimla city approaches from Chandigarh: well-maintained, rarely multi-hour blockages",
        "Rishikesh to Rudraprayag (NH-7): lower risk than the inner Char Dham routes, does not close for days",
        "Manali town and Kullu valley: less exposed than the passes, getting stranded in Manali is not a hardship",
        "Spiti via Kinnaur in late September: monsoon has retreated, road is drier, workable window for the Spiti circuit"
      ],
    },
  ],
  faq: [
    { question: "Is Manali to Leh safe in July and August?", answer: "It is operationally open but not risk-free. The Bhaga valley section and high passes above 4,500m can close with 12 to 36 hours notice. Plan an extra buffer day in Keylong or Sarchu." },
    { question: "Which is safer in monsoon: Manali-Spiti or Shimla-Kinnaur?", answer: "Neither is genuinely safe in peak monsoon. Shimla-Kinnaur via NH-5 is generally preferred because it avoids Kunzum La at 4,551m. The Wangtu-Pooh section is dangerous but BRO access is somewhat better there." },
    { question: "How do I check if the Kedarnath route is blocked?", answer: "Call PWD helpline 1800-180-4145 the evening before. Check uttarakhand.gov.in road status portal. Ask at your hotel in Rishikesh or Devprayag - local drivers monitor conditions closely." },
    { question: "What should I carry for a monsoon mountain drive?", answer: "Food and water for 24 hours, fully charged power bank, offline maps, rain gear, warm layers, torch, jumper cables, first aid kit, and cash. ATMs on mountain routes are often offline during rain events." },
    { question: "Will BRO clear the road while it is still raining?", answer: "BRO crews work in all weather on priority routes if the active slide risk has subsided. On actively sliding slopes, clearance begins once the main flow stops, which can be hours after rain eases." },
    { question: "Can I do Gangotri in monsoon if I start early?", answer: "Starting at 4 to 5 AM from Uttarkashi helps. But the Bhatwari-Gangotri stretch is dangerous from cumulative rain over the previous week, not just rain that day. A clear morning after a week of heavy rain is still high-risk." },
    { question: "Is Rohtang Pass always closed in monsoon?", answer: "No. It closes for 1 to 3 days after heavy snowfall events, multiple times per month in July-August. The HP government also restricts vehicle numbers when open. Check himachal.nic.in." },
    { question: "If I get stuck on Manali-Leh, where is the nearest help?", answer: "Between Manali and Keylong: Rohtang rescue posts. Between Keylong and Sarchu: very limited. Between Sarchu and Leh: army checkpoints at regular intervals. BRO emergency number: 1800-180-3474." },
  ],
  schemaJson: [
    { "@context": "https://schema.org", "@type": "Article", "headline": "Monsoon Travel: Which Mountain Routes to Avoid (July-September)", "description": "Route-by-route risk assessment for mountain roads in Uttarakhand and Himachal Pradesh during monsoon.", "author": { "@type": "Person", "name": "Ash", "url": "https://www.travelboa.com/about" }, "publisher": { "@type": "Organization", "name": "TravelBoa", "url": "https://www.travelboa.com" }, "datePublished": "2026-05-22", "dateModified": "2026-05-22", "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.travelboa.com/guides/monsoon-routes" } },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Is Manali to Leh safe in July and August?", "acceptedAnswer": { "@type": "Answer", "text": "Operationally open but not risk-free. Plan buffer days." } },
      { "@type": "Question", "name": "How do I check if the Kedarnath route is blocked?", "acceptedAnswer": { "@type": "Answer", "text": "Call PWD helpline 1800-180-4145 the evening before. Check uttarakhand.gov.in." } },
      { "@type": "Question", "name": "What should I carry for a monsoon mountain drive?", "acceptedAnswer": { "@type": "Answer", "text": "Food and water for 24 hours, power bank, offline maps, rain gear, cash." } },
    ] },
  ],
  outboundLinks: [
    { label: "BRO official road status", url: "https://bro.gov.in" },
    { label: "Uttarakhand PWD helpline", url: "https://uttarakhand.gov.in" },
    { label: "Himachal Pradesh road information", url: "https://himachal.nic.in" },
  ],
};

// ═══ ATM CASH GUIDE ═══
guideContent["atm-cash-guide"] = {
  heroImage: { src: "/guide-atm-hero.jpg", alt: "SBI ATM at Joshimath branch with Himalayan mountains in the background" },
  publishDate: "2026-05-22",
  lastUpdated: "2026-05-22",
  author: "Ash",
  sections: [
    { heading: "", paragraphs: [
      "You cannot rely on UPI or ATMs beyond certain points in the Indian Himalayas, and the worst time to find that out is when you are standing in Kaza or Keylong with Rs 400 in your wallet and a guesthouse owner pointing at a handwritten \"cash only\" sign.",
      "That is not a hypothetical. I have watched it happen - to others, and once, uncomfortably, to myself. I was driving from Dehradun to Kedarnath via Rudraprayag on a May morning in 2024, fully confident I had enough in my account and a working Jio SIM. I had withdrawn Rs 3,000 in Rishikesh \"just in case\" and figured I would use UPI for the rest. The ATM at Sonprayag was out of cash. The network at Gaurikund was too weak for UPI to process. The ponywala wanted Rs 1,800 upfront in cash.",
      "This guide covers every major town on the four routes I know well: the Char Dham corridor in Uttarakhand, the Spiti Valley circuit in Himachal Pradesh, the Leh-Ladakh route, and the Vaishno Devi route. Every town section has specific numbers - ATM count, bank names, withdrawal limits, distance to the next reliable machine, and network signal quality by operator."
    ] },
    { heading: "Why mountain ATMs are different",
      image: { src: "/guide-atm-cash.jpg", alt: "Hand holding Indian currency notes in front of a Cash Only No UPI sign at a mountain dhaba", caption: "Cash Only, No UPI - a common sight at dhabas above 3,000m" }, paragraphs: [
      "City ATMs get refilled daily through commercial cash vans. Mountain ATMs - the ones run by SBI or Bank of Baroda in towns like Guptkashi or Tabo - get refilled when a vehicle can actually reach them. During peak pilgrimage season (May-June for Kedarnath), demand can spike from a few hundred withdrawals a week to several thousand.",
      "Beyond cash supply, mountain ATMs face unique hardware problems: power cuts, hardware failures in cold temperatures, and connectivity issues with the bank servers over weak mobile signals. A machine can show \"out of service\" for reasons entirely unrelated to cash - and it might stay that way for 3 to 5 days before a technician arrives.",
      "Jio has the best 4G coverage in the lower and mid-Himalayan zones (up to roughly 2,500 to 3,000m on most routes). Airtel is second for data. Above those thresholds, expect voice calls only, and sometimes not even that. UPI requires an active data connection to process, so no signal means no UPI."
    ] },
    { heading: "ATM and cash reliability: town-by-town reference", paragraphs: [], table: {
      headers: ["Town", "Route", "ATMs", "Reliability", "UPI", "Next reliable ATM", "Cash to carry from here"],
      rows: [
        ["Dehradun", "All routes", "50+", "Reliable", "Full", "N/A", "Withdraw full trip budget"],
        ["Rishikesh", "Char Dham", "20+", "Reliable", "Full", "Rudraprayag (160 km)", "Full trek budget"],
        ["Rudraprayag", "Kedarnath/Badrinath", "3-4", "Moderate", "Works", "Guptkashi (50 km)", "Rs 10K+ if heading to Kedarnath"],
        ["Guptkashi", "Kedarnath", "2-3", "Semi-reliable", "Patchy", "Rudraprayag (50 km back)", "Rs 8K+ for trek"],
        ["Sonprayag", "Kedarnath", "1", "Frequently empty", "Weak", "Guptkashi (12 km back)", "Do not depend on this"],
        ["Gaurikund", "Kedarnath", "0", "None", "Fails", "Sonprayag (7 km back)", "Carry everything"],
        ["Kedarnath", "Kedarnath", "0", "None", "Fails", "Sonprayag (23 km back)", "Carry everything"],
        ["Joshimath", "Badrinath", "3-4", "Reasonable", "Works", "Rudraprayag (140 km back)", "Rs 5K+ for Badrinath"],
        ["Badrinath", "Badrinath", "1-2", "Better than Kedarnath", "Patchy", "Joshimath (45 km back)", "Use Joshimath instead"],
        ["Shimla", "Spiti", "Many", "Reliable", "Full", "Reckong Peo (220 km)", "Full Spiti budget"],
        ["Reckong Peo", "Spiti", "2-3", "Moderate", "Works", "Shimla (220 km back)", "Rs 15K+ for Spiti circuit"],
        ["Kaza", "Spiti", "1", "Unreliable", "Fails often", "Reckong Peo (200 km)", "Carry everything from Peo"],
        ["Manali", "Spiti/Ladakh", "10+", "Reliable", "Full", "Keylong (115 km)", "Full route budget"],
        ["Keylong", "Spiti/Ladakh", "1-2", "Semi-reliable", "Weak", "Manali (115 km back)", "Rs 10K+ for onward"],
        ["Katra", "Vaishno Devi", "5+", "Reliable", "Full", "Jammu (50 km)", "Rs 5K for yatra"],
        ["Leh", "Ladakh", "5+", "Reliable", "Full", "Keylong (365 km back)", "Rs 20K+ for circuit"],
      ],
    } },
    { heading: "Cash carry recommendations by route", paragraphs: [], table: {
      headers: ["Route", "Minimum cash", "Comfortable cash", "Last reliable ATM"],
      rows: [
        ["Kedarnath (from Rishikesh)", "Rs 8,000", "Rs 12,000-15,000", "Rishikesh"],
        ["Badrinath (from Rishikesh)", "Rs 5,000", "Rs 8,000-10,000", "Joshimath"],
        ["Spiti circuit (from Shimla)", "Rs 15,000", "Rs 20,000-25,000", "Reckong Peo"],
        ["Spiti (from Manali)", "Rs 15,000", "Rs 20,000-25,000", "Manali"],
        ["Manali-Leh", "Rs 10,000", "Rs 15,000-20,000", "Manali"],
        ["Vaishno Devi", "Rs 3,000", "Rs 5,000-7,000", "Katra"],
        ["Full Char Dham circuit", "Rs 15,000", "Rs 20,000-25,000", "Rishikesh"],
      ],
    },
      tip: "The single most important financial preparation for any mountain trip: withdraw your full cash budget at the last major city before the hills. For Char Dham that is Rishikesh. For Spiti that is Shimla or Manali. For Ladakh that is Leh. Everything after that is a bonus if it works.",
    },
    { heading: "Carrying cash safely on mountain routes",
      image: { src: "/guide-atm-oos.jpg", alt: "SBI ATM in Leh Ladakh showing Out of Service screen with mountains behind", caption: "Out of Service - the screen you do not want to see with Rs 400 in your wallet" }, paragraphs: [
      "Carrying Rs 15,000 to Rs 25,000 in cash on a trek or road trip creates a legitimate concern. Split your cash: keep Rs 2,000 to Rs 3,000 in your pocket or daypack for daily spending. Keep the bulk in a money belt worn under clothing or in a zippered internal compartment of your main bag. Keep Rs 1,000 separately as absolute emergency reserve.",
      "Use small denominations: Rs 100 and Rs 200 notes are more useful than Rs 500 at dhabas and small shops. Many places above 3,000m cannot make change for Rs 500.",
    ] },
  ],
  faq: [
    { question: "Will UPI work at Kedarnath temple?", answer: "Not reliably. Some vendors at the base camp area accept UPI but signal is too weak for consistent processing above Jungle Chatti. Carry all cash you need for the trek and stay." },
    { question: "How much cash should I carry for the Spiti circuit?", answer: "Rs 15,000 minimum, Rs 20,000 to Rs 25,000 comfortable. The last reliable ATM on the Shimla route is Reckong Peo. From Manali side, it is Manali itself. Kaza has one ATM that is frequently empty." },
    { question: "Which bank ATM is most reliable in mountain towns?", answer: "SBI has the widest network and most consistent refill schedule. Bank of Baroda is second in Uttarakhand. For Himachal Pradesh, PNB has a reasonable presence. Avoid relying on private bank ATMs (HDFC, ICICI) in remote areas." },
    { question: "Can I use credit card anywhere on these routes?", answer: "Only at GMVN hotels, larger hotels in Joshimath and Leh, and some petrol pumps. Dhabas, local guesthouses, pony operators, and small shops are cash only." },
    { question: "What denominations should I carry?", answer: "Mostly Rs 100 and Rs 200 notes. Many small shops and dhabas above 3,000m cannot break a Rs 500 note. Keep a few Rs 500 notes for accommodation and transport." },
    { question: "Does Jio work at Kedarnath?", answer: "Jio shows intermittent signal at the temple premises but data speeds are usually too weak for UPI. Voice calls work sporadically. On the trek itself, signal drops out completely above Jungle Chatti for most operators." },
  ],
  schemaJson: [
    { "@context": "https://schema.org", "@type": "Article", "headline": "ATM and Cash Guide for Remote Himalayan Towns", "author": { "@type": "Person", "name": "Ash" }, "publisher": { "@type": "Organization", "name": "TravelBoa" }, "datePublished": "2026-05-22", "mainEntityOfPage": "https://www.travelboa.com/guides/atm-cash-guide" },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Will UPI work at Kedarnath temple?", "acceptedAnswer": { "@type": "Answer", "text": "Not reliably. Carry all cash you need for the trek." } },
      { "@type": "Question", "name": "How much cash for Spiti circuit?", "acceptedAnswer": { "@type": "Answer", "text": "Rs 15,000 minimum, Rs 20,000-25,000 comfortable." } },
    ] },
  ],
  outboundLinks: [
    { label: "SBI ATM locator", url: "https://www.sbi.co.in/web/personal-banking/information/atm-branch-locator" },
  ],
};

// ═══ CHAR DHAM EPASS ═══
guideContent["char-dham-epass"] = {
  heroImage: { src: "/guide-epass-hero.jpg", alt: "Uttarakhand Police checkpost on Char Dham route with pilgrims showing documents for verification" },
  publishDate: "2026-05-22",
  lastUpdated: "2026-05-22",
  author: "Ash",
  sections: [
    { heading: "", paragraphs: [
      "The Char Dham registration system is one of those government processes that works perfectly well once you understand it, and causes genuine confusion if you do not. I have seen people at the Sonprayag checkpost turned away because their e-pass had the wrong date. I have seen a family of eight get stuck because only the head of the family registered and the system did not list the other seven members.",
      "This guide covers every permit you might need for mountain travel in northern India: the Char Dham e-pass (mandatory for Kedarnath, Badrinath, Gangotri, Yamunotri), the Inner Line Permit for Spiti, the Rohtang Pass permit, and the Protected Area Permit for Leh-Ladakh. Each section has the actual steps, the actual website, the actual documents, and the actual problems people run into."
    ] },
    { heading: "The Char Dham e-pass (mandatory for all four dhams)", paragraphs: [
      "Since 2022, every pilgrim visiting any of the four Char Dham temples must register online through the Uttarakhand government portal at registrationandtouristcare.uk.gov.in. The registration generates a QR-coded e-pass that is checked at multiple points along each route.",
      "The registration is free. It takes 5 to 10 minutes if your documents are ready. The system is available in Hindi and English."
    ],
      items: [
        "Aadhaar number for each traveler (mandatory for Indian citizens)",
        "Mobile number - you will receive an OTP and your e-pass via SMS",
        "A working email address",
        "Passport-size photo in digital format (JPEG, under 200 KB)",
        "Vehicle registration number if traveling by personal vehicle",
        "For foreign nationals: passport number and Indian visa details"
      ],
    },
    { heading: "How the registration actually works",
      image: { src: "/guide-epass-portal.jpg", alt: "Official Char Dham registration portal showing the registration form for Indian and foreign pilgrims", caption: "The official registration portal at registrationandtouristcare.uk.gov.in" }, paragraphs: [
      "Step 1: Go to registrationandtouristcare.uk.gov.in. Select \"New Registration\" on the homepage.",
      "Step 2: Select your destination(s). You can register for all four dhams in a single registration. Select the specific dates you plan to visit each temple.",
      "Step 3: Enter personal details for each traveler in your group. Aadhaar number is mandatory for each person. Upload a photo for each traveler.",
      "Step 4: Enter vehicle details if applicable. For shared vehicles or bus travel, you can skip this.",
      "Step 5: Submit and receive OTP on your registered mobile number. Verify the OTP.",
      "Step 6: Download and print your e-pass. You will receive it via SMS and email. Carry a printed copy AND save a digital copy on your phone.",
    ],
      warning: "Print your e-pass. Do not rely only on your phone. Signal is weak or nonexistent at most checkpoints. A printed e-pass eliminates the single biggest source of delays at checkposts.",
    },
    { heading: "Daily pilgrim caps", paragraphs: [
      "Kedarnath has a daily pilgrim cap enforced through the registration system. The cap varies by season but is typically 12,000 to 15,000 per day during peak season. Once a date is full, the portal will not allow registration for that date.",
      "Badrinath, Gangotri, and Yamunotri do not have strict daily caps as of 2025, but the registration is still mandatory for tracking purposes.",
      "Weekends in May and June fill up fastest. If you have flexibility, aim for Tuesday through Thursday arrivals."
    ],
      tip: "Register 2 to 4 weeks before your planned visit for peak season (May-June). For September-October, 1 week is usually sufficient. Check the portal for date availability before booking accommodation.",
    },
    { heading: "Spiti Valley - who actually needs a permit", paragraphs: [
      "The Spiti Valley falls under the Inner Line Permit (ILP) system because parts of it are close to the Indo-Tibetan border. Indian citizens need an ILP to travel beyond Sumdo on the Spiti circuit. The permit is free for Indian nationals.",
      "Apply online through the Himachal Pradesh government portal. Processing takes 1 to 3 days. The permit is valid for 7 days and can be extended at the SDM office in Kaza.",
      "Foreign nationals need a Protected Area Permit (PAP) which must be applied for in groups of 2 or more through a registered travel agent."
    ] },
    { heading: "Rohtang Pass permit", paragraphs: [
      "The Atal Tunnel has replaced the surface road for most vehicles, but if you are crossing Rohtang Pass on the surface road (motorcycles, adventure vehicles), you need a permit from the SDM Manali office.",
      "Permits are available online at admis.hp.nic.in. Cost: Rs 100 for Indian vehicles, Rs 500 for commercial vehicles. Daily vehicle cap: approximately 1,000 vehicles per day.",
      "The Atal Tunnel itself does not require a separate permit for regular vehicles."
    ] },
    { heading: "Leh-Ladakh Protected Area Permits", paragraphs: [
      "Since Ladakh became a Union Territory, the permit system has simplified. Indian tourists need a PAP for Nubra Valley (Khardung La), Pangong Lake, Tso Moriri, Hanle, and other areas near the Line of Actual Control.",
      "Apply online at laikiangpermit.in. Cost: Rs 600 per person for the environmental fee. Processing: usually same-day if applied before noon. The permit is checked at Khardung La checkpoint and at the entry to Pangong road."
    ] },
    { heading: "Permit comparison table", paragraphs: [], table: {
      headers: ["Permit", "For", "Cost", "Where to apply", "Processing", "Validity"],
      rows: [
        ["Char Dham e-pass", "Kedarnath, Badrinath, Gangotri, Yamunotri", "Free", "registrationandtouristcare.uk.gov.in", "Instant", "Specific dates selected"],
        ["Spiti ILP (Indian)", "Spiti Valley beyond Sumdo", "Free", "HP government portal", "1-3 days", "7 days (extendable)"],
        ["Rohtang surface permit", "Rohtang Pass surface road", "Rs 100", "admis.hp.nic.in", "Same day", "1 day"],
        ["Ladakh PAP", "Nubra, Pangong, Hanle, Tso Moriri", "Rs 600", "laikiangpermit.in", "Same day", "7 days"],
      ],
    } },
    { heading: "Common rejection reasons",
      image: { src: "/guide-epass-check.jpg", alt: "Pilgrim showing printed QR-coded e-pass and Aadhaar card to Uttarakhand Police officer at a mountain checkpost", caption: "Print your e-pass - phone signal is weak at most checkpoints" }, paragraphs: [
      "Date mismatch: Your e-pass date does not match your actual travel date. The checkpost will not let you through. Solution: register for the correct date or re-register if plans change.",
      "Wrong Aadhaar number: A single digit wrong means the pass is invalid. Triple-check before submitting.",
      "Daily cap reached: Peak season dates fill up. Register early or adjust your date by 1 to 2 days.",
      "Medical flagging: The system asks basic health questions. Declaring certain conditions may trigger additional requirements."
    ] },
    { heading: "Documents to carry for each route", paragraphs: [], items: [
      "Char Dham: Printed e-pass, Aadhaar original, vehicle RC if driving",
      "Spiti: ILP printout, Aadhaar/passport, vehicle documents",
      "Rohtang: Permit printout, vehicle RC, driving license, PUC certificate",
      "Ladakh: PAP printout, Aadhaar/passport, vehicle documents",
      "All routes: 2 passport-size photos as backup, photocopies of all documents"
    ] },
  ],
  faq: [
    { question: "Is Char Dham registration free?", answer: "Yes. The e-pass registration on the official portal is completely free. Beware of third-party websites charging Rs 200 to Rs 500 for the same registration - they are intermediaries, not official." },
    { question: "Can I register for all four dhams at once?", answer: "Yes. A single registration covers all four temples. Select the specific dates for each temple during registration." },
    { question: "What if my travel date changes after registration?", answer: "You need to re-register with the new dates. The old pass becomes invalid. There is no edit option on the portal." },
    { question: "Do children need separate registration?", answer: "Children above 2 years need their own entry in the registration. Children below 2 are exempt but should still be mentioned in the group registration." },
    { question: "Is the ILP needed for all of Spiti?", answer: "No. The ILP is needed only beyond Sumdo checkpoint. You can visit Manali, Rohtang, and areas up to Sumdo without an ILP. For Kaza, Tabo, Dhankar, Pin Valley - you need the ILP." },
    { question: "Can I get permits at the checkpost instead of online?", answer: "For Char Dham: counter registration is available at Haridwar, Rishikesh, and Sonprayag but queues can be 1 to 3 hours during peak season. Online is faster. For Ladakh PAP: online only since 2024." },
  ],
  schemaJson: [
    { "@context": "https://schema.org", "@type": "Article", "headline": "Char Dham E-Pass and Permits: How to Register Online (2026)", "author": { "@type": "Person", "name": "Ash" }, "publisher": { "@type": "Organization", "name": "TravelBoa" }, "datePublished": "2026-05-22", "mainEntityOfPage": "https://www.travelboa.com/guides/char-dham-epass" },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Is Char Dham registration free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The official portal registration is free. Beware third-party sites charging fees." } },
      { "@type": "Question", "name": "Can I register for all four dhams at once?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A single registration covers all four temples." } },
      { "@type": "Question", "name": "Is ILP needed for all of Spiti?", "acceptedAnswer": { "@type": "Answer", "text": "No. Only beyond Sumdo checkpoint. Manali, Rohtang, and areas up to Sumdo do not require ILP." } },
    ] },
  ],
  outboundLinks: [
    { label: "Char Dham official registration", url: "https://registrationandtouristcare.uk.gov.in" },
    { label: "Rohtang permit portal", url: "https://admis.hp.nic.in" },
    { label: "Ladakh permit portal", url: "https://laikiangpermit.in" },
  ],
};

// ═══ KEDARNATH BUDGET ═══
guideContent["kedarnath-budget"] = {
  heroImage: { src: "/guide-budget-hero.jpg", alt: "Budget guesthouse in the Uttarakhand mountains with Himalayan peaks in the background" },
  publishDate: "2026-05-22",
  lastUpdated: "2026-05-22",
  author: "Ash",
  sections: [
    { heading: "", paragraphs: [
      "Rs 8,000. That is what a 4-day Kedarnath trip costs if you take shared transport, eat at dhabas, sleep in dharamshalas, and trek on your own feet. I have done it at this price point and I have done it at Rs 25,000 with a helicopter slot and a guesthouse booking. The temple is the same either way. The difference is in your knees and your wallet.",
      "This is a line-by-line cost breakdown for the budget version: Rishikesh to Kedarnath and back in 4 days. Every number is from the 2025 season, verified at the actual counters and dhabas. Where 2026 prices are confirmed differently, I have updated them."
    ] },
    { heading: "The trip at a glance", paragraphs: [], table: {
      headers: ["Detail", "Budget option"],
      rows: [
        ["Duration", "4 days, 3 nights"],
        ["Start/end", "Rishikesh"],
        ["Transport", "Shared bus/jeep"],
        ["Accommodation", "Dharamshala and budget guesthouses"],
        ["Food", "Dhabas on route and trail"],
        ["Trek", "Self, no pony or palki"],
        ["Total budget", "Rs 7,500 to Rs 8,500"],
      ],
    } },
    { heading: "Day 1: Rishikesh to Guptkashi",
      image: { src: "/guide-budget-jeep.jpg", alt: "Shared Bolero jeep packed with pilgrims at Sonprayag stand with Gaurikund and Kedarnath distance signs", caption: "Shared jeep at Sonprayag - Rs 120 per seat to Gaurikund, Rs 1,500 full vehicle" }, paragraphs: [
      "The 200 km drive from Rishikesh to Guptkashi takes 8 to 10 hours by shared transport, depending on road conditions and stops.",
    ],
      items: [
        "UPSRTC/GMOU bus Rishikesh to Rudraprayag: Rs 350 to Rs 450. Departs from ISBT Rishikesh, multiple departures between 5 AM and 8 AM.",
        "Shared jeep Rudraprayag to Guptkashi: Rs 200 to Rs 300. Available at the Rudraprayag bus stand.",
        "Alternative: Direct shared Sumo Rishikesh to Sonprayag: Rs 600 to Rs 800. Faster but less predictable departure times.",
        "Breakfast in Rishikesh before departure: Rs 80 to Rs 150 (paratha + chai)",
        "Lunch at a dhaba in Rudraprayag or Srinagar: Rs 100 to Rs 200 (thali)",
        "Dinner in Guptkashi: Rs 120 to Rs 200 (rice, dal, sabzi)",
        "Accommodation Guptkashi: Dharamshala Rs 200 to Rs 500 per bed. Budget guesthouse Rs 500 to Rs 800 per room.",
      ],
    },
    { heading: "Day 2: Guptkashi to Kedarnath", paragraphs: [
      "This is the big day. Guptkashi to Gaurikund by shared jeep, then the 16 km trek to Kedarnath temple at 3,583m.",
    ],
      items: [
        "Shared jeep Guptkashi to Sonprayag: Rs 50 to Rs 100",
        "Mandatory shared vehicle Sonprayag to Gaurikund: Rs 30 (government rate)",
        "Breakfast at Gaurikund before trek: Rs 100 to Rs 150",
        "Trail food: Maggi + chai at 2-3 stops: Rs 300 to Rs 500 total. Dhabas at Jungle Chatti, Bheembali, Linchauli.",
        "Accommodation at Kedarnath: Dharamshala Rs 300 to Rs 500 per bed. GMVN tent Rs 800 to Rs 1,200. Budget room Rs 1,000 to Rs 2,000.",
        "Dinner at Kedarnath: Rs 150 to Rs 250 (limited options, prices higher at altitude)",
      ],
      tip: "Start the trek by 6 to 7 AM from Gaurikund to reach Kedarnath by early afternoon. Late starters face afternoon weather and exhaustion. The dhabas close by 6 PM.",
    },
    { heading: "Day 3: Temple visit and descent", paragraphs: [
      "Morning darshan at the temple, then the 16 km descent back to Gaurikund. Descent takes 4 to 6 hours for most people.",
    ],
      items: [
        "Breakfast at Kedarnath: Rs 100 to Rs 200",
        "Trail chai on descent: Rs 100 to Rs 200",
        "Lunch at Gaurikund or Sonprayag: Rs 120 to Rs 200",
        "Shared vehicle Gaurikund to Sonprayag: Rs 30",
        "Shared jeep Sonprayag to Rudraprayag: Rs 300 to Rs 400",
        "Dinner in Rudraprayag: Rs 120 to Rs 200",
        "Accommodation Rudraprayag: Budget hotel Rs 500 to Rs 800",
      ],
    },
    { heading: "Day 4: Rudraprayag back to Rishikesh", paragraphs: [
      "The return journey. 160 km, 5 to 7 hours by bus."
    ],
      items: [
        "Breakfast in Rudraprayag: Rs 80 to Rs 150",
        "Bus Rudraprayag to Rishikesh: Rs 350 to Rs 450",
        "Lunch on route: Rs 100 to Rs 200",
      ],
    },
    { heading: "Total trip cost summary", paragraphs: [], table: {
      headers: ["Category", "Budget range", "Notes"],
      rows: [
        ["Transport (all legs)", "Rs 1,500 to Rs 2,200", "Shared bus/jeep throughout"],
        ["Accommodation (3 nights)", "Rs 1,000 to Rs 2,500", "Dharamshala to budget rooms"],
        ["Food (4 days)", "Rs 1,200 to Rs 2,000", "Dhabas and trail food"],
        ["Miscellaneous", "Rs 500 to Rs 1,000", "Chai, snacks, temple offerings"],
        ["Total from Rishikesh", "Rs 4,200 to Rs 7,700", "Average Rs 6,000 to Rs 7,500"],
        ["Add from Dehradun", "+Rs 300 to Rs 500", "Bus Dehradun to Rishikesh"],
        ["Add from Delhi", "+Rs 800 to Rs 1,500", "Bus Delhi to Rishikesh"],
      ],
    } },
    { heading: "Budget vs mid-range vs comfort vs helicopter comparison", paragraphs: [], table: {
      headers: ["", "Budget", "Mid-range", "Comfort", "Helicopter"],
      rows: [
        ["Total cost", "Rs 6,000-8,000", "Rs 12,000-18,000", "Rs 20,000-30,000", "Rs 30,000-45,000"],
        ["Transport", "Shared bus/jeep", "Private Sumo", "Private car", "Car + helicopter"],
        ["Trek", "Self, 16 km each way", "Self or pony one way", "Pony both ways", "Helicopter both ways"],
        ["Stay", "Dharamshala", "Budget hotel", "GMVN or similar", "Hotel + base camp"],
        ["Food", "Dhabas", "Mix of dhaba and hotel", "Hotel meals", "Hotel meals"],
        ["Duration", "4 days", "4 days", "3-4 days", "2-3 days"],
        ["Physical effort", "High", "Moderate", "Low-moderate", "Minimal"],
      ],
    } },
    { heading: "Money-saving decisions that actually work",
      image: { src: "/guide-budget-dhaba.jpg", alt: "Budget dhaba thali with rice dal roti and price list showing Rs 120 for veg thali on a mountain highway", caption: "Dhaba thali at Rs 120 - the budget traveler standard on the Kedarnath route" }, paragraphs: [], items: [
      "Take the UPSRTC bus from Rishikesh to Rudraprayag instead of a private Sumo. Saves Rs 400 to Rs 600 per person.",
      "Stay in dharamshalas at Guptkashi and Kedarnath instead of guesthouses. Saves Rs 500 to Rs 1,500 per night.",
      "Carry trail snacks from Rishikesh: energy bars, dry fruits, biscuits. Trail dhaba prices are 2x to 3x city rates.",
      "Trek both ways instead of taking a pony. The pony costs Rs 1,500 to Rs 2,500 one way.",
      "Share transport at every stage. The difference between shared and private is often 3x to 5x.",
      "Avoid Sonprayag accommodation. It is expensive for the quality. Guptkashi is better value and a better acclimatization stop.",
      "Eat at dhabas, not restaurants. A thali at a dhaba is Rs 120 to Rs 200. The same food at a \"hotel restaurant\" is Rs 300 to Rs 500.",
    ] },
  ],
  faq: [
    { question: "Can I really do Kedarnath in Rs 8,000?", answer: "Yes, from Rishikesh. It requires shared transport, dharamshala stays, dhaba food, and trekking both ways. The realistic range is Rs 6,000 to Rs 8,500 depending on accommodation choices and food spending." },
    { question: "How much does the Kedarnath helicopter cost?", answer: "One-way helicopter from Phata or Guptkashi to Kedarnath is Rs 5,500 to Rs 7,000 per person. Return helicopter is Rs 11,000 to Rs 14,000. Book through the IRCTC HeliYatra portal." },
    { question: "Is it worth taking a pony on the Kedarnath trek?", answer: "If you have knee problems or are unfit, yes. The pony costs Rs 1,500 to Rs 2,500 one way. For budget travelers who are reasonably fit, trekking saves significant money and the experience is part of the pilgrimage." },
    { question: "Where is the cheapest accommodation at Kedarnath?", answer: "Dharamshalas near the temple offer beds for Rs 300 to Rs 500 per night. GMVN tents are Rs 800 to Rs 1,200. Private rooms start at Rs 1,500 in peak season. Book nothing in advance at this price level - just show up and ask." },
    { question: "How much cash should I carry for the budget trip?", answer: "Rs 8,000 to Rs 10,000 in cash. ATMs are unreliable beyond Guptkashi, UPI does not work on the trek. Carry your full budget in cash from Rishikesh." },
    { question: "Can I do it in 3 days instead of 4?", answer: "Possible but not recommended. It means driving from Rishikesh to Gaurikund and starting the trek on the same day, which is 12+ hours of travel followed by a 16 km trek. The acclimatization risk and exhaustion level make 4 days the minimum sensible plan." },
  ],
  schemaJson: [
    { "@context": "https://schema.org", "@type": "Article", "headline": "Kedarnath Trip Under Rs 8,000: A Day-by-Day Budget Breakdown", "author": { "@type": "Person", "name": "Ash" }, "publisher": { "@type": "Organization", "name": "TravelBoa" }, "datePublished": "2026-05-22", "mainEntityOfPage": "https://www.travelboa.com/guides/kedarnath-budget" },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Can I really do Kedarnath in Rs 8,000?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, from Rishikesh. Realistic range Rs 6,000-8,500 with shared transport, dharamshala, and dhaba food." } },
      { "@type": "Question", "name": "How much does the Kedarnath helicopter cost?", "acceptedAnswer": { "@type": "Answer", "text": "One-way Rs 5,500-7,000. Return Rs 11,000-14,000 via IRCTC HeliYatra portal." } },
      { "@type": "Question", "name": "How much cash should I carry?", "acceptedAnswer": { "@type": "Answer", "text": "Rs 8,000-10,000 in cash from Rishikesh. ATMs unreliable beyond Guptkashi." } },
    ] },
  ],
  outboundLinks: [
    { label: "IRCTC HeliYatra Kedarnath booking", url: "https://heliyatra.irctc.co.in" },
    { label: "GMVN accommodation booking", url: "https://gmvnl.in" },
  ],
};
