import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { BOOKING_URL, canEmbedBooking } from '../config/booking';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
    const [open, setOpen] = useState(false);
    const embeddable = useMemo(() => canEmbedBooking(), []);

    const openBooking = useCallback(() => {
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
