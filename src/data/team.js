// Placeholder team photos — swap in real photos and Instagram handles.
const img = (id) => `https://images.unsplash.com/${id}?w=900&h=1125&auto=format&fit=crop&crop=faces&q=70`;

export const team = [
    {
        id: 1,
        name: 'Abdull',
        role: { no: 'Eier & master barber', en: 'Owner & master barber' },
        specialty: { no: 'Fades · Kniv', en: 'Fades · Razor work' },
        image: img('photo-1612214070442-3c806a722f0b'),
    },
    {
        id: 2,
        name: 'Yoel',
        role: { no: 'Senior barber', en: 'Senior barber' },
        specialty: { no: 'Skjegg · Teksturklipp', en: 'Beards · Textured cuts' },
        image: img('photo-1768591981032-4a251b865ad2'),
    },
    {
        id: 3,
        name: 'Ahmed',
        role: { no: 'Barber', en: 'Barber' },
        specialty: { no: 'Klassisk klipp · Barn', en: 'Classic cuts · Kids' },
        image: img('photo-1563721572772-fbf713fff374'),
    },
];

// Real work from the salon (Drive: "City barbershop 2025 bilde og video").
export const gallery = [
    '/images/klipp-3623.webp',
    '/images/klipp-4038.webp',
    '/images/klipp-4111.webp',
    '/images/klipp-3911.webp',
    '/images/klipp-4211.webp',
    '/images/klipp-3829.webp',
    '/images/klipp-0815.webp',
    '/images/klipp-4212.webp',
];

// Opening hours as listed on Google Maps (Nov 2026). Times are decimal hours.
export const hours = [
    { day: { no: 'Mandag – lørdag', en: 'Monday – Saturday' }, days: [1, 2, 3, 4, 5, 6], open: 10.5, close: 19 },
    { day: { no: 'Søndag', en: 'Sunday' }, days: [0] },
];

export const fmtTime = (h) =>
    `${String(Math.floor(h)).padStart(2, '0')}:${String(Math.round((h % 1) * 60)).padStart(2, '0')}`;

export const instagramUrl = 'https://www.instagram.com/citybarbershopdrammen/';
export const facebookUrl = 'https://www.facebook.com/CityBarbershopDrammen';

// Public Google Business profile data (from Google Maps, Nov 2026)
export const google = {
    rating: 5.0,
    count: 22,
    // CID link: always opens the Google business profile directly.
    mapsUrl: 'https://maps.google.com/?cid=1234998035062559272',
};
