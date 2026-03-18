import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

/**
 * Text input field with label, hint, and error states.
 * Built from the Untitled UI design system.
 */
export const Input = ({
  id,
  label,
  placeholder,
  hint,
  errorMessage,
  size = 'md',
  disabled = false,
  iconLeading,
  iconTrailing,
  type = 'text',
  value,
  onChange,
  ...props
}) => {
  const hasError = Boolean(errorMessage);
  const inputId = id || `input-${Math.random().toString(36).slice(2, 7)}`;

  const inputClasses = [
    'input',
    `input--${size}`,
    hasError ? 'input--error' : '',
    iconLeading ? 'input--has-icon-leading' : '',
    iconTrailing ? 'input--has-icon-trailing' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="field">
      {label && (
        <label className="field__label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <div className="input-wrap">
        {iconLeading && (
          <span className="input-wrap__icon-leading" aria-hidden="true">
            {iconLeading}
          </span>
        )}

        <input
          id={inputId}
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          aria-invalid={hasError || undefined}
          aria-describedby={
            hasError ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          {...props}
        />

        {iconTrailing && (
          <span className="input-wrap__icon-trailing" aria-hidden="true">
            {iconTrailing}
          </span>
        )}
      </div>

      {hint && !hasError && (
        <span id={`${inputId}-hint`} className="field__hint">
          {hint}
        </span>
      )}

      {hasError && (
        <span id={`${inputId}-error`} className="field__error-msg" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  /** HTML id for the input (auto-generated if omitted) */
  id: PropTypes.string,
  /** Field label */
  label: PropTypes.string,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Helper text shown below the field */
  hint: PropTypes.string,
  /** Error message — also puts the field in error state */
  errorMessage: PropTypes.string,
  /** Size variant */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Icon rendered inside the left edge */
  iconLeading: PropTypes.node,
  /** Icon rendered inside the right edge */
  iconTrailing: PropTypes.node,
  /** HTML input type */
  type: PropTypes.string,
  /** Controlled value */
  value: PropTypes.string,
  /** Change handler */
  onChange: PropTypes.func,
};
