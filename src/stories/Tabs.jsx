import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './tabs.css';

export const Tabs = ({
  tabs = [],
  defaultTab,
  variant = 'underline',
  ...props
}) => {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.value);

  const currentTab = tabs.find((t) => t.value === active);

  return (
    <div className={`tabs${variant === 'pill' ? ' tabs--pill' : ''}`} {...props}>
      <div className="tabs__list" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`tabs__tab${active === tab.value ? ' tabs__tab--active' : ''}`}
            role="tab"
            aria-selected={active === tab.value}
            disabled={tab.disabled}
            onClick={() => setActive(tab.value)}
          >
            {tab.label}
            {tab.count != null && (
              <span className="tabs__badge">{tab.count}</span>
            )}
          </button>
        ))}
      </div>
      {currentTab?.content && (
        <div className="tabs__panel" role="tabpanel">
          {currentTab.content}
        </div>
      )}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      count: PropTypes.number,
      content: PropTypes.node,
      disabled: PropTypes.bool,
    })
  ),
  defaultTab: PropTypes.string,
  variant: PropTypes.oneOf(['underline', 'pill']),
};
