import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://mojopokerclub.com';
const VALID_LANGS = ['en','ru','es','de','fr','it','pt','ar','hi','fa','tr','az','zh','ja'];
const SITEMAP_PAGES = [
  { path: '/',               changefreq: 'daily',   priority: '1.0' },
  { path: '/clubs/massiv',   changefreq: 'weekly',  priority: '1.0' },
  { path: '/clubs/mojo',     changefreq: 'weekly',  priority: '1.0' },
  { path: '/games',          changefreq: 'weekly',  priority: '1.0' },
  { path: '/join',           changefreq: 'monthly', priority: '1.0' },
  { path: '/create-account', changefreq: 'monthly', priority: '1.0' },
  { path: '/download',       changefreq: 'monthly', priority: '1.0' },
  { path: '/install',        changefreq: 'monthly', priority: '1.0' },
  { path: '/about',          changefreq: 'monthly', priority: '1.0' },
];

const today = new Date().toISOString().slice(0, 10);
const urlBlocks = [];

for (const page of SITEMAP_PAGES) {
  for (const lang of VALID_LANGS) {
    const loc = `${SITE_URL}${page.path}?lang=${lang}`;
    const hreflangs = VALID_LANGS.map(l =>
      `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${page.path}?lang=${l}"/>`
    ).join('\n');
    urlBlocks.push(
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n${hreflangs}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${page.path}"/>\n  </url>`
    );
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${urlBlocks.join('\n\n')}

</urlset>`;

const publicDir = resolve(__dirname, 'public');
mkdirSync(publicDir, { recursive: true });
writeFileSync(resolve(publicDir, 'sitemap.xml'), xml, 'utf8');

console.log(`[generate-sitemap] ✓ ${SITEMAP_PAGES.length * VALID_LANGS.length} URLs → public/sitemap.xml`);
