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
    title: `What to Buy for ${dest.name} - Gear Checklist with Buy Links | TravelBoa`,
    description: `Complete gear checklist for ${dest.name} at ${dest.altitude.toLocaleString()}m. Every item with buy links to Amazon and Decathlon. Interactive checklist that saves your progress.`,
  };
}

export default async function PackingPage({ params }: Props) {
  const { destination: slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();
  return <PackingChecklist destination={dest} />;
}
