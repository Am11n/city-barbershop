import { Star } from 'lucide-react';
import { google, team, hours } from '../data/team';
import { useLang } from '../i18n/LanguageContext';

// Full-bleed photo with the shop's key numbers on top.
export default function StatsBanner() {
    const { t } = useLang();
    const openDays = hours.reduce((n, h) => n + (h.open != null ? h.days.length : 0), 0);

    const stats = [
        { value: <>{google.rating.toFixed(1).replace('.', t('stats.decimal'))} <Star className="inline h-7 w-7 -translate-y-1 fill-amber-400 text-amber-400 sm:h-9 sm:w-9" /></>, label: t('stats.rating') },
        { value: google.count, label: t('stats.reviews') },
        { value: team.length, label: t('stats.barbers') },
        { value: openDays, label: t('stats.days') },
    ];

    return (
        <section className="px-3 sm:px-5" aria-label={t('stats.label')}>
            <div className="reveal relative isolate mx-auto flex min-h-[520px] max-w-[96rem] flex-col justify-between overflow-hidden rounded-[2.5rem] p-8 sm:p-14">
                <img
                    src="/images/salong-2000.webp"
                    srcSet="/images/salong-1200.webp 1200w, /images/salong-2000.webp 2000w"
                    sizes="100vw"
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/90" />

                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bone/70">Tollbugata 14 · Drammen</p>
                    <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                        {t('stats.h1')} <span className="font-serif normal-case italic text-pole">{t('stats.h2')}</span>
                    </h2>
                </div>

                <dl className="mx-auto mt-14 grid w-full max-w-4xl grid-cols-2 gap-y-10 sm:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.label} className="flex flex-col-reverse text-center">
                            <dt className="mt-2 text-xs uppercase tracking-widest text-bone/70">{s.label}</dt>
                            <dd className="font-display text-5xl sm:text-6xl">{s.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
