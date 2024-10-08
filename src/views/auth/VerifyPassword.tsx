import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { verifySchemaProps } from '@/components/zod/schema.types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { verifySchema } from '@/components/zod/schema.ts';
import { useState } from 'react';

function VerifyPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<verifySchemaProps>({
    resolver: zodResolver(verifySchema),
  });

  const submitForm = () => {
    console.log('submitForm');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login', { relative: 'path' });
    }, 2000);
  };
  return (
    <div className="shadow-2xl rounded-[6px] w-80 h-fit max-w-full max-h-full flex flex-col justify-between px-5 pt-5 pb-1 bg-white/85">
      <p className=" font-bold text-[16px] mb-[24px]">Reset Password</p>
      <form className="flex flex-col w-full gap-[24px]" onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col  gap-4 w-full">
          <div className="flex flex-row justify-between gap-5">
            <ShadCNLabel className="text-xs text-[#212529]">
              New Password<span className="text-red-500">*</span>
            </ShadCNLabel>
            {errors?.newPassword && <span className="text-xs text-red-500">{errors.newPassword.message}</span>}
          </div>
          <input
            type="Password"
            className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
            {...register('newPassword')}
          />
        </div>
        <div className="flex flex-col  gap-4 w-full">
          <div className="flex flex-row justify-between gap-5">
            <ShadCNLabel className="text-xs text-[#212529]">
              Confirm Password<span className="text-red-500">*</span>
            </ShadCNLabel>
            {errors?.confirmPassword && <span className="text-xs text-red-500">{errors.confirmPassword.message}</span>}
          </div>
          <input
            type="Password"
            className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
            {...register('confirmPassword')}
          />
        </div>
        <button
          disabled={isLoading}
          className="bg-[#4DB850] font-bold hover:bg-[#4FA04C] text-[11px] leading-relaxed text-white rounded-[6px] py-1.5 w-3/4 text-center self-center"
          type="submit"
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {errors?.root && <span className="text-xs text-red-500">{errors.root.message}</span>}
      <span className="italic text-[10px] pt-11 pb-1 text-red-500">* - Required fields</span>
    </div>
  );
}

export default VerifyPassword;
