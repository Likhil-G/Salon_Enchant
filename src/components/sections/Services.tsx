import { Scissors, Droplets, Sparkles } from "lucide-react";
import { salon } from "@/config/salon";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageSlot from "@/components/ui/ImageSlot";
import Book from "@/components/ui/Book";
import { serviceMessage } from "@/lib/whatsapp";

const icons: Record<string, typeof Scissors> = { "hair-artistry": Scissors, "hair-spa": Droplets, "beauty-grooming": Sparkles };

export default function Services() {
  const list = salon.services.filter((s) => s.confirmed);
  if (!list.length) return null;
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading id="services-title" title="Discover Your Signature Look" text="Explore services designed to help you look and feel your best." />
        <div className="grid-services">
          {list.map((s) => {
            const Icon = icons[s.id] ?? Sparkles;
            return (
              <article key={s.id} className="card">
                {s.image ? <ImageSlot src={s.image} alt={s.imageAlt ?? s.name} sizes="(min-width: 900px) 33vw, 100vw" className="card__img" /> : <span className="card__icon"><Icon size={26} aria-hidden="true" /></span>}
                <div className="card__body">
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  {s.highlights && <ul className="chips">{s.highlights.map((h) => <li key={h}>{h}</li>)}</ul>}
                  {s.startingPrice && <p className="card__price">Starting from {s.startingPrice}</p>}
                  <Book label="Enquire on WhatsApp" message={serviceMessage(s.name)} detail={s.name} event="service_whatsapp_click" variant="ghost" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
