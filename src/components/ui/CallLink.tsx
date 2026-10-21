"use client";
import { trackEvent } from "@/lib/analytics";

export default function CallLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return <a href={href} className={className} onClick={() => trackEvent("phone_click")}>{children}</a>;
}
