import http from 'http';
import { createServer as createViteServer } from 'vite';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = parseInt(process.env.PORT || '3000');
const BASE_PATH = (process.env.BASE_PATH || '/').replace(/\/$/, '');

// ─────────────────────────────────────────────
// Bilingual meta tags per route
// ─────────────────────────────────────────────
const META = {
  '/': {
    ru: {
      title: 'MOJO Poker Club — покерный клуб GGClub, Massiv Poker Union',
      description: 'Официальный покерный клуб в сети GGClub и Massiv Poker Union. Рейкбек до 55%, фишки 1к1, онлайн 698+ игроков, столы 24/7. Реферальный код 3383-3619.',
      keywords: 'GGClub, ClubGG, покер клуб, Massiv Poker Union, MOJO Poker, покер онлайн, рейкбек',
    },
    en: {
      title: 'MOJO Poker Club — GGClub Poker, Massiv Poker Union',
      description: 'Official poker club on GGClub and Massiv Poker Union. Up to 55% rakeback, 1:1 chips, 698+ online players, 24/7 tables. Referral code 3383-3619.',
      keywords: 'GGClub poker, ClubGG, Massiv Poker Union, MOJO Poker, online poker club, rakeback',
    },
  },
  '/download': {
    ru: {
      title: 'Скачать ClubGG — MOJO Poker Club',
      description: 'Скачайте приложение ClubGG для Android, iOS или Windows. Два шага — и вы готовы к игре в клубе MOJO.',
      keywords: 'скачать ClubGG, ClubGG Android, ClubGG iOS, ClubGG Windows, клубный покер',
    },
    en: {
      title: 'Download ClubGG — MOJO Poker Club',
      description: 'Download the ClubGG app for Android, iOS or Windows. Two steps and you are ready to play at MOJO Poker Club.',
      keywords: 'download ClubGG, ClubGG Android, ClubGG iOS, ClubGG Windows, club poker app',
    },
  },
  '/install': {
    ru: {
      title: 'Как установить ClubGG — MOJO Poker Club',
      description: 'Пошаговая инструкция по установке ClubGG на Android, iPhone и Windows. Установка занимает меньше минуты.',
      keywords: 'установить ClubGG, ClubGG APK, ClubGG iOS, ClubGG Windows',
    },
    en: {
      title: 'How to Install ClubGG — MOJO Poker Club',
      description: 'Step-by-step guide to install ClubGG on Android, iPhone and Windows. Installation takes less than a minute.',
      keywords: 'install ClubGG, ClubGG APK, ClubGG iOS App Store, ClubGG Windows setup',
    },
  },
  '/join': {
    ru: {
      title: 'Как вступить в MOJO Poker Club — GGClub',
      description: 'Пошаговая инструкция как вступить в MOJO Poker Club на GGClub. Massiv Poker Union ID 799798, MOJO ID 356323. Реферальный код 3383-3619.',
      keywords: 'как вступить GGClub, ClubGG инструкция, Massiv Poker Union, MOJO Poker вступить',
    },
    en: {
      title: 'How to Join MOJO Poker Club — GGClub',
      description: 'Step-by-step guide to join MOJO Poker Club on GGClub. Massiv Poker Union ID 799798, MOJO ID 356323. Referral code 3383-3619.',
      keywords: 'how to join GGClub, ClubGG guide, Massiv Poker Union sign up, MOJO Poker join',
    },
  },
  '/create-account': {
    ru: {
      title: 'Как создать аккаунт GGClub — MOJO Poker Club',
      description: 'Пошаговая инструкция по регистрации в GGClub. Как выбрать флаг ГЕО, использовать VPN и реферальный код 3383-3619.',
      keywords: 'создать аккаунт GGClub, регистрация ClubGG, VPN для GGClub, покер аккаунт',
    },
    en: {
      title: 'How to Create a GGClub Account — MOJO Poker Club',
      description: 'Step-by-step guide to create a GGClub account. How to select GEO flag, use VPN and referral code 3383-3619.',
      keywords: 'create GGClub account, ClubGG registration, VPN for GGClub, poker account setup',
    },
  },
  '/clubs/massiv': {
    ru: {
      title: 'MOJO: Massiv Poker Union — покер клуб GGClub',
      description: 'Massiv Poker Union на GGClub — один из крупнейших покерных союзов. Рейкбек 50%, 698+ игроков онлайн, 255+ столов 24/7. ID клуба 799798.',
      keywords: 'Massiv Poker Union, GGClub покер, ClubGG покер клуб, рейкбек, MOJO Poker',
    },
    en: {
      title: 'MOJO: Massiv Poker Union — GGClub Poker Club',
      description: 'Massiv Poker Union on GGClub — one of the biggest poker unions. 50% rakeback, 698+ players online, 255+ tables 24/7. Club ID 799798.',
      keywords: 'Massiv Poker Union, GGClub poker club, ClubGG poker, rakeback poker, MOJO Poker',
    },
  },
  '/clubs/mojo': {
    ru: {
      title: 'MOJO — закрытый покер клуб GGClub',
      description: 'MOJO на GGClub — закрытый клуб с рейкбеком 55%, фишками 1к1, 62+ игроков онлайн. ID клуба 356323. Реферальный код 3383-3619.',
      keywords: 'MOJO покер, GGClub покер клуб, ClubGG клуб, рейкбек 55%, покер онлайн',
    },
    en: {
      title: 'MOJO — Private GGClub Poker Club',
      description: 'MOJO on GGClub — private poker club with 55% rakeback, 1:1 chips, 62+ players online. Club ID 356323. Referral code 3383-3619.',
      keywords: 'MOJO poker, GGClub poker club, ClubGG private club, 55% rakeback, online poker',
    },
  },
  '/about': {
    ru: {
      title: 'О нас — MOJO Poker Club',
      description: 'MOJO Poker Club — официальный агент в сети GGClub и Massiv Poker Union. Рейкбек, поддержка, выгодные условия. Контакт: @Mojo_Adm.',
      keywords: 'MOJO Poker Club о нас, GGClub агент, Massiv Poker Union агент, @Mojo_Adm',
    },
    en: {
      title: 'About — MOJO Poker Club',
      description: 'MOJO Poker Club — official agent on GGClub and Massiv Poker Union. Rakeback, support, best conditions. Contact: @Mojo_Adm.',
      keywords: 'MOJO Poker Club about, GGClub agent, Massiv Poker Union agent, Telegram Mojo_Adm',
    },
  },
};

const BASE_URL = 'https://mojo-poker.com';
const OG_IMAGE = `${BASE_URL}/opengraph.jpg`;

// Strip all existing head meta that we will replace
function stripExistingMeta(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\s+name="description"[^>]*/gi, '')
    .replace(/<meta\s+name="keywords"[^>]*/gi, '')
    .replace(/<meta\s+name="robots"[^>]*/gi, '')
    .replace(/<meta\s+name="author"[^>]*/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*/gi, '')
    .replace(/<link\s+rel="alternate"[^>]*hreflang[^>]*/gi, '')
    .replace(/<meta\s+property="og:[^>]*/gi, '')
    .replace(/<meta\s+name="twitter:[^>]*/gi, '')
    .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
}

function buildMetaHtml(pathname, lang) {
  const routeMeta = META[pathname] || META['/'];
  const m = routeMeta[lang] || routeMeta['ru'];
  const canonicalUrl = `${BASE_URL}${pathname}?lang=${lang}`;
  const canonicalRu  = `${BASE_URL}${pathname}?lang=ru`;
  const canonicalEn  = `${BASE_URL}${pathname}?lang=en`;
  const ogLocale    = lang === 'ru' ? 'ru_RU' : 'en_US';
  const ogLocaleAlt = lang === 'ru' ? 'en_US' : 'ru_RU';

  return `
  <title>${m.title}</title>
  <meta name="description" content="${m.description}" />
  ${m.keywords ? `<meta name="keywords" content="${m.keywords}" />` : ''}
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="alternate" hreflang="ru" href="${canonicalRu}" />
  <link rel="alternate" hreflang="en" href="${canonicalEn}" />
  <link rel="alternate" hreflang="x-default" href="${canonicalEn}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MOJO Poker Club" />
  <meta property="og:title" content="${m.title}" />
  <meta property="og:description" content="${m.description}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="${ogLocale}" />
  <meta property="og:locale:alternate" content="${ogLocaleAlt}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${m.title}" />
  <meta name="twitter:description" content="${m.description}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />`;
}

function injectMeta(html, pathname, lang) {
  const stripped = stripExistingMeta(html);
  const metaHtml  = buildMetaHtml(pathname, lang);
  // Replace <html lang="..."> first
  const htmlWithLang = stripped.replace(/<html([^>]*)lang="[^"]*"/, `<html$1lang="${lang}"`);
  return htmlWithLang.replace('</head>', metaHtml + '\n  </head>');
}

// Determine if a request is for an HTML page (not an asset/vite special route)
function isPageRequest(pathname) {
  // Vite internal and special paths
  if (pathname.startsWith('/@')) return false;
  if (pathname.startsWith('/__')) return false;
  if (pathname.startsWith('/node_modules/')) return false;
  if (pathname.startsWith('/src/')) return false;
  // If it has a non-html file extension, it's an asset
  const lastSegment = pathname.split('/').pop() || '';
  const dotIdx = lastSegment.lastIndexOf('.');
  if (dotIdx !== -1) {
    const ext = lastSegment.slice(dotIdx + 1).toLowerCase();
    if (ext !== 'html') return false;
  }
  return true;
}

async function main() {
  const vite = await createViteServer({
    configFile: resolve(__dirname, 'vite.config.ts'),
    server: { middlewareMode: true },
    appType: 'spa',
  });

  const rawIndexHtml = readFileSync(resolve(__dirname, 'index.html'), 'utf-8');

  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://localhost:${PORT}`);
      const langParam = url.searchParams.get('lang');
      const lang = (langParam === 'ru' || langParam === 'en') ? langParam : 'en';
      // Strip BASE_PATH prefix to get the actual route
      let pathname = url.pathname;
      if (BASE_PATH && pathname.startsWith(BASE_PATH)) {
        pathname = pathname.slice(BASE_PATH.length) || '/';
      }
      if (!pathname.startsWith('/')) pathname = '/' + pathname;

      if (isPageRequest(pathname)) {
        // Serve index.html with correct meta tags for this page + language
        const transformed = await vite.transformIndexHtml(req.url, rawIndexHtml);
        const html = injectMeta(transformed, pathname, lang);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(html);
      } else {
        // Let Vite serve assets (JS, CSS, images, etc.)
        vite.middlewares(req, res, () => {
          res.statusCode = 404;
          res.end('Not found');
        });
      }
    } catch (err) {
      console.error('SSR error:', err);
      vite.ssrFixStacktrace(err);
      res.statusCode = 500;
      res.end(err.message);
    }
  });

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`[mojo-poker] SSR server on port ${PORT} (base: ${BASE_PATH || '/'})`);
  });
}

main().catch(console.error);
