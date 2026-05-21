import { getAllDestinations } from "@/lib/destinations";

const BASE_URL = "https://www.travelboa.com";

export default async function sitemap() {
  const destinations = getAllDestinations();

  const destPages = destinations.flatMap((d) => [
    { url: `${BASE_URL}/${d.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/${d.slug}/packing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    ...d.subPages.map((sp) => ({
      url: `${BASE_URL}/${d.slug}/${sp.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]);

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${BASE_URL}/road-status`, lastModified: new Date(), changeFrequency: "hourly" as const, priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    ...destPages,
  ];
}
