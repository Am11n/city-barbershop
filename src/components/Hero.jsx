import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MapPin, Pause, Play, Star } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLang } from '../i18n/LanguageContext';
import { google } from '../data/team';
import OpenStatus from './OpenStatus';

// Muted walk-through of the salon. Falls back to the still photo when the
// visitor prefers reduced motion or has data saver on.
function useHeroVideo() {
    const ref = useRef(null);
    const [enabled, setEnabled] = useState(false);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setEnabled(!reduced && !navigator.connection?.saveData);
    }, []);

    const toggle = () => {
        const v = ref.current;
        if (!v) return;
        if (v.paused) v.play(); else v.pause();
    };

    return { ref, enabled, playing, setPlaying, toggle };
}

export default function Hero() {
    const { openBooking } = useBooking();
    const { t, lang } = useLang();
    const video = useHeroVideo();

    return (
        <section id="top" className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden">
            <div className="absolute inset-0 -z-10">
                {video.enabled ? (
                    <video
                        ref={video.ref}
                        className="h-full w-full object-cover object-center"
                        src="/video/salong-loop.mp4"
                        poster="/images/salong-video-poster.webp"
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-hidden="true"
                        onPlay={() => video.setPlaying(true)}
                        onPause={() => video.setPlaying(false)}
                    />
                ) : (
                    <img
                        src="/images/salong-2000.webp"
                        srcSet="/images/salong-1200.webp 1200w, /images/salong-2000.webp 2000w"
                        sizes="100vw"
                        alt=""
                        className="h-full w-full scale-105 object-cover object-center"
                        loading="eager"
                        fetchpriority="high"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(224,38,47,.28),transparent_55%)]" />
            </div>

            {video.enabled && (
                <button
                    onClick={video.toggle}
                    aria-label={video.playing ? t('hero.pause') : t('hero.play')}
                    className="absolute bottom-24 right-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink/50 text-bone backdrop-blur transition-colors hover:bg-ink/80 sm:bottom-8 sm:right-8"
                >
                    {video.playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
            )}

            <div className="absolute right-6 top-0 hidden h-[62%] w-3 overflow-hidden rounded-b-full lg:block">
                <div className="pole-stripes animate-pole h-full w-full opacity-90" />
            </div>

            <div className="container-x flex flex-1 flex-col justify-end pb-14 pt-32 sm:pb-20">
                <div className="animate-rise flex flex-wrap items-center gap-3">
                    <OpenStatus className="lg:hidden" />
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-bone/80 backdrop-blur">
                        <MapPin className="h-3.5 w-3.5" /> Tollbugata 14, Drammen
                    </span>
                </div>

                <h1 key={lang} className="mt-6 font-display uppercase leading-[0.86] tracking-tight">
                    <span className="animate-rise block text-[18vw] sm:text-[13vw] lg:text-[11rem]" style={{ animationDelay: '.08s' }}>
                        {t('hero.l1')}
                    </span>
                    <span className="animate-rise block text-[18vw] sm:text-[13vw] lg:text-[11rem]" style={{ animationDelay: '.16s' }}>
                        {t('hero.l2')} <span className="font-serif normal-case italic tracking-normal text-pole">{t('hero.l3')}</span>
                    </span>
                </h1>

                <div className="animate-rise mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end" style={{ animationDelay: '.28s' }}>
                    <p className="max-w-xl text-lg leading-relaxed text-bone/75 sm:text-xl">{t('hero.lead')}</p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <button onClick={openBooking} className="btn-primary px-8 py-4 text-base">
                            {t('hero.cta')} <ArrowUpRight className="h-5 w-5" />
                        </button>
                        <a href="#tjenester" className="btn-ghost px-8 py-4 text-base">{t('hero.prices')}</a>
                    </div>
                </div>

                <div className="animate-rise mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 sm:max-w-xl" style={{ animationDelay: '.4s' }}>
                    <a href="#anmeldelser" className="group">
                        <div className="flex items-center gap-1.5 font-display text-3xl sm:text-4xl">
                            {google.rating.toFixed(1).replace(".", t("stats.decimal"))} <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-widest text-mute group-hover:text-bone">
                            {google.count} {t('hero.statRating')}
                        </div>
                    </a>
                    <div>
                        <div className="font-display text-3xl sm:text-4xl">24/7</div>
                        <div className="mt-1 text-xs uppercase tracking-widest text-mute">{t('hero.statOnline')}</div>
                    </div>
                    <div>
                        <div className="font-display text-3xl sm:text-4xl">3</div>
                        <div className="mt-1 text-xs uppercase tracking-widest text-mute">{t('hero.statBarbers')}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
