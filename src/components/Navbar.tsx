"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  accent: string;
}

const NAV_LINKS = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Road status", href: "/road-status" },
  { label: "Guides", href: "/#guides" },
  { label: "Gear", href: "/#gear" },
];

export function Navbar({ accent }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/[0.97] backdrop-blur-md px-4 sm:px-9 h-14 sm:h-16 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 sm:gap-2.5 no-underline">
        <div
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-[9px] flex items-center justify-center overflow-hidden transition-colors duration-300"
          style={{ background: accent, boxShadow: `0 2px 8px ${accent}50` }}
        >
          <svg width="18" height="18" viewBox="0 0 120 120" fill="none">
            <path d="M35 90 Q35 60 55 55 Q75 50 75 35 Q75 20 60 20 Q45 20 45 35 Q45 50 60 55 Q80 62 80 80 Q80 95 65 95 Q50 95 50 80" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none"/>
            <path d="M55 20 L60 12 L65 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        <span className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">TravelBoa</span>
        <span
          className="font-caveat text-xs sm:text-sm ml-1 -rotate-2 inline-block transition-colors duration-300 hidden sm:inline"
          style={{ color: accent }}
        >
          your trip companion
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-2 text-[13px] font-semibold">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="px-4 py-[7px] rounded-[10px] border-[1.5px] border-[#e8e2d8] text-gray-400 no-underline transition-all duration-150 bg-white"
            style={{ boxShadow: "1px 2px 6px rgba(0,0,0,0.03)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e8e2d8"; e.currentTarget.style.color = ""; }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="w-5 h-0.5 bg-gray-600 rounded transition-transform" style={{ transform: menuOpen ? "rotate(45deg) translateY(4px)" : "none" }} />
        <div className="w-5 h-0.5 bg-gray-600 rounded transition-opacity" style={{ opacity: menuOpen ? 0 : 1 }} />
        <div className="w-5 h-0.5 bg-gray-600 rounded transition-transform" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-4px)" : "none" }} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white border-b border-gray-100 py-3 px-4 flex flex-col gap-1 md:hidden" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 no-underline transition-colors hover:bg-gray-50"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
