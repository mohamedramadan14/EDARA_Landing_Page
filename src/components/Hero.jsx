import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section" style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}>
      <div className="container">
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '7fr 5fr',
          gap: '64px',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '520px' }}>
            <h1 className="display-xl">
              Smart HR for Smarter Businesses
            </h1>
            <p className="body-md" style={{
              marginTop: '20px',
              marginBottom: '32px',
              fontSize: '18px',
              color: 'var(--color-body)'
            }}>
              Workforce management made simple and efficient
            </p>
            <a href="#contact" className="btn-primary" style={{
              height: '44px',
              padding: '14px 24px',
              fontSize: '15px',
              borderRadius: 'var(--rounded-md)',
              gap: '8px'
            }}>
              Book a Live Demo
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div style={{
            background: 'var(--color-canvas)',
            border: '1px solid var(--color-hairline)',
            borderRadius: 'var(--rounded-xl)',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden',
            padding: '0'
          }}>
            <img
              src="/images/hero.png"
              alt="EDARA HR scheduling interface preview"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
