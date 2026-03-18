import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { VPNGuide } from '@/components/VPNGuide';
import { Download, MessageCircle, UserPlus, PlayCircle } from 'lucide-react';
import { Link } from 'wouter';
import SEO from '@/components/SEO';

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
  const { language, t } = useLanguage();
  const stepList = (steps as any)[language] ?? steps['en'];
  const faqList = (faq as any)[language] ?? faq['en'];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <SEO
        canonical="/massiv-guide"
        langs={{
          ru: { title: "Как получить флаг на GGClub — гайд Massiv", description: "Инструкция как получить иностранный флаг на GGClub с помощью VPN для Massiv Poker Union. Лучшие VPN, нужные страны, пошаговое руководство.", keywords: "флаг GGClub, VPN для GGClub, Massiv Poker Union флаг, ClubGG регистрация" },
          en: { title: "How to Get a Foreign Flag on GGClub — Massiv Guide", description: "Guide on how to get a foreign country flag on GGClub using VPN for Massiv Poker Union. Best VPNs, required countries, step-by-step instructions.", keywords: "GGClub flag, VPN for GGClub, Massiv Poker Union registration, ClubGG VPN guide" },
          es: { title: "Cómo obtener una bandera extranjera en GGClub — Guía Massiv", description: "Guía sobre cómo obtener una bandera de país extranjero en GGClub usando VPN para Massiv Poker Union. Mejores VPN, países requeridos, instrucciones paso a paso." },
          de: { title: "Wie man eine ausländische Flagge auf GGClub bekommt — Massiv-Anleitung", description: "Anleitung zum Erhalten einer ausländischen Landesflagge auf GGClub mit VPN für Massiv Poker Union. Beste VPNs, benötigte Länder, Schritt-für-Schritt-Anleitung." },
          fr: { title: "Comment obtenir un drapeau étranger sur GGClub — Guide Massiv", description: "Guide sur la façon d'obtenir un drapeau de pays étranger sur GGClub en utilisant un VPN pour Massiv Poker Union. Meilleurs VPN, pays requis, instructions étape par étape." },
          it: { title: "Come ottenere una bandiera straniera su GGClub — Guida Massiv", description: "Guida su come ottenere una bandiera di paese straniero su GGClub usando VPN per Massiv Poker Union. Migliori VPN, paesi richiesti, istruzioni passo passo." },
          pt: { title: "Como obter uma bandeira estrangeira no GGClub — Guia Massiv", description: "Guia sobre como obter uma bandeira de país estrangeiro no GGClub usando VPN para Massiv Poker Union. Melhores VPNs, países necessários, instruções passo a passo." },
          ar: { title: "كيفية الحصول على علم أجنبي في GGClub — دليل Massiv", description: "دليل حول كيفية الحصول على علم بلد أجنبي في GGClub باستخدام VPN لـ Massiv Poker Union. أفضل VPN، الدول المطلوبة، تعليمات خطوة بخطوة." },
          hi: { title: "GGClub पर विदेशी झंडा कैसे पाएं — Massiv गाइड", description: "Massiv Poker Union के लिए VPN का उपयोग करके GGClub पर विदेशी देश का झंडा कैसे प्राप्त करें। बेस्ट VPN, आवश्यक देश, चरण-दर-चरण निर्देश।" },
          fa: { title: "نحوه دریافت پرچم خارجی در GGClub — راهنمای Massiv", description: "راهنمای نحوه دریافت پرچم کشور خارجی در GGClub با استفاده از VPN برای Massiv Poker Union. بهترین VPN‌ها، کشورهای مورد نیاز، دستورالعمل‌های گام به گام." },
          tr: { title: "GGClub'da Yabancı Bayrak Nasıl Alınır — Massiv Rehberi", description: "Massiv Poker Union için VPN kullanarak GGClub'da yabancı ülke bayrağının nasıl alınacağına dair rehber. En iyi VPN'ler, gerekli ülkeler, adım adım talimatlar." },
          az: { title: "GGClub-da Xarici Bayraq Necə Alınır — Massiv Bələdçisi", description: "Massiv Poker Union üçün VPN istifadə edərək GGClub-da xarici ölkə bayrağının necə alınacağına dair bələdçi. Ən yaxşı VPN-lər, tələb olunan ölkələr, addım-addım təlimat." },
          zh: { title: "如何在 GGClub 获得外国旗帜 — Massiv 指南", description: "关于如何使用 VPN 为 Massiv Poker Union 在 GGClub 上获得外国国家旗帜的指南。最佳 VPN，所需国家，逐步说明。" },
          ja: { title: "GGClubで外国の旗を取得する方法 — Massivガイド", description: "Massiv Poker UnionのためにVPNを使用してGGClubで外国の国旗を取得する方法のガイド。最高のVPN、必要な国、ステップバイステップの手順。" },
        }}
      />
      <Navbar />
      <PageHeader
        label="Massiv Poker Union"
        title={t('pages.massivGuide.title')}
        subtitle={t('pages.massivGuide.subtitle')}
        breadcrumbs={[
          { label: t('pages.home'), href: '/' },
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
            {t('pages.joinGuide.writeManager')}
          </a>
          <Link
            href="/"
            style={{ display: 'inline-flex', alignItems: 'center', fontSize: 14, color: 'var(--text-faint)', padding: '12px 24px', textDecoration: 'none' }}
          >
            {t('pages.backHome')}
          </Link>
        </motion.div>

      </div>
      <Footer />
    </div>
  );
}
