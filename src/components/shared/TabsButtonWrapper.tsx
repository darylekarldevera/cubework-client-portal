import { ReactNode } from 'react';
import { TabsList } from '@radix-ui/react-tabs';

type TabsButtonWrapper = {
  children: ReactNode;
};

const TabsButtonWrapper = ({ children }: TabsButtonWrapper) => {
  return <TabsList className="grid w-full grid-cols-2 border-b border-[#ECECEC]">{children}</TabsList>;
};

export default TabsButtonWrapper;
