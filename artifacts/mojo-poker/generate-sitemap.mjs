import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir  = resolve(__dirname, 'public');
mkdirSync(publicDir, { recursive: true });

const BASE  = 'https://mojopokerclub.com';
const TODAY = new Date().toISOString().slice(0, 10);
const LANGS = ['en','ru','es','de','fr','it','pt','ar','hi','fa','tr','az','zh','ja'];

function hrefUrl(lang, path) {
  const slug = path === '/' ? '/' : path + '/';
  return lang === 'en' ? `${BASE}${slug}` : `${BASE}/${lang}${slug}`;
}

function writeSub(filename, pages) {
  const entries = pages.map(({ path, changefreq, priority }) => {
    const loc  = path === '/' ? `${BASE}/` : `${BASE}${path}/`;
    const alts = LANGS.map(l =>
      `    <xhtml:link rel="alternate" hreflang="${l}" href="${hrefUrl(l, path)}" />`
    ).join('\n');
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />
  </url>`;
  }).join('\n');

  writeFileSync(resolve(publicDir, filename), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>`, 'utf8');
  console.log(`[sitemap] ✓ ${filename}`);
}

// One sub-sitemap per page / section
writeSub('sitemap-pages.xml',          [{ path: '/',               changefreq: 'weekly',  priority: '1.0' }]);
writeSub('sitemap-clubs.xml',          [{ path: '/clubs/massiv',   changefreq: 'weekly',  priority: '0.8' },
                                         { path: '/clubs/mojo',    changefreq: 'weekly',  priority: '0.8' }]);
writeSub('sitemap-games.xml',          [{ path: '/games',          changefreq: 'weekly',  priority: '0.8' }]);
writeSub('sitemap-about.xml',          [{ path: '/about',          changefreq: 'monthly', priority: '0.7' }]);
writeSub('sitemap-join.xml',           [{ path: '/join',           changefreq: 'monthly', priority: '0.6' }]);
writeSub('sitemap-create-account.xml', [{ path: '/create-account', changefreq: 'monthly', priority: '0.6' }]);
writeSub('sitemap-download.xml',       [{ path: '/download',       changefreq: 'monthly', priority: '0.6' }]);
writeSub('sitemap-install.xml',        [{ path: '/install',        changefreq: 'monthly', priority: '0.6' }]);

// sitemap.xml — pure sitemapindex, no xhtml namespace → renders as XML tree in browser
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

writeFileSync(resolve(publicDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SUB_FILES.map(f => `  <sitemap>
    <loc>${BASE}/${f}</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`, 'utf8');
console.log(`[sitemap] ✓ sitemap.xml → ${SUB_FILES.length} sub-sitemaps`);
