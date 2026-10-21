import Image from "next/image";

type Props = { src?: string; alt: string; sizes: string; priority?: boolean; position?: string; className?: string };

/** Renders a real photo when a path is configured; otherwise a quiet branded panel (never fake salon work). */
export default function ImageSlot({ src, alt, sizes, priority, position = "center", className = "" }: Props) {
  return (
    <div className={`slot ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover", objectPosition: position }} />
      ) : (
        <span className="slot__mark" aria-hidden="true">E</span>
      )}
    </div>
  );
}
