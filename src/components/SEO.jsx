import { Helmet } from 'react-helmet-async';
import { faqs } from '../data/content';
import { google } from '../data/team';
import { useLang } from '../i18n/LanguageContext';

const meta = {
    no: {
        title: 'City Barbershop | Barber i Drammen sentrum',
        description: 'Fades, klassisk klipp og skjeggtrim i Tollbugata 14, Drammen. 5,0 på Google. Book time på nett.',
    },
    en: {
        title: 'City Barbershop | Barber in central Drammen',
        description: 'Fades, classic cuts and beard trims at Tollbugata 14, Drammen. Rated 5.0 on Google. Book online.',
    },
};

export default function SEO() {
    const { lang, L } = useLang();

    const business = {
        '@context': 'https://schema.org',
        '@type': 'BarberShop',
        name: 'City Barbershop Drammen',
        url: 'https://citybarbershop.no',
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70',
        telephone: '+4746865541',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Tollbugata 14',
            addressLocality: 'Drammen',
            postalCode: '3044',
            addressCountry: 'NO',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 59.7385893, longitude: 10.2046242 },
        hasMap: google.mapsUrl,
        openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '10:30',
            closes: '19:00',
        }],
        priceRange: '$$',
        knowsLanguage: ['nb', 'en'],
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
            <meta property="og:title" content={meta[lang].title} />
            <meta property="og:description" content={meta[lang].description} />
            <meta property="og:locale" content={lang === 'no' ? 'nb_NO' : 'en_GB'} />
            <script type="application/ld+json">{JSON.stringify(business)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
    );
}
