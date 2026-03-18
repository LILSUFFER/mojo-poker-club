import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import SEO from '@/components/SEO';

const TG_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.886l-1.872 8.82c-.14.62-.503.77-.995.48l-2.75-2.026-1.328 1.278c-.147.147-.27.27-.553.27l.196-2.79 5.088-4.597c.221-.196-.048-.305-.344-.11l-6.29 3.96-2.713-.85c-.59-.184-.602-.59.123-.872l10.582-4.08c.49-.178.92.108.856.517z" fill="white"/>
  </svg>
);

const CHAT_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="white"/>
  </svg>
);

const labels: Record<string, { title: string; subtitle: string; chat: string; chatDesc: string; telegram: string; telegramDesc: string; or: string }> = {
  en: { title: 'Contacts', subtitle: 'Choose how you\'d like to reach us', chat: 'Live Chat', chatDesc: 'Chat with our team right here on the site', telegram: 'Telegram', telegramDesc: 'Message our manager directly in Telegram', or: 'or' },
  ru: { title: 'Контакты', subtitle: 'Выберите удобный способ связи', chat: 'Онлайн чат', chatDesc: 'Напишите нам прямо здесь на сайте', telegram: 'Telegram', telegramDesc: 'Напишите нашему менеджеру в Telegram', or: 'или' },
  es: { title: 'Contactos', subtitle: 'Elige cómo contactarnos', chat: 'Chat en vivo', chatDesc: 'Chatea con nuestro equipo directamente en el sitio', telegram: 'Telegram', telegramDesc: 'Escribe directamente a nuestro manager en Telegram', or: 'o' },
  de: { title: 'Kontakte', subtitle: 'Wählen Sie, wie Sie uns erreichen möchten', chat: 'Live-Chat', chatDesc: 'Chatten Sie direkt hier auf der Seite mit uns', telegram: 'Telegram', telegramDesc: 'Schreiben Sie unserem Manager direkt in Telegram', or: 'oder' },
  fr: { title: 'Contacts', subtitle: 'Choisissez comment nous contacter', chat: 'Chat en direct', chatDesc: 'Discutez avec notre équipe directement sur le site', telegram: 'Telegram', telegramDesc: 'Écrivez directement à notre manager sur Telegram', or: 'ou' },
  it: { title: 'Contatti', subtitle: 'Scegli come contattarci', chat: 'Chat dal vivo', chatDesc: 'Chatta con il nostro team direttamente sul sito', telegram: 'Telegram', telegramDesc: 'Scrivi direttamente al nostro manager su Telegram', or: 'o' },
  pt: { title: 'Contatos', subtitle: 'Escolha como entrar em contato', chat: 'Chat ao vivo', chatDesc: 'Converse com nossa equipe diretamente no site', telegram: 'Telegram', telegramDesc: 'Escreva diretamente ao nosso manager no Telegram', or: 'ou' },
  ar: { title: 'جهات الاتصال', subtitle: 'اختر طريقة التواصل المفضلة لديك', chat: 'دردشة مباشرة', chatDesc: 'تحدث مع فريقنا مباشرة على الموقع', telegram: 'Telegram', telegramDesc: 'راسل مديرنا مباشرة على Telegram', or: 'أو' },
  hi: { title: 'संपर्क', subtitle: 'संपर्क का तरीका चुनें', chat: 'लाइव चैट', chatDesc: 'सीधे साइट पर हमारी टीम से चैट करें', telegram: 'Telegram', telegramDesc: 'Telegram पर सीधे हमारे मैनेजर को लिखें', or: 'या' },
  fa: { title: 'تماس', subtitle: 'روش تماس را انتخاب کنید', chat: 'چت زنده', chatDesc: 'مستقیماً در سایت با تیم ما چت کنید', telegram: 'Telegram', telegramDesc: 'مستقیماً به مدیر ما در Telegram پیام دهید', or: 'یا' },
  tr: { title: 'İletişim', subtitle: 'Bize nasıl ulaşmak istediğinizi seçin', chat: 'Canlı Sohbet', chatDesc: 'Sitemizde doğrudan ekibimizle sohbet edin', telegram: 'Telegram', telegramDesc: 'Telegram\'da yöneticimize doğrudan yazın', or: 'veya' },
  az: { title: 'Əlaqə', subtitle: 'Bizimlə necə əlaqə saxlamaq istədiyinizi seçin', chat: 'Canlı Söhbət', chatDesc: 'Birbaşa saytda komandamızla söhbət edin', telegram: 'Telegram', telegramDesc: 'Telegram\'da menecerə birbaşa yazın', or: 'və ya' },
  zh: { title: '联系我们', subtitle: '选择您希望联系我们的方式', chat: '在线聊天', chatDesc: '直接在网站与我们的团队聊天', telegram: 'Telegram', telegramDesc: '在 Telegram 上直接联系我们的经理', or: '或' },
  ja: { title: 'お問い合わせ', subtitle: 'お問い合わせ方法を選択してください', chat: 'ライブチャット', chatDesc: 'サイト上で直接チームとチャット', telegram: 'Telegram', telegramDesc: 'Telegram でマネージャーに直接メッセージ', or: 'または' },
};

function openChatWidget() {
  const btn = document.querySelector('.ptw-butWidget') as HTMLElement | null;
  if (btn) { btn.click(); return; }
  const widget = document.getElementById('prog-time-widget');
  if (widget) widget.classList.add('ptw--open');
}

export function SupportPage() {
  const { language, t } = useLanguage();
  const isMobile = useIsMobile();
  const L = labels[language] ?? labels.en;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <SEO
        canonical="/support"
        langs={{
          en: { title: 'Contacts', description: 'Contact MOJO Poker Club support via live chat or Telegram.' },
          ru: { title: 'Контакты', description: 'Свяжитесь с поддержкой MOJO Poker Club через чат или Telegram.' },
          es: { title: 'Contactos', description: 'Contacta el soporte de MOJO Poker Club por chat en vivo o Telegram.' },
          de: { title: 'Kontakte', description: 'Kontaktiere den MOJO Poker Club Support per Live-Chat oder Telegram.' },
          fr: { title: 'Contacts', description: 'Contactez le support MOJO Poker Club par chat en direct ou Telegram.' },
          it: { title: 'Contatti', description: 'Contatta il supporto MOJO Poker Club tramite chat dal vivo o Telegram.' },
          pt: { title: 'Contatos', description: 'Contate o suporte MOJO Poker Club por chat ao vivo ou Telegram.' },
          ar: { title: 'جهات الاتصال', description: 'تواصل مع دعم MOJO Poker Club عبر الدردشة المباشرة أو Telegram.' },
          hi: { title: 'संपर्क', description: 'लाइव चैट या Telegram के माध्यम से MOJO Poker Club सहायता से संपर्क करें।' },
          fa: { title: 'تماس', description: 'از طریق چت زنده یا Telegram با پشتیبانی MOJO Poker Club تماس بگیرید.' },
          tr: { title: 'İletişim', description: 'MOJO Poker Club desteğiyle canlı sohbet veya Telegram üzerinden iletişime geçin.' },
          az: { title: 'Əlaqə', description: 'Canlı söhbət və ya Telegram vasitəsilə MOJO Poker Club dəstəyi ilə əlaqə saxlayın.' },
          zh: { title: '联系我们', description: '通过在线聊天或 Telegram 联系 MOJO Poker Club 支持。' },
          ja: { title: 'お問い合わせ', description: 'ライブチャットまたはTelegramでMOJO Poker Clubサポートにお問い合わせください。' },
        }}
      />
      <Navbar />
      <PageHeader
        label={L.title}
        title={L.title}
        subtitle={L.subtitle}
        breadcrumbs={[
          { label: t('pages.home'), href: '/' },
          { label: L.title },
        ]}
      />

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '48px 20px 72px' : '80px 24px 100px' }}>
        <div style={{ width: '100%', maxWidth: 520 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            <button
              onClick={openChatWidget}
              style={{
                display: 'flex', alignItems: 'center', gap: 18,
                background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 14, padding: isMobile ? '20px 22px' : '24px 28px',
                cursor: 'pointer', textAlign: 'left', width: '100%',
                transition: 'background 0.15s, border-color 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#2a2a2a'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#1a1a1a'; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {CHAT_ICON}
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: isMobile ? 16 : 18, marginBottom: 4 }}>{L.chat}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{L.chatDesc}</div>
              </div>
            </button>

            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: 13, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', margin: '4px 0' }}>
              {L.or}
            </div>

            <a
              href="https://t.me/Mojo_Adm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 18,
                background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 14, padding: isMobile ? '20px 22px' : '24px 28px',
                cursor: 'pointer', textDecoration: 'none', width: '100%',
                transition: 'background 0.15s, border-color 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#2a2a2a'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#1a1a1a'; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#229ED9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {TG_ICON}
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: isMobile ? 16 : 18, marginBottom: 4 }}>{L.telegram}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{L.telegramDesc}</div>
              </div>
            </a>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
