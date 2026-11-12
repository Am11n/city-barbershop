import { Plus } from 'lucide-react';
import { faqs } from '../data/content';
import { useLang } from '../i18n/LanguageContext';

export default function Faq() {
    const { t, L } = useLang();

    return (
        <section id="faq" className="py-24 sm:py-32">
            <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="reveal">
                    <span className="eyebrow"><span className="h-px w-8 bg-pole" /> {t('faq.eyebrow')}</span>
                    <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                        {t('faq.h1')} <br />
                        <span className="font-serif normal-case italic text-pole">{t('faq.h2')}</span>
                    </h2>
                </div>
                <div className="reveal divide-y divide-white/10 border-y border-white/10">
                    {faqs.map((f) => (
                        <details key={f.q.no} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">
                                {L(f.q)}
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 transition-transform duration-300 group-open:rotate-45 group-open:border-pole group-open:bg-pole">
                                    <Plus className="h-4 w-4" />
                                </span>
                            </summary>
                            <p className="mt-4 max-w-xl text-bone/65">{L(f.a)}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
