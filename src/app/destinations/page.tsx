import type { Metadata } from "next";
import { DESTINATIONS } from "@/lib/data";
import { DestinationsClient } from "./DestinationsClient";

export const metadata: Metadata = {
  alternates: { canonical: "/destinations" },
  title: "Himalayan Destination Guides: Routes, Permits & Safety",
  description:
    "Browse TravelBoa's in-depth Nainital, Kedarnath, Spiti and Lachung guides, with more Himalayan destinations coming soon.",
  openGraph: {
    title: "Himalayan Destination Guides: Routes, Permits & Safety",
    description: "Practical Indian Himalayan destination guides for routes, seasons, permits and trip planning.",
  },
};

const PUBLISHED_DESTINATIONS = DESTINATIONS.filter((destination) =>
  ["nainital", "kedarnath", "spiti", "lachung"].includes(destination.slug),
);

const hubLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Destinations",
  url: "https://www.travelboa.com/destinations",
  isPartOf: { "@id": "https://www.travelboa.com/#website" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: PUBLISHED_DESTINATIONS.length,
    itemListElement: PUBLISHED_DESTINATIONS.map((d, i) => ({
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
