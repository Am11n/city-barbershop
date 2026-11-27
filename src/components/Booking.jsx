import { ArrowUpRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { BOOKING_URL } from '../config/booking';
import TeqBookFrame from './TeqBookFrame';
import { useLang } from '../i18n/LanguageContext';

// Inline booking. Old Wix links (/book-online) redirect to #booking.
export default function Booking() {
    const { embeddable } = useBooking();
    const { t } = useLang();

    return (
        <section id="booking" className="py-24 sm:py-32">
            <div className="container-x">
                <div className="reveal max-w-xl">
                    <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-7xl">{t('booking.title')}</h2>
                    <p className="mt-5 text-bone/65">{t('booking.lead')}</p>
                </div>

                <div className="reveal mt-12 max-w-4xl">
                    {embeddable ? (
                        <TeqBookFrame className="h-[760px] rounded-3xl border border-white/10" />
                    ) : (
                        <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-primary px-8 py-4 text-base">
                            {t('booking.open')} <ArrowUpRight className="h-5 w-5" />
                        </a>
                    )}
                    <p className="mt-4 text-xs text-mute">
                        {t('booking.poweredBy')} <a href="https://teqbook.com" target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-4 hover:text-bone">TeqBook</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
