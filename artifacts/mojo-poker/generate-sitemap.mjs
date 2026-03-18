import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://mojopokerclub.com';
const today = new Date().toISOString().slice(0, 10);
const publicDir = resolve(__dirname, 'public');
mkdirSync(publicDir, { recursive: true });

function urlset(urls) {
  const entries = urls.map(({ loc, lastmod, changefreq, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

const SUB_SITEMAPS = [
  {
    file: 'sitemap-pages.xml',
    urls: [
      { loc: `${SITE_URL}/`, lastmod: today, changefreq: 'daily', priority: '1.0' },
    ],
  },
  {
    file: 'sitemap-clubs.xml',
    urls: [
      { loc: `${SITE_URL}/clubs/massiv`, lastmod: today, changefreq: 'weekly', priority: '1.0' },
      { loc: `${SITE_URL}/clubs/mojo`,   lastmod: today, changefreq: 'weekly', priority: '1.0' },
    ],
  },
  {
    file: 'sitemap-games.xml',
    urls: [
      { loc: `${SITE_URL}/games`, lastmod: today, changefreq: 'weekly', priority: '1.0' },
    ],
  },
  {
    file: 'sitemap-join.xml',
    urls: [
      { loc: `${SITE_URL}/join`, lastmod: today, changefreq: 'monthly', priority: '1.0' },
    ],
  },
  {
    file: 'sitemap-create-account.xml',
    urls: [
      { loc: `${SITE_URL}/create-account`, lastmod: today, changefreq: 'monthly', priority: '1.0' },
    ],
  },
  {
    file: 'sitemap-download.xml',
    urls: [
      { loc: `${SITE_URL}/download`, lastmod: today, changefreq: 'monthly', priority: '1.0' },
    ],
  },
  {
    file: 'sitemap-install.xml',
    urls: [
      { loc: `${SITE_URL}/install`, lastmod: today, changefreq: 'monthly', priority: '1.0' },
    ],
  },
  {
    file: 'sitemap-about.xml',
    urls: [
      { loc: `${SITE_URL}/about`, lastmod: today, changefreq: 'monthly', priority: '1.0' },
    ],
  },
];

for (const { file, urls } of SUB_SITEMAPS) {
  writeFileSync(resolve(publicDir, file), urlset(urls), 'utf8');
  console.log(`[generate-sitemap] ✓ ${file} (${urls.length} URL)`);
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
