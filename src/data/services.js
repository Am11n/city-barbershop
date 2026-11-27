// Prices from the owner's price list (received 2026-11-27).
// Durations are estimates — the live durations come from TeqBook in the booking flow.
export const services = [
    {
        id: 'voksen',
        category: 'hair',
        name: { no: 'Voksen', en: 'Adult' },
        description: {
            no: 'Fade eller klassisk klipp, med saks og maskin.',
            en: 'Fade or classic cut, with scissors and clippers.',
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
            no: 'Klipp for ungdom.',
            en: 'Haircut for teens.',
        },
        price: 350,
        duration: 30,
    },
    {
        id: 'barn',
        category: 'hair',
        name: { no: 'Barn', en: 'Kids' },
        description: {
            no: 'Klipp for barn.',
            en: 'Haircut for kids.',
        },
        price: 300,
        duration: 25,
    },
    {
        id: 'skjegg',
        category: 'extra',
        name: { no: 'Skjegg', en: 'Beard' },
        description: {
            no: 'Trim og forming av skjegget.',
            en: 'Beard trim and shaping.',
        },
        price: 250,
        duration: 20,
    },
    {
        id: 'vask',
        category: 'extra',
        name: { no: 'Vaske hår', en: 'Hair wash' },
        description: {
            no: 'Legg til hårvask på klippen.',
            en: 'Add a hair wash to your cut.',
        },
        price: 100,
        duration: 10,
    },
    {
        id: 'combo',
        category: 'combo',
        name: { no: 'Klipp og skjegg', en: 'Cut and beard' },
        description: {
            no: 'Klipp og skjegg i samme time.',
            en: 'Haircut and beard in one visit.',
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
