import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Casino Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        {/* Subtle gold radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-px w-8 bg-primary"></div>
          <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">ClubGG Network</span>
          <div className="h-px w-8 bg-primary"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-display leading-tight mb-6"
        >
          {t('hero.title')} <br />
          <span className="text-gradient-gold italic">{t('hero.titleHighlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-light"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/download" className="group relative px-8 py-4 bg-gradient-gold text-black font-bold tracking-wider rounded-sm overflow-hidden inline-flex justify-center items-center">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative flex items-center justify-center gap-2">
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <a
            href="https://t.me/Mojo_Adm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold tracking-wider rounded-sm hover:bg-white/5 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {t('hero.secondaryCta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
