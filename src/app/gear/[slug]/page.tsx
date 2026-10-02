import { GEAR_SLUGS, GEAR_GUIDE_META } from "@/lib/gear-content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialReviewNotice } from "@/components/EditorialReviewNotice";

export function generateStaticParams() {
  return GEAR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = GEAR_GUIDE_META[slug as keyof typeof GEAR_GUIDE_META];
  if (!meta) return { title: "Gear guide not found — TravelBoa" };
  return {
    title: `${meta.title}: Coming Soon`,
    description: "This TravelBoa gear guide is coming soon.",
    alternates: { canonical: `/gear/${slug}` },
    robots: { index: false, follow: true },
  };
}

export default async function GearGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = GEAR_GUIDE_META[slug as keyof typeof GEAR_GUIDE_META];
  if (!meta) notFound();
  return (
    <EditorialReviewNotice
      title={`${meta.title} coming soon`}
      description="We are preparing this gear guide for the TravelBoa collection."
      backHref="/gear"
      backLabel="Return to gear guides"
    />
  );
}
