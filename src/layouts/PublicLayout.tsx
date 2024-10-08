import Header from '@/components/Header.tsx';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className="main flex flex-col w-screen h-full">
      <section className="h-full flex flex-col">
        <Header />
        <div className="flex flex-col justify-center items-center h-full w-full ">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default PublicLayout;
