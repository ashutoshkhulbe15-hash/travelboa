import { getAllDestinations } from "@/lib/destinations";
import { GUIDES } from "@/lib/data";
import { GEAR_SLUGS } from "@/lib/gear-content";

const BASE_URL = "https://www.travelboa.com";

/**
 * Real per-page revision dates.
 *
 * Google ignores <lastmod> once it notices the value never matches actual
 * change. Update the specific entry you touched; anything not listed falls
 * back to SITE_DEFAULT.
 */
const SITE_DEFAULT = "2026-07-30";

const LAST_UPDATED: Record<string, string> = {
  "/kedarnath": "2026-07-30",
  "/guides/kedarnath-opening-date-2026": "2026-07-30",
  "/guides/best-time-char-dham": "2026-07-30",
  "/road-status": "2026-07-28",
};

const lm = (path: string) => new Date(LAST_UPDATED[path] ?? SITE_DEFAULT);

type Freq = "daily" | "weekly" | "monthly" | "yearly";
type Entry = { url: string; lastModified: Date; changeFrequency: Freq; priority: number };

const entry = (path: string, changeFrequency: Freq, priority: number): Entry => ({
  url: path === "/" ? BASE_URL : `${BASE_URL}${path}`,
  lastModified: lm(path),
  changeFrequency,
  priority,
});

export default async function sitemap(): Promise<Entry[]> {
  const destinations = getAllDestinations();

  const destPages = destinations.flatMap((d) => [
    entry(`/${d.slug}`, "monthly", 0.9),
    entry(`/${d.slug}/packing`, "monthly", 0.7),
  ]);

  const guidePages = GUIDES.map((g) => entry(`/guides/${g.slug}`, "monthly", 0.8));
  const gearPages = GEAR_SLUGS.map((slug) => entry(`/gear/${slug}`, "monthly", 0.8));

  return [
    entry("/", "weekly", 1.0),
    entry("/destinations", "monthly", 0.9),
    // Compiled by hand, not a live feed — do not claim hourly change.
    entry("/road-status", "weekly", 0.8),
    entry("/guides", "monthly", 0.8),
    entry("/gear", "monthly", 0.8),
    entry("/dashboard", "yearly", 0.4),
    entry("/about", "yearly", 0.5),
    entry("/privacy", "yearly", 0.3),
    entry("/terms", "yearly", 0.3),
    entry("/contact", "yearly", 0.4),
    ...destPages,
    ...guidePages,
    ...gearPages,
  ];
}
