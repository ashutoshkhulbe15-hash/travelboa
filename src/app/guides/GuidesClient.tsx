"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GUIDES } from "@/lib/data";
import { guideContent } from "@/lib/guide-content";
import Link from "next/link";
import Image from "next/image";

const TAGS = ["All", ...Array.from(new Set(GUIDES.map(g => g.tag)))];
const TAG_ICONS: Record<string, string> = {
  Health: "🫁", Planning: "📅", Packing: "🎒", Gear: "🥾",
  Safety: "⚠️", Money: "💰", Documents: "📋", Budget: "🧮",
};

export function GuidesClient() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
    }), { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) els.forEach(el => el.classList.add("on"));
    return () => io.disconnect();
  }, []);

  const filtered = filter === "All" ? GUIDES : GUIDES.filter(g => g.tag === filter);

  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span style={{ color: "var(--ink)" }}>Guides</span>
        </div>
      </div>

      <div className="contour-bg py-12 sm:py-16 border-b" style={{ borderColor: "#e3e9e6" }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <p className="kicker mb-3">7 topic guides</p>
          <h1 className="text-[clamp(30px,4.5vw,48px)] font-extrabold tracking-tight leading-[1.06]" style={{ color: "var(--ink)" }}>Guides I keep updating.</h1>
          <p className="text-[18px] font-normal leading-relaxed mt-3" style={{ color: "var(--ink-soft)", maxWidth: "56ch" }}>Cross-cutting travel knowledge: altitude health, permits, budgets, packing, monsoon safety. Written from experience, updated each season.</p>

          <div className="flex gap-2.5 flex-wrap mt-8">
            {TAGS.map(tag => (
              <button key={tag} onClick={() => setFilter(tag)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[14px] font-semibold border-0 cursor-pointer transition-all duration-200"
                style={{
                  background: filter === tag ? "var(--terra)" : "#fff",
                  color: filter === tag ? "#fff" : "var(--ink-soft)",
                  border: `1.5px solid ${filter === tag ? "var(--terra)" : "#e3e9e6"}`,
                  boxShadow: filter === tag ? "0 4px 14px rgba(194,102,45,0.3)" : "none",
                }}>
                {TAG_ICONS[tag] || "📖"} {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-10 sm:py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📖</div>
            <p className="text-[18px] font-bold" style={{ color: "var(--ink)" }}>No guides in this category yet</p>
            <p className="text-[16px] font-normal mt-2" style={{ color: "var(--ink-soft)" }}>More coming soon</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((g, i) => {
              const gc = guideContent[g.slug];
              const isFeature = i === 0 && filter === "All";
              return (
                <Link key={g.slug} href={g.href}
                  className={`reveal group block rounded-[18px] overflow-hidden no-underline transition-all duration-300 hover:-translate-y-[6px] hover:shadow-2xl ${isFeature ? "sm:col-span-2 sm:row-span-2" : ""}`}
                  style={{ border: "1px solid #e3e9e6", background: "#fff" }}>
                  
                  {gc?.heroImage && (
                    <div className="relative overflow-hidden" style={{ aspectRatio: isFeature ? "21/9" : "16/9" }}>
                      <Image src={gc.heroImage.src} alt={gc.heroImage.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:640px) 100vw, 50vw" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.5))" }} />
                      <div className="absolute bottom-3 left-4">
                        <span className="font-mono text-[10.5px] tracking-wide uppercase px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.92)", color: "var(--ink)" }}>{g.tag}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-5 sm:p-6">
                    {!gc?.heroImage && (
                      <div className="flex items-center justify-between mb-3">
                        <span className={`${isFeature ? "text-4xl" : "text-2xl"}`}>{TAG_ICONS[g.tag] || "📖"}</span>
                        <span className="font-mono text-[10.5px] tracking-wide uppercase px-2.5 py-1 rounded-full" style={{ background: "rgba(194,102,45,0.1)", color: "var(--terra)" }}>{g.tag}</span>
                      </div>
                    )}
                    <p className={`${isFeature ? "text-[22px]" : "text-[18px]"} font-bold leading-snug tracking-tight`} style={{ color: "var(--ink)" }}>{g.title}</p>
                    <p className="text-[15px] font-normal leading-relaxed mt-2" style={{ color: "var(--ink-soft)" }}>{g.desc}</p>
                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-dashed" style={{ borderColor: "#e3e9e6" }}>
                      <span className="font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>{g.min} MIN READ</span>
                      <span className="font-mono text-[12px] ml-auto font-semibold" style={{ color: "var(--terra)" }}>Read guide &rarr;</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
