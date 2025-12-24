import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Hjem', href: '#hero' },
        { name: 'Tjenester', href: '#services' },
        { name: 'Team', href: '#team' },
        { name: 'Kontakt', href: '#contact' },
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3 z-20">
                        <div className="hidden sm:block w-8 h-[1px] bg-white/50"></div>
                        <a href="#" className="flex items-center">
                            <img src="/logo.png" alt="City Barbershop Logo" className="h-10 w-auto" />
                        </a>
                        <div className="hidden sm:block w-8 h-[1px] bg-white/50"></div>
                    </div>

                    {/* Desktop Menu - Centered */}
                    <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-8 items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-white hover:text-accent transition-colors duration-200 text-sm uppercase tracking-widest font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Right Section: CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4 z-20">
                        <a
                            href="#book"
                            className="hidden md:block bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-sm font-bold uppercase tracking-wide text-sm transition-all transform hover:scale-105 border border-accent"
                        >
                            Bestill Time
                        </a>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:text-accent focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-secondary border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 text-base font-medium text-white hover:text-accent hover:bg-white/5 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#book"
                            className="block w-full text-center mt-4 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wide"
                            onClick={() => setIsOpen(false)}
                        >
                            Bestill Time
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
