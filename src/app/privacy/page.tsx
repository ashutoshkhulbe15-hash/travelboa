import type { Metadata } from "next";
import { PrivacyPage } from "./PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy — TravelBoa",
  description: "How TravelBoa handles your data, cookies, and third-party services.",
};

export default function Privacy() {
  return <PrivacyPage />;
}
