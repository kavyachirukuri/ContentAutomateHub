import { MetadataRoute } from "next";
import { SERVICE_CATEGORIES } from "@/lib/services-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.synkraai.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/book-call`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICE_CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/services/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages];
}
