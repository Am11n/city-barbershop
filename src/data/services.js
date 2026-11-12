// Prototype prices — the live prices come from TeqBook in the booking flow.
export const services = [
    {
        id: 'klipp',
        name: { no: 'Herreklipp', en: "Men's cut" },
        description: {
            no: 'Klipp med saks og maskin, vask og styling. Tilpasset hodeform og hverdag.',
            en: 'Scissor and clipper cut, wash and styling. Tailored to your head shape and routine.',
        },
        price: 490,
        duration: 30,
    },
    {
        id: 'fade',
        name: { no: 'Skin Fade', en: 'Skin Fade' },
        description: {
            no: 'Ren overgang helt ned til huden. Finish med kniv langs linjene.',
            en: 'A clean blend all the way down to the skin, finished with a razor line-up.',
        },
        price: 550,
        duration: 45,
        popular: true,
    },
    {
        id: 'skjegg',
        name: { no: 'Skjeggtrim', en: 'Beard trim' },
        description: {
            no: 'Forming med maskin og saks, varmt håndkle og skjeggolje.',
            en: 'Shaped with clippers and scissors, hot towel and beard oil.',
        },
        price: 350,
        duration: 20,
    },
    {
        id: 'combo',
        name: { no: 'Klipp + skjegg', en: 'Cut + beard' },
        description: {
            no: 'Hele pakken: fade eller klipp, skjeggtrim og hot towel.',
            en: 'The full package: fade or cut, beard trim and hot towel.',
        },
        price: 790,
        duration: 60,
    },
    {
        id: 'barn',
        name: { no: 'Barneklipp', en: 'Kids cut' },
        description: {
            no: 'For gutter under 12 år. Rolig tempo, samme presisjon.',
            en: 'For boys under 12. Calm pace, same precision.',
        },
        price: 350,
        duration: 25,
    },
    {
        id: 'barbering',
        name: { no: 'Klassisk barbering', en: 'Classic shave' },
        description: {
            no: 'Kniv, varme håndklær og balsam. Gammeldags, på den gode måten.',
            en: 'Straight razor, hot towels and balm. Old school, in the best way.',
        },
        price: 450,
        duration: 30,
    },
];
