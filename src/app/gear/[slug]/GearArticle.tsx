"use client";

import { useTheme } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ColorPicker } from "@/components/ColorPicker";
import { gearGuideContent, GEAR_GUIDE_META, type GearSlug } from "@/lib/gear-content";
import Link from "next/link";

interface Props {
  slug: string;
  meta: (typeof GEAR_GUIDE_META)[GearSlug];
}

export function GearArticle({ slug, meta }: Props) {
  const { themeKey, theme, setTheme, accent, dark, toggleDark, mounted } = useTheme();
  if (!mounted) return null;

  const bg = dark ? "#0c0a09" : "white";
  const cardBg = dark ? "#1c1a17" : "white";
  const textPrimary = dark ? "#f5f5f4" : "#111";
  const textSecondary = dark ? "#a8a29e" : "#555";
  const textMuted = dark ? "#57534e" : "#ccc";
  const border = dark ? "#292524" : "#f0f0f0";

  const content = gearGuideContent[slug as GearSlug];

  // Related gear guides
  const otherSlugs = Object.keys(GEAR_GUIDE_META).filter(s => s !== slug).slice(0, 3) as GearSlug[];

  return (
    <div className="relative min-h-screen font-sans transition-colors duration-300" style={{ background: bg }}>
      <ColorPicker themeKey={themeKey} setTheme={setTheme} dark={dark} toggleDark={toggleDark} />
      <Navbar accent={accent} dark={dark} />

      <div className="relative z-10 max-w-[760px] mx-auto px-4 sm:px-8 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-6 mb-6 text-xs flex-wrap" style={{ color: textMuted }}>
          <Link href="/" className="hover:opacity-70" style={{ color: textMuted }}>Home</Link>
          <span>→</span>
          <Link href="/gear" className="hover:opacity-70" style={{ color: textMuted }}>Gear</Link>
          <span>→</span>
          <span className="font-semibold" style={{ color: textPrimary }}>{meta.category}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white" style={{ background: accent }}>{meta.category}</span>
            <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold" style={{ background: dark ? "#292524" : "#f5f5f5", color: textMuted }}>📍 {meta.dest}</span>
            <span className="text-xs" style={{ color: textMuted }}>{meta.products} products compared</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight leading-tight mb-3" style={{ color: textPrimary }}>{meta.title}</h1>
          <p className="text-base leading-relaxed" style={{ color: textSecondary }}>{meta.desc}</p>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-xs" style={{ color: textMuted }}>✍️ TravelBoa team</span>
            <span className="text-xs" style={{ color: textMuted }}>📍 Tested from Dehradun</span>
            <span className="text-xs" style={{ color: textMuted }}>💰 Affiliate links</span>
          </div>
        </div>

        {/* Content */}
        {content ? (
          <div className="space-y-8">
            {/* Hero image */}
            {content.heroImage && (
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
                <img src={content.heroImage.src} alt={content.heroImage.alt} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Quick pick list */}
            {content.products.length > 0 && (
              <div className="p-4 sm:p-5 rounded-xl" style={{ background: dark ? "#1c1a17" : "#fafaf8", border: `1.5px solid ${border}` }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: accent }}>Quick picks</p>
                {content.products.map((product, i) => (
                  <div key={i} className="flex items-center gap-3 py-2" style={{ borderBottom: i < content.products.length - 1 ? `1px solid ${border}` : "none" }}>
                    <span className="text-xs font-black w-5 text-center" style={{ color: accent }}>{i + 1}</span>
                    <span className="text-sm font-bold flex-1" style={{ color: textPrimary }}>{product.name}</span>
                    {product.badge && <span className="text-[9px] font-bold px-2 py-0.5 rounded text-white shrink-0" style={{ background: accent }}>{product.badge}</span>}
                    <span className="text-xs font-bold shrink-0" style={{ color: textSecondary }}>{product.price}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Intro */}
            <p className="text-sm sm:text-[15px] leading-relaxed" style={{ color: textSecondary }}>{content.intro}</p>

            {/* Image after intro */}
            {content.sectionImages?.afterIntro && (
              <div className="rounded-xl overflow-hidden">
                <img src={content.sectionImages.afterIntro.src} alt={content.sectionImages.afterIntro.alt} className="w-full object-cover" style={{ maxHeight: 400 }} />
                {content.sectionImages.afterIntro.caption && <p className="text-xs text-center py-2 italic" style={{ color: textMuted, background: dark ? "#1c1a17" : "#fafafa" }}>{content.sectionImages.afterIntro.caption}</p>}
              </div>
            )}

            {/* Product reviews - FULL DETAILS */}
            {/* Image after buying guide */}
            {content.sectionImages?.afterBuyingGuide && (
              <div className="rounded-xl overflow-hidden">
                <img src={content.sectionImages.afterBuyingGuide.src} alt={content.sectionImages.afterBuyingGuide.alt} className="w-full object-cover" style={{ maxHeight: 400 }} />
                {content.sectionImages.afterBuyingGuide.caption && <p className="text-xs text-center py-2 italic" style={{ color: textMuted, background: dark ? "#1c1a17" : "#fafafa" }}>{content.sectionImages.afterBuyingGuide.caption}</p>}
              </div>
            )}
            <h2 className="text-lg sm:text-xl font-extrabold" style={{ color: textPrimary }}>Detailed reviews</h2>
            <div className="space-y-4">
              {content.products.map((product, i) => (
                <div key={i} className="p-5 rounded-xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-extrabold" style={{ color: textPrimary }}>{i + 1}. {product.name}</h3>
                        {product.badge && <span className="text-[9px] font-bold px-2 py-0.5 rounded text-white" style={{ background: accent }}>{product.badge}</span>}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm">{"⭐".repeat(Math.round(product.rating))}</span>
                        <span className="text-xs font-semibold" style={{ color: textMuted }}>{product.rating}/5</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg font-black" style={{ color: textPrimary }}>{product.price}</div>
                      <a href={product.storeUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold no-underline" style={{ color: accent }}>Buy on {product.store} →</a>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "#22c55e" }}>✓ Pros</p>
                      {product.pros.map((pro, j) => (
                        <p key={j} className="text-xs mb-1" style={{ color: textSecondary }}>+ {pro}</p>
                      ))}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "#ef4444" }}>✕ Cons</p>
                      {product.cons.map((con, j) => (
                        <p key={j} className="text-xs mb-1" style={{ color: textSecondary }}>– {con}</p>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 text-sm" style={{ borderTop: `1px solid ${border}`, color: textSecondary }}>
                    <strong style={{ color: textPrimary }}>Verdict:</strong> {product.verdict}
                  </div>
                </div>
              ))}
            </div>

            {/* Image after products */}
            {content.sectionImages?.afterProducts && (
              <div className="rounded-xl overflow-hidden">
                <img src={content.sectionImages.afterProducts.src} alt={content.sectionImages.afterProducts.alt} className="w-full object-cover" style={{ maxHeight: 400 }} />
                {content.sectionImages.afterProducts.caption && <p className="text-xs text-center py-2 italic" style={{ color: textMuted, background: dark ? "#1c1a17" : "#fafafa" }}>{content.sectionImages.afterProducts.caption}</p>}
              </div>
            )}

            {/* Buying guide - detailed context */}
            {content.buyingGuide.length > 0 && (
              <>
                <h2 className="text-lg sm:text-xl font-extrabold" style={{ color: textPrimary }}>Buying guide</h2>
                {content.buyingGuide.map((section, i) => (
                  <div key={i}>
                    <h3 className="text-base font-bold mb-2" style={{ color: textPrimary }}>{section.heading}</h3>
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-sm sm:text-[15px] leading-relaxed mb-3" style={{ color: textSecondary }}>{p}</p>
                    ))}
                    {section.tip && (
                      <div className="flex items-start gap-3 p-4 rounded-xl mt-3" style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}>
                        <span className="text-base mt-0.5">💡</span>
                        <p className="text-sm leading-relaxed" style={{ color: textPrimary }}>{section.tip}</p>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}

            {/* Conclusion */}
            <div className="p-5 rounded-xl" style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}>
              <h2 className="text-base font-extrabold mb-2" style={{ color: textPrimary }}>Bottom line</h2>
              <p className="text-sm leading-relaxed" style={{ color: textSecondary }}>{content.conclusion}</p>
            </div>
          </div>
        ) : (
          /* Coming soon */
          <div className="text-center py-16 rounded-2xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
            <div className="text-4xl mb-4">🛠️</div>
            <h2 className="text-xl font-extrabold mb-2" style={{ color: textPrimary }}>This gear guide is being written</h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: textSecondary }}>We&apos;re testing products and writing real reviews — not copying spec sheets. Check back soon.</p>
            <Link href="/gear" className="inline-block mt-6 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: accent }}>← Back to all gear guides</Link>
          </div>
        )}

        {/* Related gear guides */}
        <div className="mt-12 pt-8" style={{ borderTop: `1px solid ${border}` }}>
          <h3 className="text-base font-extrabold mb-4" style={{ color: textPrimary }}>More gear guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {otherSlugs.map(s => {
              const m = GEAR_GUIDE_META[s];
              return (
                <Link key={s} href={`/gear/${s}`} className="p-4 rounded-xl no-underline transition-all hover:-translate-y-0.5" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: accent }}>{m.category}</span>
                  <p className="text-sm font-bold mt-1 leading-snug" style={{ color: textPrimary }}>{m.title}</p>
                  <p className="text-[10px] mt-1" style={{ color: textMuted }}>📍 {m.dest}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer accent={accent} />
    </div>
  );
}
