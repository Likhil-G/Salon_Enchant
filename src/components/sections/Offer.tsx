import { salon } from "@/config/salon";
import Book from "@/components/ui/Book";

/** Renders only a confirmed offer. No offer = no section (no fake promotions). */
export default function Offer() {
  const o = salon.offer;
  if (!o || !o.confirmed) return null;
  return (
    <section className="section section--alt" aria-labelledby="offer-title">
      <div className="container offer">
        <h2 className="h-section" id="offer-title">A Little Something for Your Next Visit</h2>
        <h3>{o.title}</h3>
        <p className="lead">{o.description}</p>
        {o.validUntil && <p>Valid until {o.validUntil}.</p>}
        {o.terms && <p className="small">{o.terms}</p>}
        <Book label="Claim on WhatsApp" message={`Hi ${salon.name}, I'd like to know about the offer: ${o.title}.`} detail="offer" event="offer_whatsapp_click" />
      </div>
    </section>
  );
}
