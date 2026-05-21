"use client";

import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import Link from "next/link";

export function AboutPage() {
  const { themeKey, theme, setTheme, accent, mounted } = useTheme();
  if (!mounted) return null;

  const sections = [
    {
      title: "Who builds this",
      icon: "📍",
      content: "TravelBoa is built by a solo developer based in Dehradun, Uttarakhand — 3 hours from the Char Dham route and within a day's drive of Spiti, Ladakh, and every major Himalayan destination we cover. This isn't a travel blog run by someone Googling from a city desk. The guides on this site are written from first-hand experience, updated with local knowledge, and maintained by someone who actually drives these roads.",
    },
    {
      title: "What we do differently",
      icon: "🎯",
      content: "Most travel content on the internet is either outdated blog posts or booking-engine pages disguised as guides. TravelBoa is a trip companion — we combine live utility data (road conditions, weather, fuel and ATM availability) with deep editorial guides, interactive packing checklists, and honest gear recommendations. Everything a traveller needs to plan and execute their trip, in one place. No fluff, no AI-generated filler, no stock photos passed off as real.",
    },
    {
      title: "Our editorial standards",
      icon: "✍️",
      items: [
        "All destination guides are written from personal visits or direct local knowledge",
        "We never publish AI-generated content as original writing",
        "Budget figures are verified against current prices, not copied from other blogs",
        "Route information is cross-checked with government sources (PWD, BRO)",
        "Photos are either original or sourced from Wikimedia Commons with proper attribution",
        "We update guides at least once per season — not publish and forget",
        "Every factual claim can be verified against a primary source",
      ],
    },
    {
      title: "Data sources",
      icon: "📡",
      items: [
        "Weather: OpenWeatherMap API (free tier, 30-minute refresh)",
        "Road status Uttarakhand: PWD UK official portal (mis.pwduk.in)",
        "Road status Himachal: HP PWD + BRO official channels",
        "Pass status: BRO announcements + verified local reports",
        "Fuel & ATM: Manual verification + user reports during season",
        "Registration portals: Direct links to official government sites",
      ],
    },
    {
      title: "Affiliate disclosure",
      icon: "💰",
      content: "TravelBoa participates in affiliate programs with Amazon India (Amazon Associates), Decathlon, Flipkart (via Cuelinks), Booking.com, and MakeMyTrip (via EarnKaro/Cuelinks). When you buy a product or book a hotel through our links, we earn a small commission at no extra cost to you. This helps us keep the site free and maintain live data feeds. We only recommend products we would actually use or have tested. Affiliate relationships never influence our editorial content or ratings. If a product is bad, we won't recommend it regardless of commission.",
    },
    {
      title: "What we don't do",
      icon: "🚫",
      items: [
        "We don't sell tour packages or accept paid placements disguised as editorial",
        "We don't fabricate reviews or ratings",
        "We don't use others' photos without permission or attribution",
        "We don't provide medical advice — always consult a doctor for altitude-related concerns",
        "We don't guarantee road status accuracy — conditions change rapidly in mountains. Always verify locally.",
      ],
    },
    {
      title: "Contact",
      icon: "📬",
      content: "Found an error? Road status outdated? Want to suggest a destination? Have feedback? Reach out — we read everything. Email: hello@travelboa.com",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans">
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="opacity-[0.016]"><defs><pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0L0 0 0 48" fill="none" stroke="#888" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>
      <ColorPicker themeKey={themeKey} setTheme={setTheme} />
      <Navbar accent={accent} />

      <div className="relative z-10 max-w-[720px] mx-auto px-8 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs text-gray-400">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>→</span>
          <span className="text-gray-700 font-semibold">About</span>
        </div>

        <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">About TravelBoa</h1>
        <p className="text-sm text-gray-400 mb-10">How we work, where our data comes from, and why you can trust what you read here.</p>

        {sections.map((s, i) => (
          <div key={i} className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{s.icon}</span>
              <h2 className="text-lg font-extrabold text-gray-900">{s.title}</h2>
            </div>
            {s.content && (
              <p className="text-[15px] text-gray-600 leading-relaxed">{s.content}</p>
            )}
            {s.items && (
              <ul className="space-y-2 mt-1">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[14px] text-gray-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-colors duration-300" style={{ background: accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mt-12 p-6 rounded-xl border-2 transition-colors duration-300" style={{ borderColor: accent, background: `${accent}06` }}>
          <p className="font-caveat text-lg transition-colors duration-300" style={{ color: accent }}>
            "I built TravelBoa because I was tired of checking 10 different sites every time I planned a trip from Dehradun. If it helps even one person travel safer and better prepared, it was worth building."
          </p>
          <p className="text-xs text-gray-400 mt-3">— The person behind TravelBoa</p>
        </div>
      </div>

      <Footer accent={accent} />
    </div>
  );
}
