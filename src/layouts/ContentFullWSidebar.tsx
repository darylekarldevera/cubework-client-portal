import { ReactNode } from "react";
import SidebarNavigation from "@/components/SidebarNavigation";
import WrappedContent from "@/components/WrappedContent";

interface IContentFullWidthWSidebarProps {
  sidebar?: ReactNode;
  content?: ReactNode;
}

export default function ContentFullWidthWSidebar({ sidebar, content }: IContentFullWidthWSidebarProps) {
  return (
    <div className="layout--full-width-w-sidebar flex flex-col md:flex-row h-[100%] overflow-hidden">
      <div className="w-sidebar">{sidebar ?? <SidebarNavigation />}</div>
      <div className="flex-grow-0 md:flex-grow h-[100%]">
        <WrappedContent className="pb-[5%]">
          {content}
        </WrappedContent>
      </div>
    </div>
  );
}
