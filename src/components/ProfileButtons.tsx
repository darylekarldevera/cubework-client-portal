import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import AvatarLogo from '@/assets/avatar-icon.svg';
import ArrowDown from '@/assets/arrow-down-icon.svg';
import NotifIcon from '@/assets/notif-icon.svg';
import BadgeComponent from '@/components/header/BadgeComponent.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext.ts';
import { ILicense, ILicenseItems } from '@/types/lease';
import { licenseSelectQuery } from '@/queries/LeaseQuery';
import { AppContext } from '@/contexts/AppContext';

export default function ProfilesButtons() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const appContext = useContext(AppContext);

  let data: ILicense[] = [];
  const q = licenseSelectQuery<ILicenseItems>(1, 50);

  if (q.isSuccess) {
    data = q?.data?.data;
  }

  return (
    <div className="flex flex-row gap-4 items-center mr-[12px]">
      <div className="notif-icon-wrapper">
        <BadgeComponent number={5} />
        <img src={NotifIcon} className="notif-icon" alt="" />
      </div>
      <div className="profile-wrapper">
        <Avatar>
          <AvatarImage src={AvatarLogo} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <DropdownMenu>
          <DropdownMenuTrigger className="arrow-down-wrapper">
            <img src={ArrowDown} alt="" />
          </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white">
              {!appContext.experimentalUI && (
                data && data.map(i => (
                  <DropdownMenuItem
                    key={i.id}>
                    <button
                      className={`${appContext.activeLicense === i.id && 'font-bold'} text-cb-text`}
                      onClick={() => appContext.setActiveLicense(i.id)}
                    >{i.label}</button>
                  </DropdownMenuItem>
                ))
              )}

              {!appContext.experimentalUI && (
                (<DropdownMenuSeparator />)
              )}

              <DropdownMenuItem
              ><button
                onClick={() => setIsAuthenticated(!isAuthenticated)}
                className="text-cb-text"
              >Logout</button></DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>
      </div>
    </div>
  );
}
