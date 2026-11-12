import { useEffect, useState } from 'react';
import { hours } from '../data/team';

function getStatus(now = new Date()) {
    const day = now.getDay();
    const h = now.getHours() + now.getMinutes() / 60;
    const today = hours.find((r) => r.days.includes(day));
    if (today?.open != null && h >= today.open && h < today.close) {
        return { open: true, label: `Åpent nå · stenger ${today.close}:00` };
    }
    // Find next opening
    for (let i = 0; i < 7; i++) {
        const d = (day + i) % 7;
        const row = hours.find((r) => r.days.includes(d));
        if (row?.open == null) continue;
        if (i === 0 && h < row.open) return { open: false, label: `Stengt · åpner ${row.open}:00` };
        if (i > 0) {
            const name = i === 1 ? 'i morgen' : ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'][d];
            return { open: false, label: `Stengt · åpner ${name} ${row.open}:00` };
        }
    }
    return { open: false, label: 'Stengt' };
}

export default function OpenStatus({ className = '' }) {
    const [status, setStatus] = useState(getStatus);

    useEffect(() => {
        const t = setInterval(() => setStatus(getStatus()), 60_000);
        return () => clearInterval(t);
    }, []);

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
