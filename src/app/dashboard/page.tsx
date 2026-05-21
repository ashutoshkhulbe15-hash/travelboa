import type { Metadata } from "next";
import { DashboardClient } from "./DashboardClient";

export const metadata: Metadata = {
  title: "My Trip Dashboard - Personal Travel Planner | TravelBoa",
  description: "Create a personalized trip dashboard with checklists, weather, road status, emergency contacts, and notes. Save it, share it, take it on your trip.",
  openGraph: {
    title: "My Trip Dashboard - Personal Travel Planner | TravelBoa",
    description: "Create a personalized trip dashboard with checklists, weather, road status, and notes.",
  },
};

export default function DashboardPage() {
  return <DashboardClient />;
}
