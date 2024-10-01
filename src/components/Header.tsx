import Logo from './Logo';
import ProfilesButtons from './ProfileButtons';
import SidebarBurgerMenu from './SidebarBurgerMenu';

interface IHeaderProps {
  isAuthenticated: boolean;
}

export default function Header({ isAuthenticated }: IHeaderProps) {
  return (
    <div className="header shadow-md bg-white/85">
      <SidebarBurgerMenu />
      <Logo />
      {isAuthenticated && <ProfilesButtons />}
    </div>
  );
}
