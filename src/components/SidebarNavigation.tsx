import { useContext } from 'react';
import SidebarNavigationList from './SidebarNavigationList';
import { AppContext } from '@/contexts/AppContext';
import { ILicense, ILicenseItems } from '@/types/lease';
import { licenseSelectQuery } from '@/queries/LeaseQuery';

const DEFAULT_IMAGE = '/pexels-pixabay-221047.jpg';
function SidebarNavigation() {
  const appContext = useContext(AppContext);
  const q = licenseSelectQuery<ILicenseItems>(1, 50);

  let data: ILicense[] = [];
  if (q.isSuccess) {
    data = q?.data?.data;
  }

  return (
    <div className="border-r border-grey-500 flex-col w-full h-full">
      <div
        className={`h-logoHeight flex bg-cover bg-center object-contain bg-no-repeat`}
        style={{ backgroundImage: `url(${DEFAULT_IMAGE})` }}
      >
        {!appContext?.experimentalUI && (
          <div className="py-4 bg-white/[.7] mb-3 text-cb-text leading-relaxed mt-auto relative z-10 w-full">
            <p className="font-bold text-center text-xs">Managed Products Groups Inc</p>
            <p className="text-center ">
              {data?.filter(i => i.id === appContext.activeLicense)
                .map(i => (<span key={i.id}>{i.label.replace('-', '|')}</span>))
              }
            </p>
          </div>
        )}
      </div>

      <SidebarNavigationList className="pt-3" />      
    </div>
  );
}

export default SidebarNavigation;
