import type { Metadata } from "next";
import { DashboardClient } from "./DashboardClient";

export const metadata: Metadata = {
  alternates: { canonical: "/dashboard" },
  title: "My Trip Dashboard: Personal Himalaya Trip Planner",
  description: "Create a personalized trip dashboard with checklists, weather, road status, emergency contacts, and notes. Save it, share it, take it on your trip.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "My Trip Dashboard: Personal Himalaya Trip Planner",
    description: "Create a personalized trip dashboard with checklists, weather, road status, and notes.",
  },
};

export default function DashboardPage() {
  return <DashboardClient />;
}
