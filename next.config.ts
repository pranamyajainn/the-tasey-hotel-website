import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Source photos are 1280-1600px wide. Cap generated sizes there so
    // Next.js never requests (and upscales to) larger variants like 3840px.
    deviceSizes: [640, 750, 828, 1080, 1200, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
