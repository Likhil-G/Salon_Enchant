import { salon } from "@/config/salon";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header, { type NavLink } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Gallery from "@/components/sections/Gallery";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Offer from "@/components/sections/Offer";
import BookingCTA from "@/components/sections/BookingCTA";
import Location from "@/components/sections/Location";
import InstagramSection from "@/components/sections/InstagramSection";

export default function Home() {
  const hasServices = salon.services.some((s) => s.confirmed);
  const links: NavLink[] = [
    { href: "#top", label: "Home" },
    ...(hasServices ? [{ href: "#services", label: "Services" }] : []),
    { href: "#experience", label: "Our Experience" },
    ...(salon.gallery.length ? [{ href: "#gallery", label: "Gallery" }] : []),
    { href: "#contact", label: "Contact" },
  ];
  // Structured data: verified fields only.
  const ld: Record<string, unknown> = {
    "@context": "https://schema.org", "@type": "BeautySalon", name: salon.name,
    sameAs: [salon.instagram.url],
    ...(salon.email && { email: salon.email }),
    ...(salon.websiteUrl && { url: salon.websiteUrl }),
    ...(salon.address && { address: { "@type": "PostalAddress", streetAddress: salon.address, addressLocality: salon.locality || salon.city, addressCountry: "IN" } }),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <AnnouncementBar />
      <Header links={links} />
      <main>
        <Hero showServices={hasServices} />
        <TrustStrip />
        <Services />
        <Experience />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Offer />
        <BookingCTA />
        <Location />
        <InstagramSection />
      </main>
      <Footer links={links} />
      <StickyBar />
    </>
  );
}
