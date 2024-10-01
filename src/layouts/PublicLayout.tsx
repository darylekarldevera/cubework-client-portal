import Header from '@/components/Header.tsx';
import { Outlet } from 'react-router-dom';

interface IPublicLayoutProps {
  isAuthenticated: boolean;
}

const PublicLayout = ({ isAuthenticated }: IPublicLayoutProps) => {
  return (
    <div className="main flex flex-col w-screen h-full">
      <section className="h-full flex flex-col">
        <Header isAuthenticated={isAuthenticated} />
        <div className="flex flex-col justify-center items-center h-full w-full ">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default PublicLayout;
