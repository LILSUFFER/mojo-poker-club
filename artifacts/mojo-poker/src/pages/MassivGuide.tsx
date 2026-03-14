import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { VPNGuide } from '@/components/VPNGuide';
import { Download, MessageCircle, UserPlus, PlayCircle } from 'lucide-react';
import { Link } from 'wouter';

const steps = {
  ru: [
    {
      icon: Download,
      num: '01',
      title: 'Скачайте ClubGG',
      desc: 'Установите приложение ClubGG на своё устройство — доступно для Android, iOS и ПК.',
      action: { label: 'Скачать приложение', href: '/download' },
    },
    {
      icon: UserPlus,
      num: '02',
      title: 'Создайте аккаунт',
      desc: 'Откройте приложение, нажмите «Зарегистрироваться» и заполните форму. Придумайте никнейм — он будет виден другим игрокам за столом.',
      action: null,
    },
    {
      icon: MessageCircle,
      num: '03',
      title: 'Напишите менеджеру',
      desc: 'Свяжитесь с нашим менеджером в Telegram @Mojo_Adm. Сообщите свой никнейм в ClubGG — он отправит вам приглашение в клуб Massiv Union.',
      action: { label: '@Mojo_Adm в Telegram', href: 'https://t.me/Mojo_Adm' },
    },
    {
      icon: PlayCircle,
      num: '04',
      title: 'Вступайте и играйте',
      desc: 'Примите приглашение в приложении, войдите в клуб MOJO 2 Massiv Union 🇺🇸 (ID: 799798) и выбирайте стол. Добро пожаловать!',
      action: null,
    },
  ],
  en: [
    {
      icon: Download,
      num: '01',
      title: 'Download ClubGG',
      desc: 'Install the ClubGG app on your device — available for Android, iOS and PC.',
      action: { label: 'Download App', href: '/download' },
    },
    {
      icon: UserPlus,
      num: '02',
      title: 'Create an Account',
      desc: 'Open the app, tap "Register" and fill out the form. Choose a nickname — it will be visible to other players at the table.',
      action: null,
    },
    {
      icon: MessageCircle,
      num: '03',
      title: 'Message the Manager',
      desc: 'Contact our manager on Telegram @Mojo_Adm. Send your ClubGG nickname — they will send you an invitation to the Massiv Union club.',
      action: { label: '@Mojo_Adm on Telegram', href: 'https://t.me/Mojo_Adm' },
    },
    {
      icon: PlayCircle,
      num: '04',
      title: 'Join and Play',
      desc: 'Accept the invitation in the app, enter club MOJO 2 Massiv Union 🇺🇸 (ID: 799798) and choose a table. Welcome!',
      action: null,
    },
  ],
};

const faq = {
  ru: [
    {
      q: 'Нужно ли платить за вступление?',
      a: 'Нет. Вступление в клуб бесплатное. Для игры нужны только фишки.',
    },
    {
      q: 'Где взять фишки для игры?',
      a: 'Фишки обмениваются в соотношении 1к1. Для получения фишек свяжитесь с менеджером @Mojo_Adm в Telegram.',
    },
    {
      q: 'Что такое Massiv Poker Union?',
      a: 'Massiv Poker Union — один из крупнейших покерных союзов в ClubGG. Огромный пул игроков со всего мира, столы запускаются в любое время суток.',
    },
    {
      q: 'Какой рейкбек я получу?',
      a: 'Члены MOJO в Massiv Union получают рейкбек 50% — один из лучших показателей на рынке клубного покера.',
    },
  ],
  en: [
    {
      q: 'Is there an entry fee?',
      a: 'No. Joining the club is free. You only need chips to play.',
    },
    {
      q: 'How do I get chips?',
      a: 'Chips are exchanged at a 1:1 rate. Contact manager @Mojo_Adm on Telegram to get chips.',
    },
    {
      q: 'What is Massiv Poker Union?',
      a: 'Massiv Poker Union is one of the largest poker unions on ClubGG. Massive player pool from around the world, tables running around the clock.',
    },
    {
      q: 'What rakeback will I get?',
      a: 'MOJO members in Massiv Union receive 50% rakeback — one of the best rates in club poker.',
    },
  ],
};

export function MassivGuide() {
  const { language } = useLanguage();
  const isRu = language === 'ru';
  const stepList = steps[language];
  const faqList = faq[language];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <PageHeader
        label="Massiv Poker Union"
        title={isRu ? 'Как создать аккаунт и вступить в клуб' : 'How to Create an Account and Join the Club'}
        subtitle={isRu
          ? 'Всего 4 шага — от скачивания приложения до первой раздачи за столом Massiv Union.'
          : 'Just 4 steps — from downloading the app to your first hand at a Massiv Union table.'}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: 'Massiv Guide' },
        ]}
      />
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '60px 32px 100px' }}>

        <VPNGuide />

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 80 }}>
          {stepList.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                style={{
                  display: 'flex',
                  gap: 32,
                  padding: '32px 36px',
                  borderRadius: 4,
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-card)',
                  alignItems: 'flex-start',
                }}
              >
                {/* Number */}
                <div style={{ flexShrink: 0, fontSize: 11, fontWeight: 700, color: 'var(--text-faint)', letterSpacing: '0.1em', paddingTop: 4, minWidth: 28 }}>
                  {step.num}
                </div>
                {/* Icon */}
                <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 4, background: 'var(--bg)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  <Icon size={20} />
                </div>
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
                    {step.title}
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--text-faint)', lineHeight: 1.75, margin: '0 0 16px 0' }}>
                    {step.desc}
                  </p>
                  {step.action && (
                    step.action.href.startsWith('http') ? (
                      <a
                        href={step.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'var(--text)', border: '1px solid var(--border-subtle)', borderRadius: 4, padding: '8px 16px', textDecoration: 'none', transition: 'border-color 0.2s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'; }}
                      >
                        {step.action.label} →
                      </a>
                    ) : (
                      <Link
                        href={step.action.href}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'var(--text)', border: '1px solid var(--border-subtle)', borderRadius: 4, padding: '8px 16px', textDecoration: 'none', transition: 'border-color 0.2s' }}
                      >
                        {step.action.label} →
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 24 }}>
            /// FAQ
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {faqList.map((item, i) => (
              <div
                key={i}
                style={{ padding: '24px 0', borderBottom: '1px solid var(--border-subtle)' }}
              >
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 8 }}>
                  {item.q}
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-faint)', lineHeight: 1.75, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ marginTop: 64, display: 'flex', gap: 12, flexWrap: 'wrap' }}
        >
          <a
            href="https://t.me/Mojo_Adm"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 600, color: 'var(--text)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, padding: '12px 24px', textDecoration: 'none', background: 'var(--bg-card)' }}
          >
            <MessageCircle size={16} />
            {isRu ? 'Написать менеджеру' : 'Message Manager'}
          </a>
          <Link
            href="/"
            style={{ display: 'inline-flex', alignItems: 'center', fontSize: 14, color: 'var(--text-faint)', padding: '12px 24px', textDecoration: 'none' }}
          >
            ← {isRu ? 'На главную' : 'Back to Home'}
          </Link>
        </motion.div>

      </div>
      <Footer />
    </div>
  );
}
