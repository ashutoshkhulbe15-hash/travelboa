import type { Metadata } from "next";

import "./globals.css";

const outfit = { variable: "" };

export const metadata: Metadata = {
  title: "TravelBoa — Indian Himalaya Travel Guides, Road Status & Packing Lists",
  description:
    "First-hand guides to Kedarnath, Spiti, Ladakh and 20 more Himalayan destinations. Live road conditions, altitude weather, packing checklists and honest gear picks. Written from Dehradun.",
  keywords: [
    "Kedarnath trek", "Spiti road trip", "Vaishno Devi guide",
    "road status Uttarakhand", "trekking packing list", "India travel companion",
  ],
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
    title: "TravelBoa — Indian Himalaya Travel Guides, Road Status & Packing Lists",
    description: "First-hand guides to Kedarnath, Spiti, Ladakh and 20 more. Road status, altitude weather, packing checklists. Written from Dehradun.",
    url: "https://www.travelboa.com",
    siteName: "TravelBoa",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "TravelBoa — Indian Himalaya travel guides written from Dehradun" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelBoa — Indian Himalaya Travel Guides",
    description: "First-hand Himalayan guides, road status and packing lists. Written from Dehradun.",
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
      description: "First-hand travel guides for the Indian Himalaya, written from Dehradun.",
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
      foundingLocation: { "@type": "Place", name: "Dehradun, Uttarakhand, India" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SZRJENXP96" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-SZRJENXP96');`,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      </body>
    </html>
  );
}
