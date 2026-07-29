import type { Metadata } from "next";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About TravelBoa: Who Writes This & How",
  description:
    "TravelBoa is written in Dehradun by someone who lives near these trips. Editorial standards, data sources and affiliate transparency explained.",
};

/**
 * Every Article/TravelGuide on the site sets author.url to /about, so this page
 * defines the Person entity those references resolve to. Keep the @id stable.
 */
const aboutLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.travelboa.com/about#aboutpage",
      url: "https://www.travelboa.com/about",
      name: "About TravelBoa",
      isPartOf: { "@id": "https://www.travelboa.com/#website" },
      mainEntity: { "@id": "https://www.travelboa.com/about#person" },
    },
    {
      "@type": "Person",
      "@id": "https://www.travelboa.com/about#person",
      name: "Ash",
      url: "https://www.travelboa.com/about",
      email: "hello@travelboa.com",
      jobTitle: "Travel writer",
      homeLocation: {
        "@type": "Place",
        name: "Dehradun, Uttarakhand, India",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dehradun",
          addressRegion: "Uttarakhand",
          addressCountry: "IN",
        },
      },
      knowsAbout: [
        "Himalayan trekking",
        "Char Dham Yatra",
        "Spiti Valley",
        "Ladakh road trips",
        "High-altitude acclimatization",
      ],
      worksFor: { "@id": "https://www.travelboa.com/#organization" },
    },
  ],
};

export default function About() {
  return (
    <>
      <AboutPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }} />
    </>
  );
}
