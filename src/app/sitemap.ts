import { getAllDestinations } from "@/lib/destinations";
import { GUIDES } from "@/lib/data";
import { GEAR_SLUGS } from "@/lib/gear-content";

const BASE_URL = "https://www.travelboa.com";
const LAST_MOD = new Date("2026-07-12");

export default async function sitemap() {
  const destinations = getAllDestinations();

  const destPages = destinations.flatMap((d) => [
    { url: `${BASE_URL}/${d.slug}`, lastModified: LAST_MOD, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/${d.slug}/packing`, lastModified: LAST_MOD, changeFrequency: "monthly" as const, priority: 0.7 },
  ]);

  const guidePages = GUIDES.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const gearPages = GEAR_SLUGS.map((slug) => ({
    url: `${BASE_URL}/gear/${slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, lastModified: LAST_MOD, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${BASE_URL}/destinations`, lastModified: LAST_MOD, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/road-status`, lastModified: LAST_MOD, changeFrequency: "hourly" as const, priority: 0.9 },
    { url: `${BASE_URL}/guides`, lastModified: LAST_MOD, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/gear`, lastModified: LAST_MOD, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/dashboard`, lastModified: LAST_MOD, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${BASE_URL}/about`, lastModified: LAST_MOD, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: LAST_MOD, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: LAST_MOD, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/contact`, lastModified: LAST_MOD, changeFrequency: "yearly" as const, priority: 0.4 },
    ...destPages,
    ...guidePages,
    ...gearPages,
  ];
}
