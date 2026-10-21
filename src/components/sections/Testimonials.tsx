import { salon } from "@/config/salon";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  if (!salon.testimonials.length && !salon.googleReviewsUrl) return null;
  return (
    <section className="section" aria-labelledby="rev-title">
      <div className="container">
        <SectionHeading id="rev-title" title="Words From Our Customers" />
        {salon.testimonials.length > 0 && (
          <div className="quotes">
            {salon.testimonials.map((t) => (
              <figure key={t.name} className="quote"><blockquote>{t.text}</blockquote><figcaption>{t.name}{t.source ? `, ${t.source}` : ""}</figcaption></figure>
            ))}
          </div>
        )}
        {salon.googleReviewsUrl && (
          <p><a className="btn btn--ghost" href={salon.googleReviewsUrl} target="_blank" rel="noopener noreferrer">Read or leave a Google review<span className="sr-only"> (opens in a new tab)</span></a></p>
        )}
      </div>
    </section>
  );
}
