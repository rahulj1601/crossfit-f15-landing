import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.cdn.filesafe.space",
      },
      {
        protocol: "https",
        hostname: "crossfitf15.com",
      },
    ],
  },
  async redirects() {
    return [
      // The GHL booking calendar (4MLW8Kg9AL4vM8CI9L2E) is configured to send
      // visitors to /thank-you/ after they book a slot. That page was never
      // built here, so every booked lead hit a 404 right after committing to
      // a time. Route it to the real confirmation page instead of relying on
      // the GHL setting alone, so this survives even if that setting reverts.
      {
        source: "/thank-you",
        destination: "/booked",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
