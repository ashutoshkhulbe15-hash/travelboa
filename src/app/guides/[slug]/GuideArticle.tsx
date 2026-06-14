"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GUIDES } from "@/lib/data";
import { guideContent } from "@/lib/guide-content";
import Link from "next/link";

type Guide = (typeof GUIDES)[number];

export function GuideArticle({ guide }: { guide: Guide }) {
  const content = guideContent[guide.slug];
  const related = GUIDES.filter(g => g.slug !== guide.slug).slice(0, 3);

  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[760px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <Link href="/guides" className="no-underline" style={{ color: "var(--terra)" }}>Guides</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span style={{ color: "var(--ink)" }}>{guide.tag}</span>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-5 sm:px-6 py-10 sm:py-12">
        <div className="mb-10">
          <span className="px-3 py-1 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wide text-white" style={{ background: "var(--terra)" }}>{guide.tag}</span>
          <h1 className="text-[clamp(26px,4vw,38px)] font-extrabold tracking-tight leading-[1.1] mt-4 mb-3" style={{ color: "var(--ink)" }}>{guide.title}</h1>
          <p className="text-[17px] font-normal leading-relaxed" style={{ color: "var(--ink-soft)" }}>{guide.desc}</p>
          <div className="flex items-center gap-4 mt-4 flex-wrap font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>
            <span>📖 {guide.min} min read</span>
            {content && <span>✍️ {content.author}</span>}
            <span>📍 Written from Dehradun</span>
            {content && <span>📅 {content.lastUpdated}</span>}
          </div>
        </div>

        {content ? (
          <>
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
                <div key={i}>
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
                        <thead>
                          <tr>{section.table.headers.map((h, hi) => (
                            <th key={hi} className="text-left p-3 font-bold" style={{ background: "var(--snowfield)", color: "var(--ink)", borderBottom: "1px solid #e3e9e6" }}>{h}</th>
                          ))}</tr>
                        </thead>
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
          </>
        ) : (
          <div className="text-center py-20 rounded-[18px] bg-white border" style={{ borderColor: "#e3e9e6" }}>
            <div className="text-5xl mb-4">✍️</div>
            <h2 className="text-[22px] font-extrabold mb-2" style={{ color: "var(--ink)" }}>This guide is being written</h2>
            <p className="text-[16px] font-normal max-w-md mx-auto" style={{ color: "var(--ink-soft)" }}>A detailed, first-hand article based on real experience. Check back soon.</p>
            <Link href="/guides" className="inline-block mt-6 px-6 py-3 rounded-full text-[15px] font-bold text-white no-underline" style={{ background: "var(--terra)" }}>&larr; Back to all guides</Link>
          </div>
        )}

        <div className="mt-14 pt-8 border-t-2" style={{ borderColor: "var(--ink)" }}>
          <h3 className="text-[18px] font-extrabold mb-5" style={{ color: "var(--ink)" }}>More guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((g, i) => (
              <Link key={i} href={g.href} className="p-5 rounded-[18px] no-underline bg-white border transition-all hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: "#e3e9e6" }}>
                <span className="kicker">{g.tag}</span>
                <p className="text-[16px] font-bold mt-1.5 leading-snug" style={{ color: "var(--ink)" }}>{g.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
