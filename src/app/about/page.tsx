import type { Metadata } from "next";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  title: "About TravelBoa — Who We Are & How We Work",
  description: "TravelBoa is built in Dehradun by someone who lives near these destinations. Learn about our editorial standards, data sources, and affiliate transparency.",
};

export default function About() {
  return <AboutPage />;
}
