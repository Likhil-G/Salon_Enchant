# The Saloon Enchant - landing page

Next.js (App Router) + TypeScript. Plain CSS design tokens in `src/app/globals.css`. Fonts self-hosted via `@fontsource-variable`.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck && npm run build && npm start
```

## Everything editable lives in `src/config/salon.ts`
Empty value = hidden on the page. Nothing is invented.
- No WhatsApp number yet: every booking button falls back to an Instagram DM (`ig.me/m/thesalonenchant`) and says "Message on Instagram". Add `whatsappNumber` (10 digits) and all buttons switch to WhatsApp with prefilled messages.
- Services render only when `confirmed: true`. Prices appear only if `startingPrice` is set.
- Images: put files in `public/images/...`, then set paths in `images`, `services[].image`, `gallery`.
- Reviews, offer, map, hours, address, call button: each appears only once its data is added.

## Tracking (off until configured)
Copy `.env.example` to `.env.local`. GA4 / Meta Pixel load only if an ID is set AND `NEXT_PUBLIC_TRACKING_CONSENT_CONFIRMED=true` (set it only after a consent notice and privacy policy exist). Events: `whatsapp_click`, `service_whatsapp_click`, `offer_whatsapp_click`, `phone_click`, `instagram_dm_click`; UTM params are attached to events. Test in GA4 DebugView / Meta Test Events before spending ad budget.
Campaign URL example: `/?utm_source=instagram&utm_medium=paid_social&utm_campaign=salon_month1`

## Deploy (Vercel)
Push to GitHub, import on vercel.com, add env vars, deploy. Then set `websiteUrl` in config (enables canonical URL, sitemap, schema URL).

## Launch checklist (needed from the owner)
1. Confirm business spelling: "Saloon" vs "Salon" (handle is `thesalonenchant`).
2. WhatsApp number (and separate call number, if any).
3. Full address, locality (Madhapur?), Google Maps link, opening hours.
4. Confirmed service list (+ optional starting prices).
5. Real photos: hero, interior, services, gallery (permission for identifiable customers, genuine before/after pairs only).
6. Genuine reviews + Google review link; any offer with terms/validity.
7. Logo file, domain, GA4 / Pixel IDs, privacy policy.
8. Verify palette against the real Instagram branding.

## Not included
Lightbox for gallery, ESLint config, Tailwind (plain CSS used instead to keep dependencies minimal).
