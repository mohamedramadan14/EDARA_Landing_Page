import React, { useState } from 'react';
import { EG, SA, AE } from 'country-flag-icons/react/3x2';

const countryOptions = [
  { code: '+20', country: 'EG', Flag: EG, name: 'EG' },
  { code: '+966', country: 'SA', Flag: SA, name: 'SA' },
  { code: '+971', country: 'AE', Flag: AE, name: 'AE' },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', job: '', phone: '', email: '', company: '', employees: '', message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [countryOpen, setCountryOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.4,
    color: 'var(--color-ink)',
    marginBottom: '6px'
  };

  const SelectedFlag = selectedCountry.Flag;

  return (
    <section id="contact" className="section" style={{ background: 'var(--color-surface-card)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 className="display-sm" style={{ color: 'var(--color-ink)' }}>
            Fill Out <span style={{ color: 'var(--color-muted)' }}>The Form</span>
          </h2>
          <p className="body-md" style={{ marginTop: '12px', color: 'var(--color-body)' }}>
            Start using the system on the same day!
          </p>
        </div>

        <div className="form-card" style={{
          maxWidth: '720px',
          margin: '0 auto',
          background: 'var(--color-canvas)',
          borderRadius: 'var(--rounded-xl)',
          padding: '48px',
          boxShadow: 'var(--shadow-card)'
        }}>
          <form onSubmit={handleSubmit}>
            <div className="form-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input type="text" name="name" placeholder="Type your full name" value={formData.name} onChange={handleChange} className="text-input" required />
              </div>
              <div>
                <label style={labelStyle}>Job Title</label>
                <input type="text" name="job" placeholder="Type your job title" value={formData.job} onChange={handleChange} className="text-input" required />
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ position: 'relative' }}>
                    <button
                      type="button"
                      onClick={() => setCountryOpen(!countryOpen)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '0 12px',
                        background: 'var(--color-canvas)',
                        border: '1px solid var(--color-hairline)',
                        borderRadius: 'var(--rounded-md)',
                        fontSize: '15px',
                        color: 'var(--color-ink)',
                        flexShrink: 0,
                        height: '40px',
                        cursor: 'pointer'
                      }}
                    >
                      <SelectedFlag style={{ width: '20px', height: '14px', borderRadius: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px' }}>{selectedCountry.code}</span>
                    </button>
                    {countryOpen && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 4px)',
                        left: 0,
                        background: 'var(--color-canvas)',
                        border: '1px solid var(--color-hairline)',
                        borderRadius: 'var(--rounded-md)',
                        boxShadow: 'var(--shadow-md)',
                        zIndex: 10,
                        minWidth: '140px'
                      }}>
                        {countryOptions.map((option) => {
                          const FlagComponent = option.Flag;
                          return (
                            <button
                              key={option.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(option);
                                setCountryOpen(false);
                              }}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                width: '100%',
                                padding: '10px 14px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '14px',
                                color: 'var(--color-ink)',
                                textAlign: 'left',
                                transition: 'background 0.2s'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-surface-soft)'}
                              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                              <FlagComponent style={{ width: '20px', height: '14px', borderRadius: '2px', flexShrink: 0 }} />
                              <span>{option.name} {option.code}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(000) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="text-input"
                    required
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input type="email" name="email" placeholder="Type your email" value={formData.email} onChange={handleChange} className="text-input" required />
              </div>
              <div>
                <label style={labelStyle}>Company Name</label>
                <input type="text" name="company" placeholder="Type your company name" value={formData.company} onChange={handleChange} className="text-input" required />
              </div>
              <div>
                <label style={labelStyle}>Number of employees</label>
                <input type="number" name="employees" placeholder="Type number of employees" value={formData.employees} onChange={handleChange} className="text-input" required />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Message</label>
                <textarea name="message" rows={4} placeholder="Type your message" value={formData.message} onChange={handleChange} className="text-input" style={{ height: 'auto', resize: 'vertical', paddingTop: '12px' }} />
              </div>
            </div>
            <button type="submit" className="btn-primary" style={{
              marginTop: '28px',
              width: '100%',
              padding: '16px',
              fontSize: '17px',
              height: '52px'
            }}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
