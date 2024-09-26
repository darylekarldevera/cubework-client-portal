import { useContext } from 'react'
import { SidebarContext } from '@/contexts/SidebarContext';

function SidebarBurgerMenu() {
  const { openSidebar, setOpenSidebar } = useContext(SidebarContext);
  const genericHamburgerLine = `h-1 w-6 m-[1.8px] sm:m-[3.5px] rounded-full bg-cw-green transition ease transform duration-300`;

  return (
    <button
      onClick={() => setOpenSidebar(() => !openSidebar)}
      className="flex flex-col h-8 w-8 rounded justify-center items-center group mr-5 relative z-20 sm:block md:hidden"
    >
      <div
        className={`${genericHamburgerLine} ${
          openSidebar ? 'rotate-45 translate-y-2 group-hover:opacity-100' : 'group-hover:opacity-100'
        }`}
      />
      <div className={`${genericHamburgerLine} ${openSidebar ? 'opacity-0' : 'group-hover:opacity-100'}`} />
      <div
        className={`${genericHamburgerLine} ${
          openSidebar ? '-rotate-45 -translate-y-2 group-hover:opacity-100' : 'group-hover:opacity-100'
        }`}
      />
    </button>
  );
}

export default SidebarBurgerMenu
