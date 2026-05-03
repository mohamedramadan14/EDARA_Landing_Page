import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinkStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.4,
    color: 'var(--color-ink)',
    padding: '8px 0'
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--color-hairline-soft)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px'
      }}>
        {/* Logo */}
        <a href="#" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '2px',
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          fontWeight: 600,
          color: 'var(--color-ink)',
          letterSpacing: '-0.02em'
        }}>
          EDARA<span style={{
            width: '6px',
            height: '6px',
            background: 'var(--color-ink)',
            borderRadius: '50%',
            display: 'inline-block',
            marginLeft: '1px'
          }} />
        </a>

        {/* Desktop Nav */}
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
            <a href="#modules" style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '4px' }}>
              Modules
              <ChevronDown size={14} />
            </a>
            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                minWidth: '220px',
                background: 'var(--color-canvas)',
                borderRadius: 'var(--rounded-lg)',
                boxShadow: 'var(--shadow-md)',
                padding: '8px 0',
                zIndex: 101
              }}>
                {['Time & Attendance', 'Payroll', 'Performance', 'AI Recruitment'].map((item) => (
                  <a key={item} href="#" className="body-sm" style={{
                    display: 'block',
                    padding: '10px 20px',
                    fontWeight: 500,
                    color: 'var(--color-ink)',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'var(--color-surface-soft)'}
                  onMouseLeave={(e) => e.target.style.background = 'transparent'}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#customers" style={navLinkStyle}>Customers</a>
          <a href="#integrations" style={navLinkStyle}>Integrations</a>
          <a href="#pricing" style={navLinkStyle}>Pricing</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-nav">
          <a href="#" style={navLinkStyle}>Sign In</a>
          <a href="#contact" className="btn-primary">
            Request a Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          style={{ display: 'none', background: 'none', padding: '8px', color: 'var(--color-ink)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="mobile-nav" style={{
          display: 'none',
          borderTop: '1px solid var(--color-hairline-soft)',
          padding: '16px 24px',
          background: 'var(--color-canvas)'
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
