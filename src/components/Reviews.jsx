import { useEffect, useState } from 'react';
import { Star, ArrowUpRight, PenLine } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { google } from '../data/team';

// Live Google reviews via /api/reviews (Vercel function). If the API is not
// configured, the section still shows the real rating summary from Google.
function useGoogleReviews(lang) {
    const [data, setData] = useState(null);
    useEffect(() => {
        let alive = true;
        fetch(`/api/reviews?lang=${lang}`)
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => alive && setData(d && Array.isArray(d.reviews) ? d : null))
            .catch(() => alive && setData(null));
        return () => { alive = false; };
    }, [lang]);
    return data;
}

function Stars({ value, className = 'h-4 w-4' }) {
    return (
        <span className="flex gap-0.5" aria-label={`${value} / 5`}>
            {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`${className} ${i <= Math.round(value) ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`} />
            ))}
        </span>
    );
}

function GoogleG() {
    return (
        <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
            <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
        </svg>
    );
}

export default function Reviews() {
    const { t, lang } = useLang();
    const live = useGoogleReviews(lang);

    const rating = live?.rating ?? google.rating;
    const count = live?.count ?? google.count;
    const url = live?.url ?? google.mapsUrl;
    const reviews = live?.reviews ?? [];

    return (
        <section id="anmeldelser" className="relative overflow-hidden py-24 sm:py-32">
            <div className="container-x">
                <div className="reveal grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <span className="eyebrow"><span className="h-px w-8 bg-pole" /> {t('reviews.eyebrow')}</span>
                        <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                            {t('reviews.h1')} <br />
                            <span className="font-serif normal-case italic text-pole">{t('reviews.h2')}</span> {t('reviews.h3')}
                        </h2>
                    </div>

                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-steel p-5 pr-7 transition-colors hover:border-white/25"
                    >
                        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white">
                            <GoogleG />
                        </span>
                        <span>
                            <span className="flex items-center gap-3">
                                <span className="font-display text-5xl leading-none">{Number(rating).toFixed(1)}</span>
                                <Stars value={rating} className="h-5 w-5" />
                            </span>
                            <span className="mt-1 block text-sm text-bone/60">
                                {t('reviews.basedOn')} {count} {t('reviews.reviewsWord')}
                            </span>
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-mute transition-transform group-hover:rotate-45 group-hover:text-bone" />
                    </a>
                </div>

                {reviews.length > 0 && (
                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {reviews.slice(0, 6).map((r, i) => (
                            <figure
                                key={`${r.author}-${i}`}
                                className="reveal is-visible flex flex-col rounded-[2rem] border border-white/10 bg-steel p-7"
                            >
                                <div className="flex items-center justify-between">
                                    <Stars value={r.rating} />
                                    <span className="text-xs text-mute">{r.when}</span>
                                </div>
                                <blockquote className="mt-5 flex-1 text-bone/85 [display:-webkit-box] [-webkit-line-clamp:7] [-webkit-box-orient:vertical] overflow-hidden">
                                    “{r.text}”
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                                    {r.photo ? (
                                        <img src={r.photo} alt="" referrerPolicy="no-referrer" className="h-9 w-9 rounded-full object-cover" />
                                    ) : (
                                        <span className="grid h-9 w-9 place-items-center rounded-full bg-pole font-semibold">{r.author[0]}</span>
                                    )}
                                    <span className="min-w-0">
                                        <a href={r.authorUrl ?? url} target="_blank" rel="noreferrer" className="block truncate font-semibold hover:underline">
                                            {r.author}
                                        </a>
                                        <span className="text-xs text-mute">Google</span>
                                    </span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                )}

                <div className="reveal mt-10 flex flex-wrap items-center gap-3">
                    <a href={url} target="_blank" rel="noreferrer" className="btn-ghost">
                        {t('reviews.seeAll')} <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a href={url} target="_blank" rel="noreferrer" className="btn-ghost">
                        <PenLine className="h-4 w-4" /> {t('reviews.write')}
                    </a>
                    {reviews.length > 0 && <span className="text-xs text-mute">{t('reviews.source')}</span>}
                </div>
            </div>
        </section>
    );
}
