import React, { useState } from 'react';
import { Globe, ChevronDown, Phone } from 'lucide-react';
import { EG, SA, AE } from 'country-flag-icons/react/3x2';

const countryOptions = [
  { code: 'EG', name: 'Egypt', currency: 'EGP', Flag: EG },
  { code: 'SA', name: 'Saudi Arabia', currency: 'SAR', Flag: SA },
  { code: 'AE', name: 'UAE', currency: 'AED', Flag: AE },
];

const TopBar = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const SelectedFlag = selectedCountry.Flag;

  return (
    <div style={{
      borderBottom: '1px solid var(--color-hairline)',
      padding: '10px 0',
      fontSize: '14px',
      color: 'var(--color-muted)',
      background: 'var(--color-canvas)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button className="body-sm" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-muted)'
          }}>
            <Globe size={16} />
            <span>English</span>
            <ChevronDown size={14} />
          </button>
          <span style={{ color: 'var(--color-hairline)' }}>|</span>
          <div style={{ position: 'relative' }}>
            <button
              className="body-sm"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-muted)'
              }}
            >
              <SelectedFlag style={{ width: '20px', height: '14px', borderRadius: '2px', flexShrink: 0 }} />
              <span>{selectedCountry.name} ({selectedCountry.currency})</span>
              <ChevronDown size={14} />
            </button>
            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                minWidth: '200px',
                background: 'var(--color-canvas)',
                borderRadius: 'var(--rounded-lg)',
                boxShadow: 'var(--shadow-md)',
                padding: '8px 0',
                zIndex: 102
              }}>
                {countryOptions.map((option) => {
                  const FlagComponent = option.Flag;
                  return (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(option);
                        setDropdownOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        width: '100%',
                        padding: '10px 20px',
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
                      <span>{option.name} ({option.currency})</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="body-sm" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Phone size={14} style={{ color: 'var(--color-success)' }} />
          <span>Sales: <a href="tel:01203333843" className="title-sm" style={{ color: 'var(--color-ink)' }}>0120 333 3843</a></span>
        </div>
      </div>
    </div>
  );
};

export { EG, SA, AE, countryOptions };
export default TopBar;
