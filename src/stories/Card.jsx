import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

export const Card = ({
  title,
  subtitle,
  headerAction,
  children,
  footer,
  shadow = 'sm',
  noBorder = false,
  style,
  ...props
}) => {
  const classes = [
    'card',
    shadow !== 'sm' ? `card--shadow-${shadow}` : '',
    noBorder ? 'card--no-border' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style} {...props}>
      {(title || headerAction) && (
        <div className="card__header">
          <div className="card__header-text">
            {title && <h3 className="card__title">{title}</h3>}
            {subtitle && <p className="card__subtitle">{subtitle}</p>}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className="card__body">{children}</div>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headerAction: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node,
  shadow: PropTypes.oneOf(['sm', 'md', 'lg']),
  noBorder: PropTypes.bool,
  style: PropTypes.object,
};
