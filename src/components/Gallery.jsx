import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Instagram } from 'lucide-react';
import { gallery, instagramUrl } from '../data/team';
import { useLang } from '../i18n/LanguageContext';

// "Fra stolen": real work from the salon in a swipeable strip.
export default function Gallery() {
    const { t } = useLang();
    const track = useRef(null);

    const scroll = (dir) => {
        const el = track.current;
        if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
    };

    return (
        <section id="galleri" className="overflow-hidden py-24 sm:py-32">
            <div className="container-x reveal flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                    <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-7xl">{t('gallery.title')}</h2>
                    <p className="mt-4 max-w-md text-bone/65">{t('gallery.lead')}</p>
                </div>
                <div className="flex items-center gap-2">
                    <a href={instagramUrl} target="_blank" rel="noreferrer" className="btn-ghost px-5 py-3">
                        <Instagram className="h-4 w-4" /> {t('team.instagram')}
                    </a>
                    <button onClick={() => scroll(-1)} aria-label={t('gallery.prev')} className="hidden h-12 w-12 place-items-center rounded-full border border-white/15 transition-colors hover:border-white/40 sm:grid">
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button onClick={() => scroll(1)} aria-label={t('gallery.next')} className="hidden h-12 w-12 place-items-center rounded-full border border-white/15 transition-colors hover:border-white/40 sm:grid">
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <ul
                ref={track}
                className="reveal mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [&::-webkit-scrollbar]:hidden"
            >
                {gallery.map((src, i) => (
                    <li key={src} className="shrink-0 snap-start">
                        <img
                            src={src}
                            alt={`${t('team.work')} ${i + 1}`}
                            loading="lazy"
                            className="h-80 w-64 rounded-3xl object-cover sm:h-[26rem] sm:w-80"
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}
