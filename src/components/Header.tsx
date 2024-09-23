import Logo from './Logo';
import ProfilesButtons from './ProfileButtons';

export default function Header() {
  return (
    <div className="header shadow-md">
      <Logo />
      <ProfilesButtons />
    </div>
  );
}
