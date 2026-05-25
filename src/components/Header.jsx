import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinkStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.4,
    color: 'var(--color-text-muted)',
    padding: '8px 0',
    transition: 'color 0.18s ease'
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(246, 248, 252, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px'
      }}>
        <a href="#" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2px',
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          position: 'relative'
        }}>
          <span style={{
            background: 'linear-gradient(90deg, #173B70, #2D65B0, #173B70, #7EA8E8, #173B70)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'edara-light-sweep 4s ease-in-out infinite',
            filter: 'drop-shadow(0 0 6px rgba(23, 59, 112, 0.15))'
          }}>
            EDARA
          </span>
          <span style={{
            width: '6px',
            height: '6px',
            background: 'var(--color-primary)',
            borderRadius: '50%',
            display: 'inline-block',
            marginLeft: '1px',
            animation: 'edara-dot-pulse 2.5s ease-in-out infinite',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '50%',
              border: '1px solid rgba(23, 59, 112, 0.15)',
              animation: 'edara-glow-ring 2.5s ease-in-out infinite',
              pointerEvents: 'none'
            }} />
          </span>
        </a>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px'
        }} className="desktop-nav">
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#modules" style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '4px' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-text)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
            >
              Modules
              <ChevronDown size={14} />
            </a>
            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                minWidth: '220px',
                background: 'var(--color-surface)',
                borderRadius: 'var(--rounded-lg)',
                boxShadow: 'var(--shadow-md)',
                padding: '8px 0',
                zIndex: 101,
                border: '1px solid var(--color-border)'
              }}>
                {['Time & Attendance', 'Payroll', 'Performance', 'AI Recruitment'].map((item) => (
                  <a key={item} href="#" className="body-sm" style={{
                    display: 'block',
                    padding: '10px 20px',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.18s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'var(--color-surface-2)'}
                  onMouseLeave={(e) => e.target.style.background = 'transparent'}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#customers" style={navLinkStyle}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-text)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
          >Customers</a>
          <a href="#integrations" style={navLinkStyle}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-text)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
          >Integrations</a>
          <a href="#pricing" style={navLinkStyle}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-text)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
          >Pricing</a>
          <a href="#contact" style={navLinkStyle}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-text)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
          >Contact</a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-nav">
          <a href="#" style={navLinkStyle}
            onMouseEnter={(e) => e.target.style.color = 'var(--color-text)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
          >Sign In</a>
          <a href="#contact" className="btn-primary">
            Request a Demo
          </a>
        </div>
        <button
          className="mobile-menu-btn"
          style={{ display: 'none', background: 'none', padding: '8px', color: 'var(--color-text)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="mobile-nav" style={{
          display: 'none',
          borderTop: '1px solid var(--color-border)',
          padding: '16px 24px',
          background: 'var(--color-surface)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {['Modules', 'Customers', 'Integrations', 'Pricing', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="title-sm">{item}</a>
            ))}
            <a href="#" className="title-sm">Sign In</a>
            <a href="#contact" className="btn-primary" style={{ justifyContent: 'center' }}>
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
