import { salon } from "@/config/salon";
import ImageSlot from "@/components/ui/ImageSlot";
import Book from "@/components/ui/Book";

const points = ["Time set aside for your look", "A conversation before the first cut", "A comfortable, welcoming space", "Services matched to what you want"];

export default function Experience() {
  const img = salon.images.experience;
  return (
    <section id="experience" className="section section--light" aria-labelledby="exp-title">
      <div className={`container split ${img ? "" : "split--single"}`}>
        {img && <ImageSlot src={img.src} alt={img.alt} sizes="(min-width: 900px) 50vw, 100vw" className="split__img" />}
        <div>
          <h2 className="h-section" id="exp-title">Your Time. Your Style. Your Experience.</h2>
          <p className="lead">Every visit starts with listening. Tell us what you have in mind, and we'll help you get there.</p>
          <ul className="ticks">{points.map((p) => <li key={p}>{p}</li>)}</ul>
          <Book label="Book Your Appointment" detail="experience" />
        </div>
      </div>
    </section>
  );
}
