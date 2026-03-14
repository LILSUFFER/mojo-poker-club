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
      background: '#0a0c10',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 0, textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 26, color: 'white', letterSpacing: '0.06em', lineHeight: 1 }}>MOJO</span>
        </Link>

        {/* Desktop nav links */}
        <div className="nav-desktop" style={{ alignItems: 'center', gap: 2 }}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href}
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 500, textDecoration: 'none', padding: '6px 16px', borderRadius: 6, transition: 'all 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >{link.label}</a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="nav-desktop" style={{ alignItems: 'center', gap: 8 }}>
          <button
            onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
            style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', background: 'transparent', cursor: 'pointer', transition: 'all 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
          >
            {language === 'en' ? 'RU' : 'EN'}
          </button>

          <Link href="/download"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 16px', borderRadius: 7, border: '1px solid rgba(204,21,21,0.5)', color: 'hsl(4 80% 50%)', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'all 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(204,21,21,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = 'hsl(4 80% 45%)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(204,21,21,0.5)'; }}
          >
            <Download size={13} />
            {t('nav.download')}
          </Link>

          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', padding: '8px 18px', borderRadius: 7, background: 'hsl(4 80% 45%)', color: 'white', fontSize: 13, fontWeight: 700, textDecoration: 'none', transition: 'background 0.15s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 37%)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 45%)'; }}
          >
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', cursor: 'pointer', padding: '6px 8px', borderRadius: 7, alignItems: 'center' }}
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
            style={{ background: '#0a0c10', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}
          >
            <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {navLinks.map(link => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)}
                  style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, fontWeight: 500, textDecoration: 'none', padding: '10px 12px', borderRadius: 8 }}>
                  {link.label}
                </a>
              ))}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '8px 0' }} />
              <button onClick={() => { setLanguage(language === 'en' ? 'ru' : 'en'); setOpen(false); }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: '8px 12px', textAlign: 'left' }}>
                {language === 'en' ? '🇷🇺 Русский' : '🇬🇧 English'}
              </button>
              <Link href="/download" onClick={() => setOpen(false)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', borderRadius: 8, border: '1px solid rgba(204,21,21,0.5)', color: 'hsl(4 80% 50%)', fontSize: 15, fontWeight: 600, textDecoration: 'none', marginTop: 4 }}>
                <Download size={15} /> {t('nav.download')}
              </Link>
              <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                style={{ padding: '13px', borderRadius: 8, background: 'hsl(4 80% 45%)', color: 'white', fontSize: 15, fontWeight: 700, textDecoration: 'none', textAlign: 'center', marginTop: 4 }}>
                {t('nav.contact')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
