"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { DestinationData } from "@/lib/destinations/types";
import Link from "next/link";

const STORAGE_PREFIX = "travelboa-pack-";

interface Props { destination: DestinationData; }

export function PackingChecklist({ destination: d }: Props) {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);
  const [shareMsg, setShareMsg] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const stateParam = params.get("s");
    if (stateParam) { try { setChecks(JSON.parse(atob(stateParam))); setLoaded(true); return; } catch {} }
    try { const saved = localStorage.getItem(STORAGE_PREFIX + d.slug); if (saved) setChecks(JSON.parse(saved)); } catch {}
    setLoaded(true);
  }, [d.slug]);

  useEffect(() => {
    if (!loaded) return;
    try { localStorage.setItem(STORAGE_PREFIX + d.slug, JSON.stringify(checks)); } catch {}
  }, [checks, loaded, d.slug]);

  if (!loaded) return null;

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
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[900px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <Link href={`/${d.slug}`} className="no-underline" style={{ color: "var(--terra)" }}>{d.name}</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span style={{ color: "var(--ink)" }}>Packing checklist</span>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-5 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[clamp(26px,4vw,36px)] font-extrabold tracking-tight leading-[1.1]" style={{ color: "var(--ink)" }}>What to buy for {d.name}</h1>
            <p className="text-[16px] font-normal mt-2" style={{ color: "var(--ink-soft)", maxWidth: 500 }}>
              Gear checklist for {d.altitude.toLocaleString()}m with buy links. Tap items to mark as bought. Progress saves automatically.
            </p>
          </div>
          <button onClick={resetAll} className="font-mono text-[12px] px-3 py-1.5 rounded-full shrink-0 cursor-pointer border-0 transition-colors" style={{ color: "var(--ink-soft)", background: "var(--snowfield)", border: "1px solid #e3e9e6" }}>Reset all</button>
        </div>

        {/* Progress */}
        <div className="p-5 sm:p-6 rounded-[18px] bg-white border mb-6" style={{ borderColor: "#e3e9e6", boxShadow: "0 8px 30px -16px rgba(28,43,51,0.2)" }}>
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[28px] font-extrabold" style={{ color: "var(--ink)" }}>{pct}%</span>
              <span className="text-[15px] ml-2" style={{ color: "var(--ink-soft)" }}>ready</span>
            </div>
            <span className="font-mono text-[14px] font-bold" style={{ color: "var(--ink)" }}>{checkedCount}/{totalItems}</span>
          </div>
          <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: "var(--snowfield)" }}>
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: pct === 100 ? "var(--meadow)" : "var(--terra)" }} />
          </div>
          <p className="font-mono text-[12px] mt-2" style={{ color: "var(--ink-soft)" }}>{pct === 100 ? "All sorted!" : pct > 70 ? "Almost there!" : pct > 30 ? "Good progress" : "Let's start"}</p>
        </div>

        {/* Affiliate disclosure */}
        <div className="text-[14px] px-5 py-3.5 rounded-[14px] leading-relaxed mb-6 border-l-4" style={{ background: "#fef3e2", borderColor: "var(--terra)", color: "var(--ink-soft)" }}>
          <span className="font-semibold" style={{ color: "var(--terra)" }}>Affiliate disclosure:</span> Some links below are affiliate links. I earn a small commission when you buy through them, at no extra cost to you.
        </div>

        {/* Dashboard CTA */}
        <Link href={`/dashboard?dest=${d.slug}`} className="flex items-center gap-3 p-4 rounded-[18px] no-underline mb-8 transition-all hover:-translate-y-0.5" style={{ background: "rgba(194,102,45,0.06)", border: "1.5px solid rgba(194,102,45,0.15)" }}>
          <span className="text-xl">🗺️</span>
          <div className="flex-1">
            <p className="text-[15px] font-bold" style={{ color: "var(--ink)" }}>Already bought everything?</p>
            <p className="text-[13px]" style={{ color: "var(--ink-soft)" }}>Track your packing on your personal trip dashboard &rarr;</p>
          </div>
        </Link>

        {/* Main content */}
        <div className="flex gap-8">
          <div className="flex-1 min-w-0">
            {d.checklist.map((cat) => {
              const catChecked = cat.items.filter(i => checks[`${cat.category}-${i.name}`]).length;
              return (
                <div key={cat.category} className="mb-10">
                  <div className="flex items-center gap-2.5 mb-4">
                    <h2 className="text-[20px] font-extrabold" style={{ color: "var(--ink)" }}>{cat.category}</h2>
                    <span className="font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>{catChecked}/{cat.items.length}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {cat.items.map((item) => {
                      const key = `${cat.category}-${item.name}`;
                      const done = checks[key];
                      return (
                        <div key={key} className="flex items-center gap-3 p-3.5 rounded-[14px] cursor-pointer transition-all duration-150"
                          style={{ background: done ? "#f0fdf4" : "#fff", border: `1.5px solid ${done ? "rgba(90,138,94,0.3)" : "#e3e9e6"}` }}
                          onClick={() => toggle(key)}>
                          <div className="w-5.5 h-5.5 rounded-md flex items-center justify-center text-[11px] text-white font-bold shrink-0 transition-all"
                            style={{ width: 22, height: 22, border: `2px solid ${done ? "var(--meadow)" : "#e3e9e6"}`, background: done ? "var(--meadow)" : "transparent" }}>
                            {done ? "✓" : ""}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[15px] font-semibold transition-all" style={{ color: done ? "var(--ink-soft)" : "var(--ink)", textDecoration: done ? "line-through" : "none" }}>{item.name}</span>
                            {item.essential && <span className="font-mono text-[10px] font-bold ml-2 px-2 py-0.5 rounded-full" style={{ background: "rgba(194,102,45,0.1)", color: "var(--terra)" }}>Essential</span>}
                          </div>
                          {item.affiliateLink && (
                            <a href={item.affiliateLink} target="_blank" rel="noopener noreferrer sponsored" className="font-mono text-[12px] font-semibold px-3 py-1.5 rounded-xl no-underline shrink-0 transition-all hover:-translate-y-0.5" style={{ background: "rgba(194,102,45,0.1)", color: "var(--terra)" }}
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
          <div className="w-[260px] shrink-0 hidden lg:block">
            <div className="flex flex-col gap-4" style={{ position: "sticky", top: 80 }}>
              <div className="p-5 rounded-[18px] text-center border-2" style={{ borderColor: "var(--terra)", background: "rgba(194,102,45,0.04)" }}>
                <div className="text-[42px] font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>{pct}<span className="text-[18px]">%</span></div>
                <p className="font-caveat text-[16px] mt-1" style={{ color: "var(--terra)" }}>gear ready</p>
              </div>
              <div className="bg-white p-4 rounded-[18px] border" style={{ borderColor: "#e3e9e6" }}>
                <p className="kicker mb-3">Also for {d.name}</p>
                {[
                  { label: "Full destination guide", href: `/${d.slug}` },
                  { label: "Trip dashboard", href: `/dashboard?dest=${d.slug}` },
                  { label: "Road status", href: "/road-status" },
                  { label: "All gear reviews", href: "/gear" },
                ].map(l => (
                  <Link key={l.label} href={l.href} className="block text-[14px] font-medium py-2 no-underline transition-colors hover:pl-1" style={{ color: "var(--ink-soft)", borderBottom: "1px solid #f0f3f1" }}>{l.label} &rarr;</Link>
                ))}
              </div>
              <div className="bg-white p-4 rounded-[18px] text-center border" style={{ borderColor: "#e3e9e6" }}>
                <p className="text-[13px] mb-3" style={{ color: "var(--ink-soft)" }}>Share this checklist</p>
                <div className="flex gap-2 justify-center">
                  <button onClick={shareWhatsApp} className="px-4 py-2 rounded-xl text-[13px] font-bold text-white cursor-pointer border-0" style={{ background: "#25D366" }}>WhatsApp</button>
                  <button onClick={copyLink} className="px-4 py-2 rounded-xl text-[13px] font-bold cursor-pointer border-0" style={{ background: "var(--snowfield)", color: "var(--ink)" }}>
                    {shareMsg || "Copy link"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile share */}
        <div className="lg:hidden flex gap-2 mt-8">
          <button onClick={shareWhatsApp} className="flex-1 px-4 py-3.5 rounded-[14px] text-[15px] font-bold text-white cursor-pointer border-0" style={{ background: "#25D366" }}>Share on WhatsApp</button>
          <button onClick={copyLink} className="flex-1 px-4 py-3.5 rounded-[14px] text-[15px] font-bold cursor-pointer border-0" style={{ background: "var(--snowfield)", color: "var(--ink)" }}>
            {shareMsg || "Copy link"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
