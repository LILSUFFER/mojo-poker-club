import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Download, Globe } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location === '/';

  const navLinks = [
    { label: t('nav.about'), href: isHome ? '#about' : '/#about' },
    { label: t('nav.clubs'), href: isHome ? '#clubs' : '/#clubs' },
    { label: t('nav.howToJoin'), href: isHome ? '#how-to-join' : '/#how-to-join' },
  ];

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.3s, border-color 0.3s',
        background: scrolled || !isHome ? 'rgba(15,17,23,0.97)' : 'transparent',
        borderBottom: scrolled || !isHome ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        backdropFilter: scrolled || !isHome ? 'blur(16px)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: 22, letterSpacing: '0.06em', color: 'white' }}>MOJO</span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'hsl(25 95% 53%)' }} />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
          {navLinks.map(link => (
            <a key={link.label} href={link.href}
              style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.02em' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
            >{link.label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hidden md:flex">
          <button onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
            style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            <Globe size={15} />
            {language.toUpperCase()}
          </button>

          <Link href="/download"
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', borderRadius: 8, border: '1px solid rgba(249,115,22,0.4)', color: 'hsl(25 95% 53%)', fontSize: 13, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(249,115,22,0.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <Download size={14} />
            {t('nav.download')}
          </Link>

          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ padding: '9px 20px', borderRadius: 8, background: 'hsl(25 95% 53%)', color: 'white', fontSize: 13, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(25 95% 45%)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(25 95% 53%)'; }}
          >
            {t('nav.contact')}
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 8 }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(15,17,23,0.99)', borderTop: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}
          >
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {navLinks.map(link => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)}
                  style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, fontWeight: 500, textDecoration: 'none' }}>
                  {link.label}
                </a>
              ))}
              <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '4px 0' }} />
              <button onClick={() => { setLanguage(language === 'en' ? 'ru' : 'en'); setOpen(false); }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 15, fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <Globe size={16} />
                {language === 'en' ? 'Русский' : 'English'}
              </button>
              <Link href="/download" onClick={() => setOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 18px', borderRadius: 8, border: '1px solid rgba(249,115,22,0.4)', color: 'hsl(25 95% 53%)', fontSize: 15, fontWeight: 700, textDecoration: 'none', justifyContent: 'center' }}>
                <Download size={16} />
                {t('nav.download')}
              </Link>
              <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                style={{ padding: '12px 18px', borderRadius: 8, background: 'hsl(25 95% 53%)', color: 'white', fontSize: 15, fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>
                {t('nav.contact')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
