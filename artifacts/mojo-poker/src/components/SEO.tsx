import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface LangMeta {
  title: string;
  description: string;
  keywords?: string;
}

interface SEOProps {
  langs: Partial<Record<string, LangMeta>>;
  canonical: string;
  structuredData?: object;
}

const BASE_URL = 'https://mojo-poker.com';
const OG_IMAGE = `${BASE_URL}/opengraph.jpg`;

const HREFLANG: Record<string, string> = {
  en: 'en', ru: 'ru', es: 'es', de: 'de', fr: 'fr',
  it: 'it', pt: 'pt', ar: 'ar', hi: 'hi', fa: 'fa',
  tr: 'tr', az: 'az', zh: 'zh-CN', ja: 'ja',
};

const OG_LOCALE: Record<string, string> = {
  en: 'en_US', ru: 'ru_RU', es: 'es_ES', de: 'de_DE',
  fr: 'fr_FR', it: 'it_IT', pt: 'pt_BR', ar: 'ar_SA',
  hi: 'hi_IN', fa: 'fa_IR', tr: 'tr_TR', az: 'az_AZ',
  zh: 'zh_CN', ja: 'ja_JP',
};

export default function SEO({ langs, canonical, structuredData }: SEOProps) {
  const { language } = useLanguage();
  const meta = langs[language] ?? langs['en']!;
  const title = meta.title.includes('MOJO') ? meta.title : `${meta.title} — MOJO Poker Club`;
  const canonicalUrl = `${BASE_URL}${canonical}?lang=${language}`;

  return (
    <Helmet>
      <html lang={HREFLANG[language] ?? 'en'} />
      <title>{title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {Object.entries(HREFLANG).map(([code, hreflang]) => (
        <link key={code} rel="alternate" hrefLang={hreflang} href={`${BASE_URL}${canonical}?lang=${code}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${canonical}?lang=en`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MOJO Poker Club" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={OG_LOCALE[language] ?? 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
}
