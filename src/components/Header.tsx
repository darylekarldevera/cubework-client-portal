import { useContext } from 'react';
import Logo from './Logo';
import ProfilesButtons from './ProfileButtons';
import SidebarBurgerMenu from './SidebarBurgerMenu';
import { AuthContext } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { AppContext } from '@/contexts/AppContext';


export default function Header() {
  const authContext = useContext(AuthContext);
  const appContext = useContext(AppContext);

  return (
    <div className="header shadow-md bg-white/85 justify-between">
      <SidebarBurgerMenu />
      <Logo />

      {authContext.isAuthenticated
        && appContext.experimentalUI > 0
        && (
        <div className="text-sm border border-slate-300 px-4 py-1 rounded-sm">
          TX Framers Branch | Farmers Branch <small>{/* ▲ */}▼</small>
        </div>
      )}

      <div className="flex flex-row gap-2">
        {authContext.isAuthenticated && <ProfilesButtons />}
        {authContext.isAuthenticated && (
          <button className="text-sm">
            <Link to={'..' + '/login'} relative="path">
              Logout
            </Link>
          </button>
        )}

        <button
          onClick={() => {authContext.setIsAuthenticated(!authContext.isAuthenticated)}}
          className="text-sm bg-blue-600 text-white px-2 rounded-sm"
        >
          { authContext.isAuthenticated ? 'Logged' : 'Logout' }
        </button>

      </div>
    </div>
  );
}
