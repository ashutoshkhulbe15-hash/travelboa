"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DESTINATIONS } from "@/lib/data";

/* ─── altitude data for the chart ─── */
const ALTI_DATA = [
  { n: "Rishikesh", alt: 372, type: "River + yoga", slug: "rishikesh" },
  { n: "Vaishno Devi", alt: 1584, type: "Pilgrimage", slug: "vaishno-devi" },
  { n: "Tirthan", alt: 1600, type: "Slow travel", slug: "tirthan-valley" },
  { n: "Manali", alt: 2050, type: "Hill town", slug: "manali" },
  { n: "Shimla", alt: 2276, type: "Hill town", slug: "shimla" },
  { n: "Kheerganga", alt: 2960, type: "Trek", slug: "kasol" },
  { n: "Badrinath", alt: 3300, type: "Pilgrimage", slug: "badrinath" },
  { n: "Ladakh", alt: 3500, type: "Road trip", slug: "ladakh" },
  { n: "Kedarnath", alt: 3583, type: "Pilgrimage trek", slug: "kedarnath" },
  { n: "Spiti", alt: 3650, type: "Road trip", slug: "spiti" },
  { n: "VoF", alt: 3658, type: "Trek", slug: "valley-of-flowers" },
  { n: "Tungnath", alt: 3680, type: "Trek", slug: "chopta" },
  { n: "Yumthang", alt: 3564, type: "Road trip", slug: "lachung" },
  { n: "Khardung La", alt: 5359, type: "High pass", slug: "ladakh" },
].sort((a, b) => a.alt - b.alt);

/* ─── featured destinations for cards ─── */
const FEATURED = [
  { slug: "kedarnath", season: "May-Oct", dur: "4-6 days", hook: "The 16 km climb to the Jyotirlinga. I cover the route, the ponies, the weather windows and the exact shoes that survive the stone path." },
  { slug: "spiti", season: "Jun-Oct", dur: "8-12 days", hook: "India's cold desert. Monasteries, moonscapes and roads that demand respect. My circuit, fuel stops and permit notes inside." },
  { slug: "ladakh", season: "Jun-Sep", dur: "10-15 days", hook: "Leh, Nubra and the high passes. How I plan acclimatization days so Khardung La is a celebration, not a headache." },
  { slug: "valley-of-flowers", season: "Jul-Sep", dur: "4-5 days", hook: "A UNESCO meadow that blooms for eight weeks a year. I keep a bloom calendar so you land in peak colour, not after it." },
  { slug: "chopta", season: "Year-round", dur: "2-3 days", hook: "My favourite weekend escape from Dehradun. The world's highest Shiva temple, a 3.5 km trail and sunrises worth the alarm." },
  { slug: "rishikesh", season: "Sep-Jun", dur: "2-4 days", hook: "Rafting, cafes and the Ganga at dusk. Where I send everyone for their first taste of the hills, one hour from my home." },
];

const GUIDES_LIST = [
  { title: "Reading Himalayan road status before you leave", tag: "ROADS", href: "/guides/monsoon-routes" },
  { title: "Altitude sickness: what it feels like, what to do", tag: "HEALTH", href: "/guides/acclimatize-above-3000m" },
  { title: "Permits and passes for Spiti and Ladakh", tag: "PAPERWORK", href: "/guides/char-dham-epass" },
  { title: "When to go: a season map of North India", tag: "SEASONS", href: "/guides/best-time-char-dham" },
];

const GEAR_LIST = [
  { title: "Trekking shoes that survive Kedarnath's stone path", tag: "FOOTWEAR", href: "/gear" },
  { title: "The down jacket question, answered by budget", tag: "LAYERS", href: "/gear" },
  { title: "Backpacks: 40L is almost always the answer", tag: "PACKS", href: "/gear" },
  { title: "Power banks and offline maps for dead zones", tag: "TECH", href: "/gear" },
];

const TRIP_TYPES = [
  { t: "High-altitude trek", d: "Kedarnath, Tungnath, Kheerganga. Layers, poles and rain cover." },
  { t: "Pilgrimage on foot", d: "Vaishno Devi, Char Dham. Light pack, right shoes, early starts." },
  { t: "Himalayan road trip", d: "Spiti, Ladakh circuits. Spares, permits, offline maps." },
  { t: "Backpacking", d: "Kasol, Tirthan, Rishikesh. One bag, no regrets." },
];

/* ─── search helper ─── */
const ALL_SEARCH = DESTINATIONS.map(d => ({ name: d.name, slug: d.slug, info: d.info, type: d.type }));

export default function HomePage() {
  const [entered, setEntered] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setTimeout(() => setEntered(true), 120); }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
    }), { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) els.forEach(el => el.classList.add("on"));
    return () => io.disconnect();
  }, []);

  // Close suggest on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (searchRef.current && !searchRef.current.contains(e.target as Node)) setShowSuggest(false); };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const filtered = ALL_SEARCH.filter(d => d.name.toLowerCase().includes(searchVal.toLowerCase())).slice(0, 6);

  const goSearch = () => {
    const q = searchVal.trim().toLowerCase();
    const hit = ALL_SEARCH.find(d => d.name.toLowerCase().includes(q));
    if (hit) window.location.href = `/${hit.slug}`;
    else window.location.href = "/destinations";
  };

  // Find destination data from DESTINATIONS
  const getDest = (slug: string) => DESTINATIONS.find(d => d.slug === slug);

  return (
    <div className="min-h-screen" style={{ background: "var(--dusk-deep)" }}>

      {/* ═══ TICKER ═══ */}
      <div className="overflow-hidden whitespace-nowrap font-mono text-[12px] tracking-wide py-[7px]" style={{ background: "var(--terra)", color: "#fff" }}>
        <div className="inline-block" style={{ animation: "tick 38s linear infinite" }}>
          {[...Array(2)].map((_, rep) => (
            <span key={rep}>
              <span className="mx-6"><b>TODAY FROM DEHRADUN</b> &middot; 06:40 AM</span>
              <span className="mx-6"><span className="inline-block w-[7px] h-[7px] rounded-full mr-1.5 align-[1px]" style={{ background: "#7be3a2" }} />Kedarnath yatra: OPEN</span>
              <span className="mx-6"><span className="inline-block w-[7px] h-[7px] rounded-full mr-1.5 align-[1px]" style={{ background: "#7be3a2" }} />NH-7 Rishikesh to Joshimath: CLEAR</span>
              <span className="mx-6"><span className="inline-block w-[7px] h-[7px] rounded-full mr-1.5 align-[1px]" style={{ background: "var(--gold)" }} />Manali-Kaza via Kunzum La: CHECK BEFORE YOU GO</span>
              <span className="mx-6"><b>23 DESTINATIONS</b> &middot; 7 GUIDES &middot; 14 GEAR REVIEWS</span>
            </span>
          ))}
        </div>
      </div>

      <Navbar />

      {/* ═══ HERO ═══ */}
      <header className="relative overflow-hidden flex items-start" style={{ minHeight: "94vh", background: "linear-gradient(180deg,#0a1620 0%,#10222e 38%,#27414e 64%,#5d4a3c 86%,#7a4a2c 100%)" }}>
        {/* Scene */}
        <div className="absolute inset-0 z-[1]" aria-hidden="true">
          <svg viewBox="0 0 1440 810" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0a1620" /><stop offset=".45" stopColor="#16303d" /><stop offset=".72" stopColor="#4a5a58" /><stop offset=".88" stopColor="#b06a3a" /><stop offset="1" stopColor="#d98a4e" /></linearGradient>
              <radialGradient id="sun" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#ffd9a8" /><stop offset=".55" stopColor="#e8945a" /><stop offset="1" stopColor="#e8945a" stopOpacity="0" /></radialGradient>
            </defs>
            <rect width="1440" height="810" fill="url(#sky)" />
            <g fill="#fff">{[120,300,480,640,820,980,1120,1290].map((cx,i)=>(<circle key={i} cx={cx} cy={[80,150,60,180,90,160,70,140][i]} r={[1.4,1,1.6,1,1.3,1,1.5,1.1][i]} style={{animation:`twinkle 4s ease-in-out ${i*0.4}s infinite`}} />))}</g>
            <circle cx="1010" cy="560" r="190" fill="url(#sun)" opacity=".85" />
            <circle cx="1010" cy="560" r="52" fill="#ffd9a8" />
            <path d="M0 520 L120 430 180 470 290 380 370 440 470 360 560 450 660 370 760 455 870 385 960 460 1070 380 1170 450 1280 395 1370 455 1440 420 1440 810 0 810Z" fill="#5c7484" />
            <path d="M270 397 L290 380 318 404Z M448 378 L470 360 498 386Z M638 388 L660 370 688 396Z M1048 398 L1070 380 1098 406Z" fill="#e9f1f4" opacity=".9" />
            <path d="M0 600 L140 520 250 575 380 500 520 585 650 515 790 590 930 525 1080 595 1220 530 1340 590 1440 545 1440 810 0 810Z" fill="#33495a" />
            <path d="M0 690 L170 615 320 670 470 605 640 680 800 620 960 685 1130 625 1290 680 1440 635 1440 810 0 810Z" fill="#1d3340" />
            <path d="M0 760 L220 700 460 755 720 695 980 760 1230 700 1440 750 1440 810 0 810Z" fill="#0e1d27" />
          </svg>
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(180deg, rgba(10,22,32,0.85) 0%, rgba(10,22,32,0.6) 35%, rgba(10,22,32,0.15) 55%, transparent 70%)" }} />

        {/* Handwritten note */}
        <div className="absolute right-[6%] bottom-[17%] z-[3] font-caveat text-[25px] text-center hidden lg:block" style={{ color: "#ffe9d6", maxWidth: 240, transform: "rotate(-4deg)" }}>
          yes, I check the roads<br />every single morning
          <svg width="54" height="40" viewBox="0 0 54 40" fill="none" className="mx-auto mt-1.5"><path d="M44 4C30 14 22 22 12 34M12 34l11-4M12 34l2-12" stroke="#ffe9d6" strokeWidth="2.2" strokeLinecap="round" /></svg>
        </div>

        <div className="relative z-[2] w-full max-w-[1180px] mx-auto px-5 sm:px-6 pt-16 sm:pt-20 lg:pt-24 pb-32 sm:pb-40" style={{ opacity: entered ? 1 : 0, transform: entered ? "none" : "translateY(20px)", transition: "all 0.7s cubic-bezier(0.2,0,0,1)" }}>
          <p className="font-mono text-[12px] tracking-[0.22em] uppercase mb-5" style={{ color: "var(--terra-soft)" }}>A trip companion for the Indian Himalaya</p>
          <h1 className="text-white text-[clamp(40px,6.4vw,76px)] font-extrabold tracking-tighter leading-[1.04]" style={{ maxWidth: "13ch" }}>
            Know the <span style={{ color: "var(--terra-bright)" }}>mountain</span> before you meet it.
          </h1>
          <p className="text-[clamp(16px,1.7vw,19px)] font-light leading-relaxed mt-6 mb-9" style={{ color: "#c8d8de", maxWidth: "54ch" }}>
            I live in Dehradun, at the foot of the hills you are planning to visit. TravelBoa is my notebook turned into a website: <b className="font-semibold text-white">road conditions, altitude weather, packing checklists and honest gear picks</b> for 23 pilgrimages and treks across North India.
          </p>

          {/* Search */}
          <div className="relative" style={{ maxWidth: 620 }} ref={searchRef}>
            <div className="flex items-center rounded-full px-5 py-1.5 sm:py-2" style={{ background: "rgba(255,255,255,0.97)", boxShadow: "0 24px 60px -18px rgba(0,0,0,0.55)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9aa8a3" strokeWidth="2.2" strokeLinecap="round" className="shrink-0"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              <input value={searchVal} onChange={e => { setSearchVal(e.target.value); setShowSuggest(true); }} onFocus={() => setShowSuggest(true)}
                placeholder="Where are you headed? Try Kedarnath, Spiti, Ladakh..." className="flex-1 border-0 bg-transparent font-sans text-[17px] py-3 px-3.5 outline-none min-w-0" style={{ color: "var(--ink)" }} autoComplete="off" aria-label="Search destinations"
                onKeyDown={e => { if (e.key === "Enter") goSearch(); }} />
              <button onClick={goSearch} className="shrink-0 border-0 cursor-pointer rounded-full px-5 sm:px-6 py-3 font-semibold text-[15px] text-white transition-colors" style={{ background: "var(--terra)", fontFamily: "var(--font-sans)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--terra-bright)")} onMouseLeave={e => (e.currentTarget.style.background = "var(--terra)")}>Search</button>
            </div>
            {showSuggest && searchVal.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2.5 rounded-2xl overflow-hidden z-30" style={{ background: "#fff", boxShadow: "0 30px 70px -20px rgba(0,0,0,0.5)" }}>
                {filtered.map(d => (
                  <Link key={d.slug} href={`/${d.slug}`} className="flex justify-between items-center px-5 py-3 text-[15px] no-underline border-b transition-colors hover:bg-[#f6efe8]" style={{ borderColor: "#eef1f0", color: "var(--ink)" }}>
                    {d.name}
                    <span className="font-mono text-[11px]" style={{ color: "var(--ink-soft)" }}>{d.info}</span>
                  </Link>
                ))}
                <Link href="/destinations" className="flex justify-center items-center px-5 py-3 text-[15px] font-semibold no-underline" style={{ color: "var(--terra)" }}>See all 23 destinations &rarr;</Link>
              </div>
            )}
          </div>

          {/* Quick chips */}
          <div className="flex gap-2.5 flex-wrap mt-5">
            {["kedarnath","spiti","valley-of-flowers","ladakh","vaishno-devi"].map(s => {
              const d = getDest(s);
              return d ? (
                <Link key={s} href={`/${s}`} className="text-[13.5px] rounded-full px-4 py-[7px] no-underline transition-all duration-200" style={{ color: "#dce8eb", border: "1px solid rgba(255,255,255,0.28)", backdropFilter: "blur(3px)" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)"; }}>
                  {d.name}
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </header>

      {/* ═══ ALTITUDE INDEX ═══ */}
      <section className="contour-bg py-20 sm:py-24">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="reveal">
            <p className="kicker mb-3">The Altitude Index</p>
            <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold tracking-tight leading-[1.08]" style={{ color: "var(--ink)" }}>Every trip, plotted by how high it takes you.</h2>
            <p className="text-[17px] font-light leading-relaxed mt-3.5" style={{ color: "var(--ink-soft)", maxWidth: "60ch" }}>Altitude decides your weather, your gear and your headache. Anything above 3,500 m means I plan a rest day, and so should you.</p>
          </div>
          <div className="reveal bg-white border rounded-3xl p-5 sm:p-8 mt-9 relative" style={{ borderColor: "#e3e9e6", boxShadow: "0 30px 60px -40px rgba(28,43,51,0.35)" }}>
            <span className="font-caveat text-[23px] absolute -top-4 right-7 hidden sm:block" style={{ color: "var(--terra)", transform: "rotate(3deg)" }}>this is where AMS starts &#8600;</span>
            <AltitudeChart />
            <div className="flex gap-5 sm:gap-7 flex-wrap mt-1.5 pt-3.5 border-t border-dashed" style={{ borderColor: "#dde4e1" }}>
              {[["#dcebe2","BELOW 2,500 M","BREATHE EASY"],["#f3e6cf","2,500-3,500 M","GO SLOW"],["#f2d8c4","ABOVE 3,500 M","AMS TERRITORY"]].map(([c,a,b])=>(
                <span key={a} className="font-mono text-[11.5px] flex items-center gap-2" style={{ color: "var(--ink-soft)" }}>
                  <span className="w-3.5 h-3.5 rounded shrink-0" style={{ background: c }} />{a} &middot; {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DESTINATIONS ═══ */}
      <section className="py-20 sm:py-24" style={{ background: "var(--snowfield)" }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="reveal">
            <p className="kicker mb-3">Where to next</p>
            <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold tracking-tight leading-[1.08]" style={{ color: "var(--ink)" }}>Guides written from the ground, not from a desk.</h2>
            <p className="text-[17px] font-light leading-relaxed mt-3.5" style={{ color: "var(--ink-soft)", maxWidth: "60ch" }}>Each guide covers the route, the season, the budget and the exact packing list. First person, because I have done these trips or I am next in line to.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {FEATURED.map(f => {
              const d = getDest(f.slug);
              if (!d) return null;
              return (
                <Link key={f.slug} href={`/${f.slug}`} className="reveal group bg-white rounded-[18px] overflow-hidden border no-underline flex flex-col transition-all duration-300 hover:-translate-y-[7px] hover:shadow-2xl" style={{ borderColor: "#e3e9e6" }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                    <Image src={`/${f.slug === "valley-of-flowers" ? "valley-of-flowers" : f.slug}.jpg`} alt={d.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.45))" }} />
                    <span className="absolute top-3.5 left-3.5 font-mono text-[10.5px] tracking-wide uppercase px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.92)", color: "var(--ink)" }}>{d.type}</span>
                    <span className="absolute top-3.5 right-3.5 font-mono text-[11.5px] px-3 py-1 rounded-full" style={{ background: "rgba(12,26,35,0.78)", color: "#fff", backdropFilter: "blur(4px)" }}>&#9650; {d.info.split("·")[0].trim()}</span>
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <h3 className="text-[21px] font-bold tracking-tight" style={{ color: "var(--ink)" }}>{d.name}</h3>
                    <p className="text-[14.5px] font-light leading-relaxed flex-1" style={{ color: "var(--ink-soft)" }}>{f.hook}</p>
                    <div className="flex gap-4 font-mono text-[11.5px] pt-3 border-t border-dashed" style={{ color: "var(--ink-soft)", borderColor: "#e3e9e6" }}>
                      <span>{f.season}</span>
                      <span>{f.dur}</span>
                    </div>
                    <span className="text-[14px] font-semibold mt-1 inline-flex items-center gap-1.5 transition-[gap] duration-200 group-hover:gap-3" style={{ color: "var(--terra)" }}>
                      Read the guide <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center mt-10 reveal">
            <Link href="/destinations" className="inline-flex items-center gap-2.5 border-2 px-7 py-3.5 rounded-full text-[16px] font-semibold no-underline transition-all duration-200 hover:text-white" style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "var(--ink)"; }}>
              View all 23 destinations <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PLANNER BAND ═══ */}
      <section className="py-20 sm:py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,var(--pine-deep) 0%,var(--pine) 60%,#2a5a3f 100%)", color: "#fff" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='420'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.06' stroke-width='1.2'%3E%3Cpath d='M0 90Q105 40 210 90T420 90'/%3E%3Cpath d='M0 170Q105 120 210 170T420 170'/%3E%3Cpath d='M0 250Q105 200 210 250T420 250'/%3E%3Cpath d='M0 330Q105 280 210 330T420 330'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative z-[2] max-w-[1180px] mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 items-center">
          <div className="reveal">
            <p className="kicker mb-3" style={{ color: "var(--terra-soft)" }}>The Gear Planner</p>
            <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold tracking-tight leading-[1.08] text-white">Tell me the trip.<br />I will pack the bag.</h2>
            <p className="text-[17px] font-light leading-relaxed mt-4" style={{ color: "#cfe4d6", maxWidth: "48ch" }}>Pick your trip type and get a checklist built for it, with the exact gear I trust and links to buy it. Tick items off as you pack. Share the list with your trip group and your ticks travel with the link.</p>
            <Link href="/gear" className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[16px] font-bold text-white no-underline mt-7 transition-all duration-200 hover:-translate-y-0.5" style={{ background: "var(--terra)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--terra-bright)")} onMouseLeave={e => (e.currentTarget.style.background = "var(--terra)")}>
              Open the gear planner <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </Link>
            <br /><span className="font-caveat text-[24px] mt-4 inline-block -rotate-2" style={{ color: "#ffe9d6" }}>the checklist remembers what you tick</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 reveal">
            {TRIP_TYPES.map(tt => (
              <Link key={tt.t} href="/gear" className="rounded-2xl p-5 no-underline text-white transition-all duration-200 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.18)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; }}>
                <span className="block text-[16.5px] font-bold mb-1.5">{tt.t}</span>
                <span className="block text-[13px] font-light leading-relaxed" style={{ color: "#bcd8c5" }}>{tt.d}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GUIDES & GEAR ═══ */}
      <section className="contour-bg py-20 sm:py-24">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="reveal">
            <p className="kicker mb-3">Topic guides</p>
            <h2 className="text-[clamp(26px,3vw,34px)] font-extrabold tracking-tight leading-[1.12]" style={{ color: "var(--ink)" }}>Guides I keep updating</h2>
            <div className="mt-6 border-t-2 flex flex-col" style={{ borderColor: "var(--ink)" }}>
              {GUIDES_LIST.map((g, i) => (
                <Link key={i} href={g.href} className="flex items-baseline gap-4 py-4 border-b text-[16.5px] font-medium no-underline transition-all duration-200 hover:pl-3.5 hover:bg-white" style={{ borderColor: "#e0e7e3", color: "var(--ink)" }}>
                  <span className="font-mono text-[11.5px] shrink-0" style={{ color: "var(--terra)" }}>G&middot;0{i + 1}</span>
                  <span className="flex-1">{g.title}</span>
                  <span className="font-mono text-[11px] shrink-0 hidden sm:block" style={{ color: "var(--ink-soft)" }}>{g.tag}</span>
                </Link>
              ))}
            </div>
            <Link href="/guides" className="inline-flex items-center gap-2 mt-5 text-[15px] font-semibold no-underline" style={{ color: "var(--terra)" }}>
              All 7 topic guides <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </Link>
          </div>
          <div className="reveal">
            <p className="kicker mb-3">Gear reviews</p>
            <h2 className="text-[clamp(26px,3vw,34px)] font-extrabold tracking-tight leading-[1.12]" style={{ color: "var(--ink)" }}>Gear I actually use</h2>
            <div className="mt-6 border-t-2 flex flex-col" style={{ borderColor: "var(--ink)" }}>
              {GEAR_LIST.map((g, i) => (
                <Link key={i} href={g.href} className="flex items-baseline gap-4 py-4 border-b text-[16.5px] font-medium no-underline transition-all duration-200 hover:pl-3.5 hover:bg-white" style={{ borderColor: "#e0e7e3", color: "var(--ink)" }}>
                  <span className="font-mono text-[11.5px] shrink-0" style={{ color: "var(--terra)" }}>R&middot;0{i + 1}</span>
                  <span className="flex-1">{g.title}</span>
                  <span className="font-mono text-[11px] shrink-0 hidden sm:block" style={{ color: "var(--ink-soft)" }}>{g.tag}</span>
                </Link>
              ))}
            </div>
            <Link href="/gear" className="inline-flex items-center gap-2 mt-5 text-[15px] font-semibold no-underline" style={{ color: "var(--terra)" }}>
              All 14 gear reviews <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ═══ ALTITUDE CHART ═══ */
function AltitudeChart() {
  const W = 1040, H = 380, padL = 58, padR = 26, padT = 32, padB = 50;
  const maxAlt = 5600;
  const pts = ALTI_DATA;
  const x = (i: number) => padL + (i / (pts.length - 1)) * (W - padL - padR);
  const y = (a: number) => padT + (1 - a / maxAlt) * (H - padT - padB);

  const zones = [
    { from: 0, to: 2500, c: "#dcebe2" },
    { from: 2500, to: 3500, c: "#f3e6cf" },
    { from: 3500, to: maxAlt, c: "#f2d8c4" },
  ];

  const ridgePath = `M ${padL} ${y(0)} ${pts.map((p, i) => `L ${x(i)} ${y(p.alt)}`).join(" ")} L ${W - padR} ${y(0)} Z`;
  const linePath = pts.map((p, i) => `${i ? "L" : "M"} ${x(i)} ${y(p.alt)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Altitude chart of destinations">
      {zones.map(z => (
        <rect key={z.from} x={padL} y={y(z.to)} width={W - padL - padR} height={y(z.from) - y(z.to)} fill={z.c} rx="6" />
      ))}
      {[1000, 2000, 3000, 4000, 5000].map(a => (
        <g key={a}>
          <line x1={padL} x2={W - padR} y1={y(a)} y2={y(a)} stroke="var(--ink)" strokeOpacity=".09" strokeDasharray="3 5" />
          <text x={padL - 8} y={y(a) + 4} textAnchor="end" fontFamily="IBM Plex Mono" fontSize="11" fill="var(--ink-soft)">{a / 1000}k m</text>
        </g>
      ))}
      <path d={ridgePath} fill="var(--terra)" fillOpacity=".09" />
      <path d={linePath} fill="none" stroke="var(--terra)" strokeWidth="2" strokeOpacity=".5" />
      {pts.map((p, i) => (
        <Link key={i} href={`/${p.slug}`}>
          <g className="cursor-pointer group">
            <circle cx={x(i)} cy={y(p.alt)} r="13" fill="transparent" />
            <circle cx={x(i)} cy={y(p.alt)} r="6" fill="var(--terra)" stroke="#fff" strokeWidth="2.5" />
            <text x={x(i)} y={y(p.alt) + (i % 2 === 0 ? -16 : 26)} textAnchor="middle" fontFamily="Outfit" fontWeight="600" fontSize="11.5" fill="var(--ink)">{p.n}</text>
          </g>
        </Link>
      ))}
      <text x={W - padR} y={H - 10} textAnchor="end" fontFamily="IBM Plex Mono" fontSize="11" fill="var(--ink-soft)">SORTED LOW TO HIGH &rarr;</text>
    </svg>
  );
}
