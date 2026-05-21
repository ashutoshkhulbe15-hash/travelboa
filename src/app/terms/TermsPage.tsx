"use client";

import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import Link from "next/link";

export function TermsPage() {
  const { themeKey, theme, setTheme, accent, mounted } = useTheme();
  if (!mounted) return null;

  const sections = [
    { title: "Use of this site", content: "TravelBoa provides travel information, road status updates, packing checklists, and gear recommendations for Indian pilgrimage and adventure destinations. The site is free to use. By accessing this site, you agree to these terms." },
    { title: "Information accuracy", content: "We make every effort to provide accurate, up-to-date information. However, mountain conditions change rapidly — road status, weather, fuel availability, and prices can shift without notice. Always verify critical information with local authorities (PWD, BRO, police) before starting your journey. TravelBoa is not liable for decisions made based on information on this site." },
    { title: "Not professional advice", content: "Content on TravelBoa is informational, not professional advice. We are not medical professionals — altitude sickness guidance is general information, not a medical diagnosis. Consult a doctor before high-altitude travel. We are not licensed travel agents — we do not book tickets, hotels, or packages." },
    { title: "Affiliate links", content: "Product and service links on this site may be affiliate links. We earn a commission when you purchase through these links at no additional cost to you. Affiliate relationships do not influence our editorial content. We only recommend products we believe are genuinely useful." },
    { title: "User-generated content", content: "TravelBoa does not currently accept user-generated content, reviews, or comments. If this changes in the future, separate terms will apply." },
    { title: "Intellectual property", content: "All original content on TravelBoa — text, design, logo, code — is owned by TravelBoa. You may share links to our pages but may not reproduce, copy, or republish our content without permission. Destination photographs are sourced from Unsplash, Wikimedia Commons, or are original — attribution is provided where required." },
    { title: "Third-party links", content: "This site links to external services (Amazon, Decathlon, government portals, booking platforms). We are not responsible for the content, accuracy, or privacy practices of these external sites." },
    { title: "Limitation of liability", content: "TravelBoa is provided \"as is\" without warranties of any kind. We are not liable for any direct, indirect, or consequential damages arising from your use of this site or reliance on information provided. Travel in mountainous regions carries inherent risks — you travel at your own responsibility." },
    { title: "Changes to terms", content: "We may update these terms at any time. Continued use of the site after changes constitutes acceptance. Last updated: May 2026." },
    { title: "Contact", content: "Questions about these terms? Email us at hello@travelboa.com." },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans">
      <ColorPicker themeKey={themeKey} setTheme={setTheme} />
      <Navbar accent={accent} />
      <div className="relative z-10 max-w-[720px] mx-auto px-4 sm:px-8 pb-20">
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs text-gray-400">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>→</span>
          <span className="text-gray-700 font-semibold">Terms of use</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">Terms of use</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: May 2026</p>
        {sections.map((s, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-base sm:text-lg font-extrabold text-gray-900 mb-2">{s.title}</h2>
            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
      <Footer accent={accent} />
    </div>
  );
}
