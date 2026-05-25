

const logos = [
  { name: 'Talabat', weight: 700 },
  { name: 'Google', weight: 600 },
  { name: 'Microsoft', weight: 600 },
  { name: 'Amazon', weight: 700 },
  { name: 'Meta', weight: 600 },
  { name: 'Slack', weight: 700 },
  { name: 'Spotify', weight: 700 },
  { name: 'Netflix', weight: 700 },
  { name: 'Uber', weight: 600 },
  { name: 'Airbnb', weight: 600 },
  { name: 'Stripe', weight: 600 },
  { name: 'Shopify', weight: 600 },
];

const LogoItem = ({ logo }) => (
  <li role="listitem" style={{
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    height: '32px'
  }}>
    <span
      className="marquee-logo"
      aria-label={logo.name}
      style={{
        fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
        fontSize: '20px',
        fontWeight: logo.weight,
        letterSpacing: '-0.02em',
        color: 'var(--color-text)',
        whiteSpace: 'nowrap',
        userSelect: 'none'
      }}
    >
      {logo.name}
    </span>
  </li>
);

const TrustedByMarquee = () => {
  return (
    <section
      className="section"
      style={{
        paddingTop: '48px',
        paddingBottom: '80px',
        background: 'var(--color-bg)',
        position: 'relative'
      }}
      aria-label="Trusted by leading companies"
    >
      <div className="container">
        <p
          className="caption"
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '24px',
            color: 'var(--color-text-faint)'
          }}
        >
          Trusted by forward-thinking teams
        </p>

        <div className="marquee-mask marquee-container" style={{ position: 'relative' }}>
          <ul
            role="list"
            className="marquee-track"
            style={{ listStyle: 'none', margin: 0, padding: 0 }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <LogoItem key={`${logo.name}-${idx}`} logo={logo} />
            ))}
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="#contact"
            className="btn-primary"
            style={{
              height: '48px',
              padding: '14px 32px',
              fontSize: '15px',
              borderRadius: 'var(--rounded-md)'
            }}
          >
            Join The Empowered
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustedByMarquee;
