import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import Input from '@/components/shared/Input.tsx';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="bg-white/85 shadow-2xl rounded-[6px] w-80 h-fit max-w-full max-h-full flex flex-col px-5 pt-5 pb-12">
      <p className=" font-bold text-[16px] mb-[24px]">Forgot Password</p>
      <form className="flex flex-col h-1/2 w-full gap-[24px]">
        <div className="flex flex-col  gap-4 w-full">
          <ShadCNLabel className="text-xs text-[#212529]">Email</ShadCNLabel>
          <Input />
        </div>
        <Link
          to={'/reset-password'}
          className="bg-[#4DB850] font-bold hover:bg-[#4FA04C] text-[11px] leading-relaxed text-white rounded-[6px] py-1.5 w-3/4 text-center self-center"
        >
          Submit
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
