import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  const { language } = useLanguage();
  const isRu = language === 'ru';

  const defaultCrumbs: Crumb[] = [
    { label: isRu ? 'Главная' : 'Home', href: '/' },
  ];
  const crumbs = breadcrumbs ?? defaultCrumbs;

  return (
    <div style={{
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--bg)',
      padding: '100px 0 52px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 28, flexWrap: 'wrap' }}>
          {crumbs.map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {i > 0 && <span style={{ color: 'var(--text-faint)', fontSize: 12 }}>/</span>}
              {crumb.href ? (
                <Link href={crumb.href} style={{ fontSize: 12, color: 'var(--text-faint)', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-faint)'; }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>{crumb.label}</span>
              )}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(30px, 4.5vw, 52px)',
          fontWeight: 700,
          color: 'var(--text)',
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          margin: 0,
          maxWidth: 720,
        }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p style={{ fontSize: 15, color: 'var(--text-faint)', lineHeight: 1.7, marginTop: 16, marginBottom: 0, maxWidth: 560 }}>
            {subtitle}
          </p>
        )}

      </div>
    </div>
  );
}
