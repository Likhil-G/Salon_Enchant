import type { MetadataRoute } from "next";
import { salon } from "@/config/salon";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, ...(salon.websiteUrl && { sitemap: `${salon.websiteUrl}/sitemap.xml` }) };
}
