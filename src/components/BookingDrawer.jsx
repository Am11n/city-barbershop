import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { BOOKING_URL } from '../config/booking';
import TeqBookFrame from './TeqBookFrame';
import { useLang } from '../i18n/LanguageContext';

// Slide-over booking panel: opened from any "Book time" button.
export default function BookingDrawer() {
    const { open, closeBooking, embeddable } = useBooking();
    const { t } = useLang();

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === 'Escape' && closeBooking();
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [open, closeBooking]);

    if (!embeddable) return null;

    return (
        <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
            <div
                onClick={closeBooking}
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
            />
            <aside
                role="dialog"
                aria-modal="true"
                aria-label={t('booking.drawerTitle')}
                className={`absolute inset-y-0 right-0 flex w-full max-w-xl flex-col bg-coal shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] sm:inset-y-3 sm:right-3 sm:rounded-3xl sm:border sm:border-white/10 ${open ? 'translate-x-0' : 'translate-x-[110%]'
                    }`}
            >
                <div className="flex items-center justify-between gap-3 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="" className="h-9 w-9 rounded-full object-cover" />
                        <div>
                            <p className="font-display text-xl uppercase leading-none">{t('booking.drawerTitle')}</p>
                            <p className="mt-1 text-xs text-mute">City Barbershop · Drammen</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener"
                            className="grid h-10 w-10 place-items-center rounded-full text-mute hover:bg-white/5 hover:text-bone"
                            aria-label={t('booking.openNewTab')}
                        >
                            <ExternalLink className="h-4 w-4" />
                        </a>
                        <button
                            onClick={closeBooking}
                            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 hover:bg-white/5"
                            aria-label={t('booking.close')}
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                {open && <TeqBookFrame className="mx-2 mb-2 flex-1 rounded-2xl" />}
            </aside>
        </div>
    );
}
