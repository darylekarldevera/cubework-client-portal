import { useContext } from 'react';
import { ErrorModalContext } from '@/contexts/ErrorModalContext';

function ErrorMessage() {
  const { showError, setShowError } = useContext(ErrorModalContext);

  if (!showError) return null;

  return (
    <div className="absolute bg-black/[.54] w-full h-full flex justify-center items-center z-50 inset-0">
      <div className="bg-[#D65745] p-4 rounded-lg flex flex-col">
        <h1 className="text-lg font-semibold text-white">Error</h1>
        <p className="text-xs text-white">Something went wrong. Please try again later.</p>
        <button
          className="ml-auto mt-5 py-2 px-5 bg-black text-white text-xs font-medium rounded-sm cursor-pointer"
          onClick={() => setShowError(!showError)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;
