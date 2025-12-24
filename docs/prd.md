# Product Requirements Document (PRD)

## Project: High-Performance Barbershop Website

---

## 1. Product Vision

Produktet er en **lynrask, SEO-optimalisert én-sides nettside** for en barbershop, bygget med moderne frontend-teknologi. Siden skal rangere godt lokalt i søk, laste ekstremt raskt og lede brukeren til én primær handling: **booking**.

---

## 2. Forretningsmål

* Øke antall bookinger
* Rangere høyt på lokale søk (f.eks. “barber i [by]”)
* Bygge sterk merkevare og tillit
* Minimere bounce rate

---

## 3. Brukermål

* Finne informasjon raskt (≤ 5 sek)
* Booke time med minimalt antall klikk
* Få en premium følelse på alle enheter

---

## 4. Målgruppe

* Menn 18–55
* Lokale kunder (mobil-first)
* Brukere med lav tålmodighet for treg nettside

---

## 5. Scope

### Inkludert

* Én-sides layout
* Sticky navigasjon
* Hero med tydelig H1 og CTA
* Services (strukturert data)
* Team-profiler (E-E-A-T)
* Kontaktinfo + åpningstider
* Lokal SEO-optimalisering

### Ikke inkludert

* Backend
* Egen bookingmotor
* Innlogging
* Blogg (kan legges til senere)

---

## 6. SEO-krav (kritisk)

* Én tydelig **H1**
* Semantisk HTML (`header`, `section`, `article`, `footer`)
* Lokale signaler (adresse, telefon, åpningstider)
* Schema.org:

  * LocalBusiness
  * Service
  * Person
* Optimaliserte meta titles & descriptions
* Bilder med beskrivende `alt`-tekst

---

## 7. Performance-krav

* Lighthouse score: **90+ på alle kategorier**
* LCP < 2.5s
* CLS < 0.1
* Minimal JS
* Lazy-loading av bilder
* Ingen tunge tredjepartsscripts

---

## 8. Suksesskriterier

* Google PageSpeed ≥ 90
* Booking CTA synlig uten scrolling
* Mobil-opplevelse ≥ desktop
* SEO-indekserbar uten JavaScript-feil

---

## 9. Teknologisk retning

* React + Tailwind
* Klar for migrering til Next.js (SSR/SSG)
* Hosting: Vercel / Netlify
