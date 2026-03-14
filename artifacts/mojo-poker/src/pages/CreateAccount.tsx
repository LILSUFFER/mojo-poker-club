import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { VPNSidebar } from '@/components/VPNSidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

interface Step {
  num: number;
  title: { ru: string; en: string };
  desc: { ru: string; en: string };
  img: string;
  note?: { ru: string; en: string };
}

const steps: Step[] = [
  {
    num: 1,
    title: { ru: 'Откройте приложение ClubGG', en: 'Open the ClubGG App' },
    desc: {
      ru: 'Запустите ClubGG. На главном экране нажмите кнопку «Присоединиться» — она откроет форму регистрации GGPass.',
      en: 'Launch ClubGG. On the main screen tap «Join» — it opens the GGPass registration form.',
    },
    img: '/images/account/step1-start.png',
  },
  {
    num: 2,
    title: { ru: 'Введите адрес электронной почты', en: 'Enter your Email' },
    desc: {
      ru: 'Откроется форма GGPass. Введите адрес электронной почты и нажмите «Далее». Также можно войти через Google, Facebook или Apple.',
      en: 'The GGPass form opens. Enter your email address and tap «Next». You can also sign in via Google, Facebook, or Apple.',
    },
    img: '/images/account/step2-email.png',
  },
  {
    num: 3,
    title: { ru: 'Подтвердите email', en: 'Verify your Email' },
    desc: {
      ru: 'На вашу почту придёт письмо с 4-значным кодом. Введите код в поля. Если письмо не пришло — проверьте папку «Спам» или запросите новый код.',
      en: 'A 4-digit code will be sent to your email. Enter the code in the fields. If no email arrived, check Spam or request a new code.',
    },
    img: '/images/account/step3-verify.png',
    note: {
      ru: 'Код действителен 60 секунд. Если не пришёл — нажмите «Отправить код снова».',
      en: 'The code is valid for 60 seconds. If it didn\'t arrive, tap «Resend Code».',
    },
  },
  {
    num: 4,
    title: { ru: 'Установите пароль', en: 'Set a Password' },
    desc: {
      ru: 'Придумайте надёжный пароль и введите его дважды для подтверждения. Требования к паролю: от 8 до 20 символов, минимум одна цифра.',
      en: 'Create a strong password and enter it twice. Password requirements: 8–20 characters, at least one digit.',
    },
    img: '/images/account/step4-password.png',
  },
  {
    num: 5,
    title: { ru: 'Создайте игровой профиль', en: 'Create your Gaming Profile' },
    desc: {
      ru: 'Выберите аватар и страну, затем придумайте никнейм. Требования: от 4 до 15 символов, только латиница, цифры и спецсимволы [ ] _ ! - @ . Никнейм не должен начинаться со спецсимвола.',
      en: 'Choose an avatar and country, then create a nickname. Requirements: 4–15 characters, latin letters, digits and [ ] _ ! - @ only. Nickname must not start with a special character.',
    },
    img: '/images/account/step5-profile.png',
  },
  {
    num: 6,
    title: { ru: 'Примите условия использования', en: 'Accept Terms of Service' },
    desc: {
      ru: 'Ознакомьтесь с Условиями обслуживания и Политикой конфиденциальности. Поставьте галочку «Я согласен» и нажмите «Подтвердить».',
      en: 'Review the Terms of Service and Privacy Policy. Check «I agree» and tap «Confirm».',
    },
    img: '/images/account/step6-terms.png',
  },
  {
    num: 7,
    title: { ru: 'Аккаунт создан — вы в ClubGG!', en: 'Account Created — You\'re in ClubGG!' },
    desc: {
      ru: 'Регистрация завершена. Вы попадёте на главный экран приложения. Теперь найдите клуб MOJO через поисковую строку и отправьте заявку на вступление.',
      en: 'Registration complete. You\'ll land on the main app screen. Now find the MOJO club via the search bar and send a join request.',
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
        title={isRu ? 'Как создать аккаунт GGClub' : 'How to Create a GGClub Account'}
        subtitle={isRu
          ? 'Пошаговая инструкция с реальными скриншотами из приложения'
          : 'Step-by-step guide with real screenshots from the app'}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: isRu ? 'Как вступить' : 'How to Join', href: '/join' },
          { label: isRu ? 'Создание аккаунта GGClub' : 'Create GGClub Account' },
        ]}
      />

      <main style={{ flex: 1, padding: '64px 0 100px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>

          {/* Two-column layout */}
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }}>

            {/* LEFT: step-by-step guide */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {steps.map((step, idx) => (
                <div key={step.num} style={{ marginBottom: idx < steps.length - 1 ? 72 : 0 }}>

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

                  {/* Description */}
                  <div style={{ paddingLeft: 52 }}>
                    <p style={{ margin: '0 0 24px', fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>
                      {isRu ? step.desc.ru : step.desc.en}
                    </p>

                    {step.note && (
                      <div style={{
                        padding: '12px 16px',
                        borderRadius: 6,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderLeft: '3px solid hsl(4 80% 45%)',
                        marginBottom: 24,
                        fontSize: 13,
                        color: 'rgba(255,255,255,0.45)',
                        lineHeight: 1.6,
                      }}>
                        {isRu ? step.note.ru : step.note.en}
                      </div>
                    )}

                    {/* Screenshot */}
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
                        style={{ width: 300, height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  {idx < steps.length - 1 && (
                    <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '72px 0 0' }} />
                  )}
                </div>
              ))}

              {/* Next step CTA */}
              <div style={{
                marginTop: 72,
                padding: '32px 36px',
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
                  <p style={{ margin: '0 0 4px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'hsl(220 5% 45%)', textTransform: 'uppercase' }}>
                    {isRu ? 'СЛЕДУЮЩИЙ ШАГ' : 'NEXT STEP'}
                  </p>
                  <h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>
                    {isRu ? 'Подключитесь к клубу MOJO' : 'Connect to the MOJO Club'}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>
                    {isRu ? 'Аккаунт готов — теперь найдите и вступите в клуб' : 'Account is ready — now find and join the club'}
                  </p>
                </div>
                <Link href="/join"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 28px', borderRadius: 4,
                    background: 'hsl(4 80% 45%)', color: 'white',
                    fontSize: 14, fontWeight: 600, textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 38%)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 45%)'; }}
                >
                  {isRu ? 'Подключиться к клубу →' : 'Connect to Club →'}
                </Link>
              </div>
            </div>

            {/* RIGHT: sticky VPN sidebar */}
            <VPNSidebar />

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
