// Three real reviews from the City Barbershop Google profile (copied 15 Nov 2026).
// Each `url` opens that exact review on Google Maps. Shown when the live
// /api/reviews endpoint is not configured.
const PLACE = '0x0:0x1123982b6a359228';
const reviewUrl = (id) =>
    `https://www.google.com/maps/reviews/@59.7385893,10.2046242,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1s${id}!2m1!1s${PLACE}`;

export const featuredReviews = [
    {
        author: 'Mateusz Singh',
        rating: 5,
        when: { no: 'mai 2026', en: 'May 2026' },
        text: 'Veldig bra opplevelse. Profesjonell og hyggelig frisør som virkelig kan faget. Fikk akkurat den frisyren jeg ønsket – faktisk enda bedre. Raskt, nøye og god stemning. Kommer definitivt tilbake!',
        url: reviewUrl('Ci9DQUlRQUNvZENodHljRjlvT2pFMU1rVktVV1pFUlZsTFJXaHNUMjluZGxBNGNrRRAB'),
    },
    {
        author: 'Benas Grubliauskis',
        rating: 5,
        when: { no: 'april 2026', en: 'April 2026' },
        text: 'Youel er en fantastisk frisør, alltid tar seg tid til å høre på hva man vil ha i et hårklipp, og ikke minst leverer hver eneste gang. Har vært hos mange frisører, og jeg mener det når jeg sier det at han er i sitt eget liga, anbefales på det sterkeste🙌',
        url: reviewUrl('Ci9DQUlRQUNvZENodHljRjlvT2s1MlRqaGxaR05PWTJoT1dYVllhWGxWTjFkVmRWRRAB'),
    },
    {
        author: 'Christoffer King',
        rating: 5,
        when: { no: '2024', en: '2024' },
        text: 'Kan sterkt anbefales for både hår og skjegg. Eieren er svært hyggelig og lett å kommunisere med. Jeg har vært borti mye dårlige og skjeve klipper opp igjennom hos andre frisører, men her vet jeg hva jeg får. En presis, stylish og ikke minst jevn klipp. Anbefales sterkt.',
        url: reviewUrl('ChZDSUhNMG9nS0VJQ0FnSURENWR1X2N3EAE'),
    },
];
