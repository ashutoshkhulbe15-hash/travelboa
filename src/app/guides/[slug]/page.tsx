import { GUIDES } from "@/lib/data";
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
  return {
    title: `${guide.title} — TravelBoa`,
    description: guide.desc,
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} />;
}
