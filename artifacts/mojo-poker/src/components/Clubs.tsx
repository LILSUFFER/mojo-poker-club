import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';

const REF_CODE = '3383-3619';

export function Clubs() {
  const { t, language } = useLanguage();
  const isRu = language === 'ru';
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const clubs = [
    {
      id: 'massiv',
      clubId: '799798',
      name: t('clubs.massiv.name'),
      desc: t('clubs.massiv.desc'),
      features: [t('clubs.massiv.feature1'), t('clubs.massiv.feature2'), t('clubs.massiv.feature3')],
      logo: '/images/mojo2-logo.png',
      logoBg: '#ffffff',
      logoLabel: 'MOJO: Massiv Poker Union',
      logoLabelColor: '#111111',
      members: '698',
      tables: '255',
      badge: '🇺🇸 Union',
      geoWarning: true,
    },
    {
      id: 'mojo1',
      clubId: '356323',
      name: t('clubs.mojo.name'),
      desc: t('clubs.mojo.desc'),
      features: [t('clubs.mojo.feature1'), t('clubs.mojo.feature2'), t('clubs.mojo.feature3')],
      logo: '/images/mojo1-logo.png',
      logoBg: '#222222',
      logoLabel: 'MOJO',
      logoLabelColor: 'rgba(255,255,255,0.55)',
      members: '62',
      tables: '58',
      badge: null,
      geoWarning: false,
    },
  ];

  const steps = isRu ? [
    { n: '01', title: 'Скачать ClubGG', desc: 'Скачайте приложение ClubGG Poker для вашего устройства.', link: '/download', linkLabel: 'Страница загрузки' },
    { n: '02', title: 'Установить приложение', desc: 'Запустите установщик и следуйте инструкциям на экране.', link: '/install', linkLabel: 'Инструкция по установке' },
    { n: '03', title: 'Найти клуб по ID', desc: 'Войдите в приложение, перейдите в «Клубы» и введите Club ID.', link: '/join', linkLabel: 'Как вступить' },
    { n: '04', title: 'Написать менеджеру', desc: 'Напишите @Mojo_Adm в Telegram — вас одобрят быстро.', link: 'https://t.me/Mojo_Adm', linkLabel: '@Mojo_Adm', external: true },
  ] : [
    { n: '01', title: 'Download ClubGG', desc: 'Get the ClubGG Poker app for your device.', link: '/download', linkLabel: 'Download page' },
    { n: '02', title: 'Install the App', desc: 'Run the installer and follow the on-screen instructions.', link: '/install', linkLabel: 'Install guide' },
    { n: '03', title: 'Find Club by ID', desc: 'Sign in, go to Clubs section, and enter the Club ID.', link: '/join', linkLabel: 'How to join' },
    { n: '04', title: 'Message the Manager', desc: 'Contact @Mojo_Adm on Telegram for quick approval.', link: 'https://t.me/Mojo_Adm', linkLabel: '@Mojo_Adm', external: true },
  ];

  const CopyButton = ({ val, copyKey, label }: { val: string; copyKey: string; label: string }) => {
    const isCopied = copied === copyKey;
    return (
      <button
        onClick={() => copy(val, copyKey)}
        style={{
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '6px 12px', borderRadius: 4, cursor: 'pointer',
          border: `1px solid ${isCopied ? 'rgba(34,197,94,0.35)' : 'var(--border-subtle)'}`,
          background: isCopied ? 'rgba(34,197,94,0.07)' : 'transparent',
          color: isCopied ? '#22c55e' : 'var(--text-faint)',
          fontSize: 11, fontWeight: 600, transition: 'all 0.2s',
        }}
        onMouseEnter={e => { if (!isCopied) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.2)'; el.style.color = 'var(--text-muted)'; } }}
        onMouseLeave={e => { if (!isCopied) { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-subtle)'; el.style.color = 'var(--text-faint)'; } }}
      >
        {isCopied ? <><CheckCircle2 size={11} /> {t('clubs.copied')}</> : <><Copy size={11} /> {label}</>}
      </button>
    );
  };

  return (
    <section id="clubs" style={{ padding: '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 16 }}>
            /// {t('clubs.title')}
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-0.025em' }}>
            {t('clubs.subtitle')}
          </h2>
        </div>

        {/* Two-column: cards left, how-to-join right */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 32, alignItems: 'start' }}>

          {/* ── LEFT: Club cards ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {clubs.map((club, i) => (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-card)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 8,
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'; }}
              >
                {/* Logo area */}
                <div style={{ position: 'relative', background: club.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 32px', minHeight: 180 }}>
                  <img src={club.logo} alt={club.name} style={{ width: '100%', maxWidth: 220, height: 'auto', display: 'block', objectFit: 'contain' }} />
                  {club.badge && (
                    <div style={{ position: 'absolute', top: 12, right: 12 }}>
                      <img src="/images/union-badge-orig.png" alt="Union" style={{ width: 48, height: 48, objectFit: 'contain', borderRadius: 6, display: 'block' }} />
                    </div>
                  )}
                </div>

                <div style={{ height: 1, background: 'var(--border-subtle)' }} />

                {/* Body */}
                <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>

                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0 }}>
                    {club.logoLabel}
                  </h3>

                  {/* Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    {[
                      { icon: '/images/icon-users.png', val: club.members, label: t('clubs.members') },
                      { icon: '/images/icon-table.png', val: club.tables, label: t('clubs.tables') },
                    ].map(({ icon, val, label }) => (
                      <div key={label} style={{ padding: '10px 12px', borderRadius: 6, background: 'var(--bg)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <img src={icon} alt="" style={{ width: 16, height: 16, objectFit: 'contain' }} />
                        <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>{val}</span>
                        <span style={{ fontSize: 9, fontWeight: 600, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Club ID + Ref Code */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    <div style={{ padding: '10px 12px', borderRadius: 6, background: 'var(--bg)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 6 }}>Club ID</div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', fontVariantNumeric: 'tabular-nums' }}>{club.clubId}</span>
                        <CopyButton val={club.clubId} copyKey={`id-${club.id}`} label={isRu ? 'Копировать' : 'Copy'} />
                      </div>
                    </div>
                    <div style={{ padding: '10px 12px', borderRadius: 6, background: 'var(--bg)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 6 }}>
                        {isRu ? 'Реф. код' : 'Ref Code'}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', fontVariantNumeric: 'tabular-nums' }}>{REF_CODE}</span>
                        <CopyButton val={REF_CODE} copyKey={`ref-${club.id}`} label={isRu ? 'Копировать' : 'Copy'} />
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 'auto' }}>
                    {club.features.map((f, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 1, height: 12, background: 'var(--border-color)', flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* GEO warning for Massiv */}
                  {club.geoWarning && (
                    <div style={{
                      marginTop: 12,
                      padding: '10px 12px',
                      borderRadius: 6,
                      background: 'rgba(234,179,8,0.06)',
                      border: '1px solid rgba(234,179,8,0.22)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                        <span style={{ fontSize: 13, lineHeight: 1 }}>⚠️</span>
                        <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(234,179,8,0.9)', lineHeight: 1.45 }}>
                          {isRu
                            ? 'Требуется ГЕО: аккаунт нужно создавать с определёнными данными — иначе блокировка.'
                            : 'GEO required: account must be created with specific details — otherwise you risk a ban.'}
                        </span>
                      </div>
                      <Link
                        href="/massiv-guide"
                        style={{
                          fontSize: 11, fontWeight: 700,
                          color: 'rgba(234,179,8,0.75)',
                          textDecoration: 'none',
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                        }}
                      >
                        {isRu ? 'Как правильно создать аккаунт →' : 'How to create account correctly →'}
                      </Link>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>

          {/* ── RIGHT: How to Join ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ position: 'sticky', top: 100 }}
          >
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 20 }}>
              /// {isRu ? 'Как вступить' : 'How to Join'}
            </div>
            <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 32 }}>
              {isRu ? 'Начните играть\nза считанные минуты' : 'Start Playing\nin Minutes'}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  style={{ display: 'flex', gap: 20, paddingBottom: i < steps.length - 1 ? 28 : 0, position: 'relative' }}
                >
                  {/* Line connector */}
                  {i < steps.length - 1 && (
                    <div style={{ position: 'absolute', left: 19, top: 40, width: 1, height: 'calc(100% - 12px)', background: 'var(--border-subtle)' }} />
                  )}

                  {/* Number circle */}
                  <div style={{
                    flexShrink: 0,
                    width: 40, height: 40,
                    borderRadius: '50%',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-card)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700, color: 'var(--text-muted)',
                    letterSpacing: '0.05em',
                    zIndex: 1,
                  }}>
                    {step.n}
                  </div>

                  {/* Text */}
                  <div style={{ paddingTop: 8 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{step.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-faint)', lineHeight: 1.6, marginBottom: step.link ? 10 : 0 }}>{step.desc}</div>
                    {step.link && (
                      step.external ? (
                        <a
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                        >
                          {step.linkLabel} →
                        </a>
                      ) : (
                        <Link
                          href={step.link}
                          style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                        >
                          {step.linkLabel} →
                        </Link>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://t.me/Mojo_Adm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 32,
                fontSize: 13, fontWeight: 600, color: 'var(--text)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: 4, padding: '12px 22px',
                textDecoration: 'none', transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.35)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.18)'; }}
            >
              @Mojo_Adm →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
