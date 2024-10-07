import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import AvatarLogo from '@/assets/avatar-icon.png';
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

export default function ProfilesButtons() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
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
          <DropdownMenuContent className="bg-white text-xs">
            <DropdownMenuItem className="text-xs">CA Fresco - Unis Transportation</DropdownMenuItem>
            <DropdownMenuItem className="text-xs">CA Wiegman - Unis Transportation</DropdownMenuItem>
            <DropdownMenuItem className="text-xs">CA West Sacramento - Unis Transportation</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-xs" onClick={() => setIsAuthenticated(!isAuthenticated)}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
