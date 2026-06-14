"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />
      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[760px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span><span style={{ color: "var(--ink)" }}>Privacy</span>
        </div>
      </div>
      <div className="max-w-[760px] mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <h1 className="text-[clamp(30px,4vw,42px)] font-extrabold tracking-tight leading-[1.08] mb-6" style={{ color: "var(--ink)" }}>Privacy Policy</h1>
        <div className="space-y-5 text-[16px] font-normal leading-[1.8]" style={{ color: "var(--ink)" }}>
          <p>TravelBoa uses Google Analytics (GA4) to understand which pages are visited and how people use the site. This data is anonymous and helps me prioritize which destinations and guides to write next.</p>
          <p>The personal trip dashboard stores your checklists, notes, and trip date in your browser&apos;s localStorage. This data never leaves your device unless you explicitly share it using the share link feature, which encodes your dashboard state in the URL.</p>
          <p>Affiliate links to Amazon carry our tracking tag (travelboa-21). Amazon may set cookies on their site when you click these links. This is governed by Amazon&apos;s own privacy policy.</p>
          <p>I do not collect emails, do not run ads, and do not sell any data. If you have questions, write to <a href="mailto:hello@travelboa.com" className="font-semibold no-underline" style={{ color: "var(--terra)" }}>hello@travelboa.com</a>.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
