import { Helmet } from 'react-helmet-async';

export default function SEO() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "City Barbershop",
        "image": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
        "telephone": "+4746865541",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tollbugata 14",
            "addressLocality": "Drammen",
            "postalCode": "3044",
            "addressCountry": "NO"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "10:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "16:00"
            }
        ],
        "priceRange": "$$"
    };

    return (
        <Helmet>
            <title>City Barbershop - Premium Frisør i Drammen</title>
            <meta name="description" content="City Barbershop tilbyr klassisk barbering, hårklipp og skjeggtrim i hjertet av Drammen. Bestill time i dag for en premium opplevelse." />
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
}
