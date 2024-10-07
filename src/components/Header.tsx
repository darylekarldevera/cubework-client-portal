import { useContext } from 'react';
import Logo from './Logo';
import ProfilesButtons from './ProfileButtons';
import SidebarBurgerMenu from './SidebarBurgerMenu';
import { AuthContext } from '@/contexts/AuthContext';
import { AppContext } from '@/contexts/AppContext';
import LicenseSelectorDropdown from './header/LicenseSelectorDropdown';


export default function Header() {
  const authContext = useContext(AuthContext);
  const appContext = useContext(AppContext);

  return (
    <div className="header shadow-md bg-white/85 justify-between">
      <SidebarBurgerMenu />
      <Logo />

      <div className="flex flex-row gap-2">
        {((authContext.isAuthenticated
          && appContext.experimentalUI)
          && appContext.experimentalUI > 0) && (
            <LicenseSelectorDropdown />
        )}

        {authContext.isAuthenticated && <ProfilesButtons />}
        {authContext.isAuthenticated && (
          <button
            className="text-sm"
            onClick={ () => authContext.setIsAuthenticated(false) }
          >
            Logout
          </button>
        )}

      </div>
    </div>
  );
}
