import { SidebarContext } from '@/contexts/SidebarContext';
import { useState } from 'react';

interface ISidebarProvider {
  children: React.ReactNode;
}

function SidebarProvider({ children }: ISidebarProvider) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
      <SidebarContext.Consumer>
        {() => children}
      </SidebarContext.Consumer>
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
