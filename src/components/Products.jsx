import { Check } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

// Brands on the shelf in the salon (from the shop's own photos).
const brands = ['GioMat', 'The Italian Beard Company', 'Reuzel'];

export default function Products() {
    const { t } = useLang();
    const points = t('products.points');

    return (
        <section id="produkter" className="py-24 sm:py-32">
            <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="reveal relative order-2 lg:order-1">
                    <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
                        <img src="/images/produkter.webp" alt={t('products.imgAlt')} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <div className="absolute -bottom-6 -right-3 hidden rounded-3xl border border-white/10 bg-ink/90 p-5 backdrop-blur sm:block lg:-right-8">
                        <p className="text-xs uppercase tracking-widest text-mute">{t('products.shelf')}</p>
                        <ul className="mt-2 space-y-1 font-display text-xl uppercase tracking-wide">
                            {brands.map((b) => <li key={b}>{b}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="reveal order-1 lg:order-2">
                    <span className="eyebrow"><span className="h-px w-8 bg-pole" /> {t('products.eyebrow')}</span>
                    <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                        {t('products.h1')} <br />
                        <span className="font-serif normal-case italic text-pole">{t('products.h2')}</span>
                    </h2>
                    <p className="mt-6 max-w-md text-bone/65">{t('products.lead')}</p>
                    <ul className="mt-8 space-y-3">
                        {points.map((p) => (
                            <li key={p} className="flex items-start gap-3 text-bone/80">
                                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-pole/15">
                                    <Check className="h-3 w-3 text-pole" />
                                </span>
                                {p}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-8 text-sm text-mute sm:hidden">{t('products.shelf')}: {brands.join(' · ')}</p>
                </div>
            </div>
        </section>
    );
}
