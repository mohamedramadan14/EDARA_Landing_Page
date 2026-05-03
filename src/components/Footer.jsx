import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark-soft)',
      padding: '64px 0 32px'
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px'
        }}>
          {/* Brand */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: 600,
              color: 'var(--color-on-dark)',
              letterSpacing: '-0.02em',
              marginBottom: '20px'
            }}>
              EDARA<span style={{
                width: '6px',
                height: '6px',
                background: 'var(--color-on-dark)',
                borderRadius: '50%',
                display: 'inline-block',
                marginLeft: '1px'
              }} />
            </div>
            <p className="body-sm" style={{
              lineHeight: 1.7,
              color: 'var(--color-on-dark-soft)',
              marginBottom: '20px'
            }}>
              The first AI-powered HR system in Egypt & Saudi Arabia — from face-scan attendance to smart hiring. Trusted by 1000+ companies.
            </p>
            <p className="body-sm" style={{
              lineHeight: 1.7,
              color: 'var(--color-on-dark-soft)',
              marginBottom: '24px'
            }}>
              34 Makram Ebeid, Nasr City, Cairo, Egypt<br />
              <a href="tel:01203333843" style={{ color: 'var(--color-on-dark-soft)' }}>0120 333 3843</a>
              {' · '}
              <a href="mailto:info@dynamicmeg.com" style={{ color: 'var(--color-on-dark-soft)' }}>info@dynamicmeg.com</a>
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['LinkedIn', 'Share', 'Instagram', 'TikTok'].map((label, i) => (
                <a key={label} href="#" aria-label={label} style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--color-surface-dark-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-on-dark)',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-surface-dark-elevated)'}
                >
                  {i === 0 && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  )}
                  {i === 1 && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                  )}
                  {i === 2 && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  )}
                  {i === 3 && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="title-sm" style={{ color: 'var(--color-on-dark)', marginBottom: '24px' }}>Product</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['Time & Attendance', 'AI Recruitment', 'Payroll', 'Performance', 'Integrations'].map((link) => (
                <li key={link}>
                  <a href="#" className="body-sm" style={{ color: 'var(--color-on-dark-soft)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-on-dark)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--color-on-dark-soft)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="title-sm" style={{ color: 'var(--color-on-dark)', marginBottom: '24px' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['Customers', 'Pricing', 'About', 'Contact', 'Request a Demo'].map((link) => (
                <li key={link}>
                  <a href={link === 'Request a Demo' ? '#contact' : '#'} className="body-sm" style={{ color: 'var(--color-on-dark-soft)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-on-dark)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--color-on-dark-soft)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="title-sm" style={{ color: 'var(--color-on-dark)', marginBottom: '24px' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['Terms of Service', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="body-sm" style={{ color: 'var(--color-on-dark-soft)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-on-dark)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--color-on-dark-soft)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{
          marginTop: '64px',
          paddingTop: '28px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span className="body-sm" style={{ color: 'var(--color-on-dark-soft)' }}>
            © 2026 EDARA HR System · Dynamic Business Solutions. All rights reserved.
          </span>
          <div>
            <a href="#" className="body-sm" style={{ color: 'var(--color-on-dark-soft)', marginRight: '24px', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-on-dark)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-on-dark-soft)'}
            >Terms of Service</a>
            <a href="#" className="body-sm" style={{ color: 'var(--color-on-dark-soft)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-on-dark)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-on-dark-soft)'}
            >Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
