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
    title: `${meta.title}: Editorial Review in Progress`,
    description: "Product-use, price and availability claims are being verified before publication.",
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
      title={`${meta.title} is being re-checked`}
      description="Product use, availability, prices and recommendation claims are being verified before this guide is published."
      backHref="/gear"
      backLabel="Return to gear guides"
    />
  );
}
