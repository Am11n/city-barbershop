import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { track } from '@vercel/analytics';
import { BOOKING_URL, canEmbedBooking } from '../config/booking';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
    const [open, setOpen] = useState(false);
    // Decided after mount so the prerendered HTML matches the first client render.
    const [embeddable, setEmbeddable] = useState(false);
    useEffect(() => {
        const canEmbed = canEmbedBooking();
        setEmbeddable(canEmbed);
        // Old Wix links (/book-online) redirect to /#booking: open the booking straight away.
        if (window.location.hash === '#booking') {
            history.replaceState(null, '', window.location.pathname + window.location.search);
            if (canEmbed) setOpen(true);
            else window.location.assign(BOOKING_URL);
        }
    }, []);

    const openBooking = useCallback(() => {
        // Custom events show in Vercel Analytics on Pro plans; a no-op on Hobby.
        track('Book time', { mode: embeddable ? 'drawer' : 'new-tab' });
        if (embeddable) setOpen(true);
        else window.open(BOOKING_URL, '_blank', 'noopener');
    }, [embeddable]);

    const value = useMemo(
        () => ({ open, embeddable, openBooking, closeBooking: () => setOpen(false) }),
        [open, embeddable, openBooking]
    );

    return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBooking() {
    const ctx = useContext(BookingContext);
    if (!ctx) throw new Error('useBooking must be used inside BookingProvider');
    return ctx;
}
