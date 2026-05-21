"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import type { DestinationData } from "@/lib/destinations/types";
import Link from "next/link";

const STORAGE_PREFIX = "travelboa-pack-";

interface Props {
  destination: DestinationData;
}

export function PackingChecklist({ destination: d }: Props) {
  const { themeKey, theme, setTheme, accent, mounted } = useTheme();
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PREFIX + d.slug);
      if (saved) setChecks(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, [d.slug]);

  // Save to localStorage
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_PREFIX + d.slug, JSON.stringify(checks));
    } catch {}
  }, [checks, loaded, d.slug]);

  if (!mounted || !loaded) return null;

  const totalItems = d.checklist.reduce((s, c) => s + c.items.length, 0);
  const essentialItems = d.checklist.reduce((s, c) => s + c.items.filter(i => i.essential).length, 0);
  const checkedCount = Object.values(checks).filter(Boolean).length;
  const essentialChecked = d.checklist.reduce((s, c) => {
    return s + c.items.filter(i => i.essential && checks[`${c.category}-${i.name}`]).length;
  }, 0);
  const pct = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;
  const essentialPct = essentialItems > 0 ? Math.round((essentialChecked / essentialItems) * 100) : 0;

  const toggle = (key: string) => setChecks(p => ({ ...p, [key]: !p[key] }));
  const resetAll = () => setChecks({});

  const categoryIcons: Record<string, string> = { Clothing: "🧥", Gear: "🎒", Health: "💊", Documents: "📄" };

  return (
    <div className="relative min-h-screen bg-white font-sans">
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="opacity-[0.016]"><defs><pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0L0 0 0 48" fill="none" stroke="#888" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>
      <ColorPicker themeKey={themeKey} setTheme={setTheme} />
      <Navbar accent={accent} />

      <div className="relative z-10 max-w-[900px] mx-auto px-8 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs text-gray-400">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>→</span>
          <Link href={`/${d.slug}`} className="hover:text-gray-900 transition-colors">{d.name}</Link>
          <span>→</span>
          <span className="text-gray-700 font-semibold">Packing checklist</span>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-8 mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">{d.name} packing checklist</h1>
            <p className="text-sm text-gray-400 mt-2 max-w-[480px]">
              Altitude-specific packing list for {d.altitude.toLocaleString()}m. Tap items to mark as packed. Your progress saves automatically. Gear items have buy links.
            </p>
          </div>
          <button onClick={resetAll} className="text-xs text-gray-300 hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg border border-gray-100 shrink-0">Reset all</button>
        </div>

        {/* Progress bar */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 mb-8" style={{ boxShadow: "2px 4px 14px rgba(0,0,0,0.03)" }}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-2xl font-black text-gray-900">{pct}%</span>
              <span className="text-sm text-gray-400 ml-2">packed</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-gray-900">{checkedCount}/{totalItems}</span>
              <span className="text-xs text-gray-400 ml-1">items</span>
            </div>
          </div>
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: pct === 100 ? "#22c55e" : accent }} />
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-gray-300">
            <span>Essential items: {essentialChecked}/{essentialItems} ({essentialPct}%)</span>
            <span>{pct === 100 ? "🎉 All packed!" : pct > 70 ? "Almost there!" : pct > 30 ? "Good progress" : "Let's start packing"}</span>
          </div>
        </div>

        {/* Checklist categories */}
        <div className="flex gap-6 items-start">
          <div className="flex-1 min-w-0">
            {d.checklist.map((cat) => {
              const catChecked = cat.items.filter(i => checks[`${cat.category}-${i.name}`]).length;
              return (
                <div key={cat.category} className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{categoryIcons[cat.category] || "📦"}</span>
                    <h2 className="text-lg font-extrabold text-gray-900">{cat.category}</h2>
                    <span className="text-xs text-gray-300 ml-auto">{catChecked}/{cat.items.length}</span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {cat.items.map((item) => {
                      const key = `${cat.category}-${item.name}`;
                      const done = checks[key];
                      return (
                        <div key={key} className="flex items-center gap-3 p-3 rounded-xl bg-white border transition-all duration-150 cursor-pointer group"
                          style={{
                            borderColor: done ? "#bbf7d0" : "#f0f0f0",
                            background: done ? "#f0fdf4" : "white",
                            boxShadow: "1px 2px 6px rgba(0,0,0,0.02)",
                          }}
                          onClick={() => toggle(key)}>
                          {/* Checkbox */}
                          <div className="w-5 h-5 rounded-md flex items-center justify-center text-xs text-white font-bold shrink-0 transition-all duration-150"
                            style={{ border: `2px solid ${done ? '#22c55e' : '#d4d4d8'}`, background: done ? "#22c55e" : "transparent" }}>
                            {done ? "✓" : ""}
                          </div>
                          {/* Item info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold transition-all duration-150" style={{ color: done ? "#a3a3a3" : "#111", textDecoration: done ? "line-through" : "none" }}>{item.name}</span>
                              {item.essential && <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded" style={{ background: `${accent}15`, color: accent }}>essential</span>}
                            </div>
                          </div>
                          {/* Affiliate link */}
                          {item.affiliateLink && item.price && (
                            <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer nofollow"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold shrink-0 transition-all duration-150 hover:shadow-md"
                              style={{ background: `${accent}10`, color: accent }}>
                              <span>{item.price}</span>
                              <span className="text-[10px]">· {item.affiliateStore} →</span>
                            </a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="w-[240px] shrink-0 hidden lg:block">
            <div className="sticky top-16 flex flex-col gap-4">
              {/* Prep score card */}
              <div className="p-5 rounded-xl border-2 transition-colors duration-300" style={{ borderColor: accent, background: `${accent}08` }}>
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-900">{pct}<span className="text-lg">%</span></div>
                  <p className="font-caveat text-sm mt-1 transition-colors duration-300" style={{ color: accent }}>trip preparedness</p>
                </div>
                <div className="mt-4 space-y-2">
                  {d.checklist.map(cat => {
                    const cc = cat.items.filter(i => checks[`${cat.category}-${i.name}`]).length;
                    const cp = cat.items.length > 0 ? Math.round((cc / cat.items.length) * 100) : 0;
                    return (
                      <div key={cat.category}>
                        <div className="flex justify-between text-[10px] text-gray-400 mb-0.5">
                          <span>{cat.category}</span>
                          <span>{cp}%</span>
                        </div>
                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-300" style={{ width: `${cp}%`, background: cp === 100 ? "#22c55e" : accent }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-white p-4 rounded-xl border border-gray-100" style={{ boxShadow: "2px 4px 12px rgba(0,0,0,0.03)" }}>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-widest mb-3 transition-colors" style={{ color: accent }}>Also for {d.name}</p>
                {[
                  { label: "Full guide", href: `/${d.slug}` },
                  { label: "Budget breakdown", href: `/${d.slug}#budget` },
                  { label: "Road status", href: "/road-status" },
                  { label: "Weather", href: `/${d.slug}#best-time` },
                ].map(l => (
                  <Link key={l.label} href={l.href} className="block text-xs font-semibold text-gray-700 py-1.5 hover:transition-colors" style={{ borderBottom: "1px solid #f8f8f8" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
                    {l.label} →
                  </Link>
                ))}
              </div>

              {/* Share */}
              <div className="bg-white p-4 rounded-xl border border-gray-100 text-center" style={{ boxShadow: "2px 4px 12px rgba(0,0,0,0.03)" }}>
                <p className="text-xs text-gray-400 mb-2">Share this checklist</p>
                <div className="flex gap-2 justify-center">
                  <button className="px-4 py-2 rounded-lg text-xs font-bold text-white" style={{ background: "#25D366" }}>WhatsApp</button>
                  <button className="px-4 py-2 rounded-lg text-xs font-bold text-gray-700 bg-gray-100">Copy link</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer accent={accent} />
    </div>
  );
}
