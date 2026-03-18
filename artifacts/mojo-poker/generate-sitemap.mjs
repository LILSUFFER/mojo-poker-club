import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://mojopokerclub.com';
const today = new Date().toISOString().slice(0, 10);
const publicDir = resolve(__dirname, 'public');
mkdirSync(publicDir, { recursive: true });

const LANGS = ['en','ru','es','de','fr','it','pt','ar','hi','fa','tr','az','zh','ja'];

function altUrl(lang, path) {
  const slug = path === '/' ? '/' : path + '/';
  return lang === 'en' ? `${BASE}${slug}` : `${BASE}/${lang}${slug}`;
}

function buildSub(filename, pages) {
  const entries = pages.map(({ path, changefreq, priority }) => {
    const loc = path === '/' ? `${BASE}/` : `${BASE}${path}/`;
    const alts = LANGS.map(l =>
      `    <xhtml:link rel="alternate" hreflang="${l}" href="${altUrl(l, path)}" />`
    ).join('\n');
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;
  writeFileSync(resolve(publicDir, filename), xml, 'utf8');
  console.log(`[sitemap] ✓ ${filename}`);
}

// Sub-sitemaps — SEO pages only
buildSub('sitemap-pages.xml', [
  { path: '/',             changefreq: 'weekly',  priority: '1.0' },
]);
buildSub('sitemap-clubs.xml', [
  { path: '/clubs/massiv', changefreq: 'weekly',  priority: '0.8' },
  { path: '/clubs/mojo',   changefreq: 'weekly',  priority: '0.8' },
]);
buildSub('sitemap-games.xml', [
  { path: '/games',        changefreq: 'weekly',  priority: '0.8' },
]);
buildSub('sitemap-about.xml', [
  { path: '/about',        changefreq: 'monthly', priority: '0.5' },
]);

// sitemap.xml — sitemapindex (no xhtml namespace → renders as XML tree in browser)
const SUB_FILES = [
  'sitemap-pages.xml',
  'sitemap-clubs.xml',
  'sitemap-games.xml',
  'sitemap-about.xml',
];

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SUB_FILES.map(f => `  <sitemap>
    <loc>${BASE}/${f}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

writeFileSync(resolve(publicDir, 'sitemap.xml'), index, 'utf8');
console.log(`[sitemap] ✓ sitemap.xml (index → ${SUB_FILES.length} sub-sitemaps)`);
