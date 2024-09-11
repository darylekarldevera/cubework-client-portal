import { Button as ShadCNButton } from '@/components/ui/button';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: string;
};

const variantObject = {
  primary: 'bg-[#4DB850]',
  secondary: 'bg-[#FFFFFF]',
  destructive: 'bg-[#FF3B30]',
};

const darkObject = {
  primary: 'hover:bg-[#4FA04C]',
  secondary: 'hover:bg-[#F3F3F3]',
  destructive: 'hover:bg-[#DF3329]',
};

const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  const color =
    variant === 'destructive'
      ? variantObject.destructive
      : variant === 'secondary'
        ? variantObject.secondary
        : variantObject.primary;
  const darkHover =
    variant === 'destructive'
      ? darkObject.destructive
      : variant === 'secondary'
        ? darkObject.secondary
        : darkObject.primary;
  return (
    <ShadCNButton
      className={`text-[16px] leading-6 font-bold rounded-[32px] px-[37px] ${darkHover}
       ${color} ${variant === 'secondary' ? 'border-2 border-black text-black' : ''}`}
    >
      {children}
    </ShadCNButton>
  );
};

export default Button;
