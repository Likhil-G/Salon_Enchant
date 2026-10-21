import { salon } from "@/config/salon";

export function normalizeIndianNumber(raw: string): string {
  const d = raw.replace(/\D/g, "");
  if (d.length === 10) return `91${d}`;
  if (d.length === 12 && d.startsWith("91")) return d;
  return "";
}
export const hasWhatsApp = () => normalizeIndianNumber(salon.whatsappNumber) !== "";
export const hasPhone = () => normalizeIndianNumber(salon.phone || salon.whatsappNumber) !== "";
export const telHref = () => { const n = normalizeIndianNumber(salon.phone || salon.whatsappNumber); return n ? `tel:+${n}` : ""; };

export function whatsappUrl(message: string): string {
  const n = normalizeIndianNumber(salon.whatsappNumber);
  return n ? `https://wa.me/${n}?text=${encodeURIComponent(message)}` : "";
}
export const generalMessage = `Hi ${salon.name}, I visited your website and would like to know more about your services and appointment availability.`;
export const serviceMessage = (service: string) =>
  `Hi ${salon.name}, I'm interested in your ${service} service. Could you please share the details and available appointment times?`;

/** WhatsApp when a verified number exists; otherwise fall back to an Instagram DM so no CTA is ever dead. */
export function bookingChannel(): "whatsapp" | "instagram" { return hasWhatsApp() ? "whatsapp" : "instagram"; }
export function bookingHref(message: string): string {
  return whatsappUrl(message) || `https://ig.me/m/${salon.instagram.handle}`;
}
