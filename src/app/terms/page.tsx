import type { Metadata } from "next";
import { TermsPage } from "./TermsPage";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Use — TravelBoa",
  description: "Terms and conditions for using TravelBoa, including accuracy limits on route and road information, and affiliate disclosure.",
};

export default function Terms() {
  return <TermsPage />;
}
