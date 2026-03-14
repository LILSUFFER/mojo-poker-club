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
    logoFill: false,
    badge: null,
    nameRu: 'MOJO: Massiv Poker Union',
    nameEn: 'MOJO: Massiv Poker Union',
    tagRu: 'Покерный союз',
    tagEn: 'Poker Union',
    id: '799798',
    rb: '50%',
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
    logoBg: '#222222',
    logoFill: false,
    badge: null,
    nameRu: 'MOJO 1',
    nameEn: 'MOJO 1',
    tagRu: 'Закрытый клуб',
    tagEn: 'Private Club',
    id: '356323',
    rb: '55%',
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
        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'hsl(0 0% 9%)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 14,
          width: '100%',
          maxWidth: 920,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ padding: '32px 40px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
              {isRu ? 'Выберите клуб' : 'Select a club'}
            </p>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
              {isRu ? 'В какой клуб вступить?' : 'Which club to join?'}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer', padding: 10, color: 'rgba(255,255,255,0.5)', display: 'flex', borderRadius: 8, transition: 'all 0.15s' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'white';
              el.style.background = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'rgba(255,255,255,0.5)';
              el.style.background = 'rgba(255,255,255,0.05)';
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Club cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20, padding: '28px 40px 36px' }}>
          {clubs.map(club => (
            <button
              key={club.path}
              onClick={() => onSelect(club.path)}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 10,
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
              <div style={{ background: club.logoBg, height: 180, position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {club.logoFill
                  ? <img src={club.logo} alt={club.nameEn} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  : <img src={club.logo} alt={club.nameEn} style={{ width: 130, height: 130, objectFit: 'contain', display: 'block' }} />
                }
              </div>

              {/* Info */}
              <div style={{ padding: '22px 24px 24px' }}>
                <p style={{ margin: '0 0 5px', fontSize: 10, fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                  {isRu ? club.tagRu : club.tagEn}
                </p>
                <p style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
                  {isRu ? club.nameRu : club.nameEn}
                </p>
                <p style={{ margin: '0 0 18px', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                  {isRu ? club.descRu : club.descEn}
                </p>

                {/* Stats row */}
                <div style={{ display: 'flex', gap: 16, marginBottom: 18, paddingBottom: 18, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Users size={13} color="rgba(255,255,255,0.35)" />
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{isRu ? club.onlineRu : club.onlineEn}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Table2 size={13} color="rgba(255,255,255,0.35)" />
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{isRu ? club.tablesRu : club.tablesEn}</span>
                  </div>
                  <div style={{ marginLeft: 'auto', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
                    RB {club.rb}
                  </div>
                </div>

                {/* CTA row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>ID: {club.id}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700, color: 'hsl(4 80% 55%)' }}>
                    {isRu ? 'Перейти' : 'Go to club'} <ArrowRight size={14} />
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
