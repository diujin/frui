//types
import type { Crumb } from 'modules/components/Crumbs';
//hooks
import { useLanguage } from 'r22n';
//components
import Link from 'next/link';
import { Translate } from 'r22n';
import Currency from 'frui/dist/formats/Currency';
import { LayoutPanel } from 'modules/theme';
import Crumbs from 'modules/components/Crumbs';
import Props from 'modules/components/Props';
import Code, { InlineCode as C } from 'modules/components/Code';

export default function Home() {
  //hooks
  const { _ } = useLanguage();
  //variables
  const crumbs: Crumb[] = [
    { icon: 'text-height', label: 'Formats', href: '/format' },
    { label: 'Currency' }
  ];

  const props = [
    [ _('className'), _('string'), _('No'), _('Standard HTML class names') ],
    [ _('flag'), _('boolean'), _('No'), _('Show flag') ],
    [ _('lg'), _('boolean'), _('No'), _('Show large currency flag') ],
    [ _('md'), _('boolean'), _('No'), _('Show medium size currency flag') ],
    [ _('sm'), _('boolean'), _('No'), _('Show small currency flag') ],
    [ _('style'), _('CSS Object'), _('No'), _('Standard CSS object') ],
    [ _('text'), _('boolean'), _('No'), _('Show currency text') ],
    [ _('value'), _('string'), _('Yes'), _('Default value') ],
  ];
  //render
  return (
    <LayoutPanel>
      <main className="flex flex-col h-full w-full">
        <div className="p-3 bg-b2">
          <Crumbs crumbs={crumbs} />
        </div>
        <div className="flex-grow relative h-full">
          <aside className="hidden lg:block absolute top-0 bottom-0 right-0 z-1 w-56 border-l border-b1 text-sm">
            <h4 className="p-3 border-b border-b1 bg-b1 uppercase font-semibold">
              <Link href="#top">{_('Currency')}</Link>
            </h4>
            <ul className="list-disc py-3 pr-3 pl-6">
              <li className="pl-3 pb-1">
                <Link href="#props">
                  {_('Props')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#basic">
                  {_('Basics')}
                </Link>
              </li>
              <li className="pl-3 pb-1">
                <Link href="#customize">
                  {_('Customize')}
                </Link>
              </li>
            </ul>
          </aside>
          <div className="absolute top-0 bottom-0 left-0 right-0 lg:right-56 px-3 pt-3 pb-5 h-full overflow-auto">
            <h1 id="top" className="flex items-center uppercase font-bold text-xl">
              {_('Currency')}
            </h1>
            <Code language="typescript" className="mt-2">
              {`import Currency from 'frui/formats/Currency';`}
            </Code>
            
            <h2 id="props" className="uppercase font-bold text-lg mt-8">
              {_('Props')}
            </h2>
            <Props props={props} />

            <h2 id="basic" className="uppercase font-bold text-lg mt-8">
              {_('Basics')}
            </h2>
            <div className="curved overflow-hidden">
              <div className="flex items-center justify-center p-3 bg-b1">
                <Currency value="USD" />
              </div>
              <Code language="typescript">
                {`<Currency value="USD" />`}
              </Code>
            </div>

            <h2 id="customize" className="uppercase font-bold text-lg mt-8">
              {_('Customize')}
            </h2>
            <p className="py-4">
              <Translate>
                You can apply different sizes to the 
                <C l value="Currency" /> format.
              </Translate>
            </p>

            <h3 className="font-semibold text-md mt-8">
              {_('Flag')}
            </h3>
            <p className="py-4">
              <Translate>
                Use <C value="flag" /> prop to hide the currency flag.
              </Translate>
            </p>
            <div className="curved overflow-hidden">
              <div className="flex items-center justify-center p-3 bg-b1">
                <Currency flag={false} value="USD" />
              </div>
              <Code language="typescript">
                {`<Currency flag={false} value="USD" />`}
              </Code>
            </div>

            <h3 className="font-semibold text-md mt-8">
              {_('Sizes')}
            </h3>
            <p className="py-4">
              <Translate>
                Use <C value="sm" />, <C value="md" />, or <C value="lg" r /> 
                props to change the size of the currency flag.
              </Translate>
            </p>
            <div className="curved overflow-hidden">
              <div className="flex items-center justify-center p-3 bg-b1">
                <Currency lg value="USD" />
              </div>
              <Code language="typescript">
                {`<Currency lg value="USD" />`}
              </Code>
            </div>

            <p className="py-4">
              <Translate>
                You can also add your own custom class to 
                <C l value="Currency" /> format or use any combination of 
                <C l value="frui-format-country" />, and
                <C l value="frui-format-country-flag" /> CSS classes.
              </Translate>
            </p>

            <div className="flex items-center border-t border-b2 mt-8 pt-4">
              <Link className="text-t2" href="/format/country">
                <i className="fas fa-arrow-left mr-2"></i>
                {_('Country')}
              </Link>
              <div className="flex-grow"></div>
              <Link className="text-t2" href="/format/date">
                {_('Date')}
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </LayoutPanel>
  );
}
