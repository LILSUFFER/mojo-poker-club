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
  const page = path === '/' ? '' : path;
  return lang === 'en'
    ? `${SITE_URL}${path}`
    : `${SITE_URL}/${lang}${page}`;
}

function hreflangLinks(path) {
  const lines = LANGS.map(l =>
    `    <xhtml:link rel="alternate" hreflang="${l}" href="${langUrl(l, path)}"/>`
  );
  lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${path}"/>`);
  return lines.join('\n');
}

function urlset(pages) {
  const entries = [];
  for (const { path, changefreq, priority } of pages) {
    for (const lang of LANGS) {
      const loc = langUrl(lang, path);
      entries.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${hreflangLinks(path)}
  </url>`);
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;
}

const SUB_SITEMAPS = [
  {
    file: 'sitemap-pages.xml',
    pages: [
      { path: '/', changefreq: 'daily', priority: '1.0' },
    ],
  },
  {
    file: 'sitemap-clubs.xml',
    pages: [
      { path: '/clubs/massiv', changefreq: 'weekly', priority: '1.0' },
      { path: '/clubs/mojo',   changefreq: 'weekly', priority: '1.0' },
    ],
  },
  {
    file: 'sitemap-games.xml',
    pages: [{ path: '/games', changefreq: 'weekly', priority: '1.0' }],
  },
  {
    file: 'sitemap-join.xml',
    pages: [{ path: '/join', changefreq: 'monthly', priority: '1.0' }],
  },
  {
    file: 'sitemap-create-account.xml',
    pages: [{ path: '/create-account', changefreq: 'monthly', priority: '1.0' }],
  },
  {
    file: 'sitemap-download.xml',
    pages: [{ path: '/download', changefreq: 'monthly', priority: '1.0' }],
  },
  {
    file: 'sitemap-install.xml',
    pages: [{ path: '/install', changefreq: 'monthly', priority: '1.0' }],
  },
  {
    file: 'sitemap-about.xml',
    pages: [{ path: '/about', changefreq: 'monthly', priority: '1.0' }],
  },
];

for (const { file, pages } of SUB_SITEMAPS) {
  const totalUrls = pages.length * LANGS.length;
  writeFileSync(resolve(publicDir, file), urlset(pages), 'utf8');
  console.log(`[generate-sitemap] ✓ ${file} (${totalUrls} URLs)`);
}

const sitemapEntries = SUB_SITEMAPS.map(({ file }) => `  <sitemap>
    <loc>${SITE_URL}/${file}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join('\n');

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;

writeFileSync(resolve(publicDir, 'sitemap.xml'), index, 'utf8');
console.log(`[generate-sitemap] ✓ sitemap.xml (index, ${SUB_SITEMAPS.length} sitemaps)`);
