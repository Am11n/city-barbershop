# Software Requirements Specification Document (SRSD)

---

## 1. Arkitektur

* Single Page Application (SPA)
* Komponentbasert arkitektur
* Flat, forutsigbar DOM-struktur
* SEO-vennlig struktur (klar for SSR senere)

---

## 2. Teknologistack

* React 18+
* Tailwind CSS (JIT)
* Vite
* JavaScript (ES2023+)

---

## 3. Ytelseskrav (obligatorisk)

* Ingen unødvendig state
* Ingen globale re-renders
* Kun nødvendige hooks
* Treeshaking aktivert
* CSS kun via Tailwind (ingen ekstra bundles)

---

## 4. SEO-tekniske krav

* Dynamisk `<title>` og `<meta description>`
* Semantiske tags
* Structured data via JSON-LD
* Intern linking via anker-lenker
* Forberedt for `react-helmet-async`

---

## 5. Komponentkrav

Hver komponent skal:

* Være presentational-first
* Ha lav kompleksitet
* Ha klar SEO-rolle

### Komponenter

* Header (nav + lokal info)
* Hero (H1 + value proposition)
* Services (`article` per tjeneste)
* Team (`article` per person)
* Contact (`address`, `time`)
* Footer (copyright + sekundær info)

---

## 6. Tailwind Design System

* Farger definert i `tailwind.config.js`
* Konsistente spacing-skalaer
* Ingen inline styles
* Dark-first design
* Kontrast WCAG AA+

---

## 7. Responsivitet

* Mobile-first
* Breakpoints:

  * sm: 640px
  * md: 768px
  * lg: 1024px
* Navigasjon tilpasset touch

---

## 8. Tilgjengelighet (A11y)

* ARIA kun der nødvendig
* Fokusindikatorer
* Klikkflater ≥ 44px
* Kontrastforhold ≥ 4.5:1

---

## 9. Sikkerhet & Stabilitet

* Ingen eval
* Ingen inline scripts
* HTTPS-only
* Minimal tredjepartsbruk

---

## 10. Fremtidig skalerbarhet

* Enkel overgang til Next.js (SSG)
* CMS-integrasjon mulig
* Blogg / SEO-landing pages
* Flerspråklig støtte
