"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  accent?: string;
  dark?: boolean;
}

const NAV_LINKS = [
  { label: "Destinations", href: "/destinations" },
  { label: "Guides", href: "/guides" },
  { label: "Gear reviews", href: "/gear" },
];

export function Navbar({ accent: _accent, dark: _dark }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b" style={{ background: "rgba(12,26,35,0.82)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderColor: "rgba(255,255,255,0.07)" }}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 flex items-center justify-between" style={{ height: 64 }}>
        <Link href="/" className="flex flex-col leading-none no-underline" aria-label="TravelBoa home">
          <span className="text-white font-extrabold text-[22px] tracking-tight">
            travel<span style={{ color: "var(--terra-bright)" }}>boa</span>
          </span>
          <svg width="82" height="6" viewBox="0 0 92 7" fill="none" aria-hidden="true" className="mt-0.5">
            <path d="M1 4 C 14 -1, 24 8, 38 4 S 64 0, 78 4 90 4 91 4" stroke="var(--terra-bright)" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="text-[15px] font-medium no-underline transition-colors duration-200" style={{ color: "#cfdde2" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#cfdde2")}>
              {l.label}
            </Link>
          ))}
          <Link href="/gear" className="text-[15px] font-semibold no-underline rounded-full px-5 py-2 transition-colors duration-200" style={{ background: "var(--terra)", color: "#fff" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--terra-bright)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--terra)")}>
            Plan my trip
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className="w-5 h-0.5 rounded" style={{ background: "#ccc", transform: menuOpen ? "rotate(45deg) translateY(4px)" : "none", transition: "transform 0.2s" }} />
          <div className="w-5 h-0.5 rounded" style={{ background: "#ccc", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <div className="w-5 h-0.5 rounded" style={{ background: "#ccc", transform: menuOpen ? "rotate(-45deg) translateY(-4px)" : "none", transition: "transform 0.2s" }} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden py-3 px-5 flex flex-col gap-1 border-t" style={{ background: "var(--dusk)", borderColor: "rgba(255,255,255,0.08)" }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium no-underline" style={{ color: "#cfdde2" }}>{l.label}</Link>
          ))}
          <Link href="/gear" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-semibold no-underline mt-1" style={{ background: "var(--terra)", color: "#fff" }}>Plan my trip</Link>
        </div>
      )}
    </nav>
  );
}
