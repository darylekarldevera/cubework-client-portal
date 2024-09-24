import { Link, useLocation } from 'react-router-dom';
import getCurrentTab from '@/lib/getCurrentTab';
import NAVIGATION_ITEMS from '@/constants/navigationItem';
import { SidebarContext } from '@/contexts/SidebarContext';
import { useContext } from 'react';

interface ISidebarNavigationList {
  className?: string;
}

function SidebarNavigationList({ className }: ISidebarNavigationList) {
  const { setOpenSidebar } = useContext(SidebarContext);

  const { pathname } = useLocation();
  return (
    <div className={`flex-grow-3 ${className}`}>
      {NAVIGATION_ITEMS.map((item, index) => (
        <Link
          onClick={() => setOpenSidebar((prev: boolean) => !prev)}
          key={index}
          to={item.path}
          className={`
              pl-7 p-3 text-center cursor-pointer transition-all duration-100 hover:text-white flex flex-row items-center group hover:bg-cw-green
              ${getCurrentTab(pathname) === item.name ? 'text-white bg-cw-green' : 'text-black'}  
            `}
        >
          <img
            alt={item.alt}
            src={item.img.blackIcon}
            className={`group-hover:hidden h-4
                ${getCurrentTab(pathname) === item.name ? 'hidden group-hover:block' : 'block'}  
              `}
          />
          <img
            alt={item.alt}
            src={item.img.whiteIcon}
            className={`group-hover:block h-4
                ${getCurrentTab(pathname) === item.name ? 'block group-hover:block 4' : 'hidden'}  
              `}
          />
          <p className="w-full text-start pl-5 font-bold text-[11px] leading-relaxed">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default SidebarNavigationList
