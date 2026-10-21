import type { Metadata, Viewport } from "next";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/inter";
import "./globals.css";
import { salon } from "@/config/salon";
import Analytics from "@/components/layout/Analytics";

const place = salon.locality || salon.city;
const description = `${salon.name} in ${place}. Hair colour, balayage, highlights, styling, hair spa and beauty services. Enquire and book your appointment on WhatsApp.`;

export const metadata: Metadata = {
  metadataBase: new URL(salon.websiteUrl || "http://localhost:3000"),
  title: `${salon.name} | Salon in ${place}`,
  description,
  alternates: salon.websiteUrl ? { canonical: "/" } : undefined,
  openGraph: { title: `${salon.name} | ${salon.tagline}`, description, type: "website", locale: "en_IN", siteName: salon.name,
    images: salon.images.hero ? [salon.images.hero.src] : undefined },
};
export const viewport: Viewport = { themeColor: "#FBF8F3", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>{children}<Analytics /></body>
    </html>
  );
}
