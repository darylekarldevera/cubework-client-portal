import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { Link } from 'react-router-dom';

function VerifyPassword() {
  return (
    <div className="shadow-2xl rounded-[6px] w-80 h-fit max-w-full max-h-full flex flex-col justify-between px-5 pt-5 pb-1 bg-white/85">
      <p className=" font-bold text-[16px] mb-[24px]">Reset Password</p>
      <form className="flex flex-col w-full gap-[24px]">
        <div className="flex flex-col  gap-4 w-full">
          <ShadCNLabel className="text-xs text-[#212529]">
            New Password<span className="text-red-500">*</span>
          </ShadCNLabel>
          <input
            type="Password"
            className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
          />
        </div>
        <div className="flex flex-col  gap-4 w-full">
          <ShadCNLabel className="text-xs text-[#212529]">
            Confirm Password<span className="text-red-500">*</span>
          </ShadCNLabel>
          <input
            type="Password"
            className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
          />
        </div>
        <Link
          to={'/login'}
          className="bg-[#4DB850] font-bold hover:bg-[#4FA04C] text-[11px] leading-relaxed text-white rounded-[6px] py-1.5 w-3/4 text-center self-center"
        >
          Reset
        </Link>
      </form>
      <span className="italic text-[10px] pt-11 pb-1 text-red-500">* - Required fields</span>
    </div>
  );
}

export default VerifyPassword;
