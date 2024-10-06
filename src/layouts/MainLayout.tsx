import Header from '@/components/Header';
import ErrorMessage from '@/shared/modals/ErrorMessage';
import SidebarProvider from '@/components/providers/SidebarProvider';
import ErrorModalProvider from '@/components/providers/ErrorModalProvider';
import ContentFullWidthWSidebar from './ContentFullWSidebar';
import SidebarMobileMenu from '@/components/SidebarMobileMenu';

interface MainLayoutProps {
  isAuthenticated: boolean;
}

function MainLayout({ isAuthenticated }: MainLayoutProps) {
  return (
    <div className="flex flex-col h-full">
      <ErrorModalProvider>
        <SidebarProvider>
          <ErrorMessage />
          <section>
            <Header isAuthenticated={isAuthenticated} />
          </section>
          <ContentFullWidthWSidebar />
          <SidebarMobileMenu />
        </SidebarProvider>
      </ErrorModalProvider>
    </div>
  );
}

export default MainLayout;
