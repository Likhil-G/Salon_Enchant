type Kind = "scissors" | "comb" | "drop" | "spark" | "brush" | "orb";
type Item = { k: Kind; top: string; left?: string; right?: string; size: number; delay: number; rot: number; hideSm?: boolean };

const paths: Record<Kind, React.ReactNode> = {
  scissors: <><circle cx="6" cy="18" r="3" /><circle cx="18" cy="18" r="3" /><path d="M8 16 L19 3 M16 16 L5 3" /></>,
  comb: <><path d="M3 8h18v4H3z" /><path d="M5 12v7M8 12v7M11 12v7M14 12v7M17 12v7M20 12v7" /></>,
  drop: <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0C19 10 12 2 12 2Z" />,
  spark: <path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />,
  brush: <><path d="M20 3L10 13" /><path d="M10 13c-3 0-5 2-5 4s-1 3-2 4c3 0 7-1 8-4 0-1 0-3-1-4z" /></>,
  orb: <circle cx="12" cy="12" r="9" />,
};

/** Decorative floating objects. Purely visual: hidden from assistive tech, motion off for reduced-motion users. */
export default function Floaters({ items }: { items: Item[] }) {
  return (
    <div className="floaters" aria-hidden="true">
      {items.map((it, i) => (
        <span key={i} className={`float float--${it.k} ${it.hideSm ? "float--lg" : ""}`}
          style={{ top: it.top, left: it.left, right: it.right, width: it.size, height: it.size, animationDelay: `${it.delay}s`, ["--r" as string]: `${it.rot}deg` }}>
          <svg viewBox="0 0 24 24" width="100%" height="100%" fill={it.k === "orb" || it.k === "drop" || it.k === "spark" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">{paths[it.k]}</svg>
        </span>
      ))}
    </div>
  );
}
