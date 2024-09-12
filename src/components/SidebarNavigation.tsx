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
        style={{ 'backgroundImage': `url(${DEFAULT_IMAGE})` }}
      >
        <div className="py-8 bg-white/[.7] mt-auto mb-5 relative z-10 w-full h-ful">
          <p className="font-bold text-center">Company Name</p>
          <p className="text-center text-sm">Branch name | branch name</p>
        </div>
      </div>

      <div className="flex-grow-3 pt-3">
        {NAVIGATION_ITEMS.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`
              p-3 text-center cursor-pointer hover:text-white flex flex-row items-center group hover:bg-cw-green
              ${
                getCurrentTab(pathname) === item.name 
                  ? 'text-white bg-cw-green' 
                  : 'text-black'
                }  
            `}
          >
            <img
              alt={item.alt}
              src={item.img.blackIcon}
              className={`group-hover:hidden
                ${
                  getCurrentTab(pathname) === item.name 
                    ? 'hidden group-hover:block' 
                    : 'block'
                  }  
              `}
            />
            <img
              alt={item.alt}
              src={item.img.whiteIcon}
              className={`group-hover:block
                ${
                  getCurrentTab(pathname) === item.name 
                    ? 'block group-hover:block' 
                    : 'hidden'
                }  
              `}
            />
            <p className="w-full text-start pl-7">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SidebarNavigation;
