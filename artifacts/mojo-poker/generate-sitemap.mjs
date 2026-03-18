import { writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT   = resolve(__dirname, 'public');
mkdirSync(OUT, { recursive: true });

const BASE  = 'https://mojopokerclub.com';
const TODAY = new Date().toISOString().slice(0, 10);
const LANGS = ['en','ru','de','es','fr','it','pt','tr','kk','uz','zh','ja'];

const PAGES = [
  { path: '/',             changefreq: 'weekly',  priority: '1.0' },
  { path: '/clubs/massiv', changefreq: 'weekly',  priority: '0.8' },
  { path: '/clubs/mojo',   changefreq: 'weekly',  priority: '0.8' },
  { path: '/games',        changefreq: 'weekly',  priority: '0.8' },
  { path: '/about',        changefreq: 'monthly', priority: '0.5' },
];

function hrefUrl(lang, path) {
  const slug = path === '/' ? '/' : path + '/';
  return lang === 'en' ? `${BASE}${slug}` : `${BASE}/${lang}${slug}`;
}

const urls = PAGES.map(({ path, changefreq, priority }) => {
  const loc  = path === '/' ? `${BASE}/` : `${BASE}${path}/`;
  const alts = LANGS.map(l =>
    `    <xhtml:link rel="alternate" hreflang="${l}" href="${hrefUrl(l, path)}" />`
  ).join('\n');
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>

${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />
  </url>`;
}).join('\n\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

${urls}

</urlset>`;

writeFileSync(`${OUT}/sitemap.xml`, xml, 'utf8');

// remove leftover files
for (const f of [
  'sitemap-main.xml','sitemap-pages.xml','sitemap-clubs.xml',
  'sitemap-games.xml','sitemap-about.xml','sitemap-join.xml',
  'sitemap-create-account.xml','sitemap-download.xml','sitemap-install.xml'
]) {
  const p = `${OUT}/${f}`;
  if (existsSync(p)) unlinkSync(p);
}

console.log(`[sitemap] sitemap.xml — ${PAGES.length} pages × ${LANGS.length} langs`);
