import type { NextConfig } from "next";

const CANONICAL_HOST = "www.travelboa.com";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The .vercel.app production alias serves a full copy of the site and does
      // NOT get Vercel's automatic x-robots-tag: noindex (that only applies to
      // deployments without a production domain). Left alone it is a third
      // indexable host competing with www. Send it to the canonical host.
      {
        source: "/:path*",
        has: [{ type: "host", value: "travelboa.vercel.app" }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Belt and braces: if anything is ever served from the vercel.app host
        // before the redirect fires, make sure it is not indexable.
        source: "/:path*",
        has: [{ type: "host", value: "travelboa.vercel.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
