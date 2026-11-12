import { Coffee, MessageCircle, Droplets, Scissors, Flame, Sparkles } from 'lucide-react';
import { steps } from '../data/content';
import { useLang } from '../i18n/LanguageContext';

const icons = { Coffee, MessageCircle, Droplets, Scissors, Flame, Sparkles };

export default function Experience() {
    const { t, L } = useLang();

    return (
        <section id="opplevelsen" className="relative overflow-hidden py-24 sm:py-32">
            <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div className="reveal lg:sticky lg:top-28 lg:self-start">
                    <span className="eyebrow"><span className="h-px w-8 bg-pole" /> {t('experience.eyebrow')}</span>
                    <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                        {t('experience.h1')} <br />
                        <span className="font-serif normal-case italic text-pole">{t('experience.h2')}</span>
                    </h2>
                    <p className="mt-6 max-w-md text-bone/65">{t('experience.lead')}</p>
                    <div className="relative mt-10 hidden aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem] lg:block">
                        <img
                            src="https://images.unsplash.com/photo-1717089256239-dc2ed4d9dfc6?w=900&auto=format&fit=crop&q=70"
                            alt={t('experience.imgAlt')}
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    </div>
                </div>

                <ol className="relative">
                    <span className="absolute bottom-4 left-[27px] top-4 w-px bg-gradient-to-b from-pole via-white/15 to-navy" aria-hidden="true" />
                    {steps.map((s, i) => {
                        const Icon = icons[s.icon];
                        return (
                            <li key={s.icon} className="reveal relative flex gap-6 pb-12 last:pb-0" style={{ transitionDelay: `${i * 70}ms` }}>
                                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/10 bg-coal">
                                    <Icon className="h-5 w-5 text-pole" />
                                </span>
                                <div className="pt-2">
                                    <p className="font-display text-sm text-mute">{String(i + 1).padStart(2, '0')}</p>
                                    <h3 className="font-display text-3xl uppercase sm:text-4xl">{L(s.title)}</h3>
                                    <p className="mt-2 max-w-md text-bone/60">{L(s.text)}</p>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
