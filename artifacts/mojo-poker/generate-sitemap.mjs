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

// SEO-valuable pages only — no technical/conversion pages
const PAGES = [
  { path: '/',              changefreq: 'daily',  priority: '1.0' },
  { path: '/clubs/massiv',  changefreq: 'weekly', priority: '0.9' },
  { path: '/clubs/mojo',    changefreq: 'weekly', priority: '0.9' },
  { path: '/games',         changefreq: 'weekly', priority: '0.8' },
  { path: '/about',         changefreq: 'monthly', priority: '0.7' },
];

// One canonical URL per page (English root), hreflang for all language variants
function buildUrl({ path, changefreq, priority }) {
  const canonical = `${SITE_URL}${path}`;
  const hreflangs = LANGS.map(l =>
    `    <xhtml:link rel="alternate" hreflang="${l}" href="${langUrl(l, path)}"/>`
  ).join('\n');
  const xdefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${canonical}"/>`;

  return `  <url>
    <loc>${canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${hreflangs}
${xdefault}
  </url>`;
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${PAGES.map(buildUrl).join('\n')}
</urlset>`;

writeFileSync(resolve(publicDir, 'sitemap.xml'), xml, 'utf8');
console.log(`[generate-sitemap] ✓ sitemap.xml (${PAGES.length} canonical URLs, ${LANGS.length} hreflang each)`);

// Remove old sub-sitemap files if they exist
import { existsSync, unlinkSync } from 'fs';
const OLD = [
  'sitemap-pages.xml','sitemap-clubs.xml','sitemap-games.xml',
  'sitemap-join.xml','sitemap-create-account.xml','sitemap-download.xml',
  'sitemap-install.xml','sitemap-about.xml',
];
for (const f of OLD) {
  const p = resolve(publicDir, f);
  if (existsSync(p)) { unlinkSync(p); console.log(`[generate-sitemap] removed ${f}`); }
}
