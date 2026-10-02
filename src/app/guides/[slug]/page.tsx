import { GUIDES } from "@/lib/data";
import { guideContent } from "@/lib/guide-content";
import { GuideArticle } from "./GuideArticle";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialReviewNotice } from "@/components/EditorialReviewNotice";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

// Re-enable individual guides only after their claims, sources and author
// experience have been checked. The pages remain accessible and followable.
const INDEXABLE_GUIDES = new Set<string>();

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) return { title: "Guide not found — TravelBoa" };
  if (!INDEXABLE_GUIDES.has(slug)) {
    return {
      title: `${guide.title}: Coming Soon`,
      description: "This TravelBoa planning guide is coming soon.",
      alternates: { canonical: `/guides/${slug}` },
      robots: { index: false, follow: true },
    };
  }
  const hero = guideContent[slug]?.heroImage?.src || "/og-default.png";
  return {
    title: guide.metaTitle,
    description: guide.desc,
    alternates: { canonical: `/guides/${slug}` },
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
  if (!INDEXABLE_GUIDES.has(slug)) {
    return (
      <EditorialReviewNotice
        title={`${guide.title} coming soon`}
        description="We are preparing this planning guide for the TravelBoa collection."
        backHref="/guides"
        backLabel="Return to guides"
      />
    );
  }
  return <GuideArticle guide={guide} />;
}
