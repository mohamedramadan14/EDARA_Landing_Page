const stats = [
  { value: '1,050+', label: 'Companies', suffix: '' },
  { value: '50,000+', label: 'Employees Managed', suffix: '' },
  { value: '99.9%', label: 'Uptime', suffix: '' },
  { value: '4.8', label: 'Customer Rating', suffix: '/5' },
];

const ProofBand = () => {
  return (
    <section
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '40px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div className="proof-band-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
          textAlign: 'center'
        }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                position: 'relative'
              }}
            >
              {idx > 0 && (
                <div style={{
                  position: 'absolute',
                  left: '-16px',
                  top: '8px',
                  bottom: '8px',
                  width: '1px',
                  background: 'var(--color-border)'
                }} />
              )}
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 700,
                color: 'var(--color-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                fontVariantNumeric: 'tabular-nums'
              }}>
                {stat.value}{stat.suffix}
              </span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--color-text-faint)',
                letterSpacing: '0.02em'
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofBand;
