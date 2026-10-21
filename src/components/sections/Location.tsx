import { MapPin, Clock, Phone, Mail, Instagram, Navigation } from "lucide-react";
import { salon } from "@/config/salon";
import SectionHeading from "@/components/ui/SectionHeading";
import CallLink from "@/components/ui/CallLink";
import { hasPhone, telHref } from "@/lib/whatsapp";

export default function Location() {
  return (
    <section id="contact" className="section section--alt" aria-labelledby="loc-title">
      <div className="container">
        <SectionHeading id="loc-title" title="Visit The Saloon Enchant" />
        <ul className="contact">
          {salon.address && <li><MapPin size={20} aria-hidden="true" /><span>{salon.address}</span></li>}
          {salon.hours.length > 0 && (
            <li><Clock size={20} aria-hidden="true" /><span>{salon.hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</span></li>
          )}
          {hasPhone() && <li><Phone size={20} aria-hidden="true" /><CallLink href={telHref()}>Call the salon</CallLink></li>}
          {salon.email && <li><Mail size={20} aria-hidden="true" /><a href={`mailto:${salon.email}`}>{salon.email}</a></li>}
          <li><Instagram size={20} aria-hidden="true" /><a href={salon.instagram.url} target="_blank" rel="noopener noreferrer">@{salon.instagram.handle}</a></li>
          {salon.mapsUrl && <li><Navigation size={20} aria-hidden="true" /><a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a></li>}
        </ul>
      </div>
    </section>
  );
}
