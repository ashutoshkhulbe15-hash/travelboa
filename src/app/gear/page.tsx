import type { Metadata } from "next";
import { GearClient } from "./GearClient";

export const metadata: Metadata = {
  title: "Gear Guides - Best Jackets, Shoes, Bags for Mountain Travel | TravelBoa",
  description: "Destination-specific gear recommendations for Indian mountain travel. Best jackets for Kedarnath, shoes for Vaishno Devi, sleeping bags for Spiti. Tested picks with affiliate links.",
  openGraph: {
    title: "Gear Guides - Best Jackets, Shoes, Bags for Mountain Travel | TravelBoa",
    description: "Destination-specific gear recommendations. Tested picks for Indian mountain travel.",
  },
};

export default function GearPage() {
  return <GearClient />;
}
