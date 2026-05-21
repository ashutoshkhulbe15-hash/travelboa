import type { Metadata } from "next";
import { TermsPage } from "./TermsPage";

export const metadata: Metadata = {
  title: "Terms of Use — TravelBoa",
  description: "Terms and conditions for using TravelBoa.",
};

export default function Terms() {
  return <TermsPage />;
}
