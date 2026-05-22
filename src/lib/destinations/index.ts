import { kedarnath } from "./kedarnath";
import { spiti } from "./spiti";
import { vaishnoDevi } from "./vaishno-devi";
import { ladakh } from "./ladakh";
import type { DestinationData } from "./types";

export type { DestinationData } from "./types";

export const destinations: Record<string, DestinationData> = {
  kedarnath,
  spiti,
  "vaishno-devi": vaishnoDevi,
  ladakh,
};

export function getDestination(slug: string): DestinationData | undefined {
  return destinations[slug];
}

export function getAllDestinationSlugs(): string[] {
  return Object.keys(destinations);
}

export function getAllDestinations(): DestinationData[] {
  return Object.values(destinations);
}
