import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * Note on the disallowed paths: robots.txt only stops well-behaved crawlers
 * from indexing. The files under /New Images/ and the superseded photos in
 * /images stay reachable by direct URL. Deleting them is the only way to make
 * them unreachable.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/New Images/", "/New%20Images/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
