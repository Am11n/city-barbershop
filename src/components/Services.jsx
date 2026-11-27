import { ArrowUpRight, Clock } from 'lucide-react';
import { services, serviceCategories } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { useLang } from '../i18n/LanguageContext';

function ServiceRow({ s, onBook, t, L }) {
    return (
        <li>
            <button
                onClick={onBook}
                className="group -mx-3 grid w-[calc(100%+1.5rem)] grid-cols-[1fr_auto] gap-x-6 gap-y-1 rounded-2xl px-3 py-5 text-left transition-colors hover:bg-white/[0.04]"
            >
                <span className="flex flex-wrap items-center gap-2.5">
                    <span className="text-lg font-semibold transition-colors group-hover:text-pole">{L(s.name)}</span>
                    {s.popular && (
                        <span className="rounded-full bg-pole/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-pole">
                            {t('services.popular')}
                        </span>
                    )}
                </span>
                <span className="whitespace-nowrap font-display text-2xl">
                    {s.price}<span className="ml-1 text-sm text-mute">{t('services.currency')}</span>
                </span>
                <span className="text-sm leading-relaxed text-bone/55">{L(s.description)}</span>
                <span className="inline-flex items-start justify-end gap-1.5 pt-0.5 text-xs text-mute">
                    <Clock className="h-3.5 w-3.5" /> {s.duration} {t('services.min')}
                </span>
            </button>
        </li>
    );
}

export default function Services() {
    const { openBooking } = useBooking();
    const { t, L } = useLang();
    const byCat = (id) => services.filter((s) => s.category === id);
    const combo = byCat('combo')[0];

    return (
        <section id="tjenester" className="py-24 sm:py-32">
            <div className="container-x">
                <div className="reveal grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
                    <div>
                        <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-7xl">{t('services.title')}</h2>
                    </div>
                    <p className="max-w-md text-bone/65 lg:justify-self-end">{t('services.lead')}</p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {serviceCategories.filter((c) => c.id !== 'combo').map((c, i) => (
                        <div
                            key={c.id}
                            className="reveal rounded-[2rem] border border-white/10 bg-coal p-6 sm:p-8"
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            <h3 className="flex items-center justify-between font-display text-3xl uppercase tracking-wide">
                                {L(c.name)}
                                <span className="text-sm font-sans font-medium normal-case tracking-normal text-mute">
                                    {byCat(c.id).length} {t('services.count')}
                                </span>
                            </h3>
                            <ul className="mt-4 divide-y divide-white/10">
                                {byCat(c.id).map((s) => <ServiceRow key={s.id} s={s} onBook={openBooking} t={t} L={L} />)}
                            </ul>
                        </div>
                    ))}

                    {combo && (
                        <button
                            onClick={openBooking}
                            className="reveal group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[2rem] border border-white/10 p-6 text-left sm:p-8"
                            style={{ transitionDelay: '160ms' }}
                        >
                            <img
                                src="/images/craft-skjegg.webp"
                                alt=""
                                loading="lazy"
                                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
                            <span className="self-start rounded-full bg-pole px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                                {t('services.bestValue')}
                            </span>
                            <h3 className="mt-4 font-display text-5xl uppercase leading-none">{L(combo.name)}</h3>
                            <p className="mt-3 max-w-xs text-sm text-bone/70">{L(combo.description)}</p>
                            <span className="mt-6 flex items-end justify-between gap-4 border-t border-white/15 pt-5">
                                <span>
                                    <span className="font-display text-5xl">{combo.price}</span>
                                    <span className="ml-1 text-mute">{t('services.currency')}</span>
                                    <span className="mt-1 flex items-center gap-1.5 text-xs text-mute">
                                        <Clock className="h-3.5 w-3.5" /> {combo.duration} {t('services.min')}
                                    </span>
                                </span>
                                <span className="grid h-12 w-12 place-items-center rounded-full bg-bone text-ink transition-all group-hover:rotate-45 group-hover:bg-pole group-hover:text-white">
                                    <ArrowUpRight className="h-5 w-5" />
                                </span>
                            </span>
                        </button>
                    )}
                </div>

                <p className="reveal mt-6 text-center text-xs text-mute">{t('services.note')}</p>
            </div>
        </section>
    );
}
