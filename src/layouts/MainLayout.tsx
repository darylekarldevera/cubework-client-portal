import Header from '@/components/Header';
import ErrorMessage from '@/shared/modals/ErrorMessage';
import SidebarProvider from '@/components/providers/SidebarProvider';
import ErrorModalProvider from '@/components/providers/ErrorModalProvider';
import ContentFullWidthWSidebar from './ContentFullWSidebar';
import SidebarMobileMenu from '@/components/SidebarMobileMenu';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';


function MainLayout() {
  return (
    <div className="flex flex-col h-full">
      <ErrorModalProvider>
        <SidebarProvider>
          <ErrorMessage />
          <section>
            <Header />
          </section>
          <ContentFullWidthWSidebar />
          <SidebarMobileMenu />
        </SidebarProvider>
      </ErrorModalProvider>
    </div>
  );
}

export default MainLayout;
