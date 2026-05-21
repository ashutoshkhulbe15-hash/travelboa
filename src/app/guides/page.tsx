"use client";

import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import { GUIDES } from "@/lib/data";
import Link from "next/link";

export default function GuidesPage() {
  const { themeKey, theme, setTheme, accent, mounted } = useTheme();
  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-white font-sans">
      <ColorPicker themeKey={themeKey} setTheme={setTheme} />
      <Navbar accent={accent} />
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-8 pb-20">
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs text-gray-400">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>→</span>
          <span className="text-gray-700 font-semibold">Guides</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">Guides</h1>
        <p className="text-sm text-gray-400 mb-10">First-hand travel guides written from Dehradun. No AI filler, no copy-paste from other blogs.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GUIDES.map((g, i) => (
            <Link key={i} href={g.href} className="block p-5 sm:p-6 rounded-xl border border-gray-100 no-underline transition-all duration-200 hover:shadow-md hover:-translate-y-1"
              onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "")}>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-wider" style={{ color: accent }}>{g.tag}</span>
                <span className="text-[10px] text-gray-300">·</span>
                <span className="text-[10px] text-gray-300">{g.min} min read</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-gray-900 leading-snug">{g.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer accent={accent} />
    </div>
  );
}
