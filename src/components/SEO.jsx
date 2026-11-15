import { Helmet } from 'react-helmet-async';
import { faqs } from '../data/content';
import { facebookUrl, google, hours, instagramUrl } from '../data/team';
import { services } from '../data/services';
import { useLang } from '../i18n/LanguageContext';

export const SITE = 'https://www.citybarbershop.no';

const meta = {
    no: {
        title: 'Barber i Drammen sentrum | City Barbershop',
        description: 'Barbershop i Tollbugata 14, Drammen. Skin fade, herreklipp, skjeggtrim og barbering fra 350 kr. 5,0 på Google. Book time på nett.',
    },
    en: {
        title: 'Barber in central Drammen | City Barbershop',
        description: 'Barbershop at Tollbugata 14, Drammen. Skin fades, haircuts, beard trims and shaves from 350 NOK. Rated 5.0 on Google. Book online.',
    },
};

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const hhmm = (h) => `${String(Math.floor(h)).padStart(2, '0')}:${String(Math.round((h % 1) * 60)).padStart(2, '0')}`;

export default function SEO() {
    const { lang, L } = useLang();
    const prices = services.map((s) => s.price);

    const business = {
        '@context': 'https://schema.org',
        '@type': 'BarberShop',
        '@id': `${SITE}/#barbershop`,
        name: 'City Barbershop Drammen',
        alternateName: 'City Barbershop',
        description: meta[lang].description,
        url: `${SITE}/`,
        logo: `${SITE}/logo.png`,
        image: [`${SITE}/images/og-salong.jpg`, `${SITE}/images/fasade.webp`, `${SITE}/images/salong-2000.webp`],
        telephone: '+47 468 65 541',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Tollbugata 14',
            addressLocality: 'Drammen',
            postalCode: '3044',
            addressRegion: 'Buskerud',
            addressCountry: 'NO',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 59.7385893, longitude: 10.2046242 },
        hasMap: google.mapsUrl,
        sameAs: [instagramUrl, facebookUrl, google.mapsUrl],
        areaServed: { '@type': 'City', name: 'Drammen' },
        openingHoursSpecification: hours
            .filter((h) => h.open != null)
            .map((h) => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: h.days.map((d) => DAYS[d]),
                opens: hhmm(h.open),
                closes: hhmm(h.close),
            })),
        priceRange: `${Math.min(...prices)}–${Math.max(...prices)} NOK`,
        currenciesAccepted: 'NOK',
        paymentAccepted: 'Card, Vipps, Apple Pay',
        knowsLanguage: ['nb', 'en'],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: lang === 'no' ? 'Tjenester og priser' : 'Services and prices',
            itemListElement: services.map((s) => ({
                '@type': 'Offer',
                price: s.price,
                priceCurrency: 'NOK',
                itemOffered: { '@type': 'Service', name: L(s.name), description: L(s.description) },
            })),
        },
    };

    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: 'City Barbershop Drammen',
        inLanguage: lang === 'no' ? 'nb-NO' : 'en-GB',
        publisher: { '@id': `${SITE}/#barbershop` },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: L(f.q),
            acceptedAnswer: { '@type': 'Answer', text: L(f.a) },
        })),
    };

    return (
        <Helmet>
            <title>{meta[lang].title}</title>
            <meta name="description" content={meta[lang].description} />
            <script type="application/ld+json">{JSON.stringify(business)}</script>
            <script type="application/ld+json">{JSON.stringify(website)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
    );
}
