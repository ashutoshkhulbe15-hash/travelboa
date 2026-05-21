"use client";

import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import Link from "next/link";

const CATEGORIES = [
  {
    name: "Footwear",
    icon: "🥾",
    items: [
      { name: "Quechua MH500", desc: "All-terrain, ankle support, great grip on wet rock", price: "₹3,999", store: "Decathlon", best: "Best overall" },
      { name: "Wildcraft Hypagrip 2.0", desc: "Budget-friendly, decent waterproofing", price: "₹2,499", store: "Amazon", best: "" },
      { name: "Woodland OGC 4263122", desc: "Heavy-duty leather, overkill for light treks", price: "₹4,995", store: "Amazon", best: "" },
      { name: "Decathlon sandals NH500", desc: "Camp shoes, river crossings, rest days", price: "₹1,299", store: "Decathlon", best: "Camp essential" },
    ],
  },
  {
    name: "Jackets & layers",
    icon: "🧥",
    items: [
      { name: "Forclaz MT500 windproof", desc: "Blocks wind at passes, packable, 300g", price: "₹4,999", store: "Decathlon", best: "Best value" },
      { name: "Quechua Trek 100 down", desc: "Lightweight down, -5°C comfort, packs into pocket", price: "₹3,999", store: "Decathlon", best: "" },
      { name: "Decathlon rain jacket NH500", desc: "Waterproof, seam-sealed, essential for monsoon", price: "₹1,999", store: "Decathlon", best: "" },
      { name: "Merino wool base layer", desc: "Anti-odor, moisture-wicking, wear for days", price: "₹2,499", store: "Amazon", best: "Worth the spend" },
    ],
  },
  {
    name: "Bags & packs",
    icon: "🎒",
    items: [
      { name: "Quechua NH500 30L", desc: "Day pack, rain cover included, padded hip belt", price: "₹2,499", store: "Decathlon", best: "Best day pack" },
      { name: "Forclaz MT500 50L", desc: "Multi-day treks, adjustable torso, ventilated back", price: "₹5,999", store: "Decathlon", best: "" },
      { name: "Dry bags 10L + 20L set", desc: "Keep electronics and clothes dry in rain", price: "₹799", store: "Amazon", best: "" },
    ],
  },
  {
    name: "Sleep & shelter",
    icon: "🛏️",
    items: [
      { name: "Naturehike UL sleeping bag", desc: "Comfort -5°C, 800g, compresses small", price: "₹3,499", store: "Amazon", best: "Best budget" },
      { name: "Forclaz Trek 500 0°C", desc: "Mummy shape, hood, warmer but heavier", price: "₹4,999", store: "Decathlon", best: "" },
      { name: "Sea to Summit liner", desc: "Adds 8°C warmth, keeps sleeping bag clean", price: "₹1,999", store: "Amazon", best: "" },
    ],
  },
  {
    name: "Electronics",
    icon: "🔋",
    items: [
      { name: "Mi 20000mAh power bank", desc: "Charges phone 4x, fast charge, reliable", price: "₹1,499", store: "Amazon", best: "Must-carry" },
      { name: "Forclaz HL100 headlamp", desc: "80 lumens, 30hr battery, red night mode", price: "₹499", store: "Decathlon", best: "" },
      { name: "Nitecore NU25 headlamp", desc: "Premium, USB-C, 400 lumens, 28g", price: "₹3,299", store: "Amazon", best: "" },
      { name: "Solar charger 21W", desc: "Backup on multi-day treks without power", price: "₹2,999", store: "Amazon", best: "" },
    ],
  },
  {
    name: "Protection & health",
    icon: "🧴",
    items: [
      { name: "Sunscreen SPF50 PA+++", desc: "UV is brutal above 3,000m, reapply every 2hr", price: "₹499", store: "Amazon", best: "Non-negotiable" },
      { name: "UV400 sunglasses", desc: "Polarized, wraparound, snow glare protection", price: "₹899", store: "Amazon", best: "" },
      { name: "First aid kit (pre-built)", desc: "Bandages, Dettol, ORS, Diamox, painkillers", price: "₹599", store: "Amazon", best: "" },
      { name: "Trekking poles (pair)", desc: "Carbon, foldable, saves knees on descent", price: "₹1,999", store: "Decathlon", best: "" },
    ],
  },
  {
    name: "Clothing essentials",
    icon: "👕",
    items: [
      { name: "Quick-dry t-shirts ×3", desc: "Polyester, moisture-wicking, not cotton", price: "₹999", store: "Decathlon", best: "" },
      { name: "Trek pants convertible", desc: "Zip-off legs, stretch, multiple pockets", price: "₹1,799", store: "Decathlon", best: "Best versatility" },
      { name: "Thermal set (top + bottom)", desc: "Fleece-lined, wear under everything above 3,000m", price: "₹1,499", store: "Amazon", best: "" },
      { name: "Buff/neck gaiter", desc: "Sun protection, dust, cold — one item, 10 uses", price: "₹399", store: "Amazon", best: "" },
      { name: "Riding gloves", desc: "Rynox Air GT — wind, cold, grip for bike trips", price: "₹1,799", store: "Amazon", best: "" },
    ],
  },
];

const CATEGORY_NAMES = ["All", ...CATEGORIES.map(c => c.name)];

export default function GearPage() {
  const { themeKey, theme, setTheme, accent, dark, toggleDark, mounted } = useTheme();
  const [filter, setFilter] = useState("All");

  if (!mounted) return null;

  const bg = dark ? "#0c0a09" : "white";
  const cardBg = dark ? "#1c1a17" : "white";
  const textPrimary = dark ? "#f5f5f4" : "#111";
  const textSecondary = dark ? "#a8a29e" : "#666";
  const textMuted = dark ? "#57534e" : "#ccc";
  const border = dark ? "#292524" : "#f0f0f0";
  const sectionBg = dark ? "#151413" : "#fafaf8";

  const filtered = filter === "All" ? CATEGORIES : CATEGORIES.filter(c => c.name === filter);

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

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2 transition-colors" style={{ color: textPrimary }}>Gear essentials</h1>
        <p className="text-sm mb-2 transition-colors" style={{ color: textSecondary }}>Tested picks for mountain travel. Every item is something we&apos;d actually carry.</p>
        <p className="text-xs mb-8" style={{ color: textMuted }}>Affiliate links help keep the site free. Prices as of May 2026 — may vary.</p>

        {/* Category filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {CATEGORY_NAMES.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-150 whitespace-nowrap shrink-0" style={{ background: filter === cat ? accent : "transparent", color: filter === cat ? "white" : textMuted, border: `1.5px solid ${filter === cat ? accent : border}` }}>
              {cat === "All" ? "All categories" : `${CATEGORIES.find(c=>c.name===cat)?.icon} ${cat}`}
            </button>
          ))}
        </div>

        {/* Categories */}
        {filtered.map((cat) => (
          <div key={cat.name} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-lg font-extrabold transition-colors" style={{ color: textPrimary }}>{cat.name}</h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-lg" style={{ background: `${accent}15`, color: accent }}>{cat.items.length} items</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cat.items.map((item, j) => (
                <div key={j} className="p-4 rounded-xl transition-all duration-150 hover:-translate-y-0.5" style={{ background: cardBg, border: `1.5px solid ${border}` }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = border)}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold transition-colors" style={{ color: textPrimary }}>{item.name}</p>
                        {item.best && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: `${accent}18`, color: accent }}>{item.best}</span>}
                      </div>
                      <p className="text-xs mt-1 leading-relaxed" style={{ color: textSecondary }}>{item.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-base font-extrabold transition-colors" style={{ color: textPrimary }}>{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: `1px dashed ${border}` }}>
                    <span className="text-[10px]" style={{ color: textMuted }}>Buy on {item.store}</span>
                    <span className="text-xs font-semibold cursor-pointer" style={{ color: accent }}>{item.store} →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer accent={accent} />
    </div>
  );
}
