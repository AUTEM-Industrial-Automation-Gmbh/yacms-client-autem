import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Préfixes de locale exclus du sitemap.
 *
 * Doit rester aligné sur les `Disallow` de public/robots.txt : annoncer au
 * sitemap une URL dont on interdit le crawl est un signal contradictoire.
 * À vider quand /de/ et /en/ seront réellement traduites.
 */
const BLOCKED_LOCALES = ['/de/', '/en/'];

/**
 * Routes des pages marquées `noindex` dans leur page.json — le sitemap ne doit
 * annoncer que des pages indexables. Relu à chaque build, donc la liste suit
 * automatiquement les pages qu'on passe en noindex par la suite.
 */
const noindexRoutes = (() => {
    // `yacms client switch` copie ce fichier à la racine de yacms-core : on
    // cherche les yablocks à côté du fichier (dans l'app) puis à leur
    // emplacement vu depuis le core.
    const root = [
        path.resolve(__dirname, 'yablocks'),
        path.resolve(__dirname, '../../apps/yacms-client-autem/yablocks'),
    ].find(fs.existsSync);
    const routes = new Set();

    const walk = dir => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            if (!entry.isDirectory()) continue;
            const full = path.join(dir, entry.name);
            const pageJson = path.join(full, 'page.json');

            if (fs.existsSync(pageJson)) {
                try {
                    const { meta } = JSON.parse(fs.readFileSync(pageJson, 'utf-8'));
                    if (/noindex/i.test(meta?.robots ?? '')) {
                        const folder = path.relative(root, full);
                        routes.add(folder === 'home' ? '/' : `/${folder}/`);
                    }
                } catch { /* page.json illisible : on ne filtre pas */ }
            }
            walk(full);
        }
    };

    try { if (root) walk(root); } catch { /* yablocks illisibles : rien à filtrer */ }
    return routes;
})();

/** Une page entre au sitemap si elle est crawlable et indexable. */
const isIndexable = page => {
    const { pathname } = new URL(page);
    if (BLOCKED_LOCALES.some(prefix => pathname.startsWith(prefix))) return false;
    // Le routeur 404 localisé produit aussi /fr/404/, hors des dossiers yablocks.
    if (/(^|\/)404\/$/.test(pathname)) return false;
    return !noindexRoutes.has(pathname);
};

export default defineConfig({
    site: 'https://autem.ch',
    integrations: [react(), sitemap({ filter: isIndexable })],
    build: {
        inlineStylesheets: 'always',
        compressHTML: true
    },
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                'zod-to-json-schema': path.resolve(__dirname, './src/stubs/zod-to-json-schema.ts'),
            },
        },
        css: {
            transformer: 'postcss',
        },
        server: {
            host: true,
            watch: {
                ignored: ['**/yablocks/**']
            }
        },
        ssr: {
            noExternal: ['lucide-react'],
        },
    },
});