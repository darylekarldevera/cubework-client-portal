import { ReactNode } from 'react';

type TabsButtonProps = {
  children?: ReactNode;
  active?: boolean;
};

const TabsButton = ({ children, active }: TabsButtonProps) => {
  return (
    <div
      className={`text-xs rounded-none ${active ? 'border-b-[1.5px] border-[#59BA56] shadow-none text-[#59BA56]' : ''} py-1 text-center text-[#59BA56]`}
    >
      {children}
    </div>
  );
};

export default TabsButton;
