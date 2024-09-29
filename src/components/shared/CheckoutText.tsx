import { ReactNode } from 'react';

type CheckoutTextProps = {
  children: ReactNode;
};
const CheckoutText = ({ children }: CheckoutTextProps) => {
  return <div className="w-1/2 py-[10px] text-cw-darkgray text-cb-text leading-relaxed font-bold">{children}</div>;
};

export default CheckoutText;
