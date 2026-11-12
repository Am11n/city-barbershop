import { ArrowUpRight, Instagram } from 'lucide-react';
import { team, gallery } from '../data/team';
import { useBooking } from '../context/BookingContext';
import { useLang } from '../i18n/LanguageContext';

export default function Team() {
    const { openBooking } = useBooking();
    const { t, L } = useLang();

    return (
        <section id="team" className="relative overflow-hidden bg-coal py-24 sm:py-32">
            <div className="container-x">
                <div className="reveal flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <span className="eyebrow"><span className="h-px w-8 bg-pole" /> {t('team.eyebrow')}</span>
                        <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                            {t('team.h1')} <br className="hidden sm:block" />
                            <span className="font-serif normal-case italic text-pole">{t('team.h2')}</span> {t('team.h3')}
                        </h2>
                    </div>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-ghost self-start sm:self-auto">
                        <Instagram className="h-4 w-4" /> {t('team.instagram')}
                    </a>
                </div>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((m, i) => (
                        <article
                            key={m.id}
                            className="reveal group relative aspect-[4/5] overflow-hidden rounded-3xl bg-steel"
                            style={{ transitionDelay: `${i * 90}ms` }}
                        >
                            <img
                                src={m.image}
                                alt={`${m.name}, ${L(m.role)}`}
                                loading="lazy"
                                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-pole">{L(m.role)}</p>
                                    <h3 className="mt-1 font-display text-4xl uppercase">{m.name}</h3>
                                    <p className="mt-1 text-sm text-bone/70">{L(m.specialty)}</p>
                                </div>
                                <button
                                    onClick={openBooking}
                                    aria-label={`${t('team.bookWith')} ${m.name}`}
                                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-bone text-ink transition-all group-hover:bg-pole group-hover:text-white"
                                >
                                    <ArrowUpRight className="h-5 w-5" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="reveal mt-20 flex gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8 [scrollbar-width:none]">
                {gallery.map((src, i) => (
                    <img
                        key={src}
                        src={src}
                        alt={`${t('team.work')} ${i + 1}`}
                        loading="lazy"
                        className={`h-64 w-52 shrink-0 rounded-2xl object-cover sm:h-80 sm:w-64 ${i % 2 ? 'sm:mt-10' : ''}`}
                    />
                ))}
            </div>
        </section>
    );
}
