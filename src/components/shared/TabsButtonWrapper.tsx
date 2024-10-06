import { ReactNode } from 'react';

type TabsButtonWrapper = {
  children: ReactNode;
};

const TabsButtonWrapper = ({ children }: TabsButtonWrapper) => {
  return <div className="text-[10px] flex w-full gap-1  border-b border-cw-offwhite mb-3">{children}</div>;
};

export default TabsButtonWrapper;
