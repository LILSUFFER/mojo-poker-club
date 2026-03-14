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
  const t = isRu ? ru : en;
  const lang = isRu ? 'ru' : 'en';
  const locale = isRu ? 'ru_RU' : 'en_US';
  const canonicalUrl = `${BASE_URL}${canonical}`;
  const fullTitle = t.title.includes('MOJO') ? t.title : `${t.title} — MOJO Poker Club`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={t.description} />
      {t.keywords && <meta name="keywords" content={t.keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MOJO Poker Club" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={t.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={t.description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
