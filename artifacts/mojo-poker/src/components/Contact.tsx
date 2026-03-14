import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" style={{ padding: '96px 0', background: 'hsl(220 13% 9%)' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: 'hsl(25 95% 53%)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 16 }}>
            Telegram
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: 'white', marginBottom: 16, lineHeight: 1.15 }}>
            {t('contact.title')}
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', marginBottom: 40, lineHeight: 1.6 }}>
            {t('contact.subtitle')}
          </p>

          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px', borderRadius: 12, background: 'hsl(25 95% 53%)', color: 'white', fontWeight: 700, fontSize: 18, textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(25 95% 44%)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(25 95% 53%)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            <Send size={20} />
            {t('contact.btn')}
          </a>

          <p style={{ marginTop: 24, fontSize: 13, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {t('contact.note')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
