import { useContext } from 'react';
import SidebarNavigationList from './SidebarNavigationList';
import { AppContext } from '@/contexts/AppContext';

const DEFAULT_IMAGE = '/pexels-pixabay-221047.jpg';
function SidebarNavigation() {
  const appContext = useContext(AppContext);

  return (
    <div className="border-r border-grey-500 flex-col w-full h-full">
      <div
        className={`h-logoHeight flex bg-cover bg-center object-contain bg-no-repeat`}
        style={{ backgroundImage: `url(${DEFAULT_IMAGE})` }}
      >
        ({appContext.experimentalUI <= 0 && (
          <div className="py-4 bg-white/[.7] mb-3 text-cb-text leading-relaxed mt-auto relative z-10 w-full">
            <p className="font-bold text-center text-xs">Managed Products Groups Inc</p>
            <p className="text-center ">TX Framers Branch | Farmers Branch</p>
          </div>
        )})
      </div>

      <SidebarNavigationList className="pt-3" />      
    </div>
  );
}

export default SidebarNavigation;
