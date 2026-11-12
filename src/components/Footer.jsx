import { ArrowUpRight, Instagram } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
    const { openBooking } = useBooking();
    const { t } = useLang();

    return (
        <footer className="relative overflow-hidden pb-28 pt-24 sm:pb-12">
            <div className="container-x">
                <button onClick={openBooking} className="group block w-full text-left">
                    <span className="eyebrow">{t('footer.ready')}</span>
                    <span className="mt-4 flex items-center justify-between gap-6 border-b border-white/10 pb-10">
                        <span className="font-display text-[16vw] uppercase leading-[0.85] transition-colors group-hover:text-pole sm:text-[10vw] lg:text-[9rem]">
                            {t('footer.cta')}
                        </span>
                        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-pole transition-transform group-hover:rotate-45 sm:h-28 sm:w-28">
                            <ArrowUpRight className="h-8 w-8 sm:h-12 sm:w-12" />
                        </span>
                    </span>
                </button>

                <div className="mt-10 flex flex-col justify-between gap-6 text-sm text-mute sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="" className="h-9 w-9 rounded-full object-cover" />
                        <span>© {new Date().getFullYear()} City Barbershop · Tollbugata 14, 3044 Drammen</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-bone">
                            <Instagram className="h-4 w-4" /> Instagram
                        </a>
                        <a href="tel:+4746865541" className="hover:text-bone">46 86 55 41</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
