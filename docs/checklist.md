# AI Agent Implementation Checklist
## Project: High-Performance React + Tailwind Barbershop Website

---

## 1️⃣ Project Setup & Tooling

- [x] Initialiser prosjekt med **Vite + React**
- [x] Installer og konfigurer **Tailwind CSS (JIT mode)**
- [x] Fjern alt unødvendig boilerplate
- [x] Aktiver treeshaking og minifisering
- [x] Sett opp `.env` for fremtidige SEO-verdier (site name, city, phone)

---

## 2️⃣ Tailwind Design System (Foundation)

- [x] Definer fargepalett i `tailwind.config.js`
  - Primary: svart / mørk grå
  - Accent: varm brun / oransje (CTA)
  - Text: hvit / lys grå
- [x] Definer font-family (kun **én font**)
- [x] Definer spacing scale (consistent padding/margin)
- [x] Sikre WCAG AA kontrast
- [x] Aktiver dark-first design

---

## 3️⃣ Global SEO & Metadata

- [x] Sett **statisk `<title>` og `<meta description>`**
- [x] Implementer `react-helmet-async`
- [x] Kun én **H1 på hele siden**
- [x] Bruk semantiske HTML-tags:
  - `<header>`
  - `<main>`
  - `<section>`
  - `<article>`
  - `<footer>`
- [x] Implementer **JSON-LD schema**:
  - LocalBusiness
  - Service
  - Person (team)

---

## 4️⃣ Performance & Core Web Vitals

- [x] Lazy-load alle bilder (`loading="lazy"`)
- [x] Bruk riktig bildeformat (webp / avif)
- [x] Unngå layout shift (faste dimensjoner)
- [x] Minimal JavaScript (ingen unødvendig state)
- [x] Ingen tunge tredjeparts scripts
- [x] Lighthouse mål:
  - Performance ≥ 90
  - SEO ≥ 90
  - Accessibility ≥ 90

---

## 5️⃣ App Architecture

- [x] Single Page Application (ingen routing)
- [x] Flat komponentstruktur
- [x] Ingen global state
- [x] Data-drevet rendering (services & team)
- [x] Klar for fremtidig Next.js-migrering

---

## 6️⃣ Header Component

- [x] Sticky header (`position: sticky`)
- [x] Logo (tekst/bilde)
- [x] Meny med anker-lenker til seksjoner
- [x] CTA-knapp (“Book Next Available”)
- [x] Responsiv (hamburger på mobil)
- [x] Semantisk `<nav>`

---

## 7️⃣ Hero Component

- [x] Fullscreen seksjon (`height: 100vh`)
- [x] Bakgrunnsbilde med mørk overlay
- [x] Sentralisert innhold
- [x] H1 (brand / value proposition)
- [x] Kontaktinfo (adresse, telefon)
- [x] CTA-knapp
- [x] Lazy-load bilde

---

## 8️⃣ Services Component

- [x] Data-drevet fra `services.js`
- [x] Hvert service-element i `<article>`
- [x] Navn, beskrivelse, tid, pris
- [x] Ryddig grid / liste med konsistent spacing
- [x] Mobil-first design

---

## 9️⃣ Team Component

- [x] Data-drevet fra `team.js`
- [x] Hvert medlem i `<article>`
- [x] Portrettbilde + navn + bio + CTA + Instagram-link
- [x] Bilder lazy-loaded
- [x] Konsistent kort-layout

---

## 🔟 Contact Component

- [x] Adresse + telefon
- [x] Åpningstider
- [x] Semantisk `<address>`
- [x] Responsiv layout

---

## 11️⃣ Footer Component

- [x] Copyright
- [x] Sekundær info (valgfritt)
- [x] Konsistent farger og font

---

## 12️⃣ Testing & QA

- [x] Responsiv på mobil, nettbrett, desktop
- [x] SEO check (title, meta, schema)
- [x] Lighthouse score ≥ 90 (perf, SEO, a11y)
- [x] Cross-browser testing (Chrome, Safari, Edge, Firefox)
- [x] Fokus på rask load, ingen CLS

---

## 13️⃣ Deployment

- [ ] Host på **Vercel / Netlify**
- [ ] Enable HTTPS
- [ ] Optimaliser bilder og assets
- [ ] Minifiser CSS/JS
