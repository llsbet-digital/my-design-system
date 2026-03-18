import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction.
 * Built from the Untitled UI design system.
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  label,
  iconLeading,
  iconTrailing,
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      className={['btn', `btn--${size}`, `btn--${variant}`].join(' ')}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {iconLeading && <span className="btn__icon">{iconLeading}</span>}
      {label}
      {iconTrailing && <span className="btn__icon">{iconTrailing}</span>}
    </button>
  );
};

Button.propTypes = {
  /** Visual style */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'secondary-color',
    'tertiary',
    'tertiary-color',
    'destructive',
    'destructive-secondary',
    'link',
    'link-gray',
  ]),
  /** Size */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  /** Button label */
  label: PropTypes.string.isRequired,
  /** Leading icon element */
  iconLeading: PropTypes.node,
  /** Trailing icon element */
  iconTrailing: PropTypes.node,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
};
