//types
import type { Crumb } from 'modules/components/Crumbs';
//hooks
import { useState } from 'react';
import { useLanguage } from 'r22n';
//components
import Link from 'next/link';
import { Translate } from 'r22n';
import { LayoutPanel } from 'modules/theme';
import Crumbs from 'modules/components/Crumbs';
import Props from 'modules/components/Props';
import Code, { InlineCode as C } from 'modules/components/Code';

const Tabs = ({ tabs }: { tabs: { label: string; content: React.ReactNode }[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button 
            key={index} 
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

const TabsPage: React.FC = () => {
  //hooks
  const { _ } = useLanguage();

  //variables
  const crumbs: Crumb[] = [
    { icon: 'icons', label: 'Components', href: '/component' },
    { label: 'Tabs' }
  ];

  const props = [
    [ _('tabs'), _('Array'), _('Yes'), _('Array of tab objects with label and content') ],
  ];

  const sampleTabs = [
    { label: _('Tab 1'), content: <div>{_('Content for Tab 1')}</div> },
    { label: _('Tab 2'), content: <div>{_('Content for Tab 2')}</div> },
    { label: _('Tab 3'), content: <div>{_('Content for Tab 3')}</div> }
  ];

  return (
    <LayoutPanel 
      uri="/component/tabs"
      title="Tabs Component"
      description="Tabs allow users to switch between different sections of content."
    >
      <main className="flex flex-col h-full w-full">
        <div className="p-3 bg-b2">
          <Crumbs crumbs={crumbs} />
        </div>
        <section className="flex-grow relative h-full">
        <div className="absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto">
            <h1 id="top" className="flex items-center uppercase font-bold text-xl">
              {_('Tabs')}
            </h1>
          <Code language="typescript" className="mt-2">
            {`import Tabs from 'frui/Tabs';`}
          </Code>
          
          <h2 id="props" className="uppercase font-bold text-lg mt-8">
            {_('Props')}
          </h2>
          <Props props={props} />
          
          <h2 id="example" className="uppercase font-bold text-lg mt-8">
            {_('Example')}
          </h2>
          <div className="curved overflow-hidden">
            <div className="flex items-center justify-center p-3 bg-b1">
              <Tabs tabs={sampleTabs} />
            </div>
            <Code language="typescript">
              {`<Tabs tabs={[{ label: 'Tab 1', content: <div>Content 1</div> }, { label: 'Tab 2', content: <div>Content 2</div> }]} />`}
            </Code>
          </div>
        </div>
        </section>
      </main>
    </LayoutPanel>
  );
};

export default TabsPage;
