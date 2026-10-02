import type { Metadata } from "next";
import { GUIDES } from "@/lib/data";
import { GuidesClient } from "./GuidesClient";

export const metadata: Metadata = {
  alternates: { canonical: "/guides" },
  title: "Himalaya Travel Guides: Permits, Altitude & Budget",
  description:
    "Indian mountain planning guides currently undergoing source, safety and first-hand-experience review before search publication.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Himalaya Travel Guides: Permits, Altitude & Budget",
    description: "Indian mountain planning guides currently undergoing editorial review.",
  },
};

const hubLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Travel guides",
  url: "https://www.travelboa.com/guides",
  isPartOf: { "@id": "https://www.travelboa.com/#website" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: GUIDES.length,
    itemListElement: GUIDES.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.title,
      url: `https://www.travelboa.com/guides/${g.slug}`,
    })),
  },
};

export default function GuidesPage() {
  return (
    <>
      <GuidesClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubLd) }}
      />
    </>
  );
}
