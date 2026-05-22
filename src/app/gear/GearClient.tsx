"use client";

import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import Link from "next/link";

const GEAR_CATEGORIES = [
  { key: "all", label: "All gear", icon: "🎒" },
  { key: "jackets", label: "Jackets", icon: "🧥" },
  { key: "shoes", label: "Shoes", icon: "🥾" },
  { key: "bags", label: "Backpacks", icon: "🎒" },
  { key: "electronics", label: "Electronics", icon: "🔋" },
  { key: "accessories", label: "Accessories", icon: "🧤" },
  { key: "sleep", label: "Sleep gear", icon: "🛏️" },
];

const GEAR_GUIDES = [
  // Hills / North India
  {
    region: "Hills & North India",
    regionIcon: "🏔️",
    regionDesc: "Cold weather, altitude, unpredictable rain — gear that actually works above 2,000m.",
    guides: [
      { title: "Best jackets for Kedarnath trek", desc: "Windproof vs down vs rain shell — which layers you need for 3,500m+ altitude in June", category: "jackets", dest: "Kedarnath", href: "/gear/jackets-kedarnath", items: 8 },
      { title: "Best trekking shoes under ₹5,000", desc: "Quechua MH500 vs Wildcraft vs Woodland — real trail tests on Uttarakhand mud and snow", category: "shoes", dest: "All treks", href: "/gear/trekking-shoes-under-5000", items: 6 },
      { title: "Best jackets for Ladakh bike trip", desc: "Riding jackets that handle Khardung La wind chill and Manali–Leh dust", category: "jackets", dest: "Ladakh", href: "/gear/jackets-ladakh", items: 7 },
      { title: "Best sleeping bags for Spiti camping", desc: "Budget options that survive -10°C nights in Chandratal and Kaza", category: "sleep", dest: "Spiti", href: "/gear/sleeping-bags-spiti", items: 5 },
      { title: "Best power banks for multi-day treks", desc: "20K vs 30K mAh, solar options, what lasts 5 days without a charge point", category: "electronics", dest: "All treks", href: "/gear/power-banks-treks", items: 6 },
      { title: "Best backpacks for Chopta–Tungnath", desc: "30L vs 50L — day pack vs multi-day, rain covers, hip belt essentials", category: "bags", dest: "Chopta", href: "/gear/backpacks-chopta", items: 5 },
      { title: "Best thermals for high-altitude treks", desc: "Merino vs synthetic, layering for -5°C to 15°C range, budget picks", category: "accessories", dest: "All treks", href: "/gear/thermals-altitude", items: 7 },
      { title: "Best riding gloves for Ladakh", desc: "Wind, cold, grip — from Rynox to budget options for Manali–Leh", category: "accessories", dest: "Ladakh", href: "/gear/riding-gloves-ladakh", items: 5 },
    ],
  },
  // Pilgrimage
  {
    region: "Pilgrimage essentials",
    regionIcon: "🙏",
    regionDesc: "Comfort on long walks, queue-ready gear, monsoon protection for temple visits.",
    guides: [
      { title: "Best shoes for Vaishno Devi trek", desc: "13 km uphill on paved + rough path — comfort + grip without breaking the bank", category: "shoes", dest: "Vaishno Devi", href: "/gear/shoes-vaishno-devi", items: 6 },
      { title: "Best rain ponchos for Char Dham yatra", desc: "Monsoon-proof options that pack small and dry fast between temples", category: "accessories", dest: "Char Dham", href: "/gear/rain-ponchos-char-dham", items: 5 },
      { title: "Best daypack for pilgrimage trips", desc: "Light, anti-theft, water-resistant — carry essentials in temple queues", category: "bags", dest: "All pilgrimages", href: "/gear/daypack-pilgrimage", items: 5 },
    ],
  },
  // General / All trips
  {
    region: "Every trip essentials",
    regionIcon: "✈️",
    regionDesc: "Gear that belongs in your bag regardless of destination.",
    guides: [
      { title: "Best headlamps under ₹1,000", desc: "Forclaz HL100 vs Nitecore — brightness, battery life, red mode for camping", category: "electronics", dest: "All trips", href: "/gear/headlamps-under-1000", items: 5 },
      { title: "Best sunscreen for mountain UV", desc: "SPF50 PA+++ options that don't feel greasy at altitude — Indian brands included", category: "accessories", dest: "All trips", href: "/gear/sunscreen-mountain", items: 5 },
      { title: "Best first aid kits for travel", desc: "Pre-built vs DIY, Diamox, ORS, altitude essentials — what pharmacies miss", category: "accessories", dest: "All trips", href: "/gear/first-aid-kits", items: 6 },
    ],
  },
];

export function GearClient() {
  const { themeKey, theme, setTheme, accent, dark, toggleDark, mounted } = useTheme();
  const [searchVal, setSearchVal] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [filter, setFilter] = useState("all");

  if (!mounted) return null;

  const bg = dark ? "#0c0a09" : "white";
  const cardBg = dark ? "#1c1a17" : "white";
  const textPrimary = dark ? "#f5f5f4" : "#111";
  const textSecondary = dark ? "#a8a29e" : "#666";
  const textMuted = dark ? "#57534e" : "#ccc";
  const border = dark ? "#292524" : "#f0f0f0";

  // Filter guides
  const filteredRegions = GEAR_GUIDES.map(region => ({
    ...region,
    guides: region.guides.filter(g => {
      const matchCat = filter === "all" || g.category === filter;
      const matchSearch = searchVal.length === 0 || g.title.toLowerCase().includes(searchVal.toLowerCase()) || g.dest.toLowerCase().includes(searchVal.toLowerCase());
      return matchCat && matchSearch;
    }),
  })).filter(r => r.guides.length > 0);

  const totalGuides = filteredRegions.reduce((s, r) => s + r.guides.length, 0);

  return (
    <div className="relative min-h-screen font-sans transition-colors duration-300" style={{ background: bg }}>
      <ColorPicker themeKey={themeKey} setTheme={setTheme} dark={dark} toggleDark={toggleDark} />
      <Navbar accent={accent} dark={dark} />

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-8 pb-20">
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs" style={{ color: textMuted }}>
          <Link href="/" className="transition-colors hover:opacity-70" style={{ color: textMuted }}>Home</Link>
          <span>→</span>
          <span className="font-semibold" style={{ color: textPrimary }}>Gear</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2 transition-colors" style={{ color: textPrimary }}>Gear guides</h1>
        <p className="text-sm mb-6 transition-colors" style={{ color: textSecondary }}>Destination-specific gear recommendations. Tested picks, real prices, affiliate links that keep the site free.</p>

        {/* Search + filter */}
        <div className="rounded-2xl p-4 sm:p-6 mb-8 transition-colors duration-300" style={{ background: dark ? "#1c1a17" : "#fafaf8", border: `1.5px solid ${border}` }}>
          {/* Search */}
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base" style={{ color: textMuted }}>🔍</div>
            <input
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
              placeholder="Which gear are you looking for?"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm font-semibold outline-none transition-all duration-200"
              style={{ background: dark ? "#0c0a09" : "white", color: textPrimary, border: `1.5px solid ${searchFocus ? accent : border}`, boxShadow: searchFocus ? `0 0 0 3px ${accent}15` : "none" }}
              autoComplete="off"
            />
            {searchVal && (
              <button onClick={() => setSearchVal("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center" style={{ background: dark ? "#333" : "#eee", color: textMuted }}>✕</button>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-5">
            <div className="flex-1 h-px" style={{ background: border }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: textMuted }}>or filter by type</span>
            <div className="flex-1 h-px" style={{ background: border }} />
          </div>

          {/* Category filters */}
          <div className="flex gap-2 flex-wrap">
            {GEAR_CATEGORIES.map(c => (
              <button key={c.key} onClick={() => setFilter(filter === c.key ? "all" : c.key)} className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-150"
                style={{ background: filter === c.key ? accent : "transparent", color: filter === c.key ? "white" : textMuted, border: `1.5px solid ${filter === c.key ? accent : border}` }}>
                {c.icon} {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        {(searchVal || filter !== "all") && (
          <div className="flex items-center gap-2 mb-5">
            <span className="text-sm font-bold" style={{ color: textPrimary }}>{totalGuides} guide{totalGuides !== 1 ? "s" : ""}</span>
            {filter !== "all" && (
              <span className="text-xs px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1" style={{ background: `${accent}15`, color: accent }}>
                {GEAR_CATEGORIES.find(c => c.key === filter)?.icon} {GEAR_CATEGORIES.find(c => c.key === filter)?.label}
                <button onClick={() => setFilter("all")} className="ml-1 font-bold">✕</button>
              </span>
            )}
          </div>
        )}

        {/* Gear guide regions */}
        {filteredRegions.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🎒</div>
            <p className="text-base font-bold" style={{ color: textPrimary }}>No gear guides found</p>
            <p className="text-sm mt-1" style={{ color: textMuted }}>Try a different search or filter</p>
          </div>
        ) : (
          filteredRegions.map((region) => (
            <div key={region.region} className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{region.regionIcon}</span>
                <h2 className="text-lg font-extrabold transition-colors" style={{ color: textPrimary }}>{region.region}</h2>
              </div>
              <p className="text-sm mb-5 ml-10" style={{ color: textSecondary }}>{region.regionDesc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {region.guides.map((g, j) => (
                  <Link key={j} href={g.href} className="block p-4 sm:p-5 rounded-xl no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" style={{ background: cardBg, border: `1.5px solid ${border}` }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = border)}>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider" style={{ background: `${accent}15`, color: accent }}>
                        {GEAR_CATEGORIES.find(c => c.key === g.category)?.icon} {g.category}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md" style={{ background: dark ? "#292524" : "#f5f5f5", color: textMuted }}>📍 {g.dest}</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold leading-snug transition-colors" style={{ color: textPrimary }}>{g.title}</p>
                    <p className="text-xs mt-2 leading-relaxed" style={{ color: textSecondary }}>{g.desc}</p>
                    <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: `1px solid ${border}` }}>
                      <span className="text-[10px] font-semibold" style={{ color: textMuted }}>{g.items} products compared</span>
                      <span className="text-xs font-semibold" style={{ color: accent }}>Read guide →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
      <Footer accent={accent} />
    </div>
  );
}
