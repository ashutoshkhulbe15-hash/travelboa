"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";
import { ColorPicker } from "@/components/ColorPicker";
import { Navbar } from "@/components/Navbar";
import { Polaroid } from "@/components/Polaroid";
import { Footer } from "@/components/Footer";
import { DESTINATIONS, SEARCH_DESTINATIONS, GUIDES, GEAR } from "@/lib/data";

export default function HomePage() {
  const { themeKey, theme, setTheme, accent, dark, toggleDark, mounted } = useTheme();
  const [entered, setEntered] = useState(false);
  const [checks, setChecks] = useState<Record<number, boolean>>({});
  const [hovGuide, setHovGuide] = useState<number | null>(null);
  const [searchVal, setSearchVal] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [searchFilter, setSearchFilter] = useState("all");
  const [selectedDest, setSelectedDest] = useState(0);

  useEffect(() => { setTimeout(() => setEntered(true), 150); }, []);
  if (!mounted) return null;

  const filteredSearch = SEARCH_DESTINATIONS.filter(d => {
    const matchType = searchFilter === "all" || d.type === searchFilter;
    const matchText = searchVal.length === 0 || d.name.toLowerCase().includes(searchVal.toLowerCase());
    return matchType && matchText;
  });

  const dest = DESTINATIONS[selectedDest];
  const w = dest.wx;

  // Dark mode colors
  const bg = dark ? "#0c0a09" : "white";
  const cardBg = dark ? "#1c1a17" : "white";
  const textPrimary = dark ? "#f5f5f4" : "#111";
  const textSecondary = dark ? "#a8a29e" : "#999";
  const textMuted = dark ? "#57534e" : "#ccc";
  const border = dark ? "#292524" : "#f0f0f0";
  const borderLight = dark ? "#1c1a17" : "#f8f8f8";

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden transition-colors duration-300" style={{ background: bg, color: textPrimary }}>
      <ColorPicker themeKey={themeKey} setTheme={setTheme} dark={dark} toggleDark={toggleDark} />
      <Navbar accent={accent} dark={dark} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-11 pb-20">

        {/* ═══ HERO ═══ */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-14 relative min-h-[calc(100vh-100px)] py-10 lg:py-0">
          <div className="flex-1 max-w-[560px] w-full" style={{ opacity: entered ? 1 : 0, transform: entered ? "none" : "translateY(24px)", transition: "all 0.7s cubic-bezier(0.2,0,0,1)" }}>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[68px] font-black leading-[1.0] tracking-[-2px] lg:tracking-[-3px] transition-colors" style={{color:textPrimary}}>Plan your next<br />journey.</h1>
            <svg width="200" height="14" viewBox="0 0 300 16" className="mt-2 ml-0.5 w-[180px] sm:w-[240px] lg:w-[300px]">
              <path d="M3 9 Q60 1 130 9 T290 7" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="500" className="transition-[stroke] duration-300" style={{ animation: entered ? "scribble 1.5s ease-out 0.5s forwards" : "none", strokeDashoffset: 500 }} />
            </svg>
            <p className="text-base lg:text-lg mt-4 lg:mt-5 leading-relaxed max-w-[440px] transition-colors" style={{color:textSecondary}}>Road conditions, altitude weather, packing lists with gear links, and travel guides. Built in Dehradun.</p>
            <div className="flex gap-2 sm:gap-3 mt-6 lg:mt-8 flex-wrap">
              <Link href={`/${dest.slug}`} className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-[15px] font-bold text-white no-underline transition-all duration-150" style={{background:accent,boxShadow:`0 4px 16px ${accent}40`}}>Start planning</Link>
              <Link href="/road-status" className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-[15px] font-bold no-underline transition-all duration-150" style={{color:textSecondary,border:`1.5px solid ${border}`}}>Road status</Link>
            </div>
            <div className="flex gap-2 mt-6 lg:mt-8 flex-wrap">
              {[["📍","Dehradun-based"],["🛣️","Live data"],["📷","Photos"],["🎒","Gear links"]].map(([ic,lb])=>(
                <div key={lb as string} className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-[11px] sm:text-[13px] font-semibold transition-colors" style={{border:`1.5px solid ${border}`,color:textMuted}}><span className="text-xs">{ic}</span>{lb}</div>
              ))}
            </div>
          </div>

          {/* Search notepad */}
          <div className="w-full lg:w-[440px] rounded-xl p-5 sm:p-8 relative lg:shrink-0 transition-colors duration-300" style={{ background: dark ? "#1c1a17" : "#fffef9", boxShadow: dark ? "0 8px 30px rgba(0,0,0,0.3)" : "6px 8px 30px rgba(0,0,0,0.06)", border: dark ? `1px solid #292524` : "none", opacity: entered ? 1 : 0, transition: "all 0.7s cubic-bezier(0.2,0,0,1) 0.15s" }}>
            {!dark && <div className="hidden lg:block absolute top-0 left-9 w-px h-full bg-red-200 opacity-30" />}
            {!dark && <div className="hidden lg:block absolute -top-[7px] left-1/2 -translate-x-1/2 w-[68px] h-[15px] bg-amber-200/30 rounded-sm" />}
            <p className="font-caveat text-xl sm:text-[22px] mb-3 sm:mb-4 relative transition-colors duration-300" style={{color:accent}}>Where are you headed?</p>
            <div className="relative">
              <input value={searchVal} onChange={e=>{setSearchVal(e.target.value);setShowDrop(true)}} onFocus={()=>{setSearchFocus(true);setShowDrop(true)}} onBlur={()=>{setSearchFocus(false);setTimeout(()=>setShowDrop(false),200)}} placeholder="Kedarnath, Spiti, Ladakh..." className="w-full py-3 sm:py-4 border-none outline-none font-sans text-lg sm:text-[22px] font-semibold bg-transparent relative transition-colors duration-300" style={{borderBottom:`2.5px solid ${searchFocus?accent:(dark?'#333':'#e8e2d8')}`,color:textPrimary}} autoComplete="off" />
              {showDrop && (
                <div className="absolute top-full left-0 right-0 lg:left-[-32px] lg:right-[-32px] mt-1.5 rounded-2xl border-[1.5px] overflow-hidden z-30 transition-colors" style={{background:cardBg,borderColor:border,boxShadow:dark?"0 8px 36px rgba(0,0,0,0.4)":"0 8px 36px rgba(0,0,0,0.08)"}}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 p-2 max-h-[240px] overflow-y-auto">
                    {filteredSearch.length === 0 ? (
                      <div className="col-span-full py-5 text-center text-sm" style={{color:textMuted}}>No destinations found</div>
                    ) : filteredSearch.map((d)=>(
                      <Link key={d.slug} href={`/${d.slug}`} className="flex items-center gap-2 px-3 py-2.5 rounded-lg no-underline transition-all duration-100 border-[1.5px] border-transparent" style={{}} 
                        onMouseEnter={e=>{e.currentTarget.style.background=dark?'#292524':'#fafafa';e.currentTarget.style.borderColor=border}}
                        onMouseLeave={e=>{e.currentTarget.style.background='';e.currentTarget.style.borderColor='transparent'}}
                        onClick={()=>{setSearchVal(d.name);setShowDrop(false);const idx=DESTINATIONS.findIndex(dd=>dd.slug===d.slug);if(idx>=0){setSelectedDest(idx);setChecks({})}}}>
                        <div className="w-2 h-2 rounded-full shrink-0" style={{background:d.color}} />
                        <div><div className="text-[13px] font-bold" style={{color:textPrimary}}>{d.name}</div><div className="text-[10px]" style={{color:textMuted}}>{d.info}</div></div>
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-1.5 border-t font-caveat text-xs text-center" style={{background:dark?'#151413':'#fafafa',borderColor:border,color:textMuted}}>tap to explore →</div>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-4 sm:mt-5 relative flex-wrap">
              {[["all","All"],["pilgrimage","🙏 Pilgrimage"],["adventure","🏔️ Adventure"]].map(([k,l])=>(
                <button key={k} onClick={()=>{setSearchFilter(k);setShowDrop(true)}} className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl border-[1.5px] text-xs sm:text-sm font-semibold cursor-pointer font-sans transition-all duration-150" style={{borderColor:searchFilter===k?accent:(dark?'#333':'#e4ddd4'),color:searchFilter===k?accent:textMuted,background:"transparent"}}>{l}</button>
              ))}
            </div>
            <div className="flex gap-0 mt-5 sm:mt-6 pt-3 sm:pt-4 relative" style={{borderTop:`1px solid ${border}`}}>
              {[["5+","Destinations"],["24/7","Road updates"],["30+","Gear picks"]].map(([n,l],i)=>(
                <div key={l} className="flex-1 text-center" style={{borderRight:i<2?`1px solid ${border}`:"none"}}>
                  <div className="text-lg sm:text-xl font-black transition-colors" style={{color:textPrimary}}>{n}</div>
                  <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider mt-0.5 transition-colors" style={{color:textMuted}}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block absolute bottom-4 left-1/2 -translate-x-1/2 text-center" style={{opacity:entered?1:0,transition:"opacity 1s 1.2s"}}>
            <p className="font-caveat text-sm mb-1.5" style={{color:textMuted}}>scroll to explore</p>
            <svg width="24" height="32" viewBox="0 0 24 32" className="mx-auto animate-bounce" style={{animationDuration:"1.5s"}}>
              <path d="M12 4 L12 22" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round" className="transition-[stroke] duration-300" />
              <path d="M6 17 L12 25 L18 17" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="transition-[stroke] duration-300" />
            </svg>
          </div>
        </div>

        {/* ═══ CARDS + WEATHER ═══ */}
        <div className="flex flex-col lg:flex-row gap-5 mt-4 items-start">
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {DESTINATIONS.slice(0, 6).map((d,i)=>(
                <Polaroid key={d.slug} {...d} accent={accent} selected={selectedDest===i} onClick={()=>{setSelectedDest(i);setChecks({})}} />
              ))}
            </div>
            <div className="flex justify-center mt-5 sm:mt-6">
              <Link href="/destinations" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-[1.5px] no-underline text-sm font-bold transition-colors duration-200" style={{borderColor: accent, color: accent}}>
                View all {DESTINATIONS.length} destinations <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[280px] lg:shrink-0 bg-white rounded-2xl border-[1.5px] border-gray-100 overflow-hidden" style={{boxShadow:"4px 6px 22px rgba(0,0,0,0.04)"}}>
            <div className="p-4 sm:p-5 text-center">
              <div className="text-[36px] sm:text-[44px]">{w.icon}</div>
              <div className="text-[34px] sm:text-[42px] font-black text-gray-900 mt-0.5">{w.temp}°C</div>
              <div className="text-sm font-bold text-gray-500">{dest.name}</div>
              <div className="font-mono text-[10px] text-gray-300 mt-1">{w.alt} altitude</div>
              <div className="text-xs text-gray-400 mt-1">{w.cond}</div>
            </div>
            <div className="grid grid-cols-2 border-t border-gray-50">
              {[["Feels like",w.feels+"°C"],["Humidity",w.hum+"%"],["Wind",w.wind+" km/h"],["AQI",w.aqi.toString()],["Sunrise",w.sunrise],["Sunset",w.sunset]].map(([label,value],i)=>(
                <div key={label} className="px-3 sm:px-4 py-2 sm:py-2.5 text-center border-b border-gray-50" style={{borderRight:i%2===0?"1px solid #f8f8f8":"none"}}>
                  <div className="font-mono text-[9px] text-gray-300 uppercase tracking-wider">{label}</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 mt-0.5">{value}{label==="AQI"&&<span className="text-[9px] font-semibold ml-1" style={{color:w.aqiColor}}>{w.aqiLabel}</span>}</div>
                </div>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-gray-50">
              <div className="font-mono text-[9px] font-semibold uppercase tracking-widest mb-2 transition-colors" style={{color:accent}}>3-day forecast</div>
              {w.forecast.map((f:{day:string;icon:string;hi:number;lo:number},i:number)=>(
                <div key={i} className="flex items-center gap-2 py-1">
                  <span className="text-[11px] font-semibold text-gray-500 w-[60px]">{f.day}</span>
                  <span className="text-base w-6 text-center">{f.icon}</span>
                  <span className="font-mono text-[11px] text-gray-400 flex-1 text-right"><span className="font-semibold text-gray-900">{f.hi}°</span> / {f.lo}°</span>
                </div>
              ))}
            </div>
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-50 font-mono text-[8px] text-gray-200 text-center">OpenWeatherMap · updated 30m ago</div>
          </div>
        </div>

        {/* ═══ DASHBOARD ═══ */}
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 mb-5">
            <h2 className="text-lg sm:text-xl font-extrabold text-gray-900">Your {dest.name} dashboard</h2>
            <span className="font-caveat text-sm transition-colors" style={{color:accent}}>updates when you pick a destination ↑</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-start">
            <div className="flex-1 w-full flex flex-col gap-4">
              {/* Road status */}
              <div className="bg-white p-4 sm:p-5 relative" style={{boxShadow:"3px 5px 18px rgba(0,0,0,0.04)"}}>
                <svg width="100%" height="8" className="absolute -top-[7px] left-0 block" preserveAspectRatio="none"><path d="M0 8 L8 3 L16 7 L24 2 L32 6 L40 3 L48 8 L56 2 L64 6 L72 4 L80 7 L88 2 L96 6 L104 3 L112 8 L120 2 L128 5 L136 3 L144 7 L152 4 L160 6 L180 3 L200 7 L220 2 L240 6 L260 3 L280 7 L300 4 L320 6 L340 2 L360 7 L380 3 L400 6 L420 4 L440 7 L460 3 L480 6 L500 4 L520 8 L540 3 L560 8 L580 2 L600 8 L620 3 L640 7" fill="white" /></svg>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-gray-900 uppercase tracking-wider">Road status — {dest.name}</span>
                  <Link href="/road-status" className="font-caveat text-xs ml-auto no-underline transition-colors" style={{color:accent}}>view all →</Link>
                </div>
                {dest.routes.map((r,i)=>(
                  <div key={i} className="flex items-center gap-2 sm:gap-2.5 py-2 px-1 sm:px-2 rounded-md transition-colors hover:bg-gray-50">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{background:r.status==="open"?"#22c55e":r.status==="partial"?"#f59e0b":"#ef4444"}} />
                    <span className="text-xs sm:text-[13px] font-semibold text-gray-900 flex-1">{r.route}</span>
                    <span className="font-mono text-[10px] sm:text-[11px] text-gray-300 hidden sm:inline">{r.note}</span>
                  </div>
                ))}
              </div>
              {/* Quick facts */}
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-100" style={{boxShadow:"3px 5px 14px rgba(0,0,0,0.04)"}}>
                <div className="font-mono text-[9px] font-semibold uppercase tracking-[1.5px] mb-3 transition-colors" style={{color:accent}}>Quick facts — {dest.name}</div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {dest.quickFacts.map((f,i)=>(
                    <div key={i} className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg bg-gray-50">
                      <span className="text-lg sm:text-xl">{f.icon}</span>
                      <div>
                        <div className="text-xs sm:text-[13px] font-bold text-gray-900">{f.value}</div>
                        <div className="text-[9px] sm:text-[10px] text-gray-400">{f.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="w-full lg:w-[280px] lg:shrink-0 flex flex-col gap-4">
              <div className="p-4 sm:p-5 relative transition-colors duration-300 rounded-xl" style={{background:theme.sticky,boxShadow:"3px 5px 16px rgba(0,0,0,0.04)"}}>
                <p className="font-caveat text-base font-bold mb-2 transition-colors duration-300" style={{color:theme.stickyText}}>Pack for {dest.name} ✓</p>
                {dest.packItems.map((item,id)=>(
                  <div key={id} onClick={()=>setChecks(p=>({...p,[id]:!p[id]}))} className="flex items-center gap-2 py-1 cursor-pointer">
                    <div className="w-4 h-4 rounded flex items-center justify-center text-[10px] text-white font-bold shrink-0 transition-all duration-150" style={{border:`2px solid ${checks[id]?'#15803d':'#d4a574'}`,background:checks[id]?"#15803d":"transparent"}}>{checks[id]?"✓":""}</div>
                    <span className="font-caveat text-[15px] transition-all duration-150" style={{color:checks[id]?"#a8a29e":theme.stickyText,textDecoration:checks[id]?"line-through":"none"}}>{item}</span>
                  </div>
                ))}
                <Link href={`/${dest.slug}/packing`} className="font-caveat text-xs block text-right mt-2 no-underline transition-colors" style={{color:accent}}>→ full checklist with buy links</Link>
              </div>
              <div className="bg-white p-4 rounded-xl border-[1.5px] border-red-100" style={{boxShadow:"3px 5px 14px rgba(0,0,0,0.04)"}}>
                <p className="font-mono text-[10px] font-semibold text-red-500 uppercase tracking-[1.5px] mb-2">Emergency — {dest.name}</p>
                {dest.emergency.map(e=>(
                  <div key={e.number} className="flex justify-between py-1.5 text-xs">
                    <span className="text-gray-400">{e.name}</span>
                    <span className="font-mono font-semibold text-gray-900">{e.number}</span>
                  </div>
                ))}
              </div>
              <Link href={`/${dest.slug}`} className="flex items-center gap-3 p-4 rounded-xl border-2 no-underline transition-all duration-200" style={{borderColor:accent}}>
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="text-sm font-extrabold text-gray-900">Explore {dest.name} guide</div>
                  <div className="text-[11px] text-gray-400">Trek, budget, stay, safety →</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ═══ DASHBOARD CTA ═══ */}
        <Link href="/dashboard" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl no-underline mt-10 transition-all duration-200 hover:-translate-y-0.5 group" style={{background:`linear-gradient(135deg, ${accent}08, ${accent}15)`,border:`1.5px solid ${accent}25`}}>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0" style={{background:`${accent}20`}}>🗺️</div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-base sm:text-lg font-extrabold text-gray-900">Create your personal trip dashboard</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Checklists, weather, road status, notes — all in one place. Save it, share it, take it on your trip.</p>
          </div>
          <span className="text-sm font-bold shrink-0 transition-colors" style={{color:accent}}>Get started →</span>
        </Link>

        {/* ═══ GUIDES + GEAR ═══ */}
        <div className="flex flex-col lg:flex-row gap-5 mt-12 items-start">
          <div className="flex-1 w-full">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-lg sm:text-xl font-extrabold text-gray-900">Guides</span>
              <span className="font-caveat text-sm transition-colors duration-300" style={{color:accent}}>first-hand, from Dehradun</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {GUIDES.map((g,i)=>(
                <Link key={i} href={g.href} className="no-underline">
                <div className="bg-white p-4 sm:p-5 border border-gray-100 cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-1 rounded-xl">
                  <div className="flex gap-1.5 mb-2">
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-wider transition-colors duration-300" style={{color:accent}}>{g.tag}</span>
                    <span className="text-[10px] text-gray-200">{g.min}m</span>
                  </div>
                  <p className="text-sm sm:text-[15px] font-bold text-gray-900 leading-snug">{g.title}</p>
                </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[220px] flex flex-col gap-3">
            <p className="font-caveat text-base mb-0.5 transition-colors duration-300" style={{color:accent}}>gear essentials ↓</p>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {GEAR.map((g,i)=>(
              <div key={i} className="bg-white p-3.5 rounded-xl border border-gray-100 cursor-pointer transition-all duration-150 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{g.ic}</span>
                  <div className="flex-1">
                    <p className="font-mono text-[9px] uppercase tracking-wider transition-colors duration-300" style={{color:accent}}>{g.type}</p>
                    <p className="text-sm font-bold text-gray-900">{g.name}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-dashed border-gray-100">
                  <span className="text-base font-extrabold text-gray-900">{g.price}</span>
                  <span className="text-[11px] font-semibold transition-colors duration-300" style={{color:accent}}>{g.link} →</span>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* ═══ BOTTOM ═══ */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-4">
          <Link href={`/${dest.slug}/packing`} className="lg:col-span-2 flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl no-underline transition-all duration-200" style={{background:accent,boxShadow:`0 6px 24px ${accent}30`}}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 flex items-center justify-center text-xl sm:text-2xl shrink-0">🎯</div>
            <div>
              <p className="text-base sm:text-lg font-extrabold text-white">Ready for {dest.name}?</p>
              <p className="text-xs sm:text-sm text-white/60 mt-1">Check your preparedness — registration, gear, bookings →</p>
            </div>
          </Link>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100" style={{boxShadow:"3px 5px 14px rgba(0,0,0,0.04)"}}>
            <p className="font-caveat text-lg mb-1 transition-colors duration-300" style={{color:accent}}>Road alerts ✉️</p>
            <p className="text-[11px] text-gray-400 mb-3">Get notified when routes open, close, or have delays.</p>
            <input placeholder="your@email.com" className="w-full py-2.5 border-b-[1.5px] border-b-gray-100 outline-none text-sm text-gray-900 bg-transparent" />
            <button className="mt-3 w-full py-2.5 rounded-lg text-xs font-bold text-white cursor-pointer transition-colors duration-300" style={{background:accent}}>Subscribe</button>
          </div>
        </div>

        {/* Destination links */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {DESTINATIONS.map((d) => (
            <Link key={d.slug} href={`/${d.slug}`} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white border border-gray-100 no-underline transition-all duration-150 hover:shadow-md"
              onMouseEnter={e => e.currentTarget.style.borderColor = accent}
              onMouseLeave={e => e.currentTarget.style.borderColor = ""}>
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{background: d.color}} />
              <div>
                <div className="text-xs sm:text-sm font-bold text-gray-900">{d.name}</div>
                <div className="text-[9px] sm:text-[10px] text-gray-400 hidden sm:block">{d.info}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer accent={accent} />
    </div>
  );
}
