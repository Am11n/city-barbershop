import { ArrowUpRight, Clock } from 'lucide-react';
import { services } from '../data/services';
import { useBooking } from '../context/BookingContext';

export default function Services() {
    const { openBooking } = useBooking();

    return (
        <section id="tjenester" className="py-24 sm:py-32">
            <div className="container-x">
                <div className="reveal grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
                    <div>
                        <span className="eyebrow"><span className="h-px w-8 bg-pole" /> Tjenester & priser</span>
                        <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                            Hva skal vi <span className="font-serif normal-case italic text-pole">gjøre</span> i dag?
                        </h2>
                    </div>
                    <p className="max-w-md text-bone/65 lg:justify-self-end">
                        Faste priser, ingen overraskelser. Trykk på en tjeneste for å finne ledig tid. Du velger barber i neste steg.
                    </p>
                </div>

                <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
                    {services.map((s, i) => (
                        <li key={s.id} className="reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                            <button
                                onClick={openBooking}
                                className="group grid w-full grid-cols-[1fr_auto] items-center gap-4 py-7 text-left transition-colors sm:grid-cols-[3rem_1fr_auto_auto] sm:gap-8"
                            >
                                <span className="hidden font-display text-lg text-mute sm:block">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span>
                                    <span className="flex flex-wrap items-center gap-3">
                                        <span className="font-display text-3xl uppercase tracking-wide transition-colors group-hover:text-pole sm:text-4xl">
                                            {s.name}
                                        </span>
                                        {s.popular && (
                                            <span className="rounded-full bg-pole/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-pole">
                                                Mest booket
                                            </span>
                                        )}
                                    </span>
                                    <span className="mt-2 block max-w-xl text-sm text-bone/60">{s.description}</span>
                                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-mute sm:hidden">
                                        <Clock className="h-3.5 w-3.5" /> {s.duration} min
                                    </span>
                                </span>
                                <span className="hidden items-center gap-1.5 text-sm text-mute sm:inline-flex">
                                    <Clock className="h-4 w-4" /> {s.duration} min
                                </span>
                                <span className="flex items-center gap-4">
                                    <span className="font-display text-3xl sm:text-4xl">
                                        {s.price}<span className="ml-1 text-base text-mute">kr</span>
                                    </span>
                                    <span className="hidden h-12 w-12 place-items-center rounded-full border border-white/15 transition-all group-hover:rotate-45 group-hover:border-pole group-hover:bg-pole sm:grid">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </span>
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
