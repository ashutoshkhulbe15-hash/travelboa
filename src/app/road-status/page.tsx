import type { Metadata } from "next";
import { RoadStatusDashboard } from "./RoadStatusDashboard";

export const metadata: Metadata = {
  title: "Live Road Status — Uttarakhand, Himachal, Ladakh Routes | TravelBoa",
  description: "Real-time road conditions for Kedarnath, Spiti Valley, Ladakh, Vaishno Devi and other pilgrimage and adventure routes. Updated every 30-60 minutes from PWD and BRO sources.",
};

export default function RoadStatusPage() {
  return <RoadStatusDashboard />;
}
