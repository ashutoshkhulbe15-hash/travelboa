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
import { gangotri } from "./gangotri";
import { yamunotri } from "./yamunotri";
import { amarnath } from "./amarnath";
import { nainital } from "./nainital";
import { auli } from "./auli";
import { harKiDun } from "./har-ki-dun";
import { roopkund } from "./roopkund";
import { sandakphu } from "./sandakphu";
import { kasol } from "./kasol";
import { tirthanValley } from "./tirthan-valley";
import { lachung } from "./lachung";
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
  gangotri,
  yamunotri,
  amarnath,
  nainital,
  auli,
  "har-ki-dun": harKiDun,
  roopkund,
  sandakphu,
  kasol,
  "tirthan-valley": tirthanValley,
  lachung,
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
