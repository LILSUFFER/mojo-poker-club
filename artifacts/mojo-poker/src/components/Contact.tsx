import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, ShieldCheck, Zap } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-label">Telegram</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>{t('contact.title')}</h2>
          <p style={{ fontSize: 17, color: 'var(--text-muted)', marginBottom: 40, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 40px' }}>
            {t('contact.subtitle')}
          </p>

          <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 36px', borderRadius: 10, background: 'hsl(4 80% 45%)', color: 'white', fontWeight: 600, fontSize: 16, textDecoration: 'none', transition: 'all 0.15s', letterSpacing: '-0.01em' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'hsl(4 80% 38%)'; el.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'hsl(4 80% 45%)'; el.style.transform = 'translateY(0)'; }}
          >
            <Send size={17} />
            {t('contact.btn')}
          </a>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 44, flexWrap: 'wrap' }}>
            {[
              { icon: <ShieldCheck size={14} />, label: t('contact.note').split(' • ')[1] || 'Безопасные депозиты' },
              { icon: <Zap size={14} />, label: t('contact.note').split(' • ')[2] || 'Мгновенные выводы' },
            ].map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--text-faint)', fontSize: 13 }}>
                <span style={{ color: 'hsl(4 80% 45%)' }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
