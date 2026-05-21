"use client";

import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import type { DestinationData } from "@/lib/destinations/types";
import Link from "next/link";

interface Props {
  destination: DestinationData;
}

export function DestinationGuide({ destination: d }: Props) {
  const { themeKey, theme, setTheme, accent, mounted } = useTheme();
  const [openSection, setOpenSection] = useState<string | null>(d.sections[0]?.id ?? null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checks, setChecks] = useState<Record<string, boolean>>({});

  if (!mounted) return null;

  const totalItems = d.checklist.reduce((s, c) => s + c.items.length, 0);
  const checkedCount = Object.values(checks).filter(Boolean).length;

  return (
    <div className="relative min-h-screen bg-white font-sans">
      {/* Grid texture */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="opacity-[0.016]">
          <defs><pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0L0 0 0 48" fill="none" stroke="#888" strokeWidth="0.5" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <ColorPicker themeKey={themeKey} setTheme={setTheme} />
      <Navbar accent={accent} />

      <div className="relative z-10 max-w-[900px] mx-auto px-8 pb-20">

        {/* ═══ HERO ═══ */}
        <div className="mt-8 mb-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>→</span>
            <span className="capitalize">{d.type === "pilgrimage" ? "Pilgrimages" : "Adventures"}</span>
            <span>→</span>
            <span className="text-gray-700 font-semibold">{d.name}</span>
          </div>

          {/* Hero image placeholder */}
          <div
            className="w-full rounded-2xl relative overflow-hidden"
            style={{ background: d.heroGradient, aspectRatio: "21/8" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-lg text-xs text-white/60" style={{ background: "rgba(0,0,0,0.3)" }}>📷 Your photo here</div>
            <div className="absolute bottom-5 left-6 right-6">
              <div
                className="inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-2"
                style={{ background: `${accent}30`, color: "white" }}
              >
                {d.type}
              </div>
              <h1 className="text-4xl font-black text-white leading-tight">{d.name}</h1>
              <p className="text-sm text-white/70 mt-1 font-caveat text-lg">{d.tagline}</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex gap-3 mt-5 overflow-x-auto pb-1">
            {d.quickStats.map((s) => (
              <div key={s.label} className="flex-shrink-0 px-4 py-3 bg-white rounded-xl border border-gray-100 text-center min-w-[100px]" style={{ boxShadow: "2px 3px 10px rgba(0,0,0,0.03)" }}>
                <div className="text-lg">{s.icon}</div>
                <div className="text-sm font-bold text-gray-900 mt-0.5">{s.value}</div>
                <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Author + date */}
          <div className="flex items-center gap-3 mt-5 text-xs text-gray-400">
            <span>✍️ Written from Dehradun</span>
            <span>·</span>
            <span>📅 Updated May 2026</span>
            <span>·</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>

        {/* ═══ MAIN CONTENT LAYOUT ═══ */}
        <div className="flex gap-8 items-start">

          {/* Left: Guide content */}
          <div className="flex-1 min-w-0">

            {/* Introduction */}
            <div className="mb-8">
              {d.intro.split("\n\n").map((p, i) => (
                <p key={i} className="text-[15px] text-gray-600 leading-relaxed mb-4">{p}</p>
              ))}
            </div>

            {/* Guide sections — accordion */}
            <div className="mb-10">
              {d.sections.map((section) => {
                const isOpen = openSection === section.id;
                return (
                  <div key={section.id} className="mb-2">
                    <button
                      onClick={() => setOpenSection(isOpen ? null : section.id)}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 cursor-pointer transition-all duration-200 hover:border-gray-200 text-left"
                      style={{ boxShadow: isOpen ? "2px 4px 16px rgba(0,0,0,0.04)" : "none" }}
                    >
                      <span className="text-xl">{section.icon}</span>
                      <span className="flex-1 text-[15px] font-bold text-gray-900">{section.title}</span>
                      <span className="text-gray-300 text-lg transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "none" }}>▾</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 bg-white border border-t-0 border-gray-100 rounded-b-xl -mt-1">
                        {section.content.split("\n\n").map((block, i) => {
                          if (block.startsWith("**") && block.endsWith("**")) {
                            return <h3 key={i} className="text-sm font-bold text-gray-900 mt-4 mb-2">{block.replace(/\*\*/g, "")}</h3>;
                          }
                          // Handle bold markers within text
                          const parts = block.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={i} className="text-[14px] text-gray-600 leading-relaxed mb-3">
                              {parts.map((part, j) => {
                                if (part.startsWith("**") && part.endsWith("**")) {
                                  return <strong key={j} className="font-bold text-gray-900">{part.replace(/\*\*/g, "")}</strong>;
                                }
                                return <span key={j}>{part}</span>;
                              })}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* FAQ accordion */}
            <div className="mb-10">
              <h2 className="text-xl font-extrabold text-gray-900 mb-4">Frequently asked questions</h2>
              {d.faq.map((f, i) => (
                <div key={i} className="mb-2">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center gap-3 p-3.5 rounded-lg bg-white border border-gray-100 cursor-pointer transition-all text-left"
                  >
                    <span className="flex-1 text-sm font-semibold text-gray-900">{f.q}</span>
                    <span className="text-gray-300 transition-transform duration-200" style={{ transform: openFaq === i ? "rotate(180deg)" : "none" }}>▾</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 py-3 bg-gray-50 border border-t-0 border-gray-100 rounded-b-lg -mt-1">
                      <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right sidebar — sticky */}
          <div className="w-[260px] flex-shrink-0 hidden lg:block">
            <div className="sticky top-16 flex flex-col gap-4">

              {/* Weather along route */}
              <div className="bg-white p-4 rounded-xl border border-gray-100" style={{ boxShadow: "2px 4px 12px rgba(0,0,0,0.03)" }}>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-widest mb-3 transition-colors duration-300" style={{ color: accent }}>Weather along route</p>
                {d.weatherPoints.map((w, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5" style={{ borderBottom: i < d.weatherPoints.length - 1 ? "1px solid #f5f5f5" : "none" }}>
                    <span className="text-base">{w.weather}</span>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-gray-900">{w.location}</div>
                      <div className="font-mono text-[8px] text-gray-300">{w.altitude.toLocaleString()}m</div>
                    </div>
                    <div className="text-sm font-black text-gray-900">{w.temp}°</div>
                  </div>
                ))}
              </div>

              {/* Route status */}
              <div className="bg-white p-4 rounded-xl border border-gray-100" style={{ boxShadow: "2px 4px 12px rgba(0,0,0,0.03)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-widest" style={{ color: accent }}>Road status</p>
                </div>
                {d.routes.map((r, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5 text-xs" style={{ borderBottom: i < d.routes.length - 1 ? "1px solid #f5f5f5" : "none" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.status === "open" ? "#22c55e" : r.status === "partial" ? "#f59e0b" : "#ef4444" }} />
                    <span className="font-semibold text-gray-900 flex-1">{r.from} → {r.to}</span>
                  </div>
                ))}
              </div>

              {/* Packing progress */}
              <div className="p-4 rounded-xl transition-colors duration-300" style={{ background: theme.sticky, boxShadow: "2px 4px 12px rgba(0,0,0,0.03)" }}>
                <p className="font-caveat text-sm font-bold mb-1 transition-colors duration-300" style={{ color: theme.stickyText }}>Pack check ✓</p>
                <p className="text-[10px] text-gray-400 mb-2">{checkedCount}/{totalItems} items</p>
                <div className="w-full h-1.5 bg-white/50 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-green-500 rounded-full transition-all duration-300" style={{ width: `${totalItems > 0 ? (checkedCount / totalItems) * 100 : 0}%` }} />
                </div>
                {d.checklist.slice(0, 2).map((cat) => (
                  <div key={cat.category} className="mb-2">
                    <p className="font-mono text-[8px] uppercase tracking-wider text-gray-400 mb-1">{cat.category}</p>
                    {cat.items.slice(0, 3).map((item) => {
                      const key = `${cat.category}-${item.name}`;
                      return (
                        <div key={key} onClick={() => setChecks(p => ({...p, [key]: !p[key]}))} className="flex items-center gap-2 py-0.5 cursor-pointer">
                          <div className="w-3 h-3 rounded-sm flex items-center justify-center text-[8px] text-white font-bold shrink-0 transition-all" style={{ border: `1.5px solid ${checks[key] ? '#15803d' : '#d4a574'}`, background: checks[key] ? "#15803d" : "transparent" }}>{checks[key] ? "✓" : ""}</div>
                          <span className="font-caveat text-xs transition-all" style={{ color: checks[key] ? "#a8a29e" : theme.stickyText, textDecoration: checks[key] ? "line-through" : "none" }}>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                ))}
                <Link href={`/${d.slug}/packing`} className="font-caveat text-[11px] block text-right mt-1 transition-colors" style={{ color: accent }}>→ full checklist</Link>
              </div>

              {/* Emergency */}
              <div className="bg-white p-4 rounded-xl border-[1.5px] border-red-100" style={{ boxShadow: "2px 4px 10px rgba(0,0,0,0.03)" }}>
                <p className="font-mono text-[9px] font-semibold text-red-500 uppercase tracking-widest mb-2">Emergency</p>
                {d.emergency.slice(0, 3).map((e) => (
                  <div key={e.number} className="flex justify-between py-1 text-[11px]">
                    <span className="text-gray-400">{e.name}</span>
                    <span className="font-mono font-semibold text-gray-900">{e.number}</span>
                  </div>
                ))}
              </div>

              {/* Sub-pages */}
              <div className="bg-white p-4 rounded-xl border border-gray-100" style={{ boxShadow: "2px 4px 12px rgba(0,0,0,0.03)" }}>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-widest mb-3 transition-colors duration-300" style={{ color: accent }}>More on {d.name}</p>
                {d.subPages.map((sp) => (
                  <Link
                    key={sp.slug}
                    href={`/${d.slug}/${sp.slug}`}
                    className="flex items-center justify-between py-2 text-xs group"
                    style={{ borderBottom: "1px solid #f8f8f8" }}
                  >
                    <div>
                      <span className="font-semibold text-gray-900 group-hover:transition-colors" onMouseEnter={(e) => (e.currentTarget.style.color = accent)} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>{sp.title}</span>
                    </div>
                    <span className="text-gray-300">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer accent={accent} />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            name: d.metaTitle,
            description: d.metaDescription,
            about: {
              "@type": "TouristDestination",
              name: d.name,
              description: d.tagline,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelboa.com" },
              { "@type": "ListItem", position: 2, name: d.type === "pilgrimage" ? "Pilgrimages" : "Adventures", item: `https://www.travelboa.com/${d.type}` },
              { "@type": "ListItem", position: 3, name: d.name, item: `https://www.travelboa.com/${d.slug}` },
            ],
          }),
        }}
      />
    </div>
  );
}
