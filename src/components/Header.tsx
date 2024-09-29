import Logo from './Logo';
import ProfilesButtons from './ProfileButtons';

interface IHeaderProps {
  isAuthenticated: boolean;
}

export default function Header({ isAuthenticated }: IHeaderProps) {
  // const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="header shadow-md">
      <Logo />
      {isAuthenticated ?? <ProfilesButtons />}
    </div>
  );
}
