// Placeholder team — swap in the real barbers, photos and Instagram handles.
const img = (id) => `https://images.unsplash.com/${id}?w=900&h=1125&auto=format&fit=crop&crop=faces&q=70`;

export const team = [
    {
        id: 1,
        name: 'Abdull',
        role: 'Eier & master barber',
        specialty: 'Fades · Kniv',
        image: img('photo-1612214070442-3c806a722f0b'),
    },
    {
        id: 2,
        name: 'Yoel',
        role: 'Senior barber',
        specialty: 'Skjegg · Teksturklipp',
        image: img('photo-1768591981032-4a251b865ad2'),
    },
    {
        id: 3,
        name: 'Ahmed',
        role: 'Barber',
        specialty: 'Klassisk klipp · Barn',
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

export const hours = [
    { day: 'Mandag – fredag', time: '10:00 – 19:00', days: [1, 2, 3, 4, 5], open: 10, close: 19 },
    { day: 'Lørdag', time: '10:00 – 16:00', days: [6], open: 10, close: 16 },
    { day: 'Søndag', time: 'Stengt', days: [0] },
];
