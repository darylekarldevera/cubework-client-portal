import { ReactNode } from "react";
import SidebarNavigation from "@/components/SidebarNavigation";

interface IContentFullWidthWSidebarProps {
  sidebar?: ReactNode;
  content?: ReactNode;
}

export default function ContentFullWidthWSidebar({ sidebar, content }: IContentFullWidthWSidebarProps) {
  return (
    <div className="layout--full-width-w-sidebar flex flex-col md:flex-row h-[100%] overflow-hidden">
      <div className="w-[15vw]">{sidebar ?? <SidebarNavigation />}</div>
      <div className="h-[calc(100vh-49px)] overflow-auto w-full">{content}</div>
    </div>
  );
}
