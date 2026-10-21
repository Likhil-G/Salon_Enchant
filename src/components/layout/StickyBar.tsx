import { Phone } from "lucide-react";
import Book from "@/components/ui/Book";
import { hasPhone, telHref } from "@/lib/whatsapp";
import CallLink from "@/components/ui/CallLink";

export default function StickyBar() {
  return (
    <div className="sticky-bar">
      <Book label="WhatsApp to Book" detail="sticky_bar" className="sticky-bar__main" />
      {hasPhone() && <CallLink href={telHref()} className="btn btn--ghost sticky-bar__call"><Phone size={18} aria-hidden="true" /><span className="sr-only">Call the salon</span></CallLink>}
    </div>
  );
}
