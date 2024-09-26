import { createContext, Dispatch, SetStateAction } from 'react';

interface ISidebarContext {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<ISidebarContext>({
  openSidebar: false,
  setOpenSidebar: () => {},
});