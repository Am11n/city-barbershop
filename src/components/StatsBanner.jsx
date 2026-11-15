import { Star, Scissors, CalendarDays, MessageSquareQuote } from 'lucide-react';
import { google, team, hours } from '../data/team';
import { useLang } from '../i18n/LanguageContext';

// Clean strip with the shop's key numbers, leading into the reviews.
export default function StatsBanner() {
    const { t } = useLang();
    const openDays = hours.reduce((n, h) => n + (h.open != null ? h.days.length : 0), 0);

    const stats = [
        { icon: Star, value: google.rating.toFixed(1).replace('.', t('stats.decimal')), label: t('stats.rating'), accent: true },
        { icon: MessageSquareQuote, value: google.count, label: t('stats.reviews') },
        { icon: Scissors, value: team.length, label: t('stats.barbers') },
        { icon: CalendarDays, value: openDays, label: t('stats.days') },
    ];

    return (
        <section className="container-x" aria-label={t('stats.label')}>
            <dl className="reveal grid grid-cols-2 overflow-hidden rounded-[2rem] border border-white/10 bg-coal lg:grid-cols-4">
                {stats.map(({ icon: Icon, value, label, accent }, i) => (
                    <div
                        key={label}
                        className={`flex flex-col-reverse gap-1 p-6 sm:p-8 ${i % 2 ? 'border-l border-white/10' : ''} ${i >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
                    >
                        <dt className="text-xs uppercase tracking-widest text-mute">{label}</dt>
                        <dd className="flex items-center gap-3 font-display text-5xl leading-none sm:text-6xl">
                            {value}
                            <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${accent ? 'fill-amber-400 text-amber-400' : 'text-pole'}`} aria-hidden="true" />
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
