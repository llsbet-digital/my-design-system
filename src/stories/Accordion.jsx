import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './accordion.css';

const ChevronIcon = ({ open }) => (
  <svg
    className={`accordion__chevron${open ? ' accordion__chevron--open' : ''}`}
    width="20" height="20" viewBox="0 0 20 20" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <polyline points="5,8 10,13 15,8" />
  </svg>
);

export const Accordion = ({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  ...props
}) => {
  const [open, setOpen] = useState(new Set(defaultOpen));

  const toggle = (value) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  return (
    <div className="accordion" {...props}>
      {items.map((item) => {
        const isOpen = open.has(item.value);
        return (
          <div key={item.value} className="accordion__item">
            <button
              className="accordion__trigger"
              onClick={() => toggle(item.value)}
              aria-expanded={isOpen}
            >
              {item.title}
              <ChevronIcon open={isOpen} />
            </button>
            {isOpen && (
              <div className="accordion__panel">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ),
  allowMultiple: PropTypes.bool,
  defaultOpen: PropTypes.arrayOf(PropTypes.string),
};
