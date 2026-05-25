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
    <div id="modules">
      {features.map((feature, featureIdx) => (
        <section
          key={feature.id}
          id={feature.id}
          className="section"
          style={{
            paddingTop: featureIdx === 0 ? '96px' : '64px',
            paddingBottom: featureIdx === features.length - 1 ? '96px' : '64px',
            background: featureIdx % 2 === 0 ? 'var(--color-bg)' : 'var(--color-surface)',
            borderTop: featureIdx === 0 ? '1px solid var(--color-border)' : 'none',
            borderBottom: featureIdx < features.length - 1 ? '1px solid var(--color-border)' : 'none'
          }}
        >
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
                <span className="badge-pill" style={{ marginBottom: '16px', display: 'inline-block' }}>
                  {feature.eyebrow}
                </span>
                <h2 className="display-md" style={{ marginTop: '12px', marginBottom: '16px' }}>
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
                      gap: '12px',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                      fontFamily: 'var(--font-body)'
                    }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '22px',
                        height: '22px',
                        borderRadius: 'var(--rounded-sm)',
                        background: 'var(--color-primary-soft)',
                        color: 'var(--color-primary)',
                        flexShrink: 0,
                        marginTop: '1px'
                      }}>
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="btn-secondary"
                  style={{
                    borderRadius: 'var(--rounded-md)',
                    padding: '12px 24px',
                    height: '44px'
                  }}
                >
                  Learn More
                </a>
              </div>

              <div style={{ direction: 'ltr' }}>
                <div style={{
                  borderRadius: 'var(--rounded-lg)',
                  overflow: 'hidden',
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)'
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
    </div>
  );
};

export default Features;
