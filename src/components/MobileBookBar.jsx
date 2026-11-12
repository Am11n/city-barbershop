import { useEffect, useState } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

// Thumb-reach booking bar on phones, shown after the hero.
export default function MobileBookBar() {
    const { openBooking, open } = useBooking();
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className={`fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-full border border-white/10 bg-ink/80 p-1.5 shadow-2xl backdrop-blur-xl transition-all duration-500 sm:hidden ${show && !open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'
                }`}
        >
            <a href="tel:+4746865541" className="grid h-12 w-12 place-items-center rounded-full border border-white/10" aria-label="Ring City Barbershop">
                <Phone className="h-5 w-5" />
            </a>
            <button onClick={openBooking} className="btn-primary flex-1 py-3">
                Book time <ArrowUpRight className="h-4 w-4" />
            </button>
        </div>
    );
}
