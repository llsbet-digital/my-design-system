import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './datagrid.css';

const SortIcon = ({ dir }) => {
  if (!dir) return (
    <svg className="datagrid__sort-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <polyline points="3,5 7,2 11,5" />
      <polyline points="3,9 7,12 11,9" />
    </svg>
  );
  if (dir === 'asc') return (
    <svg className="datagrid__sort-icon datagrid__sort-icon--asc" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="3,9 7,4 11,9" />
    </svg>
  );
  return (
    <svg className="datagrid__sort-icon datagrid__sort-icon--desc" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="3,5 7,10 11,5" />
    </svg>
  );
};

export const DataGrid = ({
  columns = [],
  rows = [],
  emptyMessage = 'No data to display',
  showFooter = true,
  ...props
}) => {
  const [sort, setSort] = useState({ key: null, dir: null });

  const toggleSort = (key) => {
    setSort((prev) => {
      if (prev.key !== key) return { key, dir: 'asc' };
      if (prev.dir === 'asc') return { key, dir: 'desc' };
      return { key: null, dir: null };
    });
  };

  const sorted = useMemo(() => {
    if (!sort.key) return rows;
    return [...rows].sort((a, b) => {
      const av = a[sort.key] ?? '';
      const bv = b[sort.key] ?? '';
      const cmp = String(av).localeCompare(String(bv), undefined, { numeric: true });
      return sort.dir === 'asc' ? cmp : -cmp;
    });
  }, [rows, sort]);

  return (
    <div className="datagrid-wrap" {...props}>
      <table className="datagrid">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>
                {col.sortable !== false ? (
                  <span
                    className="datagrid__th-inner"
                    onClick={() => toggleSort(col.key)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && toggleSort(col.key)}
                  >
                    {col.label}
                    <SortIcon dir={sort.key === col.key ? sort.dir : null} />
                  </span>
                ) : col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="datagrid__empty">{emptyMessage}</td>
            </tr>
          ) : (
            sorted.map((row, i) => (
              <tr key={row.id ?? i}>
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      {showFooter && (
        <div className="datagrid__footer">
          <span>{sorted.length} result{sorted.length !== 1 ? 's' : ''}</span>
        </div>
      )}
    </div>
  );
};

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
      render: PropTypes.func,
    })
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
  emptyMessage: PropTypes.string,
  showFooter: PropTypes.bool,
};
