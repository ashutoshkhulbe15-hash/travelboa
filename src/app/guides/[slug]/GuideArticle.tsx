"use client";

import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import { GUIDES } from "@/lib/data";
import { guideContent } from "@/lib/guide-content";
import Link from "next/link";

type Guide = (typeof GUIDES)[number];

export function GuideArticle({ guide }: { guide: Guide }) {
  const { themeKey, theme, setTheme, accent, dark, toggleDark, mounted } = useTheme();
  if (!mounted) return null;

  const bg = dark ? "#0c0a09" : "white";
  const cardBg = dark ? "#1c1a17" : "white";
  const textPrimary = dark ? "#f5f5f4" : "#111";
  const textSecondary = dark ? "#a8a29e" : "#555";
  const textMuted = dark ? "#57534e" : "#ccc";
  const border = dark ? "#292524" : "#f0f0f0";

  const content = guideContent[guide.slug];
  const related = GUIDES.filter(g => g.slug !== guide.slug).slice(0, 3);

  return (
    <div className="relative min-h-screen font-sans transition-colors duration-300" style={{ background: bg }}>
      <ColorPicker themeKey={themeKey} setTheme={setTheme} dark={dark} toggleDark={toggleDark} />
      <Navbar accent={accent} dark={dark} />

      <div className="relative z-10 max-w-[760px] mx-auto px-4 sm:px-8 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs" style={{ color: textMuted }}>
          <Link href="/" className="hover:opacity-70" style={{ color: textMuted }}>Home</Link>
          <span>→</span>
          <Link href="/guides" className="hover:opacity-70" style={{ color: textMuted }}>Guides</Link>
          <span>→</span>
          <span className="font-semibold" style={{ color: textPrimary }}>{guide.tag}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white" style={{ background: accent }}>{guide.tag}</span>
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight leading-tight mt-4 mb-3" style={{ color: textPrimary }}>{guide.title}</h1>
          <p className="text-base leading-relaxed" style={{ color: textSecondary }}>{guide.desc}</p>
          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <span className="text-xs" style={{ color: textMuted }}>📖 {guide.min} min read</span>
            {content && <span className="text-xs" style={{ color: textMuted }}>✍️ {content.author}</span>}
            <span className="text-xs" style={{ color: textMuted }}>📍 Written from Dehradun</span>
            {content && <span className="text-xs" style={{ color: textMuted }}>📅 {content.lastUpdated}</span>}
          </div>
        </div>

        {content ? (
          <>
            {/* Hero image */}
            {content.heroImage && (
              <div className="rounded-2xl overflow-hidden mb-8" style={{ aspectRatio: "21/9" }}>
                <img src={content.heroImage.src} alt={content.heroImage.alt} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Affiliate disclosure */}
            {content.disclosure && (
              <div className="flex items-start gap-3 p-4 rounded-xl mb-8 text-xs leading-relaxed" style={{ background: dark ? "#1c1a17" : "#f8f8f6", border: `1px solid ${border}`, color: textSecondary }}>
                <span className="mt-0.5">💰</span>
                {content.disclosure}
              </div>
            )}

            {/* Sections */}
            <div className="space-y-8">
              {content.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="text-lg sm:text-xl font-extrabold mb-3" style={{ color: textPrimary }}>{section.heading}</h2>
                  )}
                  {section.image && (
                    <div className="rounded-xl overflow-hidden mb-4">
                      <img src={section.image.src} alt={section.image.alt} className="w-full object-cover" style={{ maxHeight: 400 }} />
                      {section.image.caption && (
                        <p className="text-xs text-center py-2 italic" style={{ color: textMuted, background: dark ? "#1c1a17" : "#fafafa" }}>{section.image.caption}</p>
                      )}
                    </div>
                  )}
                  {section.paragraphs.map((para, j) => (
                    <p key={j} className="text-sm sm:text-[15px] leading-relaxed mb-3" style={{ color: textSecondary }}>{para}</p>
                  ))}
                  {section.items && (
                    <div className="mt-3 space-y-2">
                      {section.items.map((item, k) => (
                        <div key={k} className="flex items-start gap-2 text-sm" style={{ color: textSecondary }}>
                          <span className="mt-0.5" style={{ color: accent }}>•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.table && (
                    <div className="overflow-x-auto mt-4 rounded-xl" style={{ border: `1px solid ${border}` }}>
                      <table className="w-full text-xs sm:text-sm">
                        <thead>
                          <tr>
                            {section.table.headers.map((h, hi) => (
                              <th key={hi} className="text-left p-3 font-bold" style={{ background: dark ? "#1c1a17" : "#fafafa", color: textPrimary, borderBottom: `1px solid ${border}` }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => (
                                <td key={ci} className="p-3" style={{ color: ci === 0 ? textPrimary : textSecondary, fontWeight: ci === 0 ? 600 : 400, borderBottom: `1px solid ${border}` }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.svg && (
                    <div className="mt-4 rounded-xl overflow-hidden" style={{ border: `1px solid ${border}` }} dangerouslySetInnerHTML={{ __html: section.svg }} />
                  )}
                  {section.tip && (
                    <div className="flex items-start gap-3 p-4 rounded-xl mt-4" style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}>
                      <span className="text-base mt-0.5">💡</span>
                      <p className="text-sm leading-relaxed" style={{ color: textPrimary }}>{section.tip}</p>
                    </div>
                  )}
                  {section.warning && (
                    <div className="flex items-start gap-3 p-4 rounded-xl mt-4" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
                      <span className="text-base mt-0.5">⚠️</span>
                      <p className="text-sm leading-relaxed text-amber-800">{section.warning}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ */}
            {content.faq.length > 0 && (
              <div className="mt-12 pt-8" style={{ borderTop: `1px solid ${border}` }}>
                <h2 className="text-lg sm:text-xl font-extrabold mb-6" style={{ color: textPrimary }}>Frequently asked questions</h2>
                <div className="space-y-5">
                  {content.faq.map((f, i) => (
                    <div key={i}>
                      <h3 className="text-sm font-bold mb-1.5" style={{ color: textPrimary }}>{f.question}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: textSecondary }}>{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outbound links */}
            {content.outboundLinks.length > 0 && (
              <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${border}` }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: textMuted }}>References</p>
                {content.outboundLinks.map((l, i) => (
                  <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="block text-sm mb-1.5 no-underline" style={{ color: accent }}>{l.label} ↗</a>
                ))}
              </div>
            )}

            {/* Last updated */}
            <p className="text-xs mt-8 italic" style={{ color: textMuted }}>Last updated: {content.lastUpdated}</p>

            {/* Schema JSON-LD */}
            {content.schemaJson.map((schema, i) => (
              <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
          </>
        ) : (
          <div className="text-center py-16 rounded-2xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
            <div className="text-4xl mb-4">✍️</div>
            <h2 className="text-xl font-extrabold mb-2" style={{ color: textPrimary }}>This guide is being written</h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: textSecondary }}>We are working on this guide right now. It will be a detailed, first-hand article based on real experience. Check back soon.</p>
            <Link href="/guides" className="inline-block mt-6 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: accent }}>← Back to all guides</Link>
          </div>
        )}

        {/* Related guides */}
        <div className="mt-12 pt-8" style={{ borderTop: `1px solid ${border}` }}>
          <h3 className="text-base font-extrabold mb-4" style={{ color: textPrimary }}>More guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map((g, i) => (
              <Link key={i} href={g.href} className="p-4 rounded-xl no-underline transition-all hover:-translate-y-0.5" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: accent }}>{g.tag}</span>
                <p className="text-sm font-bold mt-1 leading-snug" style={{ color: textPrimary }}>{g.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer accent={accent} />
    </div>
  );
}
