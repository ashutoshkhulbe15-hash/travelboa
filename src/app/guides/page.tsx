import type { Metadata } from "next";
import { GUIDES } from "@/lib/data";
import { GuidesClient } from "./GuidesClient";

export const metadata: Metadata = {
  alternates: { canonical: "/guides" },
  title: "Himalaya Travel Guides: Permits, Altitude & Budget",
  description:
    "Practical guides for Indian mountain trips: acclimatization, Char Dham permits, packing, budgets, ATMs and monsoon safety. Written from Dehradun.",
  openGraph: {
    title: "Himalaya Travel Guides: Permits, Altitude & Budget",
    description: "Practical guides for Indian mountain trips. Written from Dehradun.",
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
