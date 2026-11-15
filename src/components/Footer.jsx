import { Facebook, Instagram } from 'lucide-react';
import { facebookUrl, instagramUrl } from '../data/team';

const social = [
    { href: instagramUrl, label: 'City Barbershop på Instagram', Icon: Instagram },
    { href: facebookUrl, label: 'City Barbershop på Facebook', Icon: Facebook },
];

// Slim footer that continues the "Finn oss" section (same background).
export default function Footer() {
    return (
        <footer className="bg-coal pb-28 sm:pb-10">
            <div className="container-x flex flex-col justify-between gap-6 border-t border-white/10 pt-8 text-sm text-mute sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                    <img src="/logo-256.webp" alt="" className="h-9 w-9 rounded-full object-cover" />
                    <span>© {new Date().getFullYear()} City Barbershop · Tollbugata 14, 3044 Drammen</span>
                </div>

                <div className="flex items-center gap-5">
                    {social.map(({ href, label, Icon }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            title={label}
                            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-bone/70 transition-colors hover:border-white/30 hover:text-bone"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}

                    <span className="h-6 w-px bg-white/10" aria-hidden="true" />

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
                            className="h-10 w-auto opacity-90 transition-opacity group-hover:opacity-100"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
