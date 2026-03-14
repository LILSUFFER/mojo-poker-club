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

  // Language-specific URLs using ?lang= query param
  const canonicalRu = `${BASE_URL}${canonical}?lang=ru`;
  const canonicalEn = `${BASE_URL}${canonical}?lang=en`;
  const canonicalCurrent = isRu ? canonicalRu : canonicalEn;

  // Page <title> and meta description follow the current UI language
  const uiT = isRu ? ru : en;
  const uiTitle = uiT.title.includes('MOJO') ? uiT.title : `${uiT.title} — MOJO Poker Club`;

  // OG / social preview uses the current language (since the URL now carries ?lang=)
  const ogT = uiT;
  const ogTitle = ogT.title.includes('MOJO') ? ogT.title : `${ogT.title} — MOJO Poker Club`;
  const ogDesc  = ogT.description;
  const ogLocale = isRu ? 'ru_RU' : 'en_US';
  const ogLocaleAlt = isRu ? 'en_US' : 'ru_RU';

  return (
    <Helmet>
      {/* html[lang] follows UI language */}
      <html lang={isRu ? 'ru' : 'en'} />

      {/* <title> and meta description in current language */}
      <title>{uiTitle}</title>
      <meta name="description" content={uiT.description} />
      {uiT.keywords && <meta name="keywords" content={uiT.keywords} />}

      {/* Canonical points to the current language URL */}
      <link rel="canonical" href={canonicalCurrent} />

      {/* hreflang for both language versions + default */}
      <link rel="alternate" hrefLang="ru" href={canonicalRu} />
      <link rel="alternate" hrefLang="en" href={canonicalEn} />
      <link rel="alternate" hrefLang="x-default" href={canonicalEn} />

      {/* OG / social preview — follows current language (URL carries ?lang=) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MOJO Poker Club" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDesc} />
      <meta property="og:url" content={canonicalCurrent} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlt} />

      {/* Twitter */}
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
