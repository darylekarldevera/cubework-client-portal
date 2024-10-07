import Header from '@/components/Header.tsx';
import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className="main flex flex-col w-screen h-full">
      <section className="h-full flex flex-col">
        <Header isAuthenticated={authContext.isAuthenticated} />
        <div className="flex flex-col justify-center items-center h-full w-full ">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default PublicLayout;
