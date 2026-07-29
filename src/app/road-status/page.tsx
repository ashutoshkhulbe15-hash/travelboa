import type { Metadata } from "next";
import { RoadStatusDashboard } from "./RoadStatusDashboard";

export const metadata: Metadata = {
  alternates: { canonical: "/road-status" },
  title: "Road Status: Uttarakhand, Himachal & Ladakh Routes",
  description: "Road conditions for Kedarnath, Spiti, Ladakh and Vaishno Devi routes. Compiled by hand from PWD and BRO bulletins. Not a live feed, so confirm locally.",
};

export default function RoadStatusPage() {
  return <RoadStatusDashboard />;
}
