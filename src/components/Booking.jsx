import { ArrowUpRight, CalendarCheck, BellRing, ShieldCheck, Smartphone } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { BOOKING_URL, IS_STAGING } from '../config/booking';
import TeqBookFrame from './TeqBookFrame';
import { useLang } from '../i18n/LanguageContext';

const perkIcons = [CalendarCheck, BellRing, Smartphone, ShieldCheck];

export default function Booking() {
    const { embeddable } = useBooking();
    const { t } = useLang();
    const perks = t('booking.perks').map(([title, text], i) => ({ icon: perkIcons[i], title, text }));

    return (
        <section id="booking" className="relative overflow-hidden py-24 sm:py-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,rgba(31,58,138,.35),transparent_60%)]" />
            <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div className="reveal lg:sticky lg:top-28 lg:self-start">
                    <span className="eyebrow"><span className="h-px w-8 bg-pole" /> {t('booking.eyebrow')}</span>
                    <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                        {t('booking.h1')} <br />
                        <span className="font-serif normal-case italic text-pole">{t('booking.h2')}</span>
                    </h2>
                    <p className="mt-6 max-w-md text-bone/65">{t('booking.lead')}</p>

                    <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        {perks.map(({ icon: Icon, title, text }) => (
                            <li key={title} className="flex gap-4">
                                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5">
                                    <Icon className="h-5 w-5 text-pole" />
                                </span>
                                <span>
                                    <span className="block font-semibold">{title}</span>
                                    <span className="mt-1 block text-sm text-bone/55">{text}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="reveal min-w-0">
                    <div className="rounded-[2rem] border border-white/10 bg-steel/80 p-2 shadow-2xl shadow-black/50">
                        {/* Browser-style chrome so it reads as "live system" in the demo */}
                        <div className="flex items-center justify-between gap-3 px-4 py-3">
                            <div className="flex shrink-0 gap-1.5">
                                <span className="h-3 w-3 rounded-full bg-pole" />
                                <span className="h-3 w-3 rounded-full bg-bone/30" />
                                <span className="h-3 w-3 rounded-full bg-navy" />
                            </div>
                            <span className="min-w-0 truncate rounded-full bg-ink/60 px-3 py-1 text-[11px] text-mute">
                                {BOOKING_URL.replace('https://', '')}
                            </span>
                            {IS_STAGING ? (
                                <span className="shrink-0 rounded-full bg-amber-400/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-amber-300">
                                    {t('booking.demo')}
                                </span>
                            ) : (
                                <span className="w-10" />
                            )}
                        </div>

                        {embeddable ? (
                            <TeqBookFrame className="h-[760px] rounded-[1.5rem]" />
                        ) : (
                            <div className="grid min-h-[520px] place-items-center rounded-[1.5rem] bg-ink/70 p-8 text-center">
                                <div className="max-w-sm">
                                    <div className="mx-auto h-20 w-4 overflow-hidden rounded-full">
                                        <div className="pole-stripes animate-pole h-full w-full" />
                                    </div>
                                    <h3 className="mt-8 font-display text-4xl uppercase">{t('booking.readyTitle')}</h3>
                                    <p className="mt-3 text-sm text-bone/60">
                                        {t('booking.readyText')}
                                    </p>
                                    <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-primary mt-8 px-8 py-4 text-base">
                                        {t('booking.open')} <ArrowUpRight className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    <p className="mt-4 text-center text-xs text-mute">
                        {t('booking.poweredBy')} <a href="https://teqbook.com" target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-4 hover:text-bone">TeqBook</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
