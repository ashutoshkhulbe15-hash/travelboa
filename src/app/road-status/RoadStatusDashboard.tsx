import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const OFFICIAL_SOURCES = [
  { name: "Uttarakhand PWD road information", href: "https://mis.pwduk.in/", scope: "State and national-highway interruptions reported by Uttarakhand PWD." },
  { name: "Uttarakhand Tourist Care", href: "https://registrationandtouristcare.uk.gov.in/", scope: "Char Dham registration and official yatra notices." },
  { name: "Himachal Pradesh Tourism", href: "https://himachaltourism.gov.in/", scope: "Travel advisories, route context and permit guidance for Himachal Pradesh." },
  { name: "Sikkim Tourism", href: "https://www.sikkimtourism.gov.in/", scope: "Protected-area permit notices and official visitor information for Sikkim." },
];

const CHECKS = [
  ["1", "Check an official source", "Use the state portal for the road and destination you will actually travel."],
  ["2", "Confirm on the day", "Ask your hotel, driver, tour operator or the local police control room before departure."],
  ["3", "Keep a turnaround point", "Weather and landslides can invalidate a morning update. Do not push beyond a closure."],
];

export function RoadStatusDashboard() {
  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />
      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[960px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span><span style={{ color: "var(--ink)" }}>Road status</span>
        </div>
      </div>

      <main>
        <section className="contour-bg py-12 sm:py-16 border-b" style={{ borderColor: "#e3e9e6" }}>
          <div className="max-w-[960px] mx-auto px-5 sm:px-6">
            <p className="kicker mb-3">Verification desk · being rebuilt</p>
            <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-tight leading-[1.06]" style={{ color: "var(--ink)", maxWidth: "18ch" }}>This is not a live road-status board.</h1>
            <p className="text-[18px] leading-relaxed mt-5" style={{ color: "var(--ink-soft)", maxWidth: "66ch" }}>
              TravelBoa previously displayed a hand-maintained route table as though it could describe current conditions. That was not safe enough. The table has been withdrawn while I build a dated, source-linked verification system. For now, use the official sources below and confirm locally on the day you travel.
            </p>
            <div className="mt-7 px-5 py-4 rounded-[18px]" style={{ background: "#fff7ed", border: "1px solid #fdba74" }}>
              <p className="font-bold" style={{ color: "#9a3412" }}>Do not make a go/no-go decision from this page.</p>
              <p className="text-[14.5px] leading-relaxed mt-1" style={{ color: "#9a3412" }}>Mountain roads can change within minutes. In an emergency in India, call 112 and follow police, disaster-management and road-agency instructions.</p>
            </div>
          </div>
        </section>

        <section className="max-w-[960px] mx-auto px-5 sm:px-6 py-12 sm:py-16">
          <h2 className="text-[26px] sm:text-[32px] font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>A safer three-check routine</h2>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {CHECKS.map(([number, title, body]) => (
              <div key={number} className="rounded-[20px] p-5 bg-white border" style={{ borderColor: "#e3e9e6" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold" style={{ background: "var(--paper-warm)", color: "var(--terra)" }}>{number}</div>
                <h3 className="font-bold text-[17px] mt-4" style={{ color: "var(--ink)" }}>{title}</h3>
                <p className="text-[14.5px] leading-relaxed mt-2" style={{ color: "var(--ink-soft)" }}>{body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[26px] sm:text-[32px] font-extrabold tracking-tight mt-14" style={{ color: "var(--ink)" }}>Official starting points</h2>
          <p className="mt-3 leading-relaxed" style={{ color: "var(--ink-soft)", maxWidth: "65ch" }}>These links are starting points, not a guarantee that every local closure appears instantly. Check the update date on the source itself.</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {OFFICIAL_SOURCES.map((source) => (
              <a key={source.name} href={source.href} target="_blank" rel="noopener noreferrer" className="block rounded-[20px] p-5 bg-white border no-underline transition-transform hover:-translate-y-0.5" style={{ borderColor: "#e3e9e6" }}>
                <p className="font-bold text-[17px]" style={{ color: "var(--ink)" }}>{source.name} <span aria-hidden="true">↗</span></p>
                <p className="text-[14.5px] leading-relaxed mt-2" style={{ color: "var(--ink-soft)" }}>{source.scope}</p>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-[22px] p-6 sm:p-8" style={{ background: "var(--snowfield)" }}>
            <h2 className="text-[23px] font-extrabold" style={{ color: "var(--ink)" }}>What the rebuilt board must show</h2>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              <li>• the exact source and direct link for every status;</li>
              <li>• the verification time, timezone and a clear expiry;</li>
              <li>• “unknown” when current evidence is unavailable;</li>
              <li>• a correction log instead of silently changing safety-critical claims.</li>
            </ul>
            <p className="mt-5 text-[14.5px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>Until those standards are met, this page is excluded from search indexing. That is an editorial safety decision, not a technical error.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
