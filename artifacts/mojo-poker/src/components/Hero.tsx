import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MessageCircle, Shield, Zap } from 'lucide-react';
import { Link } from 'wouter';

export function Hero() {
  const { t } = useLanguage();
  const base = import.meta.env.BASE_URL;

  return (
    <section style={{ minHeight: '100vh', paddingTop: 64, background: '#0a0c10', display: 'flex', alignItems: 'stretch', overflow: 'hidden', position: 'relative' }}>

      {/* Left content panel */}
      <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(40px, 6vw, 80px) clamp(32px, 5vw, 72px)', position: 'relative', zIndex: 2 }}>

        {/* Network badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28, alignSelf: 'flex-start', padding: '5px 12px 5px 8px', borderRadius: 20, border: '1px solid rgba(249,115,22,0.25)', background: 'rgba(249,115,22,0.06)' }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>ClubGG Network • Online</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{ fontSize: 'clamp(38px, 4.5vw, 64px)', fontWeight: 900, lineHeight: 1.08, marginBottom: 20, color: 'white', letterSpacing: '-0.02em' }}
        >
          {t('hero.title')}{' '}
          <span style={{ color: 'hsl(25 95% 53%)' }}>{t('hero.titleHighlight')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'rgba(255,255,255,0.5)', marginBottom: 36, lineHeight: 1.7, maxWidth: 440 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}
        >
          <Link href="/download"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 26px', borderRadius: 8, background: 'hsl(25 95% 53%)', color: 'white', fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'all 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(25 95% 44%)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(25 95% 53%)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            {t('hero.cta')} <ArrowRight size={16} />
          </Link>
          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 24px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'all 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}
          >
            <MessageCircle size={15} /> {t('hero.secondaryCta')}
          </a>
        </motion.div>

        {/* Divider */}
        <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 28 }} />

        {/* Trust points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          {[
            { icon: <Shield size={15} />, text: t('contact.note').split(' • ')[1] || 'Безопасные депозиты' },
            { icon: <Zap size={15} />, text: t('contact.note').split(' • ')[2] || 'Мгновенные выводы' },
          ].map(({ icon, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
              <span style={{ color: 'hsl(25 95% 53%)', flexShrink: 0 }}>{icon}</span>
              {text}
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', gap: 36, marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {[['5 000+', t('about.stats.players')], ['200+', t('about.stats.tables')], ['24/7', t('about.stats.support')]].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1.1 }}>{val}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 5 }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right image panel */}
      <div style={{ flex: '0 0 50%', position: 'relative', overflow: 'hidden' }}>
        {/* Gradient fade from left */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #0a0c10 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
        {/* Gradient fade at bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, background: 'linear-gradient(to top, #0a0c10 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />

        <motion.img
          src={`${base}images/ggclub-hero.png`}
          alt="GGClub Poker"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
      </div>

      {/* Mobile: image at bottom as subtle bg overlay */}
      <div className="md:hidden" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${base}images/ggclub-hero.png)`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0a0c10 30%, rgba(10,12,16,0.92) 100%)' }} />
      </div>
    </section>
  );
}
