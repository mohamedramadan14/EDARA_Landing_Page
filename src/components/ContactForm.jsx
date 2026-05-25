import { useState } from 'react';
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
    fontWeight: 600,
    lineHeight: 1.4,
    color: 'var(--color-text)',
    marginBottom: '6px'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  };

  const SelectedFlag = selectedCountry.Flag;

  return (
    <section
      id="contact"
      className="section"
      style={{
        background: 'var(--color-surface-2)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge-pill" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Get Started
          </span>
          <h2 className="display-sm" style={{ color: 'var(--color-text)', marginTop: '12px' }}>
            Fill Out <span style={{ color: 'var(--color-primary)' }}>The Form</span>
          </h2>
          <p className="body-md" style={{ marginTop: '12px', color: 'var(--color-primary)' }}>
            Start using the system on the same day
          </p>
        </div>

        <div
          className="form-card"
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            background: 'var(--color-surface)',
            borderRadius: 'var(--rounded-xl)',
            padding: '48px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--color-border)'
          }}
        >
          <form onSubmit={handleSubmit}>
            <div
              className="form-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                alignItems: 'start'
              }}
            >
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-input"
                  required
                />
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Job Title</label>
                <input
                  type="text"
                  name="job"
                  placeholder="Type your job title"
                  value={formData.job}
                  onChange={handleChange}
                  className="text-input"
                  required
                />
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Phone</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <button
                      type="button"
                      onClick={() => setCountryOpen(!countryOpen)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '0 12px',
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--rounded-md)',
                        fontSize: '14px',
                        color: 'var(--color-text)',
                        flexShrink: 0,
                        height: '44px',
                        cursor: 'pointer',
                        transition: 'border-color 0.18s ease'
                      }}
                    >
                      <SelectedFlag style={{ width: '20px', height: '14px', borderRadius: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', fontWeight: 500 }}>{selectedCountry.code}</span>
                    </button>
                    {countryOpen && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 4px)',
                        left: 0,
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
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
                                color: 'var(--color-text)',
                                textAlign: 'left',
                                transition: 'background 0.18s ease'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-surface-2)'}
                              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                              <FlagComponent style={{ width: '20px', height: '14px', borderRadius: '2px', flexShrink: 0 }} />
                              <span style={{ fontWeight: 500 }}>{option.name} {option.code}</span>
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
                    style={{ flex: 1 }}
                    required
                  />
                </div>
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-input"
                  required
                />
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Company Name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Type your company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="text-input"
                  required
                />
              </div>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Number of Employees</label>
                <input
                  type="number"
                  name="employees"
                  placeholder="Type number of employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className="text-input"
                  required
                />
              </div>
              <div style={{ gridColumn: '1 / -1', ...inputGroupStyle }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Type your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="text-input"
                  style={{
                    height: 'auto',
                    resize: 'vertical',
                    paddingTop: '12px',
                    minHeight: '100px'
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{
                marginTop: '28px',
                width: '100%',
                padding: '16px',
                fontSize: '16px',
                height: '52px',
                borderRadius: 'var(--rounded-md)'
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
