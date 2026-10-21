import type { MetadataRoute } from "next";
import { salon } from "@/config/salon";
export default function sitemap(): MetadataRoute.Sitemap {
  return salon.websiteUrl ? [{ url: salon.websiteUrl, changeFrequency: "monthly", priority: 1 }] : [];
}
