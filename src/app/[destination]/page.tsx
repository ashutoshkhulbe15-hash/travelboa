import { notFound } from "next/navigation";
import { getDestination, getAllDestinationSlugs } from "@/lib/destinations";
import type { Metadata } from "next";
import { DestinationGuide } from "./DestinationGuide";
import { editorialForDestination } from "@/lib/editorial";
import { EditorialReviewNotice } from "@/components/EditorialReviewNotice";

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
  const editorial = editorialForDestination(slug);
  if (!editorial.searchIndexable) {
    return {
      title: `${dest.name} Guide: Editorial Review in Progress`,
      description: `${dest.name} planning information is being source-checked before publication.`,
      alternates: { canonical: `/${dest.slug}` },
      robots: { index: false, follow: true },
    };
  }
  return {
    title: dest.metaTitle,
    description: dest.metaDescription,
    alternates: { canonical: `/${dest.slug}` },
    openGraph: {
      title: dest.metaTitle,
      description: dest.metaDescription,
      url: `https://www.travelboa.com/${dest.slug}`,
      type: "article",
      siteName: "TravelBoa",
      images: [{ url: dest.heroImage ?? `/${dest.slug}.jpg`, width: 1200, height: 630, alt: `${dest.name} — ${dest.tagline}` }],
    },
    twitter: { card: "summary_large_image", title: dest.metaTitle, description: dest.metaDescription, images: [dest.heroImage ?? `/${dest.slug}.jpg`] },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { destination: slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();
  const editorial = editorialForDestination(slug);

  if (!editorial.searchIndexable) {
    return (
      <EditorialReviewNotice
        title={`${dest.name} guide is being re-checked`}
        description={editorial.reviewNote}
        backHref="/destinations"
        backLabel="Browse published guides"
      />
    );
  }

  const travelGuideLd = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    name: dest.metaTitle,
    description: dest.metaDescription,
    url: `https://www.travelboa.com/${dest.slug}`,
    image: [`https://www.travelboa.com${dest.heroImage ?? `/${dest.slug}.jpg`}`],
    inLanguage: "en-IN",
    datePublished: "2026-05-22",
    dateModified: editorial.modifiedISO,
    author: { "@type": "Person", name: "Ash", url: "https://www.travelboa.com/about" },
    publisher: {
      "@type": "Organization",
      name: "TravelBoa",
      url: "https://www.travelboa.com",
      logo: { "@type": "ImageObject", url: "https://www.travelboa.com/android-chrome-512x512.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.travelboa.com/${dest.slug}` },
    about: {
      "@type": "TouristDestination",
      name: dest.name,
      description: dest.tagline,
      address: { "@type": "PostalAddress", addressRegion: dest.state, addressCountry: "IN" },
    },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dest.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.travelboa.com" },
      { "@type": "ListItem", position: 2, name: "Destinations", item: "https://www.travelboa.com/destinations" },
      { "@type": "ListItem", position: 3, name: dest.name, item: `https://www.travelboa.com/${dest.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <DestinationGuide destination={dest} />
    </>
  );
}
