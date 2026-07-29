import { notFound } from "next/navigation";
import { getDestination, getAllDestinationSlugs } from "@/lib/destinations";
import type { Metadata } from "next";
import { PackingChecklist } from "./PackingChecklist";

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
    title: `${dest.name} Packing List 2026: What to Buy`,
    description: `Gear checklist for ${dest.name} at ${dest.altitude.toLocaleString()}m, with buy links and prices. Tick items off as you pack; the list saves your progress.`,
    alternates: { canonical: `/${dest.slug}/packing` },
    openGraph: {
      title: `${dest.name} Packing Checklist | TravelBoa`,
      description: `Complete gear checklist for ${dest.name} at ${dest.altitude.toLocaleString()}m, with buy links.`,
      url: `https://www.travelboa.com/${dest.slug}/packing`,
      images: [{ url: `/${dest.slug}.jpg`, width: 1200, height: 630, alt: `${dest.name} packing checklist` }],
    },
  };
}

export default async function PackingPage({ params }: Props) {
  const { destination: slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();
  return <PackingChecklist destination={dest} />;
}
