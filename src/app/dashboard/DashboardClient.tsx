"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
function DestSelector({ onSelect }: { onSelect: (i: number) => void }) {
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const filtered = DESTINATIONS.filter(d =>
    search.length === 0 || d.name.toLowerCase().includes(search.toLowerCase()) || d.info.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="contour-bg min-h-[calc(100vh-64px)] flex flex-col items-center px-5 py-16">
      <div className="text-5xl mb-5">🗺️</div>
      <h1 className="text-[clamp(28px,4vw,42px)] font-extrabold text-center tracking-tight mb-2" style={{ color: "var(--ink)" }}>Create your trip dashboard</h1>
      <p className="text-[17px] font-normal text-center max-w-lg mb-10" style={{ color: "var(--ink-soft)" }}>Select a destination. I will build a personal dashboard with checklists, weather, road status, and notes that saves to your browser.</p>

      <div className="w-full max-w-md mb-8">
        <div className="flex items-center rounded-full px-5 py-1" style={{ background: "#fff", border: `2px solid ${searchFocus ? "var(--terra)" : "#e3e9e6"}`, boxShadow: searchFocus ? "0 0 0 4px rgba(194,102,45,0.1)" : "0 4px 20px -8px rgba(28,43,51,0.15)", transition: "border-color 0.2s, box-shadow 0.2s" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9aa8a3" strokeWidth="2.2" strokeLinecap="round" className="shrink-0"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input value={search} onChange={e => setSearch(e.target.value)} onFocus={() => setSearchFocus(true)} onBlur={() => setSearchFocus(false)}
            placeholder="Search destinations..." className="flex-1 border-0 bg-transparent font-sans text-[16px] py-3 px-3 outline-none" style={{ color: "var(--ink)" }} autoComplete="off" />
        </div>
      </div>

      <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((d, i) => {
          const idx = DESTINATIONS.indexOf(d);
          return (
            <button key={d.slug} onClick={() => onSelect(idx)}
              className="group rounded-[16px] overflow-hidden text-left border-0 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl bg-white" style={{ border: "1px solid #e3e9e6" }}>
              <div className="relative aspect-[16/10] overflow-hidden" style={{ background: d.grad }}>
                {d.image && <Image src={d.image} alt={d.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="200px" />}
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 30%,rgba(0,0,0,0.55))" }} />
                <div className="absolute bottom-2.5 left-3">
                  <div className="text-[16px] font-extrabold text-white">{d.name}</div>
                  <div className="text-[11px] text-white/60 font-mono">{d.info}</div>
                </div>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="font-caveat text-[14px]" style={{ color: "var(--terra)" }}>{d.note}</span>
                <span className="text-[12px] font-semibold" style={{ color: "var(--terra)" }}>Select &rarr;</span>
              </div>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-3">🏔️</div>
          <p className="text-[17px] font-bold" style={{ color: "var(--ink)" }}>No destinations found</p>
        </div>
      )}
    </div>
  );
}

/* ═══ MAIN DASHBOARD ═══ */
export function DashboardClient() {
  const [destIndex, setDestIndex] = useState<number>(-1);
  const [state, setState] = useState<DashboardState>(getDefaultState());
  const [loaded, setLoaded] = useState(false);
  const [shareMsg, setShareMsg] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const destParam = params.get("dest");
    const stateParam = params.get("s");

    if (destParam) {
      const idx = DESTINATIONS.findIndex(d => d.slug === destParam);
      if (idx >= 0) {
        setDestIndex(idx);
        if (stateParam) {
          try { const decoded = JSON.parse(atob(stateParam)); setState(decoded); setLoaded(true); return; } catch {}
        }
        setState(loadState(destParam));
        setLoaded(true);
        return;
      }
    }
    try {
      const lastDest = localStorage.getItem("travelboa-dash-last");
      if (lastDest) {
        const idx = DESTINATIONS.findIndex(d => d.slug === lastDest);
        if (idx >= 0) { setDestIndex(idx); setState(loadState(lastDest)); }
      }
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded && destIndex >= 0) {
      const slug = DESTINATIONS[destIndex].slug;
      saveState(slug, state);
      try { localStorage.setItem("travelboa-dash-last", slug); } catch {}
    }
  }, [state, loaded, destIndex]);

  if (!loaded) return null;

  const selectDest = (i: number) => {
    const slug = DESTINATIONS[i].slug;
    setDestIndex(i);
    setState(loadState(slug));
    window.history.replaceState({}, "", `/dashboard?dest=${slug}`);
  };

  const resetDash = () => {
    setDestIndex(-1);
    setState(getDefaultState());
    try { localStorage.removeItem("travelboa-dash-last"); } catch {}
    window.history.replaceState({}, "", "/dashboard");
  };

  const toggleCheck = (key: string) => {
    setState(p => ({ ...p, checks: { ...p.checks, [key]: !p.checks[key] } }));
  };

  const shareUrl = () => {
    const encoded = btoa(JSON.stringify(state));
    const url = `https://www.travelboa.com/dashboard?dest=${DESTINATIONS[destIndex].slug}&s=${encoded}`;
    navigator.clipboard.writeText(url);
    setShareMsg(true);
    setTimeout(() => setShareMsg(false), 2000);
  };

  // Selector screen
  if (destIndex < 0) {
    return (
      <div className="min-h-screen" style={{ background: "var(--paper)" }}>
        <Navbar />
        <DestSelector onSelect={selectDest} />
        <Footer />
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

  const routeStatusColor: Record<string, string> = { open: "#7be3a2", partial: "#e3b04b", closed: "#ef4444" };

  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      {/* Hero banner */}
      <div className="relative overflow-hidden" style={{ minHeight: 200, background: dest.grad }}>
        {dest.image && <Image src={dest.image} alt={dest.name} fill className="object-cover" sizes="1200px" />}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,22,32,0.3) 0%, rgba(10,22,32,0.8) 100%)" }} />
        <div className="relative z-[2] max-w-[1100px] mx-auto px-5 sm:px-6 py-8 sm:py-10">
          <div className="flex items-center gap-2 font-mono text-[12px] text-white/50 mb-3">
            <Link href="/" className="no-underline text-white/50 hover:text-white/80">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-semibold">My trip</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-[clamp(26px,4vw,36px)] font-extrabold text-white tracking-tight">Your {dest.name} trip</h1>
              <p className="text-[15px] text-white/50 mt-1">Personal dashboard. Saves automatically to your browser.</p>
            </div>
            <div className="flex gap-2">
              <button onClick={shareUrl} className="px-4 py-2.5 rounded-xl text-[13px] font-semibold text-white border-0 cursor-pointer transition-all hover:bg-white/25" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }}>
                {shareMsg ? "✓ Copied!" : "📤 Share"}
              </button>
              <button onClick={resetDash} className="px-4 py-2.5 rounded-xl text-[13px] font-semibold text-white border-2 border-white/30 bg-transparent cursor-pointer transition-all hover:bg-white/15">
                🔄 Change
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 py-8 sm:py-10">
        {/* Progress bar */}
        <div className="bg-white p-5 rounded-[18px] border mb-6" style={{ borderColor: "#e3e9e6", boxShadow: "0 8px 30px -16px rgba(28,43,51,0.2)" }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[16px] font-bold" style={{ color: "var(--ink)" }}>Trip readiness</span>
            <span className="text-[18px] font-extrabold" style={{ color: progress === 100 ? "var(--meadow)" : "var(--terra)" }}>{progress}%</span>
          </div>
          <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: "var(--snowfield)" }}>
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: progress === 100 ? "var(--meadow)" : "var(--terra)" }} />
          </div>
          <p className="text-[13px] font-mono mt-2" style={{ color: "var(--ink-soft)" }}>{doneChecks} of {totalChecks} items checked</p>
        </div>

        {/* Trip details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-5 rounded-[18px] border" style={{ borderColor: "#e3e9e6" }}>
            <label className="block font-mono text-[12px] font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--ink-soft)" }}>📅 Trip date</label>
            <input type="date" value={state.tripDate} onChange={e => setState(p => ({ ...p, tripDate: e.target.value }))} className="w-full py-2.5 px-3 rounded-xl text-[15px] font-semibold outline-none" style={{ background: "var(--snowfield)", color: "var(--ink)", border: "1px solid #e3e9e6" }} />
          </div>
          <div className="bg-white p-5 rounded-[18px] border" style={{ borderColor: "#e3e9e6" }}>
            <label className="block font-mono text-[12px] font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--ink-soft)" }}>👥 Travelers</label>
            <input type="number" min="1" max="20" value={state.travelers} onChange={e => setState(p => ({ ...p, travelers: e.target.value }))} className="w-full py-2.5 px-3 rounded-xl text-[15px] font-semibold outline-none" style={{ background: "var(--snowfield)", color: "var(--ink)", border: "1px solid #e3e9e6" }} />
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Checklists */}
          <div className="flex flex-col gap-4">
            {checkSections.map((sec, si) => (
              <div key={si} className="bg-white p-5 sm:p-6 rounded-[18px] border" style={{ borderColor: "#e3e9e6" }}>
                <h3 className="text-[16px] font-bold mb-4" style={{ color: "var(--ink)" }}>{sec.title}</h3>
                {sec.items.map((item, ii) => {
                  const key = `${si}-${ii}`;
                  const done = !!state.checks[key];
                  return (
                    <div key={key} onClick={() => toggleCheck(key)} className="flex items-center gap-3 py-2.5 cursor-pointer rounded-lg px-2 -mx-2 transition-colors hover:bg-[var(--snowfield)]">
                      <div className="w-5 h-5 rounded-md flex items-center justify-center text-[11px] text-white font-bold shrink-0 transition-all" style={{ border: `2px solid ${done ? "var(--meadow)" : "#e3e9e6"}`, background: done ? "var(--meadow)" : "transparent" }}>{done ? "✓" : ""}</div>
                      <span className="text-[15px] transition-all" style={{ color: done ? "var(--ink-soft)" : "var(--ink)", textDecoration: done ? "line-through" : "none" }}>{item}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Weather */}
            <div className="bg-white p-5 rounded-[18px] border text-center" style={{ borderColor: "#e3e9e6" }}>
              <div className="text-3xl">{w.icon}</div>
              <div className="text-[38px] font-extrabold tracking-tight mt-1" style={{ color: "var(--ink)" }}>{w.temp}&deg;C</div>
              <div className="text-[14px] font-medium mt-1" style={{ color: "var(--ink-soft)" }}>{dest.name} &middot; {w.cond}</div>
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-dashed" style={{ borderColor: "#e3e9e6" }}>
                {[["💧", w.hum + "%"], ["💨", w.wind + " km/h"], ["🌅", w.sunrise]].map(([ic, val]) => (
                  <div key={ic as string} className="text-center">
                    <div className="text-sm">{ic}</div>
                    <div className="text-[13px] font-bold mt-0.5" style={{ color: "var(--ink)" }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Road status */}
            <div className="bg-white p-5 rounded-[18px] border" style={{ borderColor: "#e3e9e6" }}>
              <h3 className="text-[15px] font-bold flex items-center gap-2 mb-3" style={{ color: "var(--ink)" }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#7be3a2", animation: "pulse-dot 2s ease-in-out infinite" }} /> Road status
              </h3>
              {dest.routes.map((r, i) => (
                <div key={i} className="flex items-center gap-2.5 py-2" style={{ borderBottom: i < dest.routes.length - 1 ? "1px solid #f0f3f1" : "none" }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: routeStatusColor[r.status] || "#ccc" }} />
                  <span className="text-[13px] font-medium flex-1" style={{ color: "var(--ink)" }}>{r.route}</span>
                  <span className="font-mono text-[11px]" style={{ color: "var(--ink-soft)" }}>{r.note}</span>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="bg-white p-5 rounded-[18px] border" style={{ borderColor: "#e3e9e6" }}>
              <p className="kicker mb-3">Quick facts</p>
              {dest.quickFacts.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5 py-2" style={{ borderBottom: i < dest.quickFacts.length - 1 ? "1px solid #f0f3f1" : "none" }}>
                  <span className="text-lg">{f.icon}</span>
                  <span className="text-[13px] flex-1" style={{ color: "var(--ink-soft)" }}>{f.label}</span>
                  <span className="text-[13px] font-bold" style={{ color: "var(--ink)" }}>{f.value}</span>
                </div>
              ))}
            </div>

            {/* Emergency */}
            <div className="bg-white p-5 rounded-[18px] border-[1.5px]" style={{ borderColor: "#f0d0d0" }}>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-red-500 mb-3">🚨 Emergency</p>
              {dest.emergency.map(e => (
                <div key={e.number} className="flex justify-between py-1.5 text-[13px]">
                  <span style={{ color: "var(--ink-soft)" }}>{e.name}</span>
                  <a href={`tel:${e.number}`} className="font-mono font-bold no-underline" style={{ color: "var(--ink)" }}>{e.number}</a>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div className="bg-white p-5 rounded-[18px] border" style={{ borderColor: "#e3e9e6" }}>
              <p className="kicker mb-3">📝 Your notes</p>
              <textarea
                value={state.notes}
                onChange={e => setState(p => ({ ...p, notes: e.target.value }))}
                placeholder="Hotel names, contacts, reminders..."
                rows={6}
                className="w-full p-3 rounded-xl text-[14px] outline-none resize-none font-sans" style={{ background: "var(--snowfield)", color: "var(--ink)", border: "1px solid #e3e9e6" }}
              />
              <p className="font-mono text-[11px] mt-2" style={{ color: "var(--ink-soft)" }}>Auto-saved ✓</p>
            </div>

            {/* Links */}
            <Link href={`/${dest.slug}`} className="flex items-center gap-3 p-4 rounded-[18px] no-underline transition-all hover:-translate-y-0.5 bg-white border" style={{ borderColor: "var(--terra)" }}>
              <span className="text-xl">📖</span>
              <div>
                <div className="text-[15px] font-bold" style={{ color: "var(--ink)" }}>Full {dest.name} guide</div>
                <div className="text-[12px]" style={{ color: "var(--ink-soft)" }}>Trek info, stay, food, safety &rarr;</div>
              </div>
            </Link>

            <Link href={`/${dest.slug}/packing`} className="flex items-center gap-3 p-4 rounded-[18px] no-underline transition-all hover:-translate-y-0.5" style={{ background: "rgba(194,102,45,0.08)", border: "1.5px solid rgba(194,102,45,0.2)" }}>
              <span className="text-xl">🛒</span>
              <div>
                <div className="text-[15px] font-bold" style={{ color: "var(--ink)" }}>Gear buy list for {dest.name}</div>
                <div className="text-[12px]" style={{ color: "var(--ink-soft)" }}>What to buy with store links &rarr;</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
