import BookButton from "./BookButton";
import { bookingChannel, bookingHref, generalMessage } from "@/lib/whatsapp";

/** Server wrapper: resolves the booking link from config so pages stay simple. */
export default function Book({ label = "Book Your Appointment", message = generalMessage, detail = "general", variant = "primary", className = "", event }: { label?: string; message?: string; detail?: string; variant?: "primary" | "ghost"; className?: string; event?: string }) {
  return <BookButton href={bookingHref(message)} channel={bookingChannel()} label={label} detail={detail} variant={variant} className={className} event={event} />;
}
