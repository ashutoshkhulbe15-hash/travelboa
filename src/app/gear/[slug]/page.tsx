import { GEAR_SLUGS, GEAR_GUIDE_META } from "@/lib/gear-content";
import { gearGuideContent, type GearSlug } from "@/lib/gear-content";
import { GearArticle } from "./GearArticle";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return GEAR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = GEAR_GUIDE_META[slug as keyof typeof GEAR_GUIDE_META];
  if (!meta) return { title: "Gear guide not found — TravelBoa" };
  const hero = gearGuideContent[slug as GearSlug]?.heroImage?.src || "/og-default.png";
  return {
    title: `${meta.title} — TravelBoa`,
    description: meta.desc,
    alternates: { canonical: `/gear/${slug}` },
    robots: { index: false, follow: true },
    openGraph: {
      title: meta.title,
      description: meta.desc,
      url: `https://www.travelboa.com/gear/${slug}`,
      type: "article",
      siteName: "TravelBoa",
      images: [{ url: hero, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.desc, images: [hero] },
  };
}

export default async function GearGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = GEAR_GUIDE_META[slug as keyof typeof GEAR_GUIDE_META];
  if (!meta) notFound();
  return <GearArticle slug={slug} meta={meta} />;
}
