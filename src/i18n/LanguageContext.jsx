import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { strings } from './strings';

const LanguageContext = createContext(null);
const SUPPORTED = ['no', 'en'];

function initialLang() {
    try {
        const fromUrl = new URLSearchParams(window.location.search).get('lang');
        if (SUPPORTED.includes(fromUrl)) return fromUrl;
        const saved = localStorage.getItem('cb-lang');
        if (SUPPORTED.includes(saved)) return saved;
    } catch { /* storage blocked */ }
    const nav = (navigator.language || 'no').toLowerCase();
    return /^(nb|nn|no)/.test(nav) ? 'no' : 'en';
}

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(initialLang);

    useEffect(() => {
        document.documentElement.lang = lang === 'no' ? 'nb' : 'en';
    }, [lang]);

    const setLang = useCallback((l) => {
        setLangState(l);
        try { localStorage.setItem('cb-lang', l); } catch { /* ignore */ }
    }, []);

    // t('hero.lead') -> string; L({ no, en }) -> picks the current language
    const value = useMemo(() => {
        const dict = strings[lang];
        const t = (key) => key.split('.').reduce((o, k) => (o == null ? o : o[k]), dict) ?? key;
        const L = (obj) => (obj && typeof obj === 'object' && 'no' in obj ? obj[lang] ?? obj.no : obj);
        return { lang, setLang, t, L };
    }, [lang, setLang]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
    return ctx;
}
