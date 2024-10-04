import { useContext } from 'react';
import Logo from './Logo';
import ProfilesButtons from './ProfileButtons';
import SidebarBurgerMenu from './SidebarBurgerMenu';
import { AuthContext } from '@/contexts/AuthContext';
import { AppContext } from '@/contexts/AppContext';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import Button from './shared/Button';
import { licenseSelectQuery } from '@/queries/LeaseQuery';
import { ILicense, ILicenseItems } from '@/types/lease';
import { cleanUp } from '@/lib/utils';
import { localStorageKeys } from '@/constants/localStorageKeys';


export default function Header() {
  const authContext = useContext(AuthContext);
  const appContext = useContext(AppContext);

  let data: ILicense[] = [];
  const q = licenseSelectQuery<ILicenseItems>(1, 50);

  if (q.isSuccess) {
    data = q?.data?.data;
  }

  return (
    <div className="header shadow-md bg-white/85 justify-between">
      <SidebarBurgerMenu />
      <Logo />

      {((authContext.isAuthenticated && appContext.experimentalUI)
          && appContext.experimentalUI > 0) && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="outline"
              className="!w-auto !bg-transparent !text-cw-charcoal"
            // >{ data && data?.[0]?.label?.replace('-', '|') } <small className="ml-2">▼</small></Button>
            >{ data && data?.filter(i => i.id === appContext.activeLicense)?.[0]?.label } <small className="ml-2">▼</small></Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-full bg-white">
          {data && data.map((i, indx) => (
            <DropdownMenuCheckboxItem
              checked={i.id === appContext.activeLicense}
              onCheckedChange={() => { appContext.setActiveLicense(i.id) }}
              key={i.id}
              className="text-[11px]"
            >
              {i.label}
            </DropdownMenuCheckboxItem>
          ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      <div className="flex flex-row gap-2">
        {authContext.isAuthenticated && <ProfilesButtons />}
        {authContext.isAuthenticated && (
          <button className="text-sm" onClick={() => authContext.setIsAuthenticated(false)}>
            Logout
          </button>
        )}

        <button
          onClick={() => {
            authContext.setIsAuthenticated(!authContext.isAuthenticated);
          }}
          className="text-sm bg-blue-600 text-white px-2 rounded-sm"
        >
          { authContext.isAuthenticated ? 'Logged' : 'Logged out' }
        </button>

      </div>
    </div>
  );
}
