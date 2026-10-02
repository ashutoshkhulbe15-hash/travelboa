import { getAllDestinations } from "@/lib/destinations";
import { editorialForDestination } from "@/lib/editorial";

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
  "/about": "2026-09-30",
  "/kedarnath": "2026-10-02",
  "/spiti": "2026-10-02",
  "/lachung": "2026-10-02",
  "/nainital": "2026-10-02",
  "/valley-of-flowers": "2026-10-03",
  "/kasol": "2026-10-03",
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

  // Only canonical, indexable destination guides belong in the sitemap.
  // The templated packing tools remain useful to people but are noindexed
  // until each has genuinely distinct editorial content and expert review.
  const destPages = destinations
    .filter((d) => editorialForDestination(d.slug).searchIndexable)
    .map((d) => entry(`/${d.slug}`, "monthly", 0.9));


  return [
    entry("/", "weekly", 1.0),
    entry("/destinations", "monthly", 0.9),
    entry("/about", "yearly", 0.5),
    entry("/privacy", "yearly", 0.3),
    entry("/terms", "yearly", 0.3),
    entry("/contact", "yearly", 0.4),
    ...destPages,
  ];
}
