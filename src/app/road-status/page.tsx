import type { Metadata } from "next";
import { RoadStatusDashboard } from "./RoadStatusDashboard";

export const metadata: Metadata = {
  alternates: { canonical: "/road-status" },
  title: "Himalayan Road Status: Official Verification Sources",
  description: "Official sources and a safe verification process for Himalayan road conditions. TravelBoa's route board is being rebuilt and is not a live feed.",
  robots: { index: false, follow: true },
};

export default function RoadStatusPage() {
  return <RoadStatusDashboard />;
}
