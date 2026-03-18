import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react';
import { translations, Language, isRTL } from '@/lib/translations';

const VALID_LANGS: Language[] = ['en', 'ru', 'es', 'de', 'fr', 'it', 'pt', 'ar', 'hi', 'fa', 'tr', 'az', 'zh', 'ja'];
const LANGS_SET = new Set<string>(VALID_LANGS);

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  isRu: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getViteBase(): string {
  if (typeof window === 'undefined') return '';
  return (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');
}

export function getLangFromPath(): Language {
  if (typeof window === 'undefined') return 'en';
  const base = getViteBase();
  const path = window.location.pathname;
  const afterBase = base ? path.slice(base.length) : path;
  const first = afterBase.split('/').filter(Boolean)[0] ?? '';
  return LANGS_SET.has(first) ? (first as Language) : 'en';
}

function getInitialLang(): Language {
  if (typeof window === 'undefined') return 'en';
  return getLangFromPath();
}

function getPageSegments(): string[] {
  const base = getViteBase();
  const path = window.location.pathname;
  const afterBase = base ? path.slice(base.length) : path;
  const segs = afterBase.split('/').filter(Boolean);
  return LANGS_SET.has(segs[0]) ? segs.slice(1) : segs;
}

export function buildLangUrl(lang: Language): string {
  const base = getViteBase();
  const pageSegs = getPageSegments();
  const page = pageSegs.length > 0 ? '/' + pageSegs.join('/') + '/' : '/';
  return lang === 'en' ? `${base}${page}` : `${base}/${lang}${page}`;
}

function applyDocumentDir(lang: Language) {
  document.documentElement.dir = isRTL(lang) ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLang);

  const setLanguage = (lang: Language) => {
    window.location.href = buildLangUrl(lang);
  };

  useLayoutEffect(() => {
    applyDocumentDir(language);
  }, [language]);

  useEffect(() => {
    const handlePop = () => {
      const newLang = getLangFromPath();
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
