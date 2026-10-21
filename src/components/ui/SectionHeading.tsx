export default function SectionHeading({ title, text, id, align = "left" }: { title: string; text?: string; id?: string; align?: "left" | "center" }) {
  return (
    <header className={`sh sh--${align}`}>
      <h2 className="h-section" id={id}>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </header>
  );
}
