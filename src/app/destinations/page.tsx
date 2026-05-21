"use client";

import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import { DESTINATIONS, SEARCH_DESTINATIONS, ACTIVITIES } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function DestinationsPage() {
  const { themeKey, theme, setTheme, accent, dark, toggleDark, mounted } = useTheme();
  const [searchVal, setSearchVal] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [activity, setActivity] = useState<string | null>(null);

  if (!mounted) return null;

  const bg = dark ? "#0c0a09" : "white";
  const cardBg = dark ? "#1c1a17" : "white";
  const textPrimary = dark ? "#f5f5f4" : "#111";
  const textSecondary = dark ? "#a8a29e" : "#666";
  const textMuted = dark ? "#57534e" : "#ccc";
  const border = dark ? "#292524" : "#f0f0f0";

  const allDests = [
    ...DESTINATIONS.map(d => ({ ...d, hasPage: true })),
    ...SEARCH_DESTINATIONS
      .filter(sd => !DESTINATIONS.find(d => d.slug === sd.slug))
      .map(sd => ({ ...sd, note: "", hasPage: false, image: undefined as string | undefined, grad: "linear-gradient(150deg,#444,#666)", temp: "", rot: 0, wx: null, routes: [] as {route:string;status:string;note:string}[], packItems: [] as string[], emergency: [] as {name:string;number:string}[], quickFacts: [] as {icon:string;label:string;value:string}[] })),
  ];

  const filtered = allDests.filter(d => {
    const matchText = searchVal.length === 0 || d.name.toLowerCase().includes(searchVal.toLowerCase()) || d.info.toLowerCase().includes(searchVal.toLowerCase());
    const matchActivity = !activity || d.activities.includes(activity);
    return matchText && matchActivity;
  });

  return (
    <div className="relative min-h-screen font-sans transition-colors duration-300" style={{ background: bg }}>
      <ColorPicker themeKey={themeKey} setTheme={setTheme} dark={dark} toggleDark={toggleDark} />
      <Navbar accent={accent} dark={dark} />

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-8 pb-20">
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs" style={{ color: textMuted }}>
          <Link href="/" className="transition-colors hover:opacity-70" style={{ color: textMuted }}>Home</Link>
          <span>→</span>
          <span className="font-semibold" style={{ color: textPrimary }}>Destinations</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2 transition-colors" style={{ color: textPrimary }}>All destinations</h1>
        <p className="text-sm mb-6 transition-colors" style={{ color: textSecondary }}>Pilgrimages and adventures we cover with full guides, packing lists, and road status.</p>

        {/* Search + Activity browse */}
        <div className="rounded-2xl p-4 sm:p-6 mb-8 transition-colors duration-300" style={{ background: dark ? "#1c1a17" : "#fafaf8", border: `1.5px solid ${border}` }}>
          {/* Search input */}
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base" style={{ color: textMuted }}>🔍</div>
            <input
              value={searchVal}
              onChange={e => { setSearchVal(e.target.value); setActivity(null); }}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
              placeholder="Search destinations — Kedarnath, Spiti, Ladakh..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm font-semibold outline-none transition-all duration-200"
              style={{
                background: dark ? "#0c0a09" : "white",
                color: textPrimary,
                border: `1.5px solid ${searchFocus ? accent : border}`,
                boxShadow: searchFocus ? `0 0 0 3px ${accent}15` : "none",
              }}
              autoComplete="off"
            />
            {searchVal && (
              <button onClick={() => setSearchVal("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center" style={{ background: dark ? "#333" : "#eee", color: textMuted }}>✕</button>
            )}
          </div>

          {/* Divider — or browse by activity */}
          <div className="flex items-center gap-4 my-5">
            <div className="flex-1 h-px" style={{ background: border }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: textMuted }}>or browse by activity</span>
            <div className="flex-1 h-px" style={{ background: border }} />
          </div>

          {/* Activity cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {ACTIVITIES.map(a => {
              const isActive = activity === a.key;
              const count = allDests.filter(d => d.activities.includes(a.key)).length;
              return (
                <button
                  key={a.key}
                  onClick={() => { setActivity(isActive ? null : a.key); setSearchVal(""); }}
                  className="flex flex-col items-center gap-1.5 py-4 sm:py-5 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: isActive ? accent : (dark ? "#0c0a09" : "white"),
                    border: `1.5px solid ${isActive ? accent : border}`,
                    boxShadow: isActive ? `0 4px 16px ${accent}30` : "none",
                  }}
                >
                  <span className="text-2xl">{a.icon}</span>
                  <span className="text-xs font-bold" style={{ color: isActive ? "white" : textPrimary }}>{a.label}</span>
                  <span className="text-[10px] font-semibold" style={{ color: isActive ? "rgba(255,255,255,0.6)" : textMuted }}>{count} {count === 1 ? "place" : "places"}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active filter indicator */}
        {(searchVal || activity) && (
          <div className="flex items-center gap-2 mb-5">
            <span className="text-sm font-bold" style={{ color: textPrimary }}>{filtered.length} destination{filtered.length !== 1 ? "s" : ""}</span>
            {activity && (
              <span className="text-xs px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1" style={{ background: `${accent}15`, color: accent }}>
                {ACTIVITIES.find(a => a.key === activity)?.icon} {ACTIVITIES.find(a => a.key === activity)?.label}
                <button onClick={() => setActivity(null)} className="ml-1 font-bold">✕</button>
              </span>
            )}
            {searchVal && (
              <span className="text-xs" style={{ color: textMuted }}>for &quot;{searchVal}&quot;</span>
            )}
          </div>
        )}

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🏔️</div>
            <p className="text-base font-bold" style={{ color: textPrimary }}>No destinations found</p>
            <p className="text-sm mt-1" style={{ color: textMuted }}>Try a different search or activity</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(d => (
              <Link key={d.slug} href={d.hasPage ? `/${d.slug}` : "#"} className="group block rounded-xl overflow-hidden no-underline transition-all duration-200 hover:shadow-lg hover:-translate-y-1" style={{ border: `1.5px solid ${border}`, background: cardBg }}>
                <div className="aspect-[16/9] relative" style={{ background: d.grad }}>
                  {d.image && <Image src={d.image} alt={d.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="text-lg font-extrabold text-white">{d.name}</div>
                    <div className="text-xs text-white/60">{d.info}</div>
                  </div>
                  {d.temp && <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/30 text-[11px] font-bold text-white">{d.temp}</div>}
                </div>
                <div className="p-4">
                  {d.note && <p className="font-caveat text-sm" style={{ color: accent }}>{d.note}</p>}
                  <div className="flex gap-1.5 mt-2 flex-wrap">
                    {d.activities.map(a => (
                      <span key={a} className="text-[9px] font-semibold px-2 py-0.5 rounded-md" style={{ background: dark ? "#292524" : "#f5f5f5", color: textMuted }}>
                        {ACTIVITIES.find(act => act.key === a)?.icon} {a}
                      </span>
                    ))}
                  </div>
                  {!d.hasPage && <p className="text-[10px] mt-2" style={{ color: textMuted }}>Guide coming soon</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer accent={accent} />
    </div>
  );
}
