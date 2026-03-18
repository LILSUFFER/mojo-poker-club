import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 16 }}>
            /// Telegram
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em', marginBottom: 16 }}>
            {t('contact.title')}
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-faint)', marginBottom: 36, lineHeight: 1.7 }}>
            {t('contact.subtitle')}
          </p>

          <a href="/support"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '12px 32px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.22)', background: 'transparent', color: 'var(--text)', fontWeight: 600, fontSize: 15, textDecoration: 'none', transition: 'all 0.15s' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.45)'; el.style.background = 'rgba(255,255,255,0.04)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.22)'; el.style.background = 'transparent'; }}
          >
            <Send size={16} />
            {t('contact.btn')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
