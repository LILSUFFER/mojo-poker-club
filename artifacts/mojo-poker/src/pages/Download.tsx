import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Download as DownloadIcon, Monitor, Apple, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

export function Download() {
  const { t } = useLanguage();

  const platforms = [
    {
      id: 'android',
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.523 15.341a.96.96 0 0 1-.96-.96V9.744a.96.96 0 0 1 1.92 0v4.637a.96.96 0 0 1-.96.96zm-11.046 0a.96.96 0 0 1-.96-.96V9.744a.96.96 0 0 1 1.92 0v4.637a.96.96 0 0 1-.96.96zM8.08 5.51l-.953-1.65a.24.24 0 0 1 .088-.328.24.24 0 0 1 .328.088l.965 1.67A6.14 6.14 0 0 1 12 4.656c1.01 0 1.963.244 2.8.666l.965-1.67a.24.24 0 0 1 .328-.088.24.24 0 0 1 .088.328l-.953 1.65A5.905 5.905 0 0 1 17.93 8.64H6.07A5.905 5.905 0 0 1 8.08 5.51zM10.2 7.2a.48.48 0 1 0-.96 0 .48.48 0 0 0 .96 0zm5.36 0a.48.48 0 1 0-.96 0 .48.48 0 0 0 .96 0zM6.07 9.6h11.86v7.296a1.344 1.344 0 0 1-1.344 1.344h-.576v2.4a.96.96 0 0 1-1.92 0V18.24H9.91v2.4a.96.96 0 0 1-1.92 0V18.24h-.576A1.344 1.344 0 0 1 6.07 16.896V9.6z"/>
        </svg>
      ),
      title: t('download.android.title'),
      badge: t('download.android.badge'),
      url: "https://clp.gg/v2hVq",
      btn: t('download.android.btn'),
      steps: [
        t('download.android.step1'),
        t('download.android.step2'),
        t('download.android.step3'),
        t('download.android.step4'),
      ]
    },
    {
      id: 'ios',
      icon: <Apple className="w-12 h-12" />,
      title: t('download.ios.title'),
      badge: t('download.ios.badge'),
      url: "https://clp.gg/6jJ5A",
      btn: t('download.ios.btn'),
      steps: [
        t('download.ios.step1'),
        t('download.ios.step2'),
        t('download.ios.step3'),
        t('download.ios.step4'),
      ]
    },
    {
      id: 'pc',
      icon: <Monitor className="w-12 h-12" />,
      title: t('download.pc.title'),
      badge: t('download.pc.badge'),
      url: "https://clp.gg/GDaqG",
      btn: t('download.pc.btn'),
      steps: [
        t('download.pc.step1'),
        t('download.pc.step2'),
        t('download.pc.step3'),
        t('download.pc.step4'),
      ]
    }
  ];

  const isRu = t('nav.about') === 'О нас';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <PageHeader
        label={isRu ? 'Загрузка' : 'Download'}
        title={t('download.title')}
        subtitle={t('download.subtitle')}
        breadcrumbs={[
          { label: isRu ? 'Главная' : 'Home', href: '/' },
          { label: isRu ? 'Скачать' : 'Download' },
        ]}
      />
      <main style={{ flex: 1, padding: '60px 0 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {platforms.map((platform, idx) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                className="bg-card/40 border border-white/10 rounded-xl p-8 hover:border-primary/40 hover:bg-card/60 transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-primary bg-primary/10 p-4 rounded-lg">
                    {platform.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded-full text-white/70">
                    {platform.badge}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display mb-6">{platform.title}</h3>
                
                <div className="space-y-4 flex-grow mb-8">
                  {platform.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex gap-3 text-sm text-muted-foreground items-start">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs text-white/50">
                        {sIdx + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-gold text-black font-bold tracking-wider rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1"
                >
                  <DownloadIcon className="w-5 h-5" />
                  {platform.btn}
                </a>
              </motion.div>
            ))}
          </div>

          {/* After Download Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/50 border border-white/5 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-display mb-2">{t('download.joinProcessTitle')}</h2>
            <p className="text-muted-foreground mb-10">{t('download.joinProcessSubtitle')}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-white/10"></div>
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-primary/30">1</div>
                <h4 className="font-semibold text-lg mb-2">{t('howToJoin.step1.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('howToJoin.step1.desc')}</p>
              </div>
              <div className="relative">
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-white/10"></div>
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-primary/30">2</div>
                <h4 className="font-semibold text-lg mb-2">{t('howToJoin.step2.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('howToJoin.step2.desc')}</p>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="bg-background rounded p-2 text-xs border border-white/5 flex justify-between items-center">
                    <span className="text-white/50">MOJO 1</span>
                    <span className="font-bold text-primary">356323</span>
                  </div>
                  <div className="bg-background rounded p-2 text-xs border border-white/5 flex justify-between items-center">
                    <span className="text-white/50">MOJO 2 Massiv Union</span>
                    <span className="font-bold text-primary">799798</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4 border border-primary/30">3</div>
                <h4 className="font-semibold text-lg mb-2">{t('howToJoin.step3.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('howToJoin.step3.desc')}</p>
                <a href="https://t.me/Mojo_Adm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-primary hover:text-white transition-colors text-sm font-semibold">
                  @Mojo_Adm <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
