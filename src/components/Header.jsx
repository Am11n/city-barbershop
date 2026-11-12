import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const navItems = [
    { name: 'Tjenester', href: '#tjenester' },
    { name: 'Barberne', href: '#team' },
    { name: 'Booking', href: '#booking' },
    { name: 'Finn oss', href: '#kontakt' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { openBooking } = useBooking();

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
                <a href="#top" className="flex items-center gap-3" aria-label="City Barbershop, til toppen">
                    <img src="/logo.png" alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15" />
                    <span className="font-display text-xl uppercase leading-none tracking-wide">
                        City <span className="text-pole">Barbershop</span>
                    </span>
                </a>

                <nav className="hidden items-center gap-1 md:flex" aria-label="Hovedmeny">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="rounded-full px-4 py-2 text-sm font-medium text-bone/70 transition-colors hover:bg-white/5 hover:text-bone"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button onClick={openBooking} className="btn-primary hidden px-5 py-2.5 sm:inline-flex">
                        Book time <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/10 md:hidden"
                        onClick={() => setIsOpen((v) => !v)}
                        aria-label={isOpen ? 'Lukk meny' : 'Åpne meny'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-ink/90 backdrop-blur-xl transition-all duration-500 md:hidden ${isOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col p-3" aria-label="Mobilmeny">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl uppercase tracking-wide hover:bg-white/5"
                        >
                            {item.name}
                            <ArrowUpRight className="h-5 w-5 text-mute" />
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
