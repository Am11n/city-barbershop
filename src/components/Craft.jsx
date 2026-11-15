import { craft } from '../data/content';
import { useLang } from '../i18n/LanguageContext';

// "Håndverket": large photo cards that show the work, not just list it.
export default function Craft() {
    const { t, L } = useLang();

    return (
        <section id="handverket" className="bg-coal py-24 sm:py-32">
            <div className="container-x">
                <div className="reveal max-w-3xl">
                    <span className="eyebrow"><span className="h-px w-8 bg-pole" /> {t('craft.eyebrow')}</span>
                    <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                        {t('craft.h1')} <span className="font-serif normal-case italic text-pole">{t('craft.h2')}</span>
                    </h2>
                    <p className="mt-6 max-w-xl text-bone/65">{t('craft.lead')}</p>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-6">
                    {craft.map((c, i) => (
                        <figure
                            key={c.image}
                            className={`reveal group relative isolate overflow-hidden rounded-[2rem] ${i === 0 || i === 3 ? 'md:col-span-4' : 'md:col-span-2'} aspect-[4/3] md:aspect-auto md:h-[460px]`}
                            style={{ transitionDelay: `${(i % 2) * 90}ms` }}
                        >
                            <img
                                src={c.image}
                                alt={L(c.alt)}
                                loading="lazy"
                                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                            <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                <p className="font-display text-sm text-pole">{String(i + 1).padStart(2, '0')}</p>
                                <h3 className="mt-1 font-display text-4xl uppercase sm:text-5xl">{L(c.title)}</h3>
                                <p className="mt-2 max-w-sm text-sm text-bone/70">{L(c.text)}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
