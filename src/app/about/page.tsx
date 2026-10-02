import type { Metadata } from "next";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About TravelBoa: Nainital Roots & Editorial Method",
  description:
    "Meet the Uttarakhand-based writer behind TravelBoa and see how route, permit, safety and gear information is researched, checked and corrected.",
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
      image: "https://www.travelboa.com/ash-author.jpg",
      email: "hello@travelboa.com",
      jobTitle: "Founder and editor of TravelBoa",
      birthPlace: {
        "@type": "Place",
        name: "Nainital, Uttarakhand, India",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nainital",
          addressRegion: "Uttarakhand",
          addressCountry: "IN",
        },
      },
      homeLocation: { "@type": "Place", name: "Dehradun, Uttarakhand, India" },
      knowsAbout: [
        "Nainital",
        "Kumaon travel",
        "Uttarakhand travel planning",
        "Travel research and editorial verification",
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
