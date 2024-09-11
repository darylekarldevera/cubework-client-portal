import { Link, useLocation } from 'react-router-dom';
import NAVIGATION_ITEMS from '@/constants/navigationItem';
import getCurrentTab from '@/lib/getCurrentTab';

function SidebarNavigation() {
  const { pathname } = useLocation();

  return (
    <div className="xxs:hidden md:flex border-2 border-grey-500 flex-col w-[100%] h-[100%]">
      <div className="h-[25%] flex bg-cover bg-center object-contain bg-no-repeat bg-[url('https://placehold.co/600x400')]">
        <div className="bg-white/[.7] mt-auto mb-2 relative z-10 w-full h-[50%]">
          <p>Company Name</p>
          <p>Branch name | branch name</p>
        </div>
      </div>
      <div className="pb-3 bg-white" />
      <div className="flex-grow-3 border-t-2 border-grey-500">
        {NAVIGATION_ITEMS.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`
              p-3 text-center cursor-pointer hover:text-white flex flex-row items-center group hover:bg-[#59BA56]
              ${
                getCurrentTab(pathname) === item.name 
                  ? 'text-white bg-[#59BA56]' 
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
            <p className="w-[100%] text-start pl-7">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SidebarNavigation;
