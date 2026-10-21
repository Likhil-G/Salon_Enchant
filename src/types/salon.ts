export type Service = { id: string; name: string; description: string; startingPrice?: string; highlights?: string[]; image?: string; imageAlt?: string; confirmed: boolean };
export type GalleryImage = { src: string; alt: string; width: number; height: number };
export type Testimonial = { name: string; text: string; source?: string };
export type Offer = { title: string; description: string; terms?: string; validUntil?: string; confirmed: boolean };
export type Hours = { days: string; time: string };
export type SalonConfig = {
  name: string; tagline: string; city: string;
  locality: string; address: string; mapsUrl: string;
  whatsappNumber: string; phone: string; email: string;
  instagram: { handle: string; url: string };
  websiteUrl: string; googleReviewsUrl: string; privacyUrl: string;
  hours: Hours[];
  images: { hero?: { src: string; alt: string }; experience?: { src: string; alt: string }; logo?: string };
  services: Service[]; gallery: GalleryImage[]; testimonials: Testimonial[]; offer: Offer | null;
};
