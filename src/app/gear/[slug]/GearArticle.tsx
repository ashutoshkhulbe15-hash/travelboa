"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { gearGuideContent, GEAR_GUIDE_META, type GearSlug } from "@/lib/gear-content";
import Link from "next/link";

interface Props {
  slug: string;
  meta: (typeof GEAR_GUIDE_META)[GearSlug];
}

export function GearArticle({ slug, meta }: Props) {
  const content = gearGuideContent[slug as GearSlug];
  const otherSlugs = Object.keys(GEAR_GUIDE_META).filter(s => s !== slug).slice(0, 4) as GearSlug[];

  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <Link href="/gear" className="no-underline" style={{ color: "var(--terra)" }}>Gear</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span style={{ color: "var(--ink)" }}>{meta.category}</span>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 py-10 sm:py-12">
        {/* Header - full width */}
        <div className="mb-10">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="px-3 py-1 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wide text-white" style={{ background: "var(--terra)" }}>{meta.category}</span>
            <span className="px-2.5 py-1 rounded-full font-mono text-[11px]" style={{ background: "var(--snowfield)", color: "var(--ink-soft)" }}>📍 {meta.dest}</span>
            <span className="font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>{meta.products} products</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-extrabold tracking-tight leading-[1.1] mb-3" style={{ color: "var(--ink)" }}>{meta.title}</h1>
          <p className="text-[17px] font-normal leading-relaxed" style={{ color: "var(--ink-soft)", maxWidth: "64ch" }}>{meta.desc}</p>
          <div className="flex items-center gap-4 mt-4 font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>
            <span>✍️ Written from Dehradun</span><span>💰 Affiliate links</span>
          </div>
        </div>

        {content ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
            {/* MAIN CONTENT */}
            <div className="space-y-8 min-w-0">
              {content.heroImage && (
                <div className="rounded-[18px] overflow-hidden" style={{ aspectRatio: "21/9" }}>
                  <img src={content.heroImage.src} alt={content.heroImage.alt} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="text-[14px] px-5 py-3.5 rounded-[14px] leading-relaxed border-l-4" style={{ background: "#fef3e2", borderColor: "var(--terra)", color: "var(--ink-soft)" }}>
                <span className="font-semibold" style={{ color: "var(--terra)" }}>Affiliate disclosure:</span> Some links on this page are affiliate links. I earn a small commission when you buy through them, at no extra cost to you. I only recommend gear I have used and trust.
              </div>

              <p className="text-[17px] font-normal leading-[1.8]" style={{ color: "var(--ink)" }}>{content.intro}</p>

              {content.sectionImages?.afterIntro && (
                <div className="rounded-[18px] overflow-hidden">
                  <img src={content.sectionImages.afterIntro.src} alt={content.sectionImages.afterIntro.alt} className="w-full object-cover" style={{ maxHeight: 400 }} />
                  {content.sectionImages.afterIntro.caption && <p className="text-[13px] text-center py-2.5 italic" style={{ color: "var(--ink-soft)", background: "var(--snowfield)" }}>{content.sectionImages.afterIntro.caption}</p>}
                </div>
              )}

              {content.sectionImages?.afterBuyingGuide && (
                <div className="rounded-[18px] overflow-hidden">
                  <img src={content.sectionImages.afterBuyingGuide.src} alt={content.sectionImages.afterBuyingGuide.alt} className="w-full object-cover" style={{ maxHeight: 400 }} />
                  {content.sectionImages.afterBuyingGuide.caption && <p className="text-[13px] text-center py-2.5 italic" style={{ color: "var(--ink-soft)", background: "var(--snowfield)" }}>{content.sectionImages.afterBuyingGuide.caption}</p>}
                </div>
              )}

              <h2 className="text-[22px] font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>Detailed reviews</h2>
              <div className="space-y-4">
                {content.products.map((product, i) => (
                  <div key={i} className="p-5 sm:p-6 rounded-[18px] bg-white border" style={{ borderColor: "#e3e9e6" }}>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-[18px] font-extrabold" style={{ color: "var(--ink)" }}>{i + 1}. {product.name}</h3>
                          {product.badge && <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: "var(--terra)" }}>{product.badge}</span>}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm">{"⭐".repeat(Math.round(product.rating))}</span>
                          <span className="font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>{product.rating}/5</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-[20px] font-extrabold" style={{ color: "var(--ink)" }}>{product.price}</div>
                        <a href={product.storeUrl} target="_blank" rel="noopener noreferrer sponsored" className="text-[13px] font-semibold no-underline" style={{ color: "var(--terra)" }}>Buy on {product.store} &rarr;</a>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="font-mono text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--meadow)" }}>✓ Pros</p>
                        {product.pros.map((pro, j) => <p key={j} className="text-[14px] font-normal mb-1" style={{ color: "var(--ink-soft)" }}>+ {pro}</p>)}
                      </div>
                      <div>
                        <p className="font-mono text-[11px] font-bold uppercase tracking-wider mb-2 text-red-500">✕ Cons</p>
                        {product.cons.map((con, j) => <p key={j} className="text-[14px] font-normal mb-1" style={{ color: "var(--ink-soft)" }}>– {con}</p>)}
                      </div>
                    </div>
                    <div className="mt-4 pt-3 text-[15px] font-normal border-t border-dashed" style={{ borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
                      <strong style={{ color: "var(--ink)" }}>Verdict:</strong> {product.verdict}
                    </div>
                  </div>
                ))}
              </div>

              {content.sectionImages?.afterProducts && (
                <div className="rounded-[18px] overflow-hidden">
                  <img src={content.sectionImages.afterProducts.src} alt={content.sectionImages.afterProducts.alt} className="w-full object-cover" style={{ maxHeight: 400 }} />
                </div>
              )}

              {content.buyingGuide.length > 0 && (
                <>
                  <h2 className="text-[22px] font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>Buying guide</h2>
                  {content.buyingGuide.map((section, i) => (
                    <div key={i}>
                      <h3 className="text-[18px] font-bold mb-2" style={{ color: "var(--ink)" }}>{section.heading}</h3>
                      {section.paragraphs.map((p, j) => <p key={j} className="text-[16px] font-normal leading-[1.75] mb-3" style={{ color: "var(--ink-soft)" }}>{p}</p>)}
                      {section.tip && (
                        <div className="flex items-start gap-3 p-4 rounded-[14px] mt-3" style={{ background: "rgba(194,102,45,0.06)", border: "1px solid rgba(194,102,45,0.15)" }}>
                          <span className="text-lg mt-0.5">💡</span>
                          <p className="text-[15px] font-normal leading-relaxed" style={{ color: "var(--ink)" }}>{section.tip}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}

              <div className="p-6 rounded-[18px]" style={{ background: "rgba(194,102,45,0.06)", border: "1px solid rgba(194,102,45,0.15)" }}>
                <h2 className="text-[18px] font-extrabold mb-2" style={{ color: "var(--ink)" }}>Bottom line</h2>
                <p className="text-[16px] font-normal leading-relaxed" style={{ color: "var(--ink-soft)" }}>{content.conclusion}</p>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky flex flex-col gap-5" style={{ top: 80 }}>
                {/* Quick picks */}
                <div className="bg-white border rounded-[20px] p-5" style={{ borderColor: "#e3e9e6", boxShadow: "0 20px 50px -30px rgba(28,43,51,0.3)" }}>
                  <h3 className="text-[15px] font-bold mb-3" style={{ color: "var(--ink)" }}>🏆 Quick picks</h3>
                  {content.products.map((p, i) => (
                    <a key={i} href={p.storeUrl} target="_blank" rel="noopener noreferrer sponsored"
                      className="flex items-center gap-2 py-2 no-underline transition-colors hover:bg-[var(--snowfield)] -mx-2 px-2 rounded-lg"
                      style={{ borderBottom: i < content.products.length - 1 ? "1px solid #f0f3f1" : "none" }}>
                      <span className="font-mono text-[12px] font-bold" style={{ color: "var(--terra)" }}>{i + 1}</span>
                      <span className="text-[13px] font-medium flex-1" style={{ color: "var(--ink)" }}>{p.name}</span>
                      <span className="font-mono text-[12px] font-bold shrink-0" style={{ color: "var(--ink-soft)" }}>{p.price}</span>
                    </a>
                  ))}
                </div>

                {/* Related reviews */}
                <div className="bg-white border rounded-[20px] p-5" style={{ borderColor: "#e3e9e6", boxShadow: "0 20px 50px -30px rgba(28,43,51,0.3)" }}>
                  <h3 className="text-[15px] font-bold mb-3" style={{ color: "var(--ink)" }}>📖 More reviews</h3>
                  {otherSlugs.map(s => {
                    const m = GEAR_GUIDE_META[s];
                    return (
                      <Link key={s} href={`/gear/${s}`} className="block py-2 no-underline transition-colors hover:pl-1" style={{ borderBottom: "1px solid #f0f3f1" }}>
                        <span className="block text-[13px] font-medium" style={{ color: "var(--ink)" }}>{m.title}</span>
                        <span className="font-mono text-[11px]" style={{ color: "var(--ink-soft)" }}>{m.category}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Author */}
                <div className="rounded-[20px] p-5 border" style={{ background: "#fdf5ed", borderColor: "#e8d8c4" }}>
                  <div className="flex gap-3.5 items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-[16px] shrink-0" style={{ background: "var(--terra)" }}>A</div>
                    <div>
                      <span className="block text-[14px] font-bold" style={{ color: "var(--ink)" }}>Tested by Ash</span>
                      <p className="text-[13px] font-normal leading-relaxed mt-1" style={{ color: "var(--ink-soft)" }}>Every product here has been used on a real trip from Dehradun.</p>
                      <a href="mailto:hello@travelboa.com" className="text-[12px] font-semibold mt-1 inline-block no-underline" style={{ color: "var(--terra)" }}>hello@travelboa.com &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        ) : (
          <div className="text-center py-20 rounded-[18px] bg-white border" style={{ borderColor: "#e3e9e6" }}>
            <div className="text-5xl mb-4">🛠️</div>
            <h2 className="text-[22px] font-extrabold mb-2" style={{ color: "var(--ink)" }}>This gear guide is being written</h2>
            <p className="text-[16px] font-normal max-w-md mx-auto" style={{ color: "var(--ink-soft)" }}>I am testing products and writing real reviews. Check back soon.</p>
            <Link href="/gear" className="inline-block mt-6 px-6 py-3 rounded-full text-[15px] font-bold text-white no-underline" style={{ background: "var(--terra)" }}>&larr; Back to all gear</Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
