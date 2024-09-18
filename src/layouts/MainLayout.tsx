import Header from '@/components/Header';
import ContentFullWidthWSidebar from './ContentFullWSidebar';

function MainLayout() {
  return (
    <div className="main flex flex-col h-full">
      <section>
        <Header />
      </section>
      <ContentFullWidthWSidebar />
    </div>
  );
}

export default MainLayout;
