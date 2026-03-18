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

// /sitemap.xml — sitemapindex (renders as XML tree in Chrome, no xmlns:xhtml)
writeFileSync(`${OUT}/sitemap.xml`,
`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE}/sitemap-main.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
</sitemapindex>`, 'utf8');

// /sitemap-main.xml — urlset with all pages + hreflang
const urls = PAGES.map(({ path, changefreq, priority }) => {
  const loc  = path === '/' ? `${BASE}/` : `${BASE}${path}/`;
  const alts = LANGS.map(l => {
    const slug = path === '/' ? '/' : path + '/';
    const u = l === 'en' ? `${BASE}${slug}` : `${BASE}/${l}${slug}`;
    return `    <xhtml:link rel="alternate" hreflang="${l}" href="${u}" />`;
  }).join('\n');
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />
  </url>`;
}).join('\n\n');

writeFileSync(`${OUT}/sitemap-main.xml`,
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${urls}

</urlset>`, 'utf8');

// remove leftover files
for (const f of [
  'sitemap-pages.xml','sitemap-clubs.xml','sitemap-games.xml',
  'sitemap-about.xml','sitemap-join.xml','sitemap-create-account.xml',
  'sitemap-download.xml','sitemap-install.xml'
]) {
  const p = `${OUT}/${f}`;
  if (existsSync(p)) unlinkSync(p);
}

console.log(`[sitemap] sitemap.xml (index) → sitemap-main.xml (${PAGES.length} pages × ${LANGS.length} langs)`);
