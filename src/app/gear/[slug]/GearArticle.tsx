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
  const otherSlugs = Object.keys(GEAR_GUIDE_META).filter(s => s !== slug).slice(0, 3) as GearSlug[];

  return (
    <div className="min-h-screen" style={{ background: "var(--paper)" }}>
      <Navbar />

      <div className="py-3 font-mono text-[12px] border-b" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6", color: "var(--ink-soft)" }}>
        <div className="max-w-[760px] mx-auto px-5 sm:px-6">
          <Link href="/" className="no-underline" style={{ color: "var(--terra)" }}>Home</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <Link href="/gear" className="no-underline" style={{ color: "var(--terra)" }}>Gear</Link>
          <span className="mx-1.5 opacity-50">/</span>
          <span style={{ color: "var(--ink)" }}>{meta.category}</span>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-5 sm:px-6 py-10 sm:py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="px-3 py-1 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wide text-white" style={{ background: "var(--terra)" }}>{meta.category}</span>
            <span className="px-2.5 py-1 rounded-full font-mono text-[11px]" style={{ background: "var(--snowfield)", color: "var(--ink-soft)" }}>📍 {meta.dest}</span>
            <span className="font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>{meta.products} products</span>
          </div>
          <h1 className="text-[clamp(26px,4vw,38px)] font-extrabold tracking-tight leading-[1.1] mb-3" style={{ color: "var(--ink)" }}>{meta.title}</h1>
          <p className="text-[17px] font-normal leading-relaxed" style={{ color: "var(--ink-soft)" }}>{meta.desc}</p>
          <div className="flex items-center gap-4 mt-4 font-mono text-[12px]" style={{ color: "var(--ink-soft)" }}>
            <span>✍️ Written from Dehradun</span>
            <span>💰 Affiliate links</span>
          </div>
        </div>

        {content ? (
          <div className="space-y-8">
            {content.heroImage && (
              <div className="rounded-[18px] overflow-hidden" style={{ aspectRatio: "21/9" }}>
                <img src={content.heroImage.src} alt={content.heroImage.alt} className="w-full h-full object-cover" />
              </div>
            )}

            {content.products.length > 0 && (
              <div className="p-5 sm:p-6 rounded-[18px] border" style={{ background: "var(--snowfield)", borderColor: "#e3e9e6" }}>
                <p className="kicker mb-3">Quick picks</p>
                {content.products.map((product, i) => (
                  <a key={i} href={product.storeUrl} target="_blank" rel="noopener noreferrer sponsored"
                    className="flex items-center gap-3 py-3 no-underline transition-colors -mx-2 px-2 rounded-xl hover:bg-white"
                    style={{ borderBottom: i < content.products.length - 1 ? "1px solid #e3e9e6" : "none" }}>
                    <span className="font-mono text-[13px] font-bold w-6 text-center" style={{ color: "var(--terra)" }}>{i + 1}</span>
                    <span className="text-[16px] font-bold flex-1" style={{ color: "var(--ink)" }}>{product.name}</span>
                    {product.badge && <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full text-white shrink-0" style={{ background: "var(--terra)" }}>{product.badge}</span>}
                    <span className="text-[14px] font-bold shrink-0" style={{ color: "var(--ink-soft)" }}>{product.price}</span>
                    <span className="text-[14px] shrink-0" style={{ color: "var(--terra)" }}>&rarr;</span>
                  </a>
                ))}
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
                {content.sectionImages.afterProducts.caption && <p className="text-[13px] text-center py-2.5 italic" style={{ color: "var(--ink-soft)", background: "var(--snowfield)" }}>{content.sectionImages.afterProducts.caption}</p>}
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
        ) : (
          <div className="text-center py-20 rounded-[18px] bg-white border" style={{ borderColor: "#e3e9e6" }}>
            <div className="text-5xl mb-4">🛠️</div>
            <h2 className="text-[22px] font-extrabold mb-2" style={{ color: "var(--ink)" }}>This gear guide is being written</h2>
            <p className="text-[16px] font-normal max-w-md mx-auto" style={{ color: "var(--ink-soft)" }}>I am testing products and writing real reviews. Check back soon.</p>
            <Link href="/gear" className="inline-block mt-6 px-6 py-3 rounded-full text-[15px] font-bold text-white no-underline" style={{ background: "var(--terra)" }}>&larr; Back to all gear</Link>
          </div>
        )}

        <div className="mt-14 pt-8 border-t-2" style={{ borderColor: "var(--ink)" }}>
          <h3 className="text-[18px] font-extrabold mb-5" style={{ color: "var(--ink)" }}>More gear guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherSlugs.map(s => {
              const m = GEAR_GUIDE_META[s];
              return (
                <Link key={s} href={`/gear/${s}`} className="p-5 rounded-[18px] no-underline bg-white border transition-all hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: "#e3e9e6" }}>
                  <span className="kicker">{m.category}</span>
                  <p className="text-[16px] font-bold mt-1.5 leading-snug" style={{ color: "var(--ink)" }}>{m.title}</p>
                  <p className="font-mono text-[12px] mt-1" style={{ color: "var(--ink-soft)" }}>📍 {m.dest}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
