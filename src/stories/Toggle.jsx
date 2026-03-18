import React from 'react';
import PropTypes from 'prop-types';
import './toggle.css';

export const Toggle = ({
  size = 'md',
  checked = false,
  label,
  labelPosition = 'right',
  disabled = false,
  onChange,
  ...props
}) => {
  const trackClass = [
    'toggle__track',
    `toggle__track--${size}`,
    checked ? 'toggle__track--on' : '',
  ].filter(Boolean).join(' ');

  const toggle = (
    <label className={`toggle-row${disabled ? ' toggle-row--disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      {label && labelPosition === 'left' && (
        <span className="toggle__label">{label}</span>
      )}
      <span className={trackClass}>
        <span className="toggle__thumb" />
      </span>
      {label && labelPosition === 'right' && (
        <span className="toggle__label">{label}</span>
      )}
    </label>
  );

  return toggle;
};

Toggle.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  checked: PropTypes.bool,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
