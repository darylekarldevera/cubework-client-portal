import { Input as ShadCNInput } from '@/components/ui/input';

type InputProps = {
  value?: string;
};

const Input = ({ value }: InputProps) => {
  return (
    <ShadCNInput
      className="h-[30px] text-cb-text leading-relaxed w-full bg-white border border-cw-darkgray text-black rounded-[6px]"
      value={value}
    />
  );
};

export default Input;
