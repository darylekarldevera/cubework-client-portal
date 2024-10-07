import { ReactNode } from 'react';
import { DialogTrigger } from '@/components/ui/dialog.tsx';

type ButtonProps = {
  children: ReactNode;
  variant?: string;
  onClick?: () => void;
  className?: string;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
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

const DialogButton = ({ children, variant = 'primary', onClick, className, isDisabled, type }: ButtonProps) => {
  const color =
    variant === 'destructive'
      ? variantObject.destructive
      : variant === 'secondary'
        ? variantObject.secondary
        : variant === 'outlined'
          ? variantObject.outlined
          : variant === 'outlined-black'
            ? variantObject['outlined-black']
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
  const textColor =
    variant === 'destructive'
      ? 'text-white'
      : variant === 'outlined-black'
        ? 'text-black'
        : variant === 'outlined'
          ? 'text-[#59BA56]'
          : variant === 'secondary'
            ? 'text-[#717171]'
            : 'text-white';
  const borderColor =
    variant === 'secondary'
      ? ' border-[#717171]'
      : variant === 'outlined'
        ? ' border-[#59BA56]'
        : variant === 'outlined-black'
          ? 'border-black'
          : '';
  return (
    <DialogTrigger
      disabled={isDisabled && false}
      onClick={onClick}
      type={type}
      className={`text-[11px] font-semibold leading-relaxed  border rounded-[6px]  h-[35px] ${textColor} ${borderColor} ${darkHover} ${className}
       ${color} ${children === 'Setup Auto Pay' ? ' w-[120px]' : variant === 'outlined' ? 'w-[150px]' : variant === 'w-full' ? 'w-3/4' : 'px-[30px]'}`}
    >
      {children}
    </DialogTrigger>
  );
};

export default DialogButton;
