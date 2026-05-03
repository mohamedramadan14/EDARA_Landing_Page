import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    id: 'feat-attendance',
    eyebrow: 'MANAGEMENT',
    title: 'Attendance & Leaves Management',
    description: 'Track and manage employee attendance, leave requests, and shift schedules in real time.',
    items: [
      'Clock in/out with GPS tracking',
      'Hassle-free leave approvals',
      'Customizable schedules and policies'
    ],
    image: '/images/feat-1.png',
    alt: 'Attendance and leaves management interface',
    reverse: false
  },
  {
    id: 'feat-payroll',
    eyebrow: 'MANAGEMENT',
    title: 'Payroll Management',
    description: 'Automate payroll calculations, tax deductions, and benefits management. Zero manual errors, simplified compliance, on-time payments.',
    items: [
      'Automated salary calculations',
      'Tax regulations and labor law compliance',
      'Automated benefits management'
    ],
    image: '/images/feat-2.png',
    alt: 'Payroll management interface',
    reverse: true
  },
  {
    id: 'feat-tasks',
    eyebrow: 'PERFORMANCE',
    title: 'Task and Goal Management',
    description: 'Assign tasks, set measurable goals for teams, manage priorities, and keep everyone in sync.',
    items: [
      'Clear goals and KPIs',
      'Automated task reminders',
      'Real-time progress updates'
    ],
    image: '/images/feat-3.png',
    alt: 'Task and goal management dashboard',
    reverse: false
  }
];

const Features = () => {
  return (
    <>
      {features.map((feature) => (
        <section key={feature.id} id={feature.id} className="section" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="container">
            <div
              className="feature-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '64px',
                alignItems: 'center',
                direction: feature.reverse ? 'rtl' : 'ltr'
              }}
            >
              <div style={{ direction: 'ltr', maxWidth: '480px' }}>
                <span className="badge-pill" style={{ marginBottom: '16px' }}>
                  {feature.eyebrow}
                </span>
                <h2 className="display-md" style={{ marginTop: '16px', marginBottom: '16px' }}>
                  {feature.title}
                </h2>
                <p className="body-md" style={{ marginBottom: '24px' }}>
                  {feature.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '32px'
                }}>
                  {feature.items.map((item, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '16px',
                      fontWeight: 500,
                      color: 'var(--color-ink)',
                      fontFamily: 'var(--font-body)'
                    }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        background: 'var(--color-primary)',
                        color: '#fff',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#" className="btn-primary" style={{ borderRadius: 'var(--rounded-pill)' }}>
                  Learn More
                </a>
              </div>

              <div style={{ direction: 'ltr' }}>
                <div style={{
                  borderRadius: 'var(--rounded-lg)',
                  overflow: 'hidden',
                  background: 'var(--color-surface-card)'
                }}>
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Features;
