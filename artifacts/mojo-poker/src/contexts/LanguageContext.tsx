import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, isRTL } from '@/lib/translations';

const VALID_LANGS: Language[] = ['en', 'ru', 'es', 'de', 'fr', 'it', 'pt', 'ar', 'hi', 'fa', 'tr', 'az', 'zh', 'ja'];

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  isRu: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getLangFromUrl(): Language {
  if (typeof window === 'undefined') return 'en';
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang') as Language;
  if (lang && VALID_LANGS.includes(lang)) return lang;
  return 'en';
}

function setLangInUrl(lang: Language) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url.toString());
}

function applyDocumentDir(lang: Language) {
  document.documentElement.dir = isRTL(lang) ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getLangFromUrl);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setLangInUrl(lang);
    applyDocumentDir(lang);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.has('lang')) {
      setLangInUrl(language);
    }
    applyDocumentDir(language);

    const handlePop = () => {
      const newLang = getLangFromUrl();
      setLanguageState(newLang);
      applyDocumentDir(newLang);
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = (translations as any)[language] ?? (translations as any)['en'];
    for (const key of keys) {
      if (current?.[key] === undefined) {
        // Fallback to English
        let fallback: any = (translations as any)['en'];
        for (const k of keys) {
          if (fallback?.[k] === undefined) return path;
          fallback = fallback[k];
        }
        return fallback as string;
      }
      current = current[key];
    }
    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRu: language === 'ru' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
