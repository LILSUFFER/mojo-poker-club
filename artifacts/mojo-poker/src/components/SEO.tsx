import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface BilingualSEOProps {
  ru: {
    title: string;
    description: string;
    keywords?: string;
  };
  en: {
    title: string;
    description: string;
    keywords?: string;
  };
  canonical: string;
  structuredData?: object;
}

const BASE_URL = 'https://mojo-poker.com';
const OG_IMAGE = `${BASE_URL}/opengraph.jpg`;

export default function SEO({ ru, en, canonical, structuredData }: BilingualSEOProps) {
  const { language } = useLanguage();
  const isRu = language === 'ru';
  const canonicalUrl = `${BASE_URL}${canonical}`;

  // Page <title> follows the user's current UI language (browser tab UX)
  const uiT = isRu ? ru : en;
  const uiTitle = uiT.title.includes('MOJO') ? uiT.title : `${uiT.title} — MOJO Poker Club`;

  // OG / social preview is always English — crawlers & bots see the page
  // in its default (server) state; we want a consistent English preview everywhere.
  const ogTitle = en.title.includes('MOJO') ? en.title : `${en.title} — MOJO Poker Club`;
  const ogDesc  = en.description;

  return (
    <Helmet>
      {/* html[lang] follows UI language — helps screen readers & browser hints */}
      <html lang={isRu ? 'ru' : 'en'} />

      {/* <title> and meta description follow current UI language */}
      <title>{uiTitle}</title>
      <meta name="description" content={uiT.description} />
      {uiT.keywords && <meta name="keywords" content={uiT.keywords} />}

      {/* Canonical — single URL, no language-specific paths */}
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang: Russian is default UI language, no separate EN URL */}
      <link rel="alternate" hrefLang="ru" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* OG / social preview — always English for consistent link previews */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MOJO Poker Club" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ru_RU" />

      {/* Twitter — always English */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDesc} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
