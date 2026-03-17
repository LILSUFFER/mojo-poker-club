import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { Link } from 'wouter';
import SEO from '@/components/SEO';

export function InstallGuide() {
  const { language, t } = useLanguage();

  const platforms = [
    {
      name: 'Android',
      steps: [
        t('pages.install.android1'),
        t('pages.install.android2'),
        t('pages.install.android3'),
        t('pages.install.android4'),
      ],
      note: t('pages.install.androidNote'),
    },
    {
      name: 'iOS (iPhone / iPad)',
      steps: [
        t('pages.install.ios1'),
        t('pages.install.ios2'),
        t('pages.install.ios3'),
      ],
      note: t('pages.install.iosNote'),
    },
    {
      name: 'PC (Windows)',
      steps: [
        t('pages.install.pc1'),
        t('pages.install.pc2'),
        t('pages.install.pc3'),
        t('pages.install.pc4'),
      ],
      note: t('pages.install.pcNote'),
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <SEO
        canonical="/install"
        ru={{
          title: 'Как установить ClubGG — MOJO Poker Club',
          description: 'Пошаговая инструкция по установке ClubGG на Android, iPhone и Windows. Установка занимает меньше минуты.',
          keywords: 'установить ClubGG, ClubGG APK, ClubGG iOS App Store, ClubGG Windows установка',
        }}
        en={{
          title: 'How to Install ClubGG — MOJO Poker Club',
          description: 'Step-by-step guide to install ClubGG on Android, iPhone and Windows. Installation takes less than a minute.',
          keywords: 'install ClubGG, ClubGG APK, ClubGG iOS App Store, ClubGG Windows setup',
        }}
      />
      <Navbar />
      <PageHeader
        label={t('pages.install.label')}
        title={t('pages.install.title')}
        subtitle={t('pages.install.subtitle')}
        breadcrumbs={[
          { label: t('pages.home'), href: '/' },
          { label: t('pages.install.label') },
        ]}
      />
      <main style={{ flex: 1, padding: '60px 0 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {platforms.map((platform, pi) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pi * 0.08 }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 16 }}>
                  {platform.name}
                </div>
                <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 8, overflow: 'hidden', background: 'var(--bg-card)' }}>
                  {platform.steps.map((step, si) => (
                    <div
                      key={si}
                      style={{
                        display: 'flex', gap: 20, padding: '20px 24px',
                        borderBottom: si < platform.steps.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                      }}
                    >
                      <div style={{
                        flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                        background: 'var(--bg)', border: '1px solid var(--border-subtle)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 700, color: 'var(--text-muted)',
                      }}>
                        {si + 1}
                      </div>
                      <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.65, margin: 0, paddingTop: 4 }}>
                        {step}
                      </p>
                    </div>
                  ))}
                  {/* Note */}
                  <div style={{ padding: '16px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-subtle)' }}>
                    <p style={{ fontSize: 12, color: 'var(--text-faint)', lineHeight: 1.6, margin: 0 }}>
                      <span style={{ fontWeight: 700, marginRight: 6 }}>{t('pages.install.noteLabel')}</span>
                      {platform.note}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next step CTA */}
          <div style={{ marginTop: 64, padding: '32px', borderRadius: 8, border: '1px solid var(--border-subtle)', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
                {t('pages.install.installedQ')}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-faint)' }}>
                {t('pages.install.installedSub')}
              </div>
            </div>
            <Link
              href="/join"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 13, fontWeight: 600, color: 'var(--text)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: 4, padding: '12px 22px',
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}
            >
              {t('pages.install.joinBtn')}
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
