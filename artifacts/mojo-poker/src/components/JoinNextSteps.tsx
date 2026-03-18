import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { Download, UserPlus, MessageCircle, ArrowRight } from 'lucide-react';

interface Props {
  clubId: string;
  refCode: string;
  requiresVpn?: boolean;
}

export function JoinNextSteps({ clubId, refCode, requiresVpn }: Props) {
  const { t } = useLanguage();

  const steps = [
    {
      num: 1,
      icon: <Download size={18} />,
      title: t('join.step1.title'),
      desc: t('join.step1.desc'),
      link: '/download',
      linkLabel: t('join.step1.link'),
      external: false,
    },
    {
      num: 2,
      icon: <UserPlus size={18} />,
      title: t('join.step2.title'),
      desc: requiresVpn ? t('join.step2.descVpn') : t('join.step2.desc'),
      link: '/create-account',
      linkLabel: t('join.step2.link'),
      external: false,
    },
    {
      num: 3,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="17" y="17" width="1" height="1"/><rect x="14" y="14" width="1" height="1"/><rect x="20" y="14" width="1" height="1"/><rect x="14" y="20" width="1" height="1"/><rect x="20" y="20" width="1" height="1"/>
        </svg>
      ),
      title: `${t('join.step3.title')} ${clubId}`,
      desc: t('join.step3.desc').replace('{id}', clubId).replace('{code}', refCode),
      link: '/join',
      linkLabel: t('join.step3.link'),
      external: false,
    },
    {
      num: 4,
      icon: <MessageCircle size={18} />,
      title: t('join.step4.title'),
      desc: t('join.step4.desc'),
      link: '/support',
      linkLabel: t('join.step4.link'),
      external: true,
    },
  ];

  return (
    <div style={{ marginBottom: 72 }}>
      <p style={{ margin: '0 0 8px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
        /// {t('join.label')}
      </p>
      <h2 style={{ margin: '0 0 32px', fontSize: 26, fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
        {t('join.title')}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {steps.map((step, i) => (
          <div
            key={step.num}
            style={{
              display: 'flex', gap: 20, alignItems: 'flex-start',
              padding: '20px 0',
              borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}
          >
            {/* Step number */}
            <div style={{
              width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
              background: step.num === 4 ? 'rgba(37,211,102,0.12)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${step.num === 4 ? 'rgba(37,211,102,0.25)' : 'rgba(255,255,255,0.08)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: step.num === 4 ? 'rgba(37,211,102,0.8)' : 'rgba(255,255,255,0.4)',
              fontSize: 13, fontWeight: 700,
            }}>
              {step.icon}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <p style={{ margin: '0 0 4px', fontSize: 14, fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
                <span style={{
                  display: 'inline-block', marginRight: 8,
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.25)', verticalAlign: 'middle',
                }}>
                  {String(step.num).padStart(2, '0')}
                </span>
                {step.title}
              </p>
              <p style={{ margin: '0 0 8px', fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                {step.desc}
              </p>
              {step.external ? (
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontSize: 12, fontWeight: 600,
                    color: step.num === 4 ? 'rgba(37,211,102,0.8)' : 'rgba(255,255,255,0.5)',
                    textDecoration: 'none', transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = step.num === 4 ? 'rgba(37,211,102,1)' : 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = step.num === 4 ? 'rgba(37,211,102,0.8)' : 'rgba(255,255,255,0.5)'; }}
                >
                  {step.linkLabel}
                </a>
              ) : (
                <Link
                  href={step.link}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontSize: 12, fontWeight: 600,
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none', transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {step.linkLabel} <ArrowRight size={11} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Manager contact banner */}
      <div style={{
        marginTop: 24,
        padding: '16px 20px',
        borderRadius: 8,
        background: 'rgba(37,211,102,0.05)',
        border: '1px solid rgba(37,211,102,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <MessageCircle size={16} color="rgba(37,211,102,0.7)" />
          <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
            {t('join.step4.desc')}
          </p>
        </div>
        <a
          href="/support"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
            padding: '9px 18px', borderRadius: 4, textDecoration: 'none',
            background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)',
            color: 'rgba(37,211,102,0.9)', fontSize: 13, fontWeight: 700,
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(37,211,102,0.2)'; el.style.borderColor = 'rgba(37,211,102,0.4)'; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(37,211,102,0.12)'; el.style.borderColor = 'rgba(37,211,102,0.25)'; }}
        >
          <MessageCircle size={13} /> MOJO Contacts
        </a>
      </div>
    </div>
  );
}
