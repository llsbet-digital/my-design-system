import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2,6 5,9 10,3" />
  </svg>
);

const IndeterminateIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="2" y1="6" x2="10" y2="6" />
  </svg>
);

export const Checkbox = ({
  size = 'md',
  checked = false,
  indeterminate = false,
  label,
  hint,
  errorMessage,
  disabled = false,
  onChange,
  ...props
}) => {
  const isError = !!errorMessage;
  const boxClasses = [
    'checkbox__box',
    `checkbox__box--${size}`,
    checked ? 'checkbox__box--checked' : '',
    indeterminate ? 'checkbox__box--indeterminate' : '',
    isError ? 'checkbox__box--error' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className="checkbox-field">
      <label className={`checkbox-row${disabled ? ' checkbox-row--disabled' : ''}`}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          ref={(el) => { if (el) el.indeterminate = indeterminate; }}
          {...props}
        />
        <span className={boxClasses}>
          {checked && !indeterminate && <CheckIcon />}
          {indeterminate && <IndeterminateIcon />}
        </span>
        {label && (
          <span className="checkbox__content">
            <span className="checkbox__label">{label}</span>
            {hint && <span className="checkbox__hint">{hint}</span>}
          </span>
        )}
      </label>
      {isError && <span className="checkbox__error-msg">{errorMessage}</span>}
    </div>
  );
};

Checkbox.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
