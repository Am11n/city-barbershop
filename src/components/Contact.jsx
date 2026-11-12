import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { hours } from '../data/team';
import OpenStatus from './OpenStatus';

export default function Contact() {
    const today = new Date().getDay();

    return (
        <section id="kontakt" className="bg-coal py-24 sm:py-32">
            <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="reveal">
                    <span className="eyebrow"><span className="h-px w-8 bg-pole" /> Finn oss</span>
                    <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                        Midt i <br />
                        <span className="font-serif normal-case italic text-pole">Drammen.</span>
                    </h2>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        <a
                            href="https://maps.google.com/?q=Tollbugata+14,+3044+Drammen"
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-3xl border border-white/10 bg-steel p-6 transition-colors hover:border-white/25"
                        >
                            <MapPin className="h-5 w-5 text-pole" />
                            <p className="mt-6 text-xs uppercase tracking-widest text-mute">Adresse</p>
                            <p className="mt-1 text-lg font-semibold">Tollbugata 14</p>
                            <p className="text-bone/60">3044 Drammen</p>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-bone/70 group-hover:text-bone">
                                <Navigation className="h-4 w-4" /> Veibeskrivelse
                            </span>
                        </a>
                        <a
                            href="tel:+4746865541"
                            className="group rounded-3xl border border-white/10 bg-steel p-6 transition-colors hover:border-white/25"
                        >
                            <Phone className="h-5 w-5 text-pole" />
                            <p className="mt-6 text-xs uppercase tracking-widest text-mute">Telefon</p>
                            <p className="mt-1 text-lg font-semibold">46 86 55 41</p>
                            <p className="text-bone/60">Ring for drop-in</p>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-bone/70 group-hover:text-bone">
                                <Phone className="h-4 w-4" /> Ring nå
                            </span>
                        </a>
                        <div className="rounded-3xl border border-white/10 bg-steel p-6 sm:col-span-2">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <Clock className="h-5 w-5 text-pole" />
                                <OpenStatus />
                            </div>
                            <p className="mt-6 text-xs uppercase tracking-widest text-mute">Åpningstider</p>
                            <ul className="mt-3 divide-y divide-white/10">
                                {hours.map((h) => {
                                    const isToday = h.days.includes(today);
                                    return (
                                        <li key={h.day} className={`flex justify-between py-3 ${isToday ? 'font-semibold text-bone' : 'text-bone/60'}`}>
                                            <span>{h.day}{isToday && <span className="ml-2 text-xs text-pole">i dag</span>}</span>
                                            <span>{h.time}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="reveal min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10">
                    <iframe
                        title="Kart som viser City Barbershop i Tollbugata 14, Drammen"
                        src="https://maps.google.com/maps?q=Tollbugata%2014%2C%203044%20Drammen&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        className="h-full min-h-[420px] w-full border-0 [filter:grayscale(1)_invert(.92)_contrast(.9)]"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
