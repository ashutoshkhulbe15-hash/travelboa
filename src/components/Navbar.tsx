"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  accent: string;
  dark?: boolean;
}

const NAV_LINKS = [
  { label: "Destinations", href: "/destinations" },
  { label: "Road status", href: "/road-status" },
  { label: "Guides", href: "/guides" },
  { label: "Gear", href: "/gear" },
];

export function Navbar({ accent, dark }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const bg = dark ? "rgba(12,10,9,0.95)" : "rgba(255,255,255,0.97)";
  const textColor = dark ? "#f5f5f4" : "#111";
  const pillBorder = dark ? "#333" : "#e8e2d8";
  const pillText = dark ? "#888" : "#888";
  const pillBg = dark ? "#1c1a17" : "white";
  const menuBg = dark ? "#1c1a17" : "white";

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md px-4 sm:px-9 h-14 sm:h-16 flex items-center justify-between transition-colors duration-300" style={{ background: bg }}>
      <Link href="/" className="flex items-center gap-2 sm:gap-2.5 no-underline">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-[9px] flex items-center justify-center overflow-hidden transition-colors duration-300" style={{ background: accent, boxShadow: `0 2px 8px ${accent}50` }}>
          <svg width="18" height="18" viewBox="0 0 120 120" fill="none"><path d="M35 90 Q35 60 55 55 Q75 50 75 35 Q75 20 60 20 Q45 20 45 35 Q45 50 60 55 Q80 62 80 80 Q80 95 65 95 Q50 95 50 80" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none"/><path d="M55 20 L60 12 L65 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
        </div>
        <span className="text-lg sm:text-xl font-extrabold tracking-tight transition-colors" style={{ color: textColor }}>TravelBoa</span>
        <span className="font-caveat text-xs sm:text-sm ml-1 -rotate-2 inline-block transition-colors duration-300 hidden sm:inline" style={{ color: accent }}>your trip companion</span>
      </Link>

      <div className="hidden md:flex gap-2 text-[13px] font-semibold">
        {NAV_LINKS.map((l) => (
          <Link key={l.label} href={l.href} className="px-4 py-[7px] rounded-[10px] border-[1.5px] no-underline transition-all duration-150" style={{ borderColor: pillBorder, color: pillText, background: pillBg, boxShadow: "1px 2px 6px rgba(0,0,0,0.03)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = pillBorder; e.currentTarget.style.color = pillText; }}>
            {l.label}
          </Link>
        ))}
      </div>

      <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="w-5 h-0.5 rounded transition-transform" style={{ background: dark ? "#aaa" : "#555", transform: menuOpen ? "rotate(45deg) translateY(4px)" : "none" }} />
        <div className="w-5 h-0.5 rounded transition-opacity" style={{ background: dark ? "#aaa" : "#555", opacity: menuOpen ? 0 : 1 }} />
        <div className="w-5 h-0.5 rounded transition-transform" style={{ background: dark ? "#aaa" : "#555", transform: menuOpen ? "rotate(-45deg) translateY(-4px)" : "none" }} />
      </button>

      {menuOpen && (
        <div className="absolute top-14 left-0 right-0 py-3 px-4 flex flex-col gap-1 md:hidden border-b transition-colors" style={{ background: menuBg, borderColor: pillBorder, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-semibold no-underline transition-colors" style={{ color: dark ? "#ccc" : "#555" }}>{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
