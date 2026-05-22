"use client";

import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import Link from "next/link";

const TRIPS = [
  {
    id: "kedarnath",
    name: "Kedarnath trek",
    icon: "🛕",
    desc: "16 km trek to 3,583m - layering for rain, cold, and altitude",
    altitude: "3,583m",
    season: "May-Jun, Sep-Oct",
    gear: [
      { category: "Jackets & layers", items: [
        { name: "Hardshell rain jacket", why: "Afternoon rain is near-daily above 3,000m", link: "/gear/jackets-kedarnath", linkLabel: "Best jackets for Kedarnath" },
        { name: "Fleece mid-layer", why: "Camp temperatures drop to 0-5C", link: "/gear/jackets-kedarnath", linkLabel: "Fleece picks" },
        { name: "Thermal base layers x2", why: "Cotton kills at altitude - synthetic or merino only", link: "/gear/thermals-altitude", linkLabel: "Best thermals" },
      ]},
      { category: "Footwear", items: [
        { name: "Mid-cut trekking shoes", why: "Wet granite slabs and mud on the trail", link: "/gear/trekking-shoes-under-5000", linkLabel: "Best shoes under ₹5,000" },
      ]},
      { category: "Bags", items: [
        { name: "30-50L backpack with rain cover", why: "Multi-day carry with sleeping gear", link: "/gear/backpacks-chopta", linkLabel: "Backpack picks" },
        { name: "Small daypack for temple queue", why: "3-4 hours in crowd at the temple", link: "/gear/daypack-pilgrimage", linkLabel: "Best daypacks" },
      ]},
      { category: "Electronics", items: [
        { name: "Power bank 20,000 mAh", why: "No charging points on the trek", link: "/gear/power-banks-treks", linkLabel: "Best power banks" },
        { name: "Headlamp", why: "Pre-dawn starts from Gaurikund", link: "/gear/headlamps-under-1000", linkLabel: "Best headlamps under ₹1,000" },
      ]},
      { category: "Protection", items: [
        { name: "Rain poncho", why: "Covers you and your pack in temple queues", link: "/gear/rain-ponchos-char-dham", linkLabel: "Best ponchos" },
        { name: "Sunscreen SPF50 PA++++", why: "UV is 30% stronger at 3,500m", link: "/gear/sunscreen-mountain", linkLabel: "Best sunscreens" },
        { name: "First aid kit with Diamox", why: "No pharmacy above Guptkashi", link: "/gear/first-aid-kits", linkLabel: "First aid guide" },
      ]},
    ],
  },
  {
    id: "ladakh-bike",
    name: "Ladakh bike trip",
    icon: "🏍️",
    desc: "Manali-Leh highway - 5,000m passes, -5C to 35C in one day",
    altitude: "5,359m (Khardung La)",
    season: "Jun-Sep",
    gear: [
      { category: "Riding gear", items: [
        { name: "CE-rated riding jacket", why: "Not a trekking jacket - you need armor", link: "/gear/jackets-ladakh", linkLabel: "Best jackets for Ladakh" },
        { name: "Two pairs of gloves", why: "Mesh for valleys, insulated for passes", link: "/gear/riding-gloves-ladakh", linkLabel: "Best riding gloves" },
      ]},
      { category: "Layers", items: [
        { name: "Thermal base layers x2", why: "Temperature swings from 5C to 35C", link: "/gear/thermals-altitude", linkLabel: "Best thermals" },
      ]},
      { category: "Electronics", items: [
        { name: "Power bank 20,000 mAh x2", why: "No charging for 365 km Jispa to Leh", link: "/gear/power-banks-treks", linkLabel: "Best power banks" },
        { name: "Headlamp", why: "Camp setup in the dark", link: "/gear/headlamps-under-1000", linkLabel: "Best headlamps" },
      ]},
      { category: "Protection", items: [
        { name: "Sunscreen SPF50", why: "UV at 5,000m is extreme", link: "/gear/sunscreen-mountain", linkLabel: "Best sunscreens" },
        { name: "First aid kit with Diamox", why: "Nearest hospital is Leh", link: "/gear/first-aid-kits", linkLabel: "First aid guide" },
      ]},
    ],
  },
  {
    id: "spiti",
    name: "Spiti Valley road trip",
    icon: "🏔️",
    desc: "Cold desert circuit - camping at Chandratal, -10C nights",
    altitude: "4,250m (Chandratal)",
    season: "Jun-Oct",
    gear: [
      { category: "Sleep", items: [
        { name: "Sleeping bag -5C to -10C comfort", why: "Chandratal nights drop to -10C", link: "/gear/sleeping-bags-spiti", linkLabel: "Best sleeping bags for Spiti" },
      ]},
      { category: "Jackets & layers", items: [
        { name: "Down jacket for camp", why: "Essential for evenings at 4,000m+", link: "/gear/jackets-kedarnath", linkLabel: "Down jacket picks" },
        { name: "Thermal base layers x2", why: "Merino preferred for multi-day wear", link: "/gear/thermals-altitude", linkLabel: "Best thermals" },
      ]},
      { category: "Bags", items: [
        { name: "45-55L backpack", why: "Full camping load including sleeping bag", link: "/gear/backpacks-chopta", linkLabel: "Backpack picks" },
      ]},
      { category: "Electronics & protection", items: [
        { name: "Power bank 30,000 mAh", why: "5+ days without a wall socket", link: "/gear/power-banks-treks", linkLabel: "Best power banks" },
        { name: "Sunscreen SPF50", why: "Desert sun + altitude = severe burns", link: "/gear/sunscreen-mountain", linkLabel: "Best sunscreens" },
        { name: "First aid kit with Diamox", why: "Nearest pharmacy is Reckong Peo", link: "/gear/first-aid-kits", linkLabel: "First aid guide" },
      ]},
    ],
  },
  {
    id: "vaishno-devi",
    name: "Vaishno Devi yatra",
    icon: "🙏",
    desc: "13 km paved trail - comfort, grip on wet marble, queue gear",
    altitude: "1,584m",
    season: "Year-round",
    gear: [
      { category: "Footwear", items: [
        { name: "Low-cut trail shoes with grip", why: "Wet marble steps at the Bhawan", link: "/gear/shoes-vaishno-devi", linkLabel: "Best shoes for Vaishno Devi" },
      ]},
      { category: "Bags", items: [
        { name: "15-20L daypack", why: "Temple queues, offerings, rain gear", link: "/gear/daypack-pilgrimage", linkLabel: "Best daypacks" },
      ]},
      { category: "Protection", items: [
        { name: "Rain poncho", why: "Monsoon queues can be 2-3 hours", link: "/gear/rain-ponchos-char-dham", linkLabel: "Best ponchos" },
        { name: "First aid kit", why: "13 km is hard on knees", link: "/gear/first-aid-kits", linkLabel: "First aid guide" },
      ]},
    ],
  },
  {
    id: "chopta",
    name: "Chopta-Tungnath weekend",
    icon: "⛺",
    desc: "3-day weekend trek from Dehradun - Tungnath and Chandrashila",
    altitude: "4,130m (Chandrashila)",
    season: "Apr-Jun, Sep-Nov",
    gear: [
      { category: "Footwear & bags", items: [
        { name: "Mid-cut trekking shoes", why: "Rocky scramble to Chandrashila summit", link: "/gear/trekking-shoes-under-5000", linkLabel: "Best shoes under ₹5,000" },
        { name: "30L daypack or 50L if camping", why: "Day hike vs full camping load", link: "/gear/backpacks-chopta", linkLabel: "Best backpacks for Chopta" },
      ]},
      { category: "Layers", items: [
        { name: "Fleece + shell jacket", why: "Morning wind at 4,000m cuts through single layers", link: "/gear/jackets-kedarnath", linkLabel: "Jacket picks" },
        { name: "Thermal base layers", why: "October nights at Chopta: -2 to 5C", link: "/gear/thermals-altitude", linkLabel: "Best thermals" },
      ]},
      { category: "Camping (if self)", items: [
        { name: "Sleeping bag -5C comfort", why: "October camping at 2,680m", link: "/gear/sleeping-bags-spiti", linkLabel: "Sleeping bag picks" },
      ]},
      { category: "Essentials", items: [
        { name: "Headlamp", why: "Pre-dawn summit push", link: "/gear/headlamps-under-1000", linkLabel: "Best headlamps" },
        { name: "Sunscreen SPF50", why: "Exposed ridgeline above 3,500m", link: "/gear/sunscreen-mountain", linkLabel: "Best sunscreens" },
        { name: "Power bank", why: "No charging at camp", link: "/gear/power-banks-treks", linkLabel: "Best power banks" },
      ]},
    ],
  },
  {
    id: "char-dham",
    name: "Full Char Dham circuit",
    icon: "🕉️",
    desc: "10-14 day pilgrimage covering all four dhams",
    altitude: "3,583m (Kedarnath)",
    season: "May-Jun, Sep-Oct",
    gear: [
      { category: "Jackets & layers", items: [
        { name: "Waterproof shell jacket", why: "Rain at every dham, especially Kedarnath", link: "/gear/jackets-kedarnath", linkLabel: "Best jackets" },
        { name: "Thermal base layers x2", why: "10+ days needs rotation", link: "/gear/thermals-altitude", linkLabel: "Best thermals" },
      ]},
      { category: "Footwear", items: [
        { name: "Trekking shoes (Kedarnath)", why: "16 km on wet rock", link: "/gear/trekking-shoes-under-5000", linkLabel: "Shoes under ₹5,000" },
        { name: "Comfort shoes (Badrinath/Gangotri)", why: "Short walks, wet marble", link: "/gear/shoes-vaishno-devi", linkLabel: "Comfort shoe picks" },
      ]},
      { category: "Bags & rain", items: [
        { name: "Daypack + rain poncho", why: "Queue gear for all four temples", link: "/gear/daypack-pilgrimage", linkLabel: "Best daypacks" },
        { name: "Rain poncho", why: "Covers pack in temple queues", link: "/gear/rain-ponchos-char-dham", linkLabel: "Best ponchos" },
      ]},
      { category: "Electronics & health", items: [
        { name: "Power bank 20,000 mAh x2", why: "10+ days, limited charging", link: "/gear/power-banks-treks", linkLabel: "Best power banks" },
        { name: "First aid kit with Diamox", why: "Remote pharmacies, altitude risk", link: "/gear/first-aid-kits", linkLabel: "First aid guide" },
        { name: "Sunscreen SPF50", why: "Exposed trails at altitude", link: "/gear/sunscreen-mountain", linkLabel: "Best sunscreens" },
      ]},
    ],
  },
];

export function GearClient() {
  const { themeKey, theme, setTheme, accent, dark, toggleDark, mounted } = useTheme();
  const [openTrip, setOpenTrip] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  if (!mounted) return null;

  const bg = dark ? "#0c0a09" : "white";
  const cardBg = dark ? "#1c1a17" : "white";
  const textPrimary = dark ? "#f5f5f4" : "#111";
  const textSecondary = dark ? "#a8a29e" : "#666";
  const textMuted = dark ? "#57534e" : "#ccc";
  const border = dark ? "#292524" : "#f0f0f0";

  return (
    <div className="relative min-h-screen font-sans transition-colors duration-300" style={{ background: bg }}>
      <ColorPicker themeKey={themeKey} setTheme={setTheme} dark={dark} toggleDark={toggleDark} />
      <Navbar accent={accent} dark={dark} />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-8 pb-20">
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs" style={{ color: textMuted }}>
          <Link href="/" className="transition-colors hover:opacity-70" style={{ color: textMuted }}>Home</Link>
          <span>→</span>
          <span className="font-semibold" style={{ color: textPrimary }}>Gear</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2" style={{ color: textPrimary }}>What gear do you need?</h1>
        <p className="text-sm mb-5" style={{ color: textSecondary }}>Pick your trip or search for specific gear. Links to our tested product reviews.</p>

        {/* Search bar */}
        <div className="relative mb-6">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base" style={{ color: textMuted }}>🔍</div>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            placeholder="Search gear... jackets, shoes, power bank, sleeping bag"
            className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm font-semibold outline-none transition-all duration-200"
            style={{ background: dark ? "#1c1a17" : "#fafaf8", color: textPrimary, border: `1.5px solid ${searchFocus ? accent : border}`, boxShadow: searchFocus ? `0 0 0 3px ${accent}15` : "none" }}
            autoComplete="off"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center" style={{ background: dark ? "#333" : "#eee", color: textMuted }}>✕</button>
          )}
        </div>

        {/* Trip cards */}
        <div className="space-y-3">
          {TRIPS.filter(trip => {
            if (!search) return true;
            const s = search.toLowerCase();
            return trip.name.toLowerCase().includes(s) || trip.desc.toLowerCase().includes(s) || trip.gear.some(c => c.items.some(item => item.name.toLowerCase().includes(s) || item.linkLabel.toLowerCase().includes(s) || item.why.toLowerCase().includes(s)));
          }).map(trip => {
            const isOpen = openTrip === trip.id;
            const totalItems = trip.gear.reduce((s, c) => s + c.items.length, 0);
            return (
              <div key={trip.id} className="rounded-xl transition-all duration-200 overflow-hidden" style={{ background: cardBg, border: `1.5px solid ${isOpen ? accent : border}` }}>
                {/* Trip header */}
                <button onClick={() => setOpenTrip(isOpen ? null : trip.id)} className="w-full flex items-center gap-4 p-4 sm:p-5 cursor-pointer text-left">
                  <span className="text-3xl">{trip.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base sm:text-lg font-extrabold" style={{ color: textPrimary }}>{trip.name}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md" style={{ background: `${accent}15`, color: accent }}>{trip.altitude}</span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: textSecondary }}>{trip.desc}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[10px] font-semibold" style={{ color: textMuted }}>📅 {trip.season}</span>
                      <span className="text-[10px] font-semibold" style={{ color: textMuted }}>🎒 {totalItems} items</span>
                    </div>
                  </div>
                  <span className="text-lg transition-transform duration-200 shrink-0" style={{ color: accent, transform: isOpen ? "rotate(180deg)" : "none" }}>▾</span>
                </button>

                {/* Expanded gear list */}
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-0">
                    <div className="h-px mb-4" style={{ background: border }} />
                    {trip.gear.map((cat, ci) => (
                      <div key={ci} className="mb-5 last:mb-0">
                        <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accent }}>{cat.category}</p>
                        <div className="space-y-2.5">
                          {cat.items.map((item, ii) => (
                            <div key={ii} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: dark ? "#0c0a09" : "#fafaf8" }}>
                              <span className="mt-0.5 text-xs" style={{ color: accent }}>●</span>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold" style={{ color: textPrimary }}>{item.name}</p>
                                <p className="text-xs mt-0.5" style={{ color: textSecondary }}>{item.why}</p>
                              </div>
                              <Link href={item.link} className="text-[11px] font-bold no-underline shrink-0 px-2.5 py-1.5 rounded-lg transition-all hover:opacity-80" style={{ background: `${accent}12`, color: accent }}>
                                {item.linkLabel} →
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Destination guide link */}
                    <div className="mt-5 pt-4 flex items-center gap-3" style={{ borderTop: `1px solid ${border}` }}>
                      <Link href={`/${trip.id === "ladakh-bike" ? "ladakh" : trip.id === "char-dham" ? "kedarnath" : trip.id}`} className="text-xs font-bold no-underline" style={{ color: accent }}>
                        📖 Full {trip.name} destination guide →
                      </Link>
                      <Link href="/dashboard" className="text-xs font-bold no-underline" style={{ color: textMuted }}>
                        🗺️ Create trip dashboard →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* All gear reviews section */}
        <div className="mt-12 pt-8" style={{ borderTop: `1px solid ${border}` }}>
          <h2 className="text-lg font-extrabold mb-2" style={{ color: textPrimary }}>All gear reviews</h2>
          <p className="text-xs mb-5" style={{ color: textSecondary }}>Every product we have tested, organized by category.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { cat: "🧥 Jackets", items: [{ name: "Best jackets for Kedarnath trek", href: "/gear/jackets-kedarnath" }, { name: "Best jackets for Ladakh bike trip", href: "/gear/jackets-ladakh" }] },
              { cat: "🥾 Footwear", items: [{ name: "Best trekking shoes under ₹5,000", href: "/gear/trekking-shoes-under-5000" }, { name: "Best shoes for Vaishno Devi", href: "/gear/shoes-vaishno-devi" }] },
              { cat: "🎒 Bags", items: [{ name: "Best backpacks for Chopta-Tungnath", href: "/gear/backpacks-chopta" }, { name: "Best daypack for pilgrimage", href: "/gear/daypack-pilgrimage" }] },
              { cat: "🛏️ Sleep", items: [{ name: "Best sleeping bags for Spiti camping", href: "/gear/sleeping-bags-spiti" }] },
              { cat: "🔋 Electronics", items: [{ name: "Best power banks for multi-day treks", href: "/gear/power-banks-treks" }, { name: "Best headlamps under ₹1,000", href: "/gear/headlamps-under-1000" }] },
              { cat: "🧤 Accessories", items: [{ name: "Best thermals for high-altitude", href: "/gear/thermals-altitude" }, { name: "Best riding gloves for Ladakh", href: "/gear/riding-gloves-ladakh" }, { name: "Best rain ponchos for Char Dham", href: "/gear/rain-ponchos-char-dham" }] },
              { cat: "☀️ Protection", items: [{ name: "Best sunscreen for mountain UV", href: "/gear/sunscreen-mountain" }, { name: "Best first aid kits for travel", href: "/gear/first-aid-kits" }] },
            ].map((group, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
                <p className="text-sm font-extrabold mb-2" style={{ color: textPrimary }}>{group.cat}</p>
                {group.items.map((item, j) => (
                  <Link key={j} href={item.href} className="block text-xs py-1.5 no-underline transition-colors hover:opacity-70" style={{ color: accent }}>
                    {item.name} →
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer accent={accent} />
    </div>
  );
}
