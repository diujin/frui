//types
import type { Crumb } from 'modules/components/Crumbs';
//hooks
import { useLanguage } from 'r22n';
import { useRouter } from 'next/router';
//components
import Crumbs from 'modules/components/Crumbs';
import { LayoutPanel } from 'modules/theme';
import Alert from 'frui/dist/Alert';
import Badge from 'frui/dist/Badge';
import Button from 'frui/dist/Button';
import Loader from 'frui/dist/Loader';
import Table, { Thead, Trow, Tcol } from 'frui/dist/Table';

export default function Home() {
  //hooks
  const { _ } = useLanguage();
  const router = useRouter();
  //variables
  const crumbs: Crumb[] = [
    { icon: 'icons', label: 'Components' }
  ];
  //render
  return (
    <LayoutPanel>
      <main className="flex flex-col h-full w-full">
        <div className="p-3 bg-b2">
          <Crumbs crumbs={crumbs} />
        </div>
        <div className="flex-grow px-3 pt-3 pb-5 overflow-auto">
          <h1 className="flex items-center uppercase font-bold text-xl">
            {_('Components')}
          </h1>
          <p className="px-3 pt-3">
            Thanks to our sponsors, contributors, and users. The 
            following components have been unlocked and are free to use.
          </p>
          <div className="flex flex-wrap mt-4">
            <div 
              className="block basis-1/2 md:basis-1/3 text-center cursor-pointer"
              onClick={() => router.push('/component/alert')} 
            >
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-black px-3">
                  <Alert curved info className="w-full">
                    <i className="fas fa-check-circle mr-2"></i>
                    {_('Success')}
                  </Alert>
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Alerts')}
                </h2>
              </div>
            </div>
            <div 
              className="block basis-1/2 md:basis-1/3 text-center cursor-pointer"
              onClick={() => router.push('/component/badge')} 
            >
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-black">
                  <Badge success pill className="text-xs my-3 inline-block">99</Badge>
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Badges')}
                </h2>
              </div>
            </div>
            <div 
              className="block basis-1/2 md:basis-1/3 text-center cursor-pointer"
              onClick={() => router.push('/component/button')} 
            >
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-black">
                  <Button error rounded className="my-1">Submit</Button>
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Buttons')}
                </h2>
              </div>
            </div>
            <div 
              className="block basis-1/2 md:basis-1/3 text-center cursor-pointer"
              onClick={() => router.push('/component/loader')} 
            >
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-black">
                  <Loader show={true} />
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Loaders')}
                </h2>
              </div>
            </div>
            <div 
              className="block basis-1/2 md:basis-1/3 text-center cursor-pointer"
              onClick={() => router.push('/component/modal')} 
            >
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-black px-3">
                  <div className="rounded overflow-hidden w-full">
                    <header className="flex items-center bg-b1 p-2">
                      <h3 className="flex-grow uppercase font-semibold">Confirm</h3>
                      <a href="#" className="float-right font-bold">&times;</a>
                    </header>
                    <div className="bg-b2 p-2">Are You Sure?</div>
                  </div>
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Modals')}
                </h2>
              </div>
            </div>
            <div 
              className="block basis-1/2 md:basis-1/3 text-center cursor-pointer"
              onClick={() => router.push('/component/table')} 
            >
              <div className="m-2 border border-b2 rounded overflow-auto">
                <div className="flex items-center justify-center h-[100px] w-full bg-black px-3">
                  <div className="overflow-auto w-full">
                    <Table>
                      <Thead className="bg-b2 text-left text-white !py-2">{_('ID')}</Thead>
                      <Thead className="bg-b2 text-left text-white !py-2">{_('Name')}</Thead>
                      <Trow>
                        <Tcol className="bg-b1 text-left !py-2">1</Tcol>
                        <Tcol className="bg-b1 text-left !py-2">Jacob</Tcol>
                      </Trow>
                    </Table>
                  </div>
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Tables')}
                </h2>
              </div>
            </div>
          </div>
          <h2 className="px-3 flex items-center uppercase font-bold text-xl mt-4">
            <i className="fas fa-lock mr-2" />
            {_('Locked')}
          </h2>
          <p className="px-3 pt-3">
            The following components have are locked until enough there are 
            enough users and demand for such components.
          </p>
          <div className="flex flex-wrap mt-4">
            <div className="block basis-1/2 md:basis-1/3 text-center cursor-pointer">
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-b1 px-3">
                  Unlocks at 2,000 downloads
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Bread Crumbs')}
                </h2>
              </div>
            </div>
            <div className="block basis-1/2 md:basis-1/3 text-center cursor-pointer">
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-b1 px-3">
                  Unlocks at 4,000 downloads
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Pagination')}
                </h2>
              </div>
            </div>
            <div className="block basis-1/2 md:basis-1/3 text-center cursor-pointer">
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-b1 px-3">
                  Unlocks at 6,000 downloads
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Progress Bars')}
                </h2>
              </div>
            </div>
            <div className="block basis-1/2 md:basis-1/3 text-center cursor-pointer">
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-b1 px-3">
                  Unlocks at 8,000 downloads
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Tabs')}
                </h2>
              </div>
            </div>
            <div className="block basis-1/2 md:basis-1/3 text-center cursor-pointer">
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-b1 px-3">
                  Unlocks at 10,000 downloads
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Accordions')}
                </h2>
              </div>
            </div>
            <div className="block basis-1/2 md:basis-1/3 text-center cursor-pointer">
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-b1 px-3">
                  Unlocks at 12,000 downloads
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Tooltips')}
                </h2>
              </div>
            </div>
            <div className="block basis-1/2 md:basis-1/3 text-center cursor-pointer">
              <div className="m-2 border border-b2 rounded overflow-hidden">
                <div className="flex items-center justify-center h-[100px] w-full bg-b1 px-3">
                  Unlocks at 14,000 downloads
                </div>
                <h2 className="my-2 font-semibold text-center uppercase">
                  {_('Toasts')}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutPanel>
  );
}
