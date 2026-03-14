import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const REFERRAL = '3383-3619';

const CLUBS = [
  { name: 'MOJO 2: Massiv Poker Union', id: '799798', main: true },
  { name: 'MOJO 1', id: '356323', main: false },
];

function CopyBtn({ value, label, copiedLabel }: { value: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const click = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={click} style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '5px 11px', borderRadius: 4, cursor: 'pointer',
      border: `1px solid ${copied ? 'rgba(34,197,94,0.35)' : 'rgba(255,255,255,0.12)'}`,
      background: copied ? 'rgba(34,197,94,0.07)' : 'transparent',
      color: copied ? '#22c55e' : 'rgba(255,255,255,0.4)',
      fontSize: 11, fontWeight: 600, transition: 'all 0.15s',
    }}>
      {copied ? <><CheckCircle2 size={11} /> {copiedLabel}</> : <><Copy size={11} /> {label}</>}
    </button>
  );
}

export function JoinGuide() {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  interface StepDef {
    num: number;
    title: { ru: string; en: string };
    desc: { ru: string; en: string };
    img?: string;
    extra?: 'clubs' | 'referral' | 'telegram';
    note?: { ru: string; en: string };
  }

  const steps: StepDef[] = [
    {
      num: 1,
      title: { ru: 'Откройте раздел «Клубы» в приложении', en: 'Open the "Clubs" section in the app' },
      desc: {
        ru: 'Запустите ClubGG и войдите в аккаунт. На главном экране вы увидите строку «Поиск Клуба» вверху — нажмите на неё. Это откроет форму поиска клуба.',
        en: 'Launch ClubGG and sign in. On the main screen you\'ll see a "Search Club" bar at the top — tap it. This opens the club search form.',
      },
      img: '/images/join/step1-search.png',
    },
    {
      num: 2,
      title: { ru: 'Введите ID клуба и ID реферера', en: 'Enter the Club ID and Referrer ID' },
      desc: {
        ru: 'Перед вами откроется форма с двумя полями:\n\n• Поле «ID клуба» — введите ID нужного клуба из списка ниже\n• Поле «ID реферера» — обязательно укажите реферальный код MOJO, чтобы нас нашли и одобрили вашу заявку\n\nПосле заполнения обоих полей нажмите «Подтвердить».',
        en: 'A form with two fields will open:\n\n• "Club ID" field — enter the ID of the desired club from the list below\n• "Referrer ID" field — enter the MOJO referral code so we can find you and approve your request\n\nAfter filling both fields tap "Confirm".',
      },
      img: '/images/join/step2-form-empty.png',
      extra: 'clubs',
    },
    {
      num: 3,
      title: { ru: 'Форма заполнена — нажмите «Подтвердить»', en: 'Form filled — tap "Confirm"' },
      desc: {
        ru: 'Убедитесь, что оба поля заполнены: Club ID и ID реферера (3383-3619). После этого кнопка «Подтвердить» станет активной — нажмите её.',
        en: 'Make sure both fields are filled: Club ID and Referrer ID (3383-3619). Once done, the "Confirm" button becomes active — tap it.',
      },
      img: '/images/join/step3-form-filled.png',
      note: {
        ru: 'Если кнопка «Подтвердить» не активна — проверьте, что оба поля заполнены.',
        en: 'If the "Confirm" button is not active — check that both fields are filled.',
      },
    },
    {
      num: 4,
      title: { ru: 'Страница клуба — нажмите «Присоединиться»', en: 'Club page — tap "Join"' },
      desc: {
        ru: 'Появится страница клуба MOJO. Вы увидите:\n\n• Название клуба и его ID\n• Количество членов клуба\n• Поле «Информация для проверки» — напишите туда краткое приветствие, например: «Привет! Я [ваш никнейм]»\n\nПосле этого нажмите зелёную кнопку «Присоединиться» внизу экрана.',
        en: 'The MOJO club page appears. You\'ll see:\n\n• Club name and ID\n• Number of members\n• "Verification info" field — write a short greeting, e.g. "Hi! I\'m [your nickname]"\n\nThen tap the green "Join" button at the bottom of the screen.',
      },
      img: '/images/join/step4-join.png',
      note: {
        ru: 'Заполните поле «Информация для проверки» — это ускорит одобрение заявки.',
        en: 'Fill in the "Verification info" field — this speeds up approval.',
      },
    },
    {
      num: 5,
      title: { ru: 'Напишите менеджеру в Telegram', en: 'Message the manager on Telegram' },
      desc: {
        ru: 'Заявка отправлена — теперь напишите менеджеру @Mojo_Adm в Telegram. Укажите:\n\n• Ваш никнейм в ClubGG\n• В какой клуб хотите вступить (MOJO 1 или MOJO 2)\n\nОбычно одобрение приходит в течение нескольких минут. Менеджер может задать дополнительные вопросы.',
        en: 'Request sent — now message manager @Mojo_Adm on Telegram. Include:\n\n• Your ClubGG nickname\n• Which club you want to join (MOJO 1 or MOJO 2)\n\nApproval usually takes just a few minutes. The manager may ask a few questions.',
      },
      extra: 'telegram',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <PageHeader
        label={isRu ? 'Вступление в клуб' : 'Join the Club'}
        title={isRu ? 'Как вступить в клуб MOJO' : 'How to Join MOJO Club'}
        subtitle={isRu
          ? 'Пошаговая инструкция — весь процесс занимает около 3 минут'
          : 'Step-by-step guide — the whole process takes about 3 minutes'}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: isRu ? 'Как вступить' : 'How to Join' },
        ]}
      />

      <main style={{ flex: 1, padding: '80px 0 100px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px' }}>

          {steps.map((step, idx) => (
            <div key={step.num} style={{ marginBottom: idx < steps.length - 1 ? 80 : 0 }}>

              {/* Step header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'hsl(4 80% 45%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: 13, fontWeight: 800, color: 'white',
                }}>
                  {step.num}
                </div>
                <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {isRu ? step.title.ru : step.title.en}
                </h2>
              </div>

              {/* Content */}
              <div style={{ paddingLeft: 52 }}>

                {/* Description with line breaks */}
                <div style={{ marginBottom: 24 }}>
                  {(isRu ? step.desc.ru : step.desc.en).split('\n').map((line, i) => (
                    line === '' ? <div key={i} style={{ height: 8 }} /> :
                    line.startsWith('•') ? (
                      <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6 }}>
                        <span style={{ color: 'hsl(4 80% 45%)', flexShrink: 0, marginTop: 2 }}>•</span>
                        <span style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>
                          {line.slice(2)}
                        </span>
                      </div>
                    ) : (
                      <p key={i} style={{ margin: '0 0 8px', fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>
                        {line}
                      </p>
                    )
                  ))}
                </div>

                {/* Club IDs extra */}
                {step.extra === 'clubs' && (
                  <div style={{ marginBottom: 24 }}>
                    <p style={{ margin: '0 0 10px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                      {isRu ? 'ID клубов' : 'Club IDs'}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                      {CLUBS.map(club => (
                        <div key={club.id} style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '14px 18px', borderRadius: 6,
                          background: club.main ? 'rgba(255,255,255,0.04)' : 'transparent',
                          border: `1px solid ${club.main ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)'}`,
                          gap: 12, flexWrap: 'wrap',
                        }}>
                          <div>
                            <p style={{ margin: '0 0 2px', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
                              {club.main ? (isRu ? 'Рекомендуем' : 'Recommended') : ''}
                            </p>
                            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{club.name}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <span style={{ fontSize: 18, fontWeight: 800, color: 'white', fontVariantNumeric: 'tabular-nums' }}>{club.id}</span>
                            <CopyBtn value={club.id} label={isRu ? 'Копировать' : 'Copy'} copiedLabel={isRu ? 'Скопировано' : 'Copied'} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Referral */}
                    <p style={{ margin: '0 0 10px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                      {isRu ? 'ID реферера (обязательно)' : 'Referrer ID (required)'}
                    </p>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '14px 18px', borderRadius: 6,
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      gap: 12,
                    }}>
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                        {isRu ? 'Реферальный код MOJO' : 'MOJO Referral Code'}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: 18, fontWeight: 800, color: 'white', fontVariantNumeric: 'tabular-nums' }}>{REFERRAL}</span>
                        <CopyBtn value={REFERRAL} label={isRu ? 'Копировать' : 'Copy'} copiedLabel={isRu ? 'Скопировано' : 'Copied'} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Telegram extra */}
                {step.extra === 'telegram' && (
                  <a
                    href="https://t.me/Mojo_Adm"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24,
                      padding: '13px 22px', borderRadius: 4, textDecoration: 'none',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'white', fontSize: 14, fontWeight: 600,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.886l-1.872 8.82c-.14.62-.503.77-.995.48l-2.75-2.026-1.328 1.278c-.147.147-.27.27-.553.27l.196-2.79 5.088-4.597c.221-.196-.048-.305-.344-.11l-6.29 3.96-2.713-.85c-.59-.184-.602-.59.123-.872l10.582-4.08c.49-.178.92.108.856.517z" fill="#229ED9"/>
                    </svg>
                    @Mojo_Adm
                  </a>
                )}

                {/* Note */}
                {step.note && (
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: 6,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderLeft: '3px solid hsl(4 80% 45%)',
                    marginBottom: 24,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.6,
                  }}>
                    {isRu ? step.note.ru : step.note.en}
                  </div>
                )}

                {/* Screenshot */}
                {step.img && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{
                      borderRadius: 16,
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
                      display: 'inline-block',
                    }}>
                      <img
                        src={step.img}
                        alt={isRu ? step.title.ru : step.title.en}
                        style={{ width: 320, height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              {idx < steps.length - 1 && (
                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '80px 0 0' }} />
              )}
            </div>
          ))}

        </div>
      </main>
      <Footer />
    </div>
  );
}
