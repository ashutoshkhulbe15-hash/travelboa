import { notFound } from "next/navigation";
import { getDestination, getAllDestinationSlugs } from "@/lib/destinations";
import type { Metadata } from "next";
import { DestinationGuide } from "./DestinationGuide";

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
    title: dest.metaTitle,
    description: dest.metaDescription,
    alternates: { canonical: `/${dest.slug}` },
    openGraph: {
      title: dest.metaTitle,
      description: dest.metaDescription,
      url: `https://www.travelboa.com/${dest.slug}`,
      type: "article",
      siteName: "TravelBoa",
      images: [{ url: `/${dest.slug}.jpg`, width: 1200, height: 630, alt: `${dest.name} — ${dest.tagline}` }],
    },
    twitter: { card: "summary_large_image", title: dest.metaTitle, description: dest.metaDescription, images: [`/${dest.slug}.jpg`] },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { destination: slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  return <DestinationGuide destination={dest} />;
}
