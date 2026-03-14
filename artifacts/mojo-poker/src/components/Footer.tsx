import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <span className="font-display font-black text-xl tracking-widest text-white/50">
            MOJO
          </span>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MOJO Poker Club. {t('footer.rights')}
          </p>
          <p className="text-xs text-white/30 mt-2">
            {t('footer.disclaimer')}
          </p>
        </div>

      </div>
    </footer>
  );
}
