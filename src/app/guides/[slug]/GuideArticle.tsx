"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GUIDES } from "@/lib/data";
import { guideContent } from "@/lib/guide-content";
import Link from "next/link";

type Guide = (typeof GUIDES)[number];

export function GuideArticle({ guide }: { guide: Guide }) {
  const content = guideContent[guide.slug];
  const related = GUIDES.filter(g => g.slug !== guide.slug).slice(0, 4);

  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <Link href="/guides" className="no-underline" style={{ color: "var(--terra)" }}>Guides</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span style={{ color: "var(--ink)" }}>{guide.tag}</span>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 py-10 sm:py-12">
        {/* Header - full width */}
        <div className="mb-10">
          <span className="px-3 py-1 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wide text-white" style={{ background: "var(--terra)" }}>{guide.tag}</span>
          <h1 className="text-[clamp(26px,4vw,38px)] font-extrabold tracking-tight leading-[1.1] mt-4 mb-3" style={{ color: "var(--ink)" }}>{guide.title}</h1>
          <p className="text-[17px] font-normal leading-relaxed" style={{ color: "var(--ink-soft)", maxWidth: "64ch" }}>{guide.desc}</p>
          <div className="flex items-center gap-4 mt-4 flex-wrap font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>
            <span>📖 {guide.min} min read</span>
            {content && <span>✍️ {content.author}</span>}
            <span>📍 Written from Dehradun</span>
            {content && <span>📅 {content.lastUpdated}</span>}
          </div>
        </div>

        {content ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            {/* MAIN CONTENT */}
            <div className="min-w-0">
              {content.heroImage && (
                <div className="rounded-[18px] overflow-hidden mb-10" style={{ aspectRatio: "21/9" }}>
                  <img src={content.heroImage.src} alt={content.heroImage.alt} className="w-full h-full object-cover" />
                </div>
              )}

              {content.disclosure && (
                <div className="flex items-start gap-3 p-4 rounded-[14px] mb-8 text-[14px] leading-relaxed" style={{ background: "var(--snowfield)", border: "1px solid #e3e9e6", color: "var(--ink-soft)" }}>
                  <span className="mt-0.5">💰</span>{content.disclosure}
                </div>
              )}

              <div className="space-y-8">
                {content.sections.map((section, i) => (
                  <div key={i} id={`section-${i}`}>
                    {section.heading && <h2 className="text-[22px] font-extrabold tracking-tight mb-3" style={{ color: "var(--ink)" }}>{section.heading}</h2>}
                    {section.image && (
                      <div className="rounded-[18px] overflow-hidden mb-4">
                        <img src={section.image.src} alt={section.image.alt} className="w-full object-cover" style={{ maxHeight: 400 }} />
                        {section.image.caption && <p className="text-[13px] text-center py-2.5 italic" style={{ color: "var(--ink-soft)", background: "var(--snowfield)" }}>{section.image.caption}</p>}
                      </div>
                    )}
                    {section.paragraphs.map((para, j) => <p key={j} className="text-[16px] font-normal leading-[1.8] mb-3" style={{ color: "var(--ink)" }}>{para}</p>)}
                    {section.items && (
                      <div className="mt-3 space-y-2">
                        {section.items.map((item, k) => (
                          <div key={k} className="flex items-start gap-2 text-[15px] font-normal" style={{ color: "var(--ink-soft)" }}>
                            <span className="mt-0.5" style={{ color: "var(--terra)" }}>&bull;</span><span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {section.table && (
                      <div className="overflow-x-auto mt-4 rounded-[14px] border" style={{ borderColor: "#e3e9e6" }}>
                        <table className="w-full text-[14px]">
                          <thead><tr>{section.table.headers.map((h, hi) => (
                            <th key={hi} className="text-left p-3 font-bold" style={{ background: "var(--snowfield)", color: "var(--ink)", borderBottom: "1px solid #e3e9e6" }}>{h}</th>
                          ))}</tr></thead>
                          <tbody>{section.table.rows.map((row, ri) => (
                            <tr key={ri}>{row.map((cell, ci) => (
                              <td key={ci} className="p-3" style={{ color: ci === 0 ? "var(--ink)" : "var(--ink-soft)", fontWeight: ci === 0 ? 600 : 400, borderBottom: "1px solid #f0f3f1" }}>{cell}</td>
                            ))}</tr>
                          ))}</tbody>
                        </table>
                      </div>
                    )}
                    {section.svg && <div className="mt-4 rounded-[14px] overflow-hidden border" style={{ borderColor: "#e3e9e6" }} dangerouslySetInnerHTML={{ __html: section.svg }} />}
                    {section.tip && (
                      <div className="flex items-start gap-3 p-4 rounded-[14px] mt-4" style={{ background: "rgba(194,102,45,0.06)", border: "1px solid rgba(194,102,45,0.15)" }}>
                        <span className="text-lg mt-0.5">💡</span>
                        <p className="text-[15px] font-normal leading-relaxed" style={{ color: "var(--ink)" }}>{section.tip}</p>
                      </div>
                    )}
                    {section.warning && (
                      <div className="flex items-start gap-3 p-4 rounded-[14px] mt-4" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
                        <span className="text-lg mt-0.5">⚠️</span>
                        <p className="text-[15px] font-normal leading-relaxed text-amber-800">{section.warning}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {content.faq.length > 0 && (
                <div className="mt-14 pt-8 border-t-2" style={{ borderColor: "var(--ink)" }}>
                  <h2 className="text-[22px] font-extrabold tracking-tight mb-6" style={{ color: "var(--ink)" }}>Frequently asked questions</h2>
                  <div className="space-y-6">
                    {content.faq.map((f, i) => (
                      <div key={i}>
                        <h3 className="text-[16px] font-bold mb-1.5" style={{ color: "var(--ink)" }}>{f.question}</h3>
                        <p className="text-[15px] font-normal leading-relaxed" style={{ color: "var(--ink-soft)" }}>{f.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.outboundLinks.length > 0 && (
                <div className="mt-8 pt-6 border-t border-dashed" style={{ borderColor: "#e3e9e6" }}>
                  <p className="kicker mb-3">References</p>
                  {content.outboundLinks.map((l, i) => (
                    <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="block text-[14px] font-medium mb-1.5 no-underline" style={{ color: "var(--terra)" }}>{l.label} ↗</a>
                  ))}
                </div>
              )}

              <p className="font-mono text-[12px] mt-8 italic" style={{ color: "var(--ink-soft)" }}>Last updated: {content.lastUpdated}</p>
              {content.schemaJson.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
              ))}
            </div>

            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="flex flex-col gap-5" style={{ position: "sticky", top: 80 }}>
                {/* Table of contents */}
                <div className="bg-white border rounded-[20px] p-5" style={{ borderColor: "#e3e9e6", boxShadow: "0 20px 50px -30px rgba(28,43,51,0.3)" }}>
                  <h3 className="text-[15px] font-bold flex items-center gap-2 mb-3" style={{ color: "var(--ink)" }}>📑 In this guide</h3>
                  {content.sections.filter(s => s.heading).map((s, i) => (
                    <a key={i} href={`#section-${content.sections.indexOf(s)}`} className="flex items-center gap-2 py-2 text-[13px] no-underline border-b transition-colors hover:pl-1" style={{ borderColor: "#f0f3f1", color: "var(--ink-soft)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--terra)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-soft)")}>
                      <span className="font-mono text-[11px] w-5 shrink-0" style={{ color: "var(--terra)" }}>0{i + 1}</span>
                      {s.heading}
                    </a>
                  ))}
                </div>

                {/* Related guides */}
                <div className="bg-white border rounded-[20px] p-5" style={{ borderColor: "#e3e9e6", boxShadow: "0 20px 50px -30px rgba(28,43,51,0.3)" }}>
                  <h3 className="text-[15px] font-bold mb-3" style={{ color: "var(--ink)" }}>📖 More guides</h3>
                  {related.map((g, i) => (
                    <Link key={i} href={g.href} className="block py-2 no-underline transition-colors hover:pl-1" style={{ borderBottom: "1px solid #f0f3f1" }}>
                      <span className="block text-[13px] font-medium" style={{ color: "var(--ink)" }}>{g.title}</span>
                      <span className="font-mono text-[11px]" style={{ color: "var(--ink-soft)" }}>{g.tag} &middot; {g.min} min</span>
                    </Link>
                  ))}
                </div>

                {/* Author card */}
                <div className="rounded-[20px] p-5 border" style={{ background: "#fdf5ed", borderColor: "#e8d8c4" }}>
                  <div className="flex gap-3.5 items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-[16px] shrink-0" style={{ background: "var(--terra)" }}>A</div>
                    <div>
                      <span className="block text-[14px] font-bold" style={{ color: "var(--ink)" }}>Written by Ash</span>
                      <span className="block font-mono text-[11px] mt-0.5" style={{ color: "var(--ink-soft)" }}>DEHRADUN</span>
                      <p className="text-[13px] font-normal leading-relaxed mt-2" style={{ color: "var(--ink-soft)" }}>First-hand guides from someone who lives at the foot of these hills.</p>
                      <a href="mailto:hello@travelboa.com" className="text-[12px] font-semibold mt-1 inline-block no-underline" style={{ color: "var(--terra)" }}>hello@travelboa.com &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        ) : (
          <div className="text-center py-20 rounded-[18px] bg-white border" style={{ borderColor: "#e3e9e6" }}>
            <div className="text-5xl mb-4">✍️</div>
            <h2 className="text-[22px] font-extrabold mb-2" style={{ color: "var(--ink)" }}>This guide is being written</h2>
            <p className="text-[16px] font-normal max-w-md mx-auto" style={{ color: "var(--ink-soft)" }}>A detailed, first-hand article based on real experience. Check back soon.</p>
            <Link href="/guides" className="inline-block mt-6 px-6 py-3 rounded-full text-[15px] font-bold text-white no-underline" style={{ background: "var(--terra)" }}>&larr; Back to all guides</Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
