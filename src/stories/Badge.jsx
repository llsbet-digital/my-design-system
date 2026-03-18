import React from 'react';
import PropTypes from 'prop-types';
import './badge.css';

/**
 * Badge / pill component for status, labels, and categories.
 * Built from the Untitled UI design system.
 */
export const Badge = ({
  label,
  color = 'gray',
  size = 'md',
  dot = false,
  iconLeading,
  iconTrailing,
}) => {
  return (
    <span className={['badge', `badge--${size}`, `badge--${color}`].join(' ')}>
      {dot && <span className="badge__dot" aria-hidden="true" />}
      {iconLeading && <span className="badge__icon">{iconLeading}</span>}
      {label}
      {iconTrailing && <span className="badge__icon">{iconTrailing}</span>}
    </span>
  );
};

Badge.propTypes = {
  /** Badge text */
  label: PropTypes.string.isRequired,
  /** Color variant */
  color: PropTypes.oneOf([
    'gray', 'brand', 'error', 'warning', 'success',
    'blue-gray', 'blue-light', 'blue', 'indigo',
    'purple', 'pink', 'rose', 'orange',
  ]),
  /** Size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Show status dot */
  dot: PropTypes.bool,
  /** Leading icon */
  iconLeading: PropTypes.node,
  /** Trailing icon */
  iconTrailing: PropTypes.node,
};
