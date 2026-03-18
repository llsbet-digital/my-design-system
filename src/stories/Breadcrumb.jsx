import React from 'react';
import PropTypes from 'prop-types';
import './breadcrumb.css';

const SlashSep = () => (
  <svg className="breadcrumb__separator" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="10" y1="2" x2="6" y2="14" />
  </svg>
);

const ChevronSep = () => (
  <svg className="breadcrumb__separator" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6,4 10,8 6,12" />
  </svg>
);

export const Breadcrumb = ({
  items = [],
  separator = 'slash',
  onNavigate,
  ...props
}) => {
  const Sep = separator === 'chevron' ? ChevronSep : SlashSep;

  return (
    <nav aria-label="Breadcrumb" {...props}>
      <ol className="breadcrumb">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="breadcrumb__item">
              {i > 0 && <Sep />}
              {isLast ? (
                <span className="breadcrumb__current" aria-current="page">{item.label}</span>
              ) : (
                <button
                  className="breadcrumb__link"
                  onClick={() => onNavigate?.(item)}
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  separator: PropTypes.oneOf(['slash', 'chevron']),
  onNavigate: PropTypes.func,
};
