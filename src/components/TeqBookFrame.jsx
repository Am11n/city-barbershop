import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { EMBED_URL } from '../config/booking';
import { useLang } from '../i18n/LanguageContext';

// The TeqBook booking flow, framed via TeqBook's embeddable /embed route
// (see config/booking.js).
export default function TeqBookFrame({ className = '' }) {
    const [loaded, setLoaded] = useState(false);
    const { t } = useLang();

    return (
        <div className={`relative overflow-hidden bg-white ${className}`}>
            {!loaded && (
                <div className="absolute inset-0 grid place-items-center bg-steel">
                    <div className="flex flex-col items-center gap-3 text-mute">
                        <Loader2 className="h-6 w-6 animate-spin text-pole" />
                        <span className="text-sm">{t('booking.loading')}</span>
                    </div>
                </div>
            )}
            <iframe
                src={EMBED_URL}
                title={t('booking.frameTitle')}
                className="h-full w-full border-0"
                loading="lazy"
                allow="payment"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}
