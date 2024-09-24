import { Link, useLocation } from 'react-router-dom';
import NAVIGATION_ITEMS from '@/constants/navigationItem';
import getCurrentTab from '@/lib/getCurrentTab';

const DEFAULT_IMAGE = '/pexels-pixabay-221047.jpg';

function SidebarNavigation() {
  const { pathname } = useLocation();

  return (
    <div className="border-r border-grey-500 flex-col w-full h-full">
      <div
        className={`h-logoHeight flex bg-cover bg-center object-contain bg-no-repeat`}
        style={{ backgroundImage: `url(${DEFAULT_IMAGE})` }}
      >
        <div className="py-4 bg-white/[.7] mb-3 text-[11px] leading-relaxed mt-auto relative z-10 w-full">
          <p className="font-bold text-center text-xs">Managed Products Groups Inc</p>
          <p className="text-center ">TX Framers Branch | Farmers Branch</p>
        </div>
      </div>

      <div className="flex-grow-3 pt-3">
        {NAVIGATION_ITEMS.map((item, index) => (
          <Link
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
    </div>
  );
}

export default SidebarNavigation;
