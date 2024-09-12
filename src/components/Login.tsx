import { Input } from './ui/input';

function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border border-solid border-[#000000] rounded-md w-80 h-[27rem] max-w-[100%] max-h-[100%] flex flex-col justify-around p-5">
        <p className="border-b border-solid border-[#000000] font-bold">Login into your account</p>
        <form className="flex flex-col justify-between h-[50%] w-full">
          <label>Email</label>
          <Input type="email" placeholder="Enter your email" className="rounded-md" />
          <label>Password</label>
          <Input type="password" placeholder="Enter your password" className="rounded-md" />
        </form>
        <div className="flex flex-col">
          <p className="font-bold text-sm">Forgot Password</p>
          <button className="bg-[#59BA56] w-[80%] h-11 self-center mt-8 rounded-md text-white font-bold cursor-pointer">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login
