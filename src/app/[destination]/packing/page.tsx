import { notFound } from "next/navigation";
import { getDestination, getAllDestinationSlugs } from "@/lib/destinations";
import type { Metadata } from "next";
import { EditorialReviewNotice } from "@/components/EditorialReviewNotice";

interface Props {
  params: Promise<{ destination: string }>;
}

export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ destination: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { destination: slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return {};
  return {
    title: `${dest.name} Packing List: Editorial Review in Progress`,
    description: `${dest.name} packing recommendations are being re-checked before publication.`,
    robots: { index: false, follow: true },
    alternates: { canonical: `/${dest.slug}/packing` },
    openGraph: {
      title: `${dest.name} Packing List: Editorial Review in Progress`,
      description: `${dest.name} packing recommendations are being re-checked before publication.`,
      url: `https://www.travelboa.com/${dest.slug}/packing`,
      images: [{ url: `/${dest.slug}.jpg`, width: 1200, height: 630, alt: `${dest.name} packing checklist` }],
    },
  };
}

export default async function PackingPage({ params }: Props) {
  const { destination: slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();
  return (
    <EditorialReviewNotice
      title={`${dest.name} packing checklist is being re-checked`}
      description="The checklist, product references and seasonal recommendations are being reviewed before publication."
      backHref={`/${dest.slug}`}
      backLabel={`Return to ${dest.name}`}
    />
  );
}
