import { Check, ArrowUpRight, Crown } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLang } from '../i18n/LanguageContext';
import { plans } from '../data/content';

export default function Membership() {
    const { openBooking } = useBooking();
    const { t, L } = useLang();

    return (
        <section id="club" className="relative overflow-hidden bg-coal py-24 sm:py-32">
            <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-pole/10 blur-3xl" />
            <div className="container-x">
                <div className="reveal mx-auto max-w-2xl text-center">
                    <span className="eyebrow justify-center"><Crown className="h-3.5 w-3.5 text-pole" /> {t('club.eyebrow')}</span>
                    <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                        {t('club.h1')} <span className="font-serif normal-case italic text-pole">{t('club.h2')}</span> {t('club.h3')}
                    </h2>
                    <p className="mt-6 text-bone/65">{t('club.lead')}</p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {plans.map((p, i) => (
                        <article
                            key={p.name}
                            className={`reveal relative flex flex-col rounded-[2rem] border p-8 ${p.featured
                                ? 'border-pole/60 bg-gradient-to-b from-pole/15 to-steel shadow-2xl shadow-pole/10'
                                : 'border-white/10 bg-steel'
                                }`}
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            {p.featured && (
                                <span className="absolute -top-3 left-8 rounded-full bg-pole px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                                    {t('club.recommended')}
                                </span>
                            )}
                            <h3 className="font-display text-4xl uppercase">{p.name}</h3>
                            <p className="mt-2 text-sm text-bone/60">{L(p.tagline)}</p>
                            <p className="mt-8 flex items-baseline gap-2">
                                <span className="font-display text-6xl">{p.price}</span>
                                <span className="text-mute">{t('club.perMonth')}</span>
                            </p>
                            <ul className="mt-8 flex-1 space-y-3">
                                {L(p.perks).map((perk) => (
                                    <li key={perk} className="flex items-start gap-3 text-sm">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-pole" /> {perk}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={openBooking} className={`mt-10 w-full ${p.featured ? 'btn-primary' : 'btn-ghost'}`}>
                                {t('club.join')} <ArrowUpRight className="h-4 w-4" />
                            </button>
                        </article>
                    ))}
                </div>
                <p className="mt-8 text-center text-xs text-mute">{t('club.note')}</p>
            </div>
        </section>
    );
}
