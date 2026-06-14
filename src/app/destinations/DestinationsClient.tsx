"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DESTINATIONS, SEARCH_DESTINATIONS, ACTIVITIES } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function DestinationsClient() {
  const [searchVal, setSearchVal] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [activity, setActivity] = useState<string | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
    }), { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) els.forEach(el => el.classList.add("on"));
    return () => io.disconnect();
  }, []);

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
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      {/* Breadcrumb */}
      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span style={{ color: "var(--ink)" }}>Destinations</span>
        </div>
      </div>

      {/* Header */}
      <div className="contour-bg py-12 sm:py-16 border-b" style={{ borderColor: "#e3e9e6" }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <p className="kicker mb-3">23 destinations</p>
          <h1 className="text-[clamp(30px,4.5vw,48px)] font-extrabold tracking-tight leading-[1.06]" style={{ color: "var(--ink)" }}>Every trip we cover, all in one place.</h1>
          <p className="text-[17px] font-light leading-relaxed mt-3" style={{ color: "var(--ink-soft)", maxWidth: "56ch" }}>Pilgrimages and adventures across the Indian Himalaya with full guides, packing lists, gear links and road status. Each one written first person from Dehradun.</p>

          {/* Search */}
          <div className="mt-8 relative" style={{ maxWidth: 540 }}>
            <div className="flex items-center rounded-full px-5 py-1" style={{ background: "#fff", border: `2px solid ${searchFocus ? "var(--terra)" : "#e3e9e6"}`, boxShadow: searchFocus ? "0 0 0 4px rgba(194,102,45,0.1)" : "0 4px 20px -8px rgba(28,43,51,0.15)", transition: "border-color 0.2s, box-shadow 0.2s" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9aa8a3" strokeWidth="2.2" strokeLinecap="round" className="shrink-0"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              <input value={searchVal} onChange={e => { setSearchVal(e.target.value); setActivity(null); }} onFocus={() => setSearchFocus(true)} onBlur={() => setSearchFocus(false)}
                placeholder="Search by name, state, altitude..." className="flex-1 border-0 bg-transparent font-sans text-[16px] py-3 px-3 outline-none min-w-0" style={{ color: "var(--ink)" }} autoComplete="off" />
              {searchVal && (
                <button onClick={() => setSearchVal("")} className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold border-0 cursor-pointer" style={{ background: "#eef2ef", color: "var(--ink-soft)" }}>✕</button>
              )}
            </div>
          </div>

          {/* Activity filters */}
          <div className="flex gap-2.5 flex-wrap mt-6">
            {ACTIVITIES.map(a => {
              const isActive = activity === a.key;
              const count = allDests.filter(d => d.activities.includes(a.key)).length;
              return (
                <button key={a.key} onClick={() => { setActivity(isActive ? null : a.key); setSearchVal(""); }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold border-0 cursor-pointer transition-all duration-200"
                  style={{
                    background: isActive ? "var(--terra)" : "#fff",
                    color: isActive ? "#fff" : "var(--ink-soft)",
                    border: `1.5px solid ${isActive ? "var(--terra)" : "#e3e9e6"}`,
                    boxShadow: isActive ? "0 4px 14px rgba(194,102,45,0.3)" : "none",
                  }}>
                  <span>{a.icon}</span> {a.label}
                  <span className="ml-0.5 text-[11px] opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 py-10 sm:py-12">
        {(searchVal || activity) && (
          <div className="flex items-center gap-2.5 mb-6">
            <span className="text-[15px] font-bold" style={{ color: "var(--ink)" }}>{filtered.length} destination{filtered.length !== 1 ? "s" : ""}</span>
            {activity && (
              <span className="text-[12px] font-semibold px-3 py-1 rounded-full flex items-center gap-1" style={{ background: "rgba(194,102,45,0.1)", color: "var(--terra)" }}>
                {ACTIVITIES.find(a => a.key === activity)?.icon} {ACTIVITIES.find(a => a.key === activity)?.label}
                <button onClick={() => setActivity(null)} className="ml-1 font-bold border-0 bg-transparent cursor-pointer" style={{ color: "var(--terra)" }}>✕</button>
              </span>
            )}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🏔️</div>
            <p className="text-[18px] font-bold" style={{ color: "var(--ink)" }}>No destinations found</p>
            <p className="text-[15px] font-light mt-2" style={{ color: "var(--ink-soft)" }}>Try a different search or clear the filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((d, i) => (
              <Link key={d.slug} href={d.hasPage ? `/${d.slug}` : "#"}
                className={`reveal group block rounded-[18px] overflow-hidden no-underline transition-all duration-300 hover:-translate-y-[6px] hover:shadow-2xl ${!d.hasPage ? "opacity-70" : ""}`}
                style={{ border: "1px solid #e3e9e6", background: "#fff" }}>
                <div className="aspect-[16/10] relative overflow-hidden" style={{ background: d.grad }}>
                  {d.image && <Image src={d.image} alt={`${d.name}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:640px) 100vw, 33vw" />}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 30%,rgba(0,0,0,0.55))" }} />
                  <span className="absolute top-3 left-3 font-mono text-[10.5px] tracking-wide uppercase px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.92)", color: "var(--ink)" }}>{d.type}</span>
                  {d.temp && <span className="absolute top-3 right-3 font-mono text-[11px] px-2.5 py-1 rounded-full" style={{ background: "rgba(12,26,35,0.78)", color: "#fff", backdropFilter: "blur(4px)" }}>{d.temp}</span>}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-[20px] font-extrabold text-white tracking-tight">{d.name}</div>
                    <div className="text-[12px] text-white/65 font-mono mt-0.5">{d.info}</div>
                  </div>
                </div>
                <div className="p-4">
                  {d.note && <p className="font-caveat text-[15px] mb-2" style={{ color: "var(--terra)" }}>{d.note}</p>}
                  <div className="flex gap-1.5 flex-wrap">
                    {d.activities.map(a => (
                      <span key={a} className="text-[10px] font-semibold px-2 py-0.5 rounded-md font-mono" style={{ background: "var(--snowfield)", color: "var(--ink-soft)" }}>
                        {ACTIVITIES.find(act => act.key === a)?.icon} {a.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  {!d.hasPage && <p className="text-[11px] font-mono mt-2" style={{ color: "var(--ink-soft)" }}>GUIDE COMING SOON</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
