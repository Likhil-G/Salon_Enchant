"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { salon } from "@/config/salon";
import { trackEvent } from "@/lib/analytics";
import { bookingChannel, bookingHref, generalMessage } from "@/lib/whatsapp";

export type NavLink = { href: string; label: string };

export default function Header({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  const channel = bookingChannel();
  const book = (
    <a className="btn btn--primary btn--sm" href={bookingHref(generalMessage)} target="_blank" rel="noopener noreferrer"
       onClick={() => trackEvent(channel === "whatsapp" ? "whatsapp_click" : "instagram_dm_click", { detail: "header" })}>
      Book Appointment<span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
  return (
    <header className="header">
      <div className="container header__row">
        <a href="#top" className="wordmark" onClick={() => setOpen(false)}>{salon.name}</a>
        <nav className="nav" aria-label="Primary">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="header__cta">{book}</div>
        <button type="button" className="menu-btn" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        </nav>
        {book}
      </div>
    </header>
  );
}
