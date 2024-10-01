import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import Input from '@/components/shared/Input.tsx';
import { Link } from 'react-router-dom';
import LicenseSelect from './LicenseSelect';

function LicenseSelectLogin() {
  // const navigate = useNavigate();
  const handleLogin = () => {
    // navigate('/home');
  };

  return (
    <div className="shadow-2xl rounded-[6px] py-8 h-fit max-w-full max-h-full flex flex-col px-5 pt-5 pb-12 bg-white/85">
      {/* <p className="font-bold text-[16px] mb-[24px]">Login into your account</p> */}
      <LicenseSelect />
    </div>
  );
}

export default LicenseSelectLogin;
