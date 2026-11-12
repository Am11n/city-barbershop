import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLang } from '../i18n/LanguageContext';

function LangToggle({ className = '' }) {
    const { lang, setLang } = useLang();
    return (
        <div className={`flex rounded-full border border-white/10 p-0.5 text-xs font-semibold ${className}`} role="group" aria-label="Language">
            {['no', 'en'].map((l) => (
                <button
                    key={l}
                    onClick={() => setLang(l)}
                    aria-pressed={lang === l}
                    className={`rounded-full px-2.5 py-1.5 uppercase transition-colors ${lang === l ? 'bg-bone text-ink' : 'text-bone/60 hover:text-bone'}`}
                >
                    {l}
                </button>
            ))}
        </div>
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { openBooking } = useBooking();
    const { t } = useLang();

    const navItems = [
        { name: t('nav.services'), href: '#tjenester' },
        { name: t('nav.team'), href: '#team' },
        { name: t('nav.reviews'), href: '#anmeldelser' },
        { name: t('nav.club'), href: '#club' },
        { name: t('nav.contact'), href: '#kontakt' },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
            <div
                className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-3 pl-4 transition-all duration-500 sm:px-4 sm:pl-5 ${scrolled || isOpen
                    ? 'border-white/10 bg-ink/75 shadow-2xl shadow-black/40 backdrop-blur-xl'
                    : 'border-transparent bg-transparent'
                    }`}
            >
                <a href="#top" className="flex items-center gap-3" aria-label={t('nav.toTop')}>
                    <img src="/logo.png" alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15" />
                    <span className="font-display text-xl uppercase leading-none tracking-wide">
                        City <span className="text-pole">Barbershop</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="rounded-full px-4 py-2 text-sm font-medium text-bone/70 transition-colors hover:bg-white/5 hover:text-bone"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <LangToggle className="hidden sm:flex" />
                    <button onClick={openBooking} className="btn-primary hidden px-5 py-2.5 sm:inline-flex">
                        {t('nav.book')} <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/10 lg:hidden"
                        onClick={() => setIsOpen((v) => !v)}
                        aria-label={isOpen ? t('nav.menuClose') : t('nav.menuOpen')}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-ink/90 backdrop-blur-xl transition-all duration-500 lg:hidden ${isOpen ? 'max-h-[32rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col p-3" aria-label="Mobile">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl uppercase tracking-wide hover:bg-white/5"
                        >
                            {item.name}
                            <ArrowUpRight className="h-5 w-5 text-mute" />
                        </a>
                    ))}
                    <div className="flex items-center justify-between px-4 py-3">
                        <LangToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
}
