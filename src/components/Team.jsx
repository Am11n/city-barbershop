import { Camera, Instagram } from 'lucide-react';
import { team, instagramUrl } from '../data/team';
import { useBooking } from '../context/BookingContext';
import { useLang } from '../i18n/LanguageContext';

export default function Team() {
    const { openBooking } = useBooking();
    const { t, L } = useLang();

    return (
        <section id="team" className="relative overflow-hidden bg-coal py-24 sm:py-32">
            <div className="container-x">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-7xl">{t('team.title')}</h2>
                    </div>
                    <a href={instagramUrl} target="_blank" rel="noreferrer" className="btn-ghost self-start sm:self-auto">
                        <Instagram className="h-4 w-4" /> {t('team.instagram')}
                    </a>
                </div>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((m) => (
                        <article
                            key={m.id}
                            className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-steel"
                        >
                            {m.image ? (
                                <img
                                    src={m.image}
                                    alt={`${m.name}, ${L(m.role)}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />
                            ) : (
                                <div className="absolute inset-x-3 top-3 bottom-36 flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-bone/20 text-bone/40">
                                    <Camera className="h-10 w-10" strokeWidth={1.25} aria-hidden="true" />
                                    <span className="text-sm">{t('team.photoSoon')}</span>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                                <div>
                                    <h3 className="font-display text-4xl uppercase">{m.name}</h3>
                                    <p className="mt-1 text-sm text-bone/80">{L(m.role)}</p>
                                    <p className="text-sm text-bone/55">{L(m.specialty)}</p>
                                </div>
                                <button
                                    onClick={openBooking}
                                    aria-label={`${t('team.bookWith')} ${m.name}`}
                                    className="shrink-0 rounded-full bg-bone px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-pole hover:text-white"
                                >
                                    {t('nav.book')}
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
