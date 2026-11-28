import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLang } from '../i18n/LanguageContext';

// Muted montage: a pan through the salon, then a barber at work and the
// finished fade. Portrait screens get a vertical cut. Falls back to the
// still photo when the visitor prefers reduced motion or has data saver on.
// Phone footage is fast and handheld; play it slower so it feels calm.
const PLAYBACK_RATE = 0.6;

function useHeroVideo() {
    const ref = useRef(null);
    const [enabled, setEnabled] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [variant, setVariant] = useState('desktop');

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setVariant(window.matchMedia('(orientation: portrait)').matches ? 'mobile' : 'desktop');
        setEnabled(!reduced && !navigator.connection?.saveData);
    }, []);

    const toggle = () => {
        const v = ref.current;
        if (!v) return;
        if (v.paused) v.play(); else v.pause();
    };

    return { ref, enabled, variant, playing, setPlaying, toggle };
}

export default function Hero() {
    const { openBooking } = useBooking();
    const { t, lang } = useLang();
    const video = useHeroVideo();
    const [started, setStarted] = useState(false);

    return (
        <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
            <div className="absolute inset-0 -z-10">
                {/* The still is the first paint (and LCP); the video fades in over it once it plays. */}
                <img
                    src="/images/salong-2000.webp"
                    srcSet="/images/salong-800.webp 800w, /images/salong-1200.webp 1200w, /images/salong-2000.webp 2000w"
                    sizes="100vw"
                    alt=""
                    className="h-full w-full object-cover object-center"
                    loading="eager"
                    fetchpriority="high"
                />
                {video.enabled && (
                    <video
                        ref={video.ref}
                        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${started ? 'opacity-100' : 'opacity-0'}`}
                        key={video.variant}
                        src={`/video/hero-${video.variant}.mp4`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-hidden="true"
                        onLoadedMetadata={(e) => { e.currentTarget.defaultPlaybackRate = PLAYBACK_RATE; e.currentTarget.playbackRate = PLAYBACK_RATE; }}
                        onPlay={(e) => { e.currentTarget.playbackRate = PLAYBACK_RATE; video.setPlaying(true); }}
                        onPlaying={() => setStarted(true)}
                        onPause={() => video.setPlaying(false)}
                    />
                )}
                <div className="absolute inset-0 bg-ink/45" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            </div>

            {video.enabled && (
                <button
                    onClick={video.toggle}
                    aria-label={video.playing ? t('hero.pause') : t('hero.play')}
                    className="absolute right-4 top-24 z-20 grid sm:top-auto h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink/50 text-bone backdrop-blur transition-colors hover:bg-ink/80 sm:bottom-8 sm:right-8"
                >
                    {video.playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
            )}

            <div className="container-x flex flex-1 flex-col items-center justify-center pb-16 pt-32 text-center">
                <div className="flex max-w-4xl flex-col items-center">
                    <h1 key={lang} className="font-display text-[15vw] uppercase leading-[0.9] tracking-tight sm:text-[9vw] lg:text-[7.5rem]">
                        City <span className="text-pole">Barbershop</span>
                    </h1>

                    <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <button onClick={openBooking} className="btn-primary px-7 py-3.5 text-base">
                            {t('hero.cta')}
                        </button>
                        <a href="#tjenester" className="btn-ghost px-7 py-3.5 text-base">{t('hero.prices')}</a>
                    </div>

                    <p className="mt-6 max-w-md text-base leading-relaxed text-bone/80 sm:text-lg">
                        {t('hero.lead')}
                    </p>
                </div>
            </div>
        </section>
    );
}
