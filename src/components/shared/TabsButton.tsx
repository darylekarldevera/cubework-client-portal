import { ReactNode } from 'react';

type TabsButtonProps = {
  children?: ReactNode;
  active?: boolean;
};

const TabsButton = ({ children, active }: TabsButtonProps) => {
  return (
    <div
      className={`text-xs rounded-none ${active ? 'border-b-[1.5px] border-cw-green shadow-none text-cw-green' : ''} py-1 text-center text-cw-green`}
    >
      {children}
    </div>
  );
};

export default TabsButton;
