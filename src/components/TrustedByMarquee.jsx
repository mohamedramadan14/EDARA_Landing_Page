import React from 'react';

// SVG logos for popular companies
const logos = [
  { name: 'Talabat', svg: (
    <svg viewBox="0 0 120 40" height="40">
      <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#FF5A00">talabat</text>
    </svg>
  )},
  { name: 'Google', svg: (
    <svg viewBox="0 0 120 40" height="40">
      <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="500" fill="#4285F4">G</text>
      <text x="18" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="500" fill="#EA4335">o</text>
      <text x="32" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="500" fill="#FBBC05">o</text>
      <text x="46" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="500" fill="#4285F4">g</text>
      <text x="60" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="500" fill="#34A853">l</text>
      <text x="68" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="500" fill="#EA4335">e</text>
    </svg>
  )},
  { name: 'Microsoft', svg: (
    <svg viewBox="0 0 140 40" height="40">
      <rect x="0" y="8" width="10" height="10" fill="#F25022"/>
      <rect x="12" y="8" width="10" height="10" fill="#7FBA00"/>
      <rect x="0" y="20" width="10" height="10" fill="#00A4EF"/>
      <rect x="12" y="20" width="10" height="10" fill="#FFB900"/>
      <text x="30" y="28" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="500" fill="#737373">Microsoft</text>
    </svg>
  )},
  { name: 'Amazon', svg: (
    <svg viewBox="0 0 120 40" height="40">
      <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#111">amazon</text>
      <path d="M0 30 Q30 38 60 30 Q90 22 110 28" stroke="#FF9900" strokeWidth="3" fill="none"/>
    </svg>
  )},
  { name: 'Meta', svg: (
    <svg viewBox="0 0 100 40" height="40">
      <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#0081FB">Meta</text>
    </svg>
  )},
  { name: 'Slack', svg: (
    <svg viewBox="0 0 120 40" height="40">
      <rect x="2" y="10" width="8" height="8" rx="2" fill="#E01E5A"/>
      <rect x="12" y="10" width="8" height="8" rx="2" fill="#36C5F0"/>
      <rect x="2" y="22" width="8" height="8" rx="2" fill="#ECB22E"/>
      <rect x="12" y="22" width="8" height="8" rx="2" fill="#2EB67D"/>
      <text x="28" y="28" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#111">Slack</text>
    </svg>
  )},
  { name: 'Spotify', svg: (
    <svg viewBox="0 0 120 40" height="40">
      <circle cx="14" cy="20" r="14" fill="#1DB954"/>
      <path d="M8 14 Q14 10 22 14" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M8 18 Q14 14 22 18" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M8 22 Q14 18 22 22" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <text x="34" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#111">Spotify</text>
    </svg>
  )},
  { name: 'Netflix', svg: (
    <svg viewBox="0 0 100 40" height="40">
      <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#E50914">NETFLIX</text>
    </svg>
  )},
  { name: 'Uber', svg: (
    <svg viewBox="0 0 80 40" height="40">
      <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="500" fill="#111">Uber</text>
    </svg>
  )},
  { name: 'Airbnb', svg: (
    <svg viewBox="0 0 100 40" height="40">
      <path d="M14 8 C8 14 4 22 4 28 C4 34 8 36 14 30 C20 36 24 34 24 28 C24 22 20 14 14 8Z" fill="#FF5A5F"/>
      <text x="32" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#111">airbnb</text>
    </svg>
  )},
  { name: 'Stripe', svg: (
    <svg viewBox="0 0 100 40" height="40">
      <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="600" fill="#635BFF">stripe</text>
    </svg>
  )},
  { name: 'Shopify', svg: (
    <svg viewBox="0 0 110 40" height="40">
      <path d="M10 10 L18 8 L20 26 L12 28Z" fill="#95BF47"/>
      <path d="M14 12 L16 24" stroke="#5E8E3E" strokeWidth="1" fill="none"/>
      <text x="26" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="#95BF47">Shopify</text>
    </svg>
  )}
];

const LogoItem = ({ logo }) => (
  <li role="listitem" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
    <div className="marquee-logo" aria-label={logo.name}>
      {logo.svg}
    </div>
  </li>
);

const TrustedByMarquee = () => {
  return (
    <section className="section" style={{ paddingTop: '40px', paddingBottom: '80px' }} aria-label="Trusted by our clients">
      <div className="container">
        <h2 className="display-sm" style={{ textAlign: 'center', marginBottom: '48px' }}>
          Trusted by 1050+ Businesses. Empowering Workforces Every Day.
        </h2>

        <div className="marquee-mask marquee-container" style={{ position: 'relative' }}>
          <ul role="list" className="marquee-track" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {[...logos, ...logos].map((logo, idx) => (
              <LogoItem key={`${logo.name}-${idx}`} logo={logo} />
            ))}
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="#contact" className="btn-primary" style={{
            height: '44px',
            padding: '14px 28px',
            fontSize: '15px'
          }}>
            Join The Empowered
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustedByMarquee;
