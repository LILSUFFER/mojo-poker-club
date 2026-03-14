import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'wouter';
import { Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const CLUBS = [
  { name: 'MOJO 2: Massiv Poker Union', id: '799798' },
  { name: 'MOJO 1', id: '356323' },
];

export function JoinGuide() {
  const { language } = useLanguage();
  const isRu = language === 'ru';
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const steps = isRu ? [
    {
      n: '01',
      title: 'Откройте ClubGG',
      body: 'Запустите приложение ClubGG и войдите в свой аккаунт. Если у вас ещё нет аккаунта — зарегистрируйтесь: потребуется электронная почта и никнейм.',
    },
    {
      n: '02',
      title: 'Перейдите в раздел «Клубы»',
      body: 'В нижнем меню приложения нажмите на иконку «Клубы». Вы увидите список доступных клубов и кнопку поиска.',
    },
    {
      n: '03',
      title: 'Введите Club ID',
      body: 'Нажмите на иконку поиска (лупа) в правом верхнем углу, введите нужный Club ID и нажмите «Найти». Выберите клуб из результатов.',
      extra: 'club-ids',
    },
    {
      n: '04',
      title: 'Нажмите «Запросить вступление»',
      body: 'На странице клуба нажмите кнопку «Вступить» или «Запросить». Ваша заявка отправится менеджеру клуба на рассмотрение.',
    },
    {
      n: '05',
      title: 'Напишите менеджеру в Telegram',
      body: 'Чтобы заявку одобрили быстро — напишите @Mojo_Adm в Telegram. Укажите свой никнейм в ClubGG и в какой клуб хотите вступить. Обычно одобрение приходит в течение нескольких минут.',
      extra: 'telegram',
    },
  ] : [
    {
      n: '01',
      title: 'Open ClubGG',
      body: "Launch the ClubGG app and sign in. No account yet? Tap 'Register' and enter your email and nickname.",
    },
    {
      n: '02',
      title: 'Go to the Clubs section',
      body: 'Tap the "Clubs" icon in the bottom navigation menu. You will see a list of available clubs and a search button.',
    },
    {
      n: '03',
      title: 'Enter the Club ID',
      body: 'Tap the search icon (magnifier) in the top right corner, enter the Club ID and tap "Search". Select the club from the results.',
      extra: 'club-ids',
    },
    {
      n: '04',
      title: 'Tap "Request to Join"',
      body: 'On the club page tap the "Join" or "Request" button. Your application will be sent to the club manager for review.',
    },
    {
      n: '05',
      title: 'Message the manager on Telegram',
      body: 'For quick approval — message @Mojo_Adm on Telegram. Share your ClubGG nickname and which club you want to join. Approval usually takes just a few minutes.',
      extra: 'telegram',
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
            <span>{isRu ? 'Как вступить' : 'How to Join'}</span>
          </div>

          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 16 }}>
            /// {isRu ? 'Вступление в клуб' : 'Joining the Club'}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            {isRu ? 'Как вступить в клуб MOJO' : 'How to Join MOJO Club'}
          </h1>
          <p style={{ fontSize: 15, color: 'var(--text-faint)', lineHeight: 1.7, marginBottom: 64, maxWidth: 560 }}>
            {isRu
              ? 'Весь процесс занимает около 5 минут. Следуйте шагам ниже и вы уже за столом.'
              : 'The whole process takes about 5 minutes. Follow the steps below and you\'ll be at the table in no time.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                style={{ display: 'flex', gap: 24, paddingBottom: i < steps.length - 1 ? 36 : 0, position: 'relative' }}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div style={{ position: 'absolute', left: 19, top: 44, width: 1, height: 'calc(100% - 8px)', background: 'var(--border-subtle)' }} />
                )}

                {/* Circle */}
                <div style={{
                  flexShrink: 0, width: 40, height: 40, borderRadius: '50%',
                  border: '1px solid var(--border-subtle)', background: 'var(--bg-card)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', zIndex: 1,
                }}>
                  {step.n}
                </div>

                {/* Content */}
                <div style={{ paddingTop: 8, flex: 1 }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{step.title}</div>
                  <p style={{ fontSize: 14, color: 'var(--text-faint)', lineHeight: 1.7, margin: 0 }}>{step.body}</p>

                  {/* Extra: Club IDs */}
                  {step.extra === 'club-ids' && (
                    <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {CLUBS.map(club => (
                        <div key={club.id} style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '12px 16px', borderRadius: 6,
                          background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                          gap: 12,
                        }}>
                          <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>{club.name}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', fontVariantNumeric: 'tabular-nums' }}>{club.id}</span>
                            <button
                              onClick={() => copy(club.id, club.id)}
                              style={{
                                display: 'flex', alignItems: 'center', gap: 5,
                                padding: '5px 10px', borderRadius: 4, cursor: 'pointer',
                                border: `1px solid ${copied === club.id ? 'rgba(34,197,94,0.35)' : 'var(--border-subtle)'}`,
                                background: copied === club.id ? 'rgba(34,197,94,0.07)' : 'transparent',
                                color: copied === club.id ? '#22c55e' : 'var(--text-faint)',
                                fontSize: 11, fontWeight: 600,
                              }}
                            >
                              {copied === club.id
                                ? <><CheckCircle2 size={11} /> {isRu ? 'Скопировано' : 'Copied'}</>
                                : <><Copy size={11} /> {isRu ? 'Копировать' : 'Copy'}</>}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Extra: Telegram */}
                  {step.extra === 'telegram' && (
                    <a
                      href="https://t.me/Mojo_Adm"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16,
                        fontSize: 13, fontWeight: 600, color: 'var(--text)',
                        border: '1px solid rgba(255,255,255,0.18)',
                        borderRadius: 4, padding: '10px 18px', textDecoration: 'none',
                      }}
                    >
                      @Mojo_Adm →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
