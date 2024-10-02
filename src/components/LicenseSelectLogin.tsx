import LicenseSelect from './LicenseSelect';

function LicenseSelectLogin() {
  return (
    <div className="shadow-2xl rounded-[6px] py-8 h-fit max-w-full max-h-full flex flex-col px-5 pt-5 pb-12 bg-white/85">
      <LicenseSelect dropShadow={false} variant='login' />
    </div>
  );
}

export default LicenseSelectLogin;
