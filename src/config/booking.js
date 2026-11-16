// TeqBook booking configuration.
//
// Points at the live City Barbershop salon on TeqBook production. Override with env vars:
//   VITE_TEQBOOK_BASE_URL     (default https://teqbook.com; https://staging.teqbook.com for testing)
//   VITE_TEQBOOK_SALON_SLUG   (default city-barbershop-drammen; drammen-frisor is the staging demo salon)
//   VITE_TEQBOOK_FORCE_EMBED  ("true" to always try the iframe)
//
// TeqBook's CSP (frame-ancestors) only allows the booking page to be framed from
// TeqBook's own domains and *.vercel.app. On other hosts (e.g. localhost) the
// site falls back to opening the booking flow in a new tab.

export const TEQBOOK_BASE_URL = (
  import.meta.env.VITE_TEQBOOK_BASE_URL || 'https://teqbook.com'
).replace(/\/$/, '');

export const TEQBOOK_SALON_SLUG =
  import.meta.env.VITE_TEQBOOK_SALON_SLUG || 'city-barbershop-drammen';

export const BOOKING_URL = `${TEQBOOK_BASE_URL}/book/${TEQBOOK_SALON_SLUG}`;

export const IS_STAGING = /staging/.test(TEQBOOK_BASE_URL);

const EMBED_HOSTS = [/\.vercel\.app$/, /(^|\.)teqbook\.com$/];

export function canEmbedBooking() {
  if (import.meta.env.VITE_TEQBOOK_FORCE_EMBED === 'true') return true;
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  if (params.get('embed') === '1') return true;
  if (params.get('embed') === '0') return false;
  return EMBED_HOSTS.some((re) => re.test(window.location.hostname));
}
