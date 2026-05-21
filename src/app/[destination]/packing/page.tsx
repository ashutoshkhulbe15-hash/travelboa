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
    title: `${dest.name} Packing Checklist 2026 — What to Pack | TravelBoa`,
    description: `Complete packing list for ${dest.name} at ${dest.altitude.toLocaleString()}m. Altitude-specific gear with Amazon and Decathlon buy links. Interactive checklist you can tick off.`,
  };
}

export default async function PackingPage({ params }: Props) {
  const { destination: slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();
  return <PackingChecklist destination={dest} />;
}
