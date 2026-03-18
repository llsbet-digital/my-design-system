import React from 'react';
import PropTypes from 'prop-types';
import './tag.css';

export const Tag = ({
  size = 'md',
  color = 'gray',
  label,
  onRemove,
  ...props
}) => (
  <span className={['tag', `tag--${size}`, `tag--${color}`].join(' ')} {...props}>
    {label}
    {onRemove && (
      <button className="tag__close" onClick={onRemove} aria-label="Remove">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="2" y1="2" x2="10" y2="10" />
          <line x1="10" y1="2" x2="2" y2="10" />
        </svg>
      </button>
    )}
  </span>
);

Tag.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['gray', 'brand', 'error', 'warning', 'success']),
  label: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};
