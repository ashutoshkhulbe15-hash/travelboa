"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { DestinationData } from "@/lib/destinations/types";
import Link from "next/link";
import Image from "next/image";

interface Props {
  destination: DestinationData;
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function getMonthStatus(season: string, month: string): "closed" | "shoulder" | "peak" | "best" {
  const s = season.toLowerCase();
  const mi = MONTHS.indexOf(month);
  // Parse season string like "April – November" or "Year-round"
  if (s.includes("year-round") || s.includes("year round")) return mi >= 3 && mi <= 5 ? "best" : "peak";
  const monthNames = ["january","february","march","april","may","june","july","august","september","october","november","december"];
  const shortNames = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
  let startMonth = -1, endMonth = -1;
  for (let i = 0; i < 12; i++) {
    if (s.includes(monthNames[i]) || s.includes(shortNames[i])) {
      if (startMonth === -1) startMonth = i;
      endMonth = i;
    }
  }
  if (startMonth === -1) return "closed";
  const inRange = startMonth <= endMonth ? (mi >= startMonth && mi <= endMonth) : (mi >= startMonth || mi <= endMonth);
  if (!inRange) return "closed";
  // Best: 2nd and 3rd month; shoulder: first and last
  if (mi === startMonth || mi === endMonth) return "shoulder";
  if (mi === startMonth + 1 || mi === startMonth + 2) return "best";
  return "peak";
}

const statusColors: Record<string, { bg: string; text: string }> = {
  closed: { bg: "#f0e6e6", text: "#9a6060" },
  shoulder: { bg: "#f3e6cf", text: "#8a6a30" },
  peak: { bg: "#dcebe2", text: "#2a5a3a" },
  best: { bg: "var(--meadow)", text: "#fff" },
};

const routeStatusColor: Record<string, string> = { open: "#7be3a2", partial: "#e3b04b", closed: "#ef4444" };

export function DestinationGuide({ destination: d }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checks, setChecks] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
    }), { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) els.forEach(el => el.classList.add("on"));
    return () => io.disconnect();
  }, []);

  const totalItems = d.checklist.reduce((s, c) => s + c.items.length, 0);
  const checkedCount = Object.values(checks).filter(Boolean).length;

  // Related destinations (same type, different slug)
  const related = [
    d.type === "pilgrimage" ? "badrinath" : "spiti",
    "chopta",
    "valley-of-flowers",
  ].filter(s => s !== d.slug).slice(0, 3);

  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      {/* Breadcrumb */}
      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <Link href="/" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <Link href="/destinations" style={{ color: "var(--terra)" }}>Destinations</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span style={{ color: "var(--ink)" }}>{d.name}</span>
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <header className="relative overflow-hidden flex items-end" style={{ minHeight: 480, background: d.heroGradient }}>
        <Image src={`/${d.slug}.jpg`} alt={d.name} fill className="object-cover" priority onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(180deg,rgba(10,22,32,0.2) 0%,rgba(10,22,32,0.7) 60%,rgba(10,22,32,0.92) 100%)" }} />
        <div className="relative z-[2] w-full max-w-[1100px] mx-auto px-5 sm:px-6 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-4 font-mono text-[11.5px] tracking-wide uppercase text-white" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}>
            <span className="w-2 h-2 rounded-full" style={{ background: "#7be3a2", animation: "pulse-dot 2s ease-in-out infinite" }} />
            {d.type === "pilgrimage" ? "PILGRIMAGE" : "ADVENTURE"} &middot; {d.state.toUpperCase()}
          </div>
          <h1 className="text-white text-[clamp(38px,6vw,64px)] font-black tracking-tighter leading-[1.02]">{d.name}</h1>
          <p className="text-[clamp(16px,2vw,20px)] font-light mt-2" style={{ color: "var(--terra-soft)" }}>{d.tagline}</p>

          {/* Stat strip */}
          <div className="flex mt-7 rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(6px)" }}>
            {[
              { v: `${d.altitude.toLocaleString()} m`, l: "Altitude" },
              { v: d.season.replace("–", "-"), l: "Season" },
              { v: d.duration, l: "Duration" },
              { v: `${(d.budget.min/1000).toFixed(0)}-${(d.budget.max/1000).toFixed(0)}K`, l: "Budget (INR)" },
            ].map((s, i, arr) => (
              <div key={s.l} className="flex-1 py-4 px-3 sm:px-5 text-center text-white" style={{ borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <span className="block text-[clamp(18px,2.5vw,22px)] font-extrabold tracking-tight">{s.v}</span>
                <span className="block font-mono text-[10.5px] uppercase tracking-widest mt-1" style={{ color: "var(--mist)" }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ═══ BODY ═══ */}
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 py-12 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-14 items-start">

          {/* MAIN CONTENT */}
          <main>
            {/* Intro */}
            <div className="reveal">
              {d.intro.split("\n\n").map((p, i) => (
                <p key={i} className="text-[18px] font-normal leading-[1.8] mb-4" style={{ color: "var(--ink)", maxWidth: "68ch" }}>
                  {p.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**")
                      ? <b key={j} className="font-semibold">{part.replace(/\*\*/g, "")}</b>
                      : <span key={j}>{part}</span>
                  )}
                </p>
              ))}
            </div>

            {/* Sections */}
            {d.sections.map((section, si) => (
              <div key={section.id} id={section.id} className="reveal mt-12">
                <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight leading-[1.15] mb-4" style={{ color: "var(--ink)" }}>
                  {section.icon} {section.title}
                </h2>
                {section.content.split("\n\n").map((block, bi) => {
                  if (block.startsWith("**") && block.endsWith("**")) {
                    return <h3 key={bi} className="text-[16px] font-bold mt-5 mb-2" style={{ color: "var(--ink)" }}>{block.replace(/\*\*/g, "")}</h3>;
                  }
                  const parts = block.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p key={bi} className="text-[18px] font-normal leading-[1.75] mb-3" style={{ color: "var(--ink)", maxWidth: "68ch" }}>
                      {parts.map((part, j) =>
                        part.startsWith("**") && part.endsWith("**")
                          ? <b key={j} className="font-semibold">{part.replace(/\*\*/g, "")}</b>
                          : <span key={j}>{part}</span>
                      )}
                    </p>
                  );
                })}
              </div>
            ))}

            {/* Season calendar */}
            <div className="reveal mt-12" id="season">
              <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight leading-[1.15] mb-4" style={{ color: "var(--ink)" }}>When to Go</h2>
              <div className="grid grid-cols-6 sm:grid-cols-12 gap-1 my-5">
                {MONTHS.map(m => {
                  const st = getMonthStatus(d.season, m);
                  return (
                    <div key={m} className="text-center py-2.5 rounded-lg font-mono text-[11px] font-medium" style={{ background: statusColors[st].bg, color: statusColors[st].text, fontWeight: st === "best" ? 700 : 500 }}>{m}</div>
                  );
                })}
              </div>
              <div className="flex gap-4 flex-wrap font-mono text-[11.5px]" style={{ color: "var(--ink-soft)" }}>
                {[["var(--meadow)","BEST"],["#dcebe2","OPEN"],["#f3e6cf","SHOULDER"],["#f0e6e6","CLOSED"]].map(([c,l])=>(
                  <span key={l} className="flex items-center gap-1.5"><span className="w-3.5 h-3.5 rounded" style={{ background: c }} />{l}</span>
                ))}
              </div>
            </div>

            {/* Packing essentials */}
            <div className="reveal mt-12" id="packing">
              <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight leading-[1.15] mb-2" style={{ color: "var(--ink)" }}>What to Pack</h2>
              <p className="text-[18px] font-normal leading-[1.75] mb-5" style={{ color: "var(--ink)", maxWidth: "68ch" }}>I maintain a full packing checklist you can tick off and share. Here are the essentials from my list:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {d.checklist.slice(0, 2).flatMap(cat => cat.items.filter(it => it.essential).slice(0, 3)).map(item => (
                  <Link key={item.name} href={item.affiliateLink || `/gear`} target={item.affiliateLink ? "_blank" : undefined} rel={item.affiliateLink ? "noopener noreferrer sponsored" : undefined}
                    className="bg-white border rounded-2xl p-4 text-center no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: "#e3e9e6" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--terra)")} onMouseLeave={e => (e.currentTarget.style.borderColor = "#e3e9e6")}>
                    <span className="block text-[13.5px] font-semibold" style={{ color: "var(--ink)" }}>{item.name}</span>
                    {item.price && <span className="block font-mono text-[10.5px] mt-1" style={{ color: "var(--ink-soft)" }}>{item.price}</span>}
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="reveal mt-12" id="faq">
              <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight leading-[1.15] mb-5" style={{ color: "var(--ink)" }}>Frequently Asked Questions</h2>
              {d.faq.map((f, i) => (
                <div key={i} className="mb-2">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center gap-3 p-4 rounded-xl bg-white border cursor-pointer transition-all text-left" style={{ borderColor: "#e3e9e6", boxShadow: openFaq === i ? "2px 4px 16px rgba(0,0,0,0.04)" : "none" }}>
                    <span className="flex-1 text-[16px] font-semibold" style={{ color: "var(--ink)" }}>{f.q}</span>
                    <span className="text-lg transition-transform duration-200" style={{ color: "#ccc", transform: openFaq === i ? "rotate(180deg)" : "none" }}>&#9662;</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-white border border-t-0 rounded-b-xl -mt-1" style={{ borderColor: "#e3e9e6" }}>
                      <p className="text-[16px] font-normal leading-relaxed" style={{ color: "var(--ink-soft)" }}>{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky flex flex-col gap-5" style={{ top: 80 }}>

              {/* TOC */}
              <div className="bg-white border rounded-[20px] p-5" style={{ borderColor: "#e3e9e6", boxShadow: "0 20px 50px -30px rgba(28,43,51,0.3)" }}>
                <h3 className="text-[16px] font-bold flex items-center gap-2 mb-3" style={{ color: "var(--ink)" }}>&#128209; In this guide</h3>
                {d.sections.map((s, i) => (
                  <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2.5 py-2 text-[14.5px] no-underline border-b transition-colors hover:pl-1.5" style={{ borderColor: "#f0f3f1", color: "var(--ink-soft)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--terra)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-soft)")}>
                    <span className="font-mono text-[11px] w-5 shrink-0" style={{ color: "var(--terra)" }}>0{i + 1}</span>
                    {s.title}
                  </a>
                ))}
                <a href="#season" className="flex items-center gap-2.5 py-2 text-[14.5px] no-underline border-b transition-colors hover:pl-1.5" style={{ borderColor: "#f0f3f1", color: "var(--ink-soft)" }}>
                  <span className="font-mono text-[11px] w-5 shrink-0" style={{ color: "var(--terra)" }}>0{d.sections.length + 1}</span>When to Go
                </a>
                <a href="#packing" className="flex items-center gap-2.5 py-2 text-[14.5px] no-underline border-b transition-colors hover:pl-1.5" style={{ borderColor: "#f0f3f1", color: "var(--ink-soft)" }}>
                  <span className="font-mono text-[11px] w-5 shrink-0" style={{ color: "var(--terra)" }}>0{d.sections.length + 2}</span>What to Pack
                </a>
                <a href="#faq" className="flex items-center gap-2.5 py-2 text-[14.5px] no-underline transition-colors hover:pl-1.5" style={{ color: "var(--ink-soft)" }}>
                  <span className="font-mono text-[11px] w-5 shrink-0" style={{ color: "var(--terra)" }}>0{d.sections.length + 3}</span>FAQ
                </a>
              </div>

              {/* Road status */}
              <div className="bg-white border rounded-[20px] p-5" style={{ borderColor: "#e3e9e6", boxShadow: "0 20px 50px -30px rgba(28,43,51,0.3)" }}>
                <h3 className="text-[16px] font-bold flex items-center gap-2 mb-3" style={{ color: "var(--ink)" }}>&#128739;&#65039; Road Status</h3>
                {d.routes.map((r, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-3" style={{ borderBottom: i < d.routes.length - 1 ? "1px solid #f0f3f1" : "none" }}>
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ background: routeStatusColor[r.status] || "#ccc", boxShadow: r.status === "open" ? "0 0 8px rgba(123,227,162,0.5)" : "none", animation: r.status === "open" ? "pulse-dot 2s ease-in-out infinite" : "none" }} />
                    <div>
                      <div className="text-[14px] font-medium" style={{ color: "var(--ink)" }}>{r.from} &rarr; {r.to}</div>
                      <div className="font-mono text-[11px] mt-0.5" style={{ color: "var(--ink-soft)" }}>{r.note}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Weather */}
              <div className="bg-white border rounded-[20px] p-5" style={{ borderColor: "#e3e9e6", boxShadow: "0 20px 50px -30px rgba(28,43,51,0.3)" }}>
                <h3 className="text-[16px] font-bold flex items-center gap-2 mb-3" style={{ color: "var(--ink)" }}>{d.weather} Weather</h3>
                <div className="flex items-center gap-4 pb-3 mb-3 border-b border-dashed" style={{ borderColor: "#e3e9e6" }}>
                  <span className="text-[42px] font-extrabold tracking-tight leading-none" style={{ color: "var(--ink)" }}>{d.temp}&deg;</span>
                  <div>
                    <span className="block text-[16px] font-semibold" style={{ color: "var(--ink)" }}>At {d.altitude.toLocaleString()}m</span>
                    <span className="text-[14px] font-light" style={{ color: "var(--ink-soft)" }}>{d.name} base</span>
                  </div>
                </div>
                {d.weatherPoints.slice(0, 4).map((w, i) => (
                  <div key={i} className="flex justify-between items-center py-1.5 font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>
                    <span>{w.location}</span>
                    <span className="font-semibold" style={{ color: "var(--ink)" }}>{w.temp}&deg; {w.weather}</span>
                  </div>
                ))}
              </div>

              {/* Packing CTA */}
              <Link href={`/${d.slug}/packing`} className="block text-center rounded-[20px] p-5 no-underline transition-all duration-200 hover:-translate-y-0.5" style={{ background: "var(--terra)", color: "#fff" }}>
                <span className="block text-[15px] font-bold">Open the {d.name} Checklist</span>
                <span className="block text-[13px] font-light opacity-80 mt-1">Tick items, share with your group</span>
                {totalItems > 0 && (
                  <div className="mt-3">
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.2)" }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${(checkedCount / totalItems) * 100}%`, background: "#fff" }} />
                    </div>
                    <span className="text-[11px] opacity-70 mt-1.5 block">{checkedCount}/{totalItems} packed</span>
                  </div>
                )}
              </Link>

              {/* Author card */}
              <div className="rounded-[20px] p-5 border" style={{ background: "#fdf5ed", borderColor: "#e8d8c4" }}>
                <div className="flex gap-3.5 items-start">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-extrabold text-[18px] shrink-0" style={{ background: "var(--terra)" }}>A</div>
                  <div>
                    <span className="block text-[15px] font-bold" style={{ color: "var(--ink)" }}>Written by Ash</span>
                    <span className="block font-mono text-[11px] mt-0.5" style={{ color: "var(--ink-soft)" }}>DEHRADUN &middot; FIRST-HAND GUIDE</span>
                    <p className="text-[14px] font-light leading-relaxed mt-2.5" style={{ color: "var(--ink-soft)" }}>I live at the foot of these hills. Everything in this guide comes from walking this path, not reading about it.</p>
                    <a href="mailto:hello@travelboa.com" className="text-[13px] font-semibold mt-1.5 inline-block no-underline" style={{ color: "var(--terra)" }}>hello@travelboa.com &rarr;</a>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-white rounded-[20px] p-5 border-[1.5px]" style={{ borderColor: "#f0d0d0" }}>
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest mb-3 text-red-500">Emergency</h3>
                {d.emergency.slice(0, 3).map(e => (
                  <div key={e.number} className="flex justify-between py-1.5 text-[12px]">
                    <span style={{ color: "var(--ink-soft)" }}>{e.name}</span>
                    <span className="font-mono font-semibold" style={{ color: "var(--ink)" }}>{e.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "TravelGuide", name: d.metaTitle, description: d.metaDescription,
        about: { "@type": "TouristDestination", name: d.name, description: d.tagline },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: d.faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelboa.com" },
          { "@type": "ListItem", position: 2, name: "Destinations", item: "https://www.travelboa.com/destinations" },
          { "@type": "ListItem", position: 3, name: d.name, item: `https://www.travelboa.com/${d.slug}` },
        ],
      }) }} />
    </div>
  );
}
