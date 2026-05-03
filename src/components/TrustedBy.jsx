import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrustedBy = () => {
  return (
    <section className="section" style={{ paddingTop: '40px', paddingBottom: '80px', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(24px, 3vw, 32px)',
          fontWeight: 600,
          lineHeight: 1.3,
          color: 'var(--color-text)',
          marginBottom: '40px'
        }}>
          Trusted by 1050+ Businesses. Empowering Workforces Every Day.
        </h2>

        <div style={{
          position: 'relative',
          maxWidth: '960px',
          margin: '0 auto 40px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <button style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid var(--color-border)',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-muted)',
            flexShrink: 0
          }} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>

          <div style={{
            flex: 1,
            overflow: 'hidden',
            borderRadius: 'var(--radius-md)'
          }}>
            <img
              src="/images/trusted-by.png"
              alt="Trusted company logos"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
              loading="lazy"
            />
          </div>

          <button style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid var(--color-border)',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-muted)',
            flexShrink: 0
          }} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>

        <a href="#contact" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '14px 32px',
          fontSize: '16px',
          fontWeight: 600,
          color: '#fff',
          background: 'var(--color-blue)',
          borderRadius: 'var(--radius-sm)',
          transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.background = 'var(--color-blue-hover)'}
        onMouseLeave={(e) => e.target.style.background = 'var(--color-blue)'}
        >
          Join The Empowered
        </a>
      </div>
    </section>
  );
};

export default TrustedBy;
