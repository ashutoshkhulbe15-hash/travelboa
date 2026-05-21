import type { Metadata } from "next";
import { GuidesClient } from "./GuidesClient";

export const metadata: Metadata = {
  title: "Travel Guides - Altitude, Permits, Packing, Budget | TravelBoa",
  description: "Practical travel guides for Indian mountain trips. Acclimatization, Char Dham permits, packing lists, budget breakdowns, ATM guides, monsoon safety. Written from Dehradun.",
  openGraph: {
    title: "Travel Guides - Altitude, Permits, Packing, Budget | TravelBoa",
    description: "Practical travel guides for Indian mountain trips. Written from Dehradun.",
  },
};

export default function GuidesPage() {
  return <GuidesClient />;
}
