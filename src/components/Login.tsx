import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import Input from '@/components/shared/Input.tsx';
import { Link } from 'react-router-dom';

function Login() {
  // const navigate = useNavigate();
  const handleLogin = () => {
    // navigate('/home');
  };
 
  return (
    <div className="border border-black rounded-[6px] w-80 h-fit max-w-full max-h-full flex flex-col px-5 pt-5 pb-12">
      <p className="border-b border-black font-bold text-[16px] mb-[24px]">Login into your account</p>
      <form className="flex flex-col w-full gap-[24px]">
        <div className="flex flex-col  gap-4 w-full">
          <ShadCNLabel className="text-xs text-[#212529]">Email</ShadCNLabel>
          <Input />
        </div>
        <div className="flex flex-col  gap-4 w-full">
          <ShadCNLabel className="text-xs text-[#212529]">Password</ShadCNLabel>
          <Input />
        </div>
        <Link to={'/forgot-password'}>
          <p className="font-bold text-xs">Forgot Password</p>
        </Link>
        <button
          className="bg-[#4DB850] font-bold hover:bg-[#4FA04C] text-[11px] leading-relaxed text-white rounded-[6px] py-1.5 w-3/4 text-center self-center"
          onClick={handleLogin}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default Login;
