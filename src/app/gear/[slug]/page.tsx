import { GEAR_SLUGS, GEAR_GUIDE_META } from "@/lib/gear-content";
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
  return {
    title: `${meta.title} — TravelBoa`,
    description: meta.desc,
  };
}

export default async function GearGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = GEAR_GUIDE_META[slug as keyof typeof GEAR_GUIDE_META];
  if (!meta) notFound();
  return <GearArticle slug={slug} meta={meta} />;
}
