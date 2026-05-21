"use client";

import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import { GUIDES } from "@/lib/data";
import Link from "next/link";

const TAGS = ["All", ...Array.from(new Set(GUIDES.map(g => g.tag)))];

export default function GuidesPage() {
  const { themeKey, theme, setTheme, accent, dark, toggleDark, mounted } = useTheme();
  const [filter, setFilter] = useState("All");

  if (!mounted) return null;

  const bg = dark ? "#0c0a09" : "white";
  const cardBg = dark ? "#1c1a17" : "white";
  const textPrimary = dark ? "#f5f5f4" : "#111";
  const textSecondary = dark ? "#a8a29e" : "#666";
  const textMuted = dark ? "#57534e" : "#ccc";
  const border = dark ? "#292524" : "#f0f0f0";

  const filtered = filter === "All" ? GUIDES : GUIDES.filter(g => g.tag === filter);

  return (
    <div className="relative min-h-screen font-sans transition-colors duration-300" style={{ background: bg }}>
      <ColorPicker themeKey={themeKey} setTheme={setTheme} dark={dark} toggleDark={toggleDark} />
      <Navbar accent={accent} dark={dark} />

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-8 pb-20">
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs" style={{ color: textMuted }}>
          <Link href="/" className="transition-colors hover:opacity-70" style={{ color: textMuted }}>Home</Link>
          <span>→</span>
          <span className="font-semibold" style={{ color: textPrimary }}>Guides</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2 transition-colors" style={{ color: textPrimary }}>Guides</h1>
        <p className="text-sm mb-6 transition-colors" style={{ color: textSecondary }}>Cross-cutting travel knowledge — altitude health, permits, budgets, gear, monsoon safety. Not destination-specific; useful for every trip.</p>

        {/* Tag filters */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {TAGS.map(tag => (
            <button key={tag} onClick={() => setFilter(tag)} className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-150" style={{ background: filter === tag ? accent : "transparent", color: filter === tag ? "white" : textMuted, border: `1.5px solid ${filter === tag ? accent : border}` }}>
              {tag}
            </button>
          ))}
        </div>

        {/* Guide cards */}
        <div className="flex flex-col gap-4">
          {filtered.map((g, i) => (
            <Link key={i} href={g.href} className="block p-5 sm:p-6 rounded-xl no-underline transition-all duration-200 hover:-translate-y-0.5" style={{ background: cardBg, border: `1.5px solid ${border}` }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = border)}>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: accent }}>{g.tag}</span>
                <span className="text-[11px]" style={{ color: textMuted }}>{g.min} min read</span>
              </div>
              <p className="text-base sm:text-lg font-bold leading-snug transition-colors" style={{ color: textPrimary }}>{g.title}</p>
              <p className="text-sm mt-2 leading-relaxed transition-colors" style={{ color: textSecondary }}>{g.desc}</p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">📖</div>
            <p className="text-base font-bold" style={{ color: textPrimary }}>No guides in this category yet</p>
            <p className="text-sm mt-1" style={{ color: textMuted }}>We&apos;re writing more — check back soon</p>
          </div>
        )}
      </div>
      <Footer accent={accent} />
    </div>
  );
}
