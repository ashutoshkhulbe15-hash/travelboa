import type { Metadata } from "next";
import { DestinationsClient } from "./DestinationsClient";

export const metadata: Metadata = {
  title: "Destinations - Pilgrimage & Adventure Travel in India | TravelBoa",
  description: "Explore all destinations covered by TravelBoa. Kedarnath, Spiti, Ladakh, Vaishno Devi, Chopta and more. Full guides, packing lists, road status, and gear recommendations.",
  openGraph: {
    title: "Destinations - Pilgrimage & Adventure Travel in India | TravelBoa",
    description: "Explore all destinations covered by TravelBoa with full guides, packing lists, and road status.",
  },
};

export default function DestinationsPage() {
  return <DestinationsClient />;
}
