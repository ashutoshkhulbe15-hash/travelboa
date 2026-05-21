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

  // Related guides
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
          <div className="flex items-center gap-4 mt-4">
            <span className="text-xs" style={{ color: textMuted }}>📖 {guide.min} min read</span>
            <span className="text-xs" style={{ color: textMuted }}>✍️ TravelBoa team</span>
            <span className="text-xs" style={{ color: textMuted }}>📍 Written from Dehradun</span>
          </div>
        </div>

        {/* Content */}
        {content ? (
          <div className="space-y-8">
            {content.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-lg sm:text-xl font-extrabold mb-3" style={{ color: textPrimary }}>{section.heading}</h2>
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-sm sm:text-[15px] leading-relaxed mb-3" style={{ color: textSecondary }}>{para}</p>
                ))}
                {section.tip && (
                  <div className="flex items-start gap-3 p-4 rounded-xl mt-3" style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}>
                    <span className="text-base mt-0.5">💡</span>
                    <p className="text-sm leading-relaxed" style={{ color: textPrimary }}>{section.tip}</p>
                  </div>
                )}
                {section.warning && (
                  <div className="flex items-start gap-3 p-4 rounded-xl mt-3" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
                    <span className="text-base mt-0.5">⚠️</span>
                    <p className="text-sm leading-relaxed text-amber-800">{section.warning}</p>
                  </div>
                )}
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
              </div>
            ))}
          </div>
        ) : (
          /* Coming soon placeholder */
          <div className="text-center py-16 rounded-2xl" style={{ background: cardBg, border: `1.5px solid ${border}` }}>
            <div className="text-4xl mb-4">✍️</div>
            <h2 className="text-xl font-extrabold mb-2" style={{ color: textPrimary }}>This guide is being written</h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: textSecondary }}>We&apos;re working on this guide right now. It&apos;ll be a detailed, first-hand article based on real experience — not AI filler. Check back soon.</p>
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
