import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono, Caveat } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelBoa: Indian Himalaya Guides, Roads & Packing Lists",
  description:
    "Human-edited guides to Kedarnath, Spiti, Ladakh and other Himalayan trips, with official-source checks, practical packing notes and clear safety limits.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.travelboa.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "TravelBoa: Indian Himalaya Guides, Roads & Packing Lists",
    description: "Human-edited Himalayan travel guides with official-source checks, practical planning notes and clear safety limits.",
    url: "https://www.travelboa.com",
    siteName: "TravelBoa",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "TravelBoa — Indian Himalaya travel guides from Uttarakhand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelBoa — Indian Himalaya Travel Guides",
    description: "Human-edited Himalayan guides, planning notes and packing lists from Uttarakhand.",
    images: ["/og-default.png"],
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.travelboa.com/#website",
      url: "https://www.travelboa.com",
      name: "TravelBoa",
      description: "Practical travel guides for the Indian Himalaya, written and maintained in Uttarakhand.",
      inLanguage: "en-IN",
      publisher: { "@id": "https://www.travelboa.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.travelboa.com/#organization",
      name: "TravelBoa",
      url: "https://www.travelboa.com",
      logo: { "@type": "ImageObject", url: "https://www.travelboa.com/android-chrome-512x512.png" },
      email: "hello@travelboa.com",
      foundingLocation: { "@type": "Place", name: "Uttarakhand, India" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${outfit.variable} ${plexMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SZRJENXP96"
          strategy="afterInteractive"
        />
        <Script
          id="travelboa-google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-SZRJENXP96');`,
          }}
        />
        <script
          id="travelboa-site-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
