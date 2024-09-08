import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import ContentFullWidthWSidebar from './ContentFullWSidebar';

function MainLayout() {
  return (<div className="main flex flex-col h-full">
      <section className="h-12">
          <Header />
      </section>
      <section className="flex-grow">
          <ContentFullWidthWSidebar content={
            <Outlet />
          } />
      </section>
  </div>);
}

export default MainLayout
