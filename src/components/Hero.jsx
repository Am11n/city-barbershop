import { ArrowUpRight, MapPin } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import OpenStatus from './OpenStatus';

export default function Hero() {
    const { openBooking } = useBooking();

    return (
        <section id="top" className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=2000&auto=format&fit=crop&q=80"
                    alt=""
                    className="h-full w-full scale-105 object-cover object-center"
                    loading="eager"
                    fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,38,47,.28),transparent_55%)]" />
            </div>

            {/* Barber pole accent */}
            <div className="absolute right-6 top-0 hidden h-[62%] w-3 overflow-hidden rounded-b-full lg:block">
                <div className="pole-stripes animate-pole h-full w-full opacity-90" />
            </div>

            <div className="container-x flex flex-1 flex-col justify-end pb-14 pt-32 sm:pb-20">
                <div className="animate-rise flex flex-wrap items-center gap-3">
                    <OpenStatus />
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-bone/80 backdrop-blur">
                        <MapPin className="h-3.5 w-3.5" /> Tollbugata 14, Drammen
                    </span>
                </div>

                <h1 className="mt-6 font-display uppercase leading-[0.86] tracking-tight">
                    <span className="animate-rise block text-[18vw] sm:text-[13vw] lg:text-[11rem]" style={{ animationDelay: '.08s' }}>
                        Skarp.
                    </span>
                    <span className="animate-rise block text-[18vw] sm:text-[13vw] lg:text-[11rem]" style={{ animationDelay: '.16s' }}>
                        Ren. <span className="font-serif normal-case italic tracking-normal text-pole">din.</span>
                    </span>
                </h1>

                <div className="animate-rise mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end" style={{ animationDelay: '.28s' }}>
                    <p className="max-w-xl text-lg leading-relaxed text-bone/75 sm:text-xl">
                        Fades, klassisk klipp og skjeggtrim midt i Drammen sentrum.
                        Velg barber og tid på nett. Det tar under ett minutt.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <button onClick={openBooking} className="btn-primary px-8 py-4 text-base">
                            Book time nå <ArrowUpRight className="h-5 w-5" />
                        </button>
                        <a href="#tjenester" className="btn-ghost px-8 py-4 text-base">
                            Se priser
                        </a>
                    </div>
                </div>

                <div className="animate-rise mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 sm:max-w-xl" style={{ animationDelay: '.4s' }}>
                    {[
                        ['24/7', 'Nettbooking'],
                        ['3', 'Barberere'],
                        ['6 dager', 'Åpent i uka'],
                    ].map(([n, l]) => (
                        <div key={l}>
                            <div className="font-display text-3xl sm:text-4xl">{n}</div>
                            <div className="mt-1 text-xs uppercase tracking-widest text-mute">{l}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
