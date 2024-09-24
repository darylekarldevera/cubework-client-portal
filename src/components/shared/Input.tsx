import { Input as ShadCNInput } from '@/components/ui/input';
import { Label as ShadCNLabel } from '@/components/ui/label';
import { useState } from 'react';

type InputProps = {
  value?: string;
};

const Input = ({ value }: InputProps) => {
  const [temp, setTemp] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTemp(e.target.value);

  return (
    <div className="flex flex-col gap-[2px]">
      <ShadCNInput
        className="h-[30px] text-[11px] leading-relaxed w-full bg-white border border-[#717171] text-black rounded-[6px]"
        value={value}
        onChange={handleChange}
      />
      {temp === '' ? (
        <ShadCNLabel className="pl-1 text-[10px] leading-relaxed text-red-500">*Required</ShadCNLabel>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input;
