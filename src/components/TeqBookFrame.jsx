import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { BOOKING_URL } from '../config/booking';

// The TeqBook public booking flow, framed. Only rendered where TeqBook's
// frame-ancestors CSP allows it (see config/booking.js).
export default function TeqBookFrame({ className = '' }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden bg-white ${className}`}>
            {!loaded && (
                <div className="absolute inset-0 grid place-items-center bg-steel">
                    <div className="flex flex-col items-center gap-3 text-mute">
                        <Loader2 className="h-6 w-6 animate-spin text-pole" />
                        <span className="text-sm">Henter ledige tider…</span>
                    </div>
                </div>
            )}
            <iframe
                src={BOOKING_URL}
                title="Book time hos City Barbershop (TeqBook)"
                className="h-full w-full border-0"
                loading="lazy"
                allow="payment"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}
