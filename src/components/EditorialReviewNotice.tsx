import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface EditorialReviewNoticeProps {
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
}

export function EditorialReviewNotice({
  title,
  description,
  backHref,
  backLabel,
}: EditorialReviewNoticeProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--paper)" }}>
      <Navbar />
      <main className="flex-1 px-5 sm:px-6 py-20 sm:py-28">
        <section className="max-w-[760px] mx-auto rounded-[24px] border bg-white p-7 sm:p-10" style={{ borderColor: "var(--line)", boxShadow: "0 24px 70px -44px rgba(28,43,51,0.35)" }}>
          <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: "var(--terra)" }}>Coming soon</span>
          <h1 className="text-[clamp(30px,5vw,48px)] font-extrabold tracking-tight leading-[1.08] mt-4" style={{ color: "var(--ink)" }}>{title}</h1>
          <p className="text-[17px] leading-[1.75] mt-5" style={{ color: "var(--ink-soft)" }}>{description}</p>
          <div className="rounded-[16px] p-5 mt-7" style={{ background: "var(--snowfield)", border: "1px solid var(--line)" }}>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--ink)" }}>
              This page is not part of the published guide collection yet. Explore the completed destination guides while we finish this one.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href={backHref} className="inline-flex px-5 py-3 rounded-full text-[14px] font-bold text-white no-underline" style={{ background: "var(--terra)" }}>{backLabel}</Link>
            <Link href="/about" className="inline-flex px-5 py-3 rounded-full text-[14px] font-bold no-underline border" style={{ color: "var(--ink)", borderColor: "var(--line)" }}>How TravelBoa reviews guides</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
