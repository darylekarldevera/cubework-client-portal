import { ReactNode } from 'react';
import SidebarNavigation from '@/components/SidebarNavigation';
import WrappedContent from '@/components/WrappedContent';
import { Outlet } from 'react-router-dom';

interface IContentFullWidthWSidebarProps {
  sidebar?: ReactNode;
  content?: ReactNode;
}

export default function ContentFullWidthWSidebar({ sidebar, content }: IContentFullWidthWSidebarProps) {
  return (
    <div
      className="flex flex-row h-full"
      style={{
        gridTemplateColumns: '240px 1fr',
      }}
    >
      <div className="w-sidebar xxs:hidden md:block">{sidebar ?? <SidebarNavigation />}</div>
      <div className="overflow-hidden xxs:w-screen">
        <WrappedContent>
          <Outlet />
        </WrappedContent>
      </div>
    </div>
  );
}
