import { Check } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

// Brands on the shelf in the salon (from the shop's own photos).
const brands = ['GioMat', 'The Italian Beard Company', 'Reuzel'];

export default function Products() {
    const { t } = useLang();
    const points = t('products.points');

    return (
        <section id="produkter" className="py-24 sm:py-32">
            {/* Both columns share the row height: the text starts at the top of the
                photo and the brand card ends at its bottom. */}
            <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="reveal order-2 aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 lg:order-1">
                    <img src="/images/produkter.webp" alt={t('products.imgAlt')} loading="lazy" className="h-full w-full object-cover" />
                </div>

                <div className="reveal order-1 flex flex-col justify-between gap-10 lg:order-2">
                    <div>
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
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-coal p-6 sm:p-8">
                        <p className="text-xs uppercase tracking-widest text-mute">{t('products.shelf')}</p>
                        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-display text-2xl uppercase tracking-wide sm:text-3xl">
                            {brands.map((b) => <li key={b}>{b}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
