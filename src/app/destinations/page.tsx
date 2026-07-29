import type { Metadata } from "next";
import { DESTINATIONS } from "@/lib/data";
import { DestinationsClient } from "./DestinationsClient";

export const metadata: Metadata = {
  alternates: { canonical: "/destinations" },
  title: "23 Himalayan Destinations: Pilgrimage & Trek Guides",
  description:
    "All 23 destinations I cover: Kedarnath, Spiti, Ladakh, Vaishno Devi, Chopta and more. Full guides, packing lists and road notes from Dehradun.",
  openGraph: {
    title: "23 Himalayan Destinations: Pilgrimage & Trek Guides",
    description: "Every destination I cover, with full guides, packing lists and road status.",
  },
};

const hubLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Destinations",
  url: "https://www.travelboa.com/destinations",
  isPartOf: { "@id": "https://www.travelboa.com/#website" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: DESTINATIONS.length,
    itemListElement: DESTINATIONS.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: d.name,
      url: `https://www.travelboa.com/${d.slug}`,
    })),
  },
};

export default function DestinationsPage() {
  return (
    <>
      <DestinationsClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubLd) }}
      />
    </>
  );
}
