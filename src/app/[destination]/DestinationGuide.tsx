"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { relatedForDestination } from "@/lib/related";
import type { DestinationData } from "@/lib/destinations/types";
import { DESTINATIONS } from "@/lib/data";
import { editorialForDestination } from "@/lib/editorial";
import Link from "next/link";
import Image from "next/image";

interface Props {
  destination: DestinationData;
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function getMonthStatus(season: string, month: string): "closed" | "shoulder" | "peak" | "best" {
  const s = season.toLowerCase();
  const mi = MONTHS.indexOf(month);
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

const routeStatusColor: Record<string, string> = { open: "#3d9e6d", partial: "#e3b04b", closed: "#ef4444" };

/* ═══ inline **bold** renderer ═══ */
function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*.*?\*\*)/g).map((part, j) =>
        part.startsWith("**") && part.endsWith("**")
          ? <b key={j} className="font-semibold" style={{ color: "var(--ink)" }}>{part.replace(/\*\*/g, "")}</b>
          : <span key={j}>{part}</span>
      )}
    </>
  );
}

/* ═══ content parser: turns markdown-ish blocks into journal components ═══ */
const CALLOUT_RE = /^\*\*(Important|Avoid|Warning|Note|Pro tip|Tip|Remember|Caution)[:!]?\*\*:?\s*(.*)$/i;
const STAGE_RE = /^\*\*(.+?)\s*\(([^)]*km[^)]*)\):\*\*\s*(.+)$/;
const HEADING_RE = /^\*\*([^*]+?):?\*\*$/;
const KV_RE = /^\*\*([^*]+?):\*\*\s+(.+)$/;
const BULLET_RE = /^[-•]\s+(.+)$/;

function SectionContent({ content }: { content: string }) {
  const blocks = content.split("\n\n").map(b => b.trim()).filter(Boolean);
  const out: React.ReactNode[] = [];
  let stageBuffer: { title: string; dist: string; desc: string }[] = [];
  let stageIdx = 0;

  const flushStages = (key: string) => {
    if (!stageBuffer.length) return;
    const stages = stageBuffer;
    stageBuffer = [];
    out.push(
      <div key={key} className="flex flex-col gap-2.5 my-4">
        {stages.map((st, i) => (
          <div key={i} className="bg-white rounded-xl p-4 sm:p-5 grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] gap-x-4 gap-y-1 items-center" style={{ border: "1px solid var(--line)", boxShadow: "0 4px 14px -8px rgba(28,43,51,0.15)" }}>
            <span className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-[11px] font-semibold shrink-0" style={{ background: "rgba(194,102,45,0.12)", color: "var(--terra)" }}>S{stageIdx + i + 1}</span>
            <div className="min-w-0">
              <span className="block text-[16px] font-bold" style={{ color: "var(--ink)" }}>{st.title}</span>
              <span className="block text-[14.5px] font-normal leading-relaxed mt-0.5" style={{ color: "var(--ink-soft)" }}><Inline text={st.desc} /></span>
            </div>
            <span className="font-mono text-[12px] font-medium whitespace-nowrap col-start-2 sm:col-start-3" style={{ color: "var(--pine)" }}>{st.dist}</span>
          </div>
        ))}
      </div>
    );
    stageIdx += stages.length;
  };

  blocks.forEach((block, bi) => {
    const lines = block.split("\n").map(l => l.trim()).filter(Boolean);
    const first = lines[0];

    // 1) Callout: **Important:** ...
    const co = first.match(CALLOUT_RE);
    if (co) {
      flushStages(`st-${bi}`);
      const rest = [co[2], ...lines.slice(1)].filter(Boolean).join(" ");
      out.push(
        <div key={bi} className="rounded-xl p-4 sm:p-5 my-5 bg-white" style={{ border: "1px solid var(--line)", borderLeft: "4px solid var(--terra)", boxShadow: "0 4px 14px -8px rgba(28,43,51,0.15)" }}>
          <span className="font-mono text-[10.5px] font-semibold tracking-[0.14em] uppercase" style={{ color: "var(--terra)" }}>{co[1]}</span>
          <p className="text-[15.5px] font-normal leading-relaxed mt-1.5" style={{ color: "var(--ink-soft)" }}><Inline text={rest} /></p>
        </div>
      );
      return;
    }

    // 2) Stage line: **A to B (4 km):** description
    const stg = first.match(STAGE_RE);
    if (stg && lines.length === 1) {
      stageBuffer.push({ title: stg[1], dist: stg[2], desc: stg[3] });
      return;
    }

    flushStages(`st-${bi}`);

    // 3) Spec card: every line is **Key:** value (2+ lines)
    if (lines.length >= 2 && lines.every(l => KV_RE.test(l))) {
      out.push(
        <div key={bi} className="bg-white rounded-xl overflow-hidden my-5" style={{ border: "1px solid var(--line)", boxShadow: "0 4px 14px -8px rgba(28,43,51,0.15)" }}>
          {lines.map((l, i) => {
            const m = l.match(KV_RE)!;
            return (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 px-4 sm:px-5 py-3" style={{ borderTop: i > 0 ? "1.5px dashed var(--line)" : "none" }}>
                <span className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase sm:w-[160px] shrink-0" style={{ color: "var(--pine)" }}>{m[1]}</span>
                <span className="text-[15.5px] font-normal leading-relaxed" style={{ color: "var(--ink)" }}><Inline text={m[2]} /></span>
              </div>
            );
          })}
        </div>
      );
      return;
    }

    // 4) Heading followed only by bullets -> tier/list card
    const hd = first.match(HEADING_RE);
    const restLines = lines.slice(1);
    if (hd && restLines.length > 0 && restLines.every(l => BULLET_RE.test(l))) {
      out.push(
        <div key={bi} className="bg-white rounded-xl p-4 sm:p-5 my-4" style={{ border: "1px solid var(--line)", boxShadow: "0 4px 14px -8px rgba(28,43,51,0.15)" }}>
          <span className="block text-[16px] font-bold mb-2.5" style={{ color: "var(--ink)" }}>{hd[1]}</span>
          <ul className="flex flex-col gap-1.5 m-0 p-0" style={{ listStyle: "none" }}>
            {restLines.map((l, i) => (
              <li key={i} className="flex gap-2.5 text-[15px] font-normal leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--terra)" }} />
                <span><Inline text={l.match(BULLET_RE)![1]} /></span>
              </li>
            ))}
          </ul>
        </div>
      );
      return;
    }

    // 5) Standalone bold heading -> h3
    if (hd && restLines.length === 0) {
      out.push(
        <h3 key={bi} className="text-[17px] font-bold mt-7 mb-2 flex items-baseline gap-2.5" style={{ color: "var(--ink)" }}>
          <span className="w-4 h-[2.5px] rounded-full shrink-0 translate-y-[-4px]" style={{ background: "var(--terra)" }} />
          {hd[1]}
        </h3>
      );
      return;
    }

    // 6) Heading + plain text lines -> h3 + paragraphs
    if (hd && restLines.length > 0) {
      out.push(
        <div key={bi} className="mt-6">
          <h3 className="text-[17px] font-bold mb-1.5 flex items-baseline gap-2.5" style={{ color: "var(--ink)" }}>
            <span className="w-4 h-[2.5px] rounded-full shrink-0 translate-y-[-4px]" style={{ background: "var(--terra)" }} />
            {hd[1]}
          </h3>
          {restLines.map((l, i) => {
            const bl = l.match(BULLET_RE);
            return bl ? (
              <div key={i} className="flex gap-2.5 text-[16px] font-normal leading-[1.75] mb-1" style={{ color: "var(--ink-soft)", maxWidth: "68ch" }}>
                <span className="mt-[10px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--terra)" }} />
                <span><Inline text={bl[1]} /></span>
              </div>
            ) : (
              <p key={i} className="text-[16.5px] font-normal leading-[1.75] mb-2" style={{ color: "var(--ink-soft)", maxWidth: "68ch" }}><Inline text={l} /></p>
            );
          })}
        </div>
      );
      return;
    }

    // 7) All-bullet block -> styled list
    if (lines.every(l => BULLET_RE.test(l))) {
      out.push(
        <ul key={bi} className="flex flex-col gap-1.5 my-3 p-0" style={{ listStyle: "none" }}>
          {lines.map((l, i) => (
            <li key={i} className="flex gap-2.5 text-[16px] font-normal leading-relaxed" style={{ color: "var(--ink-soft)", maxWidth: "68ch" }}>
              <span className="mt-[10px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--terra)" }} />
              <span><Inline text={l.match(BULLET_RE)![1]} /></span>
            </li>
          ))}
        </ul>
      );
      return;
    }

    // 8) Plain paragraph(s)
    out.push(
      <div key={bi}>
        {lines.map((l, i) => (
          <p key={i} className="text-[17px] font-normal leading-[1.8] mb-3" style={{ color: "var(--ink-soft)", maxWidth: "68ch" }}><Inline text={l} /></p>
        ))}
      </div>
    );
  });

  flushStages("st-end");
  return <>{out}</>;
}

export function DestinationGuide({ destination: d }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checks] = useState<Record<string, boolean>>({});

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

  // Related content, driven by the curated map in @/lib/related
  const rel = relatedForDestination(d.slug);
  const related = rel.destinations;

  const entryNo = String(Math.max(1, DESTINATIONS.findIndex(x => x.slug === d.slug) + 1)).padStart(2, "0");
  const hasAffiliate = d.checklist.some(c => c.items.some(it => it.affiliateLink));
  const editorial = editorialForDestination(d.slug);

  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      {/* Breadcrumb */}
      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--paper-warm)", borderColor: "var(--line)", color: "var(--ink-soft)" }}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <Link href="/" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <Link href="/destinations" style={{ color: "var(--terra)" }}>Destinations</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span style={{ color: "var(--ink)" }}>{d.name}</span>
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <header className="relative overflow-hidden flex items-end" style={{ minHeight: 420, background: d.heroGradient }}>
        <Image src={d.heroImage ?? `/${d.slug}.jpg`} alt={d.name} fill className="object-cover" loading="eager" fetchPriority="high" sizes="100vw" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(180deg,rgba(10,22,32,0.15) 0%,rgba(10,22,32,0.65) 60%,rgba(10,22,32,0.9) 100%)" }} />
        <div className="relative z-[2] w-full max-w-[1100px] mx-auto px-5 sm:px-6 pb-9">
          <span className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-[3px] mb-4 -rotate-2" style={{ border: "1.5px solid rgba(255,255,255,0.85)", color: "#fff", background: "rgba(28,43,51,0.3)", backdropFilter: "blur(4px)" }}>
            Entry {entryNo} &middot; {d.type === "pilgrimage" ? "Pilgrimage" : "Adventure"} &middot; {d.state}
          </span>
          <h1 className="text-white text-[clamp(38px,6vw,62px)] font-black tracking-tighter leading-[1.02]">{d.name}</h1>
          <p className="font-caveat text-[clamp(22px,2.6vw,28px)] mt-1.5 -rotate-1 inline-block" style={{ color: "#ffe9d6" }}>{d.tagline}</p>
        </div>
      </header>

      {/* ═══ META BAR ═══ */}
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 -mt-0">
        <div className="bg-white rounded-2xl flex flex-wrap relative z-[3] -translate-y-7 overflow-hidden" style={{ border: "1px solid var(--line)", boxShadow: "0 18px 44px -22px rgba(28,43,51,0.35)" }}>
          {d.quickStats.slice(0, 6).map((s, i) => (
            <div key={s.label} className="flex-1 min-w-[140px] px-4 sm:px-5 py-3.5" style={{ borderLeft: i > 0 ? "1px solid var(--line)" : "none" }}>
              <span className="block font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: "var(--ink-soft)" }}>{s.label}</span>
              <span className="block text-[15.5px] font-bold mt-0.5" style={{ color: i === 0 ? "var(--terra)" : "var(--ink)" }}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ BODY ═══ */}
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-14">

          {/* MAIN CONTENT */}
          <main className="min-w-0">
            {/* Intro */}
            <div className="reveal">
              {d.intro.split("\n\n").map((p, i) => (
                <p key={i} className="text-[18px] font-normal leading-[1.8] mb-4" style={{ color: "var(--ink)", maxWidth: "68ch" }}>
                  <Inline text={p} />
                </p>
              ))}
            </div>

            {d.photoGallery && d.photoGallery.length > 0 && (
              <section className="reveal mt-10" aria-labelledby="photo-gallery-heading">
                <div className="flex items-end justify-between gap-4 mb-4">
                  <div>
                    <p className="kicker mb-1">Ash&apos;s Nainital photographs</p>
                    <h2 id="photo-gallery-heading" className="text-[24px] font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>Nainital in three moods</h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {d.photoGallery.map((photo, index) => (
                    <figure key={photo.src} className={`m-0 overflow-hidden rounded-[18px] bg-white border ${index === 0 ? "sm:col-span-2" : ""}`} style={{ borderColor: "var(--line)" }}>
                      <div className={`relative ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                        <Image src={photo.src} alt={photo.alt} fill sizes={index === 0 ? "(max-width: 1024px) 100vw, 760px" : "(max-width: 640px) 100vw, 380px"} className="object-cover" />
                      </div>
                      <figcaption className="px-4 py-3 text-[13px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>{photo.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {d.comparison && (
              <section className="reveal mt-10" aria-labelledby="destination-comparison-heading">
                <p className="kicker mb-1">Decision board</p>
                <h2 id="destination-comparison-heading" className="text-[24px] font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>{d.comparison.title}</h2>
                <p className="text-[14.5px] leading-relaxed mt-2 mb-4" style={{ color: "var(--ink-soft)" }}>{d.comparison.caption}</p>
                <div className="overflow-x-auto rounded-[18px] bg-white border" style={{ borderColor: "var(--line)" }}>
                  <table className="w-full min-w-[720px] border-collapse text-left">
                    <thead>
                      <tr style={{ background: "var(--snowfield)" }}>
                        <th className="p-4 font-mono text-[11px] uppercase tracking-wider" style={{ color: "var(--ink-soft)" }}>Decision</th>
                        {d.comparison.columns.map(column => <th key={column} className="p-4 text-[15px] font-bold" style={{ color: "var(--ink)" }}>{column}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {d.comparison.rows.map((row, rowIndex) => (
                        <tr key={row.label} style={{ borderTop: "1px solid var(--line)", background: rowIndex % 2 ? "#fcfdfc" : "white" }}>
                          <th className="p-4 font-mono text-[11px] uppercase tracking-wider align-top" style={{ color: "var(--pine)" }}>{row.label}</th>
                          {row.values.map((value, index) => <td key={`${row.label}-${index}`} className="p-4 text-[14px] leading-relaxed align-top" style={{ color: "var(--ink-soft)" }}>{value}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Sections */}
            {d.sections.map((section, si) => (
              <div key={section.id} id={section.id} className="reveal mt-12" style={{ paddingTop: 8, borderTop: si > 0 ? "1.5px dashed var(--line)" : "none" }}>
                <span className="font-mono text-[11.5px] font-semibold tracking-[0.14em]" style={{ color: "var(--terra)" }}>&sect; {String(si + 1).padStart(2, "0")}</span>
                <h2 className="text-[clamp(24px,3vw,31px)] font-extrabold tracking-tight leading-[1.15] mt-1.5 mb-4" style={{ color: "var(--ink)" }}>
                  {section.title}
                </h2>
                <SectionContent content={section.content} />
              </div>
            ))}

            {/* Season calendar */}
            <div className="reveal mt-12" id="season" style={{ paddingTop: 8, borderTop: "1.5px dashed var(--line)" }}>
              <span className="font-mono text-[11.5px] font-semibold tracking-[0.14em]" style={{ color: "var(--terra)" }}>&sect; {String(d.sections.length + 1).padStart(2, "0")}</span>
              <h2 className="text-[clamp(24px,3vw,31px)] font-extrabold tracking-tight leading-[1.15] mt-1.5 mb-4" style={{ color: "var(--ink)" }}>When to go</h2>
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
            <div className="reveal mt-12" id="packing-checklist" style={{ paddingTop: 8, borderTop: "1.5px dashed var(--line)" }}>
              <span className="font-mono text-[11.5px] font-semibold tracking-[0.14em]" style={{ color: "var(--terra)" }}>&sect; {String(d.sections.length + 2).padStart(2, "0")}</span>
              <h2 className="text-[clamp(24px,3vw,31px)] font-extrabold tracking-tight leading-[1.15] mt-1.5 mb-2" style={{ color: "var(--ink)" }}>What to pack</h2>
              <p className="text-[17px] font-normal leading-[1.75] mb-5" style={{ color: "var(--ink-soft)", maxWidth: "68ch" }}>A full packing checklist is available to tick off and share. Start with these essentials, then adjust for the current forecast, route and your own needs:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {d.checklist.slice(0, 2).flatMap(cat => cat.items.filter(it => it.essential).slice(0, 3)).map(item => (
                  <Link key={item.name} href={item.affiliateLink || `/gear`} target={item.affiliateLink ? "_blank" : undefined} rel={item.affiliateLink ? "noopener noreferrer sponsored" : undefined}
                    className="bg-white rounded-xl p-4 text-center no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" style={{ border: "1px solid var(--line)" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--terra)")} onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--line)")}>
                    <span className="block text-[13.5px] font-semibold" style={{ color: "var(--ink)" }}>{item.name}</span>
                    {item.price && <span className="block font-mono text-[10.5px] mt-1" style={{ color: "var(--ink-soft)" }}>{item.price}</span>}
                  </Link>
                ))}
              </div>
              <Link href={`/${d.slug}/packing`} className="inline-flex items-center gap-2 mt-5 text-[15px] font-semibold no-underline" style={{ color: "var(--terra)" }}>
                Open the full {d.name} checklist <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
              </Link>
              {hasAffiliate && (
                <p className="text-[13px] font-normal leading-relaxed rounded-xl px-4 py-3 mt-5" style={{ color: "var(--ink-soft)", background: "var(--paper-warm)", border: "1px solid var(--line)", maxWidth: "68ch" }}>
                  Disclosure: some links above are affiliate links. If you buy through them, TravelBoa may earn a small commission at no extra cost to you. That does not affect which items are included.
                </p>
              )}
            </div>

            {/* FAQ */}
            <div className="reveal mt-12" id="faq" style={{ paddingTop: 8, borderTop: "1.5px dashed var(--line)" }}>
              <span className="font-mono text-[11.5px] font-semibold tracking-[0.14em]" style={{ color: "var(--terra)" }}>&sect; {String(d.sections.length + 3).padStart(2, "0")}</span>
              <h2 className="text-[clamp(24px,3vw,31px)] font-extrabold tracking-tight leading-[1.15] mt-1.5 mb-5" style={{ color: "var(--ink)" }}>Questions I get asked</h2>
              {d.faq.map((f, i) => (
                <div key={i} className="mb-2.5 bg-white rounded-xl overflow-hidden" style={{ border: "1px solid var(--line)", boxShadow: "0 4px 14px -8px rgba(28,43,51,0.12)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center gap-3 px-5 py-4 bg-transparent border-0 cursor-pointer text-left">
                    <span className="flex-1 text-[16px] font-semibold" style={{ color: "var(--ink)" }}>{f.q}</span>
                    <span className="text-[20px] font-normal shrink-0 leading-none" style={{ color: "var(--terra)" }}>{openFaq === i ? "\u2013" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4">
                      <p className="text-[15.5px] font-normal leading-relaxed" style={{ color: "var(--ink-soft)" }}>{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {editorial.sources.length > 0 && (
              <section className="reveal mt-12" id="official-resources" style={{ paddingTop: 8, borderTop: "1.5px dashed var(--line)" }}>
                <h2 className="text-[clamp(24px,3vw,31px)] font-extrabold tracking-tight leading-[1.15] mb-3" style={{ color: "var(--ink)" }}>Official planning resources</h2>
                <p className="text-[15.5px] leading-relaxed mb-4" style={{ color: "var(--ink-soft)" }}>Use these official pages for the latest permits, registration, access rules and operational notices.</p>
                <ul className="flex flex-col gap-2 p-0" style={{ listStyle: "none" }}>
                  {editorial.sources.map(source => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-[14.5px] font-semibold no-underline hover:underline" style={{ color: "var(--terra)" }}>{source.label} ↗</a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </main>

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="flex flex-col gap-5" style={{ position: "sticky", top: 80 }}>

              {/* Quick facts */}
              <div className="bg-white rounded-[18px] p-5" style={{ border: "1px solid var(--line)", boxShadow: "0 14px 40px -26px rgba(28,43,51,0.4)" }}>
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: "var(--pine)" }}>Quick facts</h3>
                {d.quickStats.map((s, i) => (
                  <div key={s.label} className="flex justify-between items-baseline gap-3 py-2 text-[13.5px]" style={{ borderBottom: i < d.quickStats.length - 1 ? "1.5px dashed var(--line)" : "none" }}>
                    <span className="font-normal" style={{ color: "var(--ink-soft)" }}>{s.label}</span>
                    <span className="font-semibold text-right" style={{ color: "var(--ink)" }}>{s.value}</span>
                  </div>
                ))}
              </div>

              {/* TOC */}
              <div className="bg-white rounded-[18px] p-5" style={{ border: "1px solid var(--line)", boxShadow: "0 14px 40px -26px rgba(28,43,51,0.4)" }}>
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: "var(--pine)" }}>In this entry</h3>
                {[...d.sections.map(s => ({ id: s.id, title: s.title })), { id: "season", title: "When to go" }, { id: "packing-checklist", title: "What to pack" }, { id: "faq", title: "Questions I get asked" }].map((s, i, arr) => (
                  <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2.5 py-2 text-[14px] no-underline transition-all hover:pl-1.5" style={{ borderBottom: i < arr.length - 1 ? "1.5px dashed var(--line)" : "none", color: "var(--ink-soft)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--terra)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-soft)")}>
                    <span className="font-mono text-[10.5px] w-6 shrink-0" style={{ color: "var(--terra)" }}>&sect;{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                ))}
              </div>

              {/* Route reference */}
              <div className="bg-white rounded-[18px] p-5" style={{ border: "1px solid var(--line)", boxShadow: "0 14px 40px -26px rgba(28,43,51,0.4)" }}>
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] mb-1" style={{ color: "var(--pine)" }}>Route reference · not live</h3>
                <p className="text-[12px] leading-relaxed mb-2" style={{ color: "var(--ink-soft)" }}>Conditions can change within hours. Verify locally before departure.</p>
                {d.routes.map((r, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2.5" style={{ borderBottom: i < d.routes.length - 1 ? "1.5px dashed var(--line)" : "none" }}>
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: routeStatusColor[r.status] || "#ccc" }} />
                    <div className="min-w-0">
                      <div className="text-[13.5px] font-medium" style={{ color: "var(--ink)" }}>{r.from} &rarr; {r.to}</div>
                      <div className="font-mono text-[10.5px] mt-0.5" style={{ color: "var(--ink-soft)" }}>{r.note}</div>
                    </div>
                  </div>
                ))}
                <Link href="/road-status" className="font-mono text-[10.5px] inline-block mt-3 no-underline" style={{ color: "var(--terra)" }}>OFFICIAL ROAD RESOURCES &rarr;</Link>
              </div>

              {/* Weather */}
              <div className="bg-white rounded-[18px] p-5" style={{ border: "1px solid var(--line)", boxShadow: "0 14px 40px -26px rgba(28,43,51,0.4)" }}>
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] mb-1" style={{ color: "var(--pine)" }}>Typical conditions · not forecast</h3>
                <p className="text-[12px] leading-relaxed mb-2" style={{ color: "var(--ink-soft)" }}>Illustrative planning values; check an official forecast before travel.</p>
                <div className="flex items-center gap-4 pb-3 mb-2 border-b" style={{ borderBottom: "1.5px dashed var(--line)" }}>
                  <span className="text-[40px] font-extrabold tracking-tight leading-none" style={{ color: "var(--ink)" }}>{d.temp}&deg;</span>
                  <div>
                    <span className="block text-[15px] font-semibold" style={{ color: "var(--ink)" }}>At {d.altitude.toLocaleString()} m</span>
                    <span className="text-[13px] font-normal" style={{ color: "var(--ink-soft)" }}>{d.name} {d.weather}</span>
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
              <div className="rounded-[18px] p-5" style={{ background: "var(--pine)", color: "#fff" }}>
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] mb-1.5" style={{ color: "#e9b98a" }}>Pack for this trip</h3>
                <p className="text-[13.5px] font-normal leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>A checklist tuned to {d.name}. Tick items off, share it with your trip group.</p>
                <Link href={`/${d.slug}/packing`} className="block text-center rounded-full px-5 py-3 mt-4 no-underline text-[14.5px] font-semibold transition-transform duration-200 hover:-translate-y-0.5" style={{ background: "var(--terra)", color: "#fff" }}>
                  Build my {d.name} list
                </Link>
                {totalItems > 0 && checkedCount > 0 && (
                  <span className="block text-center text-[11px] mt-2" style={{ color: "rgba(255,255,255,0.7)" }}>{checkedCount}/{totalItems} packed</span>
                )}
              </div>

              {/* Author card */}
              <div className="rounded-[18px] p-5" style={{ background: "var(--paper-warm)", border: "1px solid var(--line)" }}>
                <div className="flex gap-3.5 items-start">
                  <Image src="/ash-author.jpg" alt="Ash, founder of TravelBoa" width={44} height={44} className="w-11 h-11 rounded-full object-cover shrink-0" />
                  <div>
                    <span className="block text-[15px] font-bold" style={{ color: "var(--ink)" }}>Written and maintained by Ash</span>
                    <span className="block font-mono text-[10.5px] mt-0.5" style={{ color: "var(--ink-soft)" }}>NAINITAL ROOTS &middot; BASED IN UTTARAKHAND</span>
                    <p className="text-[13.5px] font-normal leading-relaxed mt-2" style={{ color: "var(--ink-soft)" }}>Born in Nainital and based in Uttarakhand, Ash writes practical guides for planning Himalayan journeys.</p>
                    <Link href="/about" className="text-[13px] font-semibold mt-1.5 inline-block no-underline" style={{ color: "var(--terra)" }}>About Ash &rarr;</Link>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-white rounded-[18px] p-5" style={{ border: "1.5px solid #f0d0d0" }}>
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] mb-2 text-red-500">Emergency</h3>
                {d.emergency.slice(0, 3).map((e, i) => (
                  <div key={e.number} className="flex justify-between py-1.5 text-[12.5px]" style={{ borderBottom: i < Math.min(d.emergency.length, 3) - 1 ? "1.5px dashed var(--line)" : "none" }}>
                    <span style={{ color: "var(--ink-soft)" }}>{e.name}</span>
                    <span className="font-mono font-semibold" style={{ color: "var(--ink)" }}>{e.number}</span>
                  </div>
                ))}
              </div>

              <span className="font-caveat text-[21px] text-center -rotate-2" style={{ color: "var(--terra)" }}>saved this? see you on the trail &#10003;</span>
            </div>
          </aside>
        </div>
      </div>

      {/* ═══ RELATED CONTENT ═══ */}
      <section className="py-14" style={{ background: "var(--paper-warm)", borderTop: "1.5px dashed var(--line)" }}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <span className="font-caveat text-[22px] block -rotate-1 mb-1" style={{ color: "var(--pine)" }}>if this entry helped, read these next&hellip;</span>
          <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>Read next</h2>

          {related.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-7">
              {related.map(r => (
                <Link key={r.href} href={r.href} className="bg-white rounded-xl p-5 no-underline transition-all duration-250 hover:-translate-y-1 hover:shadow-xl" style={{ border: "1px solid var(--line)", boxShadow: "0 4px 14px -8px rgba(28,43,51,0.12)" }}>
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase" style={{ color: "var(--terra)" }}>{r.blurb}</span>
                  <span className="block text-[18px] font-bold mt-2" style={{ color: "var(--ink)" }}>{r.title}</span>
                </Link>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
            <RelatedLinks title={`Gear for ${d.name}`} note="route-specific essentials" links={rel.gear} />
            <RelatedLinks title={`Planning guides for ${d.name}`} note="permits, budget, timing" links={rel.guides} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
