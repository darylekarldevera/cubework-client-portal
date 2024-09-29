import { Input as ShadCNInput } from '@/components/ui/input';
import { Label as ShadCNLabel } from '@/components/ui/label';
import { useState } from 'react';

type InputProps = {
  value?: string;
  type?: string;
  required?: boolean;
};

const Input = ({ value, required = true, type = 'text' }: InputProps) => {
  const [temp, setTemp] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTemp(e.target.value);

  return (
    <div className="flex flex-col gap-[2px] w-full">
      <ShadCNInput
        className="h-[30px] text-[11px] leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
        value={value}
        onChange={handleChange}
        type={type}
      />
      {temp === '' && required ? (
        <ShadCNLabel className="pl-1 text-[10px] leading-relaxed text-red-500">*Required</ShadCNLabel>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input;
