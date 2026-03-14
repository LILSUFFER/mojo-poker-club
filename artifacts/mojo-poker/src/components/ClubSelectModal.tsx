import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ArrowRight, Users, Table2 } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
  onSelect: (path: string) => void;
}

const clubs = [
  {
    path: '/clubs/massiv',
    logo: '/images/mojo2-logo.png',
    logoBg: '#ffffff',
    badge: '/images/union-badge-orig.png',
    nameRu: 'MOJO: Massiv Poker Union',
    nameEn: 'MOJO: Massiv Poker Union',
    tagRu: 'Покерный союз',
    tagEn: 'Poker Union',
    id: '799798',
    rb: '50%',
    chip: '1к1',
    onlineRu: '698+ онлайн',
    onlineEn: '698+ online',
    tablesRu: '255+ столов',
    tablesEn: '255+ tables',
    descRu: 'Один из крупнейших покерных союзов в ClubGG — огромный пул игроков, экшн 24/7',
    descEn: 'One of the largest poker unions in ClubGG — massive player pool, action 24/7',
  },
  {
    path: '/clubs/mojo',
    logo: '/images/mojo1-logo.png',
    logoBg: '#1a1a1a',
    badge: null,
    nameRu: 'MOJO 1',
    nameEn: 'MOJO 1',
    tagRu: 'Закрытый клуб',
    tagEn: 'Private Club',
    id: '356323',
    rb: '55%',
    chip: '1к1',
    onlineRu: '62+ онлайн',
    onlineEn: '62+ online',
    tablesRu: '58+ столов',
    tablesEn: '58+ tables',
    descRu: 'Закрытый клуб с отборными игроками, эксклюзивными столами и максимальным рейкбеком',
    descEn: 'Private club with elite players, exclusive tables and top rakeback',
  },
];

export function ClubSelectModal({ open, onClose, onSelect }: Props) {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'hsl(0 0% 9%)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12,
          width: '100%',
          maxWidth: 680,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ padding: '24px 28px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ margin: '0 0 3px', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
              {isRu ? 'Выберите клуб' : 'Select a club'}
            </p>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
              {isRu ? 'В какой клуб вступить?' : 'Which club to join?'}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: 'rgba(255,255,255,0.4)', display: 'flex', borderRadius: 4, transition: 'color 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'white'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Club cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, padding: '20px 24px 24px' }}>
          {clubs.map(club => (
            <button
              key={club.path}
              onClick={() => onSelect(club.path)}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 8,
                cursor: 'pointer',
                padding: 0,
                textAlign: 'left',
                overflow: 'hidden',
                transition: 'border-color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.2)';
                el.style.background = 'rgba(255,255,255,0.06)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.08)';
                el.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {/* Logo area */}
              <div style={{ background: club.logoBg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 28px', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <img src={club.logo} alt={club.nameEn} style={{ height: 72, width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }} />
                {club.badge && (
                  <img src={club.badge} alt="badge" style={{ position: 'absolute', top: 10, right: 10, width: 32, height: 32, objectFit: 'contain' }} />
                )}
              </div>

              {/* Info */}
              <div style={{ padding: '16px 18px 18px' }}>
                <p style={{ margin: '0 0 2px', fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                  {isRu ? club.tagRu : club.tagEn}
                </p>
                <p style={{ margin: '0 0 10px', fontSize: 16, fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
                  {isRu ? club.nameRu : club.nameEn}
                </p>
                <p style={{ margin: '0 0 14px', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>
                  {isRu ? club.descRu : club.descEn}
                </p>

                {/* Stats row */}
                <div style={{ display: 'flex', gap: 12, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Users size={11} color="rgba(255,255,255,0.35)" />
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{isRu ? club.onlineRu : club.onlineEn}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Table2 size={11} color="rgba(255,255,255,0.35)" />
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{isRu ? club.tablesRu : club.tablesEn}</span>
                  </div>
                  <div style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>
                    RB {club.rb}
                  </div>
                </div>

                {/* CTA row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>ID: {club.id}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, color: 'hsl(4 80% 55%)', transition: 'gap 0.15s' }}>
                    {isRu ? 'Перейти' : 'Go to club'} <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
