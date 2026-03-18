import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://mojopokerclub.com';
const today = new Date().toISOString().slice(0, 10);
const publicDir = resolve(__dirname, 'public');
mkdirSync(publicDir, { recursive: true });

const LANGS = ['en','ru','es','de','fr','it','pt','ar','hi','fa','tr','az','zh','ja'];

function langUrl(lang, path) {
  if (lang === 'en') return `${SITE_URL}${path}`;
  const page = path === '/' ? '' : path;
  return `${SITE_URL}/${lang}${page}`;
}

function buildUrlEntry(path, changefreq, priority) {
  const canonical = `${SITE_URL}${path}`;
  const hreflangs = LANGS.map(l =>
    `    <xhtml:link rel="alternate" hreflang="${l}" href="${langUrl(l, path)}"/>`
  ).join('\n');
  return `  <url>
    <loc>${canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${hreflangs}
    <xhtml:link rel="alternate" hreflang="x-default" href="${canonical}"/>
  </url>`;
}

function writeSub(filename, entries) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;
  writeFileSync(resolve(publicDir, filename), xml, 'utf8');
  console.log(`[generate-sitemap] ✓ ${filename}`);
}

// Sub-sitemaps — one per section
writeSub('sitemap-pages.xml', [
  buildUrlEntry('/', 'daily', '1.0'),
]);
writeSub('sitemap-clubs.xml', [
  buildUrlEntry('/clubs/massiv', 'weekly', '0.9'),
  buildUrlEntry('/clubs/mojo', 'weekly', '0.9'),
]);
writeSub('sitemap-games.xml', [
  buildUrlEntry('/games', 'weekly', '0.8'),
]);
writeSub('sitemap-about.xml', [
  buildUrlEntry('/about', 'monthly', '0.8'),
]);
writeSub('sitemap-join.xml', [
  buildUrlEntry('/join', 'monthly', '0.7'),
]);
writeSub('sitemap-create-account.xml', [
  buildUrlEntry('/create-account', 'monthly', '0.7'),
]);
writeSub('sitemap-download.xml', [
  buildUrlEntry('/download', 'monthly', '0.7'),
]);
writeSub('sitemap-install.xml', [
  buildUrlEntry('/install', 'monthly', '0.7'),
]);

// Sitemap index — lists all sub-sitemaps
const SUB_FILES = [
  'sitemap-pages.xml',
  'sitemap-clubs.xml',
  'sitemap-games.xml',
  'sitemap-about.xml',
  'sitemap-join.xml',
  'sitemap-create-account.xml',
  'sitemap-download.xml',
  'sitemap-install.xml',
];

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SUB_FILES.map(f => `  <sitemap>
    <loc>${SITE_URL}/${f}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

writeFileSync(resolve(publicDir, 'sitemap.xml'), index, 'utf8');
console.log(`[generate-sitemap] ✓ sitemap.xml (index → ${SUB_FILES.length} sub-sitemaps)`);
