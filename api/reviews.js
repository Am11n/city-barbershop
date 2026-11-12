// Vercel serverless function: live Google reviews for City Barbershop Drammen.
//
// Uses Google Places API (New). Set these env vars in Vercel:
//   GOOGLE_PLACES_API_KEY  (required) — key with "Places API (New)" enabled
//   GOOGLE_PLACE_ID        (optional) — skips the text search lookup
//
// GET /api/reviews?lang=no|en  ->  { rating, count, url, reviews: [...] }
// Cached at the edge for 12 hours to stay well inside Google's free tier.

const QUERY = 'City Barbershop Drammen, Tollbugata 14, 3044 Drammen';
const FIELDS = ['id', 'rating', 'userRatingCount', 'googleMapsUri', 'reviews'];

export default async function handler(req, res) {
    const key = process.env.GOOGLE_PLACES_API_KEY;
    if (!key) {
        res.status(503).json({ error: 'not_configured' });
        return;
    }
    const lang = req.query.lang === 'en' ? 'en' : 'no';

    try {
        let place;
        if (process.env.GOOGLE_PLACE_ID) {
            const r = await fetch(`https://places.googleapis.com/v1/places/${process.env.GOOGLE_PLACE_ID}?languageCode=${lang}`, {
                headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': FIELDS.join(',') },
            });
            if (!r.ok) throw new Error(`places ${r.status}`);
            place = await r.json();
        } else {
            const r = await fetch('https://places.googleapis.com/v1/places:searchText', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Api-Key': key,
                    'X-Goog-FieldMask': FIELDS.map((f) => `places.${f}`).join(','),
                },
                body: JSON.stringify({ textQuery: QUERY, languageCode: lang, maxResultCount: 1 }),
            });
            if (!r.ok) throw new Error(`searchText ${r.status}`);
            place = (await r.json()).places?.[0];
        }
        if (!place) throw new Error('place_not_found');

        const reviews = (place.reviews ?? [])
            .filter((rv) => rv.rating >= 4 && (rv.text?.text || rv.originalText?.text))
            .map((rv) => ({
                author: rv.authorAttribution?.displayName ?? 'Google user',
                authorUrl: rv.authorAttribution?.uri ?? null,
                photo: rv.authorAttribution?.photoUri ?? null,
                rating: rv.rating,
                text: rv.text?.text ?? rv.originalText?.text,
                translated: Boolean(rv.text && rv.originalText && rv.text.languageCode !== rv.originalText.languageCode),
                when: rv.relativePublishTimeDescription ?? '',
                url: rv.googleMapsUri ?? null,
            }));

        res.setHeader('Cache-Control', 's-maxage=43200, stale-while-revalidate=86400');
        res.status(200).json({
            rating: place.rating ?? null,
            count: place.userRatingCount ?? null,
            url: place.googleMapsUri ?? null,
            reviews,
        });
    } catch (err) {
        console.error('reviews failed', err);
        res.setHeader('Cache-Control', 's-maxage=300');
        res.status(502).json({ error: 'upstream_failed' });
    }
}
