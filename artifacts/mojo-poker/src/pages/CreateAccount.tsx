import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

interface Step {
  num: string;
  title: { ru: string; en: string };
  desc: { ru: string; en: string };
  img: string;
  tip?: { ru: string; en: string };
}

const steps: Step[] = [
  {
    num: '01',
    title: { ru: 'Откройте приложение', en: 'Open the App' },
    desc: {
      ru: 'Запустите ClubGG. На главном экране нажмите кнопку «Присоединиться» — она откроет форму регистрации.',
      en: 'Launch ClubGG. On the main screen tap "Join" — it will open the registration form.',
    },
    img: '/images/account/step1-start.png',
  },
  {
    num: '02',
    title: { ru: 'Введите email', en: 'Enter your Email' },
    desc: {
      ru: 'Откроется форма GGPass. Введите адрес электронной почты или войдите через Google, Facebook или Apple. Нажмите «Далее».',
      en: 'The GGPass form opens. Enter your email address or sign in via Google, Facebook, or Apple. Tap "Next".',
    },
    img: '/images/account/step2-email.png',
  },
  {
    num: '03',
    title: { ru: 'Подтвердите email', en: 'Verify your Email' },
    desc: {
      ru: 'На вашу почту придёт 4-значный код. Введите его в поля. Если код не пришёл — проверьте папку «Спам» или запросите повторно.',
      en: 'A 4-digit code will be sent to your email. Enter it in the fields. If no code arrived, check Spam or request again.',
    },
    img: '/images/account/step3-verify.png',
  },
  {
    num: '04',
    title: { ru: 'Установите пароль', en: 'Set a Password' },
    desc: {
      ru: 'Придумайте пароль: от 8 до 20 символов, минимум одна цифра. Введите дважды для подтверждения.',
      en: 'Create a password: 8–20 characters, at least one digit. Enter it twice to confirm.',
    },
    img: '/images/account/step4-password.png',
    tip: {
      ru: 'Пароль должен быть от 8 до 20 символов и содержать хотя бы одну цифру',
      en: 'Password must be 8–20 characters and contain at least one digit',
    },
  },
  {
    num: '05',
    title: { ru: 'Создайте профиль', en: 'Create your Profile' },
    desc: {
      ru: 'Выберите аватар, страну и придумайте никнейм (4–15 символов, только латиница, цифры и _ ! - ! @ ). Нажмите «Далее».',
      en: 'Choose an avatar, country, and create a nickname (4–15 characters, latin, digits and _ ! - ! @ only). Tap "Next".',
    },
    img: '/images/account/step5-profile.png',
  },
  {
    num: '06',
    title: { ru: 'Примите условия', en: 'Accept Terms' },
    desc: {
      ru: 'Ознакомьтесь с Условиями обслуживания и Политикой конфиденциальности. Поставьте галочку и нажмите «Подтвердить».',
      en: 'Review the Terms of Service and Privacy Policy. Check the box and tap "Confirm".',
    },
    img: '/images/account/step6-terms.png',
  },
  {
    num: '07',
    title: { ru: 'Готово — вы в ClubGG!', en: 'Done — You\'re in ClubGG!' },
    desc: {
      ru: 'Аккаунт создан. Теперь найдите клуб MOJO через строку поиска, введите Club ID и отправьте заявку на вступление.',
      en: 'Account created. Now find the MOJO club via the search bar, enter the Club ID and send a join request.',
    },
    img: '/images/account/step7-done.png',
  },
];

export function CreateAccount() {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <PageHeader
        label={isRu ? 'Создание аккаунта' : 'Create Account'}
        title={isRu ? 'Как создать аккаунт GGClub' : 'How to Create a GGClub Account'}
        subtitle={isRu
          ? 'Пошаговая инструкция с реальными скриншотами из приложения'
          : 'Step-by-step guide with real screenshots from the app'}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: isRu ? 'Как вступить' : 'How to Join', href: '/join' },
          { label: isRu ? 'Создание аккаунта' : 'Create Account' },
        ]}
      />

      <main style={{ flex: 1, padding: '72px 0 100px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 48px' }}>

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={step.num}
                style={{
                  display: 'flex',
                  gap: 64,
                  alignItems: 'center',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  marginBottom: idx < steps.length - 1 ? 80 : 0,
                  paddingBottom: idx < steps.length - 1 ? 80 : 0,
                  borderBottom: idx < steps.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                {/* Text side */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                    <span style={{
                      fontFamily: 'Anton, Impact, sans-serif',
                      fontSize: 48,
                      color: 'rgba(255,255,255,0.06)',
                      lineHeight: 1,
                      letterSpacing: '0.04em',
                    }}>{step.num}</span>
                    <div style={{ width: 1, height: 36, background: 'var(--border-subtle)' }} />
                    <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'hsl(220 5% 45%)', textTransform: 'uppercase' }}>
                      {isRu ? 'ШАГ' : 'STEP'} {step.num}
                    </p>
                  </div>

                  <h2 style={{ margin: '0 0 16px', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {isRu ? step.title.ru : step.title.en}
                  </h2>

                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
                    {isRu ? step.desc.ru : step.desc.en}
                  </p>

                  {step.tip && (
                    <div style={{
                      marginTop: 20,
                      padding: '12px 16px',
                      borderRadius: 6,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      gap: 10,
                      alignItems: 'flex-start',
                    }}>
                      <span style={{ fontSize: 14, flexShrink: 0 }}>💡</span>
                      <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                        {isRu ? step.tip.ru : step.tip.en}
                      </p>
                    </div>
                  )}
                </div>

                {/* Screenshot */}
                <div style={{ flexShrink: 0, width: 220 }}>
                  <div style={{
                    borderRadius: 16,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  }}>
                    <img
                      src={step.img}
                      alt={isRu ? step.title.ru : step.title.en}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Next step CTA */}
          <div style={{
            marginTop: 80,
            padding: '40px',
            borderRadius: 8,
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}>
            <div>
              <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'hsl(220 5% 45%)', textTransform: 'uppercase' }}>
                {isRu ? 'СЛЕДУЮЩИЙ ШАГ' : 'NEXT STEP'}
              </p>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' }}>
                {isRu ? 'Подключитесь к клубу MOJO' : 'Connect to the MOJO Club'}
              </h3>
              <p style={{ margin: '8px 0 0', fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>
                {isRu ? 'Аккаунт готов — теперь найдите и вступите в клуб' : 'Account is ready — now find and join the club'}
              </p>
            </div>
            <Link href="/join"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 4,
                background: 'hsl(4 80% 45%)', color: 'white',
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
                whiteSpace: 'nowrap', transition: 'background 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 38%)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 45%)'; }}
            >
              {isRu ? 'Подключиться к клубу →' : 'Connect to Club →'}
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
