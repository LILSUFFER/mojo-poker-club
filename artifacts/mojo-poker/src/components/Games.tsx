import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Custom icons for suits to keep it lightweight and styled correctly
const Spade = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
    <path d="M12 2C12 2 4 10 4 15C4 18.31 6.69 21 10 21C11.19 21 12 20.2 12 20.2C12 20.2 12.81 21 14 21C17.31 21 20 18.31 20 15C20 10 12 2 12 2Z" />
    <path d="M12 22L10 16H14L12 22Z" />
  </svg>
);

const Heart = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-red-500">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
  </svg>
);

const Club = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
    <path d="M12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11ZM8 12C6.34 12 5 13.34 5 15C5 16.66 6.34 18 8 18C9.24 18 10.3 17.25 10.74 16.14C11.05 16.4 11.45 16.71 12 17.15L10 22H14L12 17.15C12.55 16.71 12.95 16.4 13.26 16.14C13.7 17.25 14.76 18 16 18C17.66 18 19 16.66 19 15C19 13.34 17.66 12 16 12C14.74 12 13.68 12.78 13.26 13.91C12.89 13.6 12.46 13.29 12 12.85C11.54 13.29 11.11 13.6 10.74 13.91C10.32 12.78 9.26 12 8 12Z" />
  </svg>
);

const Diamond = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-red-500">
    <path d="M12 2L2 12L12 22L22 12L12 2Z" />
  </svg>
);

export function Games() {
  const { t } = useLanguage();

  const games = [
    { icon: <Spade />, title: t('games.holdem'), desc: t('games.holdemDesc') },
    { icon: <Heart />, title: t('games.omaha'), desc: t('games.omahaDesc') },
    { icon: <Club />, title: t('games.mtt'), desc: t('games.mttDesc') },
    { icon: <Diamond />, title: t('games.ofc'), desc: t('games.ofcDesc') },
  ];

  return (
    <section id="games" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/games-bg.png`}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-2">
            {t('games.title')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-display text-white">
            {t('games.subtitle')}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-xl text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-6 flex justify-center text-white/50 group-hover:text-white transition-colors duration-300 drop-shadow-md">
                {game.icon}
              </div>
              <h4 className="text-xl font-display text-white mb-3">{game.title}</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {game.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
