import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import AvatarLogo from '@/assets/avatar-icon.svg';
import ArrowDown from '@/assets/arrow-down-icon.svg';
import NotifIcon from '@/assets/notif-icon.svg';
import BadgeComponent from '@/components/header/BadgeComponent.tsx';

export default function ProfilesButtons() {
  return (
    <div className="flex flex-row gap-4 items-center mr-[12px]">
      <div className="notif-icon-wrapper">
        <BadgeComponent number={5} />
        <img src={NotifIcon} className="notif-icon" alt="" />
      </div>
      <button className="profile-wrapper">
        <Avatar>
          <AvatarImage src={AvatarLogo} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="arrow-down-wrapper">
          <img src={ArrowDown} alt="" />
        </div>
      </button>
    </div>
  );
}
