interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: unknown[];
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div style={{
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--bg)',
      padding: '72px 0 44px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
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
        {subtitle && (
          <p style={{ fontSize: 15, color: 'var(--text-faint)', lineHeight: 1.7, marginTop: 14, marginBottom: 0, maxWidth: 560 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
