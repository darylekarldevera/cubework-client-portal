import { Button as ShadCNButton } from '@/components/ui/button';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: string;
  onClick?: () => void;
};

const variantObject = {
  primary: 'bg-[#4DB850]',
  secondary: 'bg-[#FFFFFF]',
  destructive: 'bg-[#FF3B30]',
  outlined: 'bg-white',
  'outlined-black': 'bg-white',
};

const darkObject = {
  primary: 'hover:bg-[#4FA04C]',
  secondary: 'hover:bg-[#F3F3F3]',
  destructive: 'hover:bg-[#DF3329]',
  outlined: 'hover:bg-[#EEEEEE]',
  'outlined-black': 'hover:bg-[#EEEEEE]',
};

const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  const color =
    variant === 'destructive'
      ? variantObject.destructive
      : variant === 'secondary'
        ? variantObject.secondary
        : variant === 'outlined'
          ? variantObject.outlined
          : variant === 'outlined-black'
            ? variantObject.outlined
            : variantObject.primary;
  const darkHover =
    variant === 'destructive'
      ? darkObject.destructive
      : variant === 'secondary'
        ? darkObject.secondary
        : variant === 'outlined'
          ? darkObject.outlined
          : variant === 'outlined-black'
            ? darkObject['outlined-black']
            : darkObject.primary;
  return (
    // TODO: Check on why the text-cb-text is not working
    <ShadCNButton
      onClick={onClick}
      type="submit"
      className={`text-[11px] leading-relaxed   text-white border rounded-[6px]  h-[35px] ${darkHover}
       ${color} ${variant === 'secondary' ? ' border-cw-darkgray text-cw-darkgray' : variant === 'outlined' ? ' border-cw-gray text-cw-green ' : variant === 'outlined-black' ? 'border-black text-black' : ''} ${children === 'Setup Auto Pay' ? ' w-[120px]' : variant === 'outlined' ? 'w-[150px]' : 'px-[37px] w-[100px]'}`}
    >
      {children}
    </ShadCNButton>
  );
};

export default Button;
