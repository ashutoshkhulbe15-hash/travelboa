"use client";

import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import Link from "next/link";

export function ContactPage() {
  const { themeKey, theme, setTheme, accent, mounted } = useTheme();
  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-white font-sans">
      <ColorPicker themeKey={themeKey} setTheme={setTheme} />
      <Navbar accent={accent} />
      <div className="relative z-10 max-w-[720px] mx-auto px-4 sm:px-8 pb-20">
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs text-gray-400">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>→</span>
          <span className="text-gray-700 font-semibold">Contact</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">Get in touch</h1>
        <p className="text-sm text-gray-400 mb-10">We read everything. Here&apos;s how to reach us.</p>

        <div className="flex flex-col gap-6">
          {[
            { icon: "📧", title: "Email", desc: "For anything — corrections, suggestions, partnerships, or just to say hello.", value: "hello@travelboa.com", action: "mailto:hello@travelboa.com" },
            { icon: "🐛", title: "Report outdated info", desc: "Found a wrong phone number, outdated price, or incorrect road status? Tell us and we'll fix it within 24 hours.", value: "hello@travelboa.com", action: "mailto:hello@travelboa.com?subject=Outdated%20info%20on%20TravelBoa" },
            { icon: "📍", title: "Suggest a destination", desc: "Want us to cover a destination we haven't added yet? Let us know which one and why.", value: "hello@travelboa.com", action: "mailto:hello@travelboa.com?subject=Destination%20suggestion" },
          ].map((c, i) => (
            <a key={i} href={c.action} className="flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-white border border-gray-100 no-underline transition-all duration-150 hover:shadow-md hover:-translate-y-0.5"
              onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "")}>
              <span className="text-2xl mt-0.5">{c.icon}</span>
              <div>
                <div className="text-base font-extrabold text-gray-900">{c.title}</div>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{c.desc}</p>
                <p className="text-sm font-semibold mt-2 transition-colors" style={{ color: accent }}>{c.value} →</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-gray-50">
          <p className="text-sm text-gray-500 leading-relaxed">
            TravelBoa is built and maintained by a solo developer based in Dehradun, Uttarakhand. Response time is typically within 24–48 hours. For urgent road status issues, please contact PWD or BRO directly — their numbers are on every destination page.
          </p>
        </div>
      </div>
      <Footer accent={accent} />
    </div>
  );
}
