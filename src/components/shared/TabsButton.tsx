import { ReactNode } from 'react';
import { TabsTrigger } from '@/components/ui/tabs.tsx';

type TabsButtonProps = {
  children: ReactNode;
  link: string;
};

const TabsButton = ({ children, link }: TabsButtonProps) => {
  return (
    <TabsTrigger
      value={link}
      className="text-xs rounded-none data-[state=active]:border-b-[1.5px] data-[state=active]:border-cw-gray data-[state=active]:shadow-none data-[state=active]:text-cw-green text-cw-green"
    >
      {children}
    </TabsTrigger>
  );
};

export default TabsButton;
