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

export const gallery = [
    'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=900&auto=format&fit=crop&q=70',
    'https://images.unsplash.com/photo-1717089256239-dc2ed4d9dfc6?w=900&auto=format&fit=crop&q=70',
    'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900&auto=format&fit=crop&q=70',
    'https://images.unsplash.com/photo-1686671805337-7d8aa64b965f?w=900&auto=format&fit=crop&q=70',
    'https://images.unsplash.com/photo-1653758265969-b048bb0b328a?w=900&auto=format&fit=crop&q=70',
];

// Opening hours as listed on Google Maps (Nov 2026). Times are decimal hours.
export const hours = [
    { day: { no: 'Mandag – lørdag', en: 'Monday – Saturday' }, days: [1, 2, 3, 4, 5, 6], open: 10.5, close: 19 },
    { day: { no: 'Søndag', en: 'Sunday' }, days: [0] },
];

export const fmtTime = (h) =>
    `${String(Math.floor(h)).padStart(2, '0')}:${String(Math.round((h % 1) * 60)).padStart(2, '0')}`;

// Public Google Business profile data (from Google Maps, Nov 2026)
export const google = {
    rating: 5.0,
    count: 22,
    // CID link: always opens the Google business profile directly.
    mapsUrl: 'https://maps.google.com/?cid=1234998035062559272',
};
