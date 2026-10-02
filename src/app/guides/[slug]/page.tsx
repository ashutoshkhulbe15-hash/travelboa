import { GUIDES } from "@/lib/data";
import { guideContent } from "@/lib/guide-content";
import { GuideArticle } from "./GuideArticle";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) return { title: "Guide not found — TravelBoa" };
  const hero = guideContent[slug]?.heroImage?.src || "/og-default.png";
  return {
    title: guide.metaTitle,
    description: guide.desc,
    alternates: { canonical: `/guides/${slug}` },
    robots: { index: false, follow: true },
    openGraph: {
      title: guide.title,
      description: guide.desc,
      url: `https://www.travelboa.com/guides/${slug}`,
      type: "article",
      siteName: "TravelBoa",
      images: [{ url: hero, width: 1200, height: 630, alt: guide.title }],
    },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.desc, images: [hero] },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} />;
}
