import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'wouter';

export function InstallGuide() {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  const platforms = isRu ? [
    {
      name: 'Android',
      steps: [
        'Скачайте APK-файл с нашей страницы загрузки.',
        'Откройте «Настройки» → «Безопасность» (или «Приложения») и включите «Установка из неизвестных источников» для своего браузера или файлового менеджера.',
        'Откройте скачанный APK-файл и нажмите «Установить».',
        'После установки откройте ClubGG и войдите или создайте аккаунт.',
      ],
      note: 'На некоторых устройствах путь к настройкам может отличаться. Если система запросит подтверждение — нажмите «Разрешить».',
    },
    {
      name: 'iOS (iPhone / iPad)',
      steps: [
        'Перейдите по нашей ссылке — откроется App Store со страницей приложения ClubGG.',
        'Нажмите «Загрузить» и дождитесь установки.',
        'Откройте приложение и войдите или создайте аккаунт.',
      ],
      note: 'Для загрузки нужен Apple ID. Если приложение не появляется в вашем регионе — используйте иностранный App Store.',
    },
    {
      name: 'PC (Windows)',
      steps: [
        'Скачайте установщик (.exe) с нашей страницы загрузки.',
        'Запустите скачанный файл. Если Windows SmartScreen показывает предупреждение — нажмите «Подробнее» → «Всё равно выполнить».',
        'Следуйте инструкциям установщика и нажмите «Установить».',
        'После установки запустите ClubGG с рабочего стола.',
      ],
      note: 'Требуется Windows 10 или новее. Убедитесь, что у вас достаточно места на диске.',
    },
  ] : [
    {
      name: 'Android',
      steps: [
        'Download the APK file from our download page.',
        'Open Settings → Security (or Apps) and enable "Install from Unknown Sources" for your browser or file manager.',
        'Open the downloaded APK and tap "Install".',
        'Once installed, open ClubGG and sign in or register.',
      ],
      note: 'The exact path may vary by device. If prompted by the system, tap "Allow".',
    },
    {
      name: 'iOS (iPhone / iPad)',
      steps: [
        'Follow our link — it will open the App Store page for ClubGG.',
        'Tap "Get" and wait for installation to complete.',
        'Open the app and sign in or create an account.',
      ],
      note: 'An Apple ID is required. If the app is not available in your region, try a foreign App Store account.',
    },
    {
      name: 'PC (Windows)',
      steps: [
        'Download the installer (.exe) from our download page.',
        'Run the downloaded file. If Windows SmartScreen shows a warning, click "More info" → "Run anyway".',
        'Follow the installer instructions and click "Install".',
        'After installation, launch ClubGG from your desktop.',
      ],
      note: 'Requires Windows 10 or later. Make sure you have enough disk space.',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '100px 0 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40, fontSize: 12, color: 'var(--text-faint)' }}>
            <Link href="/" style={{ color: 'var(--text-faint)', textDecoration: 'none' }}>
              {isRu ? 'Главная' : 'Home'}
            </Link>
            <span>/</span>
            <span>{isRu ? 'Установка' : 'Install'}</span>
          </div>

          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 16 }}>
            /// {isRu ? 'Установка приложения' : 'App Installation'}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            {isRu ? 'Как установить ClubGG' : 'How to Install ClubGG'}
          </h1>
          <p style={{ fontSize: 15, color: 'var(--text-faint)', lineHeight: 1.7, marginBottom: 64, maxWidth: 560 }}>
            {isRu
              ? 'Выберите свою платформу и следуйте пошаговой инструкции — установка занимает меньше минуты.'
              : 'Choose your platform and follow the step-by-step guide — installation takes less than a minute.'}
          </p>

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
                      <span style={{ fontWeight: 700, marginRight: 6 }}>{isRu ? 'Примечание:' : 'Note:'}</span>
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
                {isRu ? 'Приложение установлено?' : 'App installed?'}
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-faint)' }}>
                {isRu ? 'Следующий шаг — найти клуб и вступить.' : 'Next step — find the club and join.'}
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
              {isRu ? 'Как вступить →' : 'How to Join →'}
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
