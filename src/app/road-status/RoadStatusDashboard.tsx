"use client";

import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import Link from "next/link";

const ROUTE_GROUPS = [
  {
    destination: "Kedarnath",
    slug: "kedarnath",
    routes: [
      { from: "Rishikesh", to: "Devprayag", km: 70, status: "open" as const, note: "NH-7, good condition", updated: "25m ago" },
      { from: "Devprayag", to: "Rudraprayag", km: 69, status: "open" as const, note: "Clear", updated: "25m ago" },
      { from: "Rudraprayag", to: "Guptkashi", km: 50, status: "open" as const, note: "Narrow mountain road", updated: "40m ago" },
      { from: "Guptkashi", to: "Sonprayag", km: 30, status: "open" as const, note: "Clear", updated: "40m ago" },
      { from: "Gaurikund", to: "Kedarnath", km: 16, status: "open" as const, note: "Trek route, well-maintained", updated: "1h ago" },
    ],
  },
  {
    destination: "Badrinath",
    slug: "badrinath",
    routes: [
      { from: "Rishikesh", to: "Rudraprayag", km: 139, status: "open" as const, note: "NH-7", updated: "30m ago" },
      { from: "Rudraprayag", to: "Joshimath", km: 130, status: "partial" as const, note: "Slow near Pipalkoti, single lane", updated: "40m ago" },
      { from: "Joshimath", to: "Badrinath", km: 44, status: "open" as const, note: "Clear", updated: "1h ago" },
    ],
  },
  {
    destination: "Yamunotri",
    slug: "yamunotri",
    routes: [
      { from: "Rishikesh", to: "Barkot", km: 175, status: "open" as const, note: "Via Mussoorie", updated: "1h ago" },
      { from: "Barkot", to: "Hanuman Chatti", km: 45, status: "closed" as const, note: "⚠️ Landslide at Hanuman Chatti. Road blocked.", updated: "12m ago" },
    ],
  },
  {
    destination: "Spiti Valley",
    slug: "spiti",
    routes: [
      { from: "Manali", to: "Rohtang Pass", km: 51, status: "open" as const, note: "Clear. Snow clearance complete.", updated: "55m ago" },
      { from: "Rohtang", to: "Batal", km: 79, status: "partial" as const, note: "Single lane BRO repair, 45 min wait", updated: "40m ago" },
      { from: "Batal", to: "Kunzum La", km: 20, status: "open" as const, note: "Kunzum opened May 18", updated: "1h ago" },
      { from: "Kunzum", to: "Kaza", km: 105, status: "open" as const, note: "Gravel descent, drive slow", updated: "1h ago" },
      { from: "Kaza", to: "Tabo", km: 47, status: "open" as const, note: "Good road", updated: "3h ago" },
      { from: "Sumdo", to: "Reckong Peo", km: 110, status: "partial" as const, note: "⚠️ Rockfall zone Khab-Akpa, 1-2h delay", updated: "18m ago" },
    ],
  },
  {
    destination: "Vaishno Devi",
    slug: "vaishno-devi",
    routes: [
      { from: "Jammu", to: "Katra", km: 48, status: "open" as const, note: "NH-44, good condition", updated: "2h ago" },
      { from: "Katra", to: "Bhawan", km: 13, status: "open" as const, note: "Trek route, normal crowd", updated: "2h ago" },
    ],
  },
  {
    destination: "Leh–Ladakh",
    slug: "ladakh",
    routes: [
      { from: "Manali", to: "Rohtang", km: 51, status: "open" as const, note: "Clear", updated: "55m ago" },
      { from: "Rohtang", to: "Baralacha La", km: 175, status: "partial" as const, note: "Baralacha open, patches near Darcha", updated: "90m ago" },
      { from: "Baralacha", to: "Pang", km: 70, status: "open" as const, note: "Clear", updated: "2h ago" },
      { from: "Pang", to: "Leh", km: 183, status: "open" as const, note: "Via Tanglang La, good condition", updated: "2h ago" },
    ],
  },
];

const ALERTS = [
  { text: "Yamunotri highway closed beyond Barkot — landslide at Hanuman Chatti", level: "danger" as const, dest: "Yamunotri" },
  { text: "Rockfall zone active between Khab and Akpa on Spiti–Shimla route", level: "warning" as const, dest: "Spiti" },
  { text: "Kunzum La opened for 2026 season on May 18", level: "success" as const, dest: "Spiti" },
];

export function RoadStatusDashboard() {
  const { themeKey, theme, setTheme, accent, mounted } = useTheme();
  const [filter, setFilter] = useState<string>("all");

  if (!mounted) return null;

  const filtered = filter === "all" ? ROUTE_GROUPS : ROUTE_GROUPS.filter(g => g.slug === filter);
  const totalRoutes = ROUTE_GROUPS.reduce((s, g) => s + g.routes.length, 0);
  const openRoutes = ROUTE_GROUPS.reduce((s, g) => s + g.routes.filter(r => r.status === "open").length, 0);
  const partialRoutes = ROUTE_GROUPS.reduce((s, g) => s + g.routes.filter(r => r.status === "partial").length, 0);
  const closedRoutes = ROUTE_GROUPS.reduce((s, g) => s + g.routes.filter(r => r.status === "closed").length, 0);

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
          <span className="text-gray-700 font-semibold">Live road status</span>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-8 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">Live road status</h1>
            </div>
            <p className="text-sm text-gray-400 mt-2">Updated every 30–60 minutes from PWD Uttarakhand, HP PWD, and BRO sources.</p>
          </div>
        </div>

        {/* Alerts */}
        {ALERTS.length > 0 && (
          <div className="mb-6 flex flex-col gap-2">
            {ALERTS.map((a, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm"
                style={{
                  background: a.level === "danger" ? "#fef2f2" : a.level === "warning" ? "#fffbeb" : "#f0fdf4",
                  border: `1px solid ${a.level === "danger" ? "#fecaca" : a.level === "warning" ? "#fde68a" : "#bbf7d0"}`,
                }}>
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: a.level === "danger" ? "#ef4444" : a.level === "warning" ? "#f59e0b" : "#22c55e" }} />
                <span style={{ color: a.level === "danger" ? "#991b1b" : a.level === "warning" ? "#92400e" : "#166534" }}>
                  <strong>{a.dest}:</strong> {a.text}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Summary stats */}
        <div className="flex gap-3 mb-6">
          {[
            ["Open", openRoutes, "#22c55e", "#f0fdf4"],
            ["Partial", partialRoutes, "#f59e0b", "#fffbeb"],
            ["Closed", closedRoutes, "#ef4444", "#fef2f2"],
            ["Total", totalRoutes, "#6b7280", "#f9fafb"],
          ].map(([label, count, dot, bg]) => (
            <div key={label as string} className="flex-1 px-4 py-3 rounded-xl border border-gray-100 text-center" style={{ background: bg as string }}>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: dot as string }} />
                <span className="text-xl font-black text-gray-900">{count as number}</span>
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mt-0.5">{label as string}</div>
            </div>
          ))}
        </div>

        {/* Destination filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          <button onClick={() => setFilter("all")} className="px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition-all" style={{ background: filter === "all" ? accent : "#f5f5f5", color: filter === "all" ? "white" : "#888" }}>All routes</button>
          {ROUTE_GROUPS.map(g => (
            <button key={g.slug} onClick={() => setFilter(g.slug)} className="px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition-all" style={{ background: filter === g.slug ? accent : "#f5f5f5", color: filter === g.slug ? "white" : "#888" }}>{g.destination}</button>
          ))}
        </div>

        {/* Route groups */}
        {filtered.map((group) => (
          <div key={group.slug} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Link href={`/${group.slug}`} className="text-lg font-extrabold text-gray-900 hover:underline">{group.destination}</Link>
              <span className="text-xs text-gray-300">·</span>
              <span className="text-xs text-gray-300">{group.routes.length} segments</span>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden" style={{ boxShadow: "2px 4px 14px rgba(0,0,0,0.03)" }}>
              {group.routes.map((r, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-gray-50 cursor-default"
                  style={{ borderBottom: i < group.routes.length - 1 ? "1px solid #f8f8f8" : "none" }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: r.status === "open" ? "#22c55e" : r.status === "partial" ? "#f59e0b" : "#ef4444" }} />
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-gray-900">{r.from}</span>
                    <span className="text-xs text-gray-300 mx-2">→</span>
                    <span className="text-sm font-semibold text-gray-900">{r.to}</span>
                    <span className="text-xs text-gray-300 ml-2">{r.km} km</span>
                  </div>
                  <span className="text-xs text-gray-400 hidden sm:block">{r.note}</span>
                  <span className="font-mono text-[10px] text-gray-300">{r.updated}</span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase" style={{
                    background: r.status === "open" ? "#ecfdf5" : r.status === "partial" ? "#fffbeb" : "#fef2f2",
                    color: r.status === "open" ? "#065f46" : r.status === "partial" ? "#92400e" : "#991b1b",
                  }}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Sources */}
        <div className="mt-8 p-5 bg-gray-50 rounded-xl text-xs text-gray-400 leading-relaxed">
          <p className="font-bold text-gray-600 mb-2">Data sources & accuracy</p>
          <p>Road status data is sourced from PWD Uttarakhand (mis.pwduk.in), Himachal Pradesh PWD, BRO (Border Roads Organisation) official channels, and Uttarakhand Police updates. Data is refreshed every 30–60 minutes during season. Actual conditions may vary — always verify with local authorities before starting your journey.</p>
          <p className="mt-2">For real-time updates, follow BRO on Twitter: @BaboroOfficial</p>
        </div>
      </div>

      <Footer accent={accent} />
    </div>
  );
}
