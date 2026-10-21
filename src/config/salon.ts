import type { SalonConfig } from "@/types/salon";

/**
 * SINGLE SOURCE OF TRUTH. Empty string / empty array = "unknown": the UI hides it.
 * Fill these in with VERIFIED details only. See README "Launch checklist".
 */
export const salon: SalonConfig = {
  name: "The Saloon Enchant", // TODO confirm spelling: Instagram handle is "thesalonenchant"
  tagline: "Where Beauty Meets Enchantment.",
  city: "Hyderabad",
  locality: "", // e.g. "Madhapur" - fill only after the owner confirms
  address: "",
  mapsUrl: "", // Google Maps "Share" link
  whatsappNumber: "", // 10-digit Indian mobile, e.g. "9XXXXXXXXX"
  phone: "", // call number, e.g. "9XXXXXXXXX" (falls back to WhatsApp number)
  email: "", // e.g. "hello@yourdomain.com"
  instagram: { handle: "thesalonenchant", url: "https://www.instagram.com/thesalonenchant" },
  websiteUrl: "", // e.g. "https://www.example.com" (enables canonical, sitemap)
  googleReviewsUrl: "",
  privacyUrl: "",
  hours: [], // e.g. [{ days: "Mon-Sun", time: "10:00 AM - 8:00 PM" }]
  images: {
    // Drop files in /public/images and set paths, e.g. { src: "/images/salon/hero.jpg", alt: "..." }
    hero: undefined,
    experience: undefined,
    logo: undefined,
  },
  // Source: Google business listing details supplied by the owner. Only confirmed: true entries are published.
  services: [
    { id: "hair-artistry", name: "Hair Artistry", description: "Precision haircuts, bespoke hair colouring, balayage, highlights and styling.", highlights: ["Precision haircuts", "Bespoke colour", "Balayage", "Highlights", "Styling"], confirmed: true },
    { id: "hair-spa", name: "Hair & Spa Treatments", description: "Keratin treatments, hair spas and global hair colour options.", highlights: ["Keratin", "Hair spa", "Global colour"], confirmed: true },
    { id: "beauty-grooming", name: "Beauty & Grooming", description: "Facials, manicures and pedicures.", highlights: ["Facials", "Manicures", "Pedicures"], confirmed: true },
  ],
  // Add real photos: { src: "/images/gallery/01.jpg", alt: "...", width: 1200, height: 1500 }
  gallery: [],
  // Genuine, verified reviews only: { name: "...", text: "...", source: "Google" }
  testimonials: [],
  // Only after the owner confirms service, price, eligibility, validity, terms. Then set confirmed: true.
  offer: null,
};
