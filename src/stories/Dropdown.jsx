import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

const ChevronIcon = ({ open }) => (
  <svg
    className={`dropdown__chevron${open ? ' dropdown__chevron--open' : ''}`}
    width="16" height="16" viewBox="0 0 16 16" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <polyline points="4,6 8,10 12,6" />
  </svg>
);

export const Dropdown = ({
  options = [],
  value,
  placeholder = 'Select an option',
  disabled = false,
  onChange,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div className="dropdown" ref={ref} {...props}>
      <button
        className={[
          'dropdown__trigger',
          open ? 'dropdown__trigger--open' : '',
          disabled ? 'dropdown__trigger--disabled' : '',
        ].filter(Boolean).join(' ')}
        onClick={() => !disabled && setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        type="button"
      >
        <span className={selected ? '' : 'dropdown__placeholder'}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="dropdown__menu" role="listbox">
          {options.map((opt, i) => (
            opt.divider ? (
              <div key={i} className="dropdown__divider" />
            ) : (
              <button
                key={opt.value}
                className={[
                  'dropdown__item',
                  opt.value === value ? 'dropdown__item--selected' : '',
                  opt.disabled ? 'dropdown__item--disabled' : '',
                ].filter(Boolean).join(' ')}
                role="option"
                aria-selected={opt.value === value}
                onClick={() => {
                  if (!opt.disabled) {
                    onChange?.(opt.value);
                    setOpen(false);
                  }
                }}
              >
                {opt.label}
              </button>
            )
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool,
      divider: PropTypes.bool,
    })
  ),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
