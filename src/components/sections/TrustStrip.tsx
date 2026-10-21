const items = ["Personalized service", "Professional attention", "Your style, your way", "A welcoming salon experience"];
export default function TrustStrip() {
  return (
    <section className="trust" aria-label="What to expect">
      <ul className="container trust__list">{items.map((t) => <li key={t}>{t}</li>)}</ul>
    </section>
  );
}
