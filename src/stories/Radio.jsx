import React from 'react';
import PropTypes from 'prop-types';
import './radio.css';

export const RadioOption = ({ size = 'md', value, label, hint, checked, disabled, onChange, name }) => (
  <label className={`radio-row${disabled ? ' radio-row--disabled' : ''}`}>
    <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={onChange} />
    <span className={['radio__dot', `radio__dot--${size}`, checked ? 'radio__dot--checked' : ''].filter(Boolean).join(' ')} />
    {label && (
      <span className="radio__content">
        <span className="radio__label">{label}</span>
        {hint && <span className="radio__hint">{hint}</span>}
      </span>
    )}
  </label>
);

export const RadioGroup = ({
  name,
  options = [],
  value,
  onChange,
  direction = 'vertical',
  size = 'md',
}) => (
  <div className={`radio-group${direction === 'horizontal' ? ' radio-group--horizontal' : ''}`}>
    {options.map((opt) => (
      <RadioOption
        key={opt.value}
        name={name}
        size={size}
        value={opt.value}
        label={opt.label}
        hint={opt.hint}
        checked={value === opt.value}
        disabled={opt.disabled}
        onChange={() => onChange?.(opt.value)}
      />
    ))}
  </div>
);

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string,
      hint: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  size: PropTypes.oneOf(['sm', 'md']),
};
