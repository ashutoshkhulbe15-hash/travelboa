"use client";

import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import { GEAR } from "@/lib/data";
import Link from "next/link";

const GEAR_EXTENDED = [
  ...GEAR,
  { ic: "🧤", type: "Riding gloves", name: "Rynox Air GT", price: "₹1,799", link: "Amazon", rot: 0 },
  { ic: "🎒", type: "Day backpack 35L", name: "Quechua NH500", price: "₹2,499", link: "Decathlon", rot: 0 },
  { ic: "🧢", type: "Sun cap UV", name: "Quechua MT500", price: "₹599", link: "Decathlon", rot: 0 },
  { ic: "💡", type: "Headlamp", name: "Forclaz HL100", price: "₹499", link: "Decathlon", rot: 0 },
];

export default function GearPage() {
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
          <span className="text-gray-700 font-semibold">Gear</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">Gear essentials</h1>
        <p className="text-sm text-gray-400 mb-10">Tested picks for mountain travel. Every item is something we&apos;d actually carry. Affiliate links help keep the site free.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GEAR_EXTENDED.map((g, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 transition-all duration-150 hover:shadow-md hover:-translate-y-1"
              onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "")}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{g.ic}</span>
                <div className="flex-1">
                  <p className="font-mono text-[9px] uppercase tracking-wider transition-colors" style={{ color: accent }}>{g.type}</p>
                  <p className="text-base font-bold text-gray-900">{g.name}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-dashed border-gray-100">
                <span className="text-lg font-extrabold text-gray-900">{g.price}</span>
                <span className="text-xs font-semibold cursor-pointer transition-colors" style={{ color: accent }}>Buy on {g.link} →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer accent={accent} />
    </div>
  );
}
