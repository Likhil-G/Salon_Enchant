import { salon } from "@/config/salon";
import type { NavLink } from "./Header";

export default function Footer({ links }: { links: NavLink[] }) {
  const services = salon.services.filter((s) => s.confirmed);
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div><p className="wordmark">{salon.name}</p><p className="muted">{salon.tagline}</p></div>
        <nav aria-label="Footer"><ul>{links.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul></nav>
        {services.length > 0 && <ul>{services.map((s) => <li key={s.id}>{s.name}</li>)}</ul>}
        <ul>
          {salon.address && <li>{salon.address}</li>}
          {salon.email && <li><a href={`mailto:${salon.email}`}>{salon.email}</a></li>}
          <li><a href={salon.instagram.url} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          {salon.mapsUrl && <li><a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer">Directions</a></li>}
          {salon.privacyUrl && <li><a href={salon.privacyUrl}>Privacy policy</a></li>}
        </ul>
      </div>
      <p className="container footer__copy">© {new Date().getFullYear()} {salon.name}. All rights reserved.</p>
    </footer>
  );
}
