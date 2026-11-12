export const steps = [
    { icon: 'Coffee', title: { no: 'Velkommen', en: 'Welcome' }, text: { no: 'Kaffe, te eller vann mens du venter. Du blir tatt imot, ikke bare ropt opp.', en: 'Coffee, tea or water while you wait. You are welcomed, not just called up.' } },
    { icon: 'MessageCircle', title: { no: 'Konsultasjon', en: 'Consultation' }, text: { no: 'Vi ser på hodeform, hårvekst og hverdag før saksen kommer fram.', en: 'We look at head shape, hair growth and your routine before the scissors come out.' } },
    { icon: 'Droplets', title: { no: 'Vask', en: 'Wash' }, text: { no: 'Grundig hårvask og hodebunnsmassasje med profesjonelle produkter.', en: 'A proper wash and scalp massage with professional products.' } },
    { icon: 'Scissors', title: { no: 'Klipp', en: 'Cut' }, text: { no: 'Presisjonsarbeid med saks, maskin og kniv. Ingen hastverk.', en: 'Precision work with scissors, clippers and razor. No rushing.' } },
    { icon: 'Flame', title: { no: 'Hot towel', en: 'Hot towel' }, text: { no: 'Varmt håndkle åpner porene før skjegg og konturer.', en: 'A hot towel opens the pores before beard work and line-ups.' } },
    { icon: 'Sparkles', title: { no: 'Finish', en: 'Finish' }, text: { no: 'Styling, råd om produkter, og du går ut klar for helgen.', en: 'Styling, product advice, and you walk out ready for the weekend.' } },
];

// Proposed monthly membership: a recurring-revenue idea to pitch to the shop owner.
export const plans = [
    {
        name: 'Fresh', price: 790,
        tagline: { no: 'For deg som vil holde fasongen.', en: 'For keeping your shape between cuts.' },
        perks: { no: ['1 klipp i måneden', '10 % på produkter', 'Prioritert booking'], en: ['1 cut per month', '10% off products', 'Priority booking'] },
    },
    {
        name: 'Sharp', price: 1290, featured: true,
        tagline: { no: 'Alltid skarp. Den mest populære.', en: 'Always sharp. The most popular.' },
        perks: { no: ['2 klipp i måneden', 'Skjeggtrim inkludert', '15 % på produkter', 'Prioritert booking'], en: ['2 cuts per month', 'Beard trim included', '15% off products', 'Priority booking'] },
    },
    {
        name: 'Executive', price: 1990,
        tagline: { no: 'Ubegrenset. For deg som aldri kan se sliten ut.', en: 'Unlimited. For when looking tired is not an option.' },
        perks: { no: ['Ubegrenset klipp', 'Skjegg + hot towel hver gang', '20 % på produkter', 'Fast barber og fast tid'], en: ['Unlimited cuts', 'Beard + hot towel every visit', '20% off products', 'Your own barber and fixed slot'] },
    },
];

export const faqs = [
    { q: { no: 'Må jeg bestille time, eller tar dere drop-in?', en: 'Do I need to book, or do you take walk-ins?' }, a: { no: 'Vi anbefaler å booke på nett, så slipper du å vente. Drop-in tar vi når det er ledig. Ring gjerne først.', en: 'We recommend booking online so you do not have to wait. We take walk-ins when there is room. Feel free to call first.' } },
    { q: { no: 'Hvordan avbestiller eller flytter jeg timen?', en: 'How do I cancel or move my appointment?' }, a: { no: 'Bruk lenken i bekreftelsen du får etter booking, eller ring oss. Gi beskjed senest 24 timer før.', en: 'Use the link in your booking confirmation, or give us a call. Please let us know at least 24 hours ahead.' } },
    { q: { no: 'Kan jeg velge barber?', en: 'Can I choose my barber?' }, a: { no: 'Ja. I bookingen velger du fritt mellom barberne våre, eller «første ledige» om du vil ha raskest mulig tid.', en: 'Yes. In the booking you can pick any of our barbers, or "first available" for the earliest slot.' } },
    { q: { no: 'Hvilke betalingsmåter tar dere?', en: 'Which payment methods do you accept?' }, a: { no: 'Kort, Vipps og Apple Pay i salongen.', en: 'Card, Vipps and Apple Pay in the shop.' } },
    { q: { no: 'Klipper dere barn?', en: 'Do you cut kids’ hair?' }, a: { no: 'Ja, barneklipp for gutter under 12 år. Vi tar oss god tid så det blir en fin opplevelse.', en: 'Yes, kids cuts for boys under 12. We take our time so it is a good experience.' } },
    { q: { no: 'Snakker dere engelsk?', en: 'Do you speak English?' }, a: { no: 'Ja, vi klipper på norsk, engelsk og flere andre språk.', en: 'Yes, we cut in Norwegian, English and several other languages.' } },
];
