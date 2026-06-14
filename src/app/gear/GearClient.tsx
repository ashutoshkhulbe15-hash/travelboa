"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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

const GEAR_CATS = [
  { cat: "🧥 Jackets", items: [{ name: "Best jackets for Kedarnath trek", href: "/gear/jackets-kedarnath" }, { name: "Best jackets for Ladakh bike trip", href: "/gear/jackets-ladakh" }] },
  { cat: "🥾 Footwear", items: [{ name: "Best trekking shoes under ₹5,000", href: "/gear/trekking-shoes-under-5000" }, { name: "Best shoes for Vaishno Devi", href: "/gear/shoes-vaishno-devi" }] },
  { cat: "🎒 Bags", items: [{ name: "Best backpacks for Chopta-Tungnath", href: "/gear/backpacks-chopta" }, { name: "Best daypack for pilgrimage", href: "/gear/daypack-pilgrimage" }] },
  { cat: "🛏️ Sleep", items: [{ name: "Best sleeping bags for Spiti camping", href: "/gear/sleeping-bags-spiti" }] },
  { cat: "🔋 Electronics", items: [{ name: "Best power banks for multi-day treks", href: "/gear/power-banks-treks" }, { name: "Best headlamps under ₹1,000", href: "/gear/headlamps-under-1000" }] },
  { cat: "🧤 Accessories", items: [{ name: "Best thermals for high-altitude", href: "/gear/thermals-altitude" }, { name: "Best riding gloves for Ladakh", href: "/gear/riding-gloves-ladakh" }, { name: "Best rain ponchos for Char Dham", href: "/gear/rain-ponchos-char-dham" }] },
  { cat: "☀️ Protection", items: [{ name: "Best sunscreen for mountain UV", href: "/gear/sunscreen-mountain" }, { name: "Best first aid kits for travel", href: "/gear/first-aid-kits" }] },
];

export function GearClient() {
  const [openTrip, setOpenTrip] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
    }), { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) els.forEach(el => el.classList.add("on"));
    return () => io.disconnect();
  }, []);

  const filteredTrips = TRIPS.filter(trip => {
    if (!search) return true;
    const s = search.toLowerCase();
    return trip.name.toLowerCase().includes(s) || trip.desc.toLowerCase().includes(s) || trip.gear.some(c => c.items.some(item => item.name.toLowerCase().includes(s) || item.why.toLowerCase().includes(s)));
  });

  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span style={{ color: "var(--ink)" }}>Gear</span>
        </div>
      </div>

      <div className="contour-bg py-12 sm:py-16 border-b" style={{ borderColor: "#e3e9e6" }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <p className="kicker mb-3">The Gear Planner</p>
          <h1 className="text-[clamp(30px,4.5vw,48px)] font-extrabold tracking-tight leading-[1.06]" style={{ color: "var(--ink)" }}>Tell me the trip. I will pack the bag.</h1>
          <p className="text-[18px] font-normal leading-relaxed mt-3" style={{ color: "var(--ink-soft)", maxWidth: "56ch" }}>Pick your trip type or search for specific gear. Every item links to a review where I explain exactly why I pick it.</p>

          <div className="mt-8 relative" style={{ maxWidth: 540 }}>
            <div className="flex items-center rounded-full px-5 py-1" style={{ background: "#fff", border: `2px solid ${searchFocus ? "var(--terra)" : "#e3e9e6"}`, boxShadow: searchFocus ? "0 0 0 4px rgba(194,102,45,0.1)" : "0 4px 20px -8px rgba(28,43,51,0.15)", transition: "border-color 0.2s, box-shadow 0.2s" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9aa8a3" strokeWidth="2.2" strokeLinecap="round" className="shrink-0"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              <input value={search} onChange={e => setSearch(e.target.value)} onFocus={() => setSearchFocus(true)} onBlur={() => setSearchFocus(false)}
                placeholder="Search gear... jackets, shoes, power bank" className="flex-1 border-0 bg-transparent font-sans text-[16px] py-3 px-3 outline-none min-w-0" style={{ color: "var(--ink)" }} autoComplete="off" />
              {search && <button onClick={() => setSearch("")} className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold border-0 cursor-pointer" style={{ background: "#eef2ef", color: "var(--ink-soft)" }}>✕</button>}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">

          {/* MAIN: Trip accordions */}
          <div className="space-y-4">
            <p className="kicker mb-1">Pick your trip</p>
            {filteredTrips.map(trip => {
              const isOpen = openTrip === trip.id;
              const totalItems = trip.gear.reduce((s, c) => s + c.items.length, 0);
              return (
                <div key={trip.id} className="reveal rounded-[18px] transition-all duration-200 overflow-hidden bg-white" style={{ border: `1.5px solid ${isOpen ? "var(--terra)" : "#e3e9e6"}`, boxShadow: isOpen ? "0 12px 40px -16px rgba(28,43,51,0.3)" : "none" }}>
                  <button onClick={() => setOpenTrip(isOpen ? null : trip.id)} className="w-full flex items-center gap-4 p-5 sm:p-6 cursor-pointer text-left border-0 bg-transparent">
                    <span className="text-3xl sm:text-4xl">{trip.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-[18px] sm:text-[20px] font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>{trip.name}</span>
                        <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: "rgba(194,102,45,0.1)", color: "var(--terra)" }}>{trip.altitude}</span>
                      </div>
                      <p className="text-[15px] font-normal mt-1" style={{ color: "var(--ink-soft)" }}>{trip.desc}</p>
                      <div className="flex items-center gap-4 mt-2 font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>
                        <span>📅 {trip.season}</span><span>🎒 {totalItems} items</span>
                      </div>
                    </div>
                    <span className="text-xl transition-transform duration-200 shrink-0" style={{ color: "var(--terra)", transform: isOpen ? "rotate(180deg)" : "none" }}>&#9662;</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0">
                      <div className="h-px mb-5" style={{ background: "#e3e9e6" }} />
                      {trip.gear.map((cat, ci) => (
                        <div key={ci} className="mb-6 last:mb-0">
                          <p className="kicker mb-3">{cat.category}</p>
                          <div className="space-y-3">
                            {cat.items.map((item, ii) => (
                              <div key={ii} className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: "var(--snowfield)" }}>
                                <span className="mt-1 text-[11px]" style={{ color: "var(--terra)" }}>●</span>
                                <div className="flex-1 min-w-0">
                                  <p className="text-[16px] font-bold" style={{ color: "var(--ink)" }}>{item.name}</p>
                                  <p className="text-[14px] font-normal mt-0.5" style={{ color: "var(--ink-soft)" }}>{item.why}</p>
                                </div>
                                <Link href={item.link} className="font-mono text-[12px] font-semibold no-underline shrink-0 px-3 py-2 rounded-xl transition-all hover:-translate-y-0.5" style={{ background: "rgba(194,102,45,0.1)", color: "var(--terra)" }}>
                                  {item.linkLabel} &rarr;
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="mt-6 pt-5 border-t border-dashed" style={{ borderColor: "#e3e9e6" }}>
                        <Link href={`/${trip.id === "ladakh-bike" ? "ladakh" : trip.id === "char-dham" ? "kedarnath" : trip.id}`} className="text-[14px] font-semibold no-underline" style={{ color: "var(--terra)" }}>
                          📖 Full {trip.name} guide &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="flex flex-col gap-5" style={{ position: "sticky", top: 80 }}>
              {/* Gear reviews by category */}
              <div className="bg-white border rounded-[20px] p-5" style={{ borderColor: "#e3e9e6", boxShadow: "0 20px 50px -30px rgba(28,43,51,0.3)" }}>
                <h3 className="text-[16px] font-bold mb-4" style={{ color: "var(--ink)" }}>🔍 All 14 gear reviews</h3>
                {GEAR_CATS.map((g, i) => (
                  <div key={i} className="mb-4 last:mb-0">
                    <p className="text-[14px] font-bold mb-1" style={{ color: "var(--ink)" }}>{g.cat}</p>
                    {g.items.map((item, j) => (
                      <Link key={j} href={item.href} className="block text-[13px] font-medium py-1 no-underline transition-colors hover:pl-1" style={{ color: "var(--terra)" }}>
                        {item.name} &rarr;
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              {/* Packing checklist CTA */}
              <Link href="/kedarnath/packing" className="block text-center rounded-[20px] p-5 no-underline transition-all duration-200 hover:-translate-y-0.5" style={{ background: "var(--terra)", color: "#fff" }}>
                <span className="block text-[15px] font-bold">Open a packing checklist</span>
                <span className="block text-[13px] font-light opacity-80 mt-1">Tick items off, share with your group</span>
              </Link>

              {/* Author card */}
              <div className="rounded-[20px] p-5 border" style={{ background: "#fdf5ed", borderColor: "#e8d8c4" }}>
                <div className="flex gap-3.5 items-start">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-extrabold text-[18px] shrink-0" style={{ background: "var(--terra)" }}>A</div>
                  <div>
                    <span className="block text-[15px] font-bold" style={{ color: "var(--ink)" }}>Tested by Ash</span>
                    <span className="block font-mono text-[11px] mt-0.5" style={{ color: "var(--ink-soft)" }}>DEHRADUN</span>
                    <p className="text-[14px] font-normal leading-relaxed mt-2" style={{ color: "var(--ink-soft)" }}>Every product linked here has been used on a real trip. I do not copy spec sheets.</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
