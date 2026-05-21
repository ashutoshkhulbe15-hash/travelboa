"use client";

import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import Link from "next/link";

export function PrivacyPage() {
  const { themeKey, theme, setTheme, accent, mounted } = useTheme();
  if (!mounted) return null;

  const sections = [
    { title: "What we collect", content: "TravelBoa stores your color theme preference and packing checklist progress in your browser's localStorage. This data never leaves your device — we don't have a server-side database and we don't create user accounts. We cannot see, access, or share your localStorage data." },
    { title: "Analytics", content: "We may use Google Analytics (GA4) to understand how visitors use the site — pages visited, time on site, device type, and general geographic region. This data is anonymized and aggregated. No personally identifiable information is collected through analytics." },
    { title: "Cookies", content: "TravelBoa itself does not set cookies. However, third-party services embedded on the site (Google Analytics, affiliate networks) may set their own cookies. You can block these through your browser settings without affecting site functionality." },
    { title: "Affiliate links", content: "Product links on this site (gear recommendations, packing checklists) are affiliate links to Amazon India, Decathlon, Flipkart, Booking.com, and MakeMyTrip. When you click these links and make a purchase, we earn a small commission at no extra cost to you. These affiliate partners may collect data according to their own privacy policies." },
    { title: "Third-party services", content: "We use the following third-party services: Vercel (hosting), OpenWeatherMap (weather data), Google Analytics (analytics), Amazon Associates / Decathlon / Cuelinks (affiliate programs). Each service has its own privacy policy governing data they collect." },
    { title: "Data we don't collect", content: "We do not collect email addresses (unless you voluntarily subscribe to road alerts), names, phone numbers, payment information, location data, or any form of personal identification. We do not sell data to third parties." },
    { title: "Newsletter", content: "If you subscribe to road alerts, your email address is stored solely for sending route updates. You can unsubscribe at any time. We never share your email with third parties or use it for marketing purposes beyond road status notifications." },
    { title: "Children", content: "TravelBoa is not directed at children under 13. We do not knowingly collect information from children." },
    { title: "Changes", content: "We may update this policy as the site evolves. The latest version will always be available at this URL. Last updated: May 2026." },
    { title: "Contact", content: "Questions about this privacy policy? Email us at hello@travelboa.com." },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans">
      <ColorPicker themeKey={themeKey} setTheme={setTheme} />
      <Navbar accent={accent} />
      <div className="relative z-10 max-w-[720px] mx-auto px-4 sm:px-8 pb-20">
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs text-gray-400">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>→</span>
          <span className="text-gray-700 font-semibold">Privacy policy</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">Privacy policy</h1>
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
