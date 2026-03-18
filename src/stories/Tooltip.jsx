import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './tooltip.css';

export const Tooltip = ({
  content,
  position = 'top',
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      {...props}
    >
      {children}
      {visible && content && (
        <span className={`tooltip__bubble tooltip__bubble--${position}`} role="tooltip">
          {content}
        </span>
      )}
    </span>
  );
};

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  children: PropTypes.node.isRequired,
};
