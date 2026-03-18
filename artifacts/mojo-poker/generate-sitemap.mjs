import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, 'public');
mkdirSync(OUT, { recursive: true });

const BASE  = 'https://mojopokerclub.com';
const TODAY = new Date().toISOString().slice(0, 10);
const LANGS = ['en','ru','es','de','fr','it','pt','ar','hi','fa','tr','az','zh','ja'];

const PAGES = [
  { path: '/',               changefreq: 'weekly',  priority: '1.0' },
  { path: '/clubs/massiv',   changefreq: 'weekly',  priority: '0.8' },
  { path: '/clubs/mojo',     changefreq: 'weekly',  priority: '0.8' },
  { path: '/games',          changefreq: 'weekly',  priority: '0.8' },
  { path: '/about',          changefreq: 'monthly', priority: '0.7' },
  { path: '/join',           changefreq: 'monthly', priority: '0.6' },
  { path: '/create-account', changefreq: 'monthly', priority: '0.6' },
  { path: '/download',       changefreq: 'monthly', priority: '0.6' },
  { path: '/install',        changefreq: 'monthly', priority: '0.6' },
];

function href(lang, path) {
  const slug = path === '/' ? '/' : path + '/';
  return lang === 'en' ? `${BASE}${slug}` : `${BASE}/${lang}${slug}`;
}

// /sitemap.xml — sitemapindex
writeFileSync(`${OUT}/sitemap.xml`,
`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE}/sitemap-main.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
</sitemapindex>`
, 'utf8');

// /sitemap-main.xml — urlset with all pages + hreflang
const urls = PAGES.map(({ path, changefreq, priority }) => {
  const loc  = path === '/' ? `${BASE}/` : `${BASE}${path}/`;
  const alts = LANGS.map(l =>
    `    <xhtml:link rel="alternate" hreflang="${l}" href="${href(l, path)}" />`
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

writeFileSync(`${OUT}/sitemap-main.xml`,
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${urls}

</urlset>`
, 'utf8');

console.log(`[sitemap] sitemap.xml (index) + sitemap-main.xml (${PAGES.length} pages × ${LANGS.length} langs)`);
