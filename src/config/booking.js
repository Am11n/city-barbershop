// TeqBook booking configuration.
//
// Points at the live City Barbershop salon on TeqBook production. Override with env vars:
//   VITE_TEQBOOK_BASE_URL     (default https://teqbook.com; https://staging.teqbook.com for testing)
//   VITE_TEQBOOK_SALON_SLUG   (default city-barbershop-drammen; drammen-frisor is the staging demo salon)
//   VITE_TEQBOOK_DISABLE_EMBED ("true" to always open booking in a new tab)
//
// The iframe uses TeqBook's /embed/<slug>/ route, which any site may frame
// (frame-ancestors *, TeqBook ADR-0023). /book/<slug>/ only allows TeqBook's own
// hosts, so it is used for "open in new tab" links only.

export const TEQBOOK_BASE_URL = (
  import.meta.env.VITE_TEQBOOK_BASE_URL || 'https://teqbook.com'
).replace(/\/$/, '');

export const TEQBOOK_SALON_SLUG =
  import.meta.env.VITE_TEQBOOK_SALON_SLUG || 'city-barbershop-drammen';

export const BOOKING_URL = `${TEQBOOK_BASE_URL}/book/${TEQBOOK_SALON_SLUG}`;

export const EMBED_URL = `${TEQBOOK_BASE_URL}/embed/${TEQBOOK_SALON_SLUG}/`;

export const IS_STAGING = /staging/.test(TEQBOOK_BASE_URL);

export function canEmbedBooking() {
  if (import.meta.env.VITE_TEQBOOK_DISABLE_EMBED === 'true') return false;
  if (typeof window === 'undefined') return false;
  return new URLSearchParams(window.location.search).get('embed') !== '0';
}
