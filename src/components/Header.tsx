import Logo from './Logo';
import ProfilesButtons from './ProfileButtons';
import SidebarBurgerMenu from './SidebarBurgerMenu';

export default function Header() {
  return (
    <div className="header shadow-md">
      <SidebarBurgerMenu  />
      <Logo />
      <ProfilesButtons />
    </div>
  );
}
