import { Instagram } from 'lucide-react';
import { instagramUrl } from '../data/team';

// Slim footer that continues the "Finn oss" section (same background).
export default function Footer() {
    return (
        <footer className="bg-coal pb-28 sm:pb-10">
            <div className="container-x border-t border-white/10 pt-8 text-sm text-mute">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                        <img src="/logo-256.webp" alt="" className="h-9 w-9 rounded-full object-cover" />
                        <span>© {new Date().getFullYear()} City Barbershop · Tollbugata 14, 3044 Drammen</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-bone">
                            <Instagram className="h-4 w-4" /> Instagram
                        </a>
                        <a href="tel:+4746865541" className="hover:text-bone">468 65 541</a>
                    </div>
                </div>

                <div className="mt-6 flex justify-center border-t border-white/5 pt-6 sm:justify-end">
                    <a
                        href="https://fikir.no"
                        target="_blank"
                        rel="noopener"
                        className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest text-mute transition-colors hover:text-bone"
                    >
                        Developed by
                        <img
                            src="/images/fikir-logo.webp"
                            alt="Fikir"
                            width="83"
                            height="72"
                            loading="lazy"
                            className="h-11 w-auto opacity-90 transition-opacity group-hover:opacity-100"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
