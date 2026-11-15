import { useEffect, useRef } from 'react';

// Barber pole on the right edge that fills up as you scroll down the page.
export default function ScrollPole() {
    const fill = useRef(null);

    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
            if (fill.current) fill.current.style.height = `${progress * 100}%`;
        };
        const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed bottom-24 right-1.5 top-0 z-40 sm:bottom-6 w-1.5 overflow-hidden rounded-b-full bg-white/10 sm:right-4 sm:w-2.5 lg:right-6 lg:w-3"
            aria-hidden="true"
        >
            <div ref={fill} className="pole-stripes animate-pole w-full rounded-b-full" style={{ height: 0 }} />
        </div>
    );
}
