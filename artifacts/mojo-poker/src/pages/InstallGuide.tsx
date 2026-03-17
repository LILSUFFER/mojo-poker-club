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
        langs={{
          ru: { title: "Как установить ClubGG — инструкция MOJO", description: "Пошаговая инструкция по установке приложения ClubGG на Android, iPhone и Windows. Скачать APK, App Store или EXE — всё в одном месте.", keywords: "установить ClubGG, ClubGG APK, скачать GGClub, ClubGG iPhone" },
          en: { title: "How to Install ClubGG — MOJO Guide", description: "Step-by-step guide to installing the ClubGG app on Android, iPhone and Windows. Download APK, App Store or EXE — all in one place.", keywords: "install ClubGG, ClubGG APK, download GGClub, ClubGG iPhone" },
          es: { title: "Cómo instalar ClubGG — Guía MOJO", description: "Guía paso a paso para instalar la app ClubGG en Android, iPhone y Windows. Descargar APK, App Store o EXE — todo en un solo lugar." },
          de: { title: "ClubGG installieren — MOJO-Anleitung", description: "Schritt-für-Schritt-Anleitung zur Installation der ClubGG-App auf Android, iPhone und Windows. APK, App Store oder EXE herunterladen — alles an einem Ort." },
          fr: { title: "Comment installer ClubGG — Guide MOJO", description: "Guide étape par étape pour installer l'application ClubGG sur Android, iPhone et Windows. Télécharger APK, App Store ou EXE — tout en un seul endroit." },
          it: { title: "Come installare ClubGG — Guida MOJO", description: "Guida passo passo per installare l'app ClubGG su Android, iPhone e Windows. Scarica APK, App Store o EXE — tutto in un unico posto." },
          pt: { title: "Como instalar o ClubGG — Guia MOJO", description: "Guia passo a passo para instalar o aplicativo ClubGG no Android, iPhone e Windows. Baixar APK, App Store ou EXE — tudo em um só lugar." },
          ar: { title: "كيفية تثبيت ClubGG — دليل MOJO", description: "دليل خطوة بخطوة لتثبيت تطبيق ClubGG على Android وiPhone وWindows. تنزيل APK أو App Store أو EXE — كل شيء في مكان واحد." },
          hi: { title: "ClubGG कैसे इंस्टॉल करें — MOJO गाइड", description: "Android, iPhone और Windows पर ClubGG ऐप इंस्टॉल करने के लिए चरण-दर-चरण गाइड। APK, App Store या EXE डाउनलोड करें — सब एक जगह।" },
          fa: { title: "نحوه نصب ClubGG — راهنمای MOJO", description: "راهنمای گام به گام نصب اپلیکیشن ClubGG در Android، iPhone و Windows. دانلود APK، App Store یا EXE — همه در یک مکان." },
          tr: { title: "ClubGG Nasıl Kurulur — MOJO Rehberi", description: "Android, iPhone ve Windows'ta ClubGG uygulamasını yüklemek için adım adım kılavuz. APK, App Store veya EXE indirin — hepsi tek bir yerde." },
          az: { title: "ClubGG necə qurulur — MOJO Bələdçisi", description: "Android, iPhone və Windows-da ClubGG tətbiqini qurmaq üçün addım-addım bələdçi. APK, App Store və ya EXE yükləyin — hamısı bir yerdə." },
          zh: { title: "如何安装 ClubGG — MOJO 指南", description: "逐步安装 ClubGG 应用的指南，适用于 Android、iPhone 和 Windows。下载 APK、App Store 或 EXE — 一切尽在一处。" },
          ja: { title: "ClubGGのインストール方法 — MOJOガイド", description: "Android、iPhone、WindowsでClubGGアプリをインストールするためのステップバイステップガイド。APK、App Store、またはEXEをダウンロード — すべて一か所で。" },
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
