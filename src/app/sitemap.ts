import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Trailing slash so the entry is the exact URL Google indexes and Search
  // Console inspects; without it, URL Inspection reports no referring sitemap.
  return [{ url: `${SITE_URL}/` }];
}
