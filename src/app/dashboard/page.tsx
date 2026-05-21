"use client";

import { useState, useEffect, useMemo } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import { DESTINATIONS } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const STORAGE_PREFIX = "travelboa-dash-";

interface DashboardState {
  checks: Record<string, boolean>;
  notes: string;
  tripDate: string;
  travelers: string;
}

function getDefaultState(): DashboardState {
  return { checks: {}, notes: "", tripDate: "", travelers: "1" };
}

function loadState(slug: string): DashboardState {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + slug);
    if (raw) return JSON.parse(raw);
  } catch {}
  return getDefaultState();
}

function saveState(slug: string, state: DashboardState) {
  try { localStorage.setItem(STORAGE_PREFIX + slug, JSON.stringify(state)); } catch {}
}

/* ═══ DESTINATION SELECTOR ═══ */
function DestSelector({ accent, dark, onSelect }: { accent: string; dark: boolean; onSelect: (i: number) => void }) {
  const [hov, setHov] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const bg = dark ? "#0c0a09" : "white";
  const textPrimary = dark ? "#f5f5f4" : "#111";
  const textSecondary = dark ? "#a8a29e" : "#666";
  const textMuted = dark ? "#57534e" : "#ccc";
  const border = dark ? "#292524" : "#f0f0f0";
  const cardBg = dark ? "#1c1a17" : "white";

  const filtered = DESTINATIONS.filter(d =>
    search.length === 0 || d.name.toLowerCase().includes(search.toLowerCase()) || d.info.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center px-4 py-12" style={{ background: bg }}>
      <div className="text-4xl mb-4">🗺️</div>
      <h1 className="text-2xl sm:text-3xl font-black text-center tracking-tight mb-2" style={{ color: textPrimary }}>Create your trip dashboard</h1>
      <p className="text-sm text-center max-w-md mb-8" style={{ color: textSecondary }}>Select a destination and we&apos;ll build a personalized dashboard with checklists, weather, road status, and more.</p>

      {/* Search bar */}
      <div className="relative w-full max-w-[500px] mb-8">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base" style={{ color: textMuted }}>🔍</div>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
          placeholder="Search destinations..."
          className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm font-semibold outline-none transition-all duration-200"
          style={{ background: dark ? "#1c1a17" : "#fafafa", color: textPrimary, border: `1.5px solid ${searchFocus ? accent : border}`, boxShadow: searchFocus ? `0 0 0 3px ${accent}15` : "none" }}
          autoComplete="off"
        />
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center" style={{ background: dark ? "#333" : "#eee", color: textMuted }}>✕</button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-base font-bold" style={{ color: textPrimary }}>No destinations found</p>
          <p className="text-sm mt-1" style={{ color: textMuted }}>Try a different search</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[800px] w-full">
          {filtered.map((d, i) => {
            const realIndex = DESTINATIONS.findIndex(dd => dd.slug === d.slug);
            return (
              <button key={d.slug} onClick={() => onSelect(realIndex)}
                onMouseEnter={() => setHov(realIndex)} onMouseLeave={() => setHov(null)}
                className="text-left rounded-xl overflow-hidden transition-all duration-200 cursor-pointer"
                style={{
                  background: cardBg, border: `1.5px solid ${hov === realIndex ? accent : border}`,
                  transform: hov === realIndex ? "translateY(-4px)" : "none",
                  boxShadow: hov === realIndex ? `0 8px 24px ${accent}20` : "none",
                }}>
                <div className="aspect-[16/9] relative" style={{ background: d.grad }}>
                  {d.image && <Image src={d.image} alt={d.name} fill className="object-cover" sizes="260px" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="text-lg font-extrabold text-white">{d.name}</div>
                    <div className="text-xs text-white/60">{d.info}</div>
                  </div>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="font-caveat text-sm" style={{ color: accent }}>{d.note}</span>
                  <span className="text-xs font-bold" style={{ color: accent }}>Select →</span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ═══ MAIN DASHBOARD ═══ */
export default function DashboardPage() {
  const { themeKey, theme, setTheme, accent, dark, toggleDark, mounted } = useTheme();
  const [destIndex, setDestIndex] = useState<number>(-1);
  const [state, setState] = useState<DashboardState>(getDefaultState());
  const [loaded, setLoaded] = useState(false);
  const [shareMsg, setShareMsg] = useState(false);

  useEffect(() => {
    // URL param takes priority
    const params = new URLSearchParams(window.location.search);
    const destParam = params.get("dest");
    if (destParam) {
      const idx = DESTINATIONS.findIndex(d => d.slug === destParam);
      if (idx >= 0) {
        setDestIndex(idx);
        setState(loadState(destParam));
        setLoaded(true);
        return;
      }
    }
    // Otherwise check if user had a saved destination
    const lastDest = localStorage.getItem("travelboa-dash-last");
    if (lastDest) {
      const idx = DESTINATIONS.findIndex(d => d.slug === lastDest);
      if (idx >= 0) {
        setDestIndex(idx);
        setState(loadState(lastDest));
      }
    }
    setLoaded(true);
  }, []);

  // Save state whenever it changes
  useEffect(() => {
    if (loaded && destIndex >= 0) {
      const slug = DESTINATIONS[destIndex].slug;
      saveState(slug, state);
      localStorage.setItem("travelboa-dash-last", slug);
    }
  }, [state, loaded, destIndex]);

  if (!mounted || !loaded) return null;

  const bg = dark ? "#0c0a09" : "white";
  const cardBg = dark ? "#1c1a17" : "white";
  const textPrimary = dark ? "#f5f5f4" : "#111";
  const textSecondary = dark ? "#a8a29e" : "#666";
  const textMuted = dark ? "#57534e" : "#ccc";
  const border = dark ? "#292524" : "#f0f0f0";

  const selectDest = (i: number) => {
    const slug = DESTINATIONS[i].slug;
    setDestIndex(i);
    setState(loadState(slug));
    window.history.replaceState({}, "", `/dashboard?dest=${slug}`);
  };

  const resetDash = () => {
    setDestIndex(-1);
    setState(getDefaultState());
    localStorage.removeItem("travelboa-dash-last");
    window.history.replaceState({}, "", "/dashboard");
  };

  const toggleCheck = (key: string) => {
    setState(p => ({ ...p, checks: { ...p.checks, [key]: !p.checks[key] } }));
  };

  const shareUrl = () => {
    const url = `https://www.travelboa.com/dashboard?dest=${DESTINATIONS[destIndex].slug}`;
    navigator.clipboard.writeText(url);
    setShareMsg(true);
    setTimeout(() => setShareMsg(false), 2000);
  };

  // Selector screen
  if (destIndex < 0) {
    return (
      <div className="relative min-h-screen font-sans transition-colors duration-300" style={{ background: bg }}>
        <ColorPicker themeKey={themeKey} setTheme={setTheme} dark={dark} toggleDark={toggleDark} />
        <Navbar accent={accent} dark={dark} />
        <DestSelector accent={accent} dark={dark} onSelect={selectDest} />
        <Footer accent={accent} />
      </div>
    );
  }

  const dest = DESTINATIONS[destIndex];
  const w = dest.wx;

  const checkSections = [
    { title: "📋 Registration & docs", items: dest.slug === "spiti" ? ["Inner Line Permit (ILP)", "Rohtang permit", "Vehicle documents", "ID proof ×2", "Travel insurance"] : dest.slug === "ladakh" ? ["ILP permit", "Vehicle documents", "ID proof ×2", "Travel insurance", "Bike fitness certificate"] : ["Char Dham e-pass", "ID proof ×2", "Aadhaar / voter ID", "Travel insurance"] },
    { title: "🎒 Packing", items: dest.packItems },
    { title: "🏨 Bookings", items: ["Accommodation booked", "Transport booked", "Return tickets confirmed", dest.slug === "kedarnath" ? "Helicopter slot (if applicable)" : "Fuel/supplies stocked"] },
    { title: "💰 Money", items: ["Cash withdrawn (₹" + (dest.slug === "ladakh" ? "20K+" : dest.slug === "spiti" ? "15K+" : "10K+") + ")", "UPI apps working", "Emergency card active", "Budget planned"] },
    { title: "🏥 Health", items: ["Diamox if needed", "First aid kit packed", "Sunscreen SPF50", "Water purification tabs", "Prescription medicines"] },
  ];

  const totalChecks = checkSections.reduce((s, sec) => s + sec.items.length, 0);
  const doneChecks = Object.values(state.checks).filter(Boolean).length;
  const progress = totalChecks > 0 ? Math.round((doneChecks / totalChecks) * 100) : 0;

  return (
    <div className="relative min-h-screen font-sans transition-colors duration-300" style={{ background: bg }}>
      <ColorPicker themeKey={themeKey} setTheme={setTheme} dark={dark} toggleDark={toggleDark} />
      <Navbar accent={accent} dark={dark} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-8 pb-20">
        {/* Hero banner with image */}
        <div className="relative rounded-2xl overflow-hidden mt-4 mb-6" style={{ aspectRatio: "21/6" }}>
          <div className="absolute inset-0" style={{ background: dest.grad }}>
            {dest.image && <Image src={dest.image} alt={dest.name} fill className="object-cover" sizes="1100px" />}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs text-white/50 mb-1">
                  <Link href="/" className="hover:text-white/80 text-white/50 no-underline">Home</Link>
                  <span>→</span>
                  <span className="text-white/80 font-semibold">My trip</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Your {dest.name} trip</h1>
                <p className="text-xs sm:text-sm text-white/50 mt-1">Personal dashboard — saves automatically to your browser</p>
              </div>
              <div className="flex gap-2">
                <button onClick={shareUrl} className="px-4 py-2 rounded-xl text-xs font-bold bg-white/15 text-white border border-white/20 backdrop-blur-sm transition-all hover:bg-white/25">
                  {shareMsg ? "✓ Copied!" : "📤 Share"}
                </button>
                <button onClick={resetDash} className="px-4 py-2 rounded-xl text-xs font-bold text-white border-2 border-white/40 backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/60">
                  🔄 Change destination
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="p-4 rounded-xl mb-6" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold" style={{ color: textPrimary }}>Trip readiness</span>
            <span className="text-sm font-black" style={{ color: progress === 100 ? "#22c55e" : accent }}>{progress}%</span>
          </div>
          <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ background: dark ? "#292524" : "#f0f0f0" }}>
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: progress === 100 ? "#22c55e" : accent }} />
          </div>
          <p className="text-xs mt-2" style={{ color: textMuted }}>{doneChecks} of {totalChecks} items checked</p>
        </div>

        {/* Trip details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-4 rounded-xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
            <label className="text-xs font-semibold block mb-2" style={{ color: textMuted }}>📅 Trip date</label>
            <input type="date" value={state.tripDate} onChange={e => setState(p => ({ ...p, tripDate: e.target.value }))} className="w-full py-2 px-3 rounded-lg text-sm font-semibold outline-none" style={{ background: dark ? "#0c0a09" : "#fafafa", color: textPrimary, border: `1px solid ${border}` }} />
          </div>
          <div className="p-4 rounded-xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
            <label className="text-xs font-semibold block mb-2" style={{ color: textMuted }}>👥 Travelers</label>
            <input type="number" min="1" max="20" value={state.travelers} onChange={e => setState(p => ({ ...p, travelers: e.target.value }))} className="w-full py-2 px-3 rounded-lg text-sm font-semibold outline-none" style={{ background: dark ? "#0c0a09" : "#fafafa", color: textPrimary, border: `1px solid ${border}` }} />
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
          {/* Checklists */}
          <div className="flex flex-col gap-4">
            {checkSections.map((sec, si) => (
              <div key={si} className="p-4 sm:p-5 rounded-xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
                <h3 className="text-sm font-extrabold mb-3" style={{ color: textPrimary }}>{sec.title}</h3>
                {sec.items.map((item, ii) => {
                  const key = `${si}-${ii}`;
                  const done = !!state.checks[key];
                  return (
                    <div key={key} onClick={() => toggleCheck(key)} className="flex items-center gap-3 py-2 cursor-pointer rounded-lg px-2 -mx-2 transition-colors" style={{}} onMouseEnter={e=>e.currentTarget.style.background=dark?'rgba(255,255,255,0.02)':'rgba(0,0,0,0.01)'} onMouseLeave={e=>e.currentTarget.style.background=''}>
                      <div className="w-5 h-5 rounded-md flex items-center justify-center text-xs text-white font-bold shrink-0 transition-all" style={{ border: `2px solid ${done ? "#22c55e" : border}`, background: done ? "#22c55e" : "transparent" }}>{done ? "✓" : ""}</div>
                      <span className="text-sm transition-all" style={{ color: done ? textMuted : textPrimary, textDecoration: done ? "line-through" : "none" }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Weather */}
            <div className="p-4 rounded-xl text-center" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
              <div className="text-3xl">{w.icon}</div>
              <div className="text-3xl font-black mt-1" style={{ color: textPrimary }}>{w.temp}°C</div>
              <div className="text-xs font-semibold mt-1" style={{ color: textSecondary }}>{dest.name} · {w.cond}</div>
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3" style={{ borderTop: `1px solid ${border}` }}>
                {[["💧", w.hum + "%"], ["💨", w.wind + " km/h"], ["🌅", w.sunrise]].map(([ic, val]) => (
                  <div key={ic as string} className="text-center">
                    <div className="text-sm">{ic}</div>
                    <div className="text-xs font-bold mt-0.5" style={{ color: textPrimary }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Road status */}
            <div className="p-4 rounded-xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: textPrimary }}>Road status</span>
              </div>
              {dest.routes.map((r, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.status === "open" ? "#22c55e" : r.status === "partial" ? "#f59e0b" : "#ef4444" }} />
                  <span className="text-xs font-semibold flex-1" style={{ color: textPrimary }}>{r.route}</span>
                  <span className="text-[10px]" style={{ color: textMuted }}>{r.note}</span>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="p-4 rounded-xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accent }}>Quick facts</div>
              {dest.quickFacts.map((f, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5" style={{ borderBottom: i < dest.quickFacts.length - 1 ? `1px solid ${border}` : "none" }}>
                  <span className="text-base">{f.icon}</span>
                  <span className="text-xs flex-1" style={{ color: textSecondary }}>{f.label}</span>
                  <span className="text-xs font-bold" style={{ color: textPrimary }}>{f.value}</span>
                </div>
              ))}
            </div>

            {/* Emergency */}
            <div className="p-4 rounded-xl" style={{ background: dark ? "#1c1210" : "#fef8f8", border: `1.5px solid ${dark ? "#3b1c1c" : "#fee2e2"}` }}>
              <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-3">🚨 Emergency</div>
              {dest.emergency.map(e => (
                <div key={e.number} className="flex justify-between py-1.5 text-xs">
                  <span style={{ color: textSecondary }}>{e.name}</span>
                  <a href={`tel:${e.number}`} className="font-mono font-bold no-underline" style={{ color: textPrimary }}>{e.number}</a>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div className="p-4 rounded-xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accent }}>📝 Your notes</div>
              <textarea
                value={state.notes}
                onChange={e => setState(p => ({ ...p, notes: e.target.value }))}
                placeholder="Hotel names, contacts, reminders..."
                rows={6}
                className="w-full p-3 rounded-lg text-sm outline-none resize-none"
                style={{ background: dark ? "#0c0a09" : "#fafafa", color: textPrimary, border: `1px solid ${border}` }}
              />
              <p className="text-[10px] mt-2" style={{ color: textMuted }}>Auto-saved ✓</p>
            </div>

            {/* Guide link */}
            <Link href={`/${dest.slug}`} className="flex items-center gap-3 p-4 rounded-xl no-underline transition-all hover:-translate-y-0.5" style={{ border: `2px solid ${accent}` }}>
              <span className="text-xl">📖</span>
              <div>
                <div className="text-sm font-extrabold" style={{ color: textPrimary }}>Full {dest.name} guide</div>
                <div className="text-[11px]" style={{ color: textMuted }}>Trek info, stay, food, safety →</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer accent={accent} />
    </div>
  );
}
