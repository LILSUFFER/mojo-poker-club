import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Download, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { LANGUAGE_NAMES, LANGUAGE_FLAGS, Language, isRTL } from '@/lib/translations';

const LANGUAGES: Language[] = ['en', 'ru', 'es', 'de', 'fr', 'it', 'pt', 'ar', 'hi', 'fa', 'tr', 'az', 'zh', 'ja'];

const linkStyle = {
  color: 'rgba(255,255,255,0.5)',
  fontSize: 14,
  fontWeight: 500,
  textDecoration: 'none',
  padding: '6px 14px',
  borderRadius: 4,
  transition: 'color 0.15s',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  fontFamily: 'inherit',
};

interface DropItem { label: string; href: string; external?: boolean }

function DropMenu({ label, items }: { label: string; items: DropItem[] }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => { if (timer.current) clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div style={{ position: 'relative' }} onMouseEnter={show} onMouseLeave={hide}>
      <button style={linkStyle as React.CSSProperties}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
      >
        {label}
        <ChevronDown size={12} style={{ opacity: 0.6, transition: 'transform 0.15s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute', top: '100%', left: 0,
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 6, padding: '6px 0',
              minWidth: 210, zIndex: 100,
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            {items.map(item => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '9px 18px', fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.12s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.05)'; el.style.color = 'white'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '9px 18px', fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'all 0.12s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.05)'; el.style.color = 'white'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  {item.label}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const { language, setLanguage, t, isRu } = useLanguage();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const langTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [location] = useLocation();
  const isHome = location === '/';
  const rtl = isRTL(language);

  const showLang = () => { if (langTimer.current) clearTimeout(langTimer.current); setLangOpen(true); };
  const hideLang = () => { langTimer.current = setTimeout(() => setLangOpen(false), 120); };
  useEffect(() => () => { if (langTimer.current) clearTimeout(langTimer.current); }, []);

  const clubItems: DropItem[] = [
    { label: 'MOJO: Massiv Poker Union', href: '/clubs/massiv' },
    { label: 'MOJO', href: '/clubs/mojo' },
  ];

  const joinItems: DropItem[] = [
    { label: t('nav.downloadGG'), href: '/download' },
    { label: t('nav.createAccount'), href: '/create-account' },
    { label: t('nav.joinClub'), href: '/join' },
  ];

  const mobileLinks = [
    { label: t('nav.clubs'), href: isHome ? '#clubs' : '/#clubs' },
    { label: t('nav.downloadGG'), href: '/download' },
    { label: t('nav.createAccount'), href: '/create-account' },
    { label: t('nav.joinClub'), href: '/join' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.reviews'), href: isHome ? '#reviews' : '/#reviews' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border-subtle)',
      direction: 'ltr',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 0, flex: 1 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginRight: 36 }}>
            <img src="/images/mojo-logo.svg" alt="MOJO Poker Club" style={{ height: 28, width: 'auto', display: 'block' }} />
            <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
            <img
              src="/images/massiv-union-logo-nobg.png"
              alt="Massiv Union ClubGG"
              style={{ height: 38, width: 'auto', objectFit: 'contain', display: 'block', filter: 'brightness(0) invert(1)', opacity: 0.62 }}
            />
          </Link>

          <div className="nav-desktop" style={{ alignItems: 'center', gap: 0 }}>
            <DropMenu label={t('nav.clubs')} items={clubItems} />
            <DropMenu label={t('nav.guides')} items={joinItems} />
            <Link href="/about"
              style={linkStyle as React.CSSProperties}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
            >{t('nav.about')}</Link>
            <a href={isHome ? '#reviews' : '/#reviews'}
              style={linkStyle as React.CSSProperties}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
            >{t('nav.reviews')}</a>
          </div>
        </div>

        {/* Desktop right side */}
        <div className="nav-desktop" style={{ alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>

          {/* Language switcher */}
          <div style={{ position: 'relative' }} onMouseEnter={showLang} onMouseLeave={hideLang}>
            <button
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 10px', borderRadius: 4, border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', background: 'transparent', cursor: 'pointer', transition: 'color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
            >
              <span style={{ fontSize: 18, lineHeight: 1 }}>{LANGUAGE_FLAGS[language]}</span>
              <ChevronDown size={11} style={{ opacity: 0.6, transition: 'transform 0.15s', transform: langOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute', top: '100%', right: 0,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 6, padding: '6px 0',
                    zIndex: 100,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    minWidth: 240,
                  }}
                >
                  {LANGUAGES.map(code => (
                    <button
                      key={code}
                      onClick={() => { setLanguage(code); setLangOpen(false); }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '9px 16px', fontSize: 13,
                        fontWeight: language === code ? 700 : 400,
                        color: language === code ? 'white' : 'rgba(255,255,255,0.55)',
                        background: language === code ? 'rgba(255,255,255,0.06)' : 'transparent',
                        border: 'none', cursor: 'pointer', textAlign: 'left',
                        transition: 'all 0.12s',
                        direction: isRTL(code) ? 'rtl' : 'ltr',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={e => { if (language !== code) { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; (e.currentTarget as HTMLElement).style.color = 'white'; } }}
                      onMouseLeave={e => { if (language !== code) { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; } }}
                    >
                      <span style={{ fontSize: 18, lineHeight: 1, minWidth: 22, direction: 'ltr' }}>
                        {LANGUAGE_FLAGS[code]}
                      </span>
                      {LANGUAGE_NAMES[code]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/download"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 16px', borderRadius: 4, background: 'hsl(4 80% 45%)', color: 'white', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'background 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 38%)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 45%)'; }}
          >
            <Download size={13} />
            {t('nav.download')}
          </Link>

          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', padding: '7px 16px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'all 0.15s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}
          >
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'white', cursor: 'pointer', padding: '6px 8px', borderRadius: 4, alignItems: 'center' }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-subtle)', overflow: 'hidden' }}
          >
            <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {mobileLinks.map(link => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)}
                  style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, fontWeight: 500, textDecoration: 'none', padding: '10px 12px', borderRadius: 4 }}>
                  {link.label}
                </a>
              ))}

              <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '8px 0' }} />

              {/* Mobile language picker */}
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', textAlign: 'left' }}
              >
                <span style={{ fontSize: 20, lineHeight: 1 }}>{LANGUAGE_FLAGS[language]}</span>
                {LANGUAGE_NAMES[language]}
                <ChevronDown size={13} style={{ marginLeft: 'auto', transition: 'transform 0.15s', transform: mobileLangOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>

              <AnimatePresence>
                {mobileLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr',
                      gap: 2, padding: '4px 12px 8px',
                    }}>
                      {LANGUAGES.map(code => (
                        <button
                          key={code}
                          onClick={() => { setLanguage(code); setMobileLangOpen(false); setOpen(false); }}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 6,
                            padding: '8px 10px', borderRadius: 4, fontSize: 13,
                            fontWeight: language === code ? 700 : 400,
                            color: language === code ? 'white' : 'rgba(255,255,255,0.5)',
                            background: language === code ? 'rgba(255,255,255,0.06)' : 'transparent',
                            border: 'none', cursor: 'pointer', textAlign: 'left',
                            direction: isRTL(code) ? 'rtl' : 'ltr',
                          }}
                        >
                          <span style={{ fontSize: 18, lineHeight: 1, direction: 'ltr', minWidth: 22 }}>
                            {LANGUAGE_FLAGS[code]}
                          </span>
                          {LANGUAGE_NAMES[code]}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/download" onClick={() => setOpen(false)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', borderRadius: 4, background: 'hsl(4 80% 45%)', color: 'white', fontSize: 15, fontWeight: 600, textDecoration: 'none', marginTop: 4 }}>
                <Download size={15} /> {t('nav.download')}
              </Link>
              <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                style={{ padding: '12px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.18)', color: 'white', fontSize: 15, fontWeight: 600, textDecoration: 'none', textAlign: 'center', marginTop: 4 }}>
                {t('nav.contact')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
