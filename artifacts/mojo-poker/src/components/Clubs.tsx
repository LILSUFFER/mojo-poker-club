import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Clubs() {
  const { t } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clubs = [
    {
      id: 'mojo',
      clubId: '356323',
      title: t('clubs.mojo.name'),
      desc: t('clubs.mojo.desc'),
      image: `${import.meta.env.BASE_URL}images/mojo-logo.png`,
      features: [
        t('clubs.mojo.feature1'),
        t('clubs.mojo.feature2'),
        t('clubs.mojo.feature3'),
      ],
      highlight: true
    },
    {
      id: 'massiv',
      clubId: '799798',
      title: t('clubs.massiv.name'),
      desc: t('clubs.massiv.desc'),
      image: `${import.meta.env.BASE_URL}images/massiv-logo.png`,
      features: [
        t('clubs.massiv.feature1'),
        t('clubs.massiv.feature2'),
        t('clubs.massiv.feature3'),
      ],
      highlight: false
    }
  ];

  return (
    <section id="clubs" className="py-24 relative bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-2">
            {t('clubs.title')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-display text-white">
            {t('clubs.subtitle')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {clubs.map((club, idx) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`group relative rounded-xl p-1 overflow-hidden ${
                club.highlight ? 'bg-gradient-to-b from-primary/50 to-background' : 'bg-white/5'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-full bg-card rounded-lg p-8 sm:p-10 flex flex-col items-center text-center z-10 border border-white/5 group-hover:border-primary/30 transition-colors duration-500">
                <div className="w-32 h-32 mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/40 transition-all duration-500"></div>
                  <img 
                    src={club.image} 
                    alt={club.title} 
                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  />
                </div>
                
                <h4 className="text-2xl font-display text-white mb-2">{club.title}</h4>
                
                {/* Club ID Banner */}
                <div className="w-full bg-background/80 border border-white/10 rounded-md p-4 mb-6 flex flex-col items-center justify-center gap-2">
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Club ID</div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-display font-bold text-primary tracking-wider">{club.clubId}</span>
                    <button 
                      onClick={() => handleCopy(club.clubId)}
                      className="p-2 rounded-sm bg-white/5 hover:bg-white/10 text-white transition-colors flex items-center justify-center group/btn"
                      title="Copy ID"
                    >
                      {copiedId === club.clubId ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-muted-foreground group-hover/btn:text-white" />
                      )}
                    </button>
                  </div>
                  {copiedId === club.clubId && (
                    <span className="text-xs text-green-500 font-medium animate-in fade-in zoom-in duration-200">{t('clubs.copied')}</span>
                  )}
                </div>

                <p className="text-muted-foreground font-light mb-8 flex-grow">
                  {club.desc}
                </p>
                
                <div className="w-full space-y-3 mb-8">
                  {club.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-left">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
