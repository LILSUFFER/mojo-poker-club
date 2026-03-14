import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'wouter';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  const navLinks = [
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.clubs'), href: '/#clubs' },
    { name: t('nav.howToJoin'), href: '/#how-to-join' },
  ];

  const isHome = location === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled || !isHome ? 'bg-background/95 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display font-black text-2xl tracking-widest text-white group-hover:text-gradient-gold transition-all duration-300">
            MOJO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors uppercase"
          >
            <Globe className="w-4 h-4 text-primary" />
            {language}
          </button>

          <Link href="/download" className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-primary/10 border border-primary/50 text-primary font-bold text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Download className="w-4 h-4" />
            {t('nav.download')}
          </Link>

          <a
            href={isHome ? "#contact" : "/#contact"}
            className="px-5 py-2.5 rounded-sm bg-gradient-gold text-black font-bold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-lg font-medium text-white/80 hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5 text-primary" />
                {language === 'en' ? 'Switch to Russian (RU)' : 'Switch to English (EN)'}
              </button>
              
              <Link 
                href="/download"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 text-center rounded-sm bg-primary/10 border border-primary/50 text-primary font-bold tracking-wide"
              >
                <Download className="w-5 h-5" />
                {t('nav.download')}
              </Link>
              
              <a
                href={isHome ? "#contact" : "/#contact"}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-5 py-3 text-center rounded-sm bg-gradient-gold text-black font-bold tracking-wide"
              >
                {t('nav.contact')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
