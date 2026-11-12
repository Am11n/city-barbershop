import { useEffect, useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

// Short branded intro: barber pole fills, then the curtain lifts. Once per session.
export default function Intro() {
    const { t } = useLang();
    const [phase, setPhase] = useState(() => {
        try {
            if (sessionStorage.getItem('cb-intro')) return 'done';
        } catch { /* storage blocked */ }
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'done';
        return 'show';
    });

    useEffect(() => {
        if (phase !== 'show') return;
        try { sessionStorage.setItem('cb-intro', '1'); } catch { /* ignore */ }
        const t1 = setTimeout(() => setPhase('leave'), 1300);
        const t2 = setTimeout(() => setPhase('done'), 2100);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [phase]);

    if (phase === 'done') return null;

    return (
        <div
            className={`fixed inset-0 z-[100] grid place-items-center bg-ink transition-transform duration-700 ease-[cubic-bezier(.7,0,.2,1)] ${phase === 'leave' ? '-translate-y-full' : ''}`}
            aria-hidden="true"
        >
            <div className="flex flex-col items-center gap-6">
                <img src="/logo.png" alt="" className="h-28 w-28 animate-rise rounded-full object-cover ring-1 ring-white/10" />
                <div className="h-1.5 w-48 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full origin-left animate-grow">
                        <div className="pole-stripes animate-pole h-full w-full" />
                    </div>
                </div>
                <p className="font-display text-sm uppercase tracking-[0.4em] text-mute">{t('intro')}</p>
            </div>
        </div>
    );
}
