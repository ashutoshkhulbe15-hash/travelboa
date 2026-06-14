"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
    }), { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const filtered = filter === "all" ? ROUTE_GROUPS : ROUTE_GROUPS.filter(g => g.slug === filter);
  const totalRoutes = ROUTE_GROUPS.reduce((s, g) => s + g.routes.length, 0);
  const openRoutes = ROUTE_GROUPS.reduce((s, g) => s + g.routes.filter(r => r.status === "open").length, 0);
  const partialRoutes = ROUTE_GROUPS.reduce((s, g) => s + g.routes.filter(r => r.status === "partial").length, 0);
  const closedRoutes = ROUTE_GROUPS.reduce((s, g) => s + g.routes.filter(r => r.status === "closed").length, 0);

  const statusColor: Record<string, string> = { open: "#7be3a2", partial: "#e3b04b", closed: "#ef4444" };
  const statusBg: Record<string, string> = { open: "#ecfdf5", partial: "#fffbeb", closed: "#fef2f2" };
  const statusText: Record<string, string> = { open: "#065f46", partial: "#92400e", closed: "#991b1b" };

  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[960px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span><span style={{ color: "var(--ink)" }}>Road Status</span>
        </div>
      </div>

      <div className="contour-bg py-10 sm:py-12 border-b" style={{ borderColor: "#e3e9e6" }}>
        <div className="max-w-[960px] mx-auto px-5 sm:px-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "#7be3a2", animation: "pulse-dot 2s ease-in-out infinite" }} />
            <p className="kicker">Live road status</p>
          </div>
          <h1 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-[1.08]" style={{ color: "var(--ink)" }}>Road conditions from Dehradun, updated this morning.</h1>
          <p className="text-[17px] font-normal leading-relaxed mt-3" style={{ color: "var(--ink-soft)", maxWidth: "60ch" }}>Sourced from PWD Uttarakhand, HP PWD, and BRO. Refreshed every 30-60 minutes during season.</p>

          {/* Summary stats */}
          <div className="flex gap-3 mt-8 flex-wrap">
            {[
              ["Open", openRoutes, "#7be3a2", "#ecfdf5"],
              ["Partial", partialRoutes, "#e3b04b", "#fffbeb"],
              ["Closed", closedRoutes, "#ef4444", "#fef2f2"],
              ["Total", totalRoutes, "var(--ink-soft)", "var(--snowfield)"],
            ].map(([label, count, dot, bg]) => (
              <div key={label as string} className="flex-1 min-w-[100px] px-4 py-3 rounded-2xl border text-center" style={{ background: bg as string, borderColor: "#e3e9e6" }}>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: dot as string }} />
                  <span className="text-[22px] font-extrabold" style={{ color: "var(--ink)" }}>{count as number}</span>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider mt-0.5" style={{ color: "var(--ink-soft)" }}>{label as string}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-5 sm:px-6 py-8 sm:py-10">
        {/* Disclaimer */}
        <div className="flex items-start gap-3 px-5 py-4 rounded-[18px] mb-6" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
          <span className="text-lg mt-0.5">⚠️</span>
          <div>
            <p className="text-[15px] font-semibold text-amber-800">Road conditions change rapidly in the mountains</p>
            <p className="text-[14px] text-amber-700/70 mt-1 leading-relaxed">Landslides, weather, and BRO maintenance can change status within hours. Always verify with local authorities. Call SDRF (1070) or BRO (1800-180-6763) for latest updates.</p>
          </div>
        </div>

        {/* Alerts */}
        {ALERTS.length > 0 && (
          <div className="mb-6 flex flex-col gap-2">
            {ALERTS.map((a, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-[14px] text-[14px]"
                style={{
                  background: a.level === "danger" ? "#fef2f2" : a.level === "warning" ? "#fffbeb" : "#f0fdf4",
                  border: `1px solid ${a.level === "danger" ? "#fecaca" : a.level === "warning" ? "#fde68a" : "#bbf7d0"}`,
                }}>
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: a.level === "danger" ? "#ef4444" : a.level === "warning" ? "#f59e0b" : "#22c55e" }} />
                <span style={{ color: a.level === "danger" ? "#991b1b" : a.level === "warning" ? "#92400e" : "#166534" }}>
                  <strong>{a.dest}:</strong> {a.text}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Filter */}
        <div className="flex gap-2.5 mb-8 overflow-x-auto pb-1 flex-wrap">
          <button onClick={() => setFilter("all")} className="px-4 py-2 rounded-full text-[13px] font-semibold shrink-0 border-0 cursor-pointer transition-all" style={{ background: filter === "all" ? "var(--terra)" : "#fff", color: filter === "all" ? "#fff" : "var(--ink-soft)", border: `1.5px solid ${filter === "all" ? "var(--terra)" : "#e3e9e6"}` }}>All routes</button>
          {ROUTE_GROUPS.map(g => (
            <button key={g.slug} onClick={() => setFilter(g.slug)} className="px-4 py-2 rounded-full text-[13px] font-semibold shrink-0 border-0 cursor-pointer transition-all" style={{ background: filter === g.slug ? "var(--terra)" : "#fff", color: filter === g.slug ? "#fff" : "var(--ink-soft)", border: `1.5px solid ${filter === g.slug ? "var(--terra)" : "#e3e9e6"}` }}>{g.destination}</button>
          ))}
        </div>

        {/* Route groups */}
        {filtered.map(group => (
          <div key={group.slug} className="reveal mb-8">
            <div className="flex items-center gap-2.5 mb-3">
              <Link href={`/${group.slug}`} className="text-[20px] font-extrabold no-underline hover:underline" style={{ color: "var(--ink)" }}>{group.destination}</Link>
              <span className="font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>{group.routes.length} segments</span>
            </div>
            <div className="bg-white rounded-[18px] border overflow-hidden" style={{ borderColor: "#e3e9e6", boxShadow: "0 8px 30px -16px rgba(28,43,51,0.15)" }}>
              {group.routes.map((r, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-[var(--snowfield)]" style={{ borderBottom: i < group.routes.length - 1 ? "1px solid #f0f3f1" : "none" }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: statusColor[r.status] }} />
                  <div className="flex-1 min-w-0">
                    <span className="text-[15px] font-semibold" style={{ color: "var(--ink)" }}>{r.from}</span>
                    <span className="text-[13px] mx-2" style={{ color: "var(--ink-soft)" }}>&rarr;</span>
                    <span className="text-[15px] font-semibold" style={{ color: "var(--ink)" }}>{r.to}</span>
                    <span className="font-mono text-[12px] ml-2" style={{ color: "var(--ink-soft)" }}>{r.km} km</span>
                  </div>
                  <span className="text-[13px] hidden sm:block" style={{ color: "var(--ink-soft)" }}>{r.note}</span>
                  <span className="font-mono text-[11px]" style={{ color: "var(--ink-soft)" }}>{r.updated}</span>
                  <span className="px-2.5 py-1 rounded-lg font-mono text-[11px] font-bold uppercase" style={{ background: statusBg[r.status], color: statusText[r.status] }}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Sources */}
        <div className="mt-8 p-6 rounded-[18px] text-[14px] leading-relaxed" style={{ background: "var(--snowfield)", color: "var(--ink-soft)" }}>
          <p className="font-bold mb-2" style={{ color: "var(--ink)" }}>Data sources &amp; accuracy</p>
          <p>Road status data is sourced from PWD Uttarakhand (mis.pwduk.in), Himachal Pradesh PWD, BRO official channels, and Uttarakhand Police updates. Actual conditions may vary. Always verify with local authorities before starting your journey.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
