import { kedarnath } from "./kedarnath";
import { spiti } from "./spiti";
import { vaishnoDevi } from "./vaishno-devi";
import { ladakh } from "./ladakh";
import { chopta } from "./chopta";
import { badrinath } from "./badrinath";
import { rishikesh } from "./rishikesh";
import { valleyOfFlowers } from "./valley-of-flowers";
import { manali } from "./manali";
import { shimla } from "./shimla";
import { dharamshala } from "./dharamshala";
import { hemkundSahib } from "./hemkund-sahib";
import type { DestinationData } from "./types";

export type { DestinationData } from "./types";

export const destinations: Record<string, DestinationData> = {
  kedarnath,
  spiti,
  "vaishno-devi": vaishnoDevi,
  ladakh,
  chopta,
  badrinath,
  rishikesh,
  "valley-of-flowers": valleyOfFlowers,
  manali,
  shimla,
  dharamshala,
  "hemkund-sahib": hemkundSahib,
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
