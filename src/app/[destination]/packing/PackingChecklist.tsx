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
  const { themeKey, theme, setTheme, accent, dark, toggleDark, mounted } = useTheme();
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);
  const [shareMsg, setShareMsg] = useState("");

  useEffect(() => {
    // Check URL for shared state first
    const params = new URLSearchParams(window.location.search);
    const stateParam = params.get("s");
    if (stateParam) {
      try {
        const decoded = JSON.parse(atob(stateParam));
        setChecks(decoded);
        setLoaded(true);
        return;
      } catch {}
    }
    // Otherwise load from localStorage
    try {
      const saved = localStorage.getItem(STORAGE_PREFIX + d.slug);
      if (saved) setChecks(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, [d.slug]);

  useEffect(() => {
    if (!loaded) return;
    try { localStorage.setItem(STORAGE_PREFIX + d.slug, JSON.stringify(checks)); } catch {}
  }, [checks, loaded, d.slug]);

  if (!mounted || !loaded) return null;

  const bg = dark ? "#0c0a09" : "white";
  const cardBg = dark ? "#1c1a17" : "white";
  const textPrimary = dark ? "#f5f5f4" : "#111";
  const textSecondary = dark ? "#a8a29e" : "#666";
  const textMuted = dark ? "#57534e" : "#ccc";
  const border = dark ? "#292524" : "#f0f0f0";

  const totalItems = d.checklist.reduce((s, c) => s + c.items.length, 0);
  const checkedCount = Object.values(checks).filter(Boolean).length;
  const pct = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  const toggle = (key: string) => setChecks(p => ({ ...p, [key]: !p[key] }));
  const resetAll = () => setChecks({});

  const getShareUrl = () => {
    const encoded = btoa(JSON.stringify(checks));
    return `https://www.travelboa.com/${d.slug}/packing?s=${encoded}`;
  };

  const copyLink = () => {
    navigator.clipboard.writeText(getShareUrl());
    setShareMsg("Copied!");
    setTimeout(() => setShareMsg(""), 2000);
  };

  const shareWhatsApp = () => {
    const url = getShareUrl();
    const text = `${d.name} gear checklist (${pct}% ready) - ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="relative min-h-screen font-sans transition-colors duration-300" style={{ background: bg }}>
      <ColorPicker themeKey={themeKey} setTheme={setTheme} dark={dark} toggleDark={toggleDark} />
      <Navbar accent={accent} dark={dark} />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-8 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs" style={{ color: textMuted }}>
          <Link href="/" className="hover:opacity-70" style={{ color: textMuted }}>Home</Link>
          <span>→</span>
          <Link href={`/${d.slug}`} className="hover:opacity-70" style={{ color: textMuted }}>{d.name}</Link>
          <span>→</span>
          <span className="font-semibold" style={{ color: textPrimary }}>Gear checklist</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: textPrimary }}>What to buy for {d.name}</h1>
            <p className="text-sm mt-2 max-w-[500px]" style={{ color: textSecondary }}>
              Gear checklist for {d.altitude.toLocaleString()}m with buy links. Tap items to mark as bought. Progress saves automatically.
            </p>
          </div>
          <button onClick={resetAll} className="text-xs px-3 py-1.5 rounded-lg shrink-0 transition-colors" style={{ color: textMuted, border: `1px solid ${border}` }}>Reset all</button>
        </div>

        {/* Progress bar */}
        <div className="p-4 sm:p-5 rounded-xl mb-6" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-2xl font-black" style={{ color: textPrimary }}>{pct}%</span>
              <span className="text-sm ml-2" style={{ color: textMuted }}>ready</span>
            </div>
            <span className="text-sm font-bold" style={{ color: textPrimary }}>{checkedCount}/{totalItems}</span>
          </div>
          <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ background: dark ? "#292524" : "#f0f0f0" }}>
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: pct === 100 ? "#22c55e" : accent }} />
          </div>
          <p className="text-[10px] mt-2" style={{ color: textMuted }}>{pct === 100 ? "All sorted!" : pct > 70 ? "Almost there!" : pct > 30 ? "Good progress" : "Let's start"}</p>
        </div>

        {/* Dashboard CTA */}
        <Link href={`/dashboard?dest=${d.slug}`} className="flex items-center gap-3 p-4 rounded-xl no-underline mb-6 transition-all hover:-translate-y-0.5" style={{ background: `${accent}08`, border: `1.5px solid ${accent}25` }}>
          <span className="text-xl">🗺️</span>
          <div className="flex-1">
            <p className="text-sm font-bold" style={{ color: textPrimary }}>Already bought everything?</p>
            <p className="text-xs" style={{ color: textSecondary }}>Track your packing on your personal trip dashboard →</p>
          </div>
        </Link>

        {/* Main content */}
        <div className="flex gap-6 items-start">
          <div className="flex-1 min-w-0">
            {d.checklist.map((cat) => {
              const catChecked = cat.items.filter(i => checks[`${cat.category}-${i.name}`]).length;
              return (
                <div key={cat.category} className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <h2 className="text-lg font-extrabold" style={{ color: textPrimary }}>{cat.category}</h2>
                    <span className="text-xs" style={{ color: textMuted }}>{catChecked}/{cat.items.length}</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {cat.items.map((item) => {
                      const key = `${cat.category}-${item.name}`;
                      const done = checks[key];
                      return (
                        <div key={key} className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-150"
                          style={{ background: done ? (dark ? "#0a1a0a" : "#f0fdf4") : cardBg, border: `1.5px solid ${done ? "#22c55e40" : border}` }}
                          onClick={() => toggle(key)}>
                          <div className="w-5 h-5 rounded-md flex items-center justify-center text-xs text-white font-bold shrink-0 transition-all"
                            style={{ border: `2px solid ${done ? "#22c55e" : border}`, background: done ? "#22c55e" : "transparent" }}>
                            {done ? "✓" : ""}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-semibold transition-all" style={{ color: done ? textMuted : textPrimary, textDecoration: done ? "line-through" : "none" }}>{item.name}</span>
                            {item.essential && <span className="text-[9px] font-bold ml-2 px-1.5 py-0.5 rounded" style={{ background: `${accent}15`, color: accent }}>Essential</span>}
                          </div>
                          {item.affiliateLink && (
                            <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold px-2 py-1 rounded-lg no-underline shrink-0" style={{ background: `${accent}12`, color: accent }}
                              onClick={e => e.stopPropagation()}>
                              {item.price ? `${item.price} →` : "Buy →"}
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
              {/* Score card */}
              <div className="p-5 rounded-xl text-center" style={{ border: `2px solid ${accent}`, background: `${accent}08` }}>
                <div className="text-4xl font-black" style={{ color: textPrimary }}>{pct}<span className="text-lg">%</span></div>
                <p className="font-caveat text-sm mt-1" style={{ color: accent }}>gear ready</p>
              </div>

              {/* Quick links */}
              <div className="p-4 rounded-xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
                <p className="text-[9px] font-bold uppercase tracking-wider mb-3" style={{ color: accent }}>Also for {d.name}</p>
                {[
                  { label: "Full destination guide", href: `/${d.slug}` },
                  { label: "Trip dashboard", href: `/dashboard?dest=${d.slug}` },
                  { label: "Road status", href: "/road-status" },
                  { label: "All gear reviews", href: "/gear" },
                ].map(l => (
                  <Link key={l.label} href={l.href} className="block text-xs font-semibold py-1.5 no-underline transition-colors hover:opacity-70" style={{ color: textSecondary, borderBottom: `1px solid ${border}` }}>
                    {l.label} →
                  </Link>
                ))}
              </div>

              {/* Share */}
              <div className="p-4 rounded-xl text-center" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
                <p className="text-xs mb-3" style={{ color: textMuted }}>Share this checklist</p>
                <div className="flex gap-2 justify-center">
                  <button onClick={shareWhatsApp} className="px-4 py-2 rounded-lg text-xs font-bold text-white cursor-pointer" style={{ background: "#25D366" }}>WhatsApp</button>
                  <button onClick={copyLink} className="px-4 py-2 rounded-lg text-xs font-bold cursor-pointer" style={{ background: dark ? "#292524" : "#f0f0f0", color: textPrimary }}>
                    {shareMsg || "Copy link"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile share bar */}
        <div className="lg:hidden flex gap-2 mt-6">
          <button onClick={shareWhatsApp} className="flex-1 px-4 py-3 rounded-xl text-sm font-bold text-white cursor-pointer" style={{ background: "#25D366" }}>Share on WhatsApp</button>
          <button onClick={copyLink} className="flex-1 px-4 py-3 rounded-xl text-sm font-bold cursor-pointer" style={{ background: dark ? "#292524" : "#f0f0f0", color: textPrimary }}>
            {shareMsg || "Copy link"}
          </button>
        </div>
      </div>
      <Footer accent={accent} />
    </div>
  );
}
