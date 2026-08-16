import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.synkraai.in";

export default function sitemap(): MetadataRoute.Sitemap {
  // Note: services live on a single /services page with in-page anchors per
  // pillar (see lib/services-data.ts), not on separate routes — so only the
  // real, resolvable routes are listed here. Search engines ignore URL
  // fragments (#anchor) for indexing purposes, so per-service entries would
  // just be duplicates of /services.
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/book-call`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
