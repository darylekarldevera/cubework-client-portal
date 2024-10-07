import { Label as ShadCNLabel } from '@/components/ui/label.tsx';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/components/zod/schema.ts';
import { loginSchemaProps } from '@/components/zod/schema.types.ts';

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaProps>({
    resolver: zodResolver(loginSchema),
  });

  const submitForm = () => {
    console.log('submitForm');
  };

  return (
    <div className="shadow-2xl rounded-[6px] w-80 h-fit max-w-full max-h-full flex flex-col justify-between px-5 pt-5 pb-1 bg-white/85">
      <p className="font-bold text-[16px] mb-[24px]">Login into your account</p>
      <form className="flex flex-col w-full gap-[24px]" onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col  gap-4 w-full">
          <div className="flex flex-row justify-between gap-5">
            <ShadCNLabel className="text-xs text-[#212529]">
              Email Address<span className="text-red-500">*</span>
            </ShadCNLabel>
            {errors?.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
          </div>
          <input
            type="text"
            className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
            {...register('email')}
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-row justify-between gap-5">
            <ShadCNLabel className="text-xs text-[#212529]">
              Password <span className="text-red-500">*</span>
            </ShadCNLabel>
            {errors?.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
          </div>
          <input
            type="Password"
            className="h-[30px] px-3 text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
            {...register('password')}
          />
        </div>

        <button
          type="submit"
          className="bg-[#4DB850] font-bold hover:bg-[#4FA04C] text-[11px] leading-relaxed text-white rounded-[6px] py-1.5 w-3/4 text-center self-center"
        >
          Login my account
        </button>
        <Link to={'/forgot-password'}>
          <p className="font-bold text-xs flex justify-center">
            <span className="text-center block border-b border-black">Forgot Password</span>
          </p>
        </Link>
      </form>
      <span className="italic text-[10px] pt-11 pb-1 text-red-500">* - Required fields</span>
    </div>
  );
}

export default Login;
