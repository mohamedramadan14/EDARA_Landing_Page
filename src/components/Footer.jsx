import { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const canvasRef = useRef(null);
  const footerRef = useRef(null);
  const edaraRef = useRef(null);
  const textContainerRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [edaraHovered, setEdaraHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [containerWidth, setContainerWidth] = useState(0);

  // Intersection Observer for EDARA scroll-reveal
  useEffect(() => {
    const el = edaraRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 25000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.4 + 0.1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.005
        });
      }
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(126, 168, 232, 0.04)';
      ctx.lineWidth = 0.5;
      const gridSize = 48;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const currentOpacity = p.opacity * (0.6 + Math.sin(p.pulse) * 0.4);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(126, 168, 232, ${currentOpacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    const handleResize = () => { resize(); createParticles(); };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleEdaraMouseMove = (e) => {
    const rect = textContainerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setContainerWidth(rect.width);
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const edaraLetters = 'EDARA'.split('');

  const getLetterStyle = (index, totalLetters) => {
    if (!edaraHovered || containerWidth === 0) {
      return {
        transform: 'scale(1) translateY(0)',
        textShadow: '0 0 16px rgba(126, 168, 232, 0.3), 0 0 40px rgba(23, 59, 112, 0.15), 0 0 80px rgba(126, 168, 232, 0.08)',
        animation: `edara-letter-glow 3.5s ease-in-out ${index * 0.3}s infinite`
      };
    }
    const letterWidth = containerWidth / totalLetters;
    const letterCenterX = letterWidth * (index + 0.5);
    const dx = cursorPos.x - letterCenterX;
    const dy = cursorPos.y - 60;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 200;
    const proximity = Math.max(0, 1 - distance / maxDist);
    const scale = 1 + proximity * 0.12;
    const translateY = -proximity * 6;
    const glowIntensity = proximity * 0.5;
    return {
      transform: `scale(${scale}) translateY(${translateY}px)`,
      textShadow: `0 0 ${8 + proximity * 30}px rgba(126, 168, 232, ${0.12 + glowIntensity}), 0 0 ${proximity * 60}px rgba(23, 59, 112, ${glowIntensity * 0.5})`,
      animation: 'none'
    };
  };

  return (
    <footer
      ref={footerRef}
      style={{
        position: 'relative',
        background: '#050E1C',
        color: 'var(--color-on-dark-soft)',
        overflow: 'hidden'
      }}
    >
      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Floating orbs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(23, 59, 112, 0.25) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'glow-drift 20s ease-in-out infinite',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '15%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(45, 101, 176, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)',
        animation: 'glow-drift 25s ease-in-out infinite reverse',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '50%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(23, 59, 112, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'glow-pulse 8s ease-in-out infinite',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '32px' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px'
        }}>
          <div style={{ maxWidth: '360px' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'var(--color-on-dark-soft)',
              marginBottom: '20px'
            }}>
              The first AI-powered HR system in Egypt & Saudi Arabia — from face-scan attendance to smart hiring. Trusted by 1000+ companies.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'var(--color-on-dark-soft)',
              marginBottom: '24px'
            }}>
              34 Makram Ebeid, Nasr City, Cairo, Egypt<br />
              <a href="tel:01203333843" style={{
                color: 'var(--color-on-dark-soft)',
                transition: 'color 0.18s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-on-dark)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-on-dark-soft)'}
              >0120 333 3843</a>
              {' · '}
              <a href="mailto:info@dynamicmeg.com" style={{
                color: 'var(--color-on-dark-soft)',
                transition: 'color 0.18s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-on-dark)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-on-dark-soft)'}
              >info@dynamicmeg.com</a>
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { label: 'LinkedIn', icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                )},
                { label: 'Share', icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                )},
                { label: 'Instagram', icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                )},
                { label: 'TikTok', icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                )}
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--rounded-md)',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-on-dark-soft)',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(126, 168, 232, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(126, 168, 232, 0.3)';
                    e.currentTarget.style.color = 'var(--color-on-dark)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(126, 168, 232, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'var(--color-on-dark-soft)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: 'Product',
              links: ['Time & Attendance', 'AI Recruitment', 'Payroll', 'Performance', 'Integrations']
            },
            {
              title: 'Company',
              links: ['Customers', 'Pricing', 'About', 'Contact', 'Request a Demo']
            },
            {
              title: 'Legal',
              links: ['Terms of Service', 'Privacy Policy']
            }
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-on-dark)',
                marginBottom: '24px'
              }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={link === 'Request a Demo' ? '#contact' : '#'}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: 'var(--color-on-dark-soft)',
                        transition: 'color 0.18s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--color-on-dark)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--color-on-dark-soft)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* EDARA brand mark — full width, above separator */}
        <div
          ref={edaraRef}
          onMouseEnter={() => setEdaraHovered(true)}
          onMouseLeave={() => { setEdaraHovered(false); setCursorPos({ x: 0, y: 0 }); }}
          onMouseMove={handleEdaraMouseMove}
          style={{
            position: 'relative',
            marginTop: '64px',
            marginBottom: '28px',
            padding: '24px 0',
            cursor: 'default',
            opacity: revealed ? 1 : 0,
            transform: revealed ? 'translateY(0)' : 'translateY(16px)',
            filter: revealed ? 'blur(0)' : 'blur(6px)',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          aria-label="EDARA brand mark"
        >
          {/* Cursor spotlight glow */}
          <div style={{
            position: 'absolute',
            left: cursorPos.x - 120,
            top: cursorPos.y - 120,
            width: 240,
            height: 240,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(126, 168, 232, 0.12) 0%, transparent 70%)',
            opacity: edaraHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <div
            ref={textContainerRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(8px, 1vw, 18px)',
              position: 'relative',
              zIndex: 1
            }}
          >
            {edaraLetters.map((letter, i) => {
              const letterStyle = getLetterStyle(i, edaraLetters.length);
              return (
                <span
                  key={i}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(100px, 18vw, 280px)',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: '#7EA8E8',
                    textShadow: letterStyle.textShadow,
                    transform: letterStyle.transform,
                    animation: letterStyle.animation,
                    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), text-shadow 0.25s ease',
                    userSelect: 'none',
                    display: 'inline-block'
                  }}
                >
                  {letter}
                </span>
              );
            })}
            <span style={{
              width: 'clamp(18px, 2.4vw, 38px)',
              height: 'clamp(18px, 2.4vw, 38px)',
              borderRadius: '50%',
              background: '#7EA8E8',
              boxShadow: edaraHovered
                ? '0 0 16px rgba(126, 168, 232, 0.6), 0 0 40px rgba(126, 168, 232, 0.3)'
                : '0 0 8px rgba(126, 168, 232, 0.35), 0 0 20px rgba(126, 168, 232, 0.15)',
              animation: revealed ? 'edara-dot-pulse 2.5s ease-in-out infinite' : 'none',
              transition: 'box-shadow 0.4s ease',
              flexShrink: 0,
              alignSelf: 'center',
              marginTop: 'clamp(-12px, -1.6vw, -24px)'
            }} />
          </div>
        </div>

        <div className="footer-bottom" style={{
          paddingTop: '28px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: 'var(--color-on-dark-soft)',
            opacity: 0.7
          }}>
            © 2026 EDARA HR System · Dynamic Business Solutions. All rights reserved.
          </span>
          <div>
            <a href="#" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--color-on-dark-soft)',
              marginRight: '24px',
              opacity: 0.7,
              transition: 'opacity 0.18s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.7'}
            >Terms of Service</a>
            <a href="#" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--color-on-dark-soft)',
              opacity: 0.7,
              transition: 'opacity 0.18s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.7'}
            >Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
