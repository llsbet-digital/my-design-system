import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

const PrevIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="10,4 6,8 10,12" />
  </svg>
);
const NextIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6,4 10,8 6,12" />
  </svg>
);

function buildPages(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '...', total];
  if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  return [1, '...', current - 1, current, current + 1, '...', total];
}

export const Pagination = ({
  page = 1,
  totalPages = 10,
  showLabels = false,
  onChange,
  ...props
}) => {
  const pages = buildPages(page, totalPages);

  return (
    <nav className="pagination" aria-label="Pagination" {...props}>
      <button
        className="pagination__btn"
        onClick={() => onChange?.(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        <PrevIcon />
        {showLabels && 'Previous'}
      </button>

      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="pagination__dots">…</span>
        ) : (
          <button
            key={p}
            className={`pagination__btn${p === page ? ' pagination__btn--active' : ''}`}
            onClick={() => onChange?.(p)}
            aria-current={p === page ? 'page' : undefined}
          >
            {p}
          </button>
        )
      )}

      <button
        className="pagination__btn"
        onClick={() => onChange?.(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
      >
        {showLabels && 'Next'}
        <NextIcon />
      </button>
    </nav>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  showLabels: PropTypes.bool,
  onChange: PropTypes.func,
};
