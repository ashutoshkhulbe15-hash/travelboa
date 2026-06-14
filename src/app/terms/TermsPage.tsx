"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />
      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[760px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span><span style={{ color: "var(--ink)" }}>Terms</span>
        </div>
      </div>
      <div className="max-w-[760px] mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <h1 className="text-[clamp(30px,4vw,42px)] font-extrabold tracking-tight leading-[1.08] mb-6" style={{ color: "var(--ink)" }}>Terms of Use</h1>
        <div className="space-y-5 text-[16px] font-normal leading-[1.8]" style={{ color: "var(--ink)" }}>
          <p>TravelBoa provides travel information based on personal experience and publicly available data. Road conditions, weather, and regulations change frequently. Always verify critical information (road status, permit requirements, temple opening dates) with official sources before traveling.</p>
          <p>Gear recommendations and affiliate links reflect my personal experience. Prices and availability change. I am not responsible for purchasing decisions made based on this content.</p>
          <p>The trip dashboard and packing checklists are planning tools, not safety guarantees. Mountain travel carries inherent risks. You are responsible for your own safety, fitness assessment, and emergency preparedness.</p>
          <p>Content on this site is &copy; 2026 TravelBoa. You may share links and reference information with attribution. Do not reproduce full articles without permission.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
