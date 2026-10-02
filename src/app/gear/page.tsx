import type { Metadata } from "next";
import { GEAR_SLUGS, GEAR_GUIDE_META, type GearSlug } from "@/lib/gear-content";
import { GearClient } from "./GearClient";

export const metadata: Metadata = {
  alternates: { canonical: "/gear" },
  title: "Himalaya Trek Gear Planner: Review in Progress",
  description:
    "Destination-specific gear planning tools for Indian mountain travel. Product-testing claims and prices are being re-verified before search publication.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Himalaya Trek Gear Planner: Review in Progress",
    description: "Destination-specific gear planning tools currently undergoing editorial review.",
  },
};

const hubLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gear guides",
  url: "https://www.travelboa.com/gear",
  isPartOf: { "@id": "https://www.travelboa.com/#website" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: GEAR_SLUGS.length,
    itemListElement: GEAR_SLUGS.map((slug, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: GEAR_GUIDE_META[slug as GearSlug].title,
      url: `https://www.travelboa.com/gear/${slug}`,
    })),
  },
};

export default function GearPage() {
  return (
    <>
      <GearClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubLd) }} />
    </>
  );
}
