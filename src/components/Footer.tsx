"use client";

import Link from "next/link";

interface FooterProps {
  accent?: string;
}

export function Footer({ accent: _accent }: FooterProps) {
  return (
    <footer className="relative" style={{ background: "var(--paper-warm)", color: "var(--ink-soft)", borderTop: "1.5px dashed var(--line)" }}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 pt-12 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="no-underline inline-flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden" style={{ background: "var(--terra)" }}>
                <svg width="16" height="16" viewBox="0 0 120 120" fill="none"><path d="M35 90 Q35 60 55 55 Q75 50 75 35 Q75 20 60 20 Q45 20 45 35 Q45 50 60 55 Q80 62 80 80 Q80 95 65 95 Q50 95 50 80" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none"/><path d="M55 20 L60 12 L65 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              </div>
              <span className="font-extrabold text-[24px] tracking-tight" style={{ color: "var(--ink)" }}>
                travel<span style={{ color: "var(--terra)" }}>boa</span>
              </span>
            </Link>
            <p className="text-[14.5px] font-normal leading-relaxed" style={{ maxWidth: "38ch" }}>
              A one-person trip companion for the Indian Himalaya. Road status, altitude weather, packing lists and guides for pilgrimages and adventures across North India.
            </p>
            <span className="font-caveat text-[22px] mt-4 inline-block -rotate-2" style={{ color: "var(--terra)" }}>written and maintained from Dehradun</span>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-mono text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--pine)" }}>Explore</h4>
            {[
              { label: "All 23 destinations", href: "/destinations" },
              { label: "Topic guides", href: "/guides" },
              { label: "Gear planner", href: "/gear" },
              { label: "Gear reviews", href: "/gear" },
              { label: "Road status", href: "/road-status" },
            ].map(l => (
              <Link key={l.label} href={l.href} className="block text-[14.5px] font-normal py-1 no-underline transition-colors duration-200" style={{ color: "var(--ink-soft)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-soft)")}>{l.label}</Link>
            ))}
          </div>

          {/* Say hello */}
          <div>
            <h4 className="font-mono text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--pine)" }}>Say Hello</h4>
            {[
              { label: "hello@travelboa.com", href: "mailto:hello@travelboa.com" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map(l => (
              <Link key={l.label} href={l.href} className="block text-[14.5px] font-normal py-1 no-underline transition-colors duration-200" style={{ color: "var(--ink-soft)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-soft)")}>{l.label}</Link>
            ))}
          </div>
        </div>

        <div className="pt-4 flex justify-between items-center flex-wrap gap-3 font-mono text-[11.5px]" style={{ borderTop: "1.5px dashed var(--line)", color: "var(--ink-soft)" }}>
          <span>&copy; 2026 TRAVELBOA</span>
          <span>MADE IN DEHRADUN &middot; 640 M ABOVE SEA LEVEL</span>
          <span>SOME LINKS EARN A SMALL COMMISSION &middot; IT NEVER CHANGES MY PICKS</span>
        </div>
      </div>
    </footer>
  );
}
