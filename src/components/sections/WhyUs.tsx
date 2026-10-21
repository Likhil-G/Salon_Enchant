import { HeartHandshake, Sparkles, Armchair, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  { icon: HeartHandshake, title: "Personal attention", text: "Your preferences guide the service." },
  { icon: Sparkles, title: "Considered finish", text: "Details matter, from first look to final touch." },
  { icon: Armchair, title: "Comfortable visit", text: "A calm space to take your time." },
  { icon: MessageCircle, title: "Easy to reach", text: "Ask about services and timings on WhatsApp." },
];
export default function WhyUs() {
  return (
    <section className="section section--alt" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading id="why-title" title="A Little More Than a Salon Visit" />
        <ul className="why">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title}><Icon size={26} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
