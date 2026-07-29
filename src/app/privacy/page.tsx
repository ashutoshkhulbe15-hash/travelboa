import type { Metadata } from "next";
import { PrivacyPage } from "./PrivacyPage";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy — TravelBoa",
  description: "How TravelBoa handles your data, cookies, analytics and third-party services, including Amazon Associates affiliate links.",
};

export default function Privacy() {
  return <PrivacyPage />;
}
