import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://mojopokerclub.com';
const today = new Date().toISOString().slice(0, 10);
const publicDir = resolve(__dirname, 'public');
mkdirSync(publicDir, { recursive: true });

// All supported language prefixes (en = root, others = /:lang/)
const LANGS = ['en','ru','es','de','fr','it','pt','ar','hi','fa','tr','az','zh','ja'];

function altUrl(lang, path) {
  const slug = path === '/' ? '/' : path + '/';
  return lang === 'en' ? `${BASE}${slug}` : `${BASE}/${lang}${slug}`;
}

// Explicit whitelist — no technical/registration pages
const PAGES = [
  { path: '/',            changefreq: 'weekly',  priority: '1.0' },
  { path: '/clubs/massiv', changefreq: 'weekly', priority: '0.8' },
  { path: '/clubs/mojo',  changefreq: 'weekly',  priority: '0.8' },
  { path: '/games',       changefreq: 'weekly',  priority: '0.8' },
  { path: '/about',       changefreq: 'monthly', priority: '0.5' },
];

function buildEntry({ path, changefreq, priority }) {
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
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

${PAGES.map(buildEntry).join('\n\n')}

</urlset>`;

writeFileSync(resolve(publicDir, 'sitemap.xml'), xml, 'utf8');
console.log(`[generate-sitemap] ✓ sitemap.xml (${PAGES.length} pages × ${LANGS.length} langs)`);
