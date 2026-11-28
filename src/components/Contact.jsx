import { useEffect, useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { hours, fmtTime, google } from '../data/team';
import { useLang } from '../i18n/LanguageContext';

export default function Contact() {
    const { t, L } = useLang();
    const [today, setToday] = useState(null);
    useEffect(() => setToday(new Date().getDay()), []);

    return (
        <section id="kontakt" className="bg-coal pb-16 pt-24 sm:pb-20 sm:pt-32">
            <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                    <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-7xl">{t('contact.title')}</h2>

                    <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                        <div className="border-t border-white/20 pt-5">
                            <h3 className="text-sm text-mute">{t('contact.address')}</h3>
                            <p className="mt-2 text-lg font-semibold">Tollbugata 14</p>
                            <p className="text-bone/60">3044 Drammen</p>
                            <a href={google.mapsUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm text-bone/80 underline decoration-white/25 underline-offset-4 hover:text-bone">
                                <MapPin className="h-4 w-4" /> {t('contact.directions')}
                            </a>
                        </div>
                        <div className="border-t border-white/20 pt-5">
                            <h3 className="text-sm text-mute">{t('contact.phone')}</h3>
                            <p className="mt-2 text-lg font-semibold">468 65 541</p>
                            <p className="text-bone/60">{t('contact.phoneSub')}</p>
                            <a href="tel:+4746865541" className="mt-3 inline-flex items-center gap-1.5 text-sm text-bone/80 underline decoration-white/25 underline-offset-4 hover:text-bone">
                                <Phone className="h-4 w-4" /> {t('contact.callNow')}
                            </a>
                        </div>
                        <div className="border-t border-white/20 pt-5 sm:col-span-2">
                            <h3 className="text-sm text-mute">{t('contact.hours')}</h3>
                            <ul className="mt-2 divide-y divide-white/10">
                                {hours.map((h) => {
                                    const isToday = h.days.includes(today);
                                    return (
                                        <li key={h.day.no} className={`flex justify-between py-3 ${isToday ? 'font-semibold text-bone' : 'text-bone/60'}`}>
                                            <span>{L(h.day)}{isToday && <span className="ml-2 text-xs text-pole">{t('contact.today')}</span>}</span>
                                            <span>{h.open != null ? `${fmtTime(h.open)} – ${fmtTime(h.close)}` : t('status.closed')}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="border-t border-white/20 pt-5 sm:col-span-2">
                            <h3 className="text-sm text-mute">{t('contact.info')}</h3>
                            <ul className="mt-2 space-y-2 text-bone/80">
                                {t('contact.infoItems').map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <figure className="relative isolate overflow-hidden rounded-xl">
                        <img
                            src="/images/fasade.webp"
                            alt={t('contact.storefrontAlt')}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                        <figcaption className="absolute inset-x-0 bottom-0 p-6">
                            <p className="text-sm text-bone/70">{t('contact.lookFor')}</p>
                            <p className="mt-1 font-display text-3xl uppercase">{t('contact.storefront')}</p>
                        </figcaption>
                    </figure>
                    <div className="min-h-[280px] flex-1 overflow-hidden rounded-xl">
                        <iframe
                            title={t('contact.mapTitle')}
                            src="https://maps.google.com/maps?q=City%20Barbershop%20Drammen%2C%20Tollbugata%2014&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            className="h-full min-h-[280px] w-full border-0 [filter:grayscale(1)_invert(.92)_contrast(.9)]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
