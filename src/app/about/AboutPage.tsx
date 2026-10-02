"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

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
      <div className="max-w-[900px] mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-8 items-center mb-12">
          <div>
            <p className="kicker mb-3">Nainital roots · Uttarakhand perspective</p>
            <h1 className="text-[clamp(34px,5vw,52px)] font-extrabold tracking-tight leading-[1.05] mb-5" style={{ color: "var(--ink)" }}>Travel advice should tell you what was seen, what was sourced, and when it was checked.</h1>
            <p className="text-[18px] leading-[1.8]" style={{ color: "var(--ink-soft)" }}>I am Ash, the person behind TravelBoa. I was born in Nainital and I am based in Dehradun. That Uttarakhand connection does not make every claim automatically correct; it gives me useful regional context and a responsibility to check the details travellers depend on.</p>
          </div>
          <figure className="m-0 max-w-[360px] md:max-w-none mx-auto">
            <div className="relative aspect-square overflow-hidden rounded-[22px]" style={{ border: "1px solid var(--line)" }}>
              <Image src="/ash-author.jpg" alt="Portrait of Ash, founder and editor of TravelBoa" fill className="object-cover" sizes="(max-width: 768px) 360px, 360px" priority />
            </div>
            <figcaption className="font-mono text-[11px] mt-2" style={{ color: "var(--ink-soft)" }}>ASH · FOUNDER AND EDITOR, TRAVELBOA</figcaption>
          </figure>
        </div>

        <div className="space-y-6 text-[17px] font-normal leading-[1.8]" style={{ color: "var(--ink)" }}>
          <p>TravelBoa began as practical notes: the last dependable ATM, the permit that actually applies, the road section that changes after rain, the layer that earns its place in a small backpack. The site is now being rebuilt around that original purpose. It is not meant to be an encyclopaedia of the Himalaya or a stream of articles written only because a keyword exists.</p>
          <p>Some pages draw on personal travel and regional familiarity. Others rely on official notices, local operators, government portals and subject-matter experts. Each updated guide now distinguishes those sources instead of presenting every sentence as a personal observation. When a rule or road condition can change, the page should show when it was checked and where the answer came from.</p>

          <section className="mt-10" aria-labelledby="nainital-roots-heading">
            <div className="mb-5">
              <p className="kicker mb-2">The home ground</p>
              <h2 id="nainital-roots-heading" className="text-[26px] sm:text-[30px] font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>Nainital is context, not a borrowed credential.</h2>
              <p className="text-[16px] leading-[1.75] mt-3" style={{ color: "var(--ink-soft)" }}>These are photographs from Ash&apos;s own Nainital collection. They establish a real connection to the place; they do not claim that hometown familiarity replaces checking current prices, access rules, road conditions or public-safety information.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <figure className="m-0 sm:col-span-2 overflow-hidden rounded-[20px] bg-white border" style={{ borderColor: "var(--line)" }}>
                <div className="relative aspect-[16/8]">
                  <Image src="/nainital-lake-evening-original.png" alt="Naini Lake after sunset with town lights reflected in the water and low clouds over the hillside" fill sizes="(max-width: 900px) 100vw, 900px" className="object-cover" />
                </div>
                <figcaption className="px-4 py-3 text-[13px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>Naini Lake after sunset, with town lights reflected across the water. Image provided by Ash.</figcaption>
              </figure>
              <figure className="m-0 overflow-hidden rounded-[20px] bg-white border" style={{ borderColor: "var(--line)" }}>
                <div className="relative aspect-[4/3]">
                  <Image src="/nainital-lake-day-original.png" alt="Wide daytime view across Naini Lake and the forested slopes of Nainital" fill sizes="(max-width: 640px) 100vw, 440px" className="object-cover" />
                </div>
                <figcaption className="px-4 py-3 text-[13px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>A clear daytime view across the lake. Image provided by Ash.</figcaption>
              </figure>
              <figure className="m-0 overflow-hidden rounded-[20px] bg-white border" style={{ borderColor: "var(--line)" }}>
                <div className="relative aspect-[4/3]">
                  <Image src="/nainital-lake-mist-original.png" alt="Mist descending over the forested hillside above Naini Lake while boats cross the water" fill sizes="(max-width: 640px) 100vw, 440px" className="object-cover" />
                </div>
                <figcaption className="px-4 py-3 text-[13px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>Mist descending over the wooded hillside and lake. Image provided by Ash.</figcaption>
              </figure>
            </div>
          </section>

          <section className="mt-10">
            <p className="kicker mb-3">How a guide is made</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["01", "Start with the traveller's decision", "The page begins with the question that changes a plan: access, timing, permit, route, cost or safety."],
                ["02", "Check primary sources", "Government portals, temple committees, forest departments and district notices take priority over copied travel blogs."],
                ["03", "Add ground context", "Personal observations and named local input explain what an official notice cannot: queues, surfaces, weak signals and practical trade-offs."],
                ["04", "Date and correct it", "Changing claims carry a verification date. Material corrections are recorded instead of quietly overwritten."],
              ].map(([n, title, copy]) => (
                <div key={n} className="bg-white rounded-[18px] p-5" style={{ border: "1px solid var(--line)" }}>
                  <span className="font-mono text-[11px] font-bold" style={{ color: "var(--terra)" }}>{n}</span>
                  <h2 className="text-[19px] font-bold mt-2 mb-2" style={{ color: "var(--ink)" }}>{title}</h2>
                  <p className="text-[15.5px] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-6 sm:p-7 rounded-[18px] border mt-10" style={{ borderColor: "#e3e9e6" }}>
            <h2 className="text-[22px] font-bold mb-3" style={{ color: "var(--ink)" }}>What “first-hand” means here</h2>
            <p className="text-[16px] leading-[1.75]" style={{ color: "var(--ink-soft)" }}>TravelBoa uses “first-hand” only for something personally visited, carried, tested or observed. It does not mean that living in Uttarakhand is proof of every fact about Sikkim, Ladakh or Himachal Pradesh. Pages without direct experience are labelled as researched guides and should cite the authority or contributor behind important claims.</p>
          </section>

          <section className="bg-white p-6 sm:p-7 rounded-[18px] border" style={{ borderColor: "#e3e9e6" }}>
            <h2 className="text-[22px] font-bold mb-3" style={{ color: "var(--ink)" }}>Safety and medical information</h2>
            <p className="text-[16px] leading-[1.75]" style={{ color: "var(--ink-soft)" }}>Mountain conditions can change faster than a web page. Road, weather, permit and health information is planning guidance, not a substitute for the current local authority or a qualified clinician. Medical pages that discuss prescription medicines remain outside Google indexing until they receive professional review.</p>
          </section>

          <section className="bg-white p-6 sm:p-7 rounded-[18px] border" style={{ borderColor: "#e3e9e6" }}>
            <h2 className="text-[22px] font-bold mb-3" style={{ color: "var(--ink)" }}>Affiliate disclosure</h2>
            <p className="text-[16px] leading-[1.75]" style={{ color: "var(--ink-soft)" }}>Some gear links are affiliate links. If you buy through them, TravelBoa may earn a commission at no extra cost to you. A commission does not turn a product into a recommendation. Gear pages are being upgraded to show the model tested, test date, measurements, limitations and original evidence; pages that cannot meet that standard will not be promoted as tested reviews.</p>
          </section>

          <section className="mt-10">
            <h2 className="text-[22px] font-bold mb-3" style={{ color: "var(--ink)" }}>Corrections and local knowledge</h2>
            <p>If you operate a route, live in one of the covered towns, or spot a factual error, write to <a href="mailto:hello@travelboa.com" className="font-semibold no-underline" style={{ color: "var(--terra)" }}>hello@travelboa.com</a>. Include the page, the correction, the date and a primary source where possible. Substantive corrections will be reflected in the page verification note.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
