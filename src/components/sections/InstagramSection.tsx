import Image from "next/image";
import { Instagram } from "lucide-react";
import { salon } from "@/config/salon";
import SectionHeading from "@/components/ui/SectionHeading";

export default function InstagramSection() {
  const shots = salon.gallery.slice(0, 6);
  return (
    <section className="section" aria-labelledby="ig-title">
      <div className="container">
        <SectionHeading id="ig-title" title="Follow Your Next Look" />
        {shots.length > 0 && (
          <ul className="gallery gallery--ig">
            {shots.map((g) => <li key={g.src}><Image src={g.src} alt={g.alt} width={g.width} height={g.height} sizes="(min-width: 900px) 16vw, 33vw" loading="lazy" /></li>)}
          </ul>
        )}
        <p><a className="btn btn--ghost" href={salon.instagram.url} target="_blank" rel="noopener noreferrer"><Instagram size={18} aria-hidden="true" />Follow @{salon.instagram.handle}<span className="sr-only"> (opens in a new tab)</span></a></p>
      </div>
    </section>
  );
}
