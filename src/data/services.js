// Prices from the owner's price list (received 2026-11-27).
// Durations are estimates — the live durations come from TeqBook in the booking flow.
export const services = [
    {
        id: 'voksen',
        category: 'hair',
        name: { no: 'Voksen', en: 'Adult' },
        description: {
            no: 'Herreklipp med saks og maskin, fade eller klassisk. Tilpasset hodeform og hverdag.',
            en: "Men's cut with scissors and clippers, fade or classic. Tailored to your head shape and routine.",
        },
        price: 400,
        duration: 30,
        popular: true,
    },
    {
        id: 'ungdom',
        category: 'hair',
        name: { no: 'Ungdom', en: 'Youth' },
        description: {
            no: 'Samme klipp og presisjon som voksen, til ungdomspris.',
            en: 'The same cut and precision as adults, at a youth price.',
        },
        price: 350,
        duration: 30,
    },
    {
        id: 'barn',
        category: 'hair',
        name: { no: 'Barn', en: 'Kids' },
        description: {
            no: 'Rolig tempo, samme presisjon.',
            en: 'Calm pace, same precision.',
        },
        price: 300,
        duration: 25,
    },
    {
        id: 'skjegg',
        category: 'extra',
        name: { no: 'Skjegg', en: 'Beard' },
        description: {
            no: 'Forming og trim av skjegget med maskin og saks.',
            en: 'Beard shaping and trim with clippers and scissors.',
        },
        price: 250,
        duration: 20,
    },
    {
        id: 'vask',
        category: 'extra',
        name: { no: 'Vaske hår', en: 'Hair wash' },
        description: {
            no: 'Hårvask som tillegg til klippen.',
            en: 'A hair wash added to your cut.',
        },
        price: 100,
        duration: 10,
    },
    {
        id: 'combo',
        category: 'combo',
        name: { no: 'Klipp og skjegg', en: 'Cut and beard' },
        description: {
            no: 'Hele pakken: klipp og skjegg i samme time.',
            en: 'The full package: haircut and beard in one visit.',
        },
        price: 550,
        duration: 45,
    },
];

export const serviceCategories = [
    { id: 'hair', name: { no: 'Klipp', en: 'Haircuts' } },
    { id: 'extra', name: { no: 'Skjegg & tillegg', en: 'Beard & extras' } },
    { id: 'combo', name: { no: 'Kombo', en: 'Combo' } },
];
