import Image from "next/image";
import { salon } from "@/config/salon";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Gallery() {
  if (!salon.gallery.length) return null;
  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading id="gallery-title" title="Every Look Tells a Story" text="Individual results vary. Photos shared with customer permission." />
        <ul className="gallery">
          {salon.gallery.map((g) => (
            <li key={g.src}><Image src={g.src} alt={g.alt} width={g.width} height={g.height} sizes="(min-width: 900px) 25vw, 50vw" loading="lazy" /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
