"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />
      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[760px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span><span style={{ color: "var(--ink)" }}>Contact</span>
        </div>
      </div>
      <div className="max-w-[760px] mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <h1 className="text-[clamp(30px,4vw,42px)] font-extrabold tracking-tight leading-[1.08] mb-6" style={{ color: "var(--ink)" }}>Contact</h1>
        <p className="text-[17px] font-normal leading-[1.8] mb-6" style={{ color: "var(--ink)" }}>Have a question about a destination, spotted an error, or want to share your trip experience? Write to me.</p>
        <a href="mailto:hello@travelboa.com" className="inline-flex items-center gap-3 px-6 py-4 rounded-[18px] no-underline text-[18px] font-bold transition-all hover:-translate-y-0.5" style={{ background: "var(--terra)", color: "#fff" }}>
          ✉️ hello@travelboa.com
        </a>
        <p className="text-[15px] mt-6" style={{ color: "var(--ink-soft)" }}>I read every email and reply to trip questions personally. Based in Dehradun, Uttarakhand.</p>
      </div>
      <Footer />
    </div>
  );
}
