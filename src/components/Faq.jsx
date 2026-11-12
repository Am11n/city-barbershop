import { Plus } from 'lucide-react';

export const faqs = [
    { q: 'Må jeg bestille time, eller tar dere drop-in?', a: 'Vi anbefaler å booke på nett, så slipper du å vente. Drop-in tar vi når det er ledig. Ring gjerne først.' },
    { q: 'Hvordan avbestiller eller flytter jeg timen?', a: 'Bruk lenken i bekreftelsen du får etter booking, eller ring oss. Gi beskjed senest 24 timer før.' },
    { q: 'Kan jeg velge barber?', a: 'Ja. I bookingen velger du fritt mellom barberne våre, eller «første ledige» om du vil ha raskest mulig tid.' },
    { q: 'Hvilke betalingsmåter tar dere?', a: 'Kort, Vipps og Apple Pay i salongen.' },
    { q: 'Klipper dere barn?', a: 'Ja, barneklipp for gutter under 12 år. Vi tar oss god tid så det blir en fin opplevelse.' },
    { q: 'Selger dere gavekort?', a: 'Ja, gavekort kjøpes i salongen. Perfekt til farsdag, bursdag og jul.' },
];

export default function Faq() {
    return (
        <section id="faq" className="py-24 sm:py-32">
            <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="reveal">
                    <span className="eyebrow"><span className="h-px w-8 bg-pole" /> Spørsmål</span>
                    <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                        Godt å <br />
                        <span className="font-serif normal-case italic text-pole">vite.</span>
                    </h2>
                </div>
                <div className="reveal divide-y divide-white/10 border-y border-white/10">
                    {faqs.map((f) => (
                        <details key={f.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">
                                {f.q}
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 transition-transform duration-300 group-open:rotate-45 group-open:border-pole group-open:bg-pole">
                                    <Plus className="h-4 w-4" />
                                </span>
                            </summary>
                            <p className="mt-4 max-w-xl text-bone/65">{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
