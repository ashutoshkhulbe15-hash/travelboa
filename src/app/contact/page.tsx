import type { Metadata } from "next";
import { ContactPage } from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact — TravelBoa",
  description: "Get in touch with TravelBoa. Report outdated info, suggest destinations, or just say hello.",
};

export default function Contact() {
  return <ContactPage />;
}
