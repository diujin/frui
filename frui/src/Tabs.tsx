import React, { useState } from "react";
import "frui/dist/tabs.css";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-wrapper">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button 
            key={index} 
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <div className="tabs-panel">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
