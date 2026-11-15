// Fills dist/index.html with the server-rendered page and its <head> tags.
// Runs after `vite build` and `vite build --ssr src/entry-server.jsx`.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const template = await readFile(path.join(root, 'dist/index.html'), 'utf8');
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href);

const { html, head } = render();
if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
    throw new Error('prerender: placeholders missing from dist/index.html');
}

const out = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
await writeFile(path.join(root, 'dist/index.html'), out);
await rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`prerender: wrote dist/index.html (${(out.length / 1024).toFixed(1)} KiB)`);
