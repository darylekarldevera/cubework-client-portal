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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.tsx';
import { Link } from 'react-router-dom';

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
          <DropdownMenuContent className="bg-white text-xs px-3">
            <Accordion type="single" collapsible className="w-[250px]">
              <AccordionItem value="item-1">
                <AccordionTrigger>Switch Location</AccordionTrigger>
                <AccordionContent>
                  <DropdownMenuItem className="text-xs">CA Fresco - Unis Transportation</DropdownMenuItem>
                  <DropdownMenuItem className="text-xs">CA Wiegman - Unis Transportation</DropdownMenuItem>
                  <DropdownMenuItem className="text-xs">CA West Sacramento - Unis Transportation</DropdownMenuItem>
                  <DropdownMenuItem className="text-xs">
                    <Link to={'.' + '/license-select'}>View All Locations</Link>
                  </DropdownMenuItem>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

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
