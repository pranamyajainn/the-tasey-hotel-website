import type { NextConfig } from "next";

/**
 * Content Security Policy.
 *
 * The site loads no third-party scripts, styles or fonts at runtime —
 * next/font downloads the typefaces at build time and serves them from
 * /_next/static — so every fetch directive can stay on 'self'.
 *
 * 'unsafe-inline' is unavoidable for script-src and style-src: Next.js emits
 * inline bootstrap scripts and inline style tags, and the nonce-based
 * alternative requires middleware, which would force this statically
 * prerendered page to render per-request. The policy still blocks the thing
 * that actually matters here — loading executable code from another origin.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'self'",
  "frame-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Belt-and-braces with frame-ancestors, for older browsers that ignore CSP.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Source photos are 1280-1600px wide. Cap generated sizes there so
    // Next.js never requests (and upscales to) larger variants like 3840px.
    deviceSizes: [640, 750, 828, 1080, 1200, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    // No remote images are used, so allow none.
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        // One host for Google to index. Both hosts currently serve 200, which
        // splits signals between two copies of the site. If the apex is ever
        // set to redirect to www in Vercel's Domains settings, remove this or
        // the two will loop.
        source: "/:path*",
        has: [{ type: "host", value: "www.thetaseyhotel.com" }],
        destination: "https://thetaseyhotel.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // tasey-hotel.vercel.app and every preview deploy serve the same page
        // as the real domain. Keep them out of the index. This is a header,
        // not a robots.txt Disallow, because Google has to be able to crawl a
        // URL to see that it must not be indexed.
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        // Photos are replaced in place under the same filename when the hotel
        // sends new ones, so these deliberately stop short of `immutable`: a
        // year-long cache would strand returning visitors on the old picture.
        // An hour in the browser, a day at the edge, served stale while
        // revalidating behind the scenes.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
