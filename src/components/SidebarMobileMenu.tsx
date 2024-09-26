import { useContext } from 'react'
import { SidebarContext } from '@/contexts/SidebarContext';
import SidebarNavigationList from './SidebarNavigationList';

function SidebarMobileMenu() {
  const { openSidebar, setOpenSidebar } = useContext(SidebarContext);

  if (!openSidebar) return null;

  return (
    <div className="absolute h-screen w-screen bg-black/55 z-10 flex sm:block md:hidden">
      <div className="w-full h-full bg-white flex flex-col">
        <SidebarNavigationList className="mt-auto h-[90%]" />
      </div>
      <div className="w-full h-full relative z-11 cursor-pointer" onClick={() => setOpenSidebar(!openSidebar)} />
    </div>
  );
}

export default SidebarMobileMenu
