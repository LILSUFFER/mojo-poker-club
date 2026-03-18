import { writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://mojopokerclub.com';
const today = new Date().toISOString().slice(0, 10);
const publicDir = resolve(__dirname, 'public');
mkdirSync(publicDir, { recursive: true });

const PAGES = [
  'https://mojopokerclub.com/',
  'https://mojopokerclub.com/about',
  'https://mojopokerclub.com/clubs/massiv',
  'https://mojopokerclub.com/clubs/mojo',
  'https://mojopokerclub.com/games',
  'https://mojopokerclub.com/join',
  'https://mojopokerclub.com/create-account',
  'https://mojopokerclub.com/download',
  'https://mojopokerclub.com/install',
];

const urls = PAGES.map(loc => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

writeFileSync(resolve(publicDir, 'sitemap.xml'), xml, 'utf8');
console.log(`[generate-sitemap] ✓ sitemap.xml (${PAGES.length} canonical URLs)`);

// Remove old sub-sitemap files
const OLD = [
  'sitemap-pages.xml', 'sitemap-clubs.xml', 'sitemap-games.xml',
  'sitemap-about.xml', 'sitemap-join.xml', 'sitemap-create-account.xml',
  'sitemap-download.xml', 'sitemap-install.xml',
];
for (const f of OLD) {
  const p = resolve(publicDir, f);
  if (existsSync(p)) { unlinkSync(p); console.log(`[generate-sitemap] removed ${f}`); }
}
