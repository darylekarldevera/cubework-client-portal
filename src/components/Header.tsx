import Logo from './Logo';
import ProfilesButtons from './ProfileButtons';
import SidebarBurgerMenu from './SidebarBurgerMenu';

interface IHeaderProps {
  isAuthenticated: boolean;
}

export default function Header({ isAuthenticated }: IHeaderProps) {
  // const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="header shadow-md">
      <SidebarBurgerMenu  />
      <Logo />
      {isAuthenticated ?? <ProfilesButtons />}
    </div>
  );
}
