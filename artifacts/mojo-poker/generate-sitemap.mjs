import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, 'public');
mkdirSync(publicDir, { recursive: true });

const BASE     = 'https://mojopokerclub.com';
const TODAY    = new Date().toISOString().slice(0, 10);
const LANGS    = ['en','ru','es','de','fr','it','pt','ar','hi','fa','tr','az','zh','ja'];

const PAGES = [
  { loc: `${BASE}/`,                changefreq: 'weekly',  priority: '1.0' },
  { loc: `${BASE}/clubs/massiv/`,   changefreq: 'weekly',  priority: '0.8' },
  { loc: `${BASE}/clubs/mojo/`,     changefreq: 'weekly',  priority: '0.8' },
  { loc: `${BASE}/games/`,          changefreq: 'weekly',  priority: '0.8' },
  { loc: `${BASE}/about/`,          changefreq: 'monthly', priority: '0.7' },
  { loc: `${BASE}/join/`,           changefreq: 'monthly', priority: '0.6' },
  { loc: `${BASE}/create-account/`, changefreq: 'monthly', priority: '0.6' },
  { loc: `${BASE}/download/`,       changefreq: 'monthly', priority: '0.6' },
  { loc: `${BASE}/install/`,        changefreq: 'monthly', priority: '0.6' },
];

function hreflangUrl(lang, canonical) {
  if (lang === 'en') return canonical;
  // insert /lang/ after domain
  return canonical.replace(`${BASE}/`, `${BASE}/${lang}/`);
}

const urlEntries = PAGES.map(({ loc, changefreq, priority }) => {
  const alts = LANGS.map(l =>
    `    <xhtml:link rel="alternate" hreflang="${l}" href="${hreflangUrl(l, loc)}" />`
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
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${urlEntries}

</urlset>`;

writeFileSync(resolve(publicDir, 'sitemap.xml'), xml, 'utf8');
console.log(`[sitemap] ✓ sitemap.xml — ${PAGES.length} pages × ${LANGS.length} langs`);
