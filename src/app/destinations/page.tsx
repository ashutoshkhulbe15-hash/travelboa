"use client";

import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import { DESTINATIONS } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function DestinationsPage() {
  const { themeKey, theme, setTheme, accent, mounted } = useTheme();
  if (!mounted) return null;

  const pilgrimages = DESTINATIONS.filter(d => d.type === "pilgrimage");
  const adventures = DESTINATIONS.filter(d => d.type === "adventure");

  return (
    <div className="relative min-h-screen bg-white font-sans">
      <ColorPicker themeKey={themeKey} setTheme={setTheme} />
      <Navbar accent={accent} />
      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-8 pb-20">
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs text-gray-400">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>→</span>
          <span className="text-gray-700 font-semibold">Destinations</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">All destinations</h1>
        <p className="text-sm text-gray-400 mb-10">Pilgrimages and adventures we cover with full guides, packing lists, and road status.</p>

        {[["🙏 Pilgrimages", pilgrimages], ["🏔️ Adventures", adventures]].map(([title, dests]) => (
          <div key={title as string} className="mb-10">
            <h2 className="text-lg font-extrabold text-gray-900 mb-4">{title as string}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(dests as typeof DESTINATIONS).map(d => (
                <Link key={d.slug} href={`/${d.slug}`} className="group block rounded-xl overflow-hidden border border-gray-100 no-underline transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  <div className="aspect-[16/9] relative" style={{ background: d.grad }}>
                    {d.image && <Image src={d.image} alt={d.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="text-lg font-extrabold text-white">{d.name}</div>
                      <div className="text-xs text-white/60">{d.info}</div>
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/30 text-[11px] font-bold text-white">{d.temp}</div>
                  </div>
                  <div className="p-4">
                    <p className="font-caveat text-sm transition-colors" style={{ color: accent }}>{d.note}</p>
                    <div className="flex gap-2 mt-3">
                      <span className="text-[10px] font-semibold text-gray-400 px-2 py-1 rounded bg-gray-50">{d.type}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer accent={accent} />
    </div>
  );
}
