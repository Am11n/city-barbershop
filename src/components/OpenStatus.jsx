import { useEffect, useState } from 'react';
import { hours, fmtTime } from '../data/team';
import { useLang } from '../i18n/LanguageContext';

function getStatus(t, now = new Date()) {
    const day = now.getDay();
    const h = now.getHours() + now.getMinutes() / 60;
    const today = hours.find((r) => r.days.includes(day));
    if (today?.open != null && h >= today.open && h < today.close) {
        return { open: true, label: `${t('status.openNow')} ${fmtTime(today.close)}` };
    }
    for (let i = 0; i < 7; i++) {
        const d = (day + i) % 7;
        const row = hours.find((r) => r.days.includes(d));
        if (row?.open == null) continue;
        if (i === 0) {
            if (h < row.open) return { open: false, label: `${t('status.closedOpens')} ${fmtTime(row.open)}` };
            continue;
        }
        const name = i === 1 ? t('status.tomorrow') : t('status.days')[d];
        return { open: false, label: `${t('status.closedOpens')} ${name} ${fmtTime(row.open)}` };
    }
    return { open: false, label: t('status.closed') };
}

export default function OpenStatus({ className = '' }) {
    const { t } = useLang();
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 60_000);
        return () => clearInterval(id);
    }, []);

    const status = getStatus(t, now);

    return (
        <span
            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-bone/90 backdrop-blur ${className}`}
        >
            <span className="relative flex h-2 w-2">
                {status.open && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />}
                <span className={`relative inline-flex h-2 w-2 rounded-full ${status.open ? 'bg-emerald-400' : 'bg-pole'}`} />
            </span>
            {status.label}
        </span>
    );
}
