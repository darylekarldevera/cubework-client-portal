import { useContext } from 'react';
import getCurrentTab from '@/lib/getCurrentTab';
import { SidebarContext } from '@/contexts/SidebarContext';
import NAVIGATION_ITEMS from '@/constants/navigationItem';
import { Link, useLocation } from 'react-router-dom';

interface ISidebarNavigationList {
  className?: string;
}

function SidebarNavigationList({ className }: ISidebarNavigationList) {
  const { pathname } = useLocation();
  const { setOpenSidebar } = useContext(SidebarContext);
  
  const isCurrentTab = (pathname: string, tab: string) => getCurrentTab(pathname) === tab;

  return (
    <div className={`flex-grow-3 pt-3 ${className}`} onClick={() => setOpenSidebar((prev: boolean) => !prev)}>
      {NAVIGATION_ITEMS.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`
            pl-7 p-3 text-center cursor-pointer transition-all duration-100 hover:text-white flex flex-row items-center group hover:bg-cw-green
            ${isCurrentTab(pathname, item.name) ? 'text-white bg-cw-green' : 'text-black'}  
          `}
        >
          <img
            alt={item.alt}
            src={item.img.blackIcon}
            className={`group-hover:hidden h-4
                ${isCurrentTab(pathname, item.name) ? 'hidden group-hover:block' : 'block'}  
              `}
          />
          <img
            alt={item.alt}
            src={item.img.whiteIcon}
            className={`group-hover:block h-4
              ${isCurrentTab(pathname, item.name) ? 'block group-hover:block 4' : 'hidden'}  
            `}
          />
          <p className="w-full text-start pl-5 font-bold text-cb-text leading-relaxed">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default SidebarNavigationList;
