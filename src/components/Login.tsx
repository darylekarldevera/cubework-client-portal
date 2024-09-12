import { Input } from './ui/input';

function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border border-solid border border-black rounded-md w-80 h-[27rem] max-w-full max-h-full flex flex-col justify-around p-5">
        <p className="border-b border-solid border border-black font-bold">Login into your account</p>
        <form className="flex flex-col justify-between h-1/2 w-full">
          <label>Email</label>
          <Input type="email" placeholder="Enter your email" className="rounded-md" />
          <label>Password</label>
          <Input type="password" placeholder="Enter your password" className="rounded-md" />
        </form>
        <div className="flex flex-col">
          <p className="font-bold text-sm">Forgot Password</p>
          <button className="bg-[#59BA56] w-4/5 h-11 self-center mt-8 rounded-md text-white font-bold cursor-pointer">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login
