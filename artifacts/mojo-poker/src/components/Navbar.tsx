import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === '/';

  const navLinks = [
    { label: t('nav.about'), href: isHome ? '#about' : '/#about' },
    { label: t('nav.clubs'), href: isHome ? '#clubs' : '/#clubs' },
    { label: t('nav.howToJoin'), href: isHome ? '#how-to-join' : '/#how-to-join' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center' }}>

        <div style={{ flex: 1 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 24, color: 'white', letterSpacing: '0.06em', lineHeight: 1 }}>MOJO</span>
          </Link>
        </div>

        <div className="nav-desktop" style={{ alignItems: 'center', gap: 0 }}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href}
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 500, textDecoration: 'none', padding: '6px 14px', borderRadius: 4, transition: 'color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
            >{link.label}</a>
          ))}
        </div>

        <div className="nav-desktop" style={{ flex: 1, alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
          <button
            onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
            style={{ padding: '5px 10px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', background: 'transparent', cursor: 'pointer', transition: 'all 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
          >
            {language === 'en' ? 'RU' : 'EN'}
          </button>

          {/* Download — RED */}
          <Link href="/download"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 16px', borderRadius: 4, background: 'hsl(4 80% 45%)', color: 'white', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'background 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 38%)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 45%)'; }}
          >
            <Download size={13} />
            {t('nav.download')}
          </Link>

          {/* Contact — outline */}
          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', padding: '7px 16px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'all 0.15s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}
          >
            {t('nav.contact')}
          </a>
        </div>

        <button onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'white', cursor: 'pointer', padding: '6px 8px', borderRadius: 4, alignItems: 'center' }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-subtle)', overflow: 'hidden' }}
          >
            <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {navLinks.map(link => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)}
                  style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, fontWeight: 500, textDecoration: 'none', padding: '10px 12px', borderRadius: 4 }}>
                  {link.label}
                </a>
              ))}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '8px 0' }} />
              <button onClick={() => { setLanguage(language === 'en' ? 'ru' : 'en'); setOpen(false); }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', textAlign: 'left' }}>
                {language === 'en' ? '🇷🇺 Русский' : '🇬🇧 English'}
              </button>
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
