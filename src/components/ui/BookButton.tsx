"use client";
import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Props = { href: string; channel: "whatsapp" | "instagram"; label: string; event?: string; detail?: string; variant?: "primary" | "ghost"; className?: string };

export default function BookButton({ href, channel, label, event = "whatsapp_click", detail = "general", variant = "primary", className = "" }: Props) {
  const text = channel === "whatsapp" ? label : "Message on Instagram";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn--${variant} ${className}`}
      onClick={() => trackEvent(channel === "whatsapp" ? event : "instagram_dm_click", { detail })}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {text}
      <span className="sr-only"> (opens {channel === "whatsapp" ? "WhatsApp" : "Instagram"} in a new tab)</span>
    </a>
  );
}
