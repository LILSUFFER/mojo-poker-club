import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';

export function Hero() {
  const { t } = useLanguage();
  const base = import.meta.env.BASE_URL;

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 68, overflow: 'hidden', background: 'hsl(220 13% 7%)' }}>
      {/* Hero background image */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${base}images/ggclub-hero.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 0.25 }} />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,17,23,0.6) 0%, rgba(15,17,23,0.5) 50%, rgba(15,17,23,0.9) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.3), transparent)' }} />

      {/* Top text content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center', paddingBottom: 32 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '6px 14px', borderRadius: 20, border: '1px solid rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.08)' }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'hsl(25 95% 53%)', display: 'inline-block' }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'hsl(25 95% 53%)' }}>ClubGG Network</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20, color: 'white', fontFamily: 'Inter' }}
        >
          {t('hero.title')}{' '}
          <span style={{ color: 'hsl(25 95% 53%)' }}>{t('hero.titleHighlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 'clamp(15px, 2.5vw, 19px)', color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.65, fontWeight: 400 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}
        >
          <Link href="/download"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 10, background: 'hsl(25 95% 53%)', color: 'white', fontWeight: 700, fontSize: 16, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(25 95% 44%)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(25 95% 53%)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            {t('hero.cta')} <ArrowRight size={18} />
          </Link>
          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, fontSize: 16, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.5)'; (e.currentTarget as HTMLElement).style.color = 'hsl(25 95% 53%)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
          >
            <MessageCircle size={18} /> {t('hero.secondaryCta')}
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', paddingBottom: 48 }}
        >
          {[['5000+', t('about.stats.players')], ['200+', t('about.stats.tables')], ['24/7', t('about.stats.support')]].map(([val, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'white' }}>{val}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
