import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import ContentFullWidthWSidebar from './ContentFullWSidebar';

function MainLayout() {
  return (<div className="main grid h-full">
    <section>
      <Header />
    </section>
    <section>
      <ContentFullWidthWSidebar content={
        <Outlet />
      } />
    </section>
  </div>);
}

export default MainLayout
