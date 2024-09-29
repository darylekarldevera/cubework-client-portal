import { ReactNode } from 'react';

type TabsButtonWrapper = {
  children: ReactNode;
};

const TabsButtonWrapper = ({ children }: TabsButtonWrapper) => {
  return <div className="text-[10px] grid w-full grid-cols-6 border-b border-cw-offwhite mb-3">{children}</div>;
  // return <div className="text-[10px] grid w-full grid-cols-6 border border-red-500 ">{children}</div>;
};

export default TabsButtonWrapper;
