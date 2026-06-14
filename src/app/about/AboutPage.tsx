"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />
      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[760px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span><span style={{ color: "var(--ink)" }}>About</span>
        </div>
      </div>
      <div className="max-w-[760px] mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <h1 className="text-[clamp(30px,4vw,42px)] font-extrabold tracking-tight leading-[1.08] mb-6" style={{ color: "var(--ink)" }}>About TravelBoa</h1>
        <div className="space-y-5 text-[17px] font-normal leading-[1.8]" style={{ color: "var(--ink)" }}>
          <p>I am a solo traveler based in <b className="font-semibold">Dehradun, Uttarakhand</b>, at the foot of the Himalaya. TravelBoa started as notes I kept for myself before every trek: what to pack, which roads are open, what the weather actually feels like at 3,500 metres. Friends started asking for the same notes, so I turned them into a website.</p>
          <p>Everything here is written from first-hand experience or from conversations with people who run the routes. I check road conditions every morning from Dehradun. The gear reviews link to products I have used on real treks. The packing lists come from bags I have packed, not from generic templates.</p>
          <p>TravelBoa covers <b className="font-semibold">23 destinations</b> across Uttarakhand, Himachal Pradesh, Jammu &amp; Kashmir, Ladakh, and Sikkim, with 7 topic guides and 14 gear reviews. The site is built with Next.js and deployed on Vercel.</p>
          <div className="bg-white p-6 rounded-[18px] border mt-8" style={{ borderColor: "#e3e9e6" }}>
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--ink)" }}>Affiliate disclosure</h2>
            <p className="text-[16px] font-normal leading-[1.75]" style={{ color: "var(--ink-soft)" }}>Some gear links on this site are Amazon Associates affiliate links (tracking ID: travelboa-21). If you buy through them, I earn a small commission at no extra cost to you. This never changes my recommendations. I link to products I have actually used and trust. If something is not worth buying, I say so.</p>
          </div>
          <div className="mt-8">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--ink)" }}>Get in touch</h2>
            <p>Write to me at <a href="mailto:hello@travelboa.com" className="font-semibold no-underline" style={{ color: "var(--terra)" }}>hello@travelboa.com</a>. I read every email and reply to trip questions personally.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
