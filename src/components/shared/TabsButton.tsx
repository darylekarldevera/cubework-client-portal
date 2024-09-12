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
      className="text-xs data-[state=active]:border-b-[1.5px] data-[state=active]:border-[#59BA56] data-[state=active]:shadow-none data-[state=active]:text-[#59BA56] text-[#59BA56]"
    >
      {children}
    </TabsTrigger>
  );
};

export default TabsButton;
