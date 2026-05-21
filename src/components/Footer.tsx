"use client";

import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/data";

interface FooterProps {
  accent: string;
}

export function Footer({ accent }: FooterProps) {
  return (
    <footer className="relative z-10 bg-[#fafaf8] border-t border-gray-100 mt-5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-11 pt-8 sm:pt-10 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-2.5 no-underline">
              <div className="w-6 h-6 rounded-md flex items-center justify-center overflow-hidden transition-colors duration-300" style={{ background: accent }}>
                <svg width="14" height="14" viewBox="0 0 120 120" fill="none"><path d="M35 90 Q35 60 55 55 Q75 50 75 35 Q75 20 60 20 Q45 20 45 35 Q45 50 60 55 Q80 62 80 80 Q80 95 65 95 Q50 95 50 80" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none"/><path d="M55 20 L60 12 L65 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </div>
              <span className="text-base font-extrabold text-gray-900">TravelBoa</span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your trip companion for Indian pilgrimage and adventure travel. Built in Dehradun.
            </p>
          </div>

          {([
            ["Pilgrimages", FOOTER_LINKS.pilgrimages],
            ["Adventures", FOOTER_LINKS.adventures],
            ["Tools", FOOTER_LINKS.tools],
          ] as const).map(([title, links]) => (
            <div key={title}>
              <p className="font-mono text-[9px] font-semibold text-gray-400 uppercase tracking-[1.5px] mb-3">{title}</p>
              {links.map((l) => (
                <Link key={l.label} href={l.href} className="block text-xs text-gray-400 py-[3px] no-underline transition-colors duration-150 hover:text-gray-900">
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold text-gray-900">TravelBoa</span>
            <span className="font-caveat text-xs transition-colors duration-300" style={{ color: accent }}>built in Dehradun</span>
          </div>
          <div className="flex gap-3 sm:gap-4 text-[11px] text-gray-300 flex-wrap">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Affiliate disclosure", href: "/about" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-gray-900 transition-colors no-underline text-gray-300">{l.label}</Link>
            ))}
          </div>
        </div>

        <div className="mt-3 text-center sm:text-left">
          <p className="font-mono text-[9px] text-gray-200">Weather: OpenWeatherMap · Roads: PWD, BRO · Gear: Amazon Associates, Decathlon · © 2026 TravelBoa</p>
        </div>
      </div>
    </footer>
  );
}
