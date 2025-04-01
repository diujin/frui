import type { ReactNode, CSSProperties } from 'react';
import { useState } from 'react';

/**
 * Props for individual Tab
 */
export type TabProps = {
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
  vertical?: boolean;
};

/**
 * Props for TabPanel
 */
export type TabPanelProps = {
  children: ReactNode;
  isActive?: boolean;
  style?: CSSProperties;
  className?: string;
};

/**
 * Tabs Component Props
 */
export type TabsProps = {
  tabs: TabProps[];
  panels: ReactNode[];
  vertical?: boolean;
  scrollable?: boolean;
  centered?: boolean;
  fullWidth?: boolean;
  wrap?: boolean;
};

/**
 * Generic Tabs Component (Main)
 */
export default function Tabs(props: TabsProps) {
  // Destructure props
  const {
    tabs,
    panels,
    vertical = false,
    scrollable = false,
    centered = false,
    fullWidth = false,
    wrap = false,
  } = props;

  const [activeTab, setActiveTab] = useState(0);

  const tabListClass = `tab-list 
  ${vertical ? 'tab-list-vertical' : ''} 
  ${scrollable ? 'tab-list-scrollable' : ''} 
  ${centered ? 'tab-list-centered' : ''} 
  ${!vertical && fullWidth ? 'tab-list-fullwidth' : ''}`;


  return (
    <div className={`tabs ${wrap ? 'wrap' : ''} ${vertical ? 'tabs-vertical' : ''}`}>
      <div className="tab-container">
        <div className={tabListClass}>
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              icon={tab.icon}
              disabled={tab.disabled}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
              style={tab.style}
              className={tab.className}
              vertical={vertical}
            />
          ))}
        </div>
        <div className="tab-panels">
          {panels.map((panel, index) => (
            <TabPanel key={index} isActive={activeTab === index}>
              {panel}
            </TabPanel>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tab({ label, icon, disabled, isActive, onClick, style, className, vertical }: TabProps) {
  const tabClass = `tab ${isActive ? 'tab-active' : ''} ${disabled ? 'tab-disabled' : ''} ${vertical ? 'tab-vertical' : ''} ${className || ''}`;
  const iconClass = `tab-icon ${icon ? 'tab-icon-show' : ''}`;

  return (
    <div className={tabClass} style={style} onClick={disabled ? undefined : onClick}>
      {icon && <span className={iconClass}>{icon}</span>}
      <span className="tab-label">{label}</span>
    </div>
  );
}

function TabPanel({ children, isActive, style, className }: TabPanelProps) {
  const panelClass = `tab-panel ${isActive ? 'tab-panel-active' : ''} ${className || ''}`;

  return (
    <div className={panelClass} style={style}>
      {children}
    </div>
  );
}