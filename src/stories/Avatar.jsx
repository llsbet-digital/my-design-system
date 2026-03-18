import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css';

export const Avatar = ({
  size = 'md',
  color = 'gray',
  src,
  alt = '',
  initials,
  indicator,
  ...props
}) => {
  const classes = ['avatar', `avatar--${size}`, `avatar--${color}`].join(' ');

  const content = src ? (
    <img src={src} alt={alt} />
  ) : initials ? (
    <span>{initials.slice(0, 2).toUpperCase()}</span>
  ) : (
    <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );

  return (
    <div className={classes} {...props}>
      {content}
      {indicator && (
        <span className={`avatar__indicator avatar__indicator--${indicator}`} />
      )}
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  color: PropTypes.oneOf(['gray', 'brand', 'error', 'warning', 'success']),
  src: PropTypes.string,
  alt: PropTypes.string,
  initials: PropTypes.string,
  indicator: PropTypes.oneOf(['online', 'offline', 'busy']),
};
