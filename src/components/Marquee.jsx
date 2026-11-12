import { useLang } from '../i18n/LanguageContext';

export default function Marquee() {
    const { t } = useLang();
    const words = t('marquee');
    const row = [...words, ...words];
    return (
        <div className="relative overflow-hidden border-y border-white/10 bg-pole py-4 text-white" aria-hidden="true">
            <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
                {row.map((w, i) => (
                    <span key={i} className="flex items-center gap-10 font-display text-2xl uppercase tracking-wide sm:text-3xl">
                        {w}
                        <span className="text-xl text-white/60">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
