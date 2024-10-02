import { useContext } from 'react';
import Logo from './Logo';
import ProfilesButtons from './ProfileButtons';
import SidebarBurgerMenu from './SidebarBurgerMenu';
import { AuthContext } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';


export default function Header() {
  const authContext = useContext(AuthContext);
  return (
    <div className="header shadow-md bg-white/85">
      <SidebarBurgerMenu />
      <Logo />
      {authContext.isAuthenticated && <ProfilesButtons />}
      {/* {<ProfilesButtons />} */}
      <button
        onClick={() => {authContext.setIsAuthenticated(!authContext.isAuthenticated)}}
      >
        <div className="text-sm">
          { authContext.isAuthenticated ? '-- Logged' : '-- Logout' }
        </div>
        <div className="text-sm">
          <Link to={'..' + '/login'} relative="path">
            Logout
          </Link>
        </div>
      </button>
    </div>
  );
}
