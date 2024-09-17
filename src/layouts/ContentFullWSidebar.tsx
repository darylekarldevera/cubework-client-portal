import { ReactNode } from 'react';
import SidebarNavigation from '@/components/SidebarNavigation';
import WrappedContent from '@/components/WrappedContent';

interface IContentFullWidthWSidebarProps {
  sidebar?: ReactNode;
  content?: ReactNode;
}

export default function ContentFullWidthWSidebar({ sidebar, content }: IContentFullWidthWSidebarProps) {
  return (
    <div
      className="layout--full-width-w-sidebar grid grid-cols-2 overflow-hidden h-full"
      style={{
        gridTemplateColumns: '240px 1fr',
      }}
    >
      <div className="w-sidebar xxs:hidden md:block">{sidebar ?? <SidebarNavigation />}</div>
      <div className="overflow-hidden">
        <WrappedContent className="py-8  h-[calc(100vh-55px)] overflow-auto">{content}</WrappedContent>
      </div>
    </div>
  );
}
