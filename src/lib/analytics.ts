declare global { interface Window { gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void } }

export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const utm = Object.fromEntries(
    [...new URLSearchParams(window.location.search)].filter(([k]) => k.startsWith("utm_"))
  );
  window.gtag?.("event", name, { ...params, ...utm });
  if (name.includes("whatsapp") || name === "phone_click") window.fbq?.("track", "Contact");
}
