import { salon } from "@/config/salon";
import Book from "@/components/ui/Book";
import ImageSlot from "@/components/ui/ImageSlot";
import HairArt from "@/components/ui/HairArt";
import Floaters from "@/components/ui/Floaters";

export default function Hero({ showServices }: { showServices: boolean }) {
  const img = salon.images.hero;
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <Floaters items={[
        { k: "scissors", top: "8%", left: "4%", size: 46, delay: 0, rot: -18 },
        { k: "drop", top: "62%", left: "6%", size: 28, delay: 1.2, rot: 0, hideSm: true },
        { k: "spark", top: "14%", right: "6%", size: 30, delay: .6, rot: 0 },
        { k: "comb", top: "78%", right: "8%", size: 44, delay: 1.8, rot: 14, hideSm: true },
        { k: "orb", top: "46%", right: "46%", size: 18, delay: 2.4, rot: 0, hideSm: true },
      ]} />
      <div className="container hero__grid">
        <div className="hero__copy rise">
          <p className="eyebrow">THE SALOON ENCHANT · HYDERABAD</p>
          <h1 className="h-display" id="hero-title">Where Beauty Meets Enchantment.</h1>
          <p className="lead">Hair colour, balayage, highlights and styling, designed around you. Discover your style and refresh your confidence.</p>
          <div className="hero__actions">
            <Book label="Book Your Appointment" detail="hero" />
            {showServices && <a className="btn btn--ghost" href="#services">Explore Our Services</a>}
          </div>
          <p className="hero__note">You'll continue the conversation in WhatsApp. The salon confirms your appointment.</p>
          <p className="hero__cats">Colour · Styling · Treatments · Beauty</p>
        </div>
        <div className="hero__art rise">
          {img ? <ImageSlot src={img.src} alt={img.alt} priority sizes="(min-width: 900px) 40vw, 90vw" className="hero__img" /> : <HairArt />}
        </div>
      </div>
    </section>
  );
}
