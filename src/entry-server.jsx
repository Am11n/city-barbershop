// Build-time render of the page to static HTML (see scripts/prerender.mjs),
// so crawlers and link previews get the full content without running JS.
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';

export function render() {
    const helmetContext = {};
    const html = renderToString(
        <HelmetProvider context={helmetContext}>
            <App />
        </HelmetProvider>
    );
    const { helmet } = helmetContext;
    const head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((h) => h.toString()).join('\n');
    return { html, head };
}
