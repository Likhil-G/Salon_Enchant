import { Phone, Mail } from "lucide-react";
import { salon } from "@/config/salon";
import Book from "@/components/ui/Book";
import CallLink from "@/components/ui/CallLink";
import Floaters from "@/components/ui/Floaters";
import { hasPhone, telHref } from "@/lib/whatsapp";

export default function BookingCTA() {
  return (
    <section id="book" className="section booking" aria-labelledby="book-title">
      <Floaters items={[
        { k: "brush", top: "14%", left: "8%", size: 44, delay: .3, rot: -12, hideSm: true },
        { k: "spark", top: "20%", right: "9%", size: 28, delay: 1, rot: 0 },
        { k: "drop", top: "70%", right: "14%", size: 26, delay: 1.6, rot: 0, hideSm: true },
        { k: "scissors", top: "72%", left: "12%", size: 40, delay: 2, rot: 16, hideSm: true },
      ]} />
      <div className="container booking__inner">
        <h2 className="h-section" id="book-title">Ready for Your Next Salon Experience?</h2>
        <p className="lead">Tell us what you're looking for, and we'll help you take the next step.</p>
        <div className="hero__actions">
          <Book label="Book on WhatsApp" detail="booking_section" />
          {hasPhone() && <CallLink href={telHref()} className="btn btn--ghost"><Phone size={18} aria-hidden="true" />Call the Salon</CallLink>}
          {salon.email && <a className="btn btn--ghost" href={`mailto:${salon.email}`}><Mail size={18} aria-hidden="true" />Email Us</a>}
        </div>
        <p className="hero__note">Your message opens in WhatsApp. The salon will confirm your appointment.</p>
      </div>
    </section>
  );
}
